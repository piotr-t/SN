import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GetIMGInterceptor } from './get-img.interceptor';
import { FooterComponent } from './content/footer/footer.component';
import { HeaderComponent } from './content/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ContentComponent } from './content/content/content.component';
import { Spinner1Component } from './spinners/spinner1/spinner1.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    Spinner1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GetIMGInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
