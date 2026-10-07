/*
  BLAKE2 reference source code package - reference C implementations
  Copyright 2012, Samuel Neves <sneves@dei.uc.pt>.  You may use this under the
  terms of the CC0, the OpenSSL Licence, or the Apache Public License 2.0, at
  your option.  The terms of these licenses can be found at:
  - CC0 1.0 Universal : http://creativecommons.org/publicdomain/zero/1.0
  - OpenSSL license   : https://www.openssl.org/source/license.html
  - Apache 2.0        : http://www.apache.org/licenses/LICENSE-2.0

  More information about the BLAKE2 hash function can be found at
  https://blake2.net.

  Modified for hash-wasm by Dani Biró
*/

#define WITH_BUFFER
#include "hash-wasm.h"

#define BLAKE2_PACKED(x) x __attribute__((packed))

enum blake2b_constant {
  BLAKE2B_BLOCKBYTES = 128,
  BLAKE2B_OUTBYTES = 64,
  BLAKE2B_KEYBYTES = 64,
  BLAKE2B_SALTBYTES = 16,
  BLAKE2B_PERSONALBYTES = 16
};

typedef struct blake2b_state__ {
  uint64_t h[8];
  uint64_t t[2];
  uint64_t f[2];
  uint8_t buf[BLAKE2B_BLOCKBYTES];
  int buflen;
  int outlen;
  uint8_t last_node;
} blake2b_state;

blake2b_state S[1];

BLAKE2_PACKED(struct blake2b_param__ {
  uint8_t digest_length;                   /* 1 */
  uint8_t key_length;                      /* 2 */
  uint8_t fanout;                          /* 3 */
  uint8_t depth;                           /* 4 */
  uint32_t leaf_length;                    /* 8 */
  uint32_t node_offset;                    /* 12 */
  uint32_t xof_length;                     /* 16 */
  uint8_t node_depth;                      /* 17 */
  uint8_t inner_length;                    /* 18 */
  uint8_t reserved[14];                    /* 32 */
  uint8_t salt[BLAKE2B_SALTBYTES];         /* 48 */
  uint8_t personal[BLAKE2B_PERSONALBYTES]; /* 64 */
});

typedef struct blake2b_param__ blake2b_param;

blake2b_param P[1];

static __inline__ uint64_t load64(const void *src) {
  return *(uint64_t *)src;
}

static __inline__ void store64(void *dst, uint64_t w) {
  *(uint64_t *)dst = w;
}

static __inline__ uint64_t rotr64(const uint64_t w, const unsigned c) {
  return (w >> c) | (w << (64 - c));
}

static const uint64_t blake2b_IV[8] = {
  0x6a09e667f3bcc908ULL, 0xbb67ae8584caa73bULL,
  0x3c6ef372fe94f82bULL, 0xa54ff53a5f1d36f1ULL,
  0x510e527fade682d1ULL, 0x9b05688c2b3e6c1fULL,
  0x1f83d9abfb41bd6bULL, 0x5be0cd19137e2179ULL
};

static const uint8_t blake2b_sigma[12][16] = {
  {  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15 },
  { 14, 10,  4,  8,  9, 15, 13,  6,  1, 12,  0,  2, 11,  7,  5,  3 },
  { 11,  8, 12,  0,  5,  2, 15, 13, 10, 14,  3,  6,  7,  1,  9,  4 },
  {  7,  9,  3,  1, 13, 12, 11, 14,  2,  6,  5, 10,  4,  0, 15,  8 },
  {  9,  0,  5,  7,  2,  4, 10, 15, 14,  1, 11, 12,  6,  8,  3, 13 },
  {  2, 12,  6, 10,  0, 11,  8,  3,  4, 13,  7,  5, 15, 14,  1,  9 },
  { 12,  5,  1, 15, 14, 13,  4, 10,  0,  7,  6,  3,  9,  2,  8, 11 },
  { 13, 11,  7, 14, 12,  1,  3,  9,  5,  0, 15,  4,  8,  6,  2, 10 },
  {  6, 15, 14,  9, 11,  3,  0,  8, 12,  2, 13,  7,  1,  4, 10,  5 },
  { 10,  2,  8,  4,  7,  6,  1,  5, 15, 11,  9, 14,  3, 12, 13 , 0 },
  {  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15 },
  { 14, 10,  4,  8,  9, 15, 13,  6,  1, 12,  0,  2, 11,  7,  5,  3 }
};

static __inline__ void blake2b_set_lastnode() { S->f[1] = (uint64_t)-1; }

/* Some helper functions, not necessarily useful */
static __inline__ int blake2b_is_lastblock() { return S->f[0] != 0; }

static __inline__ void blake2b_set_lastblock() {
  if (S->last_node) blake2b_set_lastnode();

  S->f[0] = (uint64_t)-1;
}

static __inline__ void blake2b_increment_counter(const uint64_t inc) {
  S->t[0] += inc;
  S->t[1] += (S->t[0] < inc);
}

#define G(r, i, a, b, c, d)                     \
  do {                                          \
    a = a + b + m[blake2b_sigma[r][2 * i + 0]]; \
    d = rotr64(d ^ a, 32);                      \
    c = c + d;                                  \
    b = rotr64(b ^ c, 24);                      \
    a = a + b + m[blake2b_sigma[r][2 * i + 1]]; \
    d = rotr64(d ^ a, 16);                      \
    c = c + d;                                  \
    b = rotr64(b ^ c, 63);                      \
  } while (0)

