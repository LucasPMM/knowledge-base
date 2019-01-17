import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule {}
