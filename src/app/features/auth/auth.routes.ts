import { Routes } from "@angular/router";

export const clientAuthRoutes: Routes = [
  {
    path: "sign-in",
    loadComponent: () => import("./pages/sign-in/sign-in.component").then(c => c.SignInComponent),
  },
  {
    path: "sign-up",
    loadComponent: () => import("./pages/sign-up/sign-up.component").then(c => c.SignUpComponent),
  }
];
