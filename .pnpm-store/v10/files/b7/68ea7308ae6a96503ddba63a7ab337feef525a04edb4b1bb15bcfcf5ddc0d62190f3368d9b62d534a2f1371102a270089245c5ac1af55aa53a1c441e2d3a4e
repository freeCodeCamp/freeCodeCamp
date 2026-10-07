/// <reference types="node" />
import type babelCore from '@babel/core';
declare type RequireFromStringOptions = {
    string: Buffer | string;
    fileOpts: babelCore.TransformOptions;
    args?: any[];
};
export declare function requireFromString({ string: stringToPreval, fileOpts, args, }: RequireFromStringOptions): unknown;
declare type GetReplacementOptions = {
    string: Buffer | string;
    fileOpts: babelCore.TransformOptions;
    args?: any[];
    babel: typeof babelCore;
};
export declare function getReplacement({ string, fileOpts, args, babel, }: GetReplacementOptions): babelCore.types.Expression | null | undefined;
export {};
