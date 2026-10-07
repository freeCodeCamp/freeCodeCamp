import type { ErrorObject } from "../types";
export default class ValidationError extends Error {
    readonly errors: Partial<ErrorObject>[];
    readonly ajv: true;
    readonly validation: true;
    constructor(errors: Partial<ErrorObject>[]);
}
