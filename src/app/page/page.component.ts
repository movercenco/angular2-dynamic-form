import {Component, OnInit} from '@angular/core';
import {FormService} from '../form.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    providers:  [FormService]
})
export class PageComponent implements OnInit {

    fields = this.formService.getForm('formName');

    constructor(private formService: FormService) {
    }

    ngOnInit() {
    }

}
