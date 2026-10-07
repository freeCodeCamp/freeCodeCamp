/*
  BLAKE3 - reference C implementation
  https://github.com/BLAKE3-team/BLAKE3
  This work is released into the public domain with CC0 1.0. Alternatively, it
  is licensed under the Apache License 2.0.

  Modified for hash-wasm by Dani Biró
*/

#define WITH_BUFFER
#include <stddef.h>
#include <stdint.h>

#include "hash-wasm.h"

#define BLAKE3_VERSION_STRING "0.3.7"
#define BLAKE3_KEY_LEN 32
#define BLAKE3_OUT_LEN 32
#define BLAKE3_BLOCK_LEN 64
#define BLAKE3_CHUNK_LEN 1024
#define BLAKE3_MAX_DEPTH 54
#define MAX_SIMD_DEGREE 1
#define MAX_SIMD_DEGREE_OR_2 (MAX_SIMD_DEGREE > 2 ? MAX_SIMD_DEGREE : 2)
#define bool uint8_t
#define true 1
#define false 0

enum blake3_flags {
  CHUNK_START = 1 << 0,
  CHUNK_END = 1 << 1,
  PARENT = 1 << 2,
  ROOT = 1 << 3,
  KEYED_HASH = 1 << 4,
  DERIVE_KEY_CONTEXT = 1 << 5,
  DERIVE_KEY_MATERIAL = 1 << 6,
};

static const uint32_t IV[8] =
  {
    0x6A09E667UL, 0xBB67AE85UL, 0x3C6EF372UL,
    0xA54FF53AUL, 0x510E527FUL, 0x9B05688CUL,
    0x1F83D9ABUL, 0x5BE0CD19UL
  };

static const uint8_t MSG_SCHEDULE[7][16] = {
  {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15},
  {2, 6, 3, 10, 7, 0, 4, 13, 1, 11, 12, 5, 9, 14, 15, 8},
  {3, 4, 10, 12, 13, 2, 7, 14, 6, 5, 9, 0, 11, 15, 8, 1},
  {10, 7, 12, 9, 14, 3, 13, 15, 4, 0, 11, 2, 5, 8, 1, 6},
  {12, 13, 9, 11, 15, 10, 14, 8, 7, 2, 5, 3, 0, 1, 6, 4},
  {9, 14, 11, 5, 8, 12, 15, 1, 13, 3, 0, 10, 2, 6, 4, 7},
  {11, 15, 5, 0, 1, 9, 8, 6, 14, 10, 2, 12, 3, 4, 7, 13},
};

size_t blake3_simd_degree(void) { return 1; }

// This struct is a private implementation detail. It has to be here because
// it's part of blake3_hasher below.
typedef struct {
  uint32_t cv[8];
  uint64_t chunk_counter;
  uint8_t buf[BLAKE3_BLOCK_LEN];
  uint8_t buf_len;
  uint8_t blocks_compressed;
  uint8_t flags;
} blake3_chunk_state;

typedef struct {
  uint32_t key[8];
  blake3_chunk_state chunk;
  uint8_t cv_stack_len;
  // The stack size is MAX_DEPTH + 1 because we do lazy merging. For example,
  // with 7 chunks, we have 3 entries in the stack. Adding an 8th chunk
  // requires a 4th entry, rather than merging everything down to 1, because we
  // don't know whether more input is coming. This is different from how the
  // reference implementation does things.
  uint8_t cv_stack[(BLAKE3_MAX_DEPTH + 1) * BLAKE3_OUT_LEN];
} blake3_hasher;

/* Find index of the highest set bit */
/* x is assumed to be nonzero.       */
static unsigned int highest_one(uint64_t x) {
  return 63 ^ __builtin_clzll(x);
}

// Count the number of 1 bits.
static __inline__ unsigned int popcnt(uint64_t x) {
  return __builtin_popcountll(x);
}

static __inline__ uint64_t round_down_to_power_of_2(uint64_t x) {
  return 1ULL << highest_one(x | 1);
}

static __inline__ uint32_t counter_low(uint64_t counter) {
  return (uint32_t)counter;
}

static __inline__ uint32_t counter_high(uint64_t counter) {
  return (uint32_t)(counter >> 32);
}

static __inline__ uint32_t load32(const void *src) {
  const uint32_t *p = (const uint32_t *)src;
  return p[0];
}

static __inline__ uint32_t rotr32(uint32_t w, uint32_t c) {
  return (w >> c) | (w << (32 - c));
}

