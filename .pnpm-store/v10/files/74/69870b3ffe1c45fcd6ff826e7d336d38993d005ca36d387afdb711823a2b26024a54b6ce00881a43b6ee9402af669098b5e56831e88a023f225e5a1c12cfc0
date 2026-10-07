export type VisitTraversalStep = $eslintcore.VisitTraversalStep;
export type CallTraversalStep = $eslintcore.CallTraversalStep;
export type TraversalStep = $eslintcore.TraversalStep;
export type SourceLocation = $eslintcore.SourceLocation;
export type SourceLocationWithOffset = $eslintcore.SourceLocationWithOffset;
export type SourceRange = $eslintcore.SourceRange;
export type IDirective = $eslintcore.Directive;
export type DirectiveType = $eslintcore.DirectiveType;
export type SourceCodeBaseTypeOptions = $eslintcore.SourceCodeBaseTypeOptions;
/**
 * <Options>
 */
export type TextSourceCode<Options extends SourceCodeBaseTypeOptions = $eslintcore.SourceCodeBaseTypeOptions> = import("@eslint/core").TextSourceCode<Options>;
export type RuleConfig = $eslintcore.RuleConfig;
export type RulesConfig = $eslintcore.RulesConfig;
export type StringConfig = $typests.StringConfig;
export type BooleanConfig = $typests.BooleanConfig;
/**
 * A class to represent a step in the traversal process where a
 * method is called.
 * @implements {CallTraversalStep}
 */
export class CallMethodStep implements CallTraversalStep {
    /**
     * Creates a new instance.
     * @param {Object} options The options for the step.
     * @param {string} options.target The target of the step.
     * @param {Array<any>} options.args The arguments of the step.
     */
    constructor({ target, args }: {
        target: string;
        args: Array<any>;
    });
    /**
     * The type of the step.
     * @type {"call"}
     * @readonly
     */
    readonly type: "call";
    /**
     * The kind of the step. Represents the same data as the `type` property
     * but it's a number for performance.
     * @type {2}
     * @readonly
     */
    readonly kind: 2;
    /**
     * The name of the method to call.
     * @type {string}
     */
    target: string;
    /**
     * The arguments to pass to the method.
     * @type {Array<any>}
     */
    args: Array<any>;
}
/**
 * Object to parse ESLint configuration comments.
 */
export class ConfigCommentParser {
    /**
     * Parses a list of "name:string_value" or/and "name" options divided by comma or
     * whitespace. Used for "global" comments.
     * @param {string} string The string to parse.
     * @returns {StringConfig} Result map object of names and string values, or null values if no value was provided.
     */
    parseStringConfig(string: string): StringConfig;
    /**
     * Parses a JSON-like config.
     * @param {string} string The string to parse.
     * @returns {({ok: true, config: RulesConfig}|{ok: false, error: {message: string}})} Result map object
     */
    parseJSONLikeConfig(string: string): ({
        ok: true;
        config: RulesConfig;
    } | {
        ok: false;
        error: {
            message: string;
        };
    });
    /**
     * Parses a config of values separated by comma.
     * @param {string} string The string to parse.
     * @returns {BooleanConfig} Result map of values and true values
     */
    parseListConfig(string: string): BooleanConfig;
    /**
     * Parses a directive comment into directive text and value.
     * @param {string} string The string with the directive to be parsed.
     * @returns {DirectiveComment|undefined} The parsed directive or `undefined` if the directive is invalid.
     */
    parseDirective(string: string): DirectiveComment | undefined;
    #private;
}
/**
 * A class to represent a directive comment.
 * @implements {IDirective}
 */
export class Directive implements IDirective {
    /**
     * Creates a new instance.
     * @param {Object} options The options for the directive.
     * @param {"disable"|"enable"|"disable-next-line"|"disable-line"} options.type The type of directive.
     * @param {unknown} options.node The node representing the directive.
     * @param {string} options.value The value of the directive.
     * @param {string} options.justification The justification for the directive.
     */
    constructor({ type, node, value, justification }: {
        type: "disable" | "enable" | "disable-next-line" | "disable-line";
        node: unknown;
        value: string;
        justification: string;
    });
    /**
     * The type of directive.
     * @type {DirectiveType}
     * @readonly
     */
    readonly type: DirectiveType;
    /**
     * The node representing the directive.
     * @type {unknown}
     * @readonly
     */
    readonly node: unknown;
    /**
     * Everything after the "eslint-disable" portion of the directive,
     * but before the "--" that indicates the justification.
     * @type {string}
     * @readonly
     */
    readonly value: string;
    /**
     * The justification for the directive.
     * @type {string}
     * @readonly
     */
    readonly justification: string;
}
/**
 * Source Code Base Object
 * @template {SourceCodeBaseTypeOptions & {RootNode: object, SyntaxElementWithLoc: object}} [Options=SourceCodeBaseTypeOptions & {RootNode: object, SyntaxElementWithLoc: object}]
 * @implements {TextSourceCode<Options>}
 */
