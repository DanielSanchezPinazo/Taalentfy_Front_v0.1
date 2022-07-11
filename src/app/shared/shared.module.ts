import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedBarComponent } from "./sharedbar/sharedBar.component";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SharedBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SharedBarComponent
  ]
})
export class SharedModule { }