static __inline__ void g(
  uint32_t *state, size_t a, size_t b, size_t c, size_t d, uint32_t x, uint32_t y
) {
  state[a] = state[a] + state[b] + x;
  state[d] = rotr32(state[d] ^ state[a], 16);
  state[c] = state[c] + state[d];
  state[b] = rotr32(state[b] ^ state[c], 12);
  state[a] = state[a] + state[b] + y;
  state[d] = rotr32(state[d] ^ state[a], 8);
  state[c] = state[c] + state[d];
  state[b] = rotr32(state[b] ^ state[c], 7);
}

static __inline__ void round_fn(
  uint32_t state[16], const uint32_t *msg, size_t round
) {
  // Select the message schedule based on the round.
  const uint8_t *schedule = MSG_SCHEDULE[round];

  // Mix the columns.
  g(state, 0, 4, 8, 12, msg[schedule[0]], msg[schedule[1]]);
  g(state, 1, 5, 9, 13, msg[schedule[2]], msg[schedule[3]]);
  g(state, 2, 6, 10, 14, msg[schedule[4]], msg[schedule[5]]);
  g(state, 3, 7, 11, 15, msg[schedule[6]], msg[schedule[7]]);

  // Mix the rows.
  g(state, 0, 5, 10, 15, msg[schedule[8]], msg[schedule[9]]);
  g(state, 1, 6, 11, 12, msg[schedule[10]], msg[schedule[11]]);
  g(state, 2, 7, 8, 13, msg[schedule[12]], msg[schedule[13]]);
  g(state, 3, 4, 9, 14, msg[schedule[14]], msg[schedule[15]]);
}

static __inline__ void load_key_words(
  const uint8_t key[BLAKE3_KEY_LEN], uint32_t key_words[8]
) {
  memcpy32(key_words, key);
}

static __inline__ void compress_pre(
  uint32_t state[16], const uint32_t cv[8], const uint8_t block[BLAKE3_BLOCK_LEN],
  uint8_t block_len, uint64_t counter, uint8_t flags
) {
  uint32_t block_words[16];

  memcpy64(block_words, block);
  memcpy32(state, cv);
  memcpy16(&state[8], IV);

  state[12] = counter_low(counter);
  state[13] = counter_high(counter);
  state[14] = (uint32_t)block_len;
  state[15] = (uint32_t)flags;

  #pragma clang loop unroll(full)
  for (int i = 0; i < 7; i++) {
    // Select the message schedule based on the round.
    round_fn(state, &block_words[0], i);
  }
}

static __inline__ void store32(void *dst, uint32_t w) {
  uint32_t *p = (uint32_t *)dst;
  p[0] = w;
}

static __inline__ void store_cv_words(uint8_t bytes_out[32], uint32_t cv_words[8]) {
  memcpy32(bytes_out, cv_words);
}

void blake3_compress_xof_portable(
  const uint32_t cv[8], const uint8_t block[BLAKE3_BLOCK_LEN], uint8_t block_len,
  uint64_t counter, uint8_t flags, uint8_t out[64]
) {
  uint32_t state[16];
  compress_pre(state, cv, block, block_len, counter, flags);

  uint64_t *state64 = (uint64_t *)state;
  uint64_t *out64 = (uint64_t *)out;
  uint64_t *cv64 = (uint64_t *)cv;

  out64[0] = state64[0] ^ state64[4];
  out64[1] = state64[1] ^ state64[5];
  out64[2] = state64[2] ^ state64[6];
  out64[3] = state64[3] ^ state64[7];
  out64[4] = state64[4] ^ cv64[0];
  out64[5] = state64[5] ^ cv64[1];
  out64[6] = state64[6] ^ cv64[2];
  out64[7] = state64[7] ^ cv64[3];
}

void blake3_compress_in_place_portable(
  uint32_t cv[8], const uint8_t block[BLAKE3_BLOCK_LEN], uint8_t block_len,
  uint64_t counter, uint8_t flags
) {
  uint32_t state[16];
  compress_pre(state, cv, block, block_len, counter, flags);

  uint64_t *state64 = (uint64_t *)state;
  uint64_t *cv64 = (uint64_t *)cv;
  cv64[0] = state64[0] ^ state64[4];
  cv64[1] = state64[1] ^ state64[5];
  cv64[2] = state64[2] ^ state64[6];
  cv64[3] = state64[3] ^ state64[7];
}

static __inline__ void chunk_state_init(blake3_chunk_state *self, const uint32_t key[8], uint8_t flags) {
  memcpy32(self->cv, key);
  self->chunk_counter = 0;
  memset64(self->buf, 0);
  self->buf_len = 0;
  self->blocks_compressed = 0;
  self->flags = flags;
}

