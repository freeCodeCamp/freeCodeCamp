// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

#ifndef NAN_STRING_BYTES_H_
#define NAN_STRING_BYTES_H_

// Decodes a v8::Local<v8::String> or Buffer to a raw char*

namespace imp {

using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;


//// Base 64 ////

#define base64_encoded_size(size) ((size + 2 - ((size + 2) % 3)) / 3 * 4)



//// HEX ////

static bool contains_non_ascii_slow(const char* buf, size_t len) {
  for (size_t i = 0; i < len; ++i) {
    if (buf[i] & 0x80) return true;
  }
  return false;
}


static bool contains_non_ascii(const char* src, size_t len) {
  if (len < 16) {
    return contains_non_ascii_slow(src, len);
  }

  const unsigned bytes_per_word = sizeof(void*);
  const unsigned align_mask = bytes_per_word - 1;
  const unsigned unaligned = reinterpret_cast<uintptr_t>(src) & align_mask;

  if (unaligned > 0) {
    const unsigned n = bytes_per_word - unaligned;
    if (contains_non_ascii_slow(src, n)) return true;
    src += n;
    len -= n;
  }


#if defined(__x86_64__) || defined(_WIN64)
  const uintptr_t mask = 0x8080808080808080ll;
#else
  const uintptr_t mask = 0x80808080l;
#endif

  const uintptr_t* srcw = reinterpret_cast<const uintptr_t*>(src);

  for (size_t i = 0, n = len / bytes_per_word; i < n; ++i) {
    if (srcw[i] & mask) return true;
  }

  const unsigned remainder = len & align_mask;
  if (remainder > 0) {
    const size_t offset = len - remainder;
    if (contains_non_ascii_slow(src + offset, remainder)) return true;
  }

  return false;
}


static void force_ascii_slow(const char* src, char* dst, size_t len) {
  for (size_t i = 0; i < len; ++i) {
    dst[i] = src[i] & 0x7f;
  }
}


static void force_ascii(const char* src, char* dst, size_t len) {
  if (len < 16) {
    force_ascii_slow(src, dst, len);
    return;
  }

  const unsigned bytes_per_word = sizeof(void*);
  const unsigned align_mask = bytes_per_word - 1;
  const unsigned src_unalign = reinterpret_cast<uintptr_t>(src) & align_mask;
  const unsigned dst_unalign = reinterpret_cast<uintptr_t>(dst) & align_mask;

  if (src_unalign > 0) {
    if (src_unalign == dst_unalign) {
      const unsigned unalign = bytes_per_word - src_unalign;
      force_ascii_slow(src, dst, unalign);
      src += unalign;
      dst += unalign;
      len -= src_unalign;
    } else {
      force_ascii_slow(src, dst, len);
      return;
    }
  }

#if defined(__x86_64__) || defined(_WIN64)
  const uintptr_t mask = ~0x8080808080808080ll;
#else
  const uintptr_t mask = ~0x80808080l;
#endif

  const uintptr_t* srcw = reinterpret_cast<const uintptr_t*>(src);
  uintptr_t* dstw = reinterpret_cast<uintptr_t*>(dst);

  for (size_t i = 0, n = len / bytes_per_word; i < n; ++i) {
    dstw[i] = srcw[i] & mask;
  }

  const unsigned remainder = len & align_mask;
  if (remainder > 0) {
    const size_t offset = len - remainder;
    force_ascii_slow(src + offset, dst + offset, remainder);
  }
}


static size_t base64_encode(const char* src,
                            size_t slen,
                            char* dst,
                            size_t dlen) {
  // We know how much we'll write, just make sure that there's space.
  assert(dlen >= base64_encoded_size(slen) &&
      "not enough space provided for base64 encode");

  dlen = base64_encoded_size(slen);

  unsigned a;
  unsigned b;
  unsigned c;
  unsigned i;
  unsigned k;
  unsigned n;

  static const char table[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                              "abcdefghijklmnopqrstuvwxyz"
                              "0123456789+/";

  i = 0;
  k = 0;
  n = slen / 3 * 3;

  while (i < n) {
    a = src[i + 0] & 0xff;
    b = src[i + 1] & 0xff;
    c = src[i + 2] & 0xff;

    dst[k + 0] = table[a >> 2];
    dst[k + 1] = table[((a & 3) << 4) | (b >> 4)];
    dst[k + 2] = table[((b & 0x0f) << 2) | (c >> 6)];
    dst[k + 3] = table[c & 0x3f];

    i += 3;
    k += 4;
  }

  if (n != slen) {
    switch (slen - n) {
      case 1:
        a = src[i + 0] & 0xff;
        dst[k + 0] = table[a >> 2];
        dst[k + 1] = table[(a & 3) << 4];
        dst[k + 2] = '=';
        dst[k + 3] = '=';
        break;

      case 2:
        a = src[i + 0] & 0xff;
        b = src[i + 1] & 0xff;
        dst[k + 0] = table[a >> 2];
        dst[k + 1] = table[((a & 3) << 4) | (b >> 4)];
        dst[k + 2] = table[(b & 0x0f) << 2];
        dst[k + 3] = '=';
        break;
    }
  }

  return dlen;
}


static size_t hex_encode(const char* src, size_t slen, char* dst, size_t dlen) {
  // We know how much we'll write, just make sure that there's space.
  assert(dlen >= slen * 2 &&
      "not enough space provided for hex encode");

  dlen = slen * 2;
  for (uint32_t i = 0, k = 0; k < dlen; i += 1, k += 2) {
    static const char hex[] = "0123456789abcdef";
    uint8_t val = static_cast<uint8_t>(src[i]);
    dst[k + 0] = hex[val >> 4];
    dst[k + 1] = hex[val & 15];
  }

  return dlen;
}



static Local<Value> Encode(const char* buf,
                           size_t buflen,
                           enum Encoding encoding) {
  assert(buflen <= node::Buffer::kMaxLength);
  if (!buflen && encoding != BUFFER)
    return New("").ToLocalChecked();

  Local<String> val;
  switch (encoding) {
    case BUFFER:
      return CopyBuffer(buf, buflen).ToLocalChecked();

    case ASCII:
      if (contains_non_ascii(buf, buflen)) {
        char* out = new char[buflen];
        force_ascii(buf, out, buflen);
        val = New<String>(out, buflen).ToLocalChecked();
        delete[] out;
      } else {
        val = New<String>(buf, buflen).ToLocalChecked();
      }
      break;

    case UTF8:
      val = New<String>(buf, buflen).ToLocalChecked();
      break;

    case BINARY: {
      // TODO(isaacs) use ExternalTwoByteString?
      const unsigned char *cbuf = reinterpret_cast<const unsigned char*>(buf);
      uint16_t * twobytebuf = new uint16_t[buflen];
      for (size_t i = 0; i < buflen; i++) {
        // XXX is the following line platform independent?
        twobytebuf[i] = cbuf[i];
      }
      val = New<String>(twobytebuf, buflen).ToLocalChecked();
      delete[] twobytebuf;
      break;
    }

    case BASE64: {
      size_t dlen = base64_encoded_size(buflen);
      char* dst = new char[dlen];

      size_t written = base64_encode(buf, buflen, dst, dlen);
      assert(written == dlen);

      val = New<String>(dst, dlen).ToLocalChecked();
      delete[] dst;
      break;
    }

    case UCS2: {
      const uint16_t* data = reinterpret_cast<const uint16_t*>(buf);
      val = New<String>(data, buflen / 2).ToLocalChecked();
      break;
    }

    case HEX: {
      size_t dlen = buflen * 2;
      char* dst = new char[dlen];
      size_t written = hex_encode(buf, buflen, dst, dlen);
      assert(written == dlen);

      val = New<String>(dst, dlen).ToLocalChecked();
      delete[] dst;
      break;
    }

    default:
      assert(0 && "unknown encoding");
      break;
  }

  return val;
}

#undef base64_encoded_size

}  // end of namespace imp

#endif  // NAN_STRING_BYTES_H_
