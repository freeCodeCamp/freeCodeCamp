"use strict";
const punycode = require("punycode");
const tr46 = require("tr46");

const infra = require("./infra");
const { percentEncode, percentDecode } = require("./urlencoded");

const specialSchemes = {
  ftp: 21,
  file: null,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

const failure = Symbol("failure");

function countSymbols(str) {
  return punycode.ucs2.decode(str).length;
}

function at(input, idx) {
  const c = input[idx];
  return isNaN(c) ? undefined : String.fromCodePoint(c);
}

function isSingleDot(buffer) {
  return buffer === "." || buffer.toLowerCase() === "%2e";
}

function isDoubleDot(buffer) {
  buffer = buffer.toLowerCase();
  return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}

function isWindowsDriveLetterCodePoints(cp1, cp2) {
  return infra.isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}

function isWindowsDriveLetterString(string) {
  return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}

function isNormalizedWindowsDriveLetterString(string) {
  return string.length === 2 && infra.isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}

function containsForbiddenHostCodePoint(string) {
  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}

function containsForbiddenHostCodePointExcludingPercent(string) {
  return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}

function isSpecialScheme(scheme) {
  return specialSchemes[scheme] !== undefined;
}

function isSpecial(url) {
  return isSpecialScheme(url.scheme);
}

function isNotSpecial(url) {
  return !isSpecialScheme(url.scheme);
}

function defaultPort(scheme) {
  return specialSchemes[scheme];
}

function utf8PercentEncode(c) {
  const buf = Buffer.from(c);

  let str = "";

  for (let i = 0; i < buf.length; ++i) {
    str += percentEncode(buf[i]);
  }

  return str;
}

function isC0ControlPercentEncode(c) {
  return c <= 0x1F || c > 0x7E;
}

const extraUserinfoPercentEncodeSet =
  new Set([47, 58, 59, 61, 64, 91, 92, 93, 94, 124]);
function isUserinfoPercentEncode(c) {
  return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}

const extraFragmentPercentEncodeSet = new Set([32, 34, 60, 62, 96]);
function isFragmentPercentEncode(c) {
  return isC0ControlPercentEncode(c) || extraFragmentPercentEncodeSet.has(c);
}

const extraPathPercentEncodeSet = new Set([35, 63, 123, 125]);
function isPathPercentEncode(c) {
  return isFragmentPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}

function percentEncodeChar(c, encodeSetPredicate) {
  const cStr = String.fromCodePoint(c);

  if (encodeSetPredicate(c)) {
    return utf8PercentEncode(cStr);
  }

  return cStr;
}

function parseIPv4Number(input) {
  let R = 10;

  if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
    input = input.substring(2);
    R = 16;
  } else if (input.length >= 2 && input.charAt(0) === "0") {
    input = input.substring(1);
    R = 8;
  }

  if (input === "") {
    return 0;
  }

  let regex = /[^0-7]/;
  if (R === 10) {
    regex = /[^0-9]/;
  }
  if (R === 16) {
    regex = /[^0-9A-Fa-f]/;
  }

  if (regex.test(input)) {
    return failure;
  }

  return parseInt(input, R);
}

function parseIPv4(input) {
  const parts = input.split(".");
  if (parts[parts.length - 1] === "") {
    if (parts.length > 1) {
      parts.pop();
    }
  }

  if (parts.length > 4) {
    return input;
  }

  const numbers = [];
  for (const part of parts) {
    if (part === "") {
      return input;
    }
    const n = parseIPv4Number(part);
    if (n === failure) {
      return input;
    }

    numbers.push(n);
  }

  for (let i = 0; i < numbers.length - 1; ++i) {
    if (numbers[i] > 255) {
      return failure;
    }
  }
  if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
    return failure;
  }

  let ipv4 = numbers.pop();
  let counter = 0;

  for (const n of numbers) {
    ipv4 += n * Math.pow(256, 3 - counter);
    ++counter;
  }

  return ipv4;
}

function serializeIPv4(address) {
  let output = "";
  let n = address;

  for (let i = 1; i <= 4; ++i) {
    output = String(n % 256) + output;
    if (i !== 4) {
      output = "." + output;
    }
    n = Math.floor(n / 256);
  }

  return output;
}

