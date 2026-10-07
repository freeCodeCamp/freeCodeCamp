// Based on crc32.c implementation of Stephan Brumme
// Modified for hash-wasm by Dani Biró

#include <stdint.h>
#define WITH_BUFFER
#include "hash-wasm.h"

#define bswap_64(x) __builtin_bswap64(x)

alignas(128) static uint64_t crc64_lookup[8][256] = {0};

void init_lut(uint64_t polynomial) {
  for (int i = 0; i < 256; ++i) {
    uint64_t crc = i;
    for (int j = 0; j < 8; ++j) {
      crc = (crc >> 1) ^ (-(int64_t)(crc & 1) & polynomial);
    }
    crc64_lookup[0][i] = crc;
  }

  for (int i = 1; i < 256; ++i) {
    uint64_t lv = crc64_lookup[0][i];
    for (int j = 1; j < 8; ++j) {
      lv = (lv >> 8) ^ crc64_lookup[0][lv & 255];
      crc64_lookup[j][i] = lv;
    }
  }
}

uint64_t crc64_lut_initialized_to = 0;
uint64_t previous_crc64 = 0;

WASM_EXPORT
void Hash_Init() {
  // polynomial is at the memory object
  uint64_t polynomial = *((uint64_t *)main_buffer);

  if (crc64_lut_initialized_to != polynomial) {
    init_lut(polynomial);
    crc64_lut_initialized_to = polynomial;
  }

  previous_crc64 = 0;
}

WASM_EXPORT
void Hash_Update(uint32_t length) {
  const uint8_t *data = main_buffer;

  uint64_t crc = ~previous_crc64; // same as previous_crc64 ^ 0xFFFFFFFF
  const uint64_t *current = (const uint64_t *)data;

  // process eight bytes at once (Slicing-by-8)
  while (length >= 8) {
    uint64_t val = *current++ ^ crc;
    crc = crc64_lookup[0][(val >> 56)] ^ crc64_lookup[1][(val >> 48) & 0xFF] ^
          crc64_lookup[2][(val >> 40) & 0xFF] ^
          crc64_lookup[3][(val >> 32) & 0xFF] ^
          crc64_lookup[4][(val >> 24) & 0xFF] ^
          crc64_lookup[5][(val >> 16) & 0xFF] ^
          crc64_lookup[6][(val >> 8) & 0xFF] ^ crc64_lookup[7][val & 0xFF];

    length -= 8;
  }

  const uint8_t *currentChar = (const uint8_t *)current;

  // remaining 1 to 7 bytes (standard algorithm)
  while (length-- != 0) {
    crc = (crc >> 8) ^ crc64_lookup[0][(crc & 0xFF) ^ *currentChar++];
  }

  previous_crc64 = ~crc;
}

WASM_EXPORT
void Hash_Final() { ((uint64_t *)main_buffer)[0] = bswap_64(previous_crc64); }

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(previous_crc64);

WASM_EXPORT
uint8_t *Hash_GetState() { return (uint8_t *)&previous_crc64; }

WASM_EXPORT
void Hash_Calculate() { return; }
