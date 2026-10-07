/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ElementHandle} from '../api/ElementHandle.js';
import {assert} from '../util/assert.js';

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
export class FileChooser {
  #element: ElementHandle<HTMLInputElement>;
  #multiple: boolean;
  #handled = false;

  /**
   * @internal
   */
  constructor(element: ElementHandle<HTMLInputElement>, multiple: boolean) {
    this.#element = element;
    this.#multiple = multiple;
  }

  /**
   * Whether file chooser allow for
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
   * file selection.
   */
  isMultiple(): boolean {
    return this.#multiple;
  }

  /**
   * Accept the file chooser request with the given file paths.
   *
   * @remarks This will not validate whether the file paths exists. Also, if a
   * path is relative, then it is resolved against the
   * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
   * For locals script connecting to remote chrome environments, paths must be
   * absolute.
   */
  async accept(paths: string[]): Promise<void> {
    assert(
      !this.#handled,
      'Cannot accept FileChooser which is already handled!',
    );
    this.#handled = true;
    await this.#element.uploadFile(...paths);
  }

  /**
   * Closes the file chooser without selecting any files.
   */
  async cancel(): Promise<void> {
    assert(
      !this.#handled,
      'Cannot cancel FileChooser which is already handled!',
    );
    this.#handled = true;
    // XXX: These events should converted to trusted events. Perhaps do this
    // in `DOM.setFileInputFiles`?
    await this.#element.evaluate(element => {
      element.dispatchEvent(new Event('cancel', {bubbles: true}));
    });
  }
}
