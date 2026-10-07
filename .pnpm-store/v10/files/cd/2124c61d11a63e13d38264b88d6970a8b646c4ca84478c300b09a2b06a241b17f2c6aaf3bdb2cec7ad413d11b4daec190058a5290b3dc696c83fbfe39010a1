/**
 * @since v17.0.0
 */
declare module "readline/promises" {
    import { Abortable } from "node:events";
    import {
        CompleterResult,
        Direction,
        Interface as _Interface,
        ReadLineOptions as _ReadLineOptions,
    } from "node:readline";
    /**
     * Instances of the `readlinePromises.Interface` class are constructed using the `readlinePromises.createInterface()` method. Every instance is associated with a
     * single `input` `Readable` stream and a single `output` `Writable` stream.
     * The `output` stream is used to print prompts for user input that arrives on,
     * and is read from, the `input` stream.
     * @since v17.0.0
     */
    class Interface extends _Interface {
        /**
         * The `rl.question()` method displays the `query` by writing it to the `output`,
         * waits for user input to be provided on `input`, then invokes the `callback` function passing the provided input as the first argument.
         *
         * When called, `rl.question()` will resume the `input` stream if it has been
         * paused.
         *
         * If the `Interface` was created with `output` set to `null` or `undefined` the `query` is not written.
         *
         * If the question is called after `rl.close()`, it returns a rejected promise.
         *
         * Example usage:
         *
         * ```js
         * const answer = await rl.question('What is your favorite food? ');
         * console.log(`Oh, so your favorite food is ${answer}`);
         * ```
         *
         * Using an `AbortSignal` to cancel a question.
         *
         * ```js
         * const signal = AbortSignal.timeout(10_000);
         *
         * signal.addEventListener('abort', () => {
         *   console.log('The food question timed out');
         * }, { once: true });
         *
         * const answer = await rl.question('What is your favorite food? ', { signal });
         * console.log(`Oh, so your favorite food is ${answer}`);
         * ```
         * @since v17.0.0
         * @param query A statement or query to write to `output`, prepended to the prompt.
         * @return A promise that is fulfilled with the user's input in response to the `query`.
         */
        question(query: string): Promise<string>;
        question(query: string, options: Abortable): Promise<string>;
    }
    /**
     * @since v17.0.0
     */
    class Readline {
        /**
         * @param stream A TTY stream.
         */
        constructor(
            stream: NodeJS.WritableStream,
            options?: {
                autoCommit?: boolean | undefined;
            },
        );
        /**
         * The `rl.clearLine()` method adds to the internal list of pending action an
         * action that clears current line of the associated `stream` in a specified
         * direction identified by `dir`.
         * Call `rl.commit()` to see the effect of this method, unless `autoCommit: true` was passed to the constructor.
         * @since v17.0.0
         * @return this
         */
        clearLine(dir: Direction): this;
        /**
         * The `rl.clearScreenDown()` method adds to the internal list of pending action an
         * action that clears the associated stream from the current position of the
         * cursor down.
         * Call `rl.commit()` to see the effect of this method, unless `autoCommit: true` was passed to the constructor.
         * @since v17.0.0
         * @return this
         */
        clearScreenDown(): this;
        /**
         * The `rl.commit()` method sends all the pending actions to the associated `stream` and clears the internal list of pending actions.
         * @since v17.0.0
         */
        commit(): Promise<void>;
        /**
         * The `rl.cursorTo()` method adds to the internal list of pending action an action
         * that moves cursor to the specified position in the associated `stream`.
         * Call `rl.commit()` to see the effect of this method, unless `autoCommit: true` was passed to the constructor.
         * @since v17.0.0
         * @return this
         */
        cursorTo(x: number, y?: number): this;
        /**
         * The `rl.moveCursor()` method adds to the internal list of pending action an
         * action that moves the cursor _relative_ to its current position in the
         * associated `stream`.
         * Call `rl.commit()` to see the effect of this method, unless `autoCommit: true` was passed to the constructor.
         * @since v17.0.0
         * @return this
         */
        moveCursor(dx: number, dy: number): this;
        /**
         * The `rl.rollback` methods clears the internal list of pending actions without
         * sending it to the associated `stream`.
         * @since v17.0.0
         * @return this
         */
        rollback(): this;
    }
    type Completer = (line: string) => CompleterResult | Promise<CompleterResult>;
    interface ReadLineOptions extends Omit<_ReadLineOptions, "completer"> {
        /**
         * An optional function used for Tab autocompletion.
         */
        completer?: Completer | undefined;
    }
    /**
     * The `readlinePromises.createInterface()` method creates a new `readlinePromises.Interface` instance.
     *
     * ```js
     * import readlinePromises from 'node:readline/promises';
     * const rl = readlinePromises.createInterface({
     *   input: process.stdin,
     *   output: process.stdout,
     * });
     * ```
     *
     * Once the `readlinePromises.Interface` instance is created, the most common case
     * is to listen for the `'line'` event:
     *
     * ```js
     * rl.on('line', (line) => {
     *   console.log(`Received: ${line}`);
     * });
     * ```
     *
     * If `terminal` is `true` for this instance then the `output` stream will get
     * the best compatibility if it defines an `output.columns` property and emits
     * a `'resize'` event on the `output` if or when the columns ever change
     * (`process.stdout` does this automatically when it is a TTY).
     * @since v17.0.0
     */
    function createInterface(
        input: NodeJS.ReadableStream,
        output?: NodeJS.WritableStream,
        completer?: Completer,
        terminal?: boolean,
    ): Interface;
    function createInterface(options: ReadLineOptions): Interface;
}
declare module "node:readline/promises" {
    export * from "readline/promises";
}
