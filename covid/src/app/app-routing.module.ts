import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { CovidstatsComponent } from './covidstats/covidstats.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: "signin", component: SigninComponent},
  { path: "covidstats", component: CovidstatsComponent},
  { path: "", pathMatch: "full", redirectTo: "signin"},
  { path: "**", redirectTo: "signin"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