function parseIPv6(input) {
  const address = [0, 0, 0, 0, 0, 0, 0, 0];
  let pieceIndex = 0;
  let compress = null;
  let pointer = 0;

  input = punycode.ucs2.decode(input);

  if (input[pointer] === 58) {
    if (input[pointer + 1] !== 58) {
      return failure;
    }

    pointer += 2;
    ++pieceIndex;
    compress = pieceIndex;
  }

  while (pointer < input.length) {
    if (pieceIndex === 8) {
      return failure;
    }

    if (input[pointer] === 58) {
      if (compress !== null) {
        return failure;
      }
      ++pointer;
      ++pieceIndex;
      compress = pieceIndex;
      continue;
    }

    let value = 0;
    let length = 0;

    while (length < 4 && infra.isASCIIHex(input[pointer])) {
      value = value * 0x10 + parseInt(at(input, pointer), 16);
      ++pointer;
      ++length;
    }

    if (input[pointer] === 46) {
      if (length === 0) {
        return failure;
      }

      pointer -= length;

      if (pieceIndex > 6) {
        return failure;
      }

      let numbersSeen = 0;

      while (input[pointer] !== undefined) {
        let ipv4Piece = null;

        if (numbersSeen > 0) {
          if (input[pointer] === 46 && numbersSeen < 4) {
            ++pointer;
          } else {
            return failure;
          }
        }

        if (!infra.isASCIIDigit(input[pointer])) {
          return failure;
        }

        while (infra.isASCIIDigit(input[pointer])) {
          const number = parseInt(at(input, pointer));
          if (ipv4Piece === null) {
            ipv4Piece = number;
          } else if (ipv4Piece === 0) {
            return failure;
          } else {
            ipv4Piece = ipv4Piece * 10 + number;
          }
          if (ipv4Piece > 255) {
            return failure;
          }
          ++pointer;
        }

        address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;

        ++numbersSeen;

        if (numbersSeen === 2 || numbersSeen === 4) {
          ++pieceIndex;
        }
      }

      if (numbersSeen !== 4) {
        return failure;
      }

      break;
    } else if (input[pointer] === 58) {
      ++pointer;
      if (input[pointer] === undefined) {
        return failure;
      }
    } else if (input[pointer] !== undefined) {
      return failure;
    }

    address[pieceIndex] = value;
    ++pieceIndex;
  }

  if (compress !== null) {
    let swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex !== 0 && swaps > 0) {
      const temp = address[compress + swaps - 1];
      address[compress + swaps - 1] = address[pieceIndex];
      address[pieceIndex] = temp;
      --pieceIndex;
      --swaps;
    }
  } else if (compress === null && pieceIndex !== 8) {
    return failure;
  }

  return address;
}

function serializeIPv6(address) {
  let output = "";
  const seqResult = findLongestZeroSequence(address);
  const compress = seqResult.idx;
  let ignore0 = false;

  for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
    if (ignore0 && address[pieceIndex] === 0) {
      continue;
    } else if (ignore0) {
      ignore0 = false;
    }

    if (compress === pieceIndex) {
      const separator = pieceIndex === 0 ? "::" : ":";
      output += separator;
      ignore0 = true;
      continue;
    }

    output += address[pieceIndex].toString(16);

    if (pieceIndex !== 7) {
      output += ":";
    }
  }

  return output;
}

function parseHost(input, isNotSpecialArg = false) {
  if (input[0] === "[") {
    if (input[input.length - 1] !== "]") {
      return failure;
    }

    return parseIPv6(input.substring(1, input.length - 1));
  }

  if (isNotSpecialArg) {
    return parseOpaqueHost(input);
  }

  const domain = percentDecode(Buffer.from(input)).toString();
  const asciiDomain = domainToASCII(domain);
  if (asciiDomain === failure) {
    return failure;
  }

  if (containsForbiddenHostCodePoint(asciiDomain)) {
    return failure;
  }

  const ipv4Host = parseIPv4(asciiDomain);
  if (typeof ipv4Host === "number" || ipv4Host === failure) {
    return ipv4Host;
  }

  return asciiDomain;
}

function parseOpaqueHost(input) {
  if (containsForbiddenHostCodePointExcludingPercent(input)) {
    return failure;
  }

  let output = "";
  const decoded = punycode.ucs2.decode(input);
  for (let i = 0; i < decoded.length; ++i) {
    output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
  }
  return output;
}

