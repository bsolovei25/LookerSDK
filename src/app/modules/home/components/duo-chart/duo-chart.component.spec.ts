import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoChartComponent } from './duo-chart.component';

describe('DuoChartComponent', () => {
  let component: DuoChartComponent;
  let fixture: ComponentFixture<DuoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
