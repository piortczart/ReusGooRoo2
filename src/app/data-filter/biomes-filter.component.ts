import {Component} from '@angular/core';
import {DataFilterComponent} from "./data-filter.component";
import {Http} from "@angular/http";

@Component({
  selector: 'biomes-filter',
  templateUrl: './data-filter.component.html'
})
export class BiomesFilterComponent extends DataFilterComponent {
  constructor(http: Http) {
    super(http, "biomes");
  }

  parseData(entry) {
    return entry.name;
  }
}
