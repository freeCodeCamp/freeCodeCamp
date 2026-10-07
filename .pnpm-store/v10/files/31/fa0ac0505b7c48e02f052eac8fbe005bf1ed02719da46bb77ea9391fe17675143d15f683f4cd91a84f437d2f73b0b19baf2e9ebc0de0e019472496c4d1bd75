/*
SHA-1 in C
By Steve Reid <steve@edmweb.com>
100% Public Domain

Modified for hash-wasm by Dani Biró
*/

#define WITH_BUFFER
#include "hash-wasm.h"

#define rol(value, bits) (((value) << (bits)) | ((value) >> (32 - (bits))))

/* blk0() and blk() perform the initial expand. */
/* I got the idea of expanding during the round function from SSLeay */
#define blk0(i)                                        \
  (block->l[i] =  (rol(block->l[i], 24) & 0xFF00FF00) | \
                  (rol(block->l[i], 8) & 0x00FF00FF))

#define blk(i)                                      \
  (block->l[i & 15] = rol(block->l[(i + 13) & 15] ^ \
                          block->l[(i + 8) & 15] ^  \
                          block->l[(i + 2) & 15] ^  \
                          block->l[i & 15],         \
                          1))

struct SHA1_CTX {
  uint32_t state[5];
  uint32_t count[2];
  uint8_t buffer[64];
};

struct SHA1_CTX sctx;
struct SHA1_CTX* context = &sctx;

/* (R0+R1), R2, R3, R4 are the different operations used in SHA1 */
#define R0(v, w, x, y, z, i)                                   \
  z += ((w & (x ^ y)) ^ y) + blk0(i) + 0x5A827999 + rol(v, 5); \
  w = rol(w, 30);
#define R1(v, w, x, y, z, i)                                  \
  z += ((w & (x ^ y)) ^ y) + blk(i) + 0x5A827999 + rol(v, 5); \
  w = rol(w, 30);
#define R2(v, w, x, y, z, i)                          \
  z += (w ^ x ^ y) + blk(i) + 0x6ED9EBA1 + rol(v, 5); \
  w = rol(w, 30);
#define R3(v, w, x, y, z, i)                                        \
  z += (((w | x) & y) | (w & x)) + blk(i) + 0x8F1BBCDC + rol(v, 5); \
  w = rol(w, 30);
#define R4(v, w, x, y, z, i)                          \
  z += (w ^ x ^ y) + blk(i) + 0xCA62C1D6 + rol(v, 5); \
  w = rol(w, 30);

