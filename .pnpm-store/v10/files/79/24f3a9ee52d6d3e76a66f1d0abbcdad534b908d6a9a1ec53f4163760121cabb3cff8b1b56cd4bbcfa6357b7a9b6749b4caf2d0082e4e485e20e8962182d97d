// //////////////////////////////////////////////////////////
// xxhash64.h
// Copyright (c) 2016 Stephan Brumme. All rights reserved.
// see http://create.stephan-brumme.com/disclaimer.html
//
// XXHash (64 bit), based on Yann Collet's descriptions, see
// http://cyan4973.github.io/xxHash/
//
// Modified for hash-wasm by Dani Biró
//

#define WITH_BUFFER
#include "hash-wasm.h"
#define bswap64 __builtin_bswap64

const uint64_t Prime1 = 11400714785074694791ULL;
const uint64_t Prime2 = 14029467366897019727ULL;
const uint64_t Prime3 = 1609587929392839161ULL;
const uint64_t Prime4 = 9650029242287828579ULL;
const uint64_t Prime5 = 2870177450012600261ULL;

// temporarily store up to 31 bytes between multiple add() calls
#define MAX_BUFFER_SIZE (31 + 1)

struct XXHash64_CTX {
  uint64_t state[4];
  unsigned char buffer[MAX_BUFFER_SIZE];
  unsigned int bufferSize;
  uint64_t totalLength;
};

static struct XXHash64_CTX sctx;

// rotate bits, should compile to a single CPU instruction (ROL)
static inline uint64_t rotateLeft(uint64_t x, unsigned char bits) {
  return (x << bits) | (x >> (64 - bits));
}

// process a single 64 bit value
static inline uint64_t processSingle(uint64_t previous, uint64_t input) {
  return rotateLeft(previous + input * Prime2, 31) * Prime1;
}

// process a block of 4x4 bytes, this is the main part of the XXHash32
// algorithm
static inline void process(
  const void* data, uint64_t* state0, uint64_t* state1,
  uint64_t* state2, uint64_t* state3
) {
  const uint64_t* block = (const uint64_t*)data;
  *state0 = processSingle(*state0, block[0]);
  *state1 = processSingle(*state1, block[1]);
  *state2 = processSingle(*state2, block[2]);
  *state3 = processSingle(*state3, block[3]);
}

WASM_EXPORT
void Hash_Init() {
  // seed is at the memory object
  uint64_t seed = *((uint64_t*)main_buffer);

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
  if (length == 0) return;

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

    // process these 32 bytes (4x8)
    process(sctx.buffer, &sctx.state[0], &sctx.state[1], &sctx.state[2], &sctx.state[3]);
  }

  // copying state to local variables helps optimizer A LOT
  uint64_t s0 = sctx.state[0], s1 = sctx.state[1], s2 = sctx.state[2], s3 = sctx.state[3];
  // 32 bytes at once
  while (data <= stopBlock) {
    // local variables s0..s3 instead of state[0]..state[3] are much faster
    process(data, &s0, &s1, &s2, &s3);
    data += 32;
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

  return;
}

/// get current hash
WASM_EXPORT
void Hash_Final() {
  // fold 256 bit state into one single 64 bit value
  uint64_t result;
  if (sctx.totalLength >= MAX_BUFFER_SIZE) {
    result = rotateLeft(sctx.state[0], 1) + rotateLeft(sctx.state[1], 7) +
             rotateLeft(sctx.state[2], 12) + rotateLeft(sctx.state[3], 18);
    result = (result ^ processSingle(0, sctx.state[0])) * Prime1 + Prime4;
    result = (result ^ processSingle(0, sctx.state[1])) * Prime1 + Prime4;
    result = (result ^ processSingle(0, sctx.state[2])) * Prime1 + Prime4;
    result = (result ^ processSingle(0, sctx.state[3])) * Prime1 + Prime4;
  } else {
    // internal state wasn't set in add(), therefore original seed is still
    // stored in state2
    result = sctx.state[2] + Prime5;
  }

  result += sctx.totalLength;

  // process remaining bytes in temporary buffer
  const unsigned char* data = sctx.buffer;
  // point beyond last byte
  const unsigned char* stop = data + sctx.bufferSize;

  // at least 8 bytes left ? => eat 8 bytes per step
  for (; data + 8 <= stop; data += 8) {
    result =
        rotateLeft(result ^ processSingle(0, *(uint64_t*)data), 27) * Prime1 +
        Prime4;
  }

  // 4 bytes left ? => eat those
  if (data + 4 <= stop) {
    result =
        rotateLeft(result ^ (*(uint32_t*)data) * Prime1, 23) * Prime2 + Prime3;
    data += 4;
  }

  // take care of remaining 0..3 bytes, eat 1 byte per step
  while (data != stop) {
    result = rotateLeft(result ^ (*data++) * Prime5, 11) * Prime1;
  }

  // mix bits
  result ^= result >> 33;
  result *= Prime2;
  result ^= result >> 29;
  result *= Prime3;
  result ^= result >> 32;

  result = bswap64(result);
  memcpy64(main_buffer, &result);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(sctx); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) &sctx;
}

WASM_EXPORT
void Hash_Calculate() {
  return;
}
