/**
 * Parse CSS following the {@link https://drafts.csswg.org/css-syntax/#parsing | CSS Syntax Level 3 specification}.
 *
 * @remarks
 * The tokenizing and parsing tools provided by CSS Tools are designed to be low level and generic with strong ties to their respective specifications.
 *
 * Any analysis or mutation of CSS source code should be done with the least powerful tool that can accomplish the task.
 * For many applications it is sufficient to work with tokens.
 * For others you might need to use {@link https://github.com/csstools/postcss-plugins/tree/main/packages/css-parser-algorithms | @csstools/css-parser-algorithms} or a more specific parser.
 *
 * The implementation of the AST nodes is kept lightweight and simple.
 * Do not expect magic methods, instead assume that arrays and class instances behave like any other JavaScript.
 *
 * @example
 * Parse a string of CSS into a component value:
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseComponentValue } from '@csstools/css-parser-algorithms';
 *
 * const myCSS = `calc(1px * 2)`;
 *
 * const componentValue = parseComponentValue(tokenize({
 * 	css: myCSS,
 * }));
 *
 * console.log(componentValue);
 * ```
 *
 * @example
 * Use the right algorithm for the job.
 *
 * Algorithms that can parse larger structures (comma-separated lists, ...) can also parse smaller structures.
 * However, the opposite is not true.
 *
 * If your context allows a list of component values, use {@link parseListOfComponentValues}:
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseListOfComponentValues } from '@csstools/css-parser-algorithms';
 *
 * parseListOfComponentValues(tokenize({ css: `10x 20px` }));
 * ```
 *
 * If your context allows a comma-separated list of component values, use {@link parseCommaSeparatedListOfComponentValues}:
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseCommaSeparatedListOfComponentValues } from '@csstools/css-parser-algorithms';
 *
 * parseCommaSeparatedListOfComponentValues(tokenize({ css: `20deg, 50%, 30%` }));
 * ```
 *
 * @example
 * Use the stateful walkers to keep track of the context of a given component value.
 *
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseComponentValue, isSimpleBlockNode } from '@csstools/css-parser-algorithms';
 *
 * const myCSS = `calc(1px * (5 / 2))`;
 *
 * const componentValue = parseComponentValue(tokenize({ css: myCSS }));
 *
 * let state = { inSimpleBlock: false };
 * componentValue.walk((entry) => {
 * 	if (isSimpleBlockNode(entry)) {
 * 		entry.state.inSimpleBlock = true;
 * 		return;
 * 	}
 *
 * 	if (entry.state.inSimpleBlock) {
 * 		console.log(entry.node.toString()); // `5`, ...
 * 	}
 * }, state);
 * ```
 *
 * @packageDocumentation
 */

import type { CSSToken } from '@csstools/css-tokenizer';
import { ParseError } from '@csstools/css-tokenizer';
import type { TokenFunction } from '@csstools/css-tokenizer';

export declare class CommentNode {
    /**
     * The node type, always `ComponentValueType.Comment`
     */
    type: ComponentValueType;
    /**
     * The comment token.
     */
    value: CSSToken;
    constructor(value: CSSToken);
    /**
     * Retrieve the tokens for the current comment.
     * This is the inverse of parsing from a list of tokens.
     */
    tokens(): Array<CSSToken>;
    /**
     * Convert the current comment to a string.
     * This is not a true serialization.
     * It is purely a concatenation of the string representation of the tokens.
     */
    toString(): string;
    /**
     * @internal
     *
     * A debug helper to convert the current object to a JSON representation.
     * This is useful in asserts and to store large ASTs in files.
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isCommentNode(): this is CommentNode;
    /**
     * @internal
     */
    static isCommentNode(x: unknown): x is CommentNode;
}

export declare type ComponentValue = FunctionNode | SimpleBlockNode | WhitespaceNode | CommentNode | TokenNode;

export declare enum ComponentValueType {
    Function = "function",
    SimpleBlock = "simple-block",
    Whitespace = "whitespace",
    Comment = "comment",
    Token = "token"
}

export declare type ContainerNode = FunctionNode | SimpleBlockNode;

