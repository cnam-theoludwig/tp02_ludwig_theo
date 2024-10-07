import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { ButtonDirective } from "../../directives/button/button.directive"
import { InputDirective } from "../../directives/input/input.directive"
import { LabelDirective } from "../../directives/label/label.directive"
import { SelectDirective } from "../../directives/select/select.directive"
import type { Customer } from "../../models/customer"

@Component({
  selector: "app-customer-form",
  standalone: true,
  imports: [
    ButtonDirective,
    InputDirective,
    LabelDirective,
    SelectDirective,
    ReactiveFormsModule,
  ],
  templateUrl: "./customer-form.component.html",
  styleUrl: "./customer-form.component.css",
})
export class CustomerFormComponent implements OnInit {
  @Output()
  public customerCreated = new EventEmitter<Customer>()

  public customerForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
    address: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
    zipCode: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
    city: new FormControl("", [Validators.required, Validators.minLength(1)]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("0[1-9][0-9]{8}"),
    ]),
    gender: new FormControl("man", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
    passwordConfirmation: new FormControl("", [Validators.required]),
  })

  public isValidPasswordConfirm = true

  public ngOnInit(): void {
    this.customerForm.controls.password.valueChanges.subscribe(() => {
      return this.checkPasswordMatch()
    })
    this.customerForm.controls.passwordConfirmation.valueChanges.subscribe(
      () => {
        return this.checkPasswordMatch()
      },
    )
  }

  private checkPasswordMatch(): void {
    const password = this.customerForm.controls.password.value
    const passwordConfirmation =
      this.customerForm.controls.passwordConfirmation.value
    this.isValidPasswordConfirm = password === passwordConfirmation
  }

  public onSubmit(): void {
    if (!this.customerForm.valid || !this.isValidPasswordConfirm) {
      return
    }
    const customer = this.customerForm.value as Customer
    this.customerCreated.emit(customer)
    this.customerForm.reset()
    this.customerForm.controls.gender.setValue("man")
  }
}
