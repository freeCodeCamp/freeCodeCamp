import type { TSESTree } from '@typescript-eslint/types';
import { VisitorKeys } from '@typescript-eslint/visitor-keys';
interface VisitorOptions {
    childVisitorKeys?: VisitorKeys | null;
    visitChildrenEvenIfSelectorExists?: boolean;
}
declare abstract class VisitorBase {
    #private;
    constructor(options: VisitorOptions);
    /**
     * Default method for visiting children.
     * @param node the node whose children should be visited
     * @param exclude a list of keys to not visit
     */
    visitChildren<T extends TSESTree.Node>(node: T | null | undefined, excludeArr?: (keyof T)[]): void;
    /**
     * Dispatching node.
     */
    visit(node: TSESTree.Node | null | undefined): void;
}
export { VisitorBase, VisitorOptions, VisitorKeys };
//# sourceMappingURL=VisitorBase.d.ts.map