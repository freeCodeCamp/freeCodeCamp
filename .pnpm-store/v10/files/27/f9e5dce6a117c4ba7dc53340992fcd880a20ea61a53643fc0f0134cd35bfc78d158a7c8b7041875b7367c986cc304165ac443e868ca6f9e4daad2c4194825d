import * as eslint from "eslint";
import * as estree from "estree";

export const version: string;

export class ScopeManager implements eslint.Scope.ScopeManager {
    scopes: Scope[];
    globalScope: Scope;
    acquire(node: {}, inner?: boolean): Scope | null;
    getDeclaredVariables(node: {}): Variable[];
}

export class Scope implements eslint.Scope.Scope {
    type:
        | "block"
        | "catch"
        | "class"
        | "for"
        | "function"
        | "function-expression-name"
        | "global"
        | "module"
        | "switch"
        | "with"
        | "TDZ";
    isStrict: boolean;
    upper: Scope | null;
    childScopes: Scope[];
    variableScope: Scope;
    block: estree.Node;
    variables: Variable[];
    set: Map<string, Variable>;
    references: Reference[];
    through: Reference[];
    functionExpressionScope: boolean;
}

export class Variable implements eslint.Scope.Variable {
    name: string;
    scope: Scope;
    identifiers: estree.Identifier[];
    references: Reference[];
    defs: eslint.Scope.Definition[];
}

export class Reference implements eslint.Scope.Reference {
    identifier: estree.Identifier;
    from: Scope;
    resolved: Variable | null;
    writeExpr: estree.Node | null;
    init: boolean;

    isWrite(): boolean;
    isRead(): boolean;
    isWriteOnly(): boolean;
    isReadOnly(): boolean;
    isReadWrite(): boolean;
}

export interface AnalysisOptions {
    optimistic?: boolean;
    directive?: boolean;
    ignoreEval?: boolean;
    nodejsScope?: boolean;
    impliedStrict?: boolean;
    fallback?: string | ((node: {}) => string[]);
    sourceType?: "script" | "module";
    ecmaVersion?: number;
}

export function analyze(ast: {}, options?: AnalysisOptions): ScopeManager;
