// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// IE 11 does not support Array.from, so we do it manually
export function uint32ArrayFrom(a_lookUpTable: Array<number>): Uint32Array {
  if (!Uint32Array.from) {
    const return_array = new Uint32Array(a_lookUpTable.length)
    let a_index = 0
    while (a_index < a_lookUpTable.length) {
      return_array[a_index] = a_lookUpTable[a_index]
      a_index += 1
    }
    return return_array
  }
  return Uint32Array.from(a_lookUpTable)
}
