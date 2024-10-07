import { ComponentFixture, TestBed } from "@angular/core/testing"

import { CUSTOMER_MOCK } from "../../models/customer"
import { CustomerItemComponent } from "./customer-item.component"

describe("CustomerItemComponent", () => {
  let component: CustomerItemComponent
  let fixture: ComponentFixture<CustomerItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerItemComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CustomerItemComponent)
    component = fixture.componentInstance
    component.customer = CUSTOMER_MOCK
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
