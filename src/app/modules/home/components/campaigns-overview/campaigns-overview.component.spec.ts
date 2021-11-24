import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsOverviewComponent } from './campaigns-overview.component';

describe('CampaignsOverviewComponent', () => {
  let component: CampaignsOverviewComponent;
  let fixture: ComponentFixture<CampaignsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