static __inline__ void chunk_state_reset(
  blake3_chunk_state *self, const uint32_t key[8], uint64_t chunk_counter
) {
  memcpy32(self->cv, key);
  self->chunk_counter = chunk_counter;
  self->blocks_compressed = 0;
  memset64(self->buf, 0);
  self->buf_len = 0;
}

static __inline__ size_t chunk_state_len(const blake3_chunk_state *self) {
  return (BLAKE3_BLOCK_LEN * (size_t)self->blocks_compressed) + ((size_t)self->buf_len);
}

static __inline__ size_t chunk_state_fill_buf(
  blake3_chunk_state *self, const uint8_t *input, size_t input_len
) {
  size_t take = BLAKE3_BLOCK_LEN - ((size_t)self->buf_len);
  if (take > input_len) {
    take = input_len;
  }
  uint8_t *dest = self->buf + ((size_t)self->buf_len);
  for (size_t i = 0; i < take; i++) {
    dest[i] = input[i];
  }
  self->buf_len += (uint8_t)take;
  return take;
}

static __inline__ uint8_t chunk_state_maybe_start_flag(const blake3_chunk_state *self) {
  if (self->blocks_compressed == 0) {
    return CHUNK_START;
  } else {
    return 0;
  }
}

typedef struct {
  uint32_t input_cv[8];
  uint64_t counter;
  uint8_t block[BLAKE3_BLOCK_LEN];
  uint8_t block_len;
  uint8_t flags;
} output_t;

static __inline__ output_t make_output(
  const uint32_t input_cv[8], const uint8_t block[BLAKE3_BLOCK_LEN],
  uint8_t block_len, uint64_t counter, uint8_t flags
) {
  output_t ret;
  memcpy32(ret.input_cv, input_cv);
  memcpy64(ret.block, block);

  ret.block_len = block_len;
  ret.counter = counter;
  ret.flags = flags;
  return ret;
}

// Chaining values within a given chunk (specifically the compress_in_place
// interface) are represented as words. This avoids unnecessary bytes<->words
// conversion overhead in the portable implementation. However, the hash_many
// interface handles both user input and parent node blocks, so it accepts
// bytes. For that reason, chaining values in the CV stack are represented as
// bytes.
static __inline__ void output_chaining_value(const output_t *self, uint8_t cv[32]) {
  uint32_t cv_words[8];
  memcpy32(cv_words, self->input_cv);
  blake3_compress_in_place_portable(
    cv_words, self->block, self->block_len, self->counter, self->flags
  );
  store_cv_words(cv, cv_words);
}

static __inline__ void output_root_bytes(
  const output_t *self, uint64_t seek, uint8_t *out, size_t out_len
) {
  uint64_t output_block_counter = seek / 64;
  size_t offset_within_block = seek % 64;
  uint8_t wide_buf[64];
  while (out_len > 0) {
    blake3_compress_xof_portable(
      self->input_cv, self->block, self->block_len, output_block_counter, self->flags | ROOT, wide_buf
    );
    size_t available_bytes = 64 - offset_within_block;
    size_t memcpy_len;
    if (out_len > available_bytes) {
      memcpy_len = available_bytes;
    } else {
      memcpy_len = out_len;
    }
    memcpy(out, wide_buf + offset_within_block, memcpy_len);
    out += memcpy_len;
    out_len -= memcpy_len;
    output_block_counter += 1;
    offset_within_block = 0;
  }
}

static __inline__ void chunk_state_update(
  blake3_chunk_state *self, const uint8_t *input, size_t input_len
) {
  if (self->buf_len > 0) {
    size_t take = chunk_state_fill_buf(self, input, input_len);
    input += take;
    input_len -= take;
    if (input_len > 0) {
      blake3_compress_in_place_portable(
        self->cv, self->buf, BLAKE3_BLOCK_LEN, self->chunk_counter,
        self->flags | chunk_state_maybe_start_flag(self)
      );
      self->blocks_compressed += 1;
      self->buf_len = 0;
      memset64(self->buf, 0);
    }
  }

  while (input_len > BLAKE3_BLOCK_LEN) {
    blake3_compress_in_place_portable(
      self->cv, input, BLAKE3_BLOCK_LEN, self->chunk_counter,
      self->flags | chunk_state_maybe_start_flag(self)
    );
    self->blocks_compressed += 1;
    input += BLAKE3_BLOCK_LEN;
    input_len -= BLAKE3_BLOCK_LEN;
  }

  size_t take = chunk_state_fill_buf(self, input, input_len);
  input += take;
  input_len -= take;
}

