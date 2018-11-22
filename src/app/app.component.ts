import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){};

    a() {
    if ('a' == 'a')
    {
      console.log('hello');
    }
  }
}
