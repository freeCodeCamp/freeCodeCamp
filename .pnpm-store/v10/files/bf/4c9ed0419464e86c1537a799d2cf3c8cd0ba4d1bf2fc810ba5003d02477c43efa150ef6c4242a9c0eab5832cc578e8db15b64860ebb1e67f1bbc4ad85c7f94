import type { SourceToken, Token } from '../parse/cst';
import type { ComposeErrorHandler } from './composer';
export interface ResolvePropsArg {
    flow?: 'flow map' | 'flow sequence';
    indicator: 'doc-start' | 'explicit-key-ind' | 'map-value-ind' | 'seq-item-ind';
    next: Token | null | undefined;
    offset: number;
    onError: ComposeErrorHandler;
    parentIndent: number;
    startOnNewline: boolean;
}
export declare function resolveProps(tokens: SourceToken[], { flow, indicator, next, offset, onError, parentIndent, startOnNewline }: ResolvePropsArg): {
    comma: SourceToken | null;
    found: SourceToken | null;
    spaceBefore: boolean;
    comment: string;
    hasNewline: boolean;
    anchor: SourceToken | null;
    tag: SourceToken | null;
    newlineAfterProp: SourceToken | null;
    end: number;
    start: number;
};
