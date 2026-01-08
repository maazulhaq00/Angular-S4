import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular";
  inputType: string = "radio";
  myClass: string = "bg-success text-white";

  imageUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s"


  name:string = "Farrukh"

  sayHello(name : string) : void {
    alert(`Hello ${name}`)
  }

  changeCourseName(my_course: string) : void {
    this.courseName = my_course
  }




}


