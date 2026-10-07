/*
 * This is an OpenSSL-compatible implementation of the RSA Data Security, Inc.
 * MD4 Message-Digest Algorithm (RFC 1320).
 *
 * Homepage:
 * http://openwall.info/wiki/people/solar/software/public-domain-source-code/md4
 *
 * Author:
 * Alexander Peslyak, better known as Solar Designer <solar at openwall.com>
 *
 * This software was written by Alexander Peslyak in 2001.  No copyright is
 * claimed, and the software is hereby placed in the public domain.
 * In case this attempt to disclaim copyright and place the software in the
 * public domain is deemed null and void, then the software is
 * Copyright (c) 2001 Alexander Peslyak and it is hereby released to the
 * general public under the following terms:
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted.
 *
 * There's ABSOLUTELY NO WARRANTY, express or implied.
 *
 * (This is a heavily cut-down "BSD license".)
 *
 * This differs from Colin Plumb's older public domain implementation in that
 * no exactly 32-bit integer data type is required (any 32-bit or wider
 * unsigned integer data type will do), there's no compile-time endianness
 * configuration, and the function prototypes match OpenSSL's.  No code from
 * Colin Plumb's implementation has been reused; this comment merely compares
 * the properties of the two independent implementations.
 *
 * The primary goals of this implementation are portability and ease of use.
 * It is meant to be fast, but not as fast as possible.  Some known
 * optimizations are not included to reduce source code size and avoid
 * compile-time configuration.
 *
 * Modified for hash-wasm by Dani Biró
 */

#define WITH_BUFFER
#include "hash-wasm.h"

struct MD4_CTX {
  uint32_t lo, hi;
  uint32_t a, b, c, d;
  uint8_t buffer[64];
  uint32_t block[16];
};

struct MD4_CTX sctx;
struct MD4_CTX *ctx = &sctx;

/*
 * The basic MD4 functions.
 *
 * F and G are optimized compared to their RFC 1320 definitions, with the
 * optimization for F borrowed from Colin Plumb's MD5 implementation.
 */
#define F(x, y, z) ((z) ^ ((x) & ((y) ^ (z))))
#define G(x, y, z) (((x) & ((y) | (z))) | ((y) & (z)))
#define H(x, y, z) ((x) ^ (y) ^ (z))

/*
 * The MD4 transformation for all three rounds.
 */
#define STEP(f, a, b, c, d, x, s) \
  (a) += f((b), (c), (d)) + (x);  \
  (a) = (((a) << (s)) | (((a) & 0xffffffff) >> (32 - (s))));

/*
 * SET reads 4 input bytes in little-endian byte order and stores them in a
 * properly aligned word in host byte order.
 *
 * The check for little-endian architectures that tolerate unaligned memory
 * accesses is just an optimization.  Nothing will break if it fails to detect
 * a suitable architecture.
 *
 * Unfortunately, this optimization may be a C strict aliasing rules violation
 * if the caller's data buffer has effective type that cannot be aliased by
 * uint32_t.  In practice, this problem may occur if these MD4 routines are
 * inlined into a calling function, or with future and dangerously advanced
 * link-time optimizations.  For the time being, keeping these MD4 routines in
 * their own translation unit avoids the problem.
 */

#define SET(n) (*(uint32_t *)&ptr[(n)*4])
#define GET(n) SET(n)

/*
 * This processes one or more 64-byte data blocks, but does NOT update the bit
 * counters.  There are no alignment requirements.
 */
