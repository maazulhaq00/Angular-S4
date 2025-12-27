import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  template: '<h1 class="myclass">Hello From About {{batchCode}}</h1>',
  styles: ['.myclass{color: red}']
})
export class AboutPageComponent {
  batchCode : string = "2410F1"
}
