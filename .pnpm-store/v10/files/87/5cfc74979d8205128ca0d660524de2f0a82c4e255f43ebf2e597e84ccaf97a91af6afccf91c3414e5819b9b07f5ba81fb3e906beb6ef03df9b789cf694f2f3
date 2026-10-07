import type { Directives } from '../doc/directives';
import type { ParsedNode } from '../nodes/Node';
import type { ParseOptions } from '../options';
import type { SourceToken, Token } from '../parse/cst';
import type { Schema } from '../schema/Schema';
import type { ComposeErrorHandler } from './composer';
export interface ComposeContext {
    atKey: boolean;
    atRoot: boolean;
    directives: Directives;
    options: Readonly<Required<Omit<ParseOptions, 'lineCounter'>>>;
    schema: Readonly<Schema>;
}
interface Props {
    spaceBefore: boolean;
    comment: string;
    anchor: SourceToken | null;
    tag: SourceToken | null;
    newlineAfterProp: SourceToken | null;
    end: number;
}
declare const CN: {
    composeNode: typeof composeNode;
    composeEmptyNode: typeof composeEmptyNode;
};
export type ComposeNode = typeof CN;
export declare function composeNode(ctx: ComposeContext, token: Token, props: Props, onError: ComposeErrorHandler): ParsedNode;
export declare function composeEmptyNode(ctx: ComposeContext, offset: number, before: Token[] | undefined, pos: number | null, { spaceBefore, comment, anchor, tag, end }: Props, onError: ComposeErrorHandler): import('../index').Scalar.Parsed;
export {};
