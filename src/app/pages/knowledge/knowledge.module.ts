import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeAngularComponent } from './knowledge-angular/knowledge-angular.component';

const routes: Routes = [
  {
    path: '',
    component: KnowledgeComponent
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
  declarations: [KnowledgeComponent, KnowledgeAngularComponent]
})
export class KnowledgeModule {}