static __inline__ output_t chunk_state_output(const blake3_chunk_state *self) {
  uint8_t block_flags =
    self->flags | chunk_state_maybe_start_flag(self) | CHUNK_END;

  return make_output(self->cv, self->buf, self->buf_len, self->chunk_counter, block_flags);
}

static __inline__ output_t parent_output(
  const uint8_t block[BLAKE3_BLOCK_LEN], const uint32_t key[8], uint8_t flags
) {
  return make_output(key, block, BLAKE3_BLOCK_LEN, 0, flags | PARENT);
}

// Given some input larger than one chunk, return the number of bytes that
// should go in the left subtree. This is the largest power-of-2 number of
// chunks that leaves at least 1 byte for the right subtree.
static __inline__ size_t left_len(size_t content_len) {
  // Subtract 1 to reserve at least one byte for the right side. content_len
  // should always be greater than BLAKE3_CHUNK_LEN.
  size_t full_chunks = (content_len - 1) / BLAKE3_CHUNK_LEN;
  return round_down_to_power_of_2(full_chunks) * BLAKE3_CHUNK_LEN;
}

static __inline__ void hash_one_portable(
  const uint8_t *input, size_t blocks, const uint32_t key[8], uint64_t counter,
  uint8_t flags, uint8_t flags_start, uint8_t flags_end, uint8_t out[BLAKE3_OUT_LEN]
) {
  uint32_t cv[8];
  memcpy32(cv, key);
  uint8_t block_flags = flags | flags_start;
  while (blocks > 0) {
    if (blocks == 1) {
      block_flags |= flags_end;
    }
    blake3_compress_in_place_portable(cv, input, BLAKE3_BLOCK_LEN, counter, block_flags);
    input = &input[BLAKE3_BLOCK_LEN];
    blocks -= 1;
    block_flags = flags;
  }
  store_cv_words(out, cv);
}

void blake3_hash_many_portable(
  const uint8_t *const *inputs, size_t num_inputs, size_t blocks, const uint32_t key[8],
  uint64_t counter, bool increment_counter, uint8_t flags, uint8_t flags_start,
  uint8_t flags_end, uint8_t *out
) {
  while (num_inputs > 0) {
    hash_one_portable(inputs[0], blocks, key, counter, flags, flags_start, flags_end, out);
    if (increment_counter) {
      counter += 1;
    }
    inputs += 1;
    num_inputs -= 1;
    out = &out[BLAKE3_OUT_LEN];
  }
}

// Use SIMD parallelism to hash up to MAX_SIMD_DEGREE chunks at the same time
// on a single thread. Write out the chunk chaining values and return the
// number of chunks hashed. These chunks are never the root and never empty;
// those cases use a different codepath.
static __inline__ size_t compress_chunks_parallel(
  const uint8_t *input, size_t input_len, const uint32_t key[8],
  uint64_t chunk_counter, uint8_t flags, uint8_t *out
) {
  const uint8_t *chunks_array[MAX_SIMD_DEGREE];
  size_t input_position = 0;
  size_t chunks_array_len = 0;
  while (input_len - input_position >= BLAKE3_CHUNK_LEN) {
    chunks_array[chunks_array_len] = &input[input_position];
    input_position += BLAKE3_CHUNK_LEN;
    chunks_array_len += 1;
  }

  blake3_hash_many_portable(
    chunks_array, chunks_array_len, BLAKE3_CHUNK_LEN / BLAKE3_BLOCK_LEN, key,
    chunk_counter, true, flags, CHUNK_START, CHUNK_END, out
  );

  // Hash the remaining partial chunk, if there is one. Note that the empty
  // chunk (meaning the empty message) is a different codepath.
  if (input_len > input_position) {
    uint64_t counter = chunk_counter + (uint64_t)chunks_array_len;
    blake3_chunk_state chunk_state;
    chunk_state_init(&chunk_state, key, flags);
    chunk_state.chunk_counter = counter;
    chunk_state_update(
      &chunk_state, &input[input_position], input_len - input_position
    );
    output_t output = chunk_state_output(&chunk_state);
    output_chaining_value(&output, &out[chunks_array_len * BLAKE3_OUT_LEN]);
    return chunks_array_len + 1;
  } else {
    return chunks_array_len;
  }
}

