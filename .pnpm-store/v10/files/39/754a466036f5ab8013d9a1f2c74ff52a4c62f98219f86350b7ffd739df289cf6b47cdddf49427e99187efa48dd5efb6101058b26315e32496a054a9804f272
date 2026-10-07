const bufLength = 1024 * 16;

// Provide a fallback for older environments.
const td =
  typeof TextDecoder !== 'undefined'
    ? /* #__PURE__ */ new TextDecoder()
    : typeof Buffer !== 'undefined'
      ? {
          decode(buf: Uint8Array): string {
            const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
            return out.toString();
          },
        }
      : {
          decode(buf: Uint8Array): string {
            let out = '';
            for (let i = 0; i < buf.length; i++) {
              out += String.fromCharCode(buf[i]);
            }
            return out;
          },
        };

export class StringWriter {
  pos = 0;
  private out = '';
  private buffer = new Uint8Array(bufLength);

  write(v: number): void {
    const { buffer } = this;
    buffer[this.pos++] = v;
    if (this.pos === bufLength) {
      this.out += td.decode(buffer);
      this.pos = 0;
    }
  }

  flush(): string {
    const { buffer, out, pos } = this;
    return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
  }
}

export class StringReader {
  pos = 0;
  declare private buffer: string;

  constructor(buffer: string) {
    this.buffer = buffer;
  }

  next(): number {
    return this.buffer.charCodeAt(this.pos++);
  }

  peek(): number {
    return this.buffer.charCodeAt(this.pos);
  }

  indexOf(char: string): number {
    const { buffer, pos } = this;
    const idx = buffer.indexOf(char, pos);
    return idx === -1 ? buffer.length : idx;
  }
}
