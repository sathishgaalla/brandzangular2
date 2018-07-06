import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { user } from './user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        user    
    ],
    imports: [
      BrowserModule,
      FormsModule, 
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [user]
  })
  export class UserModule { }
