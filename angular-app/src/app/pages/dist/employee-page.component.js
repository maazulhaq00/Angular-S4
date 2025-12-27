"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeePageComponent = void 0;
var core_1 = require("@angular/core");
var employee_form_component_1 = require("../../components/employee-form/employee-form.component");
var employee_list_component_1 = require("../../components/employee-list/employee-list.component");
var EmployeePageComponent = /** @class */ (function () {
    function EmployeePageComponent() {
    }
    EmployeePageComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-page',
            imports: [employee_form_component_1.EmployeeFormComponent, employee_list_component_1.EmployeeListComponent],
            templateUrl: './employee-page.component.html',
            styleUrl: './employee-page.component.css'
        })
    ], EmployeePageComponent);
    return EmployeePageComponent;
}());
exports.EmployeePageComponent = EmployeePageComponent;
