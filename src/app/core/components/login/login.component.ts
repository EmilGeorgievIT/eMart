import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };
  
  constructor(private auth: AuthService,private router: Router) {
  }

  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      this.auth.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/']))
        .catch(_error => {  
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }
  	validateForm(email: string, password: string): boolean {
	    if (email.length === 0) {
	      this.errorMessage = 'Please enter Email!'
	      return false
	    }

	    if (password.length === 0) {
	      this.errorMessage = 'Please enter Password!'
	      return false
	    }

	    if (password.length < 6) {
	      this.errorMessage = 'Password should be at least 6 characters!'
	      return false
	    }

  	  this.errorMessage = ''
  	  return true
	}

  login() { 
    this.auth.login();
  }
}
