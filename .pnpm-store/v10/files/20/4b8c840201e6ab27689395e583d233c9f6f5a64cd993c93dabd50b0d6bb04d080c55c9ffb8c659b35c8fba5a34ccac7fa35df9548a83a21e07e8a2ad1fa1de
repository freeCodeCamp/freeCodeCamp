/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

/** Encodes a Buffer into a base64 encoded string */
export function encode(buffer: Buffer | string): string;

/** Adds soft line breaks to a base64 string */
export function wrap(str: string, lineLength?: number): string;

export interface EncoderOptions extends TransformOptions {
    lineLength?: number | false | undefined;
}

export class Encoder extends Transform {
    options: EncoderOptions;

    inputBytes: number;
    outputBytes: number;

    constructor(options?: EncoderOptions);
}
