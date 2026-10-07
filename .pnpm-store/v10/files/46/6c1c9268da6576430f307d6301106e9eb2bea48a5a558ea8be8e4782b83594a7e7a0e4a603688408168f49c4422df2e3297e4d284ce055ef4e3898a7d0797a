import type { TSESTree } from '../ts-estree';
type PatternVisitorCallback = (pattern: TSESTree.Identifier, info: {
    rest: boolean;
    topLevel: boolean;
    assignments: TSESTree.AssignmentPattern[];
}) => void;
interface PatternVisitorOptions {
    processRightHandNodes?: boolean;
}
interface Visitor {
    visitChildren<T extends TSESTree.BaseNode | undefined | null>(node?: T): void;
    visit<T extends TSESTree.BaseNode | undefined | null>(node?: T): void;
}
export { PatternVisitorCallback, PatternVisitorOptions, Visitor };
//# sourceMappingURL=Options.d.ts.map