static void round(uint32_t r, uint64_t m[16], uint64_t v[16]) {
  G(r, 0, v[0], v[4], v[8], v[12]); 
  G(r, 1, v[1], v[5], v[9], v[13]); 
  G(r, 2, v[2], v[6], v[10], v[14]);
  G(r, 3, v[3], v[7], v[11], v[15]);
  G(r, 4, v[0], v[5], v[10], v[15]);
  G(r, 5, v[1], v[6], v[11], v[12]);
  G(r, 6, v[2], v[7], v[8], v[13]); 
  G(r, 7, v[3], v[4], v[9], v[14]); 
};

static void blake2b_compress(const uint8_t block[BLAKE2B_BLOCKBYTES]) {
  uint64_t m[16];
  uint64_t v[16];

  #pragma clang loop unroll(full)
  for (int i = 0; i < 16; ++i) {
    m[i] = load64(block + i * sizeof(m[i]));
  }

  #pragma clang loop unroll(full)
  for (int i = 0; i < 8; ++i) {
    v[i] = S->h[i];
  }

  v[8] = blake2b_IV[0];
  v[9] = blake2b_IV[1];
  v[10] = blake2b_IV[2];
  v[11] = blake2b_IV[3];
  v[12] = blake2b_IV[4] ^ S->t[0];
  v[13] = blake2b_IV[5] ^ S->t[1];
  v[14] = blake2b_IV[6] ^ S->f[0];
  v[15] = blake2b_IV[7] ^ S->f[1];

  #pragma clang loop unroll(full)
  for (int i = 0; i < 12; ++i) {
    round(i, m, v);
  }

  #pragma clang loop unroll(full)
  for (int i = 0; i < 8; ++i) {
    S->h[i] = S->h[i] ^ v[i] ^ v[i + 8];
  }
}

#undef G

void blake2b_update(const void *pin, int inlen) {
  const unsigned char *in = (const unsigned char *)pin;
  if (inlen > 0) {
    int left = S->buflen;
    int fill = BLAKE2B_BLOCKBYTES - left;
    if (inlen > fill) {
      S->buflen = 0;
      /* Fill buffer */
      for (uint8_t i = 0; i < fill; i++) {
        S->buf[left + i] = in[i];
      }
      blake2b_increment_counter(BLAKE2B_BLOCKBYTES);
      blake2b_compress(S->buf); /* Compress */
      in += fill;
      inlen -= fill;
      while (inlen > BLAKE2B_BLOCKBYTES) {
        blake2b_increment_counter(BLAKE2B_BLOCKBYTES);
        blake2b_compress(in);
        in += BLAKE2B_BLOCKBYTES;
        inlen -= BLAKE2B_BLOCKBYTES;
      }
    }
    for (uint8_t i = 0; i < inlen; i++) {
      S->buf[S->buflen + i] = in[i];
    }
    S->buflen += inlen;
  }
}

WASM_EXPORT
void Hash_Final() {
  int outlen = S->outlen;
  uint8_t buffer[BLAKE2B_OUTBYTES] = {0};

  if (blake2b_is_lastblock()) {
    return;
  }

  blake2b_increment_counter(S->buflen);
  blake2b_set_lastblock();
  for (int i = 0; i < BLAKE2B_BLOCKBYTES - S->buflen; i++) { /* Padding */
    (S->buf + S->buflen)[i] = 0;
  }
  blake2b_compress(S->buf);

  for (int i = 0; i < 8; ++i) {
    /* Output full hash to temp buffer */
    store64(buffer + sizeof(S->h[i]) * i, S->h[i]);
  }

  for (uint8_t i = 0; i < S->outlen; i++) {
    main_buffer[i] = buffer[i];
  }
}

static void blake2b_init0() {
  memset(S, 0, sizeof(blake2b_state));

  for (int i = 0; i < 8; ++i) {
    S->h[i] = blake2b_IV[i];
  }
}

/* init xors IV with input parameter block */
void blake2b_init_param() {
  const uint8_t *p = (const uint8_t *)(P);
  int i;

  blake2b_init0();

  /* IV XOR ParamBlock */
  for (i = 0; i < 8; ++i) {
    S->h[i] ^= load64(p + sizeof(S->h[i]) * i);
  }

  S->outlen = P->digest_length;
}

void blake2b_init_key(int outlen, const uint8_t *key, int keylen) {
  P->digest_length = (uint8_t)outlen;
  P->key_length = (uint8_t)keylen;
  P->fanout = 1;
  P->depth = 1;
  // P->leaf_length = 0;
  // P->node_offset = 0;
  // P->xof_length = 0;
  // P->node_depth = 0;
  // P->inner_length = 0;
  // memset(P->reserved, 0, sizeof(P->reserved));
  // memset(P->salt,     0, sizeof(P->salt));
  // memset(P->personal, 0, sizeof(P->personal));

  blake2b_init_param();

  if (keylen > 0) {
    uint8_t block[BLAKE2B_BLOCKBYTES];
    memset128(block, 0);
    for (uint8_t i = 0; i < keylen; i++) {
      block[i] = key[i];
    }
    blake2b_update(block, BLAKE2B_BLOCKBYTES);
  }
}

WASM_EXPORT
void Hash_Init(uint32_t bits) {
  int outlen = bits & 0xFFFF;
  int keylen = bits >> 16;
  blake2b_init_key(outlen / 8, main_buffer, keylen);
}

WASM_EXPORT
void Hash_Update(uint32_t size) {
  blake2b_update(main_buffer, size);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(S); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) S;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t initParam) {
  Hash_Init(initParam);
  Hash_Update(length);
  Hash_Final();
}
