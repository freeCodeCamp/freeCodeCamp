import type { ToJSContext } from '../../nodes/toJS';
import type { MapLike } from '../../nodes/YAMLMap';
import type { ScalarTag } from '../types';
export declare const merge: ScalarTag & {
    identify(value: unknown): boolean;
    test: RegExp;
};
export declare const isMergeKey: (ctx: ToJSContext | undefined, key: unknown) => boolean | undefined;
export declare function addMergeToJSMap(ctx: ToJSContext | undefined, map: MapLike, value: unknown): void;