// Use SIMD parallelism to hash up to MAX_SIMD_DEGREE parents at the same time
// on a single thread. Write out the parent chaining values and return the
// number of parents hashed. (If there's an odd input chaining value left over,
// return it as an additional output.) These parents are never the root and
// never empty; those cases use a different codepath.
static __inline__ size_t compress_parents_parallel(
  const uint8_t *child_chaining_values, size_t num_chaining_values,
  const uint32_t key[8], uint8_t flags, uint8_t *out
) {
  const uint8_t *parents_array[MAX_SIMD_DEGREE_OR_2];
  size_t parents_array_len = 0;

  while (num_chaining_values - (2 * parents_array_len) >= 2) {
    parents_array[parents_array_len] =
      &child_chaining_values[2 * parents_array_len * BLAKE3_OUT_LEN];
    parents_array_len += 1;
  }

  blake3_hash_many_portable(parents_array, parents_array_len, 1, key,
                            0,  // Parents always use counter 0.
                            false, flags | PARENT,
                            0,  // Parents have no start flags.
                            0,  // Parents have no end flags.
                            out);

  // If there's an odd child left over, it becomes an output.
  if (num_chaining_values > 2 * parents_array_len) {
    memcpy32(
      &out[parents_array_len * BLAKE3_OUT_LEN],
      &child_chaining_values[2 * parents_array_len * BLAKE3_OUT_LEN]
    );
    return parents_array_len + 1;
  } else {
    return parents_array_len;
  }
}

// The wide helper function returns (writes out) an array of chaining values
// and returns the length of that array. The number of chaining values returned
// is the dyanmically detected SIMD degree, at most MAX_SIMD_DEGREE. Or fewer,
// if the input is shorter than that many chunks. The reason for maintaining a
// wide array of chaining values going back up the tree, is to allow the
// implementation to hash as many parents in parallel as possible.
//
// As a special case when the SIMD degree is 1, this function will still return
// at least 2 outputs. This guarantees that this function doesn't perform the
// root compression. (If it did, it would use the wrong flags, and also we
// wouldn't be able to implement exendable ouput.) Note that this function is
// not used when the whole input is only 1 chunk long; that's a different
// codepath.
//
// Why not just have the caller split the input on the first update(), instead
// of implementing this special rule? Because we don't want to limit SIMD or
// multi-threading parallelism for that update().
static size_t blake3_compress_subtree_wide(
  const uint8_t *input, size_t input_len, const uint32_t key[8],
  uint64_t chunk_counter, uint8_t flags, uint8_t *out
) {
  // Note that the single chunk case does *not* bump the SIMD degree up to 2
  // when it is 1. If this implementation adds multi-threading in the future,
  // this gives us the option of multi-threading even the 2-chunk case, which
  // can help performance on smaller platforms.
  if (input_len <= blake3_simd_degree() * BLAKE3_CHUNK_LEN) {
    return compress_chunks_parallel(input, input_len, key, chunk_counter, flags, out);
  }

  // With more than simd_degree chunks, we need to recurse. Start by dividing
  // the input into left and right subtrees. (Note that this is only optimal
  // as long as the SIMD degree is a power of 2. If we ever get a SIMD degree
  // of 3 or something, we'll need a more complicated strategy.)
  size_t left_input_len = left_len(input_len);
  size_t right_input_len = input_len - left_input_len;
  const uint8_t *right_input = &input[left_input_len];

  uint64_t right_chunk_counter =
    chunk_counter + (uint64_t)(left_input_len / BLAKE3_CHUNK_LEN);

  // Make space for the child outputs. Here we use MAX_SIMD_DEGREE_OR_2 to
  // account for the special case of returning 2 outputs when the SIMD degree
  // is 1.
  uint8_t cv_array[2 * MAX_SIMD_DEGREE_OR_2 * BLAKE3_OUT_LEN];
  size_t degree = blake3_simd_degree();
  if (left_input_len > BLAKE3_CHUNK_LEN && degree == 1) {
    // The special case: We always use a degree of at least two, to make
    // sure there are two outputs. Except, as noted above, at the chunk
    // level, where we allow degree=1. (Note that the 1-chunk-input case is
    // a different codepath.)
    degree = 2;
  }

  uint8_t *right_cvs = &cv_array[degree * BLAKE3_OUT_LEN];

  // Recurse! If this implementation adds multi-threading support in the
  // future, this is where it will go.
  size_t left_n = blake3_compress_subtree_wide(input, left_input_len, key, chunk_counter, flags, cv_array);
  size_t right_n = blake3_compress_subtree_wide(right_input, right_input_len, key, right_chunk_counter, flags, right_cvs);

  // The special case again. If simd_degree=1, then we'll have left_n=1 and
  // right_n=1. Rather than compressing them into a single output, return
  // them directly, to make sure we always have at least two outputs.
  if (left_n == 1) {
    memcpy64(out, cv_array);
    return 2;
  }

  // Otherwise, do one layer of parent node compression.
  size_t num_chaining_values = left_n + right_n;
  return compress_parents_parallel(cv_array, num_chaining_values, key, flags, out);
}

