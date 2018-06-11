export class FieldBase<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    validation: any[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        order?: number,
        controlType?: string,
        validation?: any[]
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.validation = options.validation || [];
    }
}
