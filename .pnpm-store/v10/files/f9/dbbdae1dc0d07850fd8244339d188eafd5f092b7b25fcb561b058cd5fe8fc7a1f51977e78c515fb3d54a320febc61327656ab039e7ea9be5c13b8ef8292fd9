import type { Rule } from 'eslint';
import type { Node } from 'estree';

type Visitor = (source: Node, importer: unknown) => any;

type Options = {
    amd?: boolean;
    commonjs?: boolean;
    esmodule?: boolean;
    ignore?: string[];
};

declare function moduleVisitor(
    visitor: Visitor,
    options?: Options,
): object;

export default moduleVisitor;

export type Schema = NonNullable<Rule.RuleModule['schema']>;

declare function makeOptionsSchema(additionalProperties?: Partial<Schema>): Schema

declare const optionsSchema: Schema;

export { makeOptionsSchema, optionsSchema };
