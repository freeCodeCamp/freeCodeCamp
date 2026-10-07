import type { TSESTree } from '@typescript-eslint/types';
import type { VisitorOptions } from './VisitorBase';
import { VisitorBase } from './VisitorBase';
export type PatternVisitorCallback = (pattern: TSESTree.Identifier, info: {
    assignments: (TSESTree.AssignmentExpression | TSESTree.AssignmentPattern)[];
    rest: boolean;
    topLevel: boolean;
}) => void;
export type PatternVisitorOptions = VisitorOptions;
export declare class PatternVisitor extends VisitorBase {
    #private;
    readonly rightHandNodes: TSESTree.Node[];
    constructor(options: PatternVisitorOptions, rootPattern: TSESTree.Node, callback: PatternVisitorCallback);
    static isPattern(node: TSESTree.Node): node is TSESTree.ArrayPattern | TSESTree.AssignmentPattern | TSESTree.Identifier | TSESTree.ObjectPattern | TSESTree.RestElement | TSESTree.SpreadElement;
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
