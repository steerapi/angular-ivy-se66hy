import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardElementComponent } from './app-element.component';

describe('NgCardElementComponent', () => {
  let component: NgCardElementComponent;
  let fixture: ComponentFixture<NgCardElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCardElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
