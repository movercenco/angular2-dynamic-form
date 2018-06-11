import {FieldBase} from './field-base';

export class FieldText extends FieldBase<string> {
    controlType = 'textbox';
    type: string;
    validation: {};

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.validation = options['validation'] || {};
    }
}
