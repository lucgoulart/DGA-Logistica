import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoComponent } from './prazo.component';

describe('PrazoComponent', () => {
  let component: PrazoComponent;
  let fixture: ComponentFixture<PrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
