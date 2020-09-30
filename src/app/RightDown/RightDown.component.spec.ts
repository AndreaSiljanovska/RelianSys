/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightDownComponent } from './RightDown.component';

describe('RightDownComponent', () => {
  let component: RightDownComponent;
  let fixture: ComponentFixture<RightDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
