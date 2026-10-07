import * as ts from 'typescript';
export interface ReadonlynessOptions {
    readonly treatMethodsAsReadonly?: boolean;
}
export declare const readonlynessOptionsSchema: {
    type: string;
    additionalProperties: boolean;
    properties: {
        treatMethodsAsReadonly: {
            type: string;
        };
    };
};
export declare const readonlynessOptionsDefaults: ReadonlynessOptions;
/**
 * Checks if the given type is readonly
 */
declare function isTypeReadonly(checker: ts.TypeChecker, type: ts.Type, options?: ReadonlynessOptions): boolean;
export { isTypeReadonly };
//# sourceMappingURL=isTypeReadonly.d.ts.map
