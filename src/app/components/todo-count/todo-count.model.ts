import { Injectable } from '@angular/core';
import { endpoint, observe, select, yassi } from 'yassi';
import { Item } from '../../models/Item.interface';
import { Observable } from 'rxjs';

@Injectable()
export class TodoCountModel {
  @observe('todoCount')
  todoCount: Observable<number>;

  todoCountFacade() {
    yassi.facade('todoCount', ['itemList'], (items: Array<Item[]>) => {
      const count: number = (items as any).flat().filter((item: Item) => item.active).length;
      return count;
    });
  }
}
