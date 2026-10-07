// Type definitions for @babel/template 7.4
// Project: https://github.com/babel/babel/tree/master/packages/babel-template, https://babeljs.io
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
//                 Melvin Groenhoff <https://github.com/mgroenhoff>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ParserOptions } from "@babel/parser";
import { Expression, Program, Statement } from "@babel/types";

export interface TemplateBuilderOptions extends ParserOptions {
    /**
     * A set of placeholder names to automatically accept.
     * Items in this list do not need to match `placeholderPattern`.
     *
     * This option cannot be used when using `%%foo%%` style placeholders.
     */
    placeholderWhitelist?: Set<string> | null | undefined;

    /**
     * A pattern to search for when looking for `Identifier` and `StringLiteral`
     * nodes that should be considered as placeholders.
     *
     * `false` will disable placeholder searching placeholders, leaving only
     * the `placeholderWhitelist` value to find replacements.
     *
     * This option cannot be used when using `%%foo%%` style placeholders.
     *
     * @default /^[_$A-Z0-9]+$/
     */
    placeholderPattern?: RegExp | false | null | undefined;

    /**
     * Set this to `true` to preserve comments from the template string
     * into the resulting AST, or `false` to automatically discard comments.
     *
     * @default false
     */
    preserveComments?: boolean | null | undefined;

    /**
     * Set to `true` to use `%%foo%%` style placeholders, `false` to use legacy placeholders
     * described by `placeholderPattern` or `placeholderWhitelist`.
     *
     * When it is not set, it behaves as `true` if there are syntactic placeholders, otherwise as `false`.
     *
     * @since 7.4.0
     */
    syntacticPlaceholders?: boolean | null | undefined;
}

export interface TemplateBuilder<T> {
    /**
     * Build a new builder, merging the given options with the previous ones.
     */
    (opts: TemplateBuilderOptions): TemplateBuilder<T>;

    /**
     * Building from a string produces an AST builder function by default.
     */
    (code: string, opts?: TemplateBuilderOptions): (arg?: PublicReplacements) => T;

    /**
     * Building from a template literal produces an AST builder function by default.
     */
    (tpl: TemplateStringsArray, ...args: unknown[]): (arg?: PublicReplacements) => T;

    /**
     * Allow users to explicitly create templates that produce ASTs,
     * skipping the need for an intermediate function.
     *
     * Does not allow `%%foo%%` style placeholders.
     */
    ast: {
        (tpl: string, opts?: TemplateBuilderOptions): T;
        (tpl: TemplateStringsArray, ...args: unknown[]): T;
    };
}

export type PublicReplacements = { [index: string]: unknown } | unknown[];

export const smart: TemplateBuilder<Statement | Statement[]>;
export const statement: TemplateBuilder<Statement>;
export const statements: TemplateBuilder<Statement[]>;
export const expression: TemplateBuilder<Expression>;
export const program: TemplateBuilder<Program>;

type DefaultTemplateBuilder = typeof smart & {
    smart: typeof smart;
    statement: typeof statement;
    statements: typeof statements;
    expression: typeof expression;
    program: typeof program;
    ast: typeof smart.ast;
};

declare const templateBuilder: DefaultTemplateBuilder;

export default templateBuilder;
