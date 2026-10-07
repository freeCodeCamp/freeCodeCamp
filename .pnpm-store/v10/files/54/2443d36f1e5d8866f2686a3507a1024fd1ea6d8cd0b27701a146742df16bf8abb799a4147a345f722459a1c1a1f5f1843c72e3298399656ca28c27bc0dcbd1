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
export async function rm(path) {
    await fs.promises.rm(path, rmOptions);
}
/**
 * @internal
 */
export function rmSync(path) {
    fs.rmSync(path, rmOptions);
}
//# sourceMappingURL=fs.js.map