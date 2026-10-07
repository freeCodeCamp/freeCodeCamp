/*
 * xxHash - Extremely Fast Hash algorithm
 * Header File
 * Copyright (C) 2012-2020 Yann Collet
 *
 * BSD 2-Clause License (https://www.opensource.org/licenses/bsd-license.php)
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *    * Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above
 *      copyright notice, this list of conditions and the following disclaimer
 *      in the documentation and/or other materials provided with the
 *      distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * You can contact the author at:
 *   - xxHash homepage: https://www.xxhash.com
 *   - xxHash source repository: https://github.com/Cyan4973/xxHash
 *
 * Modified for hash-wasm by Dani Biró
 */

#define WITH_BUFFER
#include <stddef.h>

#include "hash-wasm.h"

typedef uint8_t xxh_u8;
typedef uint32_t XXH32_hash_t;
typedef XXH32_hash_t xxh_u32;
typedef uint64_t XXH64_hash_t;
typedef XXH64_hash_t xxh_u64;
typedef struct {
  XXH64_hash_t low64;  /*!< `value & 0xFFFFFFFFFFFFFFFF` */
  XXH64_hash_t high64; /*!< `value >> 64` */
} XXH128_hash_t;

#define XXH_RESTRICT restrict
#define XXH_NO_INLINE static
#define XXH_likely(x) __builtin_expect(x, 1)
#define XXH_unlikely(x) __builtin_expect(x, 0)
#define XXH_swap64 __builtin_bswap64
#define XXH_swap32 __builtin_bswap32
#define XXH_rotl32 __builtin_rotateleft32
#define XXH_rotl64 __builtin_rotateleft64
#define XXH_FORCE_INLINE inline static

#define XXH_ALIGN(n) alignas(n)
#define XXH_ALIGN_MEMBER(align, type) XXH_ALIGN(align) type
#define XXH3_INTERNALBUFFER_SIZE 256
#define XXH3_SECRET_DEFAULT_SIZE 192
#define XXH3_SECRET_SIZE_MIN 136
#define XXH_SECRET_DEFAULT_SIZE 192 /* minimum XXH3_SECRET_SIZE_MIN */
#define XXH_STRIPE_LEN 64
#define XXH_SECRET_CONSUME_RATE \
  8 /* nb of secret bytes consumed at each accumulation */
#define XXH_ASSERT(c) ((void)0)
#define XXH_STATIC_ASSERT(c)            \
  do {                                  \
    enum { XXH_sa = 1 / (int)(!!(c)) }; \
  } while (0)
#define XXH_ACC_ALIGN 64
#define XXH_ACC_NB (XXH_STRIPE_LEN / sizeof(xxh_u64))
#define XXH_SECRET_MERGEACCS_START 11
#define XXH3_MIDSIZE_MAX 240
#define XXH_SECRET_LASTACC_START 7
#define XXH3_MIDSIZE_STARTOFFSET 3
#define XXH3_MIDSIZE_LASTOFFSET 17
#define XXH_SEC_ALIGN 64

XXH_FORCE_INLINE xxh_u64 XXH_mult32to64(xxh_u64 x, xxh_u64 y) {
  return (x & 0xFFFFFFFF) * (y & 0xFFFFFFFF);
}

XXH_FORCE_INLINE xxh_u32 XXH_read32(const void* memPtr) {
  return *(const xxh_u32*)memPtr;
}

XXH_FORCE_INLINE xxh_u32 XXH_readLE32(const void* ptr) {
  return XXH_read32(ptr);
}

XXH_FORCE_INLINE xxh_u64 XXH_read64(const void* memPtr) {
  return *(const xxh_u64*)memPtr;
}

XXH_FORCE_INLINE xxh_u64 XXH_readLE64(const void* ptr) {
  return XXH_read64(ptr);
}

XXH_FORCE_INLINE void XXH_writeLE64(void* dst, xxh_u64 v64) {
  memcpy64(dst, &v64);
}

XXH_FORCE_INLINE xxh_u64 XXH_xorshift64(xxh_u64 v64, int shift) {
  XXH_ASSERT(0 <= shift && shift < 64);
  return v64 ^ (v64 >> shift);
}

XXH_FORCE_INLINE XXH128_hash_t XXH_mult64to128(xxh_u64 lhs, xxh_u64 rhs) {
  /* First calculate all of the cross products. */
  xxh_u64 const lo_lo = XXH_mult32to64(lhs & 0xFFFFFFFF, rhs & 0xFFFFFFFF);
  xxh_u64 const hi_lo = XXH_mult32to64(lhs >> 32, rhs & 0xFFFFFFFF);
  xxh_u64 const lo_hi = XXH_mult32to64(lhs & 0xFFFFFFFF, rhs >> 32);
  xxh_u64 const hi_hi = XXH_mult32to64(lhs >> 32, rhs >> 32);

  /* Now add the products together. These will never overflow. */
  xxh_u64 const cross = (lo_lo >> 32) + (hi_lo & 0xFFFFFFFF) + lo_hi;
  xxh_u64 const upper = (hi_lo >> 32) + (cross >> 32) + hi_hi;
  xxh_u64 const lower = (cross << 32) | (lo_lo & 0xFFFFFFFF);

  XXH128_hash_t r128;
  r128.low64 = lower;
  r128.high64 = upper;
  return r128;
}

#define XXH_PREFETCH(ptr) (void)(ptr) /* disabled */
typedef XXH128_hash_t (*XXH3_hashLong128_f)(const void* XXH_RESTRICT, size_t,
                                            XXH64_hash_t,
                                            const void* XXH_RESTRICT, size_t);
#define XXH_PREFETCH_DIST 320

