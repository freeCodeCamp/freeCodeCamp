"use strict";
const { isASCIIHex } = require("./infra");

function strictlySplitByteSequence(buf, cp) {
  const list = [];
  let last = 0;
  let i = buf.indexOf(cp);
  while (i >= 0) {
    list.push(buf.slice(last, i));
    last = i + 1;
    i = buf.indexOf(cp, last);
  }
  if (last !== buf.length) {
    list.push(buf.slice(last));
  }
  return list;
}

function replaceByteInByteSequence(buf, from, to) {
  let i = buf.indexOf(from);
  while (i >= 0) {
    buf[i] = to;
    i = buf.indexOf(from, i + 1);
  }
  return buf;
}

function percentEncode(c) {
  let hex = c.toString(16).toUpperCase();
  if (hex.length === 1) {
    hex = "0" + hex;
  }

  return "%" + hex;
}

function percentDecode(input) {
  const output = Buffer.alloc(input.byteLength);
  let ptr = 0;
  for (let i = 0; i < input.length; ++i) {
    if (input[i] !== 37 || !isASCIIHex(input[i + 1]) || !isASCIIHex(input[i + 2])) {
      output[ptr++] = input[i];
    } else {
      output[ptr++] = parseInt(input.slice(i + 1, i + 3).toString(), 16);
      i += 2;
    }
  }
  return output.slice(0, ptr);
}

function parseUrlencoded(input) {
  const sequences = strictlySplitByteSequence(input, 38);
  const output = [];
  for (const bytes of sequences) {
    if (bytes.length === 0) {
      continue;
    }

    let name;
    let value;
    const indexOfEqual = bytes.indexOf(61);

    if (indexOfEqual >= 0) {
      name = bytes.slice(0, indexOfEqual);
      value = bytes.slice(indexOfEqual + 1);
    } else {
      name = bytes;
      value = Buffer.alloc(0);
    }

    name = replaceByteInByteSequence(Buffer.from(name), 43, 32);
    value = replaceByteInByteSequence(Buffer.from(value), 43, 32);

    output.push([percentDecode(name).toString(), percentDecode(value).toString()]);
  }
  return output;
}

function serializeUrlencodedByte(input) {
  let output = "";
  for (const byte of input) {
    if (byte === 32) {
      output += "+";
    } else if (byte === 42 ||
               byte === 45 ||
               byte === 46 ||
               (byte >= 48 && byte <= 57) ||
               (byte >= 65 && byte <= 90) ||
               byte === 95 ||
               (byte >= 97 && byte <= 122)) {
      output += String.fromCodePoint(byte);
    } else {
      output += percentEncode(byte);
    }
  }
  return output;
}

function serializeUrlencoded(tuples, encodingOverride = undefined) {
  let encoding = "utf-8";
  if (encodingOverride !== undefined) {
    encoding = encodingOverride;
  }

  let output = "";
  for (const [i, tuple] of tuples.entries()) {
    // TODO: handle encoding override
    const name = serializeUrlencodedByte(Buffer.from(tuple[0]));
    let value = tuple[1];
    if (tuple.length > 2 && tuple[2] !== undefined) {
      if (tuple[2] === "hidden" && name === "_charset_") {
        value = encoding;
      } else if (tuple[2] === "file") {
        // value is a File object
        value = value.name;
      }
    }
    value = serializeUrlencodedByte(Buffer.from(value));
    if (i !== 0) {
      output += "&";
    }
    output += `${name}=${value}`;
  }
  return output;
}

module.exports = {
  percentEncode,
  percentDecode,

  // application/x-www-form-urlencoded string parser
  parseUrlencoded(input) {
    return parseUrlencoded(Buffer.from(input));
  },

  // application/x-www-form-urlencoded serializer
  serializeUrlencoded
};
