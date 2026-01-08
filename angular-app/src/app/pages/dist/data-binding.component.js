"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataBindingComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DataBindingComponent = /** @class */ (function () {
    function DataBindingComponent() {
        this.courseName = "Angular";
        this.inputType = "radio";
        this.myClass = "bg-success text-white";
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s";
        this.name = "Farrukh";
    }
    DataBindingComponent.prototype.sayHello = function (name) {
        alert("Hello " + name);
    };
    DataBindingComponent.prototype.changeCourseName = function (my_course) {
        this.courseName = my_course;
    };
    DataBindingComponent = __decorate([
        core_1.Component({
            selector: 'app-data-binding',
            imports: [forms_1.FormsModule],
            templateUrl: './data-binding.component.html',
            styleUrl: './data-binding.component.css'
        })
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
