import { Injectable } from '@angular/core';
import { yassit } from 'yassi';

@Injectable()
export class FooterComponentModel {
  @yassit('selectedFilter')
  selected = 'ALL';
}
