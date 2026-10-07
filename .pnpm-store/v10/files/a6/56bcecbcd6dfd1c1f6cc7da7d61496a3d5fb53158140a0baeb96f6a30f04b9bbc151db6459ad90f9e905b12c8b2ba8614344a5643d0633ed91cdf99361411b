import type { ParserServices, TSESTree } from '../ts-estree';
import type { Parser } from './Parser';
import type { Scope } from './Scope';
declare class TokenStore {
    /**
     * Checks whether any comments exist or not between the given 2 nodes.
     * @param left The node to check.
     * @param right The node to check.
     * @returns `true` if one or more comments exist.
     */
    commentsExistBetween(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token): boolean;
    /**
     * Gets all comment tokens directly after the given node or token.
     * @param nodeOrToken The AST node or token to check for adjacent comment tokens.
     * @returns An array of comments in occurrence order.
     */
    getCommentsAfter(nodeOrToken: TSESTree.Node | TSESTree.Token): TSESTree.Comment[];
    /**
     * Gets all comment tokens directly before the given node or token.
     * @param nodeOrToken The AST node or token to check for adjacent comment tokens.
     * @returns An array of comments in occurrence order.
     */
    getCommentsBefore(nodeOrToken: TSESTree.Node | TSESTree.Token): TSESTree.Comment[];
    /**
     * Gets all comment tokens inside the given node.
     * @param node The AST node to get the comments for.
     * @returns An array of comments in occurrence order.
     */
    getCommentsInside(node: TSESTree.Node): TSESTree.Comment[];
    /**
     * Gets the first token of the given node.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns An object representing the token.
     */
    getFirstToken<T extends SourceCode.CursorWithSkipOptions>(node: TSESTree.Node, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the first token between two non-overlapping nodes.
     * @param left Node before the desired token range.
     * @param right Node after the desired token range.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns An object representing the token.
     */
    getFirstTokenBetween<T extends SourceCode.CursorWithSkipOptions>(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the first `count` tokens of the given node.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     */
    getFirstTokens<T extends SourceCode.CursorWithCountOptions>(node: TSESTree.Node, options?: T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the first `count` tokens between two non-overlapping nodes.
     * @param left Node before the desired token range.
     * @param right Node after the desired token range.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     * @returns Tokens between left and right.
     */
    getFirstTokensBetween<T extends SourceCode.CursorWithCountOptions>(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the last token of the given node.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns An object representing the token.
     */
    getLastToken<T extends SourceCode.CursorWithSkipOptions>(node: TSESTree.Node, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the last token between two non-overlapping nodes.
     * @param left Node before the desired token range.
     * @param right Node after the desired token range.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns An object representing the token.
     */
    getLastTokenBetween<T extends SourceCode.CursorWithSkipOptions>(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the last `count` tokens of the given node.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     */
    getLastTokens<T extends SourceCode.CursorWithCountOptions>(node: TSESTree.Node, options?: T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the last `count` tokens between two non-overlapping nodes.
     * @param left Node before the desired token range.
     * @param right Node after the desired token range.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     * @returns Tokens between left and right.
     */
    getLastTokensBetween<T extends SourceCode.CursorWithCountOptions>(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the token that follows a given node or token.
     * @param node The AST node or token.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns An object representing the token.
     */
    getTokenAfter<T extends SourceCode.CursorWithSkipOptions>(node: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the token that precedes a given node or token.
     * @param node The AST node or token.
     * @param options The option object
     * @returns An object representing the token.
     */
    getTokenBefore<T extends SourceCode.CursorWithSkipOptions>(node: TSESTree.Node | TSESTree.Token, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets the token starting at the specified index.
     * @param offset Index of the start of the token's range.
     * @param options The option object. If this is a number then it's `options.skip`. If this is a function then it's `options.filter`.
     * @returns The token starting at index, or null if no such token.
     */
    getTokenByRangeStart<T extends {
        includeComments?: boolean;
    }>(offset: number, options?: T): SourceCode.ReturnTypeFromOptions<T> | null;
    /**
     * Gets all tokens that are related to the given node.
     * @param node The AST node.
     * @param beforeCount The number of tokens before the node to retrieve.
     * @param afterCount The number of tokens after the node to retrieve.
     * @returns Array of objects representing tokens.
     */
    getTokens(node: TSESTree.Node, beforeCount?: number, afterCount?: number): TSESTree.Token[];
    /**
     * Gets all tokens that are related to the given node.
     * @param node The AST node.
     * @param options The option object. If this is a function then it's `options.filter`.
     * @returns Array of objects representing tokens.
     */
    getTokens<T extends SourceCode.CursorWithCountOptions>(node: TSESTree.Node, options: T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the `count` tokens that follows a given node or token.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     */
    getTokensAfter<T extends SourceCode.CursorWithCountOptions>(node: TSESTree.Node | TSESTree.Token, options?: number | T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets the `count` tokens that precedes a given node or token.
     * @param node The AST node.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     */
    getTokensBefore<T extends SourceCode.CursorWithCountOptions>(node: TSESTree.Node | TSESTree.Token, options?: number | T): SourceCode.ReturnTypeFromOptions<T>[];
    /**
     * Gets all of the tokens between two non-overlapping nodes.
     * @param left Node before the desired token range.
     * @param right Node after the desired token range.
     * @param options The option object. If this is a number then it's `options.count`. If this is a function then it's `options.filter`.
     * @returns Tokens between left and right.
     */
    getTokensBetween<T extends SourceCode.CursorWithCountOptions>(left: TSESTree.Node | TSESTree.Token, right: TSESTree.Node | TSESTree.Token, options?: number | T): SourceCode.ReturnTypeFromOptions<T>[];
}
declare class SourceCodeBase extends TokenStore {
    /**
     * Represents parsed source code.
     * @param ast The Program node of the AST representing the code. This AST should be created from the text that BOM was stripped.
     */
    constructor(text: string, ast: SourceCode.Program);
    /**
     * Represents parsed source code.
     * @param config The config object.
     */
    constructor(config: SourceCode.SourceCodeConfig);
    /**
     * The parsed AST for the source code.
     */
    ast: SourceCode.Program;
    applyInlineConfig(): void;
    applyLanguageOptions(): void;
    finalize(): void;
    /**
     * Retrieves an array containing all comments in the source code.
     * @returns An array of comment nodes.
     */
    getAllComments(): TSESTree.Comment[];
    /**
     * Converts a (line, column) pair into a range index.
     * @param location A line/column location
     * @returns The range index of the location in the file.
     */
    getIndexFromLoc(location: TSESTree.Position): number;
    /**
     * Gets the entire source text split into an array of lines.
     * @returns The source text as an array of lines.
     */
    getLines(): string[];
    /**
     * Converts a source text index into a (line, column) pair.
     * @param index The index of a character in a file
     * @returns A {line, column} location object with a 0-indexed column
     */
    getLocFromIndex(index: number): TSESTree.Position;
    /**
     * Gets the deepest node containing a range index.
     * @param index Range index of the desired node.
     * @returns The node if found or `null` if not found.
     */
    getNodeByRangeIndex(index: number): TSESTree.Node | null;
    /**
     * Gets the source code for the given node.
     * @param node The AST node to get the text for.
     * @param beforeCount The number of characters before the node to retrieve.
     * @param afterCount The number of characters after the node to retrieve.
     * @returns The text representing the AST node.
     */
    getText(node?: TSESTree.Node | TSESTree.Token, beforeCount?: number, afterCount?: number): string;
    /**
     * The flag to indicate that the source code has Unicode BOM.
     */
    hasBOM: boolean;
    /**
     * Determines if two nodes or tokens have at least one whitespace character
     * between them. Order does not matter. Returns false if the given nodes or
     * tokens overlap.
     * @param first The first node or token to check between.
     * @param second The second node or token to check between.
     * @returns True if there is a whitespace character between any of the tokens found between the two given nodes or tokens.
     */
    isSpaceBetween(first: TSESTree.Node | TSESTree.Token, second: TSESTree.Node | TSESTree.Token): boolean;
    /**
     * Determines if two nodes or tokens have at least one whitespace character
     * between them. Order does not matter. Returns false if the given nodes or
     * tokens overlap.
     * For backward compatibility, this method returns true if there are
     * `JSXText` tokens that contain whitespace between the two.
     * @param first The first node or token to check between.
     * @param second The second node or token to check between.
     * @returns {boolean} True if there is a whitespace character between
     * any of the tokens found between the two given nodes or tokens.
     * @deprecated in favor of isSpaceBetween
     */
    isSpaceBetweenTokens(first: TSESTree.Token, second: TSESTree.Token): boolean;
    /**
     * Returns the scope of the given node.
     * This information can be used track references to variables.
     */
    getScope(node: TSESTree.Node): Scope.Scope;
    /**
     * Returns an array of the ancestors of the given node, starting at
     * the root of the AST and continuing through the direct parent of the current node.
     * This array does not include the currently-traversed node itself.
     */
    getAncestors(node: TSESTree.Node): TSESTree.Node[];
    /**
     * Returns a list of variables declared by the given node.
     * This information can be used to track references to variables.
     */
    getDeclaredVariables(node: TSESTree.Node): readonly Scope.Variable[];
    /**
     * Marks a variable with the given name in the current scope as used.
     * This affects the no-unused-vars rule.
     */
    markVariableAsUsed(name: string, node: TSESTree.Node): boolean;
    /**
     * The source code split into lines according to ECMA-262 specification.
     * This is done to avoid each rule needing to do so separately.
     */
    lines: string[];
    /**
     * The indexes in `text` that each line starts
     */
    lineStartIndices: number[];
    /**
     * The parser services of this source code.
     */
    parserServices?: Partial<ParserServices>;
    /**
     * The scope of this source code.
     */
    scopeManager: Scope.ScopeManager | null;
    /**
     * The original text source code. BOM was stripped from this text.
     */
    text: string;
    /**
     * All of the tokens and comments in the AST.
     *
     * TODO: rename to 'tokens'
     */
    tokensAndComments: TSESTree.Token[];
    /**
     * The visitor keys to traverse AST.
     */
    visitorKeys: SourceCode.VisitorKeys;
    /**
     * Split the source code into multiple lines based on the line delimiters.
     * @param text Source code as a string.
     * @returns Array of source code lines.
     */
    static splitLines(text: string): string[];
}
declare namespace SourceCode {
    interface Program extends TSESTree.Program {
        comments: TSESTree.Comment[];
        tokens: TSESTree.Token[];
    }
    interface SourceCodeConfig {
        /**
         * The Program node of the AST representing the code. This AST should be created from the text that BOM was stripped.
         */
        ast: Program;
        /**
         * The parser services.
         */
        parserServices: ParserServices | null;
        /**
         * The scope of this source code.
         */
        scopeManager: Scope.ScopeManager | null;
        /**
         * The source code text.
         */
        text: string;
        /**
         * The visitor keys to traverse AST.
         */
        visitorKeys: VisitorKeys | null;
    }
    type VisitorKeys = Parser.VisitorKeys;
    type FilterPredicate = (token: TSESTree.Token) => boolean;
    type GetFilterPredicate<Filter, Default> = Filter extends ((token: TSESTree.Token) => token is infer U extends TSESTree.Token) ? U : Default;
    type GetFilterPredicateFromOptions<Options, Default> = Options extends {
        filter?: FilterPredicate;
    } ? GetFilterPredicate<Options['filter'], Default> : GetFilterPredicate<Options, Default>;
    type ReturnTypeFromOptions<T> = T extends {
        includeComments: true;
    } ? GetFilterPredicateFromOptions<T, TSESTree.Token> : GetFilterPredicateFromOptions<T, Exclude<TSESTree.Token, TSESTree.Comment>>;
    type CursorWithSkipOptions = number | FilterPredicate | {
        /**
         * The predicate function to choose tokens.
         */
        filter?: FilterPredicate;
        /**
         * The flag to iterate comments as well.
         */
        includeComments?: boolean;
        /**
         * The count of tokens the cursor skips.
         */
        skip?: number;
    };
    type CursorWithCountOptions = number | FilterPredicate | {
        /**
         * The maximum count of tokens the cursor iterates.
         */
        count?: number;
        /**
         * The predicate function to choose tokens.
         */
        filter?: FilterPredicate;
        /**
         * The flag to iterate comments as well.
         */
        includeComments?: boolean;
    };
}
declare const SourceCode_base: typeof SourceCodeBase;
declare class SourceCode extends SourceCode_base {
}
export { SourceCode };
