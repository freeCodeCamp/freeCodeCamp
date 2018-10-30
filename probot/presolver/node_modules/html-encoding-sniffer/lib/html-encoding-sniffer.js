"use strict";
const whatwgEncoding = require("whatwg-encoding");

// https://html.spec.whatwg.org/#encoding-sniffing-algorithm
module.exports = function sniffHTMLEncoding(buffer, options) {
  let encoding = whatwgEncoding.getBOMEncoding(buffer); // see https://github.com/whatwg/html/issues/1910

  if (options === undefined) {
    options = {};
  }

  if (encoding === null && options.transportLayerEncodingLabel !== undefined) {
    encoding = whatwgEncoding.labelToName(options.transportLayerEncodingLabel);
  }

  if (encoding === null) {
    encoding = prescanMetaCharset(buffer);
  }

  if (encoding === null && options.defaultEncoding !== undefined) {
    encoding = options.defaultEncoding;
  }

  if (encoding === null) {
    encoding = "windows-1252";
  }

  return encoding;
};

// https://html.spec.whatwg.org/multipage/syntax.html#prescan-a-byte-stream-to-determine-its-encoding
function prescanMetaCharset(buffer) {
  const l = Math.min(buffer.length, 1024);
  for (let i = 0; i < l; i++) {
    let c = buffer[i];
    if (c === 0x3C) {
      // "<"
      let c1 = buffer[i + 1];
      let c2 = buffer[i + 2];
      const c3 = buffer[i + 3];
      const c4 = buffer[i + 4];
      const c5 = buffer[i + 5];
      // !-- (comment start)
      if (c1 === 0x21 && c2 === 0x2D && c3 === 0x2D) {
        i += 4;
        for (; i < l; i++) {
          c = buffer[i];
          c1 = buffer[i + 1];
          c2 = buffer[i + 2];
          // --> (comment end)
          if (c === 0x2D && c1 === 0x2D && c2 === 0x3E) {
            i += 2;
            break;
          }
        }
      } else if ((c1 === 0x4D || c1 === 0x6D) &&
         (c2 === 0x45 || c2 === 0x65) &&
         (c3 === 0x54 || c3 === 0x74) &&
         (c4 === 0x41 || c4 === 0x61) &&
         (isSpaceCharacter(c5) || c5 === 0x2F)) {
        // "meta" + space or /
        i += 6;
        let gotPragma = false;
        let needPragma = null;
        let charset = null;

        let attrRes;
        do {
          attrRes = getAttribute(buffer, i, l);
          if (attrRes.attr) {
            if (attrRes.attr.name === "http-equiv") {
              gotPragma = attrRes.attr.value === "content-type";
            } else if (attrRes.attr.name === "content" && !charset) {
              charset = extractCharacterEncodingFromMeta(attrRes.attr.value);
              if (charset !== null) {
                needPragma = true;
              }
            } else if (attrRes.attr.name === "charset") {
              charset = whatwgEncoding.labelToName(attrRes.attr.value);
              needPragma = false;
            }
          }
          i = attrRes.i;
        } while (attrRes.attr);

        if (needPragma === null) {
          continue;
        }
        if (needPragma === true && gotPragma === false) {
          continue;
        }
        if (charset === null) {
          continue;
        }

        if (charset === "UTF-16LE" || charset === "UTF-16BE") {
          charset = "UTF-8";
        }
        if (charset === "x-user-defined") {
          charset = "windows-1252";
        }

        return charset;
      } else if ((c1 >= 0x41 && c1 <= 0x5A) || (c1 >= 0x61 && c1 <= 0x7A)) {
        // a-z or A-Z
        for (i += 2; i < l; i++) {
          c = buffer[i];
          // space or >
          if (isSpaceCharacter(c) || c === 0x3E) {
            break;
          }
        }
        let attrRes;
        do {
          attrRes = getAttribute(buffer, i, l);
          i = attrRes.i;
        } while (attrRes.attr);
      } else if (c1 === 0x21 || c1 === 0x2F || c1 === 0x3F) {
        // ! or / or ?
        for (i += 2; i < l; i++) {
          c = buffer[i];
          // >
          if (c === 0x3E) {
            break;
          }
        }
      }
    }
  }
  return null;
}

