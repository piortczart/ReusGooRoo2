import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'game-data',
  template: `{{data}}`
})
export class GameDataComponent {
  data: Object;

  constructor(private http: Http) {
    http.get('app/game-data/ambassadors.json')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data
        },
        err => console.log(err),
        () => console.log("got ambassadors"));
  }
}
