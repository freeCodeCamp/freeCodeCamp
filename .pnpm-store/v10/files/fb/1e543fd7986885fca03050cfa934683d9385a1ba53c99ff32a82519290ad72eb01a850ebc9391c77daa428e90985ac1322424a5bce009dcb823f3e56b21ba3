/* 
  adler32.c -- compute the Adler-32 checksum of a data stream
  Copyright (C) 1995-2011, 2016 Mark Adler
    
    Licensed under the zlib license:
  
    Copyright (C) 1995-2017 Jean-loup Gailly and Mark Adler
  
    This software is provided 'as-is', without any express or implied
    warranty.  In no event will the authors be held liable for any damages
    arising from the use of this software.
  
    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:
  
    1. The origin of this software must not be misrepresented; you must not
       claim that you wrote the original software. If you use this software
       in a product, an acknowledgment in the product documentation would be
       appreciated but is not required.
    2. Altered source versions must be plainly marked as such, and must not be
       misrepresented as being the original software.
    3. This notice may not be removed or altered from any source distribution.
  
    Jean-loup Gailly        Mark Adler
    jloup@gzip.org          madler@alumni.caltech.edu
  
  Modified for hash-wasm by Nicholas Sherlock and Dani Biro, 2021
*/

#define WITH_BUFFER
#include "hash-wasm.h"

#define bswap_32(x) __builtin_bswap32(x)

#define BASE 65521U     /* largest prime smaller than 65536 */
#define NMAX 5552
/* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */

#define DO1(b,i)  adler += ((b) >> i) & 0xFF; sum2 += adler;
#define DO4(buf,i)  { uint32_t b = ((uint32_t*)buf)[i]; DO1(b,0); DO1(b,8); DO1(b,16); DO1(b,24); }
#define DO16(buf)  DO4(buf,0); DO4(buf,1); DO4(buf,2); DO4(buf,3);


#define MOD(a) a %= BASE
#define MOD28(a) a %= BASE
#define MOD63(a) a %= BASE

uint32_t previousAdler = 1;

WASM_EXPORT
void Hash_Init() {
  previousAdler = 1;
}

static uint32_t adler32(uint32_t adler, const uint8_t *buf, uint32_t len) {
  /* split Adler-32 into component sums */
  uint32_t sum2 = (adler >> 16) & 0xffff;
  adler &= 0xffff;

  /* in case user likes doing a byte at a time, keep it fast */
  if (len == 1) {
    adler += buf[0];
    if (adler >= BASE) {
      adler -= BASE;
    }
    sum2 += adler;
    if (sum2 >= BASE) {
      sum2 -= BASE;
    }
    return adler | (sum2 << 16);
  }

  /* in case short lengths are provided, keep it somewhat fast */
  if (len < 16) {
    while (len--) {
      adler += *buf++;
      sum2 += adler;
    }
    if (adler >= BASE) {
      adler -= BASE;
    }
    MOD28(sum2);            /* only added so many BASE's */
    return adler | (sum2 << 16);
  }

  /* do length NMAX blocks -- requires just one modulo operation */
  while (len >= NMAX) {
    len -= NMAX;
    uint32_t n = NMAX / 16;          /* NMAX is divisible by 16 */
    do {
      DO16(buf);          /* 16 sums unrolled */
      buf += 16;
    } while (--n);
    MOD(adler);
    MOD(sum2);
  }

  /* do remaining bytes (less than NMAX, still just one modulo) */
  if (len) {                  /* avoid modulos if none remaining */
    while (len >= 16) {
      len -= 16;
      DO16(buf);
      buf += 16;
    }
    while (len--) {
      adler += *buf++;
      sum2 += adler;
    }
    MOD(adler);
    MOD(sum2);
  }

  /* return recombined sums */
  return adler | (sum2 << 16);
}

WASM_EXPORT
void Hash_Update(uint32_t len) {
  const uint8_t *buf = main_buffer;

  previousAdler = adler32(previousAdler, buf, len);
}

WASM_EXPORT
void Hash_Final() {
  ((uint32_t*)main_buffer)[0] = bswap_32(previousAdler);
}

WASM_EXPORT
const uint32_t STATE_SIZE = sizeof(previousAdler); 

WASM_EXPORT
uint8_t* Hash_GetState() {
  return (uint8_t*) &previousAdler;
}

WASM_EXPORT
void Hash_Calculate(uint32_t length) {
  Hash_Init();
  Hash_Update(length);
  Hash_Final();
}
