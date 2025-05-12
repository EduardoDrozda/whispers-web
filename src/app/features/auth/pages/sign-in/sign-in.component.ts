import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'whps-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  form!: FormGroup;

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.initform();
  }

  private initform() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
