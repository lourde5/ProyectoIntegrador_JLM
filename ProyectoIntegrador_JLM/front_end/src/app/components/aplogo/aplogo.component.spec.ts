import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APLogoComponent } from './aplogo.component';

describe('APLogoComponent', () => {
  let component: APLogoComponent;
  let fixture: ComponentFixture<APLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
