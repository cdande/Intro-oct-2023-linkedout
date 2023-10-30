import { Component } from "@angular/core";

@Component({
  standalone: true,
  template: `
    <nav>
      <div class="tabs">
        <a class="tab tab-lg tab-lifted">Home</a>
        <a class="tab tab-lg tab-lifted">Counter</a>
        <a class="tab tab-lg tab-lifted">Todo List</a>
      </div>
    </nav>
  `,
  selector: "app-navigation",
})
export class NavigationComponent {}
