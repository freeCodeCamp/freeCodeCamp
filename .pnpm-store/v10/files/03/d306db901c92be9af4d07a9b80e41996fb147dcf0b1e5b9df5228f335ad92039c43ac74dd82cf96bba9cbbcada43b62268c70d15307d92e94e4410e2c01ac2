/**
 * Create a duplex (readable and writable) stream.
 *
 * Some of the work to parse markdown can be done streaming, but in the
 * end buffering is required.
 *
 * micromark does not handle errors for you, so you must handle errors on whatever
 * streams you pipe into it.
 * As markdown does not know errors, `micromark` itself does not emit errors.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {MinimalDuplex}
 *   Duplex stream.
 */
export function stream(options?: Options | null | undefined): MinimalDuplex;
export type Options = import("micromark-util-types").Options;
/**
 * Function called when write was successful.
 */
export type Callback = () => undefined;
/**
 * Configuration for piping.
 */
export type PipeOptions = {
    /**
     * Whether to end the destination stream when the source stream ends.
     */
    end?: boolean | null | undefined;
};
/**
 * Duplex stream.
 */
export type MinimalDuplex = Omit<NodeJS.ReadableStream & NodeJS.WritableStream, "isPaused" | "pause" | "read" | "resume" | "setEncoding" | "unpipe" | "unshift" | "wrap">;
//# sourceMappingURL=stream.d.ts.map