static const void *body(const void *data, uint32_t size) {
  const uint8_t *ptr;
  uint32_t a, b, c, d;
  uint32_t saved_a, saved_b, saved_c, saved_d;
  const uint32_t ac1 = 0x5a827999, ac2 = 0x6ed9eba1;

  ptr = (const uint8_t *)data;

  a = ctx->a;
  b = ctx->b;
  c = ctx->c;
  d = ctx->d;

  do {
    saved_a = a;
    saved_b = b;
    saved_c = c;
    saved_d = d;

    /* Round 1 */
    STEP(F, a, b, c, d, SET(0), 3)
    STEP(F, d, a, b, c, SET(1), 7)
    STEP(F, c, d, a, b, SET(2), 11)
    STEP(F, b, c, d, a, SET(3), 19)
    STEP(F, a, b, c, d, SET(4), 3)
    STEP(F, d, a, b, c, SET(5), 7)
    STEP(F, c, d, a, b, SET(6), 11)
    STEP(F, b, c, d, a, SET(7), 19)
    STEP(F, a, b, c, d, SET(8), 3)
    STEP(F, d, a, b, c, SET(9), 7)
    STEP(F, c, d, a, b, SET(10), 11)
    STEP(F, b, c, d, a, SET(11), 19)
    STEP(F, a, b, c, d, SET(12), 3)
    STEP(F, d, a, b, c, SET(13), 7)
    STEP(F, c, d, a, b, SET(14), 11)
    STEP(F, b, c, d, a, SET(15), 19)

    /* Round 2 */
    STEP(G, a, b, c, d, GET(0) + ac1, 3)
    STEP(G, d, a, b, c, GET(4) + ac1, 5)
    STEP(G, c, d, a, b, GET(8) + ac1, 9)
    STEP(G, b, c, d, a, GET(12) + ac1, 13)
    STEP(G, a, b, c, d, GET(1) + ac1, 3)
    STEP(G, d, a, b, c, GET(5) + ac1, 5)
    STEP(G, c, d, a, b, GET(9) + ac1, 9)
    STEP(G, b, c, d, a, GET(13) + ac1, 13)
    STEP(G, a, b, c, d, GET(2) + ac1, 3)
    STEP(G, d, a, b, c, GET(6) + ac1, 5)
    STEP(G, c, d, a, b, GET(10) + ac1, 9)
    STEP(G, b, c, d, a, GET(14) + ac1, 13)
    STEP(G, a, b, c, d, GET(3) + ac1, 3)
    STEP(G, d, a, b, c, GET(7) + ac1, 5)
    STEP(G, c, d, a, b, GET(11) + ac1, 9)
    STEP(G, b, c, d, a, GET(15) + ac1, 13)

    /* Round 3 */
    STEP(H, a, b, c, d, GET(0) + ac2, 3)
    STEP(H, d, a, b, c, GET(8) + ac2, 9)
    STEP(H, c, d, a, b, GET(4) + ac2, 11)
    STEP(H, b, c, d, a, GET(12) + ac2, 15)
    STEP(H, a, b, c, d, GET(2) + ac2, 3)
    STEP(H, d, a, b, c, GET(10) + ac2, 9)
    STEP(H, c, d, a, b, GET(6) + ac2, 11)
    STEP(H, b, c, d, a, GET(14) + ac2, 15)
    STEP(H, a, b, c, d, GET(1) + ac2, 3)
    STEP(H, d, a, b, c, GET(9) + ac2, 9)
    STEP(H, c, d, a, b, GET(5) + ac2, 11)
    STEP(H, b, c, d, a, GET(13) + ac2, 15)
    STEP(H, a, b, c, d, GET(3) + ac2, 3)
    STEP(H, d, a, b, c, GET(11) + ac2, 9)
    STEP(H, c, d, a, b, GET(7) + ac2, 11)
    STEP(H, b, c, d, a, GET(15) + ac2, 15)

    a += saved_a;
    b += saved_b;
    c += saved_c;
    d += saved_d;

    ptr += 64;
  } while (size -= 64);

  ctx->a = a;
  ctx->b = b;
  ctx->c = c;
  ctx->d = d;

  return ptr;
}

WASM_EXPORT
void Hash_Init() {
  ctx->a = 0x67452301;
  ctx->b = 0xefcdab89;
  ctx->c = 0x98badcfe;
  ctx->d = 0x10325476;

  ctx->lo = 0;
  ctx->hi = 0;
}

WASM_EXPORT
void Hash_Update(uint32_t size) {
  const uint8_t *data = main_buffer;
  uint32_t saved_lo;
  uint32_t used, available;

  saved_lo = ctx->lo;
  if ((ctx->lo = (saved_lo + size) & 0x1fffffff) < saved_lo) {
    ctx->hi++;
  }
  ctx->hi += size >> 29;

  used = saved_lo & 0x3f;

  if (used) {
    available = 64 - used;

    if (size < available) {
      for (uint32_t i = 0; i < size; i++) {
        ctx->buffer[used + i] = data[i];
      }
      return;
    }

    for (uint32_t i = 0; i < available; i++) {
      ctx->buffer[used + i] = data[i];
    }
    data = (const uint8_t *)data + available;
    size -= available;
    body(ctx->buffer, 64);
  }

  if (size >= 64) {
    data = body(data, size & ~(uint32_t)0x3f);
    size &= 0x3f;
  }

  for (uint32_t i = 0; i < size; i++) {
    ctx->buffer[i] = data[i];
  }
}

#define OUT(dst, src)                \
  (dst)[0] = (uint8_t)(src);         \
  (dst)[1] = (uint8_t)((src) >> 8);  \
  (dst)[2] = (uint8_t)((src) >> 16); \
  (dst)[3] = (uint8_t)((src) >> 24);

WASM_EXPORT
void Hash_Final() {
  uint8_t *result = main_buffer;
  uint32_t used, available;

  used = ctx->lo & 0x3f;

  ctx->buffer[used++] = 0x80;

  available = 64 - used;

  if (available < 8) {
    for (int i = 0; i < available; i++) {
      ctx->buffer[used + i] = 0;
    }
    body(ctx->buffer, 64);
    used = 0;
    available = 64;
  }

  for (int i = available - 9; i >= 0; i--) {
    ctx->buffer[used + i] = 0;
  }

  ctx->lo <<= 3;
  OUT(&ctx->buffer[56], ctx->lo)
  OUT(&ctx->buffer[60], ctx->hi)

  body(ctx->buffer, 64);

  OUT(&result[0], ctx->a)
  OUT(&result[4], ctx->b)
  OUT(&result[8], ctx->c)
  OUT(&result[12], ctx->d)
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(*ctx); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) ctx;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length) {
  Hash_Init();
  Hash_Update(length);
  Hash_Final();
}
