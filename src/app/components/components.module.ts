import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NavbarComponent,
    NavbarItemComponent,
  ],
  exports: [
    NavbarComponent,
    NavbarItemComponent,
  ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
