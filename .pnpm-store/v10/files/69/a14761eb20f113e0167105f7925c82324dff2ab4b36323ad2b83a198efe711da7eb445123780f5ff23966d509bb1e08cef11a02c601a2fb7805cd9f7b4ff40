/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

/** Encodes a Buffer into a Quoted-Printable encoded string */
export function encode(buffer: Buffer | string): string;

/** Adds soft line breaks to a Quoted-Printable string */
export function wrap(str: string, lineLength?: number): string;

export interface EncoderOptions extends TransformOptions {
    lineLength?: number | false | undefined;
}

/** Creates a transform stream for encoding data to Quoted-Printable encoding */
export class Encoder extends Transform {
    options: EncoderOptions;

    inputBytes: number;
    outputBytes: number;

    constructor(options?: EncoderOptions);
}
