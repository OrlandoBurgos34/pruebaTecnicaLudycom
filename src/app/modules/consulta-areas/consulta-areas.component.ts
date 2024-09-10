import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalEditarAreaComponent } from './modal-editar-area/modal-editar-area.component';

@Component({
  selector: 'app-consulta-areas',
  templateUrl: './consulta-areas.component.html',
  styleUrls: ['./consulta-areas.component.css'],
})
export class ConsultaAreasComponent implements OnInit {
  areas: Array<any> = [];
  areaForm!: FormGroup;
  isEdit: boolean = false;
  currentAreaId: number | null = null;

  @ViewChild(ModalEditarAreaComponent)
  modalEditarAreaComponent!: ModalEditarAreaComponent;

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

    this.loadAreas();
  }

  openLoginModal() {
    this.modalEditarAreaComponent.openModal();
  }

  loadAreas(): void {
    this.areas = [
      { id: 1, code: 10, name: 'Área 1', leader: 1234567, status: 'Activo' },
      { id: 2, code: 20, name: 'Área 2', leader: 2345678, status: 'Inactivo' },
    ];
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
      const index = this.areas.findIndex(
        (area) => area.id === this.currentAreaId
      );
      if (index !== -1) {
        this.areas[index] = { id: this.currentAreaId, ...formValue };
      }
    } else {
      const newId = this.areas.length
        ? Math.max(...this.areas.map((area) => area.id)) + 1
        : 1;
      this.areas.push({ id: newId, ...formValue });
    }

    this.areaForm.reset();
    this.isEdit = false;
  }

  deleteArea(id: number): void {
    this.areas = this.areas.filter((area) => area.id !== id);
  }
}
