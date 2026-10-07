// //////////////////////////////////////////////////////////
// Crc32.cpp
// Copyright (c) 2011-2019 Stephan Brumme. All rights reserved.
// Slicing-by-16 contributed by Bulat Ziganshin
// Tableless bytewise CRC contributed by Hagai Gold
// see http://create.stephan-brumme.com/disclaimer.html
//
// Modified for hash-wasm by Dani Biró
//

#define WITH_BUFFER
#include "hash-wasm.h"

#define bswap_32(x) __builtin_bswap32(x)

alignas(128) static uint32_t crc32_lookup[8][256] = {0};

void init_lut(uint32_t polynomial) {
  for (int i = 0; i < 256; ++i) {
    uint32_t crc = i;
    for (int j = 0; j < 8; ++j) {
      crc = (crc >> 1) ^ (-(int32_t)(crc & 1) & polynomial);
    }
    crc32_lookup[0][i] = crc;
  }

  for (int i = 1; i < 256; ++i) {
    uint32_t lv = crc32_lookup[0][i];
    for (int j = 1; j < 8; ++j) {
      lv = (lv >> 8) ^ crc32_lookup[0][lv & 255];
      crc32_lookup[j][i] = lv;
    }
  }
}

uint32_t crc32_lut_initialized_to = 0;
uint32_t previous_crc32 = 0;

WASM_EXPORT
void Hash_Init(uint32_t polynomial) {
  if (crc32_lut_initialized_to != polynomial) {
    init_lut(polynomial);
    crc32_lut_initialized_to = polynomial;
  }

  previous_crc32 = 0;
}

WASM_EXPORT
void Hash_Update(uint32_t length) {
  const uint8_t *data = main_buffer;

  uint32_t crc = ~previous_crc32; // same as previous_crc32 ^ 0xFFFFFFFF
  const uint32_t *current = (const uint32_t *)data;

  // process eight bytes at once (Slicing-by-8)
  while (length >= 8) {
    uint32_t one = *current++ ^ crc;
    uint32_t two = *current++;
    crc = crc32_lookup[0][(two >> 24) & 0xFF] ^
          crc32_lookup[1][(two >> 16) & 0xFF] ^
          crc32_lookup[2][(two >> 8) & 0xFF] ^ crc32_lookup[3][two & 0xFF] ^
          crc32_lookup[4][(one >> 24) & 0xFF] ^
          crc32_lookup[5][(one >> 16) & 0xFF] ^
          crc32_lookup[6][(one >> 8) & 0xFF] ^ crc32_lookup[7][one & 0xFF];

    length -= 8;
  }

  const uint8_t *currentChar = (const uint8_t *)current;

  // remaining 1 to 7 bytes (standard algorithm)
  while (length-- != 0) {
    crc = (crc >> 8) ^ crc32_lookup[0][(crc & 0xFF) ^ *currentChar++];
  }

  previous_crc32 = ~crc; // same as crc ^ 0xFFFFFFFF
}

WASM_EXPORT
void Hash_Final() { ((uint32_t *)main_buffer)[0] = bswap_32(previous_crc32); }

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(previous_crc32);

WASM_EXPORT
uint8_t *Hash_GetState() { return (uint8_t *)&previous_crc32; }

WASM_EXPORT
void Hash_Calculate(uint32_t length, uint32_t initParam) {
  Hash_Init(initParam);
  Hash_Update(length);
  Hash_Final();
}
