import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvideContraScreenComponent } from './olvide-contra-screen.component';

describe('OlvideContraScreenComponent', () => {
  let component: OlvideContraScreenComponent;
  let fixture: ComponentFixture<OlvideContraScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvideContraScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvideContraScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