// Hash a subtree with compress_subtree_wide(), and then condense the resulting
// list of chaining values down to a single parent node. Don't compress that
// last parent node, however. Instead, return its message bytes (the
// concatenated chaining values of its children). This is necessary when the
// first call to update() supplies a complete subtree, because the topmost
// parent node of that subtree could end up being the root. It's also necessary
// for extended output in the general case.
//
// As with compress_subtree_wide(), this function is not used on inputs of 1
// chunk or less. That's a different codepath.
static __inline__ void compress_subtree_to_parent_node(
  const uint8_t *input, size_t input_len, const uint32_t key[8],
  uint64_t chunk_counter, uint8_t flags, uint8_t out[2 * BLAKE3_OUT_LEN]
) {
  uint8_t cv_array[MAX_SIMD_DEGREE_OR_2 * BLAKE3_OUT_LEN];
  size_t num_cvs = blake3_compress_subtree_wide(input, input_len, key, chunk_counter, flags, cv_array);

  // If MAX_SIMD_DEGREE is greater than 2 and there's enough input,
  // compress_subtree_wide() returns more than 2 chaining values. Condense
  // them into 2 by forming parent nodes repeatedly.
  uint8_t out_array[MAX_SIMD_DEGREE_OR_2 * BLAKE3_OUT_LEN / 2];
  while (num_cvs > 2) {
    num_cvs =
      compress_parents_parallel(cv_array, num_cvs, key, flags, out_array);
    if (num_cvs > 0) {
      memcpy32(cv_array, out_array);
    }
  }
  memcpy64(out, cv_array);
}

static __inline__ void hasher_init_base(blake3_hasher *self, const uint32_t key[8], uint8_t flags) {
  memcpy32(self->key, key);
  chunk_state_init(&self->chunk, key, flags);
  self->cv_stack_len = 0;
}

void blake3_hasher_init(blake3_hasher *self) {
  hasher_init_base(self, IV, 0);
}

void blake3_hasher_init_keyed(blake3_hasher *self, const uint8_t key[BLAKE3_KEY_LEN]) {
  uint32_t key_words[8];
  load_key_words(key, key_words);
  hasher_init_base(self, key_words, KEYED_HASH);
}

// As described in hasher_push_cv() below, we do "lazy merging", delaying
// merges until right before the next CV is about to be added. This is
// different from the reference implementation. Another difference is that we
// aren't always merging 1 chunk at a time. Instead, each CV might represent
// any power-of-two number of chunks, as long as the smaller-above-larger stack
// order is maintained. Instead of the "count the trailing 0-bits" algorithm
// described in the spec, we use a "count the total number of 1-bits" variant
// that doesn't require us to retain the subtree size of the CV on top of the
// stack. The principle is the same: each CV that should remain in the stack is
// represented by a 1-bit in the total number of chunks (or bytes) so far.
static __inline__ void hasher_merge_cv_stack(blake3_hasher *self, uint64_t total_len) {
  size_t post_merge_stack_len = (size_t)popcnt(total_len);
  while (self->cv_stack_len > post_merge_stack_len) {
    uint8_t *parent_node =
      &self->cv_stack[(self->cv_stack_len - 2) * BLAKE3_OUT_LEN];
    output_t output = parent_output(parent_node, self->key, self->chunk.flags);
    output_chaining_value(&output, parent_node);
    self->cv_stack_len -= 1;
  }
}

// In reference_impl.rs, we merge the new CV with existing CVs from the stack
// before pushing it. We can do that because we know more input is coming, so
// we know none of the merges are root.
//
// This setting is different. We want to feed as much input as possible to
// compress_subtree_wide(), without setting aside anything for the chunk_state.
// If the user gives us 64 KiB, we want to parallelize over all 64 KiB at once
// as a single subtree, if at all possible.
//
// This leads to two problems:
// 1) This 64 KiB input might be the only call that ever gets made to update.
//    In this case, the root node of the 64 KiB subtree would be the root node
//    of the whole tree, and it would need to be ROOT finalized. We can't
//    compress it until we know.
// 2) This 64 KiB input might complete a larger tree, whose root node is
//    similarly going to be the the root of the whole tree. For example, maybe
//    we have 196 KiB (that is, 128 + 64) hashed so far. We can't compress the
//    node at the root of the 256 KiB subtree until we know how to finalize it.
//
// The second problem is solved with "lazy merging". That is, when we're about
// to add a CV to the stack, we don't merge it with anything first, as the
// reference impl does. Instead we do merges using the *previous* CV that was
// added, which is sitting on top of the stack, and we put the new CV
// (unmerged) on top of the stack afterwards. This guarantees that we never
// merge the root node until finalize().
//
// Solving the first problem requires an additional tool,
// compress_subtree_to_parent_node(). That function always returns the top
// *two* chaining values of the subtree it's compressing. We then do lazy
// merging with each of them separately, so that the second CV will always
// remain unmerged. (That also helps us support extendable output when we're
// hashing an input all-at-once.)
static __inline__ void hasher_push_cv(
  blake3_hasher *self, uint8_t new_cv[BLAKE3_OUT_LEN], uint64_t chunk_counter
) {
  hasher_merge_cv_stack(self, chunk_counter);
  memcpy32(&self->cv_stack[self->cv_stack_len * BLAKE3_OUT_LEN], new_cv);
  self->cv_stack_len += 1;
}

