import * as ts from 'typescript';
export interface VariableInfo {
    domain: DeclarationDomain;
    exported: boolean;
    uses: VariableUse[];
    inGlobalScope: boolean;
    declarations: ts.Identifier[];
}
export interface VariableUse {
    domain: UsageDomain;
    location: ts.Identifier;
}
export declare enum DeclarationDomain {
    Namespace = 1,
    Type = 2,
    Value = 4,
    Import = 8,
    Any = 7
}
export declare enum UsageDomain {
    Namespace = 1,
    Type = 2,
    Value = 4,
    ValueOrNamespace = 5,
    Any = 7,
    TypeQuery = 8
}
export declare function getUsageDomain(node: ts.Identifier): UsageDomain | undefined;
export declare function getDeclarationDomain(node: ts.Identifier): DeclarationDomain | undefined;
export declare function collectVariableUsage(sourceFile: ts.SourceFile): Map<ts.Identifier, VariableInfo>;
