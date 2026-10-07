import { ConstructTreeContextTypes } from "../constants";
import { DocumentNode, AnyToken } from "../types";
export declare function constructTree(tokens: AnyToken[]): {
    state: {
        caretPosition: number;
        currentContext: {
            type: ConstructTreeContextTypes;
            parentRef: undefined;
            content: never[];
        };
        currentNode: DocumentNode;
        rootNode: DocumentNode;
    };
    ast: DocumentNode;
};