void blake3_hasher_update(blake3_hasher *self, const void *input, size_t input_len) {
  // Explicitly checking for zero avoids causing UB by passing a null pointer
  // to memcpy. This comes up in practice with things like:
  //   std::vector<uint8_t> v;
  //   blake3_hasher_update(&hasher, v.data(), v.size());
  if (input_len == 0) {
    return;
  }

  const uint8_t *input_bytes = (const uint8_t *)input;

  // If we have some partial chunk bytes in the internal chunk_state, we need
  // to finish that chunk first.
  if (chunk_state_len(&self->chunk) > 0) {
    size_t take = BLAKE3_CHUNK_LEN - chunk_state_len(&self->chunk);
    if (take > input_len) {
      take = input_len;
    }
    chunk_state_update(&self->chunk, input_bytes, take);
    input_bytes += take;
    input_len -= take;
    // If we've filled the current chunk and there's more coming, finalize this
    // chunk and proceed. In this case we know it's not the root.
    if (input_len > 0) {
      output_t output = chunk_state_output(&self->chunk);
      uint8_t chunk_cv[32];
      output_chaining_value(&output, chunk_cv);
      hasher_push_cv(self, chunk_cv, self->chunk.chunk_counter);
      chunk_state_reset(&self->chunk, self->key, self->chunk.chunk_counter + 1);
    } else {
      return;
    }
  }

  // Now the chunk_state is clear, and we have more input. If there's more than
  // a single chunk (so, definitely not the root chunk), hash the largest whole
  // subtree we can, with the full benefits of SIMD (and maybe in the future,
  // multi-threading) parallelism. Two restrictions:
  // - The subtree has to be a power-of-2 number of chunks. Only subtrees along
  //   the right edge can be incomplete, and we don't know where the right edge
  //   is going to be until we get to finalize().
  // - The subtree must evenly divide the total number of chunks up until this
  //   point (if total is not 0). If the current incomplete subtree is only
  //   waiting for 1 more chunk, we can't hash a subtree of 4 chunks. We have
  //   to complete the current subtree first.
  // Because we might need to break up the input to form powers of 2, or to
  // evenly divide what we already have, this part runs in a loop.
  while (input_len > BLAKE3_CHUNK_LEN) {
    size_t subtree_len = round_down_to_power_of_2(input_len);
    uint64_t count_so_far = self->chunk.chunk_counter * BLAKE3_CHUNK_LEN;
    // Shrink the subtree_len until it evenly divides the count so far. We know
    // that subtree_len itself is a power of 2, so we can use a bitmasking
    // trick instead of an actual remainder operation. (Note that if the caller
    // consistently passes power-of-2 inputs of the same size, as is hopefully
    // typical, this loop condition will always fail, and subtree_len will
    // always be the full length of the input.)
    //
    // An aside: We don't have to shrink subtree_len quite this much. For
    // example, if count_so_far is 1, we could pass 2 chunks to
    // compress_subtree_to_parent_node. Since we'll get 2 CVs back, we'll still
    // get the right answer in the end, and we might get to use 2-way SIMD
    // parallelism. The problem with this optimization, is that it gets us
    // stuck always hashing 2 chunks. The total number of chunks will remain
    // odd, and we'll never graduate to higher degrees of parallelism. See
    // https://github.com/BLAKE3-team/BLAKE3/issues/69.
    while ((((uint64_t)(subtree_len - 1)) & count_so_far) != 0) {
      subtree_len /= 2;
    }
    // The shrunken subtree_len might now be 1 chunk long. If so, hash that one
    // chunk by itself. Otherwise, compress the subtree into a pair of CVs.
    uint64_t subtree_chunks = subtree_len / BLAKE3_CHUNK_LEN;
    if (subtree_len <= BLAKE3_CHUNK_LEN) {
      blake3_chunk_state chunk_state;
      chunk_state_init(&chunk_state, self->key, self->chunk.flags);
      chunk_state.chunk_counter = self->chunk.chunk_counter;
      chunk_state_update(&chunk_state, input_bytes, subtree_len);
      output_t output = chunk_state_output(&chunk_state);
      uint8_t cv[BLAKE3_OUT_LEN];
      output_chaining_value(&output, cv);
      hasher_push_cv(self, cv, chunk_state.chunk_counter);
    } else {
      // This is the high-performance happy path, though getting here depends
      // on the caller giving us a long enough input.
      uint8_t cv_pair[2 * BLAKE3_OUT_LEN];
      compress_subtree_to_parent_node(
        input_bytes, subtree_len, self->key,
        self->chunk.chunk_counter, self->chunk.flags, cv_pair
      );
      hasher_push_cv(self, cv_pair, self->chunk.chunk_counter);
      hasher_push_cv(
        self, &cv_pair[BLAKE3_OUT_LEN], self->chunk.chunk_counter + (subtree_chunks / 2)
      );
    }
    self->chunk.chunk_counter += subtree_chunks;
    input_bytes += subtree_len;
    input_len -= subtree_len;
  }

  // If there's any remaining input less than a full chunk, add it to the chunk
  // state. In that case, also do a final merge loop to make sure the subtree
  // stack doesn't contain any unmerged pairs. The remaining input means we
  // know these merges are non-root. This merge loop isn't strictly necessary
  // here, because hasher_push_chunk_cv already does its own merge loop, but it
  // simplifies blake3_hasher_finalize below.
  if (input_len > 0) {
    chunk_state_update(&self->chunk, input_bytes, input_len);
    hasher_merge_cv_stack(self, self->chunk.chunk_counter);
  }
}

