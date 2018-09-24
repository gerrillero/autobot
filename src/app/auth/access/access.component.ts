import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { GlobalStoreService } from '../../core/global-store.service';
import { CustomValidators } from '../../shared/custom.validators';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styles: []
})
export class AccessComponent implements OnInit {
  public form: FormGroup;
  public isNewAccount = false;
  private url = environment.apiUrl + 'pub/credentials/';
  constructor(private fb: FormBuilder, private http: HttpClient, private globalStore: GlobalStoreService) {}

  public ngOnInit() {
    this.onAccount();
  }

  public onNoAccount() {
    this.form = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), CustomValidators.PasswordMustHaveNumbers]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      },
      {
        validator: CustomValidators.MatchPassword
      }
    );
    this.isNewAccount = true;
  }

  public onAccount() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), CustomValidators.PasswordMustHaveNumbers]]
    });
    this.isNewAccount = false;
  }

  public onLogin() {
    this.http.post(this.url + 'login', this.form.value).subscribe(this.onSuccess, this.onError);
  }

  public onRegister() {
    this.http.post(this.url + 'registration', this.form.value).subscribe(this.onSuccess, this.onError);
  }

  public getErrors(controlName: string): any {
    const control = this.form.controls[controlName];
    return control.errors;
  }

  public mustShowError(controlName: string) {
    const control = this.form.controls[controlName];
    if (control.invalid && (control.dirty || control.touched)) {
      return true;
    } else {
      return false;
    }
  }

  public hasError(controlName: string, errorCode: string): any {
    const control = this.form.controls[controlName];
    const error = control.getError(errorCode);
    if (error) {
      return true;
    } else {
      return false;
    }
  }

  private onSuccess = (authResponse: { token: string }) => {
    this.globalStore.dispatchUserMessage('Wellcome');
    this.globalStore.dispatchToken(authResponse.token);
    this.globalStore.dispatchLoginNeeded(false);
  };
  private onError = err => {
    if (this.isNewAccount) {
      this.globalStore.dispatchUserMessage('Account already exists');
      this.form.reset();
    } else {
      this.globalStore.dispatchUserMessage('Invalid credentials');
    }
    this.globalStore.dispatchToken('');
  };
}
