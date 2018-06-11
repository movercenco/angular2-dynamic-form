import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {PageComponent} from './page/page.component';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        PageComponent,
        DynamicFormFieldComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
