import { ConstructTreeContextTypes } from "../constants";
import { DocumentNode } from "./node";
import { AnyContextualNode } from "./contextual-node";
export type ConstructTreeState<N extends AnyContextualNode> = {
    caretPosition: number;
    currentContext: {
        type: ConstructTreeContextTypes;
        parentRef?: any;
        content?: any[];
    };
    currentNode: N;
    rootNode: DocumentNode;
};
