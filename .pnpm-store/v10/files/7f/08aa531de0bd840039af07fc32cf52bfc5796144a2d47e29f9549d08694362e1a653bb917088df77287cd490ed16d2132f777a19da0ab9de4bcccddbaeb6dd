import { StringValueNode, ASTNode, NameNode, DefinitionNode, Location } from 'graphql';
export declare type NamedDefinitionNode = DefinitionNode & {
    name?: NameNode;
};
export declare function resetComments(): void;
export declare function collectComment(node: NamedDefinitionNode): void;
export declare function pushComment(node: any, entity: string, field?: string, argument?: string): void;
export declare function printComment(comment: string): string;
/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
export declare function printWithComments(ast: ASTNode): string;
export declare function getDescription(node: {
    description?: StringValueNode;
    loc?: Location;
}, options?: {
    commentDescriptions?: boolean;
}): string | undefined;
export declare function getComment(node: {
    loc?: Location;
}): undefined | string;
export declare function getLeadingCommentBlock(node: {
    loc?: Location;
}): void | string;
export declare function dedentBlockStringValue(rawString: string): string;
/**
 * @internal
 */
export declare function getBlockStringIndentation(lines: ReadonlyArray<string>): number;
