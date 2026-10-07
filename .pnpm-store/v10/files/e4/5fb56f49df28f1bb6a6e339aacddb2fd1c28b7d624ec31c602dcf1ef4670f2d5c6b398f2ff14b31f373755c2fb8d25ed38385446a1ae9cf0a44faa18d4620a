import type { TSESTree } from '@typescript-eslint/types';
import type { PatternVisitorCallback, PatternVisitorOptions } from './PatternVisitor';
import type { VisitorOptions } from './VisitorBase';
import { VisitorBase } from './VisitorBase';
interface VisitPatternOptions extends PatternVisitorOptions {
    processRightHandNodes?: boolean;
}
export declare class Visitor extends VisitorBase {
    #private;
    constructor(optionsOrVisitor: Visitor | VisitorOptions);
    protected visitPattern(node: TSESTree.Node, callback: PatternVisitorCallback, options?: VisitPatternOptions): void;
}
export { VisitorBase, type VisitorOptions } from './VisitorBase';
