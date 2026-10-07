/*
 * Copyright 2009 Colin Percival
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * This file was originally written by Colin Percival as part of the Tarsnap
 * online backup system.
 *
 * Modified for hash-wasm by Dani Biró
 */

#include "hash-wasm.h"

#define BYTES_PER_PAGE 65536

uint8_t *B = NULL;
uint64_t B_size = 0;

WASM_EXPORT
int8_t Hash_SetMemorySize(uint32_t total_bytes) {
  uint32_t bytes_required = total_bytes - B_size;

  if (bytes_required > 0) {
    uint32_t blocks = bytes_required / BYTES_PER_PAGE;
    if (blocks * BYTES_PER_PAGE < bytes_required) {
      blocks += 1;
    }

    if (__builtin_wasm_memory_grow(0, blocks) == -1) {
      return -1;
    }

    B_size += blocks * BYTES_PER_PAGE;
  }

  return 0;
}

WASM_EXPORT
uint8_t *Hash_GetBuffer() {
  if (B == NULL) {
    // start of new memory
    B = (uint8_t *)(__builtin_wasm_memory_size(0) * BYTES_PER_PAGE);
    // always preallocate 16kb to not cause problems with the other hashes
    if (Hash_SetMemorySize(512 * 1024) == -1) {
      return NULL;
    }
  }

  return B;
}

static inline uint32_t le32dec(const void *pp) {
  return ((uint32_t *)pp)[0];
}

static inline void le32enc(void *pp, uint32_t x) {
  ((uint32_t *)pp)[0] = x;
}

/**
 * salsa20_8(B):
 * Apply the salsa20/8 core to the provided block.
 */
static void salsa20_8(uint32_t B[16]) {
  uint32_t x[16];

  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i++) {
    ((uint64_t *)x)[i] = ((uint64_t *)B)[i];
  }

  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i += 2) {
    #define R(a, b) (((a) << (b)) | ((a) >> (32 - (b))))
    /* Operate on columns. */
    x[4] ^= R(x[0] + x[12], 7);
    x[8] ^= R(x[4] + x[0], 9);
    x[12] ^= R(x[8] + x[4], 13);
    x[0] ^= R(x[12] + x[8], 18);

    x[9] ^= R(x[5] + x[1], 7);
    x[13] ^= R(x[9] + x[5], 9);
    x[1] ^= R(x[13] + x[9], 13);
    x[5] ^= R(x[1] + x[13], 18);

    x[14] ^= R(x[10] + x[6], 7);
    x[2] ^= R(x[14] + x[10], 9);
    x[6] ^= R(x[2] + x[14], 13);
    x[10] ^= R(x[6] + x[2], 18);

    x[3] ^= R(x[15] + x[11], 7);
    x[7] ^= R(x[3] + x[15], 9);
    x[11] ^= R(x[7] + x[3], 13);
    x[15] ^= R(x[11] + x[7], 18);

    /* Operate on rows. */
    x[1] ^= R(x[0] + x[3], 7);
    x[2] ^= R(x[1] + x[0], 9);
    x[3] ^= R(x[2] + x[1], 13);
    x[0] ^= R(x[3] + x[2], 18);

    x[6] ^= R(x[5] + x[4], 7);
    x[7] ^= R(x[6] + x[5], 9);
    x[4] ^= R(x[7] + x[6], 13);
    x[5] ^= R(x[4] + x[7], 18);

    x[11] ^= R(x[10] + x[9], 7);
    x[8] ^= R(x[11] + x[10], 9);
    x[9] ^= R(x[8] + x[11], 13);
    x[10] ^= R(x[9] + x[8], 18);

    x[12] ^= R(x[15] + x[14], 7);
    x[13] ^= R(x[12] + x[15], 9);
    x[14] ^= R(x[13] + x[12], 13);
    x[15] ^= R(x[14] + x[13], 18);
    #undef R
  }

  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 16; i++) {
    B[i] += x[i];
  }
}

/**
 * blockmix_salsa8(Bin, Bout, X, r):
 * Compute Bout = BlockMix_{salsa20/8, r}(Bin).  The input Bin must be 128r
 * bytes in length; the output Bout must also be the same size.  The
 * temporary space X must be 64 bytes.
 */
static void blockmix_salsa8(const uint32_t *Bin, uint32_t *Bout, uint32_t *X, int r) {
  /* 1: X <-- B_{2r - 1} */
  #pragma clang loop unroll(full)
  for (uint8_t i = 0; i < 8; i++) {
    ((uint64_t *)X)[i] = ((uint64_t *)&Bin[(2 * r - 1) * 16])[i];
  }

  /* 2: for i = 0 to 2r - 1 do */
  for (uint32_t i = 0; i < 2 * r; i += 2) {
    /* 3: X <-- H(X \xor B_i) */
    #pragma clang loop unroll(full)
    for (uint8_t j = 0; j < 8; j++) {
      ((uint64_t *)X)[j] ^= ((uint64_t *)&Bin[i * 16])[j];
    }
    salsa20_8(X);

    /* 4: Y_i <-- X */
    /* 6: B' <-- (Y_0, Y_2 ... Y_{2r-2}, Y_1, Y_3 ... Y_{2r-1}) */
    #pragma clang loop unroll(full)
    for (uint8_t j = 0; j < 8; j++) {
      ((uint64_t *)&Bout[i * 8])[j] = ((uint64_t *)X)[j];
    }

    /* 3: X <-- H(X \xor B_i) */
    #pragma clang loop unroll(full)
    for (uint8_t j = 0; j < 8; j++) {
      ((uint64_t *)X)[j] ^= ((uint64_t *)&Bin[i * 16 + 16])[j];
    }
    salsa20_8(X);

    /* 4: Y_i <-- X */
    /* 6: B' <-- (Y_0, Y_2 ... Y_{2r-2}, Y_1, Y_3 ... Y_{2r-1}) */
    #pragma clang loop unroll(full)
    for (uint8_t j = 0; j < 8; j++) {
      ((uint64_t *)&Bout[i * 8 + r * 16])[j] = ((uint64_t *)X)[j];
    }
  }
}

