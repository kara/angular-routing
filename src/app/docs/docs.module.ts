import { NgModule } from '@angular/core';
import { DocsComponent } from './docs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DocsComponent},
];

@NgModule({
  declarations: [
    DocsComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class DocsModule { }
