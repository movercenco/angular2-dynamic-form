import {Injectable} from '@angular/core';
import {FieldBase} from './field-base';
import {FieldText} from './field-text';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor() {
    }

    getForm(form): any {
        const response = this.getFormSchemaFromServer(form);
        const fields: FieldBase<any>[] = [];
        for (const field of response.fields) {
            if (field.control_yype === 'textbox') {
                fields.push(new FieldText(field));
            }
        }

        return fields;
    }


    // make HTTP request to get form schema by name
    getFormSchemaFromServer(form): any {
        const responseJson: any = {
            form: form,
            action: '',
            fields: [
                {
                    control_yype: 'textbox',
                    key: 'name',
                    label: 'Name',
                    type: 'text',
                    value: '',
                    validation: [
                        {
                            rule: 'required',
                            value: true
                        }, {
                            rule: 'minlength',
                            value: 5
                        }
                    ]
                },
                {
                    control_yype: 'textbox',
                    key: 'email',
                    label: 'Email',
                    type: 'email',
                    value: '',
                    validation: [
                        {
                            rule: 'required',
                            value: true
                        }
                    ]
                },
                {
                    control_yype: 'textbox',
                    key: 'password',
                    label: 'Password',
                    type: 'password',
                    value: '',
                    validation: []
                }
            ]
        };

        return responseJson;
    }
}
