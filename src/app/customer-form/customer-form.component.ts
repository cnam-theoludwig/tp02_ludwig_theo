import { Component } from "@angular/core"
import { ButtonDirective } from "../button/button.directive"

@Component({
  selector: "app-customer-form",
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.css",
})
export class CustomerFormComponent {}
