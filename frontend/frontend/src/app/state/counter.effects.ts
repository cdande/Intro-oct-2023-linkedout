import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, switchMap, tap } from "rxjs";
import { CounterCommands } from "./counter.actions";
import { CounterFeature } from "./counter";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class CounterEffects {
  private readonly baseUrl = environment.apiUrl;
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
        ), //if it isn't one of these, forget about it. "filter"
        concatLatestFrom(() =>
          this.store.select(CounterFeature.selectCounterFeatureState)
        ),
        map(([_, data]) => data),
        switchMap((data) =>
          this.client
            .post(`${this.baseUrl}user/counter`, data)
            .pipe(tap(() => console.log("Sent it to the server")))
        )
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly client: HttpClient
  ) {}
}