export class TextSourceCodeBase<Options extends SourceCodeBaseTypeOptions & {
    RootNode: object;
    SyntaxElementWithLoc: object;
} = $eslintcore.SourceCodeBaseTypeOptions & {
    RootNode: object;
    SyntaxElementWithLoc: object;
}> implements TextSourceCode<Options> {
    /**
     * Creates a new instance.
     * @param {Object} options The options for the instance.
     * @param {string} options.text The source code text.
     * @param {Options['RootNode']} options.ast The root AST node.
     * @param {RegExp} [options.lineEndingPattern] The pattern to match lineEndings in the source code. Defaults to `/\r?\n/u`.
     */
    constructor({ text, ast, lineEndingPattern }: {
        text: string;
        ast: Options["RootNode"];
        lineEndingPattern?: RegExp;
    });
    /**
     * The AST of the source code.
     * @type {Options['RootNode']}
     */
    ast: Options["RootNode"];
    /**
     * The text of the source code.
     * @type {string}
     */
    text: string;
    /**
     * Returns the loc information for the given node or token.
     * @param {Options['SyntaxElementWithLoc']} nodeOrToken The node or token to get the loc information for.
     * @returns {SourceLocation} The loc information for the node or token.
     * @throws {Error} If the node or token does not have loc information.
     */
    getLoc(nodeOrToken: Options["SyntaxElementWithLoc"]): SourceLocation;
    /**
     * Converts a source text index into a `{ line: number, column: number }` pair.
     * @param {number} index The index of a character in a file.
     * @throws {TypeError|RangeError} If non-numeric index or index out of range.
     * @returns {{line: number, column: number}} A `{ line: number, column: number }` location object with 0 or 1-indexed line and 0 or 1-indexed column based on language.
     * @public
     */
    public getLocFromIndex(index: number): {
        line: number;
        column: number;
    };
    /**
     * Converts a `{ line: number, column: number }` pair into a source text index.
     * @param {Object} loc A line/column location.
     * @param {number} loc.line The line number of the location. (0 or 1-indexed based on language.)
     * @param {number} loc.column The column number of the location. (0 or 1-indexed based on language.)
     * @throws {TypeError|RangeError} If `loc` is not an object with a numeric
     * `line` and `column`, if the `line` is less than or equal to zero or
     * the `line` or `column` is out of the expected range.
     * @returns {number} The index of the line/column location in a file.
     * @public
     */
    public getIndexFromLoc(loc: {
        line: number;
        column: number;
    }): number;
    /**
     * Returns the range information for the given node or token.
     * @param {Options['SyntaxElementWithLoc']} nodeOrToken The node or token to get the range information for.
     * @returns {SourceRange} The range information for the node or token.
     * @throws {Error} If the node or token does not have range information.
     */
    getRange(nodeOrToken: Options["SyntaxElementWithLoc"]): SourceRange;
    /**
     * Returns the parent of the given node.
     * @param {Options['SyntaxElementWithLoc']} node The node to get the parent of.
     * @returns {Options['SyntaxElementWithLoc']|undefined} The parent of the node.
     * @throws {Error} If the method is not implemented in the subclass.
     */
    getParent(node: Options["SyntaxElementWithLoc"]): Options["SyntaxElementWithLoc"] | undefined;
    /**
     * Gets all the ancestors of a given node
     * @param {Options['SyntaxElementWithLoc']} node The node
     * @returns {Array<Options['SyntaxElementWithLoc']>} All the ancestor nodes in the AST, not including the provided node, starting
     * from the root node at index 0 and going inwards to the parent node.
     * @throws {TypeError} When `node` is missing.
     */
    getAncestors(node: Options["SyntaxElementWithLoc"]): Array<Options["SyntaxElementWithLoc"]>;
    /**
     * Gets the source code for the given node.
     * @param {Options['SyntaxElementWithLoc']} [node] The AST node to get the text for.
     * @param {number} [beforeCount] The number of characters before the node to retrieve.
     * @param {number} [afterCount] The number of characters after the node to retrieve.
     * @returns {string} The text representing the AST node.
     * @public
     */
    public getText(node?: Options["SyntaxElementWithLoc"], beforeCount?: number, afterCount?: number): string;
    /**
     * Gets the entire source text split into an array of lines.
     * @returns {Array<string>} The source text as an array of lines.
     * @public
     */
    public get lines(): Array<string>;
    /**
     * Traverse the source code and return the steps that were taken.
     * @returns {Iterable<TraversalStep>} The steps that were taken while traversing the source code.
     */
    traverse(): Iterable<TraversalStep>;
    #private;
}
/**
 * A class to represent a step in the traversal process where a node is visited.
 * @implements {VisitTraversalStep}
 */
export class VisitNodeStep implements VisitTraversalStep {
    /**
     * Creates a new instance.
     * @param {Object} options The options for the step.
     * @param {object} options.target The target of the step.
     * @param {1|2} options.phase The phase of the step.
     * @param {Array<any>} options.args The arguments of the step.
     */
    constructor({ target, phase, args }: {
        target: object;
        phase: 1 | 2;
        args: Array<any>;
    });
    /**
     * The type of the step.
     * @type {"visit"}
     * @readonly
     */
    readonly type: "visit";
    /**
     * The kind of the step. Represents the same data as the `type` property
     * but it's a number for performance.
     * @type {1}
     * @readonly
     */
    readonly kind: 1;
    /**
     * The target of the step.
     * @type {object}
     */
    target: object;
    /**
     * The phase of the step.
     * @type {1|2}
     */
    phase: 1 | 2;
    /**
     * The arguments of the step.
     * @type {Array<any>}
     */
    args: Array<any>;
}
import type * as $eslintcore from "@eslint/core";
import type * as $typests from "./types.ts";
/**
 * Represents a directive comment.
 */
declare class DirectiveComment {
    /**
     * Creates a new directive comment.
     * @param {string} label The label of the directive.
     * @param {string} value The value of the directive.
     * @param {string} justification The justification of the directive.
     */
    constructor(label: string, value: string, justification: string);
    /**
     * The label of the directive, such as "eslint", "eslint-disable", etc.
     * @type {string}
     */
    label: string;
    /**
     * The value of the directive (the string after the label).
     * @type {string}
     */
    value: string;
    /**
     * The justification of the directive (the string after the --).
     * @type {string}
     */
    justification: string;
}
export {};
