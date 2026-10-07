import type { TSESTree } from '@typescript-eslint/types';
import type { VisitorOptions } from './VisitorBase';
import { VisitorBase } from './VisitorBase';
type PatternVisitorCallback = (pattern: TSESTree.Identifier, info: {
    assignments: (TSESTree.AssignmentPattern | TSESTree.AssignmentExpression)[];
    rest: boolean;
    topLevel: boolean;
}) => void;
type PatternVisitorOptions = VisitorOptions;
declare class PatternVisitor extends VisitorBase {
    #private;
    static isPattern(node: TSESTree.Node): node is TSESTree.Identifier | TSESTree.ObjectPattern | TSESTree.ArrayPattern | TSESTree.SpreadElement | TSESTree.RestElement | TSESTree.AssignmentPattern;
    readonly rightHandNodes: TSESTree.Node[];
    constructor(options: PatternVisitorOptions, rootPattern: TSESTree.Node, callback: PatternVisitorCallback);
    protected ArrayExpression(node: TSESTree.ArrayExpression): void;
    protected ArrayPattern(pattern: TSESTree.ArrayPattern): void;
    protected AssignmentExpression(node: TSESTree.AssignmentExpression): void;
    protected AssignmentPattern(pattern: TSESTree.AssignmentPattern): void;
    protected CallExpression(node: TSESTree.CallExpression): void;
    protected Decorator(): void;
    protected Identifier(pattern: TSESTree.Identifier): void;
    protected MemberExpression(node: TSESTree.MemberExpression): void;
    protected Property(property: TSESTree.Property): void;
    protected RestElement(pattern: TSESTree.RestElement): void;
    protected SpreadElement(node: TSESTree.SpreadElement): void;
    protected TSTypeAnnotation(): void;
}
export { PatternVisitor, PatternVisitorCallback, PatternVisitorOptions };
//# sourceMappingURL=PatternVisitor.d.ts.map