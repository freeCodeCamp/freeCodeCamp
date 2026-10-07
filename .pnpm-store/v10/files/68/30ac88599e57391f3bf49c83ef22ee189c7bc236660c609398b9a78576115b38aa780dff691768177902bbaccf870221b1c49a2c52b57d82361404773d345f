// Copyright 2017 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const interpreterPath = (elf) => {
  if (elf.length < 64) {
    return null;
  }
  if (elf.readUInt32BE(0) !== 0x7F454C46) {
    // Unexpected magic bytes
    return null;
  }
  if (elf.readUInt8(4) !== 2) {
    // Not a 64-bit ELF
    return null;
  }
  if (elf.readUInt8(5) !== 1) {
    // Not little-endian
    return null;
  }
  const offset = elf.readUInt32LE(32);
  const size = elf.readUInt16LE(54);
  const count = elf.readUInt16LE(56);
  for (let i = 0; i < count; i++) {
    const headerOffset = offset + (i * size);
    const type = elf.readUInt32LE(headerOffset);
    if (type === 3) {
      const fileOffset = elf.readUInt32LE(headerOffset + 8);
      const fileSize = elf.readUInt32LE(headerOffset + 32);
      return elf.subarray(fileOffset, fileOffset + fileSize).toString().replace(/\0.*$/g, '');
    }
  }
  return null;
};

module.exports = {
  interpreterPath
};
