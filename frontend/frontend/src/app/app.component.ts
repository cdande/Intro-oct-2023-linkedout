import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header.components";
import { NavigationComponent } from "./components/navigation.components";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container mx-auto">
      <app-header />
      <app-navigation />
      <main>
        <router-outlet />
      </main>
    </div>
  `,
  styles: [],
  imports: [HeaderComponent, NavigationComponent, RouterOutlet],
})
export class AppComponent {
  title = "Linked Out";

  ChangeIt() {
    this.title = this.title.toUpperCase();
  }
}
