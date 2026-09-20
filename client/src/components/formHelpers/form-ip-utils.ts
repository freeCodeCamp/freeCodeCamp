/*
This software is licensed under the MIT License.

Copyright Fedor Indutny, 2012.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

MODIFIED FROM: https://github.com/indutny/node-ip
*/

export function isPrivate(address: string) {
  // Strip `https?` prefix
  let addr = address.replace(/^https?:\/\//, '');

  // Check if localhost
  if (/^localhost:/.test(addr)) {
    return true;
  }
  // Check loopback addresses first
  if (isLoopback(addr)) {
    return true;
  }

  // Ensure the ipv4 address is valid
  if (!isV6Format(addr)) {
    const ipl = normalizeToLong(addr);
    if (ipl < 0) {
      return false;
    }
    // Normalize the address for the private range checks that follow
    addr = fromLong(ipl);
  }

  // Check private ranges
  return (
    /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(
      addr
    ) ||
    /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr) ||
    /^f[cd][0-9a-f]{2}:/i.test(addr) ||
    /^fe80:/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^::$/.test(addr)
  );
}

function isLoopback(addr: string) {
  // If addr is an IPv4 address in long integer form (no dots and no colons), convert it
  if (!/\./.test(addr) && !/:/.test(addr)) {
    addr = fromLong(Number(addr));
  }

  return (
    /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(addr) ||
    /^0177\./.test(addr) ||
    /^0x7f\./i.test(addr) ||
    /^fe80::1$/i.test(addr) ||
    /^::1$/.test(addr) ||
    /^\[::1\]/.test(addr) ||
    /^::$/.test(addr)
  );
}

function fromLong(ipl: number) {
  return `${ipl >>> 24}.${(ipl >> 16) & 255}.${(ipl >> 8) & 255}.${ipl & 255}`;
}

const ipv6Regex =
  /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

function isV6Format(ip: string) {
  return ipv6Regex.test(ip);
}

function normalizeToLong(addr: string) {
  const parts = addr.split('.').map(part => {
    // Handle hexadecimal format
    if (part.startsWith('0x') || part.startsWith('0X')) {
      return parseInt(part, 16);
    }
    // Handle octal format (strictly digits 0-7 after a leading zero)
    else if (part.startsWith('0') && part !== '0' && /^[0-7]+$/.test(part)) {
      return parseInt(part, 8);
    }
    // Handle decimal format, reject invalid leading zeros
    else if (/^[1-9]\d*$/.test(part) || part === '0') {
      return parseInt(part, 10);
    }
    // Return NaN for invalid formats to indicate parsing failure
    else {
      return NaN;
    }
  });

  if (parts.some(isNaN)) return -1; // Indicate error with -1

  let val = 0;
  const n = parts.length;

  switch (n) {
    case 1:
      val = parts[0];
      break;
    case 2:
      if (parts[0] > 0xff || parts[1] > 0xffffff) return -1;
      val = (parts[0] << 24) | (parts[1] & 0xffffff);
      break;
    case 3:
      if (parts[0] > 0xff || parts[1] > 0xff || parts[2] > 0xffff) return -1;
      val = (parts[0] << 24) | (parts[1] << 16) | (parts[2] & 0xffff);
      break;
    case 4:
      if (parts.some(part => part > 0xff)) return -1;
      val = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
      break;
    default:
      return -1; // Error case
  }

  return val >>> 0;
}
