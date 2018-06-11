import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {FormControlService} from '../form-control.service';
import {FieldBase} from '../field-base';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
    @Input() fields: FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private formControlService: FormControlService) {
    }

    ngOnInit() {
        this.form = this.formControlService.toFormGroup(this.fields);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
