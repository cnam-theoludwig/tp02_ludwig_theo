import { Component } from "@angular/core"
import { VERSION } from "../../utils/constants"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  version = VERSION
}