#define XXH_PRIME32_1 0x9E3779B1U /*!< 0b10011110001101110111100110110001 */
#define XXH_PRIME32_2 0x85EBCA77U /*!< 0b10000101111010111100101001110111 */
#define XXH_PRIME32_3 0xC2B2AE3DU /*!< 0b11000010101100101010111000111101 */
#define XXH_PRIME32_4 0x27D4EB2FU /*!< 0b00100111110101001110101100101111 */
#define XXH_PRIME32_5 0x165667B1U /*!< 0b00010110010101100110011110110001 */

#define XXH_PRIME64_1 0x9E3779B185EBCA87ULL
#define XXH_PRIME64_2 0xC2B2AE3D27D4EB4FULL
#define XXH_PRIME64_3 0x165667B19E3779F9ULL
#define XXH_PRIME64_4 0x85EBCA77C2B2AE63ULL
#define XXH_PRIME64_5 0x27D4EB2F165667C5ULL

XXH_ALIGN(64)
static const xxh_u8 XXH3_kSecret[XXH_SECRET_DEFAULT_SIZE] = {
  0xb8, 0xfe, 0x6c, 0x39, 0x23, 0xa4, 0x4b, 0xbe, 0x7c, 0x01, 0x81, 0x2c,
  0xf7, 0x21, 0xad, 0x1c, 0xde, 0xd4, 0x6d, 0xe9, 0x83, 0x90, 0x97, 0xdb,
  0x72, 0x40, 0xa4, 0xa4, 0xb7, 0xb3, 0x67, 0x1f, 0xcb, 0x79, 0xe6, 0x4e,
  0xcc, 0xc0, 0xe5, 0x78, 0x82, 0x5a, 0xd0, 0x7d, 0xcc, 0xff, 0x72, 0x21,
  0xb8, 0x08, 0x46, 0x74, 0xf7, 0x43, 0x24, 0x8e, 0xe0, 0x35, 0x90, 0xe6,
  0x81, 0x3a, 0x26, 0x4c, 0x3c, 0x28, 0x52, 0xbb, 0x91, 0xc3, 0x00, 0xcb,
  0x88, 0xd0, 0x65, 0x8b, 0x1b, 0x53, 0x2e, 0xa3, 0x71, 0x64, 0x48, 0x97,
  0xa2, 0x0d, 0xf9, 0x4e, 0x38, 0x19, 0xef, 0x46, 0xa9, 0xde, 0xac, 0xd8,
  0xa8, 0xfa, 0x76, 0x3f, 0xe3, 0x9c, 0x34, 0x3f, 0xf9, 0xdc, 0xbb, 0xc7,
  0xc7, 0x0b, 0x4f, 0x1d, 0x8a, 0x51, 0xe0, 0x4b, 0xcd, 0xb4, 0x59, 0x31,
  0xc8, 0x9f, 0x7e, 0xc9, 0xd9, 0x78, 0x73, 0x64, 0xea, 0xc5, 0xac, 0x83,
  0x34, 0xd3, 0xeb, 0xc3, 0xc5, 0x81, 0xa0, 0xff, 0xfa, 0x13, 0x63, 0xeb,
  0x17, 0x0d, 0xdd, 0x51, 0xb7, 0xf0, 0xda, 0x49, 0xd3, 0x16, 0x55, 0x26,
  0x29, 0xd4, 0x68, 0x9e, 0x2b, 0x16, 0xbe, 0x58, 0x7d, 0x47, 0xa1, 0xfc,
  0x8f, 0xf8, 0xb8, 0xd1, 0x7a, 0xd0, 0x31, 0xce, 0x45, 0xcb, 0x3a, 0x8f,
  0x95, 0x16, 0x04, 0x28, 0xaf, 0xd7, 0xfb, 0xca, 0xbb, 0x4b, 0x40, 0x7e,
};

#define XXH3_INIT_ACC                                                          \
  {                                                                            \
    XXH_PRIME32_3, XXH_PRIME64_1, XXH_PRIME64_2, XXH_PRIME64_3, XXH_PRIME64_4, \
        XXH_PRIME32_2, XXH_PRIME64_5, XXH_PRIME32_1                            \
  }

struct XXH3_state_s {
  XXH_ALIGN_MEMBER(64, XXH64_hash_t acc[8]);
  /*!< The 8 accumulators. Similar to `vN` in @ref XXH32_state_s::v1 and @ref
   * XXH64_state_s */
  XXH_ALIGN_MEMBER(64, unsigned char customSecret[XXH3_SECRET_DEFAULT_SIZE]);
  /*!< Used to store a custom secret generated from a seed. */
  XXH_ALIGN_MEMBER(64, unsigned char buffer[XXH3_INTERNALBUFFER_SIZE]);
  /*!< The internal buffer. @see XXH32_state_s::mem32 */
  XXH32_hash_t bufferedSize;
  /*!< The amount of memory in @ref buffer, @see XXH32_state_s::memsize */
  XXH32_hash_t reserved32;
  /*!< Reserved field. Needed for padding on 64-bit. */
  size_t nbStripesSoFar;
  /*!< Number or stripes processed. */
  XXH64_hash_t totalLen;
  /*!< Total length hashed. 64-bit even on 32-bit targets. */
  size_t nbStripesPerBlock;
  /*!< Number of stripes per block. */
  size_t secretLimit;
  /*!< Size of @ref customSecret or @ref extSecret */
  XXH64_hash_t seed;
  /*!< Seed for _withSeed variants. Must be zero otherwise, @see
   * XXH3_INITSTATE() */
  XXH64_hash_t reserved64;
  /*!< Reserved field. */
  const unsigned char* extSecret;
  /*!< Reference to an external secret for the _withSecret variants, NULL
   *   for other variants. */
  /* note: there may be some padding at the end due to alignment on 64 bytes */
}; /* typedef'd to XXH3_state_t */

typedef struct XXH3_state_s XXH3_state_t;

