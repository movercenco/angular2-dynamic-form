import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {FieldBase} from './field-base';
import {AbstractControl} from '@angular/forms/src/model';

@Injectable({
    providedIn: 'root'
})
export class FormControlService {
    constructor() {
    }

    toFormGroup(fields: FieldBase<any>[]) {
        let group: any = {};

        fields.forEach(field => {
            let validation_rule = [];
            if (field.validation.length > 0) {
                field.validation.forEach(rule => {
                    switch (rule.rule) {
                        case 'required':
                            validation_rule.push(Validators.required);
                            break;
                        case 'minlength':
                            validation_rule.push(Validators.minLength(rule.value));
                            break;
                    }
                });
            }

            group[field.key] = new FormControl(field.value || '', validation_rule);
        });
        return new FormGroup(group);
    }
}
