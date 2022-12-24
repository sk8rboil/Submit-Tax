import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputDetailComponent } from './components/inputdetail/input-detail/input-detail.component';
import { FillingTypeComponent } from './components/inputdetail/filling-type/filling-type.component';
import { MonthComponent } from './components/inputdetail/month/month.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { YearComponent } from './components/inputdetail/year/year.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/inputdetail/surcharge/surcharge.component';
import { PenaltyComponent } from './components/inputdetail/penalty/penalty.component';
import { TotalAmountComponent } from './components/inputdetail/total-amount/total-amount.component';
import { User } from './components/inputdetail/filling-type/filling-type-model';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StepperComponent,
    InputDetailComponent,
    FillingTypeComponent,
    MonthComponent,
    SaleAmountComponent,
    YearComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
