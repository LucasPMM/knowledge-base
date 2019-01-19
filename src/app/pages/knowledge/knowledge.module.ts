import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { KnowledgeAngularComponent } from './knowledge-angular/knowledge-angular.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { KnowledgeIonicComponent } from './knowledge-ionic/knowledge-ionic.component';

const routes: Routes = [
  {
    path: 'angular',
    component: KnowledgeAngularComponent
  },
  {
    path: 'ionic',
    component: KnowledgeIonicComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  declarations: [
    KnowledgeAngularComponent,
    KnowledgeIonicComponent
  ],
  exports: [
  ]
})
export class KnowledgeModule {}
