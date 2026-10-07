import type { Document } from '../doc/Document';
import type { FlowScalar } from '../parse/cst';
import type { StringifyContext } from '../stringify/stringify';
import type { Range } from './Node';
import { NodeBase } from './Node';
import type { Scalar } from './Scalar';
import type { ToJSContext } from './toJS';
import type { YAMLMap } from './YAMLMap';
import type { YAMLSeq } from './YAMLSeq';
export declare namespace Alias {
    interface Parsed extends Alias {
        range: Range;
        srcToken?: FlowScalar & {
            type: 'alias';
        };
    }
}
export declare class Alias extends NodeBase {
    source: string;
    anchor?: never;
    constructor(source: string);
    /**
     * Resolve the value of this alias within `doc`, finding the last
     * instance of the `source` anchor before this node.
     */
    resolve(doc: Document, ctx?: ToJSContext): Scalar | YAMLMap | YAMLSeq | undefined;
    toJSON(_arg?: unknown, ctx?: ToJSContext): unknown;
    toString(ctx?: StringifyContext, _onComment?: () => void, _onChompKeep?: () => void): string;
}