XXH_FORCE_INLINE xxh_u64 XXH64_avalanche(xxh_u64 h64) {
  h64 ^= h64 >> 33;
  h64 *= XXH_PRIME64_2;
  h64 ^= h64 >> 29;
  h64 *= XXH_PRIME64_3;
  h64 ^= h64 >> 32;
  return h64;
}

XXH_FORCE_INLINE xxh_u64 XXH3_mul128_fold64(xxh_u64 lhs, xxh_u64 rhs) {
  XXH128_hash_t product = XXH_mult64to128(lhs, rhs);
  return product.low64 ^ product.high64;
}

XXH_FORCE_INLINE xxh_u64 XXH3_mix16B(
  const xxh_u8* XXH_RESTRICT input,
  const xxh_u8* XXH_RESTRICT secret, xxh_u64 seed64
) {
  xxh_u64 const input_lo = XXH_readLE64(input);
  xxh_u64 const input_hi = XXH_readLE64(input + 8);
  return XXH3_mul128_fold64(
    input_lo ^ (XXH_readLE64(secret) + seed64),
    input_hi ^ (XXH_readLE64(secret + 8) - seed64)
  );
}

static void XXH3_reset_internal(
  XXH3_state_t* statePtr, XXH64_hash_t seed,
  const void* secret, size_t secretSize
) {
  size_t const initStart = offsetof(XXH3_state_t, bufferedSize);
  size_t const initLength =
      offsetof(XXH3_state_t, nbStripesPerBlock) - initStart;
  XXH_ASSERT(offsetof(XXH3_state_t, nbStripesPerBlock) > initStart);
  XXH_ASSERT(statePtr != NULL);
  /* set members from bufferedSize to nbStripesPerBlock (excluded) to 0 */
  memset((char*)statePtr + initStart, 0, initLength);
  statePtr->acc[0] = XXH_PRIME32_3;
  statePtr->acc[1] = XXH_PRIME64_1;
  statePtr->acc[2] = XXH_PRIME64_2;
  statePtr->acc[3] = XXH_PRIME64_3;
  statePtr->acc[4] = XXH_PRIME64_4;
  statePtr->acc[5] = XXH_PRIME32_2;
  statePtr->acc[6] = XXH_PRIME64_5;
  statePtr->acc[7] = XXH_PRIME32_1;
  statePtr->seed = seed;
  statePtr->extSecret = (const unsigned char*)secret;
  XXH_ASSERT(secretSize >= XXH3_SECRET_SIZE_MIN);
  statePtr->secretLimit = secretSize - XXH_STRIPE_LEN;
  statePtr->nbStripesPerBlock = statePtr->secretLimit / XXH_SECRET_CONSUME_RATE;
}

static void XXH3_128bits_reset(XXH3_state_t* statePtr) {
  XXH3_reset_internal(statePtr, 0, XXH3_kSecret, XXH_SECRET_DEFAULT_SIZE);
}

static void XXH3_initCustomSecret_scalar(
  void* XXH_RESTRICT customSecret, xxh_u64 seed64
) {
  const xxh_u8* kSecretPtr = XXH3_kSecret;
  XXH_STATIC_ASSERT((XXH_SECRET_DEFAULT_SIZE & 15) == 0);

  XXH_ASSERT(kSecretPtr == XXH3_kSecret);

  int const nbRounds = XXH_SECRET_DEFAULT_SIZE / 16;
  for (int i = 0; i < nbRounds; i++) {
    /*
     * The asm hack causes Clang to assume that kSecretPtr aliases with
     * customSecret, and on aarch64, this prevented LDP from merging two
     * loads together for free. Putting the loads together before the stores
     * properly generates LDP.
     */
    xxh_u64 lo = XXH_readLE64(kSecretPtr + 16 * i) + seed64;
    xxh_u64 hi = XXH_readLE64(kSecretPtr + 16 * i + 8) - seed64;
    XXH_writeLE64((xxh_u8*)customSecret + 16 * i, lo);
    XXH_writeLE64((xxh_u8*)customSecret + 16 * i + 8, hi);
  }
}

static void XXH3_128bits_reset_withSeed(
  XXH3_state_t* statePtr, XXH64_hash_t seed
) {
  if (seed == 0) return XXH3_128bits_reset(statePtr);
  if (seed != statePtr->seed)
    XXH3_initCustomSecret_scalar(statePtr->customSecret, seed);
  XXH3_reset_internal(statePtr, seed, NULL, XXH_SECRET_DEFAULT_SIZE);
}

void XXH3_accumulate_512_scalar(
  void* XXH_RESTRICT acc, const void* XXH_RESTRICT input, const void* XXH_RESTRICT secret
) {
  XXH_ALIGN(XXH_ACC_ALIGN)
  xxh_u64* const xacc = (xxh_u64*)acc; /* presumed aligned */
  const xxh_u8* const xinput =
      (const xxh_u8*)input; /* no alignment restriction */
  const xxh_u8* const xsecret =
      (const xxh_u8*)secret; /* no alignment restriction */
  XXH_ASSERT(((size_t)acc & (XXH_ACC_ALIGN - 1)) == 0);
  for (size_t i = 0; i < XXH_ACC_NB; i++) {
    xxh_u64 const data_val = XXH_readLE64(xinput + 8 * i);
    xxh_u64 const data_key = data_val ^ XXH_readLE64(xsecret + i * 8);
    xacc[i ^ 1] += data_val; /* swap adjacent lanes */
    xacc[i] += XXH_mult32to64(data_key & 0xFFFFFFFF, data_key >> 32);
  }
}

void XXH3_scrambleAcc_scalar(
  void* XXH_RESTRICT acc, const void* XXH_RESTRICT secret
) {
  XXH_ALIGN(XXH_ACC_ALIGN)
  xxh_u64* const xacc = (xxh_u64*)acc; /* presumed aligned */
  const xxh_u8* const xsecret =
      (const xxh_u8*)secret; /* no alignment restriction */
  XXH_ASSERT((((size_t)acc) & (XXH_ACC_ALIGN - 1)) == 0);
  for (size_t i = 0; i < XXH_ACC_NB; i++) {
    xxh_u64 const key64 = XXH_readLE64(xsecret + 8 * i);
    xxh_u64 acc64 = xacc[i];
    acc64 = XXH_xorshift64(acc64, 47);
    acc64 ^= key64;
    acc64 *= XXH_PRIME32_1;
    xacc[i] = acc64;
  }
}

