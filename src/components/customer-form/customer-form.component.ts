import { Component } from "@angular/core"
import { ButtonDirective } from "../../directives/button/button.directive"
import { InputDirective } from "../../directives/input/input.directive"
import { LabelDirective } from "../../directives/label/label.directive"
import { SelectDirective } from "../../directives/select/select.directive"

@Component({
  selector: "app-customer-form",
  standalone: true,
  imports: [ButtonDirective, InputDirective, LabelDirective, SelectDirective],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.css",
})
export class CustomerFormComponent {}
