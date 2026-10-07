/*
chacha-merged.c version 20080118
D. J. Bernstein
Public domain.
*/

#include <memory.h>
#include <stdio.h>
//#include <sys/param.h>

#include "chacha8.h"
#if 0
#include "common/int-util.h"
#include "warnings.h"
#endif

#if BYTE_ORDER == LITTLE_ENDIAN
#define SWAP32LE(x)	(x)
#else
#define SWAP32LE(x)  ((((uint32_t) (x) & 0x000000ff) << 24) | \
  (((uint32_t) (x) & 0x0000ff00) <<  8) | \
  (((uint32_t) (x) & 0x00ff0000) >>  8) | \
  (((uint32_t) (x) & 0xff000000) >> 24))
#endif

/*
 * The following macros are used to obtain exact-width results.
 */
#define U8V(v) ((uint8_t)(v) & UINT8_C(0xFF))
#define U32V(v) ((uint32_t)(v) & UINT32_C(0xFFFFFFFF))

/*
 * The following macros load words from an array of bytes with
 * different types of endianness, and vice versa.
 */
#define U8TO32_LITTLE(p) SWAP32LE(((uint32_t*)(p))[0])
#define U32TO8_LITTLE(p, v) (((uint32_t*)(p))[0] = SWAP32LE(v))

#define ROTATE(v,c) (rol32(v,c))
#define XOR(v,w) ((v) ^ (w))
#define PLUS(v,w) (U32V((v) + (w)))
#define PLUSONE(v) (PLUS((v),1))

#define QUARTERROUND(a,b,c,d) \
  a = PLUS(a,b); d = ROTATE(XOR(d,a),16); \
  c = PLUS(c,d); b = ROTATE(XOR(b,c),12); \
  a = PLUS(a,b); d = ROTATE(XOR(d,a), 8); \
  c = PLUS(c,d); b = ROTATE(XOR(b,c), 7);

static const char sigma[] = "expand 32-byte k";

static uint32_t rol32(uint32_t x, int r) {
	return (x << (r & 31)) | (x >> (-r & 31));
}

