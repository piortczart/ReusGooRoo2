import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html'
})
export class DataFilterComponent {
  @Input() set data(value: Array<string>) {
    this.dataMap = value.map(x => {
      return {
        name_value: x,
        checked: true
      }
    });
  }
  // This variable will get filled once we have the input data.
  dataMap = []

  clicked(){
    console.log("", this.dataMap)
  }
}
