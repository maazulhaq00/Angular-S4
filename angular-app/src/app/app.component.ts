import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeePageComponent, AboutPageComponent, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
