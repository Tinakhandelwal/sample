import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycompComponent } from './bodycomp.component';

describe('BodycompComponent', () => {
  let component: BodycompComponent;
  let fixture: ComponentFixture<BodycompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodycompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
