import { Injectable } from "@angular/core"
import type { Customer } from "../models/customer"

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  private readonly localStorageKey = "customers"

  public getCustomers(): Customer[] {
    const storedCustomers = localStorage.getItem(this.localStorageKey)
    return storedCustomers != null
      ? (JSON.parse(storedCustomers) as Customer[])
      : []
  }

  public saveCustomers(customers: Customer[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(customers))
  }
}
