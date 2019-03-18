import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercompComponent } from './footercomp.component';

describe('FootercompComponent', () => {
  let component: FootercompComponent;
  let fixture: ComponentFixture<FootercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
