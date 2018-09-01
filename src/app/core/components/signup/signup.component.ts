import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(
    public authService: AuthService,
    private router: Router) { }
  
  
  onSignUp(): void {
    if (this.validateForm(this.email, this.password)) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/signup'])
        })
        console.log(1);
    }
  }

  checkUserInfo() {
    if (this.authService.isUserEmailLoggedIn) {
      this.router.navigate(['/signup'])
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

  ngOnInit() {
  }

}
