import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppElementComponent } from './app-element.component';

describe('AppElementComponent', () => {
  let component: AppElementComponent;
  let fixture: ComponentFixture<AppElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
