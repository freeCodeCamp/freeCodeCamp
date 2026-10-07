/**
 * Copied from https://github.com/lukeed/uuid
 * https://github.com/lukeed/uuid/blob/master/src/secure.js
 */
import { randomBytes } from "crypto";
const SIZE = 4096;
const HEX = [];
let IDX = 0;
let BUFFER;
for (; IDX < 256; IDX++) {
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
}
export function v4() {
  if (!BUFFER || IDX + 16 > SIZE) {
    BUFFER = randomBytes(SIZE);
    IDX = 0;
  }
  let i = 0;
  let tmp;
  let out = ``;
  for (; i < 16; i++) {
    tmp = BUFFER[IDX + i];
    if (i == 6) out += HEX[tmp & 15 | 64];else if (i == 8) out += HEX[tmp & 63 | 128];else out += HEX[tmp];
    if (i & 1 && i > 1 && i < 11) out += `-`;
  }
  IDX += 16;
  return out;
}