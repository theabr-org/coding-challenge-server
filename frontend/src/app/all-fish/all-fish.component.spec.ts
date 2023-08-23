import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFishComponent } from './all-fish.component';

describe('AllFishComponent', () => {
  let component: AllFishComponent;
  let fixture: ComponentFixture<AllFishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFishComponent]
    });
    fixture = TestBed.createComponent(AllFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