/*
 * XXH3_accumulate()
 * Loops over XXH3_accumulate_512().
 * Assumption: nbStripes will not overflow the secret size
 */
void XXH3_accumulate(
  xxh_u64* XXH_RESTRICT acc,
  const xxh_u8* XXH_RESTRICT input,
  const xxh_u8* XXH_RESTRICT secret, size_t nbStripes
) {
  for (size_t n = 0; n < nbStripes; n++) {
    const xxh_u8* const in = input + n * XXH_STRIPE_LEN;
    XXH_PREFETCH(in + XXH_PREFETCH_DIST);
    XXH3_accumulate_512_scalar(acc, in, secret + n * XXH_SECRET_CONSUME_RATE);
  }
}

/* Note : when XXH3_consumeStripes() is invoked,
 * there must be a guarantee that at least one more byte must be consumed from
 * input
 * so that the function can blindly consume all stripes using the "normal"
 * secret segment */
void XXH3_consumeStripes(
  xxh_u64* XXH_RESTRICT acc,
  size_t* XXH_RESTRICT nbStripesSoFarPtr,
  size_t nbStripesPerBlock,
  const xxh_u8* XXH_RESTRICT input, size_t nbStripes,
  const xxh_u8* XXH_RESTRICT secret,
  size_t secretLimit
) {
  XXH_ASSERT(nbStripes <=
             nbStripesPerBlock); /* can handle max 1 scramble per invocation */
  XXH_ASSERT(*nbStripesSoFarPtr < nbStripesPerBlock);
  if (nbStripesPerBlock - *nbStripesSoFarPtr <= nbStripes) {
    /* need a scrambling operation */
    size_t const nbStripesToEndofBlock = nbStripesPerBlock - *nbStripesSoFarPtr;
    size_t const nbStripesAfterBlock = nbStripes - nbStripesToEndofBlock;
    XXH3_accumulate(acc, input,
                    secret + nbStripesSoFarPtr[0] * XXH_SECRET_CONSUME_RATE,
                    nbStripesToEndofBlock);
    XXH3_scrambleAcc_scalar(acc, secret + secretLimit);
    XXH3_accumulate(acc, input + nbStripesToEndofBlock * XXH_STRIPE_LEN, secret,
                    nbStripesAfterBlock);
    *nbStripesSoFarPtr = nbStripesAfterBlock;
  } else {
    XXH3_accumulate(acc, input,
                    secret + nbStripesSoFarPtr[0] * XXH_SECRET_CONSUME_RATE,
                    nbStripes);
    *nbStripesSoFarPtr += nbStripes;
  }
}

void XXH3_update(XXH3_state_t* state, const xxh_u8* input, size_t len) {
  {
    const xxh_u8* const bEnd = input + len;
    const unsigned char* const secret =
        (state->extSecret == NULL) ? state->customSecret : state->extSecret;

    state->totalLen += len;
    XXH_ASSERT(state->bufferedSize <= XXH3_INTERNALBUFFER_SIZE);

    if (state->bufferedSize + len <= XXH3_INTERNALBUFFER_SIZE) { /* fill in tmp buffer */
      memcpy2(state->buffer + state->bufferedSize, input, len);
      state->bufferedSize += (XXH32_hash_t)len;
      return;
    }
    /* total input is now > XXH3_INTERNALBUFFER_SIZE */

#define XXH3_INTERNALBUFFER_STRIPES (XXH3_INTERNALBUFFER_SIZE / XXH_STRIPE_LEN)
    XXH_STATIC_ASSERT(XXH3_INTERNALBUFFER_SIZE % XXH_STRIPE_LEN ==
                      0); /* clean multiple */

    /*
     * Internal buffer is partially filled (always, except at beginning)
     * Complete it, then consume it.
     */
    if (state->bufferedSize) {
      size_t const loadSize = XXH3_INTERNALBUFFER_SIZE - state->bufferedSize;
      memcpy2(state->buffer + state->bufferedSize, input, loadSize);
      input += loadSize;
      XXH3_consumeStripes(
        state->acc, &state->nbStripesSoFar,
        state->nbStripesPerBlock, state->buffer,
        XXH3_INTERNALBUFFER_STRIPES, secret,
        state->secretLimit
      );
      state->bufferedSize = 0;
    }
    XXH_ASSERT(input < bEnd);

    /* Consume input by a multiple of internal buffer size */
    if (input + XXH3_INTERNALBUFFER_SIZE < bEnd) {
      const xxh_u8* const limit = bEnd - XXH3_INTERNALBUFFER_SIZE;
      do {
        XXH3_consumeStripes(
          state->acc, &state->nbStripesSoFar, state->nbStripesPerBlock, input,
          XXH3_INTERNALBUFFER_STRIPES, secret, state->secretLimit
        );
        input += XXH3_INTERNALBUFFER_SIZE;
      } while (input < limit);
      /* for last partial stripe */
      memcpy64(
        state->buffer + sizeof(state->buffer) - XXH_STRIPE_LEN,
        input - XXH_STRIPE_LEN
      );
    }
    XXH_ASSERT(input < bEnd);

    /* Some remaining input (always) : buffer it */
    memcpy2(state->buffer, input, (size_t)(bEnd - input));
    state->bufferedSize = (XXH32_hash_t)(bEnd - input);
  }

  return;
}

void XXH3_128bits_update(XXH3_state_t* state, const void* input, size_t len) {
  XXH3_update(state, (const xxh_u8*)input, len);
}

