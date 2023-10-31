import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { CounterCommands } from "../state/counter.actions";
import { CounterFeature } from "../state/counter";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button type="button" class="btn btn-primary" (click)="decrement()">
        -
      </button>
      <span>{{ current() }}</span>
      <button type="button" class="btn btn-primary" (click)="increment()">
        +
      </button>
    </div>
  `,
  styles: [],
})
export class CounterComponent {
  current = this.store.selectSignal(CounterFeature.selectCurrent);

  constructor(private readonly store: Store) {}

  increment() {
    this.store.dispatch(CounterCommands.incrementTheCount());
  }

  decrement() {
    this.store.dispatch(CounterCommands.decrementTheCount());
  }
}
