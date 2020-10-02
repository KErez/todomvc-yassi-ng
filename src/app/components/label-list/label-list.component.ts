import { Component, OnInit } from '@angular/core';
import { observe, yassi } from 'yassi';
import { Item } from '../../models/Item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'yas-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {
  @observe('labelList')
  labels$: Observable<any[]>;

  constructor() {
  }

  ngOnInit(): void {
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
        breakFacadeChain: labelCountMap.size <= 0,
        payload: Array.from(labelCountMap.entries())
      };
    });
  }
}
