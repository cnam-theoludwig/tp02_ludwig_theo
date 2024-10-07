import type { OnInit } from "@angular/core"
import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CustomerFormComponent } from "../components/customer-form/customer-form.component"
import { CustomerListComponent } from "../components/customer-list/customer-list.component"
import { FooterComponent } from "../components/footer/footer.component"
import { HeaderComponent } from "../components/header/header.component"
import type { Customer } from "../models/customer"
import { CustomerService } from "../services/customer.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CustomerFormComponent,
    CustomerListComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  public title = "tp02_ludwig_theo"
  public customers: Customer[] = []

  public constructor(private readonly customerService: CustomerService) {}

  public addCustomer(newCustomer: Customer): void {
    this.customers.push(newCustomer)
    this.customerService.saveCustomers(this.customers)
  }

  public deleteCustomer(customer: Customer): void {
    this.customers = this.customers.filter((existingCustomer) => {
      return existingCustomer !== customer
    })
    this.customerService.saveCustomers(this.customers)
  }

  public ngOnInit(): void {
    this.customers = this.customerService.getCustomers()
  }
}
