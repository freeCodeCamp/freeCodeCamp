export interface ZipEntry {
  path: string;
  contents: string;
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

export function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function toDosDateTime(date: Date): { time: number; date: number } {
  const year = Math.max(date.getFullYear(), 1980);
  return {
    time:
      (date.getHours() << 11) |
      (date.getMinutes() << 5) |
      Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
  };
}

const LOCAL_HEADER_SIZE = 30;
const CENTRAL_HEADER_SIZE = 46;
const END_OF_CENTRAL_DIR_SIZE = 22;
// Bit 11: file names are UTF-8 encoded.
const UTF8_FLAG = 0x0800;

/**
 * Builds an uncompressed (STORE) ZIP archive. Solution files are small text
 * files, so compression would add complexity for little gain.
 */
export function createZip(
  entries: ZipEntry[],
  modified: Date = new Date()
): Uint8Array<ArrayBuffer> {
  const encoder = new TextEncoder();
  const { time, date } = toDosDateTime(modified);

  const files = entries.map(entry => {
    const name = encoder.encode(entry.path);
    const data = encoder.encode(entry.contents);
    return { name, data, crc: crc32(data) };
  });

  const localSize = files.reduce(
    (sum, f) => sum + LOCAL_HEADER_SIZE + f.name.length + f.data.length,
    0
  );
  const centralSize = files.reduce(
    (sum, f) => sum + CENTRAL_HEADER_SIZE + f.name.length,
    0
  );

  const buffer = new ArrayBuffer(
    localSize + centralSize + END_OF_CENTRAL_DIR_SIZE
  );
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);

  let offset = 0;
  const localOffsets: number[] = [];

  for (const file of files) {
    localOffsets.push(offset);
    view.setUint32(offset, 0x04034b50, true);
    view.setUint16(offset + 4, 20, true); // version needed to extract
    view.setUint16(offset + 6, UTF8_FLAG, true);
    view.setUint16(offset + 8, 0, true); // compression: STORE
    view.setUint16(offset + 10, time, true);
    view.setUint16(offset + 12, date, true);
    view.setUint32(offset + 14, file.crc, true);
    view.setUint32(offset + 18, file.data.length, true); // compressed size
    view.setUint32(offset + 22, file.data.length, true); // uncompressed size
    view.setUint16(offset + 26, file.name.length, true);
    view.setUint16(offset + 28, 0, true); // extra field length
    bytes.set(file.name, offset + LOCAL_HEADER_SIZE);
    bytes.set(file.data, offset + LOCAL_HEADER_SIZE + file.name.length);
    offset += LOCAL_HEADER_SIZE + file.name.length + file.data.length;
  }

  const centralOffset = offset;

  files.forEach((file, i) => {
    view.setUint32(offset, 0x02014b50, true);
    view.setUint16(offset + 4, 20, true); // version made by
    view.setUint16(offset + 6, 20, true); // version needed to extract
    view.setUint16(offset + 8, UTF8_FLAG, true);
    view.setUint16(offset + 10, 0, true); // compression: STORE
    view.setUint16(offset + 12, time, true);
    view.setUint16(offset + 14, date, true);
    view.setUint32(offset + 16, file.crc, true);
    view.setUint32(offset + 20, file.data.length, true);
    view.setUint32(offset + 24, file.data.length, true);
    view.setUint16(offset + 28, file.name.length, true);
    // extra length, comment length, disk number, internal and external
    // attributes are all zero, which the zeroed buffer already gives us.
    view.setUint32(offset + 42, localOffsets[i], true);
    bytes.set(file.name, offset + CENTRAL_HEADER_SIZE);
    offset += CENTRAL_HEADER_SIZE + file.name.length;
  });

  view.setUint32(offset, 0x06054b50, true);
  view.setUint16(offset + 8, files.length, true); // entries on this disk
  view.setUint16(offset + 10, files.length, true); // total entries
  view.setUint32(offset + 12, centralSize, true);
  view.setUint32(offset + 16, centralOffset, true);

  return bytes;
}
