import {Component} from '@angular/core';
import {DataFilterComponent} from "./data-filter.component";
import {Http} from "@angular/http";

@Component({
  selector: 'source-families-filter',
  templateUrl: './data-filter.component.html'
})
export class SourceFamiliesFilterComponent extends DataFilterComponent {
  constructor(http: Http) {
    super(http, "source_families");
  }

  parseData(entry) {
    return entry;
  }
}
