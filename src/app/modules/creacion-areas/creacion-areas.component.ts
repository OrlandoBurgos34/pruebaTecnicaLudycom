import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creacion-areas',
  templateUrl: './creacion-areas.component.html',
  styleUrls: ['./creacion-areas.component.css'],
})
export class CreacionAreasComponent implements OnInit {
  areaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.areaForm = this.fb.group({
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

  get codeErrorMessage(): string | null {
    const codeControl = this.areaForm.get('code');
    if (codeControl?.hasError('required')) {
      return 'El código es obligatorio.';
    }
    if (codeControl?.hasError('min') || codeControl?.hasError('max')) {
      return 'El código debe ser un número de dos dígitos.';
    }
    return null;
  }

  get nameErrorMessage(): string | null {
    const nameControl = this.areaForm.get('name');
    if (nameControl?.hasError('required')) {
      return 'El nombre es obligatorio.';
    }
    if (nameControl?.hasError('maxlength')) {
      return 'El nombre no debe exceder 50 caracteres.';
    }
    return null;
  }

  get leaderErrorMessage(): string | null {
    const leaderControl = this.areaForm.get('leader');
    if (leaderControl?.hasError('required')) {
      return 'El líder es obligatorio.';
    }
    if (leaderControl?.hasError('min') || leaderControl?.hasError('max')) {
      return 'El número del líder debe tener exactamente 7 dígitos.';
    }
    return null;
  }
}
