import { AfterViewInit, Component } from '@angular/core';
import { Item } from '../../models/Item.interface';
import { endpoint, select, yassi, yassit } from 'yassi';

@Component({
  selector: 'yas-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit {

  @yassit('itemList')
  itemList: Item[] = [];

  @select('selectedFilter')
  todoItemStateFilter: string;

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
    this.itemList = this.itemList.concat(item);
  }

  removeItem(item: Item) {
    this.itemList = this.itemList.filter((it) => it !== item);
    if (this.itemList.length === 0) {
      yassi.republish('itemList');
    }
  }

  @endpoint()
  clearCompleted() {
    this.itemList = this.itemList.filter((item) => item.active);
  }

  toggleItemActivation(item: Item) {
    if (item.active) {
      item.active = false;
    } else {
      item.active = true;
    }
    yassi.republish('itemList');
  }

  parse(payload: string) {
    const tokenized = payload.split(/\b\s+/);
    const subject = tokenized.filter((token) => !token.startsWith('#')).join(' ');
    const tags = tokenized.filter((token) => token.startsWith('#'))
      .map((t) => t.replace('#', ''));
    return {subject, tags};
  }

  buildFilterDataStructure(argument: string, condition: string = 'ALL') {
    let filteringFn: any;

    switch (condition) {
      case 'ACTIVE':
        filteringFn = (element: any) => !!element[argument];
        break;
      case 'COMPLETED':
        filteringFn = (element: any) => !element[argument];
        break;
      default:
        filteringFn = (element: any) => element[argument] != null;
        break;
    }

    return {
      targetArg: argument,
      filteringFn: filteringFn,
    };
  }
}
