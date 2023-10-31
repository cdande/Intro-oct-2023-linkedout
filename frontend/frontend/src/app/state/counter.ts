import { createFeature, createReducer, on } from "@ngrx/store";
import { CounterCommands } from "./counter.actions";

type CounterState = {
  current: number;
};

const initialState: CounterState = {
  current: 0,
};

export const CounterFeature = createFeature({
  name: "CounterFeature",
  reducer: createReducer(
    initialState,
    on(CounterCommands.incrementTheCount, (currentState) => ({
      current: currentState.current + 1,
    })),
    on(CounterCommands.decrementTheCount, (currentState) => ({
      current: currentState.current - 1,
    }))
  ),
});