xxh_u64 XXH3_mix2Accs(
  const xxh_u64* XXH_RESTRICT acc,
  const xxh_u8* XXH_RESTRICT secret
) {
  return XXH3_mul128_fold64(acc[0] ^ XXH_readLE64(secret),
                            acc[1] ^ XXH_readLE64(secret + 8));
}

/*
 * This is a fast avalanche stage,
 * suitable when input bits are already partially mixed
 */
XXH64_hash_t XXH3_avalanche(xxh_u64 h64) {
  h64 = XXH_xorshift64(h64, 37);
  h64 *= 0x165667919E3779F9ULL;
  h64 = XXH_xorshift64(h64, 32);
  return h64;
}

XXH64_hash_t XXH3_mergeAccs(
  const xxh_u64* XXH_RESTRICT acc,
  const xxh_u8* XXH_RESTRICT secret, xxh_u64 start
) {
  xxh_u64 result64 = start;

  for (size_t i = 0; i < 4; i++) {
    result64 += XXH3_mix2Accs(acc + 2 * i, secret + 16 * i);
  }

  return XXH3_avalanche(result64);
}

void XXH3_digest_long(
  XXH64_hash_t* acc,
  const XXH3_state_t* state,
  const unsigned char* secret
) {
  /*
   * Digest on a local copy. This way, the state remains unaltered, and it can
   * continue ingesting more input afterwards.
   */
  memcpy2(acc, state->acc, sizeof(state->acc));
  if (state->bufferedSize >= XXH_STRIPE_LEN) {
    size_t const nbStripes = (state->bufferedSize - 1) / XXH_STRIPE_LEN;
    size_t nbStripesSoFar = state->nbStripesSoFar;
    XXH3_consumeStripes(
      acc, &nbStripesSoFar, state->nbStripesPerBlock,
      state->buffer, nbStripes, secret, state->secretLimit
    );
    /* last stripe */
    XXH3_accumulate_512_scalar(
      acc, state->buffer + state->bufferedSize - XXH_STRIPE_LEN,
      secret + state->secretLimit - XXH_SECRET_LASTACC_START
    );
  } else { /* bufferedSize < XXH_STRIPE_LEN */
    xxh_u8 lastStripe[XXH_STRIPE_LEN];
    size_t const catchupSize = XXH_STRIPE_LEN - state->bufferedSize;
    XXH_ASSERT(state->bufferedSize > 0); /* there is always some input buffered */
    memcpy2(lastStripe, state->buffer + sizeof(state->buffer) - catchupSize, catchupSize);
    memcpy2(lastStripe + catchupSize, state->buffer, state->bufferedSize);
    XXH3_accumulate_512_scalar(
      acc, lastStripe,
      secret + state->secretLimit - XXH_SECRET_LASTACC_START
    );
  }
}

XXH128_hash_t XXH3_len_1to3_128b(
  const xxh_u8* input, size_t len,
  const xxh_u8* secret, XXH64_hash_t seed
) {
  /* A doubled version of 1to3_64b with different constants. */
  XXH_ASSERT(input != NULL);
  XXH_ASSERT(1 <= len && len <= 3);
  XXH_ASSERT(secret != NULL);
  /*
   * len = 1: combinedl = { input[0], 0x01, input[0], input[0] }
   * len = 2: combinedl = { input[1], 0x02, input[0], input[1] }
   * len = 3: combinedl = { input[2], 0x03, input[0], input[1] }
   */
  {
    xxh_u8 const c1 = input[0];
    xxh_u8 const c2 = input[len >> 1];
    xxh_u8 const c3 = input[len - 1];
    xxh_u32 const combinedl = ((xxh_u32)c1 << 16) | ((xxh_u32)c2 << 24) |
                              ((xxh_u32)c3 << 0) | ((xxh_u32)len << 8);
    xxh_u32 const combinedh = XXH_rotl32(XXH_swap32(combinedl), 13);
    xxh_u64 const bitflipl =
        (XXH_readLE32(secret) ^ XXH_readLE32(secret + 4)) + seed;
    xxh_u64 const bitfliph =
        (XXH_readLE32(secret + 8) ^ XXH_readLE32(secret + 12)) - seed;
    xxh_u64 const keyed_lo = (xxh_u64)combinedl ^ bitflipl;
    xxh_u64 const keyed_hi = (xxh_u64)combinedh ^ bitfliph;
    XXH128_hash_t h128;
    h128.low64 = XXH64_avalanche(keyed_lo);
    h128.high64 = XXH64_avalanche(keyed_hi);
    return h128;
  }
}

XXH128_hash_t XXH3_len_4to8_128b(
  const xxh_u8* input, size_t len,
  const xxh_u8* secret, XXH64_hash_t seed
) {
  XXH_ASSERT(input != NULL);
  XXH_ASSERT(secret != NULL);
  XXH_ASSERT(4 <= len && len <= 8);
  seed ^= (xxh_u64)XXH_swap32((xxh_u32)seed) << 32;
  {
    xxh_u32 const input_lo = XXH_readLE32(input);
    xxh_u32 const input_hi = XXH_readLE32(input + len - 4);
    xxh_u64 const input_64 = input_lo + ((xxh_u64)input_hi << 32);
    xxh_u64 const bitflip =
        (XXH_readLE64(secret + 16) ^ XXH_readLE64(secret + 24)) + seed;
    xxh_u64 const keyed = input_64 ^ bitflip;

    /* Shift len to the left to ensure it is even, this avoids even multiplies.
     */
    XXH128_hash_t m128 = XXH_mult64to128(keyed, XXH_PRIME64_1 + (len << 2));

    m128.high64 += (m128.low64 << 1);
    m128.low64 ^= (m128.high64 >> 3);

    m128.low64 = XXH_xorshift64(m128.low64, 35);
    m128.low64 *= 0x9FB21C651E98DF25ULL;
    m128.low64 = XXH_xorshift64(m128.low64, 28);
    m128.high64 = XXH3_avalanche(m128.high64);
    return m128;
  }
}

