import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(5)]]
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  signIn() {}

  signUp() {
    this.userService.createUser(this.form?.value).subscribe(res => {});
  }

}
