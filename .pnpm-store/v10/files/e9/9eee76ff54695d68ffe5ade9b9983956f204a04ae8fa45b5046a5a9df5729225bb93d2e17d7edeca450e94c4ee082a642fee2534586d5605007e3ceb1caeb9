import { type RootResult } from '../result/RootResult';
export declare const reservedWords: string[];
interface ModifiableResult {
    optional?: boolean;
    nullable?: boolean;
    repeatable?: boolean;
}
export type CatharsisParseResult = CatharsisNameResult | CatharsisUnionResult | CatharsisGenericResult | CatharsisNullResult | CatharsisUndefinedResult | CatharsisAllResult | CatharsisUnknownResult | CatharsisFunctionResult | CatharsisRecordResult | CatharsisFieldResult;
export type CatharsisNameResult = ModifiableResult & {
    type: 'NameExpression';
    name: string;
    reservedWord?: boolean;
};
export type CatharsisUnionResult = ModifiableResult & {
    type: 'TypeUnion';
    elements: CatharsisParseResult[];
};
export type CatharsisGenericResult = ModifiableResult & {
    type: 'TypeApplication';
    expression: CatharsisParseResult;
    applications: CatharsisParseResult[];
};
export type CatharsisNullResult = ModifiableResult & {
    type: 'NullLiteral';
};
export type CatharsisUndefinedResult = ModifiableResult & {
    type: 'UndefinedLiteral';
};
export type CatharsisAllResult = ModifiableResult & {
    type: 'AllLiteral';
};
export type CatharsisUnknownResult = ModifiableResult & {
    type: 'UnknownLiteral';
};
export type CatharsisFunctionResult = ModifiableResult & {
    type: 'FunctionType';
    params: CatharsisParseResult[];
    result?: CatharsisParseResult;
    this?: CatharsisParseResult;
    new?: CatharsisParseResult;
};
export type CatharsisFieldResult = ModifiableResult & {
    type: 'FieldType';
    key: CatharsisParseResult;
    value: CatharsisParseResult | undefined;
};
export type CatharsisRecordResult = ModifiableResult & {
    type: 'RecordType';
    fields: CatharsisFieldResult[];
};
export declare function catharsisTransform(result: RootResult): CatharsisParseResult;
export {};
