import { describe, expect, it } from 'vitest';
import { crc32, createZip } from './create-zip';

interface ParsedEntry {
  path: string;
  contents: string;
  crc: number;
}

// Reads the archive back through its central directory, the way unzip tools do.
function readZip(zip: Uint8Array): ParsedEntry[] {
  const view = new DataView(zip.buffer, zip.byteOffset, zip.byteLength);
  const decoder = new TextDecoder();
  const eocd = zip.byteLength - 22;
  expect(view.getUint32(eocd, true)).toBe(0x06054b50);

  const count = view.getUint16(eocd + 10, true);
  let offset = view.getUint32(eocd + 16, true);
  const entries: ParsedEntry[] = [];

  for (let i = 0; i < count; i++) {
    expect(view.getUint32(offset, true)).toBe(0x02014b50);
    const crc = view.getUint32(offset + 16, true);
    const size = view.getUint32(offset + 24, true);
    const nameLength = view.getUint16(offset + 28, true);
    const localOffset = view.getUint32(offset + 42, true);
    const path = decoder.decode(
      zip.subarray(offset + 46, offset + 46 + nameLength)
    );

    expect(view.getUint32(localOffset, true)).toBe(0x04034b50);
    const localNameLength = view.getUint16(localOffset + 26, true);
    const dataStart = localOffset + 30 + localNameLength;
    const contents = decoder.decode(zip.subarray(dataStart, dataStart + size));

    entries.push({ path, contents, crc });
    offset += 46 + nameLength;
  }
  return entries;
}

describe('crc32', () => {
  it('matches known checksums', () => {
    const encoder = new TextEncoder();
    expect(crc32(encoder.encode(''))).toBe(0);
    expect(crc32(encoder.encode('hello'))).toBe(0x3610a686);
    expect(
      crc32(encoder.encode('The quick brown fox jumps over the lazy dog'))
    ).toBe(0x414fa339);
  });
});

describe('createZip', () => {
  it('stores every entry with its path and contents', () => {
    const zip = createZip([
      { path: 'index.html', contents: '<h1>Hi</h1>' },
      { path: 'styles.css', contents: 'h1 { color: red; }' },
      { path: 'script.js', contents: "console.log('héllo ✓');" }
    ]);

    const entries = readZip(zip);
    expect(entries.map(({ path, contents }) => ({ path, contents }))).toEqual([
      { path: 'index.html', contents: '<h1>Hi</h1>' },
      { path: 'styles.css', contents: 'h1 { color: red; }' },
      { path: 'script.js', contents: "console.log('héllo ✓');" }
    ]);
    for (const entry of entries) {
      expect(entry.crc).toBe(crc32(new TextEncoder().encode(entry.contents)));
    }
  });

  it('creates a valid empty archive', () => {
    const zip = createZip([]);
    expect(zip.byteLength).toBe(22);
    expect(readZip(zip)).toEqual([]);
  });
});