XXH128_hash_t XXH3_len_9to16_128b(
  const xxh_u8* input, size_t len,
  const xxh_u8* secret, XXH64_hash_t seed
) {
  XXH_ASSERT(input != NULL);
  XXH_ASSERT(secret != NULL);
  XXH_ASSERT(9 <= len && len <= 16);
  {
    xxh_u64 const bitflipl =
        (XXH_readLE64(secret + 32) ^ XXH_readLE64(secret + 40)) - seed;
    xxh_u64 const bitfliph =
        (XXH_readLE64(secret + 48) ^ XXH_readLE64(secret + 56)) + seed;
    xxh_u64 const input_lo = XXH_readLE64(input);
    xxh_u64 input_hi = XXH_readLE64(input + len - 8);
    XXH128_hash_t m128 =
        XXH_mult64to128(input_lo ^ input_hi ^ bitflipl, XXH_PRIME64_1);
    /*
     * Put len in the middle of m128 to ensure that the length gets mixed to
     * both the low and high bits in the 128x64 multiply below.
     */
    m128.low64 += (xxh_u64)(len - 1) << 54;
    input_hi ^= bitfliph;
    /*
     * Add the high 32 bits of input_hi to the high 32 bits of m128, then
     * add the long product of the low 32 bits of input_hi and XXH_PRIME32_2 to
     * the high 64 bits of m128.
     *
     * The best approach to this operation is different on 32-bit and 64-bit.
     */
    if (sizeof(void*) < sizeof(xxh_u64)) { /* 32-bit */
      /*
       * 32-bit optimized version, which is more readable.
       *
       * On 32-bit, it removes an ADC and delays a dependency between the two
       * halves of m128.high64, but it generates an extra mask on 64-bit.
       */
      m128.high64 += (input_hi & 0xFFFFFFFF00000000ULL) +
                     XXH_mult32to64((xxh_u32)input_hi, XXH_PRIME32_2);
    } else {
      /*
       * 64-bit optimized (albeit more confusing) version.
       *
       * Uses some properties of addition and multiplication to remove the mask:
       *
       * Let:
       *    a = input_hi.lo = (input_hi & 0x00000000FFFFFFFF)
       *    b = input_hi.hi = (input_hi & 0xFFFFFFFF00000000)
       *    c = XXH_PRIME32_2
       *
       *    a + (b * c)
       * Inverse Property: x + y - x == y
       *    a + (b * (1 + c - 1))
       * Distributive Property: x * (y + z) == (x * y) + (x * z)
       *    a + (b * 1) + (b * (c - 1))
       * Identity Property: x * 1 == x
       *    a + b + (b * (c - 1))
       *
       * Substitute a, b, and c:
       *    input_hi.hi + input_hi.lo + ((xxh_u64)input_hi.lo * (XXH_PRIME32_2 -
       * 1))
       *
       * Since input_hi.hi + input_hi.lo == input_hi, we get this:
       *    input_hi + ((xxh_u64)input_hi.lo * (XXH_PRIME32_2 - 1))
       */
      m128.high64 +=
          input_hi + XXH_mult32to64((xxh_u32)input_hi, XXH_PRIME32_2 - 1);
    }
    /* m128 ^= XXH_swap64(m128 >> 64); */
    m128.low64 ^= XXH_swap64(m128.high64);

    { /* 128x64 multiply: h128 = m128 * XXH_PRIME64_2; */
      XXH128_hash_t h128 = XXH_mult64to128(m128.low64, XXH_PRIME64_2);
      h128.high64 += m128.high64 * XXH_PRIME64_2;

      h128.low64 = XXH3_avalanche(h128.low64);
      h128.high64 = XXH3_avalanche(h128.high64);
      return h128;
    }
  }
}

XXH128_hash_t XXH3_len_0to16_128b(
  const xxh_u8* input, size_t len,
  const xxh_u8* secret, XXH64_hash_t seed
) {
  XXH_ASSERT(len <= 16);
  {
    if (len > 8) return XXH3_len_9to16_128b(input, len, secret, seed);
    if (len >= 4) return XXH3_len_4to8_128b(input, len, secret, seed);
    if (len) return XXH3_len_1to3_128b(input, len, secret, seed);
    {
      XXH128_hash_t h128;
      xxh_u64 const bitflipl =
          XXH_readLE64(secret + 64) ^ XXH_readLE64(secret + 72);
      xxh_u64 const bitfliph =
          XXH_readLE64(secret + 80) ^ XXH_readLE64(secret + 88);
      h128.low64 = XXH64_avalanche(seed ^ bitflipl);
      h128.high64 = XXH64_avalanche(seed ^ bitfliph);
      return h128;
    }
  }
}

/*
 * A bit slower than XXH3_mix16B, but handles multiply by zero better.
 */
XXH128_hash_t XXH128_mix32B(
  XXH128_hash_t acc, const xxh_u8* input_1,
  const xxh_u8* input_2, const xxh_u8* secret,
  XXH64_hash_t seed
) {
  acc.low64 += XXH3_mix16B(input_1, secret + 0, seed);
  acc.low64 ^= XXH_readLE64(input_2) + XXH_readLE64(input_2 + 8);
  acc.high64 += XXH3_mix16B(input_2, secret + 16, seed);
  acc.high64 ^= XXH_readLE64(input_1) + XXH_readLE64(input_1 + 8);
  return acc;
}

