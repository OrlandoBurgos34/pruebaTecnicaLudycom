import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-editar-area',
  templateUrl: './modal-editar-area.component.html',
  styleUrl: './modal-editar-area.component.css',
})
export class ModalEditarAreaComponent {
  editarAreaForm!: FormGroup;

  @ViewChild('areaModal') editarAreaModal!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editarAreaForm = this.fb.group({
      code: [
        null,
        [Validators.required, Validators.min(10), Validators.max(99)],
      ],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      leader: [
        null,
        [Validators.required, Validators.min(1000000), Validators.max(9999999)],
      ],
      status: ['Activo', Validators.required],
    });
  }

  openModal() {
    if (this.editarAreaModal) {
      const modalElement = this.editarAreaModal.nativeElement;
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  onSubmit() {
    if (this.editarAreaForm.valid) {
      console.log('Formulario enviado', this.editarAreaForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
  get emailErrorMessage(): string | null {
    const emailControl = this.editarAreaForm.get('email');
    if (emailControl?.hasError('required')) {
      return 'El correo electrónico es obligatorio.';
    }
    if (emailControl?.hasError('email')) {
      return 'El correo electrónico no es válido.';
    }
    return null;
  }

  get passwordErrorMessage(): string | null {
    const passwordControl = this.editarAreaForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'La contraseña es obligatoria.';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'La contraseña debe tener al menos 6 caracteres.';
    }
    return null;
  }
}
