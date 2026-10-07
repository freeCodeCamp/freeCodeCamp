/* sha512.c - an implementation of SHA-384/512 hash functions
 * based on FIPS 180-3 (Federal Information Processing Standart).
 *
 * Copyright (c) 2010, Aleksey Kravchenko <rhash.admin@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE  INCLUDING ALL IMPLIED WARRANTIES OF  MERCHANTABILITY
 * AND FITNESS.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT,  OR CONSEQUENTIAL DAMAGES  OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE,  DATA OR PROFITS,  WHETHER IN AN ACTION OF CONTRACT,  NEGLIGENCE
 * OR OTHER TORTIOUS ACTION,  ARISING OUT OF  OR IN CONNECTION  WITH THE USE  OR
 * PERFORMANCE OF THIS SOFTWARE.

 * Modified for hash-wasm by Dani Biró
 */

#define WITH_BUFFER
#include "hash-wasm.h"

#define sha512_block_size 128
#define sha512_hash_size 64
#define sha384_hash_size 48
#define I64(x) x##ULL
#define ROTR64(qword, n) ((qword) >> (n) ^ ((qword) << (64 - (n))))
#define bswap_64(x) __builtin_bswap64(x)

struct sha512_ctx {
  uint64_t message[16];   /* 1024-bit buffer for leftovers */
  uint64_t length;        /* number of processed bytes */
  uint64_t hash[8];       /* 512-bit algorithm internal hashing state */
  uint32_t digest_length; /* length of the algorithm digest in bytes */
};

struct sha512_ctx sctx;
struct sha512_ctx* ctx = &sctx;

/* SHA-384 and SHA-512 constants for 80 rounds. These qwords represent
 * the first 64 bits of the fractional parts of the cube
 * roots of the first 80 prime numbers. */
static const uint64_t rhash_k512[80] = {
  I64(0x428a2f98d728ae22), I64(0x7137449123ef65cd), I64(0xb5c0fbcfec4d3b2f),
  I64(0xe9b5dba58189dbbc), I64(0x3956c25bf348b538), I64(0x59f111f1b605d019),
  I64(0x923f82a4af194f9b), I64(0xab1c5ed5da6d8118), I64(0xd807aa98a3030242),
  I64(0x12835b0145706fbe), I64(0x243185be4ee4b28c), I64(0x550c7dc3d5ffb4e2),
  I64(0x72be5d74f27b896f), I64(0x80deb1fe3b1696b1), I64(0x9bdc06a725c71235),
  I64(0xc19bf174cf692694), I64(0xe49b69c19ef14ad2), I64(0xefbe4786384f25e3),
  I64(0x0fc19dc68b8cd5b5), I64(0x240ca1cc77ac9c65), I64(0x2de92c6f592b0275),
  I64(0x4a7484aa6ea6e483), I64(0x5cb0a9dcbd41fbd4), I64(0x76f988da831153b5),
  I64(0x983e5152ee66dfab), I64(0xa831c66d2db43210), I64(0xb00327c898fb213f),
  I64(0xbf597fc7beef0ee4), I64(0xc6e00bf33da88fc2), I64(0xd5a79147930aa725),
  I64(0x06ca6351e003826f), I64(0x142929670a0e6e70), I64(0x27b70a8546d22ffc),
  I64(0x2e1b21385c26c926), I64(0x4d2c6dfc5ac42aed), I64(0x53380d139d95b3df),
  I64(0x650a73548baf63de), I64(0x766a0abb3c77b2a8), I64(0x81c2c92e47edaee6),
  I64(0x92722c851482353b), I64(0xa2bfe8a14cf10364), I64(0xa81a664bbc423001),
  I64(0xc24b8b70d0f89791), I64(0xc76c51a30654be30), I64(0xd192e819d6ef5218),
  I64(0xd69906245565a910), I64(0xf40e35855771202a), I64(0x106aa07032bbd1b8),
  I64(0x19a4c116b8d2d0c8), I64(0x1e376c085141ab53), I64(0x2748774cdf8eeb99),
  I64(0x34b0bcb5e19b48a8), I64(0x391c0cb3c5c95a63), I64(0x4ed8aa4ae3418acb),
  I64(0x5b9cca4f7763e373), I64(0x682e6ff3d6b2b8a3), I64(0x748f82ee5defb2fc),
  I64(0x78a5636f43172f60), I64(0x84c87814a1f0ab72), I64(0x8cc702081a6439ec),
  I64(0x90befffa23631e28), I64(0xa4506cebde82bde9), I64(0xbef9a3f7b2c67915),
  I64(0xc67178f2e372532b), I64(0xca273eceea26619c), I64(0xd186b8c721c0c207),
  I64(0xeada7dd6cde0eb1e), I64(0xf57d4f7fee6ed178), I64(0x06f067aa72176fba),
  I64(0x0a637dc5a2c898a6), I64(0x113f9804bef90dae), I64(0x1b710b35131c471b),
  I64(0x28db77f523047d84), I64(0x32caab7b40c72493), I64(0x3c9ebe0a15c9bebc),
  I64(0x431d67c49c100d4c), I64(0x4cc5d4becb3e42b6), I64(0x597f299cfc657e2a),
  I64(0x5fcb6fab3ad6faec), I64(0x6c44198c4a475817)
};

/* The SHA512/384 functions defined by FIPS 180-3, 4.1.3 */
/* Optimized version of Ch(x,y,z)=((x & y) | (~x & z)) */
#define Ch(x, y, z) ((z) ^ ((x) & ((y) ^ (z))))
/* Optimized version of Maj(x,y,z)=((x & y) ^ (x & z) ^ (y & z)) */
#define Maj(x, y, z) (((x) & (y)) ^ ((z) & ((x) ^ (y))))

#define Sigma0(x) (ROTR64((x), 28) ^ ROTR64((x), 34) ^ ROTR64((x), 39))
#define Sigma1(x) (ROTR64((x), 14) ^ ROTR64((x), 18) ^ ROTR64((x), 41))
#define sigma0(x) (ROTR64((x), 1) ^ ROTR64((x), 8) ^ ((x) >> 7))
#define sigma1(x) (ROTR64((x), 19) ^ ROTR64((x), 61) ^ ((x) >> 6))

/* Recalculate element n-th of circular buffer W using formula
 *   W[n] = sigma1(W[n - 2]) + W[n - 7] + sigma0(W[n - 15]) + W[n - 16]; */
#define RECALCULATE_W(W, n) \
  (W[n] +=                  \
   (sigma1(W[(n - 2) & 15]) + W[(n - 7) & 15] + sigma0(W[(n - 15) & 15])))

#define ROUND(a, b, c, d, e, f, g, h, k, data)              \
  {                                                         \
    uint64_t T1 = h + Sigma1(e) + Ch(e, f, g) + k + (data); \
    d += T1, h = T1 + Sigma0(a) + Maj(a, b, c);             \
  }
#define ROUND_1_16(a, b, c, d, e, f, g, h, n) \
  ROUND(a, b, c, d, e, f, g, h, rhash_k512[n], W[n] = bswap_64(block[n]))
#define ROUND_17_80(a, b, c, d, e, f, g, h, n) \
  ROUND(a, b, c, d, e, f, g, h, k[n], RECALCULATE_W(W, n))

/**
 * Initialize context before calculating hash.
 *
 */
void sha512_init() {
  /* Initial values. These words were obtained by taking the first 32
   * bits of the fractional parts of the square roots of the first
   * eight prime numbers. */
  static const uint64_t SHA512_H0[8] = {
    I64(0x6a09e667f3bcc908), I64(0xbb67ae8584caa73b), I64(0x3c6ef372fe94f82b),
    I64(0xa54ff53a5f1d36f1), I64(0x510e527fade682d1), I64(0x9b05688c2b3e6c1f),
    I64(0x1f83d9abfb41bd6b), I64(0x5be0cd19137e2179)
  };

  ctx->length = 0;
  ctx->digest_length = sha512_hash_size;

  /* initialize algorithm state */
  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i++) {
    ctx->hash[i] = SHA512_H0[i];
  }
}

/**
 * Initialize context before calculaing hash.
 *
 */
void sha384_init() {
  /* Initial values from FIPS 180-3. These words were obtained by taking
   * the first sixty-four bits of the fractional parts of the square
   * roots of ninth through sixteenth prime numbers. */
  static const uint64_t SHA384_H0[8] = {
    I64(0xcbbb9d5dc1059ed8), I64(0x629a292a367cd507), I64(0x9159015a3070dd17),
    I64(0x152fecd8f70e5939), I64(0x67332667ffc00b31), I64(0x8eb44a8768581511),
    I64(0xdb0c2e0d64f98fa7), I64(0x47b5481dbefa4fa4)
  };

  ctx->length = 0;
  ctx->digest_length = sha384_hash_size;

  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i++) {
    ctx->hash[i] = SHA384_H0[i];
  }
}

WASM_EXPORT
void Hash_Init(uint32_t bits) {
  if (bits == 384) {
    sha384_init();
  } else {
    sha512_init();
  }
}

/**
 * The core transformation. Process a 512-bit block.
 *
 * @param hash algorithm state
 * @param block the message block to process
 */
static void sha512_process_block(uint64_t hash[8], uint64_t block[16]) {
  uint64_t A, B, C, D, E, F, G, H;
  uint64_t W[16];
  const uint64_t* k;
  int i;

  A = hash[0], B = hash[1], C = hash[2], D = hash[3];
  E = hash[4], F = hash[5], G = hash[6], H = hash[7];

  /* Compute SHA using alternate Method: FIPS 180-3 6.1.3 */
  ROUND_1_16(A, B, C, D, E, F, G, H, 0);
  ROUND_1_16(H, A, B, C, D, E, F, G, 1);
  ROUND_1_16(G, H, A, B, C, D, E, F, 2);
  ROUND_1_16(F, G, H, A, B, C, D, E, 3);
  ROUND_1_16(E, F, G, H, A, B, C, D, 4);
  ROUND_1_16(D, E, F, G, H, A, B, C, 5);
  ROUND_1_16(C, D, E, F, G, H, A, B, 6);
  ROUND_1_16(B, C, D, E, F, G, H, A, 7);
  ROUND_1_16(A, B, C, D, E, F, G, H, 8);
  ROUND_1_16(H, A, B, C, D, E, F, G, 9);
  ROUND_1_16(G, H, A, B, C, D, E, F, 10);
  ROUND_1_16(F, G, H, A, B, C, D, E, 11);
  ROUND_1_16(E, F, G, H, A, B, C, D, 12);
  ROUND_1_16(D, E, F, G, H, A, B, C, 13);
  ROUND_1_16(C, D, E, F, G, H, A, B, 14);
  ROUND_1_16(B, C, D, E, F, G, H, A, 15);

  #pragma clang loop unroll(full)
  for (i = 16, k = &rhash_k512[16]; i < 80; i += 16, k += 16) {
    ROUND_17_80(A, B, C, D, E, F, G, H, 0);
    ROUND_17_80(H, A, B, C, D, E, F, G, 1);
    ROUND_17_80(G, H, A, B, C, D, E, F, 2);
    ROUND_17_80(F, G, H, A, B, C, D, E, 3);
    ROUND_17_80(E, F, G, H, A, B, C, D, 4);
    ROUND_17_80(D, E, F, G, H, A, B, C, 5);
    ROUND_17_80(C, D, E, F, G, H, A, B, 6);
    ROUND_17_80(B, C, D, E, F, G, H, A, 7);
    ROUND_17_80(A, B, C, D, E, F, G, H, 8);
    ROUND_17_80(H, A, B, C, D, E, F, G, 9);
    ROUND_17_80(G, H, A, B, C, D, E, F, 10);
    ROUND_17_80(F, G, H, A, B, C, D, E, 11);
    ROUND_17_80(E, F, G, H, A, B, C, D, 12);
    ROUND_17_80(D, E, F, G, H, A, B, C, 13);
    ROUND_17_80(C, D, E, F, G, H, A, B, 14);
    ROUND_17_80(B, C, D, E, F, G, H, A, 15);
  }

  hash[0] += A, hash[1] += B, hash[2] += C, hash[3] += D;
  hash[4] += E, hash[5] += F, hash[6] += G, hash[7] += H;
}

/**
 * Calculate message hash.
 * Can be called repeatedly with chunks of the message to be hashed.
 *
 * @param size length of the message chunk
 */
WASM_EXPORT
void Hash_Update(uint32_t size) {
  const uint8_t* msg = main_buffer;
  uint32_t index = (uint32_t)ctx->length & 127;
  ctx->length += size;

  /* fill partial block */
  if (index) {
    uint32_t left = sha512_block_size - index;
    uint32_t end = size < left ? size : left;
    uint8_t* message8 = (uint8_t*)ctx->message;
    for (uint8_t i = 0; i < end; i++) {
      *(message8 + index + i) = msg[i];
    }
    if (size < left) return;

    /* process partial block */
    sha512_process_block(ctx->hash, ctx->message);
    msg += left;
    size -= left;
  }

  while (size >= sha512_block_size) {
    uint64_t* aligned_message_block = (uint64_t*)msg;

    sha512_process_block(ctx->hash, aligned_message_block);
    msg += sha512_block_size;
    size -= sha512_block_size;
  }

  if (size) {
    /* save leftovers */
    for (uint8_t i = 0; i < size; i++) {
      *(((uint8_t*)ctx->message) + i) = msg[i];
    }
  }
}

/**
 * Store calculated hash into the given array.
 */
WASM_EXPORT
void Hash_Final() {
  uint32_t index = ((uint32_t)ctx->length & 127) >> 3;
  uint32_t shift = ((uint32_t)ctx->length & 7) * 8;

  /* pad message and process the last block */

  /* append the byte 0x80 to the message */
  ctx->message[index] &= ~(I64(0xFFFFFFFFFFFFFFFF) << shift);
  ctx->message[index++] ^= I64(0x80) << shift;

  /* if no room left in the message to store 128-bit message length */
  if (index >= 15) {
    if (index == 15) ctx->message[index] = 0;
    sha512_process_block(ctx->hash, ctx->message);
    index = 0;
  }

  while (index < 15) {
    ctx->message[index++] = 0;
  }

  ctx->message[15] = bswap_64(ctx->length << 3);
  sha512_process_block(ctx->hash, ctx->message);

  #pragma clang loop unroll(full)
  for (int32_t i = 7; i >= 0; i--) {
    ctx->hash[i] = bswap_64(ctx->hash[i]);
  }

  for (uint8_t i = 0; i < ctx->digest_length; i++) {
    main_buffer[i] = *(((uint8_t*)ctx->hash) + i);
  }
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(*ctx); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) ctx;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t initParam) {
  Hash_Init(initParam);
  Hash_Update(length);
  Hash_Final();
}
