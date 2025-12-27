import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyheaderComponent } from './components/myheader/myheader.component';
import { MyfooterComponent } from './components/myfooter/myfooter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyheaderComponent, MyfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  name = "2410F1"
}
