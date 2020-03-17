/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PdfAttestComponent } from './pdf-attest.component';

describe('PdfAttestComponent', () => {
  let component: PdfAttestComponent;
  let fixture: ComponentFixture<PdfAttestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfAttestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfAttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
