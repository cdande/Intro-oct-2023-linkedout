import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, tap } from "rxjs";
import { CounterCommands } from "./counter.actions";
import { CounterFeature } from "./counter";

@Injectable()
export class CounterEffects {
  logIt$ = createEffect(
    () =>
      this.actions$.pipe(
        tap((a) => console.log(`Got an action of type ${a.type}`))
      ),
    { dispatch: false }
  );

  logCounter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CounterCommands.incrementTheCount,
          CounterCommands.decrementTheCount,
          CounterCommands.resetTheCount,
          CounterCommands.setCountBy
        ),
        concatLatestFrom(() =>
          this.store.select(CounterFeature.selectCounterFeatureState)
        ),
        map(([_, data]) => console.log(`Got the data`, data))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}
}
