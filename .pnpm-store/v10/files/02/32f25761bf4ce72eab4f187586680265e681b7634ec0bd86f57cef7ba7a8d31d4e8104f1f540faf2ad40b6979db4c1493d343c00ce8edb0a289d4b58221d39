/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @public
 */
export interface ConnectionTransport {
  send(message: string): void;
  close(): void;
  onmessage?: (message: string) => void;
  onclose?: () => void;
}
