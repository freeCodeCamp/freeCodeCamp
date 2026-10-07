import * as ts from 'typescript';
export declare function endsControlFlow(statement: ts.Statement | ts.BlockLike, checker?: ts.TypeChecker): boolean;
export declare type ControlFlowStatement = ts.BreakStatement | ts.ContinueStatement | ts.ReturnStatement | ts.ThrowStatement | ts.ExpressionStatement & {
    expression: ts.CallExpression;
};
export interface ControlFlowEnd {
    /**
     * Statements that may end control flow at this statement.
     * Does not contain control flow statements that jump only inside the statement, for example a `continue` inside a nested for loop.
     */
    readonly statements: ReadonlyArray<ControlFlowStatement>;
    /** `true` if control flow definitely ends. */
    readonly end: boolean;
}
export declare function getControlFlowEnd(statement: ts.Statement | ts.BlockLike, checker?: ts.TypeChecker): ControlFlowEnd;
export declare enum SignatureEffect {
    Never = 1,
    Asserts = 2
}
/**
 * Dermines whether a top level CallExpression has a control flow effect according to TypeScript's rules.
 * This handles functions returning `never` and `asserts`.
 */
export declare function callExpressionAffectsControlFlow(node: ts.CallExpression, checker: ts.TypeChecker): SignatureEffect | undefined;
