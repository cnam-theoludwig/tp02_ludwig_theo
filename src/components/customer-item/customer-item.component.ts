import { Component, EventEmitter, Input, Output } from "@angular/core"
import { ButtonDirective } from "../../directives/button/button.directive"
import { Customer } from "../../models/customer"

@Component({
  selector: "app-customer-item",
  standalone: true,
  imports: [ButtonDirective],
  templateUrl: "./customer-item.component.html",
  styleUrl: "./customer-item.component.css",
})
export class CustomerItemComponent {
  @Input()
  public customer!: Customer

  @Output()
  public customerDeleted = new EventEmitter<Customer>()
}
