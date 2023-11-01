import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home.component";
import { TodosComponent } from "./pages/todos.component";
import { CounterComponent } from "./pages/counter.component";
import { AutoLoginPartialRoutesGuard } from "angular-auth-oidc-client";
import { CallbackComponent } from "./pages/callback.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "todos",
    component: TodosComponent,
  },
  {
    path: "counter",
    canActivate: [AutoLoginPartialRoutesGuard],
    component: CounterComponent,
  },
  {
    path: "callback",
    component: CallbackComponent,
  },
  {
    path: "counter",
    component: CounterComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
