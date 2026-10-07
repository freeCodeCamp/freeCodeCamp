import { AvoidOptionalsConfig, ConvertNameFn, NormalizedScalarsMap, OperationVariablesToObject, ParsedDirectiveArgumentAndInputFieldMappings, ParsedEnumValuesMap } from '@graphql-codegen/visitor-plugin-common';
import { TypeNode } from 'graphql';
export declare class TypeScriptOperationVariablesToObject extends OperationVariablesToObject {
    private _avoidOptionals;
    private _immutableTypes;
    private _maybeType;
    constructor(_scalars: NormalizedScalarsMap, _convertName: ConvertNameFn, _avoidOptionals: boolean | AvoidOptionalsConfig, _immutableTypes: boolean, _namespacedImportName?: string | null, _enumNames?: string[], _enumPrefix?: boolean, _enumValues?: ParsedEnumValuesMap, _applyCoercion?: Boolean, _directiveArgumentAndInputFieldMappings?: ParsedDirectiveArgumentAndInputFieldMappings, _maybeType?: string);
    private clearOptional;
    wrapAstTypeWithModifiers(baseType: string, typeNode: TypeNode, applyCoercion?: boolean): string;
    protected formatFieldString(fieldName: string, isNonNullType: boolean, hasDefaultValue: boolean): string;
    protected formatTypeString(fieldType: string, isNonNullType: boolean, hasDefaultValue: boolean): string;
    protected wrapMaybe(type?: string): string;
    protected getAvoidOption(isNonNullType: boolean, hasDefaultValue: boolean): boolean;
    protected getPunctuation(): string;
}
