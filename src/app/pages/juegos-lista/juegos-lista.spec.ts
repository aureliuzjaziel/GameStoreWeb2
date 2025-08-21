import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosLista } from './juegos-lista';

describe('JuegosLista', () => {
  let component: JuegosLista;
  let fixture: ComponentFixture<JuegosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
