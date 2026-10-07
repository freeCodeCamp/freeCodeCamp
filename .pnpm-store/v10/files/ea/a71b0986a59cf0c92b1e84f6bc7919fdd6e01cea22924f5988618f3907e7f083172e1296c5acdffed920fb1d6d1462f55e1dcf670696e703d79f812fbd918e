import type { TSESTree } from '../ts-estree';
import type { PatternVisitorCallback, PatternVisitorOptions, Visitor } from './Options';
import type { ScopeManager } from './ScopeManager';
interface PatternVisitor extends Visitor {
    options: PatternVisitorOptions;
    scopeManager: ScopeManager;
    parent?: TSESTree.Node;
    rightHandNodes: TSESTree.Node[];
    Identifier(pattern: TSESTree.Node): void;
    Property(property: TSESTree.Node): void;
    ArrayPattern(pattern: TSESTree.Node): void;
    AssignmentPattern(pattern: TSESTree.Node): void;
    RestElement(pattern: TSESTree.Node): void;
    MemberExpression(node: TSESTree.Node): void;
    SpreadElement(node: TSESTree.Node): void;
    ArrayExpression(node: TSESTree.Node): void;
    AssignmentExpression(node: TSESTree.Node): void;
    CallExpression(node: TSESTree.Node): void;
}
declare const PatternVisitor: {
    new (options: PatternVisitorOptions, rootPattern: TSESTree.BaseNode, callback: PatternVisitorCallback): PatternVisitor;
    isPattern(node: TSESTree.Node): boolean;
};
export { PatternVisitor };
//# sourceMappingURL=PatternVisitor.d.ts.map