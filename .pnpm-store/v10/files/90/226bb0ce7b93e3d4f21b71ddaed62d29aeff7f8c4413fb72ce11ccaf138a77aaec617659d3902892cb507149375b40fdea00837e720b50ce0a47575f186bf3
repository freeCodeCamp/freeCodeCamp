/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @public
 */
export type DownloadPolicy = 'deny' | 'allow' | 'allowAndName' | 'default';

/**
 * @public
 */
export interface DownloadBehavior {
  /**
   * Whether to allow all or deny all download requests, or use default behavior if
   * available.
   *
   * @remarks
   * Setting this to `allowAndName` will name all files according to their download guids.
   */
  policy: DownloadPolicy;
  /**
   * The default path to save downloaded files to.
   *
   * @remarks
   * Setting this is required if behavior is set to `allow` or `allowAndName`.
   */
  downloadPath?: string;
}
