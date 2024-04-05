import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSolutionCardComponent } from './management-solution-card.component';

describe('ManagementSolutionCardComponent', () => {
  let component: ManagementSolutionCardComponent;
  let fixture: ComponentFixture<ManagementSolutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementSolutionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementSolutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
