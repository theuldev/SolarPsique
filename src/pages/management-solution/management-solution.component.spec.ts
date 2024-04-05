import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSolutionComponent } from './management-solution.component';

describe('ManagementSolutionComponent', () => {
  let component: ManagementSolutionComponent;
  let fixture: ComponentFixture<ManagementSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
