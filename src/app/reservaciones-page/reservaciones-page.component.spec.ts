import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesPageComponent } from './reservaciones-page.component';

describe('ReservacionesPageComponent', () => {
  let component: ReservacionesPageComponent;
  let fixture: ComponentFixture<ReservacionesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservacionesPageComponent]
    });
    fixture = TestBed.createComponent(ReservacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