/**
 * integerify(B, r):
 * Return the result of parsing B_{2r-1} as a little-endian integer.
 */
static inline uint64_t integerify(const void *B, int r) {
  const uint32_t *X = (const void *)((uintptr_t)(B) + (2 * r - 1) * 64);

  return (((uint64_t)(X[1]) << 32) + X[0]);
}

/**
 * smix(B, r, N, V, XY):
 * Compute B = SMix_r(B, N).  The input B must be 128r bytes in length;
 * the temporary storage V must be 128rN bytes in length; the temporary
 * storage XY must be 256r + 64 bytes in length.  The value N must be a
 * power of 2 greater than 1.  The arrays B, V, and XY must be aligned to a
 * multiple of 64 bytes.
 */
void smix(uint8_t *B, int r, uint64_t N, void *_V, void *XY) {
  uint32_t *X = XY;
  uint32_t *Y = (void *)((uint8_t *)(XY) + 128 * r);
  uint32_t *Z = (void *)((uint8_t *)(XY) + 256 * r);
  uint32_t *V = _V;

  /* 1: X <-- B */
  for (uint32_t k = 0; k < 32 * r; k++) {
    X[k] = le32dec(&B[4 * k]);
  }

  /* 2: for i = 0 to N - 1 do */
  for (uint32_t i = 0; i < N; i += 2) {
    /* 3: V_i <-- X */

    for (uint32_t j = 0; j < r; j++) {
      uint64_t *dest = &(((uint64_t *)&V[i * (32 * r)])[j * 16]);
      uint64_t *src = &(((uint64_t *)X)[j * 16]);
      #pragma clang loop unroll(full)
      for (uint8_t jj = 0; jj < 16; jj++) {
        dest[jj] = src[jj];
      }
    }
    /* 4: X <-- H(X) */
    blockmix_salsa8(X, Y, Z, r);

    /* 3: V_i <-- X */
    for (uint32_t j = 0; j < r; j++) {
      uint64_t *dest = &(((uint64_t *)&V[(i + 1) * (32 * r)])[j * 16]);
      uint64_t *src = &(((uint64_t *)Y)[j * 16]);
      #pragma clang loop unroll(full)
      for (uint8_t jj = 0; jj < 16; jj++) {
        dest[jj] = src[jj];
      }
    }

    /* 4: X <-- H(X) */
    blockmix_salsa8(Y, X, Z, r);
  }

  /* 6: for i = 0 to N - 1 do */
  for (uint32_t i = 0; i < N; i += 2) {
    /* 7: j <-- Integerify(X) mod N */
    uint32_t j = integerify(X, r) & (N - 1);

    /* 8: X <-- H(X \xor V_j) */
    for (uint32_t z = 0; z < r; z++) {
      uint64_t *dest = &(((uint64_t *)X)[z * 16]);
      uint64_t *src = &(((uint64_t *)&V[j * (32 * r)])[z * 16]);
      #pragma clang loop unroll(full)
      for (uint8_t zz = 0; zz < 16; zz++) {
        dest[zz] ^= src[zz];
      }
    }
    blockmix_salsa8(X, Y, Z, r);

    /* 7: j <-- Integerify(X) mod N */
    j = integerify(Y, r) & (N - 1);

    /* 8: X <-- H(X \xor V_j) */
    for (uint32_t z = 0; z < r; z++) {
      uint64_t *dest = &(((uint64_t *)Y)[z * 16]);
      uint64_t *src = &(((uint64_t *)&V[j * (32 * r)])[z * 16]);
      #pragma clang loop unroll(full)
      for (uint8_t zz = 0; zz < 16; zz++) {
        dest[zz] ^= src[zz];
      }
    }
    blockmix_salsa8(Y, X, Z, r);
  }

  /* 10: B' <-- X */
  for (uint32_t k = 0; k < 32 * r; k++) {
    le32enc(&B[4 * k], X[k]);
  }
}

WASM_EXPORT
void scrypt(uint32_t blockSize, uint32_t costFactor, uint32_t parallelism) {
  uint8_t *V = &B[128 * blockSize * parallelism];
  uint8_t *XY = &V[128 * blockSize * costFactor];

  for (uint32_t i = 0; i < parallelism; i++) {
    smix(&B[i * 128 * blockSize], blockSize, costFactor, V, XY);
  }
}
