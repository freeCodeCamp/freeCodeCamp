import type { SourceMapInput } from '@jridgewell/trace-mapping';
export type { SourceMapSegment, DecodedSourceMap, EncodedSourceMap, } from '@jridgewell/trace-mapping';
export type { SourceMapInput };
export declare type LoaderContext = {
    readonly importer: string;
    readonly depth: number;
    source: string;
    content: string | null | undefined;
};
export declare type SourceMapLoader = (file: string, ctx: LoaderContext) => SourceMapInput | null | undefined | void;
export declare type Options = {
    excludeContent?: boolean;
    decodedMappings?: boolean;
};