// https://html.spec.whatwg.org/multipage/syntax.html#concept-get-attributes-when-sniffing
function getAttribute(buffer, i, l) {
  for (; i < l; i++) {
    let c = buffer[i];
    // space or /
    if (isSpaceCharacter(c) || c === 0x2F) {
      continue;
    }
    // ">"
    if (c === 0x3E) {
      i++;
      break;
    }
    let name = "";
    let value = "";
    nameLoop:for (; i < l; i++) {
      c = buffer[i];
      // "="
      if (c === 0x3D && name !== "") {
        i++;
        break;
      }
      // space
      if (isSpaceCharacter(c)) {
        for (i++; i < l; i++) {
          c = buffer[i];
          // space
          if (isSpaceCharacter(c)) {
            continue;
          }
          // not "="
          if (c !== 0x3D) {
            return { attr: { name, value }, i };
          }

          i++;
          break nameLoop;
        }
        break;
      }
      // / or >
      if (c === 0x2F || c === 0x3E) {
        return { attr: { name, value }, i };
      }
      // A-Z
      if (c >= 0x41 && c <= 0x5A) {
        name += String.fromCharCode(c + 0x20); // lowercase
      } else {
        name += String.fromCharCode(c);
      }
    }
    c = buffer[i];
    // space
    if (isSpaceCharacter(c)) {
      for (i++; i < l; i++) {
        c = buffer[i];
        // space
        if (isSpaceCharacter(c)) {
          continue;
        } else {
          break;
        }
      }
    }
    // " or '
    if (c === 0x22 || c === 0x27) {
      const quote = c;
      for (i++; i < l; i++) {
        c = buffer[i];

        if (c === quote) {
          i++;
          return { attr: { name, value }, i };
        }

        // A-Z
        if (c >= 0x41 && c <= 0x5A) {
          value += String.fromCharCode(c + 0x20); // lowercase
        } else {
          value += String.fromCharCode(c);
        }
      }
    }

    // >
    if (c === 0x3E) {
      return { attr: { name, value }, i };
    }

    // A-Z
    if (c >= 0x41 && c <= 0x5A) {
      value += String.fromCharCode(c + 0x20); // lowercase
    } else {
      value += String.fromCharCode(c);
    }

    for (i++; i < l; i++) {
      c = buffer[i];

      // space or >
      if (isSpaceCharacter(c) || c === 0x3E) {
        return { attr: { name, value }, i };
      }

      // A-Z
      if (c >= 0x41 && c <= 0x5A) {
        value += String.fromCharCode(c + 0x20); // lowercase
      } else {
        value += String.fromCharCode(c);
      }
    }
  }
  return { i };
}

function extractCharacterEncodingFromMeta(string) {
  let position = 0;

  while (true) {
    let subPosition = string.substring(position).search(/charset/i);

    if (subPosition === -1) {
      return null;
    }
    subPosition += "charset".length;

    while (isSpaceCharacter(string[subPosition].charCodeAt(0))) {
      ++subPosition;
    }

    if (string[subPosition] !== "=") {
      position = subPosition - 1;
      continue;
    }

    ++subPosition;

    while (isSpaceCharacter(string[subPosition].charCodeAt(0))) {
      ++subPosition;
    }

    position = subPosition;
    break;
  }

  if (string[position] === "\"" || string[position] === "'") {
    const nextIndex = string.indexOf(string[position], position + 1);

    if (nextIndex !== -1) {
      return whatwgEncoding.labelToName(string.substring(position + 1, nextIndex));
    }

    // It is an unmatched quotation mark
    return null;
  }

  if (string.length === position + 1) {
    return null;
  }

  let end = string.substring(position + 1).search(/\x09|\x0A|\x0C|\x0D|\x20|;/);
  if (end === -1) {
    end = string.length;
  }
  return whatwgEncoding.labelToName(string.substring(position, end));
}

function isSpaceCharacter(c) {
  return c === 0x09 || c === 0x0A || c === 0x0C || c === 0x0D || c === 0x20;
}
