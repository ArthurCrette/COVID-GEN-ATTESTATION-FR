import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfAttestComponent } from './pdf-attest/pdf-attest.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from 'angular2-signaturepad';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');


@NgModule({
   declarations: [
      AppComponent,
      PdfAttestComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatRadioModule,
      MatButtonModule,
      MatAutocompleteModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      SignaturePadModule
   ],
   providers: [
    {provide: LOCALE_ID, useValue: 'fr' }
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
