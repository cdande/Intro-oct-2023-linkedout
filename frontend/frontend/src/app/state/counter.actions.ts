import { createActionGroup, emptyProps } from "@ngrx/store";

export const CounterCommands = createActionGroup({
  source: "Counter Commands",
  events: {
    "Increment the Count": emptyProps(),
    "Decrement the Count": emptyProps(),
  },
});
