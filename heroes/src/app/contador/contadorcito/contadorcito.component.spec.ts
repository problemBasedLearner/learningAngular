import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorcitoComponent } from './contadorcito.component';

describe('ContadorcitoComponent', () => {
  let component: ContadorcitoComponent;
  let fixture: ComponentFixture<ContadorcitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorcitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorcitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
