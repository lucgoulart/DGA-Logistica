import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunasImgComponent } from './colunas-img.component';

describe('ColunasImgComponent', () => {
  let component: ColunasImgComponent;
  let fixture: ComponentFixture<ColunasImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColunasImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunasImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
