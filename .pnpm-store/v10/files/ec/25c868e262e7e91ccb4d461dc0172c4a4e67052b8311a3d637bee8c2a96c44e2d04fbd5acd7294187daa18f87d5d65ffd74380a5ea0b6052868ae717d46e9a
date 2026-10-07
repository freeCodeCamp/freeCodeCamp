/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'node:fs';

const rmOptions = {
  force: true,
  recursive: true,
  maxRetries: 5,
};

/**
 * @internal
 */
export async function rm(path: string): Promise<void> {
  await fs.promises.rm(path, rmOptions);
}

/**
 * @internal
 */
export function rmSync(path: string): void {
  fs.rmSync(path, rmOptions);
}
