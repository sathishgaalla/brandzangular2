import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Form } from '@angular/forms/src/directives/form_interface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Http, Response, Request, RequestMethod} from '@angular/http';

@Component({
   selector:"user-root",
   templateUrl:'./user.component.html',
   styles:[]
})

export class user
{
    angForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
      }
      id:number;
      username:string = "";
      password:string = "";
      firstName:string = "";
      lastName:string = "";
      errorMsg:string = "";
       createForm() {
        this.angForm = this.fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ]
        });
      }
      onLogin(value:any){
        let form = {
            'username':value.username,
            'password' : value.password,
        }
        
        }

    }

