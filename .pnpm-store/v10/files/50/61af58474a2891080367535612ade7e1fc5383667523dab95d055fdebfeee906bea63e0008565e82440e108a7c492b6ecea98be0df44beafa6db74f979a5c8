import type { CreateNodeContext } from '../doc/createNode';
import type { Node } from '../nodes/Node';
import type { Scalar } from '../nodes/Scalar';
import type { YAMLMap } from '../nodes/YAMLMap';
import type { YAMLSeq } from '../nodes/YAMLSeq';
import type { ParseOptions } from '../options';
import type { StringifyContext } from '../stringify/stringify';
import type { Schema } from './Schema';
interface TagBase {
    /**
     * An optional factory function, used e.g. by collections when wrapping JS objects as AST nodes.
     */
    createNode?: (schema: Schema, value: unknown, ctx: CreateNodeContext) => Node;
    /**
     * If `true`, allows for values to be stringified without
     * an explicit tag together with `test`.
     * If `'key'`, this only applies if the value is used as a mapping key.
     * For most cases, it's unlikely that you'll actually want to use this,
     * even if you first think you do.
     */
    default?: boolean | 'key';
    /**
     * If a tag has multiple forms that should be parsed and/or stringified
     * differently, use `format` to identify them.
     */
    format?: string;
    /**
     * Used by `YAML.createNode` to detect your data type, e.g. using `typeof` or
     * `instanceof`.
     */
    identify?: (value: unknown) => boolean;
    /**
     * The identifier for your data type, with which its stringified form will be
     * prefixed. Should either be a !-prefixed local `!tag`, or a fully qualified
     * `tag:domain,date:foo`.
     */
    tag: string;
}
export interface ScalarTag extends TagBase {
    collection?: never;
    nodeClass?: never;
    /**
     * Turns a value into an AST node.
     * If returning a non-`Node` value, the output will be wrapped as a `Scalar`.
     */
    resolve(value: string, onError: (message: string) => void, options: ParseOptions): unknown;
    /**
     * Optional function stringifying a Scalar node. If your data includes a
     * suitable `.toString()` method, you can probably leave this undefined and
     * use the default stringifier.
     *
     * @param item The node being stringified.
     * @param ctx Contains the stringifying context variables.
     * @param onComment Callback to signal that the stringifier includes the
     *   item's comment in its output.
     * @param onChompKeep Callback to signal that the output uses a block scalar
     *   type with the `+` chomping indicator.
     */
    stringify?: (item: Scalar, ctx: StringifyContext, onComment?: () => void, onChompKeep?: () => void) => string;
    /**
     * Together with `default` allows for values to be stringified without an
     * explicit tag and detected using a regular expression. For most cases, it's
     * unlikely that you'll actually want to use these, even if you first think
     * you do.
     */
    test?: RegExp;
}
export interface CollectionTag extends TagBase {
    stringify?: never;
    test?: never;
    /** The source collection type supported by this tag. */
    collection: 'map' | 'seq';
    /**
     * The `Node` child class that implements this tag.
     * If set, used to select this tag when stringifying.
     *
     * If the class provides a static `from` method, then that
     * will be used if the tag object doesn't have a `createNode` method.
     */
    nodeClass?: {
        new (schema?: Schema): Node;
        from?: (schema: Schema, obj: unknown, ctx: CreateNodeContext) => Node;
    };
    /**
     * Turns a value into an AST node.
     * If returning a non-`Node` value, the output will be wrapped as a `Scalar`.
     *
     * Note: this is required if nodeClass is not provided.
     */
    resolve?: (value: YAMLMap.Parsed | YAMLSeq.Parsed, onError: (message: string) => void, options: ParseOptions) => unknown;
}
export {};
