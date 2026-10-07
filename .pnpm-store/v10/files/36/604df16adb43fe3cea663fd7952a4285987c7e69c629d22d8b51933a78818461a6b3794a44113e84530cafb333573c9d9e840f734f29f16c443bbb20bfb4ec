export type TValidationError = TAdditionalPropertiesError | TAnyOfError | TBooleanError | TConstError | TContainsError | TDependenciesError | TDependentRequiredError | TEnumError | TExclusiveMaximumError | TExclusiveMinimumError | TFormatError | TGuardError | TIfError | TMaximumError | TMaxItemsError | TMaxLengthError | TMaxPropertiesError | TMinimumError | TMinItemsError | TMinLengthError | TMinPropertiesError | TMultipleOfError | TNotError | TOneOfError | TPatternError | TPropertyNamesError | TRefineError | TRequiredError | TTypeError | TUnevaluatedItemsError | TUnevaluatedPropertiesError | TUniqueItemsError;
export declare function IsValidationError(value: unknown): value is TValidationError;
export type TLocalizedValidationError = TValidationError & {
    message: string;
};
export declare function IsLocalizedValidationError(value: unknown): value is TLocalizedValidationError;
export type TLocalizedValidationMessageCallback = (error: TValidationError) => string;
export interface TValidationErrorBase {
    keyword: string;
    schemaPath: string;
    instancePath: string;
    params: object;
}
export interface TAdditionalPropertiesError extends TValidationErrorBase {
    keyword: 'additionalProperties';
    params: {
        additionalProperties: string[];
    };
}
export interface TAnyOfError extends TValidationErrorBase {
    keyword: 'anyOf';
    params: {};
}
export interface TBooleanError extends TValidationErrorBase {
    keyword: 'boolean';
    params: {};
}
export interface TConstError extends TValidationErrorBase {
    keyword: 'const';
    params: {
        allowedValue: unknown;
    };
}
export interface TContainsError extends TValidationErrorBase {
    keyword: 'contains';
    params: {
        minContains: number;
        maxContains?: number;
    };
}
export interface TDependenciesError extends TValidationErrorBase {
    keyword: 'dependencies';
    params: {
        property: string;
        dependencies: string[];
    };
}
export interface TDependentRequiredError extends TValidationErrorBase {
    keyword: 'dependentRequired';
    params: {
        property: string;
        dependencies: string[];
    };
}
export interface TEnumError extends TValidationErrorBase {
    keyword: 'enum';
    params: {
        allowedValues: unknown[];
    };
}
export interface TExclusiveMaximumError extends TValidationErrorBase {
    keyword: 'exclusiveMaximum';
    params: {
        comparison: '<';
        limit: number | bigint;
    };
}
export interface TExclusiveMinimumError extends TValidationErrorBase {
    keyword: 'exclusiveMinimum';
    params: {
        comparison: '>';
        limit: number | bigint;
    };
}
export interface TFormatError extends TValidationErrorBase {
    keyword: 'format';
    params: {
        format: string;
    };
}
export interface TGuardError extends TValidationErrorBase {
    keyword: '~guard';
    params: {
        errors: object[];
    };
}
export interface TIfError extends TValidationErrorBase {
    keyword: 'if';
    params: {
        failingKeyword: 'then' | 'else';
    };
}
export interface TMaximumError extends TValidationErrorBase {
    keyword: 'maximum';
    params: {
        comparison: '<=';
        limit: number | bigint;
    };
}
export interface TMaxItemsError extends TValidationErrorBase {
    keyword: 'maxItems';
    params: {
        limit: number;
    };
}
export interface TMaxLengthError extends TValidationErrorBase {
    keyword: 'maxLength';
    params: {
        limit: number;
    };
}
export interface TMaxPropertiesError extends TValidationErrorBase {
    keyword: 'maxProperties';
    params: {
        limit: number;
    };
}
export interface TMinimumError extends TValidationErrorBase {
    keyword: 'minimum';
    params: {
        comparison: '>=';
        limit: number | bigint;
    };
}
export interface TMinItemsError extends TValidationErrorBase {
    keyword: 'minItems';
    params: {
        limit: number;
    };
}
export interface TMinLengthError extends TValidationErrorBase {
    keyword: 'minLength';
    params: {
        limit: number;
    };
}
export interface TMinPropertiesError extends TValidationErrorBase {
    keyword: 'minProperties';
    params: {
        limit: number;
    };
}
export interface TMultipleOfError extends TValidationErrorBase {
    keyword: 'multipleOf';
    params: {
        multipleOf: number | bigint;
    };
}
export interface TMinimumError extends TValidationErrorBase {
    keyword: 'minimum';
    params: {
        comparison: '>=';
        limit: number | bigint;
    };
}
export interface TNotError extends TValidationErrorBase {
    keyword: 'not';
    params: {};
}
export interface TOneOfError extends TValidationErrorBase {
    keyword: 'oneOf';
    params: {
        passingSchemas: number[];
    };
}
export interface TPatternError extends TValidationErrorBase {
    keyword: 'pattern';
    params: {
        pattern: string | RegExp;
    };
}
export interface TPropertyNamesError extends TValidationErrorBase {
    keyword: 'propertyNames';
    params: {
        propertyNames: string[];
    };
}
export interface TRefineError extends TValidationErrorBase {
    keyword: '~refine';
    params: {
        index: number;
        message: string;
    };
}
export interface TRequiredError extends TValidationErrorBase {
    keyword: 'required';
    params: {
        requiredProperties: string[];
    };
}
export interface TTypeError extends TValidationErrorBase {
    keyword: 'type';
    params: {
        type: string | string[];
    };
}
export interface TUnevaluatedItemsError extends TValidationErrorBase {
    keyword: 'unevaluatedItems';
    params: {
        unevaluatedItems: number[];
    };
}
export interface TUnevaluatedPropertiesError extends TValidationErrorBase {
    keyword: 'unevaluatedProperties';
    params: {
        unevaluatedProperties: PropertyKey[];
    };
}
export interface TUniqueItemsError extends TValidationErrorBase {
    keyword: 'uniqueItems';
    params: {
        duplicateItems: number[];
    };
}
