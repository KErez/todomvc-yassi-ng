import { Injectable } from '@angular/core';
import { observe, yassi } from 'yassi';
import { Observable } from 'rxjs';
import { Item } from '../../models/Item.interface';

@Injectable()
export class LabelListComponentModel {
  @observe('labelList')
  labels$: Observable<any[]>;

  labelListFacade() {
    yassi.facade('labelList', ['itemList'], (items: Array<Item[]>) => {
      const allLabels = (items as any).flat().map((item: Item) => item ? item.labels : '').flat();
      const labelCountMap = new Map();
      for (const label of allLabels) {
        if (!label) {
          continue;
        }
        if (!labelCountMap.has(label)) {
          labelCountMap.set(label, 0);
        }
        labelCountMap.set(label, labelCountMap.get(label) + 1);
      }

      // Note that if we always like to return the result we may use this object or just return the result (i.e. labelCountMap.entries())
      return {
        breakFacadeChain: labelCountMap.size < 0,
        payload: Array.from(labelCountMap.entries())
      };
    });
  }
}
