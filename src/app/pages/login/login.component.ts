import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.auth.login(email, password);
    this.auth.userChange();
    form.reset();
  }

}
