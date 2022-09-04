import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStuentComponent } from './add-stuent.component';

describe('AddStuentComponent', () => {
  let component: AddStuentComponent;
  let fixture: ComponentFixture<AddStuentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStuentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStuentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
