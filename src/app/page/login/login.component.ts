import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  loginBtn(userid:String,passwd:String) {
    if(userid =="admin" && passwd=="1234")
    {
      this.router.navigate(["/dashboard"]);
    }
    else{
      this.msg="Invalid Username Password"
      console.log(this.msg);
    }
  }
}

// export class LoginComponent implements OnInit {
//   loginForm: FormGroup|any;
//   title='Login Valdation';
//   // constructor(
//   //   private router:Router
//   // ){
//   //   this.loginForm=new FormGroup({
//   //     email:new FormControl('',[Validators.required,Validators.email,Validators.pattern(
//   //       '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
        
//   //     ),]),
//   //     password:new FormControl('',[Validators.required,Validators.pattern(
//   //       '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
//   //     )])
//   //   });
//   // }

//   ngOnInit() {
//   }
//   // onSubmit(){
//   //   if(!this.loginForm.valid){
//   //     return;
//   //   }
//   //   localStorage.setItem('user',this.loginForm.value)
//   //   this.router.navigate(['/dashboard'])
//   // }
//   // loginBtn() {
//   //   var userid = 'admin';
//   //   if(userid =="admin")
//   //   {
//   //     this.router.navigate(["/dashboard"]);
//   //   }


//   // }
// }
