import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {WebStorageUtility} from "../utils/webstorage.utility";

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html'
})
export abstract class DataFilterComponent {
  protected _name : string;
  protected abstract parseData(entry);
  protected data;
  // This variable will get filled once we have the input data.
  dataMap = []

  constructor(private http: Http, private name: string) {
    this._name = name;
    var existing = WebStorageUtility.get(name);
    if (!existing) {
      http.get('app/game-data/' + name + '.json')
        .map(res => res.json())
        .subscribe(data => {
            this.dataMap = data.map(x => {
              return {
                name_value: this.parseData(x),
                checked: true
              }
            });
            WebStorageUtility.set(name, this.dataMap);
          },
          err => console.log(err),
          () => console.log("got data: " + this.data));
    } else {
      this.dataMap = existing;
    }
  }

  changed() {
    WebStorageUtility.set(this._name, this.dataMap);
  }
}
