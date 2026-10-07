// Type definitions for VFile 3.0
// Project: https://github.com/vfile/vfile
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types='node' />

import * as Unist from 'unist';
import * as vfileMessage from 'vfile-message';

declare namespace vfile {
    type VFileContents = string | Buffer;

    interface VFileOptions {
        contents?: VFileContents;
        path?: string;
        basename?: string;
        stem?: string;
        extname?: string;
        dirname?: string;
        cwd?: string;
        data?: any;
        [key: string]: any;
    }

    interface VFile {
        /**
         * Create a new virtual file. If `options` is `string` or `Buffer`, treats it as `{contents: options}`.
         * If `options` is a `VFile`, returns it. All other options are set on the newly created `vfile`.
         *
         * Path related properties are set in the following order (least specific to most specific): `history`, `path`, `basename`, `stem`, `extname`, `dirname`.
         *
         * It’s not possible to set either `dirname` or `extname` without setting either `history`, `path`, `basename`, or `stem` as well.
         *
         * @param options If `options` is `string` or `Buffer`, treats it as `{contents: options}`. If `options` is a `VFile`, returns it. All other options are set on the newly created `vfile`.
         */
        <F extends VFile>(input?: VFileContents | F | VFileOptions): F;
        /**
         * List of file-paths the file moved between.
         */
        history: string[];
        /**
         * Place to store custom information.
         * It's OK to store custom data directly on the `vfile`, moving it to `data` gives a little more privacy.
         */
        data: unknown;
        /**
         * List of messages associated with the file.
         */
        messages: vfileMessage.VFileMessage[];
        /**
         * Raw value.
         */
        contents: VFileContents;
        /**
         * Path of `vfile`.
         * Cannot be nullified.
         */
        path?: string;
        /**
         * Path to parent directory of `vfile`.
         * Cannot be set if there's no `path` yet.
         */
        dirname?: string;
        /**
         * Current name (including extension) of `vfile`.
         * Cannot contain path separators.
         * Cannot be nullified either (use `file.path = file.dirname` instead).
         */
        basename?: string;
        /**
         * Name (without extension) of `vfile`.
         * Cannot be nullified, and cannot contain path separators.
         */
        stem?: string;
        /**
         * Extension (with dot) of `vfile`.
         * Cannot be set if there's no `path` yet and cannot contain path separators.
         */
        extname?: string;
        /**
         * Base of `path`.
         * Defaults to `process.cwd()`.
         */
        cwd: string;
        /**
         * Convert contents of `vfile` to string.
         * @param encoding If `contents` is a buffer, `encoding` is used to stringify buffers (default: `'utf8'`).
         */
        toString: (encoding?: BufferEncoding) => string;
        /**
         * Associates a message with the file for `reason` at `position`.
         * When an error is passed in as `reason`, copies the stack.
         * Each message has a `fatal` property which by default is set to `false` (ie. `warning`).
         * @param reason Reason for message. Uses the stack and message of the error if given.
         * @param position Place at which the message occurred in `vfile`.
         * @param ruleId Category of message.
         */
        message: (reason: string, position?: Unist.Point | Unist.Position | Unist.Node, ruleId?: string) => vfileMessage.VFileMessage;
        /**
         * Associates a fatal message with the file, then immediately throws it.
         * Note: fatal errors mean a file is no longer processable.
         * Calls `message()` internally.
         * @param reason Reason for message. Uses the stack and message of the error if given.
         * @param position Place at which the message occurred in `vfile`.
         * @param ruleId Category of message.
         */
        fail: (reason: string, position?: Unist.Point | Unist.Position | Unist.Node, ruleId?: string) => never;
        /**
         * Associates an informational message with the file, where `fatal` is set to `null`.
         * Calls `message()` internally.
         * @param reason Reason for message. Uses the stack and message of the error if given.
         * @param position Place at which the message occurred in `vfile`.
         * @param ruleId Category of message.
         */
        info: (reason: string, position?: Unist.Point | Unist.Position | Unist.Node, ruleId?: string) => vfileMessage.VFileMessage;
    }
}

declare const vfile: vfile.VFile;

export = vfile;
