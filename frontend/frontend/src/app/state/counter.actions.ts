import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CountByValues, CounterState } from "./counter";

// Do this. Cause and effect.
export const CounterCommands = createActionGroup({
  source: "Counter Commands",
  events: {
    "Increment the Count": emptyProps(),
    "Decrement the Count": emptyProps(),
    "reset The Count": emptyProps(),
    "Set Count By": props<{ by: CountByValues }>(),
  },
});

// Events
//Things that happened that can mean 0 > things.
export const CounterEvents = createActionGroup({
  source: "Counter Events",
  events: {
    "Counter Feature Entered": emptyProps(),
    "User logged In": emptyProps(),
  },
});

// Documents

export const CounterDocuments = createActionGroup({
  source: "Counter Documents",
  events: {
    "Counter State": props<{ payload: CounterState }>(),
  },
});
