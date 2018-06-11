import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page/page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'dynamic-form', component: PageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
