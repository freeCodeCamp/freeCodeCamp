/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Dialog} from '../api/Dialog.js';

import type {UserPrompt} from './core/UserPrompt.js';

export class BidiDialog extends Dialog {
  static from(prompt: UserPrompt): BidiDialog {
    return new BidiDialog(prompt);
  }

  #prompt: UserPrompt;
  private constructor(prompt: UserPrompt) {
    super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
    this.#prompt = prompt;
    this.handled = prompt.handled;
  }

  override async handle(options: {
    accept: boolean;
    text?: string;
  }): Promise<void> {
    await this.#prompt.handle({
      accept: options.accept,
      userText: options.text,
    });
  }
}
