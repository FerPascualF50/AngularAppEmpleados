import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void{
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if( usuario === 'fpascual' && password === 'admin123') {
      // redirect to dashboard
    } else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Usuario o Contraseña invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
