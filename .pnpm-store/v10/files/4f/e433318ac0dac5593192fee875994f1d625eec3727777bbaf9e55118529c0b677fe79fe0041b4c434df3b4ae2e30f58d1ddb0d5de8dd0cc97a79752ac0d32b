/*
  Based on Golang's Argon2 implementation from crypto package

  Written for hash-wasm by Dani Biró
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
    if (Hash_SetMemorySize(512 * 1024) == -1) { // always preallocate 16kb to not cause problems with the other hashes
      return NULL;
    }
  }

  return B;
}

static __inline__ uint64_t rotr64(const uint64_t w, const unsigned c) {
  return (w >> c) | (w << (64 - c));
}

#define G(a, b, c, d)                                    \
  do {                                                   \
    a = a + b + 2 * (a & 0xFFFFFFFF) * (b & 0xFFFFFFFF); \
    d = rotr64(d ^ a, 32);                               \
    c = c + d + 2 * (c & 0xFFFFFFFF) * (d & 0xFFFFFFFF); \
    b = rotr64(b ^ c, 24);                               \
    a = a + b + 2 * (a & 0xFFFFFFFF) * (b & 0xFFFFFFFF); \
    d = rotr64(d ^ a, 16);                               \
    c = c + d + 2 * (c & 0xFFFFFFFF) * (d & 0xFFFFFFFF); \
    b = rotr64(b ^ c, 63);                               \
  } while (0)

void P(
  uint64_t *a0, uint64_t *a1, uint64_t *a2, uint64_t *a3,
  uint64_t *a4, uint64_t *a5, uint64_t *a6, uint64_t *a7,
  uint64_t *a8, uint64_t *a9, uint64_t *a10, uint64_t *a11,
  uint64_t *a12, uint64_t *a13, uint64_t *a14, uint64_t *a15
) {
  G(*a0, *a4, *a8, *a12);
  G(*a1, *a5, *a9, *a13);
  G(*a2, *a6, *a10, *a14);
  G(*a3, *a7, *a11, *a15);
  G(*a0, *a5, *a10, *a15);
  G(*a1, *a6, *a11, *a12);
  G(*a2, *a7, *a8, *a13);
  G(*a3, *a4, *a9, *a14);
}

uint32_t indexAlpha(
  uint64_t rand, uint32_t lanes, uint32_t segments,
  uint32_t parallelism, uint32_t k, uint32_t slice,
  uint32_t lane, uint32_t index
) {
  uint32_t rlane = ((uint32_t)(rand >> 32)) % parallelism;

  if (k == 0 && slice == 0) {
    rlane = lane;
  }

  uint32_t max = segments * 3;
  uint32_t start = ((slice + 1) % 4) * segments;

  if (lane == rlane) {
    max += index;
  }

  if (k == 0) {
    max = slice * segments;
    start = 0;
    if (slice == 0 || lane == rlane) {
      max += index;
    }
  }

  if (index == 0 || lane == rlane) {
    max--;
  }

  uint64_t phi = rand & 0xFFFFFFFF;
  phi = phi * phi >> 32;
  phi = phi * max >> 32;
  uint32_t ri = (start + max - 1 - phi) % (uint64_t)lanes;

  return rlane * lanes + ri;
}

uint64_t t[128];

void block(uint64_t *z, uint64_t *a, uint64_t *b, int32_t xor) {
  #pragma clang loop unroll(full)
  for (int i = 0; i < 128; i++) {
    t[i] = a[i] ^ b[i];
  }

  #pragma clang loop unroll(full)
  for (int i = 0; i < 128; i += 16) {
    P(
      &t[i], &t[i + 1], &t[i + 2], &t[i + 3], &t[i + 4], &t[i + 5], &t[i + 6], &t[i + 7],
      &t[i + 8], &t[i + 9], &t[i + 10], &t[i + 11], &t[i + 12], &t[i + 13], &t[i + 14], &t[i + 15]
    );
  }

  #pragma clang loop unroll(full)
  for (int i = 0; i < 16; i += 2) {
    P(
      &t[i], &t[i + 1], &t[i + 16], &t[i + 17], &t[i + 32], &t[i + 33], &t[i + 48], &t[i + 49],
      &t[i + 64], &t[i + 65], &t[i + 80], &t[i + 81], &t[i + 96], &t[i + 97], &t[i + 112], &t[i + 113]
    );
  }

  if (xor) {
    for (int i = 0; i < 128; i++) {
      z[i] ^= a[i] ^ b[i] ^ t[i];
    }
  } else {
    for (int i = 0; i < 128; i++) {
      z[i] = a[i] ^ b[i] ^ t[i];
    }
  }
}

uint64_t addresses[128];
uint64_t zero[128];
uint64_t in[128];

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t memorySize) {
  uint32_t *initVector = (uint32_t *)(B + 1024 * memorySize);
  uint32_t parallelism = initVector[0];
  uint32_t hashLength = initVector[1];
  uint32_t memorySize2 = initVector[2];
  uint32_t iterations = initVector[3];
  uint32_t version = initVector[4];
  uint32_t hashType = initVector[5];
  if (memorySize2 != memorySize) {
    return;
  }

  uint32_t segments = memorySize / (parallelism * 4);
  memorySize = segments * parallelism * 4;
  uint32_t lanes = segments * 4;

  in[3] = memorySize;
  in[4] = iterations;
  in[5] = hashType;

  for (uint32_t k = 0; k < iterations; k++) {
    in[0] = k;
    for (uint8_t slice = 0; slice < 4; slice++) {
      in[2] = slice;
      for (uint32_t lane = 0; lane < parallelism; lane++) {
        in[1] = lane;
        in[6] = 0;
        uint32_t index = 0;
        if (k == 0 && slice == 0) {
          index = 2;
          if (hashType == 1 || hashType == 2) {
            in[6]++;
            block(addresses, in, zero, 0);
            block(addresses, addresses, zero, 0);
          }
        }
        uint32_t offset = lane * lanes + slice * segments + index;
        while (index < segments) {
          uint32_t prev = offset - 1;
          if (index == 0 && slice == 0) {
            prev += lanes;
          }

          uint64_t rand;
          if (hashType == 1 || (hashType == 2 && k == 0 && slice < 2)) {
            if (index % 128 == 0) {
              in[6]++;
              block(addresses, in, zero, 0);
              block(addresses, addresses, zero, 0);
            }
            rand = addresses[index % 128];
          } else {
            rand = *(uint64_t *)(B + prev * 1024);
          }
          uint32_t newOffset = indexAlpha(rand, lanes, segments, parallelism, k, slice, lane, index);

          block(
            (uint64_t *)&B[offset * 1024],
            (uint64_t *)&B[prev * 1024],
            (uint64_t *)&B[newOffset * 1024],
            1
          );
          index++;
          offset++;
        }
      }
    }
  }

  uint32_t destIndex = (memorySize - 1) * 1024;
  for (uint32_t lane = 0; lane < parallelism - 1; lane++) {
    uint32_t sourceIndex = (lane * lanes + lanes - 1) * 1024;
    for (uint32_t i = 0; i < 1024; i += 8) {
      *(uint64_t *)&B[destIndex + i] ^= *(uint64_t *)&B[sourceIndex + i];
    }
  }

  for (uint16_t i = 0; i < 1024; i += 8) {
    *(uint64_t *)&B[i] = *(uint64_t *)&B[destIndex + i];
  }
}
