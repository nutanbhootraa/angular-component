import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AssessmentDataBindingComponent } from './assessment-data-binding/assessment-data-binding.component';
import { DirectiveAssessmentComponent } from './directive-assessment/directive-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingComponent,
    AssessmentDataBindingComponent,
    DirectiveAssessmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
