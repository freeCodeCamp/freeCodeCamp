/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import {Dialog} from '../api/Dialog.js';

/**
 * @internal
 */
export class CdpDialog extends Dialog {
  #client: CDPSession;

  constructor(
    client: CDPSession,
    type: Protocol.Page.DialogType,
    message: string,
    defaultValue = '',
  ) {
    super(type, message, defaultValue);
    this.#client = client;
  }

  override async handle(options: {
    accept: boolean;
    text?: string;
  }): Promise<void> {
    await this.#client.send('Page.handleJavaScriptDialog', {
      accept: options.accept,
      promptText: options.text,
    });
  }
}
