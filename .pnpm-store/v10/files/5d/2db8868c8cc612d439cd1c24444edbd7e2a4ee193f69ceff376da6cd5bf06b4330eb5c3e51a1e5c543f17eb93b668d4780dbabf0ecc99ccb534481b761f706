/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ElementHandle } from '../api/ElementHandle.js';
/**
 * File choosers let you react to the page requesting for a file.
 *
 * @remarks
 * `FileChooser` instances are returned via the {@link Page.waitForFileChooser} method.
 *
 * In browsers, only one file chooser can be opened at a time.
 * All file choosers must be accepted or canceled. Not doing so will prevent
 * subsequent file choosers from appearing.
 *
 * @example
 *
 * ```ts
 * const [fileChooser] = await Promise.all([
 *   page.waitForFileChooser(),
 *   page.click('#upload-file-button'), // some button that triggers file selection
 * ]);
 * await fileChooser.accept(['/tmp/myfile.pdf']);
 * ```
 *
 * @public
 */
export declare class FileChooser {
    #private;
    /**
     * @internal
     */
    constructor(element: ElementHandle<HTMLInputElement>, multiple: boolean);
    /**
     * Whether file chooser allow for
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
     * file selection.
     */
    isMultiple(): boolean;
    /**
     * Accept the file chooser request with the given file paths.
     *
     * @remarks This will not validate whether the file paths exists. Also, if a
     * path is relative, then it is resolved against the
     * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
     * For locals script connecting to remote chrome environments, paths must be
     * absolute.
     */
    accept(paths: string[]): Promise<void>;
    /**
     * Closes the file chooser without selecting any files.
     */
    cancel(): Promise<void>;
}
//# sourceMappingURL=FileChooser.d.ts.map