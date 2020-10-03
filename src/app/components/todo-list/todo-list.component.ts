import { AfterViewInit, Component } from '@angular/core';
import { Item } from '../../models/Item.interface';
import { yassi, yassit } from 'yassi';

@Component({
  selector: 'yas-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit {

  @yassit('itemList')
  itemList: Item[] = [];

  constructor() {
  }

  ngAfterViewInit(): void {
    yassi.endpoint(this, 'addItem');
  }

  // @endpoint()
  addItem(payload: string) {
    if (!payload) {
      return;
    }
    const {subject, tags} = this.parse(payload);
    const item: Item = {
      subject: subject,
      active: true,
      createdAt: Date.now(),
      labels: tags,
    };
    this.itemList.push(item);
  }

  removeItem(item: Item) {
    this.itemList = this.itemList.filter((it) => it !== item);
  }

  toggleItemActivation(item: Item) {
    if (item.active) {
      item.active = false;
    } else {
      item.active = true;
    }
  }

  parse(payload: string) {
    const tokenized = payload.split(/\b\s+/);
    const subject = tokenized.filter((token) => !token.startsWith('#')).join(' ');
    const tags = tokenized.filter((token) => token.startsWith('#'))
      .map((t) => t.replace('#', ''));
    return {subject, tags};
  }
}
