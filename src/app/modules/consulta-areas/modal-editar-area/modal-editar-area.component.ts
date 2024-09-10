import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-area',
  templateUrl: './modal-editar-area.component.html',
  styleUrl: './modal-editar-area.component.css',
})
export class ModalEditarAreaComponent {
  loginForm!: FormGroup;

  @ViewChild('loginModal') loginModal!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  openModal() {
    if (this.loginModal) {
      const modalElement = this.loginModal.nativeElement;
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado', this.loginForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  get emailErrorMessage(): string | null {
    const emailControl = this.loginForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'El correo electrónico es obligatorio.';
    }
    if (emailControl?.hasError('email')) {
      return 'El correo electrónico no es válido.';
    }
    return null;
  }

  get passwordErrorMessage(): string | null {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'La contraseña es obligatoria.';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }
    return null;
  }
}