/* Hash a single 512-bit block. This is the core of the algorithm. */
void SHA1Transform(uint32_t state[5], const uint8_t buffer[64]) {
  uint32_t a, b, c, d, e;
  typedef union {
    uint8_t c[64];
    uint32_t l[16];
    uint64_t ll[8];
  } CHAR64LONG16;

  CHAR64LONG16 block[1]; /* use array to appear as a pointer */

  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i++) {
    block->ll[i] = *(uint64_t*)&buffer[i * 8];
  }

  /* Copy context->state[] to working vars */
  a = state[0];
  b = state[1];
  c = state[2];
  d = state[3];
  e = state[4];

  /* 4 rounds of 20 operations each. Loop unrolled. */
  R0(a, b, c, d, e,  0); R0(e, a, b, c, d,  1); R0(d, e, a, b, c,  2); R0(c, d, e, a, b,  3);
  R0(b, c, d, e, a,  4); R0(a, b, c, d, e,  5); R0(e, a, b, c, d,  6); R0(d, e, a, b, c,  7);
  R0(c, d, e, a, b,  8); R0(b, c, d, e, a,  9); R0(a, b, c, d, e, 10); R0(e, a, b, c, d, 11);
  R0(d, e, a, b, c, 12); R0(c, d, e, a, b, 13); R0(b, c, d, e, a, 14); R0(a, b, c, d, e, 15);
  R1(e, a, b, c, d, 16); R1(d, e, a, b, c, 17); R1(c, d, e, a, b, 18); R1(b, c, d, e, a, 19);
  R2(a, b, c, d, e, 20); R2(e, a, b, c, d, 21); R2(d, e, a, b, c, 22); R2(c, d, e, a, b, 23);
  R2(b, c, d, e, a, 24); R2(a, b, c, d, e, 25); R2(e, a, b, c, d, 26); R2(d, e, a, b, c, 27);
  R2(c, d, e, a, b, 28); R2(b, c, d, e, a, 29); R2(a, b, c, d, e, 30); R2(e, a, b, c, d, 31);
  R2(d, e, a, b, c, 32); R2(c, d, e, a, b, 33); R2(b, c, d, e, a, 34); R2(a, b, c, d, e, 35);
  R2(e, a, b, c, d, 36); R2(d, e, a, b, c, 37); R2(c, d, e, a, b, 38); R2(b, c, d, e, a, 39);
  R3(a, b, c, d, e, 40); R3(e, a, b, c, d, 41); R3(d, e, a, b, c, 42); R3(c, d, e, a, b, 43);
  R3(b, c, d, e, a, 44); R3(a, b, c, d, e, 45); R3(e, a, b, c, d, 46); R3(d, e, a, b, c, 47);
  R3(c, d, e, a, b, 48); R3(b, c, d, e, a, 49); R3(a, b, c, d, e, 50); R3(e, a, b, c, d, 51);
  R3(d, e, a, b, c, 52); R3(c, d, e, a, b, 53); R3(b, c, d, e, a, 54); R3(a, b, c, d, e, 55);
  R3(e, a, b, c, d, 56); R3(d, e, a, b, c, 57); R3(c, d, e, a, b, 58); R3(b, c, d, e, a, 59);
  R4(a, b, c, d, e, 60); R4(e, a, b, c, d, 61); R4(d, e, a, b, c, 62); R4(c, d, e, a, b, 63);
  R4(b, c, d, e, a, 64); R4(a, b, c, d, e, 65); R4(e, a, b, c, d, 66); R4(d, e, a, b, c, 67);
  R4(c, d, e, a, b, 68); R4(b, c, d, e, a, 69); R4(a, b, c, d, e, 70); R4(e, a, b, c, d, 71);
  R4(d, e, a, b, c, 72); R4(c, d, e, a, b, 73); R4(b, c, d, e, a, 74); R4(a, b, c, d, e, 75);
  R4(e, a, b, c, d, 76); R4(d, e, a, b, c, 77); R4(c, d, e, a, b, 78); R4(b, c, d, e, a, 79);

  /* Add the working vars back into context.state[] */
  state[0] += a;
  state[1] += b;
  state[2] += c;
  state[3] += d;
  state[4] += e;
}

/* SHA1Init - Initialize new context */
WASM_EXPORT
void Hash_Init() {
  context->state[0] = 0x67452301;
  context->state[1] = 0xEFCDAB89;
  context->state[2] = 0x98BADCFE;
  context->state[3] = 0x10325476;
  context->state[4] = 0xC3D2E1F0;
  context->count[0] = context->count[1] = 0;
}

void SHA1Update(const uint8_t* data, uint32_t len) {
  uint32_t i;

  uint32_t j = context->count[0];
  if ((context->count[0] += len << 3) < j) {
    context->count[1]++;
  }

  context->count[1] += (len >> 29);
  j = (j >> 3) & 63;

  if ((j + len) > 63) {
    uint8_t end = i = 64 - j;
    for (uint8_t z = 0; z < end; z++) {
      context->buffer[j + z] = data[z];
    }
    SHA1Transform(context->state, context->buffer);
    for (; i + 63 < len; i += 64) {
      SHA1Transform(context->state, &data[i]);
    }
    j = 0;
  } else {
    i = 0;
  }

  for (uint8_t z = 0; z < len - i; z++) {
    context->buffer[j + z] = data[i + z];
  }
}

WASM_EXPORT
void Hash_Update(uint32_t len) {
  SHA1Update(main_buffer, len);
}

/* Add padding and return the message digest. */
WASM_EXPORT
void Hash_Final() {
  uint8_t* result = main_buffer;
  uint8_t finalcount[8];
  uint8_t c;

  for (uint8_t i = 0; i < 8; i++) {
    finalcount[i] = (uint8_t)(
        (context->count[(i >= 4 ? 0 : 1)] >> ((3 - (i & 3)) * 8)) & 255);
  }

  c = 0200;
  SHA1Update(&c, 1);
  while ((context->count[0] & 504) != 448) {
    c = 0000;
    SHA1Update(&c, 1);
  }

  SHA1Update(finalcount, 8); /* Should cause a SHA1Transform() */

  for (uint8_t i = 0; i < 20; i++) {
    result[i] =
        (uint8_t)((context->state[i >> 2] >> ((3 - (i & 3)) * 8)) & 255);
  }
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(*context); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) context;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length) {
  Hash_Init();
  Hash_Update(length);
  Hash_Final();
}
