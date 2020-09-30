/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostionhelpComponent } from './Postionhelp.component';

describe('PostionhelpComponent', () => {
  let component: PostionhelpComponent;
  let fixture: ComponentFixture<PostionhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostionhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostionhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
