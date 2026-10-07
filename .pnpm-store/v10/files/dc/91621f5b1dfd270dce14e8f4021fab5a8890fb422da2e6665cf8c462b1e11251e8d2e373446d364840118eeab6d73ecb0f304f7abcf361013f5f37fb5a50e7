import {
  BLOCK_SIZE,
  DIGEST_LENGTH,
  INIT,
  KEY,
  MAX_HASHABLE_LENGTH
} from "./constants";

/**
 * @internal
 */
export class RawSha256 {
  private state: Int32Array = Int32Array.from(INIT);
  private temp: Int32Array = new Int32Array(64);
  private buffer: Uint8Array = new Uint8Array(64);
  private bufferLength: number = 0;
  private bytesHashed: number = 0;

  /**
   * @internal
   */
  finished: boolean = false;

  update(data: Uint8Array): void {
    if (this.finished) {
      throw new Error("Attempted to update an already finished hash.");
    }

    let position = 0;
    let { byteLength } = data;
    this.bytesHashed += byteLength;

    if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    }

    while (byteLength > 0) {
      this.buffer[this.bufferLength++] = data[position++];
      byteLength--;

      if (this.bufferLength === BLOCK_SIZE) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  }

  digest(): Uint8Array {
    if (!this.finished) {
      const bitsHashed = this.bytesHashed * 8;
      const bufferView = new DataView(
        this.buffer.buffer,
        this.buffer.byteOffset,
        this.buffer.byteLength
      );

      const undecoratedLength = this.bufferLength;
      bufferView.setUint8(this.bufferLength++, 0x80);

      // Ensure the final block has enough room for the hashed length
      if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
        for (let i = this.bufferLength; i < BLOCK_SIZE; i++) {
          bufferView.setUint8(i, 0);
        }
        this.hashBuffer();
        this.bufferLength = 0;
      }

      for (let i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
        bufferView.setUint8(i, 0);
      }
      bufferView.setUint32(
        BLOCK_SIZE - 8,
        Math.floor(bitsHashed / 0x100000000),
        true
      );
      bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);

      this.hashBuffer();

      this.finished = true;
    }

    // The value in state is little-endian rather than big-endian, so flip
    // each word into a new Uint8Array
    const out = new Uint8Array(DIGEST_LENGTH);
    for (let i = 0; i < 8; i++) {
      out[i * 4] = (this.state[i] >>> 24) & 0xff;
      out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
      out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
      out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
    }

    return out;
  }

  private hashBuffer(): void {
    const { buffer, state } = this;

    let state0 = state[0],
      state1 = state[1],
      state2 = state[2],
      state3 = state[3],
      state4 = state[4],
      state5 = state[5],
      state6 = state[6],
      state7 = state[7];

    for (let i = 0; i < BLOCK_SIZE; i++) {
      if (i < 16) {
        this.temp[i] =
          ((buffer[i * 4] & 0xff) << 24) |
          ((buffer[i * 4 + 1] & 0xff) << 16) |
          ((buffer[i * 4 + 2] & 0xff) << 8) |
          (buffer[i * 4 + 3] & 0xff);
      } else {
        let u = this.temp[i - 2];
        const t1 =
          ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);

        u = this.temp[i - 15];
        const t2 =
          ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);

        this.temp[i] =
          ((t1 + this.temp[i - 7]) | 0) + ((t2 + this.temp[i - 16]) | 0);
      }

      const t1 =
        ((((((state4 >>> 6) | (state4 << 26)) ^
          ((state4 >>> 11) | (state4 << 21)) ^
          ((state4 >>> 25) | (state4 << 7))) +
          ((state4 & state5) ^ (~state4 & state6))) |
          0) +
          ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) |
        0;

      const t2 =
        ((((state0 >>> 2) | (state0 << 30)) ^
          ((state0 >>> 13) | (state0 << 19)) ^
          ((state0 >>> 22) | (state0 << 10))) +
          ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
        0;

      state7 = state6;
      state6 = state5;
      state5 = state4;
      state4 = (state3 + t1) | 0;
      state3 = state2;
      state2 = state1;
      state1 = state0;
      state0 = (t1 + t2) | 0;
    }

    state[0] += state0;
    state[1] += state1;
    state[2] += state2;
    state[3] += state3;
    state[4] += state4;
    state[5] += state5;
    state[6] += state6;
    state[7] += state7;
  }
}
