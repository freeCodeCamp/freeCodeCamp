import * as Schema from '../types/index.mjs';
export declare class Stack {
    #private;
    private readonly context;
    private readonly schema;
    private readonly ids;
    private readonly anchors;
    private readonly recursiveAnchors;
    private readonly dynamicAnchors;
    constructor(context: Record<PropertyKey, Schema.XSchema>, schema: Schema.XSchema);
    BaseURL(): URL;
    Base(): Schema.XSchemaObject;
    Push(schema: Schema.XSchema): void;
    Pop(schema: Schema.XSchema): void;
    Ref(ref: Schema.XRef): Schema.XSchema | undefined;
    RecursiveRef(recursiveRef: Schema.XRecursiveRef): Schema.XSchema | undefined;
    DynamicRef(dynamicRef: Schema.XDynamicRef): Schema.XSchema | undefined;
}
