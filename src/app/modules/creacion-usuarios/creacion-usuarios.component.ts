import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrls: ['./creacion-usuarios.component.css'],
})
export class CreacionUsuariosComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]+$/),
        ],
      ],
      dateOfBirth: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
      documentNumber: [
        null,
        [Validators.required, Validators.pattern(/^\d{7}$/)],
      ],
      area: [
        null,
        [
          Validators.required,
          Validators.pattern(/^\d{2}$/),
          Validators.min(10),
          Validators.max(99),
        ],
      ],
      salary: [
        null,
        [Validators.required, Validators.pattern(/^\d{1,7}(\.\d{1,2})?$/)],
      ],
      status: ['Activo', Validators.required],
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

  get nameErrorMessage(): string | null {
    const nameControl = this.userForm.get('name');
    if (nameControl?.hasError('required')) {
      return 'El nombre es obligatorio.';
    }
    if (nameControl?.hasError('pattern')) {
      return 'El nombre solo puede contener letras.';
    }
    if (nameControl?.hasError('maxlength')) {
      return 'El nombre no debe exceder 50 caracteres.';
    }
    return null;
  }

  get lastNameErrorMessage(): string | null {
    const lastNameControl = this.userForm.get('lastName');
    if (lastNameControl?.hasError('required')) {
      return 'El apellido es obligatorio.';
    }
    if (lastNameControl?.hasError('pattern')) {
      return 'El apellido solo puede contener letras.';
    }
    if (lastNameControl?.hasError('maxlength')) {
      return 'El apellido no debe exceder 50 caracteres.';
    }
    return null;
  }

  get documentNumberErrorMessage(): string | null {
    const documentNumberControl = this.userForm.get('documentNumber');
    if (documentNumberControl?.hasError('required')) {
      return 'El número de documento es obligatorio.';
    }
    if (documentNumberControl?.hasError('pattern')) {
      return 'El número de documento debe tener exactamente 7 dígitos.';
    }
    return null;
  }

  formatSalary(event: any): void {
    let input = event.target.value.replace(/\D/g, '');
    if (input) {
      input = parseFloat(input).toString();
      const formattedInput = (parseInt(input, 10) / 100).toFixed(2);
      event.target.value = formattedInput;
      this.userForm.get('salary')?.setValue(formattedInput);
    }
  }

  get areaErrorMessage(): string | null {
    const areaControl = this.userForm.get('area');
    if (areaControl?.hasError('required')) {
      return 'El área es obligatoria.';
    }
    if (areaControl?.hasError('pattern')) {
      return 'El área debe ser un número de 2 dígitos.';
    }
    if (areaControl?.hasError('min')) {
      return 'El área debe ser al menos 10.';
    }
    if (areaControl?.hasError('max')) {
      return 'El área no puede ser mayor a 99.';
    }
    return null;
  }

  get salaryErrorMessage(): string | null {
    const salaryControl = this.userForm.get('salary');
    if (salaryControl?.hasError('required')) {
      return 'El salario es obligatorio.';
    }
    if (salaryControl?.hasError('pattern')) {
      return 'El salario debe ser un número decimal válido con hasta dos decimales.';
    }
    return null;
  }
  get dateOfBirthErrorMessage(): string | null {
    const dateOfBirthControl = this.userForm.get('dateOfBirth');
    if (dateOfBirthControl?.hasError('required')) {
      return 'La fecha de nacimiento es obligatoria.';
    }
    return null;
  }
}
