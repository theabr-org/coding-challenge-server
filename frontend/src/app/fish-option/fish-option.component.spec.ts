import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishOptionComponent } from './fish-option.component';

describe('FishOptionComponent', () => {
  let component: FishOptionComponent;
  let fixture: ComponentFixture<FishOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishOptionComponent]
    });
    fixture = TestBed.createComponent(FishOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
