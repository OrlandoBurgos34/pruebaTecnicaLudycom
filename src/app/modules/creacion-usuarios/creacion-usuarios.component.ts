import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrl: './creacion-usuarios.component.css',
})
export class CreacionUsuariosComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      dateOfBirth: [Date, [Validators.required]], //TODO: verificar
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      documentNumber: [
        0,
        [Validators.required, Validators.minLength(7), Validators.maxLength(7)],
      ], //TODO: corregir
      area: [0, [Validators.required, Validators.minLength(6)]], // TODO: corregir
      salary: ['', [Validators.required, Validators.minLength(6)]], // TODO: corregir
      status: ['', [Validators.required, Validators.minLength(6)]], // TODO: corregir
    });
  }

  get emailErrorMessage(): string | null {
    const emailControl = this.userForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'El correo electrónico es obligatorio.';
    }
    if (emailControl?.hasError('email')) {
      return 'El correo electrónico no es válido.';
    }
    return null;
  }

  get passwordErrorMessage(): string | null {
    const passwordControl = this.userForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'La contraseña es obligatoria.';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }
    return null;
  }
}
