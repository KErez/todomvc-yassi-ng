import { Component, OnInit } from '@angular/core';
import { yassi } from 'yassi';
import { Item } from '../../models/Item.interface';
import { LabelListComponentModel } from './label-list-component.model';

@Component({
  selector: 'yas-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss'],
  providers: [LabelListComponentModel],
})
export class LabelListComponent implements OnInit {
  constructor(public labelListComponentModel: LabelListComponentModel) {
  }

  ngOnInit(): void {
    this.labelListComponentModel.labelListFacade();
  }
}
