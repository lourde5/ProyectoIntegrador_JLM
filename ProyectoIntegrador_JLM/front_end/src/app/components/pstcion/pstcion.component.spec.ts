import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PstcionComponent } from './pstcion.component';

describe('PstcionComponent', () => {
  let component: PstcionComponent;
  let fixture: ComponentFixture<PstcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PstcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PstcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
