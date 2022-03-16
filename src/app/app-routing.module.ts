import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'learn', component: LearnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
