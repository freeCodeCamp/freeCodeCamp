declare module '@discoveryjs/json-ext' {
    import { Readable } from 'stream';

    type TReplacer =
        | ((this: any, key: string, value: any) => any)
        | string[]
        | number[]
        | null;
    type TSpace = string | number | null;
    type TChunk = string | Buffer | Uint8Array;

    export function parseChunked(input: Readable): Promise<any>;
    export function parseChunked(input: () => (Iterable<TChunk> | AsyncIterable<TChunk>)): Promise<any>;

    export function stringifyStream(value: any, replacer?: TReplacer, space?: TSpace): Readable;

    export function stringifyInfo(
        value: any,
        replacer?: TReplacer,
        space?: TSpace,
        options?: {
            async?: boolean;
            continueOnCircular?: boolean;
        }
    ): {
        minLength: number;
        circular: any[];
        duplicate: any[];
        async: any[];
    };
}
