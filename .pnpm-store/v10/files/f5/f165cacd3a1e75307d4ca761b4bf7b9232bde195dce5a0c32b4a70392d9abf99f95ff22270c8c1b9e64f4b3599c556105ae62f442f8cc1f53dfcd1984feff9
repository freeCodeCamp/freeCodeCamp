import type { SchemaOptions } from '../options';
import type { CollectionTag, ScalarTag } from './types';
declare const tagsByName: {
    binary: ScalarTag;
    bool: ScalarTag & {
        test: RegExp;
    };
    float: ScalarTag;
    floatExp: ScalarTag;
    floatNaN: ScalarTag;
    floatTime: ScalarTag;
    int: ScalarTag;
    intHex: ScalarTag;
    intOct: ScalarTag;
    intTime: ScalarTag;
    map: CollectionTag;
    merge: ScalarTag & {
        identify(value: unknown): boolean;
        test: RegExp;
    };
    null: ScalarTag & {
        test: RegExp;
    };
    omap: CollectionTag;
    pairs: CollectionTag;
    seq: CollectionTag;
    set: CollectionTag;
    timestamp: ScalarTag & {
        test: RegExp;
    };
};
export type TagId = keyof typeof tagsByName;
export type Tags = Array<ScalarTag | CollectionTag | TagId>;
export declare const coreKnownTags: {
    'tag:yaml.org,2002:binary': ScalarTag;
    'tag:yaml.org,2002:merge': ScalarTag & {
        identify(value: unknown): boolean;
        test: RegExp;
    };
    'tag:yaml.org,2002:omap': CollectionTag;
    'tag:yaml.org,2002:pairs': CollectionTag;
    'tag:yaml.org,2002:set': CollectionTag;
    'tag:yaml.org,2002:timestamp': ScalarTag & {
        test: RegExp;
    };
};
export declare function getTags(customTags: SchemaOptions['customTags'] | undefined, schemaName: string, addMergeTag?: boolean): (CollectionTag | ScalarTag)[];
export {};