export declare abstract class ContainerNodeBaseClass {
    /**
     * The contents of the `Function` or `Simple Block`.
     * This is a list of component values.
     */
    value: Array<ComponentValue>;
    /**
     * Retrieve the index of the given item in the current node.
     * For most node types this will be trivially implemented as `this.value.indexOf(item)`.
     */
    indexOf(item: ComponentValue): number | string;
    /**
     * Retrieve the item at the given index in the current node.
     * For most node types this will be trivially implemented as `this.value[index]`.
     */
    at(index: number | string): ComponentValue | undefined;
    /**
     * Iterates over each item in the `value` array of the current node.
     *
     * @param cb - The callback function to execute for each item.
     * The function receives an object containing the current node (`node`), its parent (`parent`),
     * and an optional `state` object.
     * A second parameter is the index of the current node.
     * The function can return `false` to stop the iteration.
     *
     * @param state - An optional state object that can be used to pass additional information to the callback function.
     * The state object is cloned for each iteration. This means that changes to the state object are not reflected in the next iteration.
     *
     * @returns `false` if the iteration was halted, `undefined` otherwise.
     */
    forEach<T extends Record<string, unknown>, U extends ContainerNode>(this: U, cb: (entry: {
        node: ComponentValue;
        parent: ContainerNode;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
    /**
     * Walks the current node and all its children.
     *
     * @param cb - The callback function to execute for each item.
     * The function receives an object containing the current node (`node`), its parent (`parent`),
     * and an optional `state` object.
     * A second parameter is the index of the current node.
     * The function can return `false` to stop the iteration.
     *
     * @param state - An optional state object that can be used to pass additional information to the callback function.
     * The state object is cloned for each iteration. This means that changes to the state object are not reflected in the next iteration.
     * However changes are passed down to child node iterations.
     *
     * @returns `false` if the iteration was halted, `undefined` otherwise.
     */
    walk<T extends Record<string, unknown>, U extends ContainerNode>(this: U, cb: (entry: {
        node: ComponentValue;
        parent: ContainerNode;
        state?: T;
    }, index: number | string) => boolean | void, state?: T): false | undefined;
}

/**
 * Iterates over each item in a list of component values.
 *
 * @param cb - The callback function to execute for each item.
 * The function receives an object containing the current node (`node`), its parent (`parent`),
 * and an optional `state` object.
 * A second parameter is the index of the current node.
 * The function can return `false` to stop the iteration.
 *
 * @param state - An optional state object that can be used to pass additional information to the callback function.
 * The state object is cloned for each iteration. This means that changes to the state object are not reflected in the next iteration.
 *
 * @returns `false` if the iteration was halted, `undefined` otherwise.
 */
export declare function forEach<T extends Record<string, unknown>>(componentValues: Array<ComponentValue>, cb: (entry: {
    node: ComponentValue;
    parent: ContainerNode | {
        value: Array<ComponentValue>;
    };
    state?: T;
}, index: number | string) => boolean | void, state?: T): false | undefined;

/**
 * A function node.
 *
 * @example
 * ```js
 * const node = parseComponentValue(tokenize('calc(1 + 1)'));
 *
 * isFunctionNode(node); // true
 * node.getName(); // 'calc'
 * ```
 */
export declare class FunctionNode extends ContainerNodeBaseClass {
    /**
     * The node type, always `ComponentValueType.Function`
     */
    type: ComponentValueType;
    /**
     * The token for the name of the function.
     */
    name: TokenFunction;
    /**
     * The token for the closing parenthesis of the function.
     * If the function is unclosed, this will be an EOF token.
     */
    endToken: CSSToken;
    constructor(name: TokenFunction, endToken: CSSToken, value: Array<ComponentValue>);
    /**
     * Retrieve the name of the current function.
     * This is the parsed and unescaped name of the function.
     */
    getName(): string;
    /**
     * Normalize the current function:
     * 1. if the "endToken" is EOF, replace with a ")-token"
     */
    normalize(): void;
    /**
     * Retrieve the tokens for the current function.
     * This is the inverse of parsing from a list of tokens.
     */
    tokens(): Array<CSSToken>;
    /**
     * Convert the current function to a string.
     * This is not a true serialization.
     * It is purely a concatenation of the string representation of the tokens.
     */
    toString(): string;
    /**
     * @internal
     *
     * A debug helper to convert the current object to a JSON representation.
     * This is useful in asserts and to store large ASTs in files.
     */
    toJSON(): unknown;
    /**
     * @internal
     */
    isFunctionNode(): this is FunctionNode;
    /**
     * @internal
     */
    static isFunctionNode(x: unknown): x is FunctionNode;
}

/**
 * AST nodes do not have a `parent` property or method.
 * This makes it harder to traverse the AST upwards.
 * This function builds a `Map<Child, Parent>` that can be used to lookup ancestors of a node.
 *
 * @remarks
 * There is no magic behind this or the map it returns.
 * Mutating the AST will not update the map.
 *
 * Types are erased and any content of the map has type `unknown`.
 * If someone knows a clever way to type this, please let us know.
 *
 * @example
 * ```js
 * const ancestry = gatherNodeAncestry(mediaQuery);
 * mediaQuery.walk((entry) => {
 * 	const node = entry.node; // directly exposed
 * 	const parent = entry.parent; // directly exposed
 * 	const grandParent: unknown = ancestry.get(parent); // lookup
 *
 * 	console.log('node', node);
 * 	console.log('parent', parent);
 * 	console.log('grandParent', grandParent);
 * });
 * ```
 */
export declare function gatherNodeAncestry(node: {
    walk(cb: (entry: {
        node: unknown;
        parent: unknown;
    }, index: number | string) => boolean | void): false | undefined;
}): Map<unknown, unknown>;

/**
 * Check if the current object is a `CommentNode`.
 * This is a type guard.
 */
export declare function isCommentNode(x: unknown): x is CommentNode;

/**
 * Check if the current object is a `FunctionNode`.
 * This is a type guard.
 */
export declare function isFunctionNode(x: unknown): x is FunctionNode;

/**
 * Check if the current object is a `SimpleBlockNode`.
 * This is a type guard.
 */
export declare function isSimpleBlockNode(x: unknown): x is SimpleBlockNode;

/**
 * Check if the current object is a `TokenNode`.
 * This is a type guard.
 */
export declare function isTokenNode(x: unknown): x is TokenNode;

/**
 * Check if the current object is a `WhitespaceNode`.
 * This is a type guard.
 */
export declare function isWhitespaceNode(x: unknown): x is WhitespaceNode;

/**
 * Check if the current object is a `WhiteSpaceNode` or a `CommentNode`.
 * This is a type guard.
 */
export declare function isWhiteSpaceOrCommentNode(x: unknown): x is WhitespaceNode | CommentNode;

/**
 * Parse a comma-separated list of component values.
 *
 * @example
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseCommaSeparatedListOfComponentValues } from '@csstools/css-parser-algorithms';
 *
 * parseCommaSeparatedListOfComponentValues(tokenize({ css: `20deg, 50%, 30%` }));
 * ```
 */
export declare function parseCommaSeparatedListOfComponentValues(tokens: Array<CSSToken>, options?: {
    onParseError?: (error: ParseError) => void;
}): Array<Array<ComponentValue>>;

/**
 * Parse a single component value.
 *
 * @example
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseCommaSeparatedListOfComponentValues } from '@csstools/css-parser-algorithms';
 *
 * parseCommaSeparatedListOfComponentValues(tokenize({ css: `10px` }));
 * parseCommaSeparatedListOfComponentValues(tokenize({ css: `calc((10px + 1x) * 4)` }));
 * ```
 */
export declare function parseComponentValue(tokens: Array<CSSToken>, options?: {
    onParseError?: (error: ParseError) => void;
}): ComponentValue | undefined;

/**
 * Parse a list of component values.
 *
 * @example
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseListOfComponentValues } from '@csstools/css-parser-algorithms';
 *
 * parseListOfComponentValues(tokenize({ css: `20deg 30%` }));
 * ```
 */
export declare function parseListOfComponentValues(tokens: Array<CSSToken>, options?: {
    onParseError?: (error: ParseError) => void;
}): Array<ComponentValue>;

/**
 * Replace specific component values in a list of component values.
 * A helper for the most common and simplistic cases when mutating an AST.
 */
export declare function replaceComponentValues(componentValuesList: Array<Array<ComponentValue>>, replaceWith: (componentValue: ComponentValue) => Array<ComponentValue> | ComponentValue | void): Array<Array<ComponentValue>>;

/**
 * A simple block node.
 *
 * @example
 * ```js
 * const node = parseComponentValue(tokenize('[foo=bar]'));
 *
 * isSimpleBlockNode(node); // true
 * node.startToken; // [TokenType.OpenSquare, '[', 0, 0, undefined]
 * ```
 */
export declare class SimpleBlockNode extends ContainerNodeBaseClass {
    /**
     * The node type, always `ComponentValueType.SimpleBlock`
     */
    type: ComponentValueType;
    /**
     * The token for the opening token of the block.
     */
    startToken: CSSToken;
    /**
     * The token for the closing token of the block.
     * If the block is closed it will be the mirror variant of the `startToken`.
     * If the block is unclosed, this will be an EOF token.
     */
    endToken: CSSToken;
    constructor(startToken: CSSToken, endToken: CSSToken, value: Array<ComponentValue>);
    /**
     * Normalize the current simple block
     * 1. if the "endToken" is EOF, replace with the mirror token of the "startToken"
     */
    normalize(): void;
    /**
     * Retrieve the tokens for the current simple block.
     * This is the inverse of parsing from a list of tokens.
     */
    tokens(): Array<CSSToken>;
    /**
     * Convert the current simple block to a string.
     * This is not a true serialization.
     * It is purely a concatenation of the string representation of the tokens.
     */
    toString(): string;
    /**
     * @internal
     *
     * A debug helper to convert the current object to a JSON representation.
     * This is useful in asserts and to store large ASTs in files.
     */
    toJSON(): unknown;
    /**
     * @internal
     */
    isSimpleBlockNode(): this is SimpleBlockNode;
    /**
     * @internal
     */
    static isSimpleBlockNode(x: unknown): x is SimpleBlockNode;
}

/**
 * Returns the start and end index of a node in the CSS source string.
 */
export declare function sourceIndices(x: {
    tokens(): Array<CSSToken>;
} | Array<{
    tokens(): Array<CSSToken>;
}>): [number, number];

/**
 * Concatenate the string representation of a collection of component values.
 * This is not a proper serializer that will handle escaping and whitespace.
 * It only produces valid CSS for token lists that are also valid.
 */
export declare function stringify(componentValueLists: Array<Array<ComponentValue>>): string;

export declare class TokenNode {
    /**
     * The node type, always `ComponentValueType.Token`
     */
    type: ComponentValueType;
    /**
     * The token.
     */
    value: CSSToken;
    constructor(value: CSSToken);
    /**
     * This is the inverse of parsing from a list of tokens.
     */
    tokens(): [CSSToken];
    /**
     * Convert the current token to a string.
     * This is not a true serialization.
     * It is purely the string representation of token.
     */
    toString(): string;
    /**
     * @internal
     *
     * A debug helper to convert the current object to a JSON representation.
     * This is useful in asserts and to store large ASTs in files.
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isTokenNode(): this is TokenNode;
    /**
     * @internal
     */
    static isTokenNode(x: unknown): x is TokenNode;
}

/**
 * Walks each item in a list of component values all of their children.
 *
 * @param cb - The callback function to execute for each item.
 * The function receives an object containing the current node (`node`), its parent (`parent`),
 * and an optional `state` object.
 * A second parameter is the index of the current node.
 * The function can return `false` to stop the iteration.
 *
 * @param state - An optional state object that can be used to pass additional information to the callback function.
 * The state object is cloned for each iteration. This means that changes to the state object are not reflected in the next iteration.
 * However changes are passed down to child node iterations.
 *
 * @returns `false` if the iteration was halted, `undefined` otherwise.
 *
 * @example
 * ```js
 * import { tokenize } from '@csstools/css-tokenizer';
 * import { parseListOfComponentValues, isSimpleBlockNode } from '@csstools/css-parser-algorithms';
 *
 * const myCSS = `calc(1px * (5 / 2)) 10px`;
 *
 * const componentValues = parseListOfComponentValues(tokenize({ css: myCSS }));
 *
 * let state = { inSimpleBlock: false };
 * walk(componentValues, (entry) => {
 * 	if (isSimpleBlockNode(entry)) {
 * 		entry.state.inSimpleBlock = true;
 * 		return;
 * 	}
 *
 * 	if (entry.state.inSimpleBlock) {
 * 		console.log(entry.node.toString()); // `5`, ...
 * 	}
 * }, state);
 * ```
 */
export declare function walk<T extends Record<string, unknown>>(componentValues: Array<ComponentValue>, cb: (entry: {
    node: ComponentValue;
    parent: ContainerNode | {
        value: Array<ComponentValue>;
    };
    state?: T;
}, index: number | string) => boolean | void, state?: T): false | undefined;

/**
 * Generate a function that finds the next element that should be visited when walking an AST.
 * Rules :
 * 1. the previous iteration is used as a reference, so any checks are relative to the start of the current iteration.
 * 2. the next element always appears after the current index.
 * 3. the next element always exists in the list.
 * 4. replacing an element does not cause the replaced element to be visited.
 * 5. removing an element does not cause elements to be skipped.
 * 6. an element added later in the list will be visited.
 */
export declare function walkerIndexGenerator<T>(initialList: Array<T>): (list: Array<T>, child: T, index: number) => number;

export declare class WhitespaceNode {
    /**
     * The node type, always `ComponentValueType.WhiteSpace`
     */
    type: ComponentValueType;
    /**
     * The list of consecutive whitespace tokens.
     */
    value: Array<CSSToken>;
    constructor(value: Array<CSSToken>);
    /**
     * Retrieve the tokens for the current whitespace.
     * This is the inverse of parsing from a list of tokens.
     */
    tokens(): Array<CSSToken>;
    /**
     * Convert the current whitespace to a string.
     * This is not a true serialization.
     * It is purely a concatenation of the string representation of the tokens.
     */
    toString(): string;
    /**
     * @internal
     *
     * A debug helper to convert the current object to a JSON representation.
     * This is useful in asserts and to store large ASTs in files.
     */
    toJSON(): Record<string, unknown>;
    /**
     * @internal
     */
    isWhitespaceNode(): this is WhitespaceNode;
    /**
     * @internal
     */
    static isWhitespaceNode(x: unknown): x is WhitespaceNode;
}

export { }
