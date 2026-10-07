// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { SourceData } from "@aws-sdk/types";
import { fromUtf8 as fromUtf8Browser } from "@aws-sdk/util-utf8-browser";

// Quick polyfill
const fromUtf8 =
  typeof Buffer !== "undefined" && Buffer.from
    ? (input: string) => Buffer.from(input, "utf8")
    : fromUtf8Browser;

export function convertToBuffer(data: SourceData): Uint8Array {
  // Already a Uint8, do nothing
  if (data instanceof Uint8Array) return data;

  if (typeof data === "string") {
    return fromUtf8(data);
  }

  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(
      data.buffer,
      data.byteOffset,
      data.byteLength / Uint8Array.BYTES_PER_ELEMENT
    );
  }

  return new Uint8Array(data);
}