void blake3_hasher_finalize_seek(
  const blake3_hasher *self, uint64_t seek, uint8_t *out, size_t out_len
) {
  // Explicitly checking for zero avoids causing UB by passing a null pointer
  // to memcpy. This comes up in practice with things like:
  //   std::vector<uint8_t> v;
  //   blake3_hasher_finalize(&hasher, v.data(), v.size());
  if (out_len == 0) {
    return;
  }

  // If the subtree stack is empty, then the current chunk is the root.
  if (self->cv_stack_len == 0) {
    output_t output = chunk_state_output(&self->chunk);
    output_root_bytes(&output, seek, out, out_len);
    return;
  }
  // If there are any bytes in the chunk state, finalize that chunk and do a
  // roll-up merge between that chunk hash and every subtree in the stack. In
  // this case, the extra merge loop at the end of blake3_hasher_update
  // guarantees that none of the subtrees in the stack need to be merged with
  // each other first. Otherwise, if there are no bytes in the chunk state,
  // then the top of the stack is a chunk hash, and we start the merge from
  // that.
  output_t output;
  size_t cvs_remaining;
  if (chunk_state_len(&self->chunk) > 0) {
    cvs_remaining = self->cv_stack_len;
    output = chunk_state_output(&self->chunk);
  } else {
    // There are always at least 2 CVs in the stack in this case.
    cvs_remaining = self->cv_stack_len - 2;
    output = parent_output(&self->cv_stack[cvs_remaining * 32], self->key, self->chunk.flags);
  }
  while (cvs_remaining > 0) {
    cvs_remaining -= 1;
    uint8_t parent_block[BLAKE3_BLOCK_LEN];
    memcpy32(parent_block, &self->cv_stack[cvs_remaining * 32]);
    output_chaining_value(&output, &parent_block[32]);
    output = parent_output(parent_block, self->key, self->chunk.flags);
  }
  output_root_bytes(&output, seek, out, out_len);
}

void blake3_hasher_finalize(const blake3_hasher *self, uint8_t *out, size_t out_len) {
  blake3_hasher_finalize_seek(self, 0, out, out_len);
}

blake3_hasher hasher;

WASM_EXPORT
void Hash_Init(uint32_t keyLen) {
  if (keyLen == 32) {
    blake3_hasher_init_keyed(&hasher, main_buffer);
  } else {
    blake3_hasher_init(&hasher);
  }
}

WASM_EXPORT
void Hash_Update(uint32_t len) {
  blake3_hasher_update(&hasher, main_buffer, len);
}

/* Add padding and return the message digest. */
WASM_EXPORT
void Hash_Final(uint32_t digestBytes) {
  blake3_hasher_finalize(&hasher, main_buffer, digestBytes);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(hasher); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) &hasher;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t initParam, uint32_t digestBytes) {
  Hash_Init(initParam);
  Hash_Update(length);
  Hash_Final(digestBytes);
}
