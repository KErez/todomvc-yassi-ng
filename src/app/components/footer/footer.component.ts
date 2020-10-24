import { Component, OnInit } from '@angular/core';
import { yassi } from 'yassi';
import { FooterComponentModel } from './footer-component.model';

@Component({
  selector: 'yas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterComponentModel],
})
export class FooterComponent implements OnInit {
  constructor(public footerModel: FooterComponentModel) { }

  ngOnInit(): void {
  }

  clearCompleted() {
    yassi.communicate('itemList', 'clearCompleted');
  }

  filterSelected(filter: string) {
    this.footerModel.selected = filter;
  }
}
