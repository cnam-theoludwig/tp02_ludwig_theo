import { Component, EventEmitter, Input, Output } from "@angular/core"
import { ButtonDirective } from "../../directives/button/button.directive"
import type { Customer } from "../../models/customer"
import { CustomerItemComponent } from "../customer-item/customer-item.component"

@Component({
  selector: "app-customer-list",
  standalone: true,
  imports: [ButtonDirective, CustomerItemComponent],
  templateUrl: "./customer-list.component.html",
  styleUrl: "./customer-list.component.css",
})
export class CustomerListComponent {
  @Input()
  public customers: Customer[] = []

  @Output()
  public customerDeleted = new EventEmitter<Customer>()
}
