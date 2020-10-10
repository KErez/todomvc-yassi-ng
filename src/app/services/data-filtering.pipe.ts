import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yasDataFilter',
})
export class DataFilteringPipe implements PipeTransform {
  transform(value: any[], filters: { targetArg: string, filteringFn?: any }): any {
    const filteringFn = filters.filteringFn || ((val) => !!val);
    return value.filter((element) => filteringFn(element));
  }
}
