import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta-areas',
  templateUrl: './consulta-areas.component.html',
  styleUrls: ['./consulta-areas.component.css'],
})
export class ConsultaAreasComponent implements OnInit {
  areas: Array<any> = []; // Arreglo de áreas (debe ser reemplazado con el tipo adecuado)
  areaForm!: FormGroup;
  isEdit: boolean = false;
  currentAreaId: number | null = null;

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

    // Cargar áreas (esto debe ser reemplazado por una llamada a la API)
    this.loadAreas();
  }

  loadAreas(): void {
    // Aquí deberías realizar una llamada a la API para obtener las áreas.
    // Por ejemplo: this.areaService.getAreas().subscribe(data => this.areas = data);
    // Esto es un ejemplo con datos estáticos:
    this.areas = [
      { id: 1, code: 10, name: 'Área 1', leader: 1234567, status: 'Activo' },
      { id: 2, code: 20, name: 'Área 2', leader: 2345678, status: 'Inactivo' },
    ];
  }

  openCreateForm(): void {
    this.isEdit = false;
    this.currentAreaId = null;
    this.areaForm.reset();
  }

  openEditForm(area: any): void {
    this.isEdit = true;
    this.currentAreaId = area.id;
    this.areaForm.patchValue({
      code: area.code,
      name: area.name,
      leader: area.leader,
      status: area.status,
    });
  }

  saveArea(): void {
    if (this.areaForm.invalid) {
      return;
    }

    const formValue = this.areaForm.value;

    if (this.isEdit && this.currentAreaId !== null) {
      // Actualizar área (esto debe ser reemplazado por una llamada a la API)
      // this.areaService.updateArea(this.currentAreaId, formValue).subscribe(() => this.loadAreas());
      const index = this.areas.findIndex(
        (area) => area.id === this.currentAreaId
      );
      if (index !== -1) {
        this.areas[index] = { id: this.currentAreaId, ...formValue };
      }
    } else {
      // Crear nueva área (esto debe ser reemplazado por una llamada a la API)
      // this.areaService.createArea(formValue).subscribe(() => this.loadAreas());
      const newId = this.areas.length
        ? Math.max(...this.areas.map((area) => area.id)) + 1
        : 1;
      this.areas.push({ id: newId, ...formValue });
    }

    // Resetea el formulario después de guardar
    this.areaForm.reset();
    this.isEdit = false;
  }

  deleteArea(id: number): void {
    // Eliminar área (esto debe ser reemplazado por una llamada a la API)
    // this.areaService.deleteArea(id).subscribe(() => this.loadAreas());
    this.areas = this.areas.filter((area) => area.id !== id);
  }
}
