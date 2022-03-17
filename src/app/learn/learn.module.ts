import { NgModule } from '@angular/core';
import { LearnComponent } from './learn.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LearnComponent},
];

@NgModule({
  declarations: [
    LearnComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class LearnModule { }
