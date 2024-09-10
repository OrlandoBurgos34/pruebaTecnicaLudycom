import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAreasComponent } from './consulta-areas.component';

describe('ConsultaAreasComponent', () => {
  let component: ConsultaAreasComponent;
  let fixture: ComponentFixture<ConsultaAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
