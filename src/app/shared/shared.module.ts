import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedBarComponent } from "./sharedbar/sharedBar.component";

@NgModule({
  declarations: [
    SharedBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SharedBarComponent
  ]
})
export class SharedModule { }