XXH128_hash_t XXH3_len_17to128_128b(
  const xxh_u8* XXH_RESTRICT input,
  size_t len,
  const xxh_u8* XXH_RESTRICT secret,
  size_t secretSize, XXH64_hash_t seed
) {
  XXH_ASSERT(secretSize >= XXH3_SECRET_SIZE_MIN);
  (void)secretSize;
  XXH_ASSERT(16 < len && len <= 128);

  {
    XXH128_hash_t acc;
    acc.low64 = len * XXH_PRIME64_1;
    acc.high64 = 0;
    if (len > 32) {
      if (len > 64) {
        if (len > 96) {
          acc = XXH128_mix32B(acc, input + 48, input + len - 64, secret + 96,
                              seed);
        }
        acc =
            XXH128_mix32B(acc, input + 32, input + len - 48, secret + 64, seed);
      }
      acc = XXH128_mix32B(acc, input + 16, input + len - 32, secret + 32, seed);
    }
    acc = XXH128_mix32B(acc, input, input + len - 16, secret, seed);
    {
      XXH128_hash_t h128;
      h128.low64 = acc.low64 + acc.high64;
      h128.high64 = (acc.low64 * XXH_PRIME64_1) + (acc.high64 * XXH_PRIME64_4) +
                    ((len - seed) * XXH_PRIME64_2);
      h128.low64 = XXH3_avalanche(h128.low64);
      h128.high64 = (XXH64_hash_t)0 - XXH3_avalanche(h128.high64);
      return h128;
    }
  }
}

XXH128_hash_t XXH3_len_129to240_128b(
  const xxh_u8* XXH_RESTRICT input,
  size_t len,
  const xxh_u8* XXH_RESTRICT secret,
  size_t secretSize, XXH64_hash_t seed
) {
  XXH_ASSERT(secretSize >= XXH3_SECRET_SIZE_MIN);
  (void)secretSize;
  XXH_ASSERT(128 < len && len <= XXH3_MIDSIZE_MAX);

  {
    XXH128_hash_t acc;
    int const nbRounds = (int)len / 32;
    int i;
    acc.low64 = len * XXH_PRIME64_1;
    acc.high64 = 0;
    for (i = 0; i < 4; i++) {
      acc = XXH128_mix32B(acc, input + (32 * i), input + (32 * i) + 16,
                          secret + (32 * i), seed);
    }
    acc.low64 = XXH3_avalanche(acc.low64);
    acc.high64 = XXH3_avalanche(acc.high64);
    XXH_ASSERT(nbRounds >= 4);
    for (i = 4; i < nbRounds; i++) {
      acc = XXH128_mix32B(acc, input + (32 * i), input + (32 * i) + 16,
                          secret + XXH3_MIDSIZE_STARTOFFSET + (32 * (i - 4)),
                          seed);
    }
    /* last bytes */
    acc = XXH128_mix32B(
        acc, input + len - 16, input + len - 32,
        secret + XXH3_SECRET_SIZE_MIN - XXH3_MIDSIZE_LASTOFFSET - 16,
        0ULL - seed);

    {
      XXH128_hash_t h128;
      h128.low64 = acc.low64 + acc.high64;
      h128.high64 = (acc.low64 * XXH_PRIME64_1) + (acc.high64 * XXH_PRIME64_4) +
                    ((len - seed) * XXH_PRIME64_2);
      h128.low64 = XXH3_avalanche(h128.low64);
      h128.high64 = (XXH64_hash_t)0 - XXH3_avalanche(h128.high64);
      return h128;
    }
  }
}

void XXH3_hashLong_internal_loop(
  xxh_u64* XXH_RESTRICT acc,
  const xxh_u8* XXH_RESTRICT input, size_t len,
  const xxh_u8* XXH_RESTRICT secret,
  size_t secretSize
) {
  size_t const nbStripesPerBlock =
      (secretSize - XXH_STRIPE_LEN) / XXH_SECRET_CONSUME_RATE;
  size_t const block_len = XXH_STRIPE_LEN * nbStripesPerBlock;
  size_t const nb_blocks = (len - 1) / block_len;

  size_t n;

  XXH_ASSERT(secretSize >= XXH3_SECRET_SIZE_MIN);

  for (n = 0; n < nb_blocks; n++) {
    XXH3_accumulate(acc, input + n * block_len, secret, nbStripesPerBlock);
    XXH3_scrambleAcc_scalar(acc, secret + secretSize - XXH_STRIPE_LEN);
  }

  /* last partial block */
  XXH_ASSERT(len > XXH_STRIPE_LEN);
  {
    size_t const nbStripes =
        ((len - 1) - (block_len * nb_blocks)) / XXH_STRIPE_LEN;
    XXH_ASSERT(nbStripes <= (secretSize / XXH_SECRET_CONSUME_RATE));
    XXH3_accumulate(acc, input + nb_blocks * block_len, secret, nbStripes);

    /* last stripe */
    {
      const xxh_u8* const p = input + len - XXH_STRIPE_LEN;
#define XXH_SECRET_LASTACC_START \
  7 /* not aligned on 8, last secret is different from acc & scrambler */
      XXH3_accumulate_512_scalar(
          acc, p,
          secret + secretSize - XXH_STRIPE_LEN - XXH_SECRET_LASTACC_START);
    }
  }
}

XXH128_hash_t XXH3_hashLong_128b_internal(
  const void* XXH_RESTRICT input,
  size_t len,
  const xxh_u8* XXH_RESTRICT secret,
  size_t secretSize
) {
  XXH_ALIGN(XXH_ACC_ALIGN) xxh_u64 acc[XXH_ACC_NB] = XXH3_INIT_ACC;

  XXH3_hashLong_internal_loop(acc, (const xxh_u8*)input, len, secret,
                              secretSize);

  /* converge into final hash */
  XXH_STATIC_ASSERT(sizeof(acc) == 64);
  XXH_ASSERT(secretSize >= sizeof(acc) + XXH_SECRET_MERGEACCS_START);
  {
    XXH128_hash_t h128;
    h128.low64 = XXH3_mergeAccs(
      acc, secret + XXH_SECRET_MERGEACCS_START,
      (xxh_u64)len * XXH_PRIME64_1
    );
    h128.high64 = XXH3_mergeAccs(
      acc, secret + secretSize - sizeof(acc) - XXH_SECRET_MERGEACCS_START,
      ~((xxh_u64)len * XXH_PRIME64_2)
    );
    return h128;
  }
}

