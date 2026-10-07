/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Debugger} from 'debug';
import debugModule from 'debug';

export const debug = (prefix: string): Debugger | undefined => {
  const log = debugModule(prefix);
  return log.enabled ? log : undefined;
};
