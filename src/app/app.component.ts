import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyTableComponent } from "./currency-table/currency-table.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyTableComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HW8_Footer';
}
