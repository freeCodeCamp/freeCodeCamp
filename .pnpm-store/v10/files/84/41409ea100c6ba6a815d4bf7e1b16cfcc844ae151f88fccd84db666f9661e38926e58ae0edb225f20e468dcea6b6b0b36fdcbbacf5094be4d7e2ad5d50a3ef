/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import {assert} from '../util/assert.js';

/**
 * Dialog instances are dispatched by the {@link Page} via the `dialog` event.
 *
 * @remarks
 *
 * @example
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * page.on('dialog', async dialog => {
 *   console.log(dialog.message());
 *   await dialog.dismiss();
 *   await browser.close();
 * });
 * await page.evaluate(() => alert('1'));
 * ```
 *
 * @public
 */
export abstract class Dialog {
  #type: Protocol.Page.DialogType;
  #message: string;
  #defaultValue: string;
  /**
   * @internal
   */
  protected handled = false;

  /**
   * @internal
   */
  constructor(
    type: Protocol.Page.DialogType,
    message: string,
    defaultValue = '',
  ) {
    this.#type = type;
    this.#message = message;
    this.#defaultValue = defaultValue;
  }

  /**
   * The type of the dialog.
   */
  type(): Protocol.Page.DialogType {
    return this.#type;
  }

  /**
   * The message displayed in the dialog.
   */
  message(): string {
    return this.#message;
  }

  /**
   * The default value of the prompt, or an empty string if the dialog
   * is not a `prompt`.
   */
  defaultValue(): string {
    return this.#defaultValue;
  }

  /**
   * @internal
   */
  protected abstract handle(options: {
    accept: boolean;
    text?: string;
  }): Promise<void>;

  /**
   * A promise that resolves when the dialog has been accepted.
   *
   * @param promptText - optional text that will be entered in the dialog
   * prompt. Has no effect if the dialog's type is not `prompt`.
   *
   */
  async accept(promptText?: string): Promise<void> {
    assert(!this.handled, 'Cannot accept dialog which is already handled!');
    this.handled = true;
    await this.handle({
      accept: true,
      text: promptText,
    });
  }

  /**
   * A promise which will resolve once the dialog has been dismissed
   */
  async dismiss(): Promise<void> {
    assert(!this.handled, 'Cannot dismiss dialog which is already handled!');
    this.handled = true;
    await this.handle({
      accept: false,
    });
  }
}
