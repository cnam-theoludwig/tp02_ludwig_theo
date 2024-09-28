import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { CustomerFormComponent } from "./customer-form/customer-form.component"
import { CustomerListComponent } from "./customer-list/customer-list.component"
import { FooterComponent } from "./footer/footer.component"
import { HeaderComponent } from "./header/header.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CustomerFormComponent,
    FooterComponent,
    CustomerListComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "tp02_ludwig_theo"
}
