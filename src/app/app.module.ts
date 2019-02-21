import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatButtonModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PpiCalculatorComponent } from "./ppi-calculator/ppi-calculator.component";
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [AppComponent, PpiCalculatorComponent, ScreenComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
