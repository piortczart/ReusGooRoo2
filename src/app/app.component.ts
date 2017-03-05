import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: Object;
  constructor(private http: Http) {
    http.get('app/game-data/ambassadors.json')
      .map(res => res.json())
      .subscribe(data => this.data = data,
        err => console.log(err),
        () => console.log(this.data));
  }
}
