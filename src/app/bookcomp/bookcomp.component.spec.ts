import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcompComponent } from './bookcomp.component';

describe('BookcompComponent', () => {
  let component: BookcompComponent;
  let fixture: ComponentFixture<BookcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
