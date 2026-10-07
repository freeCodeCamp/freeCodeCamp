import Ajv, { AnySchema, AnyValidateFunction, ErrorObject } from "../core";
export default class AjvPack {
    readonly ajv: Ajv;
    errors?: ErrorObject[] | null;
    constructor(ajv: Ajv);
    validate(schemaKeyRef: AnySchema | string, data: unknown): boolean | Promise<unknown>;
    compile<T = unknown>(schema: AnySchema, meta?: boolean): AnyValidateFunction<T>;
    getSchema<T = unknown>(keyRef: string): AnyValidateFunction<T> | undefined;
    private getStandalone;
    addSchema(...args: Parameters<typeof Ajv.prototype.addSchema>): AjvPack;
    addKeyword(...args: Parameters<typeof Ajv.prototype.addKeyword>): AjvPack;
}
