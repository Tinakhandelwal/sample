import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeocompComponent } from './heocomp.component';

describe('HeocompComponent', () => {
  let component: HeocompComponent;
  let fixture: ComponentFixture<HeocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