void chacha8(const void* data, size_t length, const uint8_t* key, const uint8_t* iv, char* cipher) {
  uint32_t x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15;
  uint32_t j0, j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14, j15;
  char* ctarget = 0;
  char tmp[64];
  int i;

  if (!length) return;

  j0  = U8TO32_LITTLE(sigma + 0);
  j1  = U8TO32_LITTLE(sigma + 4);
  j2  = U8TO32_LITTLE(sigma + 8);
  j3  = U8TO32_LITTLE(sigma + 12);
  j4  = U8TO32_LITTLE(key + 0);
  j5  = U8TO32_LITTLE(key + 4);
  j6  = U8TO32_LITTLE(key + 8);
  j7  = U8TO32_LITTLE(key + 12);
  j8  = U8TO32_LITTLE(key + 16);
  j9  = U8TO32_LITTLE(key + 20);
  j10 = U8TO32_LITTLE(key + 24);
  j11 = U8TO32_LITTLE(key + 28);
  j12 = 0;
  j13 = 0;
  j14 = U8TO32_LITTLE(iv + 0);
  j15 = U8TO32_LITTLE(iv + 4);

  for (;;) {
    if (length < 64) {
      memcpy(tmp, data, length);
      data = tmp;
      ctarget = cipher;
      cipher = tmp;
    }
    x0  = j0;
    x1  = j1;
    x2  = j2;
    x3  = j3;
    x4  = j4;
    x5  = j5;
    x6  = j6;
    x7  = j7;
    x8  = j8;
    x9  = j9;
    x10 = j10;
    x11 = j11;
    x12 = j12;
    x13 = j13;
    x14 = j14;
    x15 = j15;
    for (i = 8;i > 0;i -= 2) {
      QUARTERROUND( x0, x4, x8,x12)
      QUARTERROUND( x1, x5, x9,x13)
      QUARTERROUND( x2, x6,x10,x14)
      QUARTERROUND( x3, x7,x11,x15)
      QUARTERROUND( x0, x5,x10,x15)
      QUARTERROUND( x1, x6,x11,x12)
      QUARTERROUND( x2, x7, x8,x13)
      QUARTERROUND( x3, x4, x9,x14)
    }
    x0  = PLUS( x0, j0);
    x1  = PLUS( x1, j1);
    x2  = PLUS( x2, j2);
    x3  = PLUS( x3, j3);
    x4  = PLUS( x4, j4);
    x5  = PLUS( x5, j5);
    x6  = PLUS( x6, j6);
    x7  = PLUS( x7, j7);
    x8  = PLUS( x8, j8);
    x9  = PLUS( x9, j9);
    x10 = PLUS(x10,j10);
    x11 = PLUS(x11,j11);
    x12 = PLUS(x12,j12);
    x13 = PLUS(x13,j13);
    x14 = PLUS(x14,j14);
    x15 = PLUS(x15,j15);

    x0  = XOR( x0,U8TO32_LITTLE((uint8_t*)data +  0));
    x1  = XOR( x1,U8TO32_LITTLE((uint8_t*)data +  4));
    x2  = XOR( x2,U8TO32_LITTLE((uint8_t*)data +  8));
    x3  = XOR( x3,U8TO32_LITTLE((uint8_t*)data + 12));
    x4  = XOR( x4,U8TO32_LITTLE((uint8_t*)data + 16));
    x5  = XOR( x5,U8TO32_LITTLE((uint8_t*)data + 20));
    x6  = XOR( x6,U8TO32_LITTLE((uint8_t*)data + 24));
    x7  = XOR( x7,U8TO32_LITTLE((uint8_t*)data + 28));
    x8  = XOR( x8,U8TO32_LITTLE((uint8_t*)data + 32));
    x9  = XOR( x9,U8TO32_LITTLE((uint8_t*)data + 36));
    x10 = XOR(x10,U8TO32_LITTLE((uint8_t*)data + 40));
    x11 = XOR(x11,U8TO32_LITTLE((uint8_t*)data + 44));
    x12 = XOR(x12,U8TO32_LITTLE((uint8_t*)data + 48));
    x13 = XOR(x13,U8TO32_LITTLE((uint8_t*)data + 52));
    x14 = XOR(x14,U8TO32_LITTLE((uint8_t*)data + 56));
    x15 = XOR(x15,U8TO32_LITTLE((uint8_t*)data + 60));

    j12 = PLUSONE(j12);
    if (!j12)
    {
      j13 = PLUSONE(j13);
      /* stopping at 2^70 bytes per iv is user's responsibility */
    }

    U32TO8_LITTLE(cipher +  0,x0);
    U32TO8_LITTLE(cipher +  4,x1);
    U32TO8_LITTLE(cipher +  8,x2);
    U32TO8_LITTLE(cipher + 12,x3);
    U32TO8_LITTLE(cipher + 16,x4);
    U32TO8_LITTLE(cipher + 20,x5);
    U32TO8_LITTLE(cipher + 24,x6);
    U32TO8_LITTLE(cipher + 28,x7);
    U32TO8_LITTLE(cipher + 32,x8);
    U32TO8_LITTLE(cipher + 36,x9);
    U32TO8_LITTLE(cipher + 40,x10);
    U32TO8_LITTLE(cipher + 44,x11);
    U32TO8_LITTLE(cipher + 48,x12);
    U32TO8_LITTLE(cipher + 52,x13);
    U32TO8_LITTLE(cipher + 56,x14);
    U32TO8_LITTLE(cipher + 60,x15);

    if (length <= 64) {
      if (length < 64) {
        memcpy(ctarget, cipher, length);
      }
      return;
    }
    length -= 64;
    cipher += 64;
    data = (uint8_t*)data + 64;
  }
}