function findLongestZeroSequence(arr) {
  let maxIdx = null;
  let maxLen = 1; // only find elements > 1
  let currStart = null;
  let currLen = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 0) {
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }

      currStart = null;
      currLen = 0;
    } else {
      if (currStart === null) {
        currStart = i;
      }
      ++currLen;
    }
  }

  // if trailing zeros
  if (currLen > maxLen) {
    maxIdx = currStart;
    maxLen = currLen;
  }

  return {
    idx: maxIdx,
    len: maxLen
  };
}

function serializeHost(host) {
  if (typeof host === "number") {
    return serializeIPv4(host);
  }

  // IPv6 serializer
  if (host instanceof Array) {
    return "[" + serializeIPv6(host) + "]";
  }

  return host;
}

function domainToASCII(domain, beStrict = false) {
  const result = tr46.toASCII(domain, {
    checkBidi: true,
    checkHyphens: false,
    checkJoiners: true,
    useSTD3ASCIIRules: beStrict,
    verifyDNSLength: beStrict
  });
  if (result === null) {
    return failure;
  }
  return result;
}

function trimControlChars(url) {
  return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}

function trimTabAndNewline(url) {
  return url.replace(/\u0009|\u000A|\u000D/g, "");
}

function shortenPath(url) {
  const { path } = url;
  if (path.length === 0) {
    return;
  }
  if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
    return;
  }

  path.pop();
}

function includesCredentials(url) {
  return url.username !== "" || url.password !== "";
}

function cannotHaveAUsernamePasswordPort(url) {
  return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}

function isNormalizedWindowsDriveLetter(string) {
  return /^[A-Za-z]:$/.test(string);
}

function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
  this.pointer = 0;
  this.input = input;
  this.base = base || null;
  this.encodingOverride = encodingOverride || "utf-8";
  this.stateOverride = stateOverride;
  this.url = url;
  this.failure = false;
  this.parseError = false;

  if (!this.url) {
    this.url = {
      scheme: "",
      username: "",
      password: "",
      host: null,
      port: null,
      path: [],
      query: null,
      fragment: null,

      cannotBeABaseURL: false
    };

    const res = trimControlChars(this.input);
    if (res !== this.input) {
      this.parseError = true;
    }
    this.input = res;
  }

  const res = trimTabAndNewline(this.input);
  if (res !== this.input) {
    this.parseError = true;
  }
  this.input = res;

  this.state = stateOverride || "scheme start";

  this.buffer = "";
  this.atFlag = false;
  this.arrFlag = false;
  this.passwordTokenSeenFlag = false;

  this.input = punycode.ucs2.decode(this.input);

  for (; this.pointer <= this.input.length; ++this.pointer) {
    const c = this.input[this.pointer];
    const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);

    // exec state machine
    const ret = this["parse " + this.state](c, cStr);
    if (!ret) {
      break; // terminate algorithm
    } else if (ret === failure) {
      this.failure = true;
      break;
    }
  }
}

URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
  if (infra.isASCIIAlpha(c)) {
    this.buffer += cStr.toLowerCase();
    this.state = "scheme";
  } else if (!this.stateOverride) {
    this.state = "no scheme";
    --this.pointer;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
  if (infra.isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
    this.buffer += cStr.toLowerCase();
  } else if (c === 58) {
    if (this.stateOverride) {
      if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
        return false;
      }

      if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
        return false;
      }

      if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
        return false;
      }

      if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
        return false;
      }
    }
    this.url.scheme = this.buffer;
    if (this.stateOverride) {
      if (this.url.port === defaultPort(this.url.scheme)) {
        this.url.port = null;
      }
      return false;
    }
    this.buffer = "";
    if (this.url.scheme === "file") {
      if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
        this.parseError = true;
      }
      this.state = "file";
    } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
      this.state = "special relative or authority";
    } else if (isSpecial(this.url)) {
      this.state = "special authority slashes";
    } else if (this.input[this.pointer + 1] === 47) {
      this.state = "path or authority";
      ++this.pointer;
    } else {
      this.url.cannotBeABaseURL = true;
      this.url.path.push("");
      this.state = "cannot-be-a-base-URL path";
    }
  } else if (!this.stateOverride) {
    this.buffer = "";
    this.state = "no scheme";
    this.pointer = -1;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
  if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
    return failure;
  } else if (this.base.cannotBeABaseURL && c === 35) {
    this.url.scheme = this.base.scheme;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
    this.url.fragment = "";
    this.url.cannotBeABaseURL = true;
    this.state = "fragment";
  } else if (this.base.scheme === "file") {
    this.state = "file";
    --this.pointer;
  } else {
    this.state = "relative";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
  if (c === 47 && this.input[this.pointer + 1] === 47) {
    this.state = "special authority ignore slashes";
    ++this.pointer;
  } else {
    this.parseError = true;
    this.state = "relative";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
  if (c === 47) {
    this.state = "authority";
  } else {
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
  this.url.scheme = this.base.scheme;
  if (isNaN(c)) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
  } else if (c === 47) {
    this.state = "relative slash";
  } else if (c === 63) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = "";
    this.state = "query";
  } else if (c === 35) {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice();
    this.url.query = this.base.query;
    this.url.fragment = "";
    this.state = "fragment";
  } else if (isSpecial(this.url) && c === 92) {
    this.parseError = true;
    this.state = "relative slash";
  } else {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.url.path = this.base.path.slice(0, this.base.path.length - 1);

    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
  if (isSpecial(this.url) && (c === 47 || c === 92)) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "special authority ignore slashes";
  } else if (c === 47) {
    this.state = "authority";
  } else {
    this.url.username = this.base.username;
    this.url.password = this.base.password;
    this.url.host = this.base.host;
    this.url.port = this.base.port;
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
  if (c === 47 && this.input[this.pointer + 1] === 47) {
    this.state = "special authority ignore slashes";
    ++this.pointer;
  } else {
    this.parseError = true;
    this.state = "special authority ignore slashes";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
  if (c !== 47 && c !== 92) {
    this.state = "authority";
    --this.pointer;
  } else {
    this.parseError = true;
  }

  return true;
};

URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
  if (c === 64) {
    this.parseError = true;
    if (this.atFlag) {
      this.buffer = "%40" + this.buffer;
    }
    this.atFlag = true;

    // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
    const len = countSymbols(this.buffer);
    for (let pointer = 0; pointer < len; ++pointer) {
      const codePoint = this.buffer.codePointAt(pointer);

      if (codePoint === 58 && !this.passwordTokenSeenFlag) {
        this.passwordTokenSeenFlag = true;
        continue;
      }
      const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
      if (this.passwordTokenSeenFlag) {
        this.url.password += encodedCodePoints;
      } else {
        this.url.username += encodedCodePoints;
      }
    }
    this.buffer = "";
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92)) {
    if (this.atFlag && this.buffer === "") {
      this.parseError = true;
      return failure;
    }
    this.pointer -= countSymbols(this.buffer) + 1;
    this.buffer = "";
    this.state = "host";
  } else {
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse hostname"] =
URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
  if (this.stateOverride && this.url.scheme === "file") {
    --this.pointer;
    this.state = "file host";
  } else if (c === 58 && !this.arrFlag) {
    if (this.buffer === "") {
      this.parseError = true;
      return failure;
    }

    const host = parseHost(this.buffer, isNotSpecial(this.url));
    if (host === failure) {
      return failure;
    }

    this.url.host = host;
    this.buffer = "";
    this.state = "port";
    if (this.stateOverride === "hostname") {
      return false;
    }
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92)) {
    --this.pointer;
    if (isSpecial(this.url) && this.buffer === "") {
      this.parseError = true;
      return failure;
    } else if (this.stateOverride && this.buffer === "" &&
               (includesCredentials(this.url) || this.url.port !== null)) {
      this.parseError = true;
      return false;
    }

    const host = parseHost(this.buffer, isNotSpecial(this.url));
    if (host === failure) {
      return failure;
    }

    this.url.host = host;
    this.buffer = "";
    this.state = "path start";
    if (this.stateOverride) {
      return false;
    }
  } else {
    if (c === 91) {
      this.arrFlag = true;
    } else if (c === 93) {
      this.arrFlag = false;
    }
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
  if (infra.isASCIIDigit(c)) {
    this.buffer += cStr;
  } else if (isNaN(c) || c === 47 || c === 63 || c === 35 ||
             (isSpecial(this.url) && c === 92) ||
             this.stateOverride) {
    if (this.buffer !== "") {
      const port = parseInt(this.buffer);
      if (port > Math.pow(2, 16) - 1) {
        this.parseError = true;
        return failure;
      }
      this.url.port = port === defaultPort(this.url.scheme) ? null : port;
      this.buffer = "";
    }
    if (this.stateOverride) {
      return false;
    }
    this.state = "path start";
    --this.pointer;
  } else {
    this.parseError = true;
    return failure;
  }

  return true;
};

const fileOtherwiseCodePoints = new Set([47, 92, 63, 35]);

function startsWithWindowsDriveLetter(input, pointer) {
  const length = input.length - pointer;
  return length >= 2 &&
    isWindowsDriveLetterCodePoints(input[pointer], input[pointer + 1]) &&
    (length === 2 || fileOtherwiseCodePoints.has(input[pointer + 2]));
}

URLStateMachine.prototype["parse file"] = function parseFile(c) {
  this.url.scheme = "file";

  if (c === 47 || c === 92) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "file slash";
  } else if (this.base !== null && this.base.scheme === "file") {
    if (isNaN(c)) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
    } else if (c === 63) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = "";
      this.state = "query";
    } else if (c === 35) {
      this.url.host = this.base.host;
      this.url.path = this.base.path.slice();
      this.url.query = this.base.query;
      this.url.fragment = "";
      this.state = "fragment";
    } else {
      if (!startsWithWindowsDriveLetter(this.input, this.pointer)) {
        this.url.host = this.base.host;
        this.url.path = this.base.path.slice();
        shortenPath(this.url);
      } else {
        this.parseError = true;
      }

      this.state = "path";
      --this.pointer;
    }
  } else {
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
  if (c === 47 || c === 92) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "file host";
  } else {
    if (this.base !== null && this.base.scheme === "file" &&
        !startsWithWindowsDriveLetter(this.input, this.pointer)) {
      if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
        this.url.path.push(this.base.path[0]);
      } else {
        this.url.host = this.base.host;
      }
    }
    this.state = "path";
    --this.pointer;
  }

  return true;
};

URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
  if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
    --this.pointer;
    if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
      this.parseError = true;
      this.state = "path";
    } else if (this.buffer === "") {
      this.url.host = "";
      if (this.stateOverride) {
        return false;
      }
      this.state = "path start";
    } else {
      let host = parseHost(this.buffer, isNotSpecial(this.url));
      if (host === failure) {
        return failure;
      }
      if (host === "localhost") {
        host = "";
      }
      this.url.host = host;

      if (this.stateOverride) {
        return false;
      }

      this.buffer = "";
      this.state = "path start";
    }
  } else {
    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
  if (isSpecial(this.url)) {
    if (c === 92) {
      this.parseError = true;
    }
    this.state = "path";

    if (c !== 47 && c !== 92) {
      --this.pointer;
    }
  } else if (!this.stateOverride && c === 63) {
    this.url.query = "";
    this.state = "query";
  } else if (!this.stateOverride && c === 35) {
    this.url.fragment = "";
    this.state = "fragment";
  } else if (c !== undefined) {
    this.state = "path";
    if (c !== 47) {
      --this.pointer;
    }
  }

  return true;
};

URLStateMachine.prototype["parse path"] = function parsePath(c) {
  if (isNaN(c) || c === 47 || (isSpecial(this.url) && c === 92) ||
      (!this.stateOverride && (c === 63 || c === 35))) {
    if (isSpecial(this.url) && c === 92) {
      this.parseError = true;
    }

    if (isDoubleDot(this.buffer)) {
      shortenPath(this.url);
      if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
        this.url.path.push("");
      }
    } else if (isSingleDot(this.buffer) && c !== 47 &&
               !(isSpecial(this.url) && c === 92)) {
      this.url.path.push("");
    } else if (!isSingleDot(this.buffer)) {
      if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
        if (this.url.host !== "" && this.url.host !== null) {
          this.parseError = true;
          this.url.host = "";
        }
        this.buffer = this.buffer[0] + ":";
      }
      this.url.path.push(this.buffer);
    }
    this.buffer = "";
    if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
      while (this.url.path.length > 1 && this.url.path[0] === "") {
        this.parseError = true;
        this.url.path.shift();
      }
    }
    if (c === 63) {
      this.url.query = "";
      this.state = "query";
    }
    if (c === 35) {
      this.url.fragment = "";
      this.state = "fragment";
    }
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.

    if (c === 37 &&
      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.buffer += percentEncodeChar(c, isPathPercentEncode);
  }

  return true;
};

URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
  if (c === 63) {
    this.url.query = "";
    this.state = "query";
  } else if (c === 35) {
    this.url.fragment = "";
    this.state = "fragment";
  } else {
    // TODO: Add: not a URL code point
    if (!isNaN(c) && c !== 37) {
      this.parseError = true;
    }

    if (c === 37 &&
        (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
         !infra.isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    if (!isNaN(c)) {
      this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
    }
  }

  return true;
};

URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
  if (isNaN(c) || (!this.stateOverride && c === 35)) {
    if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
      this.encodingOverride = "utf-8";
    }

    const buffer = Buffer.from(this.buffer); // TODO: Use encoding override instead
    for (let i = 0; i < buffer.length; ++i) {
      if (buffer[i] < 0x21 ||
          buffer[i] > 0x7E ||
          buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E ||
          (buffer[i] === 0x27 && isSpecial(this.url))) {
        this.url.query += percentEncode(buffer[i]);
      } else {
        this.url.query += String.fromCodePoint(buffer[i]);
      }
    }

    this.buffer = "";
    if (c === 35) {
      this.url.fragment = "";
      this.state = "fragment";
    }
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.
    if (c === 37 &&
      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.buffer += cStr;
  }

  return true;
};

URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
  if (isNaN(c)) { // do nothing
  } else if (c === 0x0) {
    this.parseError = true;
  } else {
    // TODO: If c is not a URL code point and not "%", parse error.
    if (c === 37 &&
      (!infra.isASCIIHex(this.input[this.pointer + 1]) ||
        !infra.isASCIIHex(this.input[this.pointer + 2]))) {
      this.parseError = true;
    }

    this.url.fragment += percentEncodeChar(c, isFragmentPercentEncode);
  }

  return true;
};

function serializeURL(url, excludeFragment) {
  let output = url.scheme + ":";
  if (url.host !== null) {
    output += "//";

    if (url.username !== "" || url.password !== "") {
      output += url.username;
      if (url.password !== "") {
        output += ":" + url.password;
      }
      output += "@";
    }

    output += serializeHost(url.host);

    if (url.port !== null) {
      output += ":" + url.port;
    }
  } else if (url.host === null && url.scheme === "file") {
    output += "//";
  }

  if (url.cannotBeABaseURL) {
    output += url.path[0];
  } else {
    for (const string of url.path) {
      output += "/" + string;
    }
  }

  if (url.query !== null) {
    output += "?" + url.query;
  }

  if (!excludeFragment && url.fragment !== null) {
    output += "#" + url.fragment;
  }

  return output;
}

function serializeOrigin(tuple) {
  let result = tuple.scheme + "://";
  result += serializeHost(tuple.host);

  if (tuple.port !== null) {
    result += ":" + tuple.port;
  }

  return result;
}

module.exports.serializeURL = serializeURL;

module.exports.serializeURLOrigin = function (url) {
  // https://url.spec.whatwg.org/#concept-url-origin
  switch (url.scheme) {
    case "blob":
      try {
        return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
      } catch (e) {
        // serializing an opaque origin returns "null"
        return "null";
      }
    case "ftp":
    case "gopher":
    case "http":
    case "https":
    case "ws":
    case "wss":
      return serializeOrigin({
        scheme: url.scheme,
        host: url.host,
        port: url.port
      });
    case "file":
      // The spec says:
      // > Unfortunate as it is, this is left as an exercise to the reader. When in doubt, return a new opaque origin.
      // Browsers tested so far:
      // - Chrome says "file://", but treats file: URLs as cross-origin for most (all?) purposes; see e.g.
      //   https://bugs.chromium.org/p/chromium/issues/detail?id=37586
      // - Firefox says "null", but treats file: URLs as same-origin sometimes based on directory stuff; see
      //   https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Same-origin_policy_for_file:_URIs
      return "null";
    default:
      // serializing an opaque origin returns "null"
      return "null";
  }
};

module.exports.basicURLParse = function (input, options) {
  if (options === undefined) {
    options = {};
  }

  const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
  if (usm.failure) {
    return null;
  }

  return usm.url;
};

module.exports.setTheUsername = function (url, username) {
  url.username = "";
  const decoded = punycode.ucs2.decode(username);
  for (let i = 0; i < decoded.length; ++i) {
    url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
  }
};

module.exports.setThePassword = function (url, password) {
  url.password = "";
  const decoded = punycode.ucs2.decode(password);
  for (let i = 0; i < decoded.length; ++i) {
    url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
  }
};

module.exports.serializeHost = serializeHost;

module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;

module.exports.serializeInteger = function (integer) {
  return String(integer);
};

module.exports.parseURL = function (input, options) {
  if (options === undefined) {
    options = {};
  }

  // We don't handle blobs, so this just delegates:
  return module.exports.basicURLParse(input, { baseURL: options.baseURL, encodingOverride: options.encodingOverride });
};