XXH128_hash_t XXH3_hashLong_128b_withSeed_internal(
  const void* XXH_RESTRICT input, size_t len, XXH64_hash_t seed64
) {
  if (seed64 == 0)
    return XXH3_hashLong_128b_internal(
      input, len, XXH3_kSecret, sizeof(XXH3_kSecret)
    );
  {
    XXH_ALIGN(XXH_SEC_ALIGN) xxh_u8 secret[XXH_SECRET_DEFAULT_SIZE];
    XXH3_initCustomSecret_scalar(secret, seed64);
    return XXH3_hashLong_128b_internal(
      input, len, (const xxh_u8*)secret, sizeof(secret)
    );
  }
}

/*
 * It's important for performance that XXH3_hashLong is not inlined.
 */

XXH128_hash_t XXH3_hashLong_128b_withSeed(
  const void* input, size_t len,
  XXH64_hash_t seed64,
  const void* XXH_RESTRICT secret,
  size_t secretLen
) {
  return XXH3_hashLong_128b_withSeed_internal(input, len, seed64);
}

XXH128_hash_t XXH3_128bits_internal(
  const void* input, size_t len,
  XXH64_hash_t seed64,
  const void* XXH_RESTRICT secret,
  size_t secretLen,
  XXH3_hashLong128_f f_hl128
) {
  XXH_ASSERT(secretLen >= XXH3_SECRET_SIZE_MIN);
  /*
   * If an action is to be taken if `secret` conditions are not respected,
   * it should be done here.
   * For now, it's a contract pre-condition.
   * Adding a check and a branch here would cost performance at every hash.
   */
  if (len <= 16)
    return XXH3_len_0to16_128b(
      (const xxh_u8*)input, len, (const xxh_u8*)secret, seed64
    );
  if (len <= 128)
    return XXH3_len_17to128_128b(
      (const xxh_u8*)input, len, (const xxh_u8*)secret, secretLen, seed64
    );
  if (len <= XXH3_MIDSIZE_MAX)
    return XXH3_len_129to240_128b(
      (const xxh_u8*)input, len, (const xxh_u8*)secret, secretLen, seed64
    );
  return f_hl128(input, len, seed64, secret, secretLen);
}

XXH128_hash_t XXH3_128bits_withSeed(
  const void* input, size_t len, XXH64_hash_t seed
) {
  return XXH3_128bits_internal(
    input, len, seed, XXH3_kSecret, sizeof(XXH3_kSecret), XXH3_hashLong_128b_withSeed
  );
}

XXH128_hash_t XXH3_hashLong_128b_withSecret(
  const void* XXH_RESTRICT input,
  size_t len, XXH64_hash_t seed64,
  const void* XXH_RESTRICT secret,
  size_t secretLen
) {
  return XXH3_hashLong_128b_internal(
    input, len, (const xxh_u8*)secret, secretLen
  );
}

XXH128_hash_t XXH3_128bits_withSecret(
  const void* input, size_t len, const void* secret, size_t secretSize
) {
  return XXH3_128bits_internal(
    input, len, 0, (const xxh_u8*)secret, secretSize, XXH3_hashLong_128b_withSecret
  );
}

XXH128_hash_t XXH3_128bits_digest(const XXH3_state_t* state) {
  const unsigned char* const secret =
      (state->extSecret == NULL) ? state->customSecret : state->extSecret;
  if (state->totalLen > XXH3_MIDSIZE_MAX) {
    XXH_ALIGN(XXH_ACC_ALIGN) XXH64_hash_t acc[XXH_ACC_NB];
    XXH3_digest_long(acc, state, secret);
    XXH_ASSERT(state->secretLimit + XXH_STRIPE_LEN >= sizeof(acc) + XXH_SECRET_MERGEACCS_START);
    {
      XXH128_hash_t h128;
      h128.low64 = XXH3_mergeAccs(
        acc, secret + XXH_SECRET_MERGEACCS_START, (xxh_u64)state->totalLen * XXH_PRIME64_1
      );
      h128.high64 =
        XXH3_mergeAccs(
          acc,
          secret + state->secretLimit + XXH_STRIPE_LEN - sizeof(acc) - XXH_SECRET_MERGEACCS_START,
          ~((xxh_u64)state->totalLen * XXH_PRIME64_2)
        );
      return h128;
    }
  }
  /* len <= XXH3_MIDSIZE_MAX : short code */
  if (state->seed)
    return XXH3_128bits_withSeed(
      state->buffer, (size_t)state->totalLen, state->seed
    );
  return XXH3_128bits_withSecret(
    state->buffer, (size_t)(state->totalLen), secret, state->secretLimit + XXH_STRIPE_LEN
  );
}

static struct XXH3_state_s sctx;
XXH3_state_t* state = &sctx;

WASM_EXPORT
void Hash_Init() {
  // seed is at the memory object
  uint64_t seed = *((uint64_t*)main_buffer);
  XXH3_128bits_reset_withSeed(state, seed);
}

WASM_EXPORT
void Hash_Update(uint32_t length) {
  const void* input = main_buffer;
  XXH3_128bits_update(state, input, length);
}

WASM_EXPORT
void Hash_Final() {
  XXH128_hash_t result = XXH3_128bits_digest(state);
  result.high64 = XXH_swap64(result.high64);
  memcpy64(main_buffer, &result.high64);
  result.low64 = XXH_swap64(result.low64);
  memcpy64(main_buffer + 8, &result.low64);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(sctx);

WASM_EXPORT
uint8_t* Hash_GetState() { return (uint8_t*)&sctx; }

WASM_EXPORT
void Hash_Calculate() { return; }
