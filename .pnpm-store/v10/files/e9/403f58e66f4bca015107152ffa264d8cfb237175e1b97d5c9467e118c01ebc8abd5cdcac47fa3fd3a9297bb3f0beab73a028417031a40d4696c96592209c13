import { Code, Name } from "./code";
interface NameGroup {
    prefix: string;
    index: number;
}
export interface NameValue {
    ref: ValueReference;
    key?: unknown;
    code?: Code;
}
export type ValueReference = unknown;
interface ScopeOptions {
    prefixes?: Set<string>;
    parent?: Scope;
}
interface ValueScopeOptions extends ScopeOptions {
    scope: ScopeStore;
    es5?: boolean;
    lines?: boolean;
}
export type ScopeStore = Record<string, ValueReference[] | undefined>;
type ScopeValues = {
    [Prefix in string]?: Map<unknown, ValueScopeName>;
};
export type ScopeValueSets = {
    [Prefix in string]?: Set<ValueScopeName>;
};
export declare enum UsedValueState {
    Started = 0,
    Completed = 1
}
export type UsedScopeValues = {
    [Prefix in string]?: Map<ValueScopeName, UsedValueState | undefined>;
};
export declare const varKinds: {
    const: Name;
    let: Name;
    var: Name;
};
export declare class Scope {
    protected readonly _names: {
        [Prefix in string]?: NameGroup;
    };
    protected readonly _prefixes?: Set<string>;
    protected readonly _parent?: Scope;
    constructor({ prefixes, parent }?: ScopeOptions);
    toName(nameOrPrefix: Name | string): Name;
    name(prefix: string): Name;
    protected _newName(prefix: string): string;
    private _nameGroup;
}
interface ScopePath {
    property: string;
    itemIndex: number;
}
export declare class ValueScopeName extends Name {
    readonly prefix: string;
    value?: NameValue;
    scopePath?: Code;
    constructor(prefix: string, nameStr: string);
    setValue(value: NameValue, { property, itemIndex }: ScopePath): void;
}
interface VSOptions extends ValueScopeOptions {
    _n: Code;
}
export declare class ValueScope extends Scope {
    protected readonly _values: ScopeValues;
    protected readonly _scope: ScopeStore;
    readonly opts: VSOptions;
    constructor(opts: ValueScopeOptions);
    get(): ScopeStore;
    name(prefix: string): ValueScopeName;
    value(nameOrPrefix: ValueScopeName | string, value: NameValue): ValueScopeName;
    getValue(prefix: string, keyOrRef: unknown): ValueScopeName | undefined;
    scopeRefs(scopeName: Name, values?: ScopeValues | ScopeValueSets): Code;
    scopeCode(values?: ScopeValues | ScopeValueSets, usedValues?: UsedScopeValues, getCode?: (n: ValueScopeName) => Code | undefined): Code;
    private _reduceValues;
}
export {};
