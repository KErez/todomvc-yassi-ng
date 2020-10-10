import { Component, OnInit } from '@angular/core';
import { yassi, yassit } from 'yassi';

@Component({
  selector: 'yas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @yassit('selectedFilter')
  selected = 'ALL';

  constructor() { }

  ngOnInit(): void {
  }

  clearCompleted() {
    yassi.communicate('itemList', 'clearCompleted');
  }

  filterSelected(filter: string) {
    this.selected = filter;
  }
}
