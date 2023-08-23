import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishThumbnailComponent } from './fish-thumbnail.component';

describe('FishThumbnailComponent', () => {
  let component: FishThumbnailComponent;
  let fixture: ComponentFixture<FishThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishThumbnailComponent]
    });
    fixture = TestBed.createComponent(FishThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
