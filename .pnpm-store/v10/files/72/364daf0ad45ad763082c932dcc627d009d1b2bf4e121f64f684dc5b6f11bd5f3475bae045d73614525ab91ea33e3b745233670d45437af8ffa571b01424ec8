// //////////////////////////////////////////////////////////
// xxhash32.h
// Copyright (c) 2016 Stephan Brumme. All rights reserved.
// see http://create.stephan-brumme.com/disclaimer.html
//
// XXHash (32 bit), based on Yann Collet's descriptions, see
// http://cyan4973.github.io/xxHash/
//
// Modified for hash-wasm by Dani Biró
//

#define WITH_BUFFER
#include "hash-wasm.h"
#define bswap32 __builtin_bswap32

static const uint32_t Prime1 = 2654435761U;
static const uint32_t Prime2 = 2246822519U;
static const uint32_t Prime3 = 3266489917U;
static const uint32_t Prime4 = 668265263U;
static const uint32_t Prime5 = 374761393U;

// temporarily store up to 15 bytes between multiple add() calls
#define MAX_BUFFER_SIZE (15 + 1)

// internal state and temporary buffer
struct XXHash32_CTX {
  uint32_t state[4];  // state[2] == seed if totalLength < MAX_BUFFER_SIZE
  unsigned char buffer[MAX_BUFFER_SIZE];
  unsigned int bufferSize;
  uint64_t totalLength;
};

static struct XXHash32_CTX sctx;

// rotate bits, should compile to a single CPU instruction (ROL)
static inline uint32_t rotateLeft(uint32_t x, unsigned char bits) {
  return (x << bits) | (x >> (32 - bits));
}

// process a block of 4x4 bytes, this is the main part of the XXHash32
// algorithm
static inline void process(
  const void* data, uint32_t* state0, uint32_t* state1,
  uint32_t* state2, uint32_t* state3
) {
  const uint32_t* block = (const uint32_t*)data;
  *state0 = rotateLeft(*state0 + block[0] * Prime2, 13) * Prime1;
  *state1 = rotateLeft(*state1 + block[1] * Prime2, 13) * Prime1;
  *state2 = rotateLeft(*state2 + block[2] * Prime2, 13) * Prime1;
  *state3 = rotateLeft(*state3 + block[3] * Prime2, 13) * Prime1;
}

// create new XXHash (32 bit)
/** @param seed your seed value, even zero is a valid seed and e.g. used by LZ4
 * **/
WASM_EXPORT
void Hash_Init(uint32_t seed) {
  sctx.state[0] = seed + Prime1 + Prime2;
  sctx.state[1] = seed + Prime2;
  sctx.state[2] = seed;
  sctx.state[3] = seed - Prime1;
  sctx.bufferSize = 0;
  sctx.totalLength = 0;
}

// add a chunk of bytes
/** @param  length number of bytes
    @return false if parameters are invalid / zero **/

WASM_EXPORT
void Hash_Update(uint32_t length) {
  const void* input = main_buffer;

  // no data ?
  if (!input || length == 0) return;

  sctx.totalLength += length;
  // byte-wise access
  const unsigned char* data = (const unsigned char*)input;

  // unprocessed old data plus new data still fit in temporary buffer ?
  if (sctx.bufferSize + length < MAX_BUFFER_SIZE) {
    // just add new data
    while (length-- > 0) {
      sctx.buffer[sctx.bufferSize++] = *data++;
    }
    return;
  }

  // point beyond last byte
  const unsigned char* stop = data + length;
  const unsigned char* stopBlock = stop - MAX_BUFFER_SIZE;

  // some data left from previous update ?
  if (sctx.bufferSize > 0) {
    // make sure temporary buffer is full (16 bytes)
    while (sctx.bufferSize < MAX_BUFFER_SIZE) {
      sctx.buffer[sctx.bufferSize++] = *data++;
    }

    // process these 16 bytes (4x4)
    process(sctx.buffer, &sctx.state[0], &sctx.state[1], &sctx.state[2], &sctx.state[3]);
  }

  // copying state to local variables helps optimizer A LOT
  uint32_t s0 = sctx.state[0], s1 = sctx.state[1], s2 = sctx.state[2], s3 = sctx.state[3];
  // 16 bytes at once
  while (data <= stopBlock) {
    // local variables s0..s3 instead of state[0]..state[3] are much faster
    process(data, &s0, &s1, &s2, &s3);
    data += 16;
  }
  // copy back
  sctx.state[0] = s0;
  sctx.state[1] = s1;
  sctx.state[2] = s2;
  sctx.state[3] = s3;

  // copy remainder to temporary buffer
  sctx.bufferSize = stop - data;
  for (unsigned int i = 0; i < sctx.bufferSize; i++) {
    sctx.buffer[i] = data[i];
  }
}

// get current hash
/** @return 32 bit XXHash **/
WASM_EXPORT
void Hash_Final() {
  uint32_t result = (uint32_t)sctx.totalLength;

  // fold 128 bit state into one single 32 bit value
  if (sctx.totalLength >= MAX_BUFFER_SIZE) {
    result += rotateLeft(sctx.state[0],  1) +
              rotateLeft(sctx.state[1],  7) +
              rotateLeft(sctx.state[2], 12) +
              rotateLeft(sctx.state[3], 18);
  } else {
    // internal state wasn't set in add(), therefore original seed is still
    // stored in state2
    result += sctx.state[2] + Prime5;
  }

  // process remaining bytes in temporary buffer
  const unsigned char* data = sctx.buffer;
  // point beyond last byte
  const unsigned char* stop = data + sctx.bufferSize;

  // at least 4 bytes left ? => eat 4 bytes per step
  for (; data + 4 <= stop; data += 4) {
    result = rotateLeft(result + *(uint32_t*)data * Prime3, 17) * Prime4;
  }

  // take care of remaining 0..3 bytes, eat 1 byte per step
  while (data != stop) {
    result = rotateLeft(result + (*data++) * Prime5, 11) * Prime1;
  }

  // mix bits
  result ^= result >> 15;
  result *= Prime2;
  result ^= result >> 13;
  result *= Prime3;
  result ^= result >> 16;

  result = bswap32(result);
  memcpy32(main_buffer, &result);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(sctx); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) &sctx;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t initParam) {
  Hash_Init(initParam);
  Hash_Update(length);
  Hash_Final();
}
