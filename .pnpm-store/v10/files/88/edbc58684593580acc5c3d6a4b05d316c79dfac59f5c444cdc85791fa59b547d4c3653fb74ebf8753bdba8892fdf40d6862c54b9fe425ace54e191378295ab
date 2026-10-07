/*!
 * Copyright (c) 2015-2020, Salesforce.com, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of Salesforce.com nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";
const punycode = require("punycode/");
const urlParse = require("url-parse");
const pubsuffix = require("./pubsuffix-psl");
const Store = require("./store").Store;
const MemoryCookieStore = require("./memstore").MemoryCookieStore;
const pathMatch = require("./pathMatch").pathMatch;
const validators = require("./validators.js");
const VERSION = require("./version");
const { fromCallback } = require("universalify");
const { getCustomInspectSymbol } = require("./utilHelper");

// From RFC6265 S4.1.1
// note that it excludes \x3B ";"
const COOKIE_OCTETS = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/;

const CONTROL_CHARS = /[\x00-\x1F]/;

// From Chromium // '\r', '\n' and '\0' should be treated as a terminator in
// the "relaxed" mode, see:
// https://github.com/ChromiumWebApps/chromium/blob/b3d3b4da8bb94c1b2e061600df106d590fda3620/net/cookies/parsed_cookie.cc#L60
const TERMINATORS = ["\n", "\r", "\0"];

// RFC6265 S4.1.1 defines path value as 'any CHAR except CTLs or ";"'
// Note ';' is \x3B
const PATH_VALUE = /[\x20-\x3A\x3C-\x7E]+/;

// date-time parsing constants (RFC6265 S5.1.1)

const DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;

const MONTH_TO_NUM = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};

const MAX_TIME = 2147483647000; // 31-bit max
const MIN_TIME = 0; // 31-bit min
const SAME_SITE_CONTEXT_VAL_ERR =
  'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';

function checkSameSiteContext(value) {
  validators.validate(validators.isNonEmptyString(value), value);
  const context = String(value).toLowerCase();
  if (context === "none" || context === "lax" || context === "strict") {
    return context;
  } else {
    return null;
  }
}

const PrefixSecurityEnum = Object.freeze({
  SILENT: "silent",
  STRICT: "strict",
  DISABLED: "unsafe-disabled"
});

// Dumped from ip-regex@4.0.0, with the following changes:
// * all capturing groups converted to non-capturing -- "(?:)"
// * support for IPv6 Scoped Literal ("%eth1") removed
// * lowercase hexadecimal only
const IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
const IP_V6_REGEX = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`
  .replace(/\s*\/\/.*$/gm, "")
  .replace(/\n/g, "")
  .trim();
const IP_V6_REGEX_OBJECT = new RegExp(`^${IP_V6_REGEX}$`);

/*
 * Parses a Natural number (i.e., non-negative integer) with either the
 *    <min>*<max>DIGIT ( non-digit *OCTET )
 * or
 *    <min>*<max>DIGIT
 * grammar (RFC6265 S5.1.1).
 *
 * The "trailingOK" boolean controls if the grammar accepts a
 * "( non-digit *OCTET )" trailer.
 */
function parseDigits(token, minDigits, maxDigits, trailingOK) {
  let count = 0;
  while (count < token.length) {
    const c = token.charCodeAt(count);
    // "non-digit = %x00-2F / %x3A-FF"
    if (c <= 0x2f || c >= 0x3a) {
      break;
    }
    count++;
  }

  // constrain to a minimum and maximum number of digits.
  if (count < minDigits || count > maxDigits) {
    return null;
  }

  if (!trailingOK && count != token.length) {
    return null;
  }

  return parseInt(token.substr(0, count), 10);
}

function parseTime(token) {
  const parts = token.split(":");
  const result = [0, 0, 0];

  /* RF6256 S5.1.1:
   *      time            = hms-time ( non-digit *OCTET )
   *      hms-time        = time-field ":" time-field ":" time-field
   *      time-field      = 1*2DIGIT
   */

  if (parts.length !== 3) {
    return null;
  }

  for (let i = 0; i < 3; i++) {
    // "time-field" must be strictly "1*2DIGIT", HOWEVER, "hms-time" can be
    // followed by "( non-digit *OCTET )" so therefore the last time-field can
    // have a trailer
    const trailingOK = i == 2;
    const num = parseDigits(parts[i], 1, 2, trailingOK);
    if (num === null) {
      return null;
    }
    result[i] = num;
  }

  return result;
}

function parseMonth(token) {
  token = String(token)
    .substr(0, 3)
    .toLowerCase();
  const num = MONTH_TO_NUM[token];
  return num >= 0 ? num : null;
}

/*
 * RFC6265 S5.1.1 date parser (see RFC for full grammar)
 */
function parseDate(str) {
  if (!str) {
    return;
  }

  /* RFC6265 S5.1.1:
   * 2. Process each date-token sequentially in the order the date-tokens
   * appear in the cookie-date
   */
  const tokens = str.split(DATE_DELIM);
  if (!tokens) {
    return;
  }

  let hour = null;
  let minute = null;
  let second = null;
  let dayOfMonth = null;
  let month = null;
  let year = null;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim();
    if (!token.length) {
      continue;
    }

    let result;

    /* 2.1. If the found-time flag is not set and the token matches the time
     * production, set the found-time flag and set the hour- value,
     * minute-value, and second-value to the numbers denoted by the digits in
     * the date-token, respectively.  Skip the remaining sub-steps and continue
     * to the next date-token.
     */
    if (second === null) {
      result = parseTime(token);
      if (result) {
        hour = result[0];
        minute = result[1];
        second = result[2];
        continue;
      }
    }

    /* 2.2. If the found-day-of-month flag is not set and the date-token matches
     * the day-of-month production, set the found-day-of- month flag and set
     * the day-of-month-value to the number denoted by the date-token.  Skip
     * the remaining sub-steps and continue to the next date-token.
     */
    if (dayOfMonth === null) {
      // "day-of-month = 1*2DIGIT ( non-digit *OCTET )"
      result = parseDigits(token, 1, 2, true);
      if (result !== null) {
        dayOfMonth = result;
        continue;
      }
    }

    /* 2.3. If the found-month flag is not set and the date-token matches the
     * month production, set the found-month flag and set the month-value to
     * the month denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */
    if (month === null) {
      result = parseMonth(token);
      if (result !== null) {
        month = result;
        continue;
      }
    }

    /* 2.4. If the found-year flag is not set and the date-token matches the
     * year production, set the found-year flag and set the year-value to the
     * number denoted by the date-token.  Skip the remaining sub-steps and
     * continue to the next date-token.
     */
    if (year === null) {
      // "year = 2*4DIGIT ( non-digit *OCTET )"
      result = parseDigits(token, 2, 4, true);
      if (result !== null) {
        year = result;
        /* From S5.1.1:
         * 3.  If the year-value is greater than or equal to 70 and less
         * than or equal to 99, increment the year-value by 1900.
         * 4.  If the year-value is greater than or equal to 0 and less
         * than or equal to 69, increment the year-value by 2000.
         */
        if (year >= 70 && year <= 99) {
          year += 1900;
        } else if (year >= 0 && year <= 69) {
          year += 2000;
        }
      }
    }
  }

  /* RFC 6265 S5.1.1
   * "5. Abort these steps and fail to parse the cookie-date if:
   *     *  at least one of the found-day-of-month, found-month, found-
   *        year, or found-time flags is not set,
   *     *  the day-of-month-value is less than 1 or greater than 31,
   *     *  the year-value is less than 1601,
   *     *  the hour-value is greater than 23,
   *     *  the minute-value is greater than 59, or
   *     *  the second-value is greater than 59.
   *     (Note that leap seconds cannot be represented in this syntax.)"
   *
   * So, in order as above:
   */
  if (
    dayOfMonth === null ||
    month === null ||
    year === null ||
    second === null ||
    dayOfMonth < 1 ||
    dayOfMonth > 31 ||
    year < 1601 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return;
  }

  return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
}

function formatDate(date) {
  validators.validate(validators.isDate(date), date);
  return date.toUTCString();
}

// S5.1.2 Canonicalized Host Names
function canonicalDomain(str) {
  if (str == null) {
    return null;
  }
  str = str.trim().replace(/^\./, ""); // S4.1.2.3 & S5.2.3: ignore leading .

  if (IP_V6_REGEX_OBJECT.test(str)) {
    str = str.replace("[", "").replace("]", "");
  }

  // convert to IDN if any non-ASCII characters
  if (punycode && /[^\u0001-\u007f]/.test(str)) {
    str = punycode.toASCII(str);
  }

  return str.toLowerCase();
}

// S5.1.3 Domain Matching
function domainMatch(str, domStr, canonicalize) {
  if (str == null || domStr == null) {
    return null;
  }
  if (canonicalize !== false) {
    str = canonicalDomain(str);
    domStr = canonicalDomain(domStr);
  }

  /*
   * S5.1.3:
   * "A string domain-matches a given domain string if at least one of the
   * following conditions hold:"
   *
   * " o The domain string and the string are identical. (Note that both the
   * domain string and the string will have been canonicalized to lower case at
   * this point)"
   */
  if (str == domStr) {
    return true;
  }

  /* " o All of the following [three] conditions hold:" */

  /* "* The domain string is a suffix of the string" */
  const idx = str.lastIndexOf(domStr);
  if (idx <= 0) {
    return false; // it's a non-match (-1) or prefix (0)
  }

  // next, check it's a proper suffix
  // e.g., "a.b.c".indexOf("b.c") === 2
  // 5 === 3+2
  if (str.length !== domStr.length + idx) {
    return false; // it's not a suffix
  }

  /* "  * The last character of the string that is not included in the
   * domain string is a %x2E (".") character." */
  if (str.substr(idx - 1, 1) !== ".") {
    return false; // doesn't align on "."
  }

  /* "  * The string is a host name (i.e., not an IP address)." */
  if (IP_REGEX_LOWERCASE.test(str)) {
    return false; // it's an IP address
  }

  return true;
}

// RFC6265 S5.1.4 Paths and Path-Match

/*
 * "The user agent MUST use an algorithm equivalent to the following algorithm
 * to compute the default-path of a cookie:"
 *
 * Assumption: the path (and not query part or absolute uri) is passed in.
 */
function defaultPath(path) {
  // "2. If the uri-path is empty or if the first character of the uri-path is not
  // a %x2F ("/") character, output %x2F ("/") and skip the remaining steps.
  if (!path || path.substr(0, 1) !== "/") {
    return "/";
  }

  // "3. If the uri-path contains no more than one %x2F ("/") character, output
  // %x2F ("/") and skip the remaining step."
  if (path === "/") {
    return path;
  }

  const rightSlash = path.lastIndexOf("/");
  if (rightSlash === 0) {
    return "/";
  }

  // "4. Output the characters of the uri-path from the first character up to,
  // but not including, the right-most %x2F ("/")."
  return path.slice(0, rightSlash);
}

function trimTerminator(str) {
  if (validators.isEmptyString(str)) return str;
  for (let t = 0; t < TERMINATORS.length; t++) {
    const terminatorIdx = str.indexOf(TERMINATORS[t]);
    if (terminatorIdx !== -1) {
      str = str.substr(0, terminatorIdx);
    }
  }

  return str;
}

function parseCookiePair(cookiePair, looseMode) {
  cookiePair = trimTerminator(cookiePair);
  validators.validate(validators.isString(cookiePair), cookiePair);

  let firstEq = cookiePair.indexOf("=");
  if (looseMode) {
    if (firstEq === 0) {
      // '=' is immediately at start
      cookiePair = cookiePair.substr(1);
      firstEq = cookiePair.indexOf("="); // might still need to split on '='
    }
  } else {
    // non-loose mode
    if (firstEq <= 0) {
      // no '=' or is at start
      return; // needs to have non-empty "cookie-name"
    }
  }

  let cookieName, cookieValue;
  if (firstEq <= 0) {
    cookieName = "";
    cookieValue = cookiePair.trim();
  } else {
    cookieName = cookiePair.substr(0, firstEq).trim();
    cookieValue = cookiePair.substr(firstEq + 1).trim();
  }

  if (CONTROL_CHARS.test(cookieName) || CONTROL_CHARS.test(cookieValue)) {
    return;
  }

  const c = new Cookie();
  c.key = cookieName;
  c.value = cookieValue;
  return c;
}

function parse(str, options) {
  if (!options || typeof options !== "object") {
    options = {};
  }

  if (validators.isEmptyString(str) || !validators.isString(str)) {
    return null;
  }

  str = str.trim();

  // We use a regex to parse the "name-value-pair" part of S5.2
  const firstSemi = str.indexOf(";"); // S5.2 step 1
  const cookiePair = firstSemi === -1 ? str : str.substr(0, firstSemi);
  const c = parseCookiePair(cookiePair, !!options.loose);
  if (!c) {
    return;
  }

  if (firstSemi === -1) {
    return c;
  }

  // S5.2.3 "unparsed-attributes consist of the remainder of the set-cookie-string
  // (including the %x3B (";") in question)." plus later on in the same section
  // "discard the first ";" and trim".
  const unparsed = str.slice(firstSemi + 1).trim();

  // "If the unparsed-attributes string is empty, skip the rest of these
  // steps."
  if (unparsed.length === 0) {
    return c;
  }

  /*
   * S5.2 says that when looping over the items "[p]rocess the attribute-name
   * and attribute-value according to the requirements in the following
   * subsections" for every item.  Plus, for many of the individual attributes
   * in S5.3 it says to use the "attribute-value of the last attribute in the
   * cookie-attribute-list".  Therefore, in this implementation, we overwrite
   * the previous value.
   */
  const cookie_avs = unparsed.split(";");
  while (cookie_avs.length) {
    const av = cookie_avs.shift().trim();
    if (av.length === 0) {
      // happens if ";;" appears
      continue;
    }
    const av_sep = av.indexOf("=");
    let av_key, av_value;

    if (av_sep === -1) {
      av_key = av;
      av_value = null;
    } else {
      av_key = av.substr(0, av_sep);
      av_value = av.substr(av_sep + 1);
    }

    av_key = av_key.trim().toLowerCase();

    if (av_value) {
      av_value = av_value.trim();
    }

    switch (av_key) {
      case "expires": // S5.2.1
        if (av_value) {
          const exp = parseDate(av_value);
          // "If the attribute-value failed to parse as a cookie date, ignore the
          // cookie-av."
          if (exp) {
            // over and underflow not realistically a concern: V8's getTime() seems to
            // store something larger than a 32-bit time_t (even with 32-bit node)
            c.expires = exp;
          }
        }
        break;

      case "max-age": // S5.2.2
        if (av_value) {
          // "If the first character of the attribute-value is not a DIGIT or a "-"
          // character ...[or]... If the remainder of attribute-value contains a
          // non-DIGIT character, ignore the cookie-av."
          if (/^-?[0-9]+$/.test(av_value)) {
            const delta = parseInt(av_value, 10);
            // "If delta-seconds is less than or equal to zero (0), let expiry-time
            // be the earliest representable date and time."
            c.setMaxAge(delta);
          }
        }
        break;

      case "domain": // S5.2.3
        // "If the attribute-value is empty, the behavior is undefined.  However,
        // the user agent SHOULD ignore the cookie-av entirely."
        if (av_value) {
          // S5.2.3 "Let cookie-domain be the attribute-value without the leading %x2E
          // (".") character."
          const domain = av_value.trim().replace(/^\./, "");
          if (domain) {
            // "Convert the cookie-domain to lower case."
            c.domain = domain.toLowerCase();
          }
        }
        break;

      case "path": // S5.2.4
        /*
         * "If the attribute-value is empty or if the first character of the
         * attribute-value is not %x2F ("/"):
         *   Let cookie-path be the default-path.
         * Otherwise:
         *   Let cookie-path be the attribute-value."
         *
         * We'll represent the default-path as null since it depends on the
         * context of the parsing.
         */
        c.path = av_value && av_value[0] === "/" ? av_value : null;
        break;

      case "secure": // S5.2.5
        /*
         * "If the attribute-name case-insensitively matches the string "Secure",
         * the user agent MUST append an attribute to the cookie-attribute-list
         * with an attribute-name of Secure and an empty attribute-value."
         */
        c.secure = true;
        break;

      case "httponly": // S5.2.6 -- effectively the same as 'secure'
        c.httpOnly = true;
        break;

      case "samesite": // RFC6265bis-02 S5.3.7
        const enforcement = av_value ? av_value.toLowerCase() : "";
        switch (enforcement) {
          case "strict":
            c.sameSite = "strict";
            break;
          case "lax":
            c.sameSite = "lax";
            break;
          case "none":
            c.sameSite = "none";
            break;
          default:
            c.sameSite = undefined;
            break;
        }
        break;

      default:
        c.extensions = c.extensions || [];
        c.extensions.push(av);
        break;
    }
  }

  return c;
}

/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Secure-", abort these steps and ignore the cookie
 *  entirely unless the cookie's secure-only-flag is true.
 * @param cookie
 * @returns boolean
 */
function isSecurePrefixConditionMet(cookie) {
  validators.validate(validators.isObject(cookie), cookie);
  return !cookie.key.startsWith("__Secure-") || cookie.secure;
}

/**
 *  If the cookie-name begins with a case-sensitive match for the
 *  string "__Host-", abort these steps and ignore the cookie
 *  entirely unless the cookie meets all the following criteria:
 *    1.  The cookie's secure-only-flag is true.
 *    2.  The cookie's host-only-flag is true.
 *    3.  The cookie-attribute-list contains an attribute with an
 *        attribute-name of "Path", and the cookie's path is "/".
 * @param cookie
 * @returns boolean
 */
function isHostPrefixConditionMet(cookie) {
  validators.validate(validators.isObject(cookie));
  return (
    !cookie.key.startsWith("__Host-") ||
    (cookie.secure &&
      cookie.hostOnly &&
      cookie.path != null &&
      cookie.path === "/")
  );
}

// avoid the V8 deoptimization monster!
function jsonParse(str) {
  let obj;
  try {
    obj = JSON.parse(str);
  } catch (e) {
    return e;
  }
  return obj;
}

function fromJSON(str) {
  if (!str || validators.isEmptyString(str)) {
    return null;
  }

  let obj;
  if (typeof str === "string") {
    obj = jsonParse(str);
    if (obj instanceof Error) {
      return null;
    }
  } else {
    // assume it's an Object
    obj = str;
  }

  const c = new Cookie();
  for (let i = 0; i < Cookie.serializableProperties.length; i++) {
    const prop = Cookie.serializableProperties[i];
    if (obj[prop] === undefined || obj[prop] === cookieDefaults[prop]) {
      continue; // leave as prototype default
    }

    if (prop === "expires" || prop === "creation" || prop === "lastAccessed") {
      if (obj[prop] === null) {
        c[prop] = null;
      } else {
        c[prop] = obj[prop] == "Infinity" ? "Infinity" : new Date(obj[prop]);
      }
    } else {
      c[prop] = obj[prop];
    }
  }

  return c;
}

/* Section 5.4 part 2:
 * "*  Cookies with longer paths are listed before cookies with
 *     shorter paths.
 *
 *  *  Among cookies that have equal-length path fields, cookies with
 *     earlier creation-times are listed before cookies with later
 *     creation-times."
 */

function cookieCompare(a, b) {
  validators.validate(validators.isObject(a), a);
  validators.validate(validators.isObject(b), b);
  let cmp = 0;

  // descending for length: b CMP a
  const aPathLen = a.path ? a.path.length : 0;
  const bPathLen = b.path ? b.path.length : 0;
  cmp = bPathLen - aPathLen;
  if (cmp !== 0) {
    return cmp;
  }

  // ascending for time: a CMP b
  const aTime = a.creation ? a.creation.getTime() : MAX_TIME;
  const bTime = b.creation ? b.creation.getTime() : MAX_TIME;
  cmp = aTime - bTime;
  if (cmp !== 0) {
    return cmp;
  }

  // break ties for the same millisecond (precision of JavaScript's clock)
  cmp = a.creationIndex - b.creationIndex;

  return cmp;
}

// Gives the permutation of all possible pathMatch()es of a given path. The
// array is in longest-to-shortest order.  Handy for indexing.
function permutePath(path) {
  validators.validate(validators.isString(path));
  if (path === "/") {
    return ["/"];
  }
  const permutations = [path];
  while (path.length > 1) {
    const lindex = path.lastIndexOf("/");
    if (lindex === 0) {
      break;
    }
    path = path.substr(0, lindex);
    permutations.push(path);
  }
  permutations.push("/");
  return permutations;
}

function getCookieContext(url) {
  if (url instanceof Object) {
    return url;
  }
  // NOTE: decodeURI will throw on malformed URIs (see GH-32).
  // Therefore, we will just skip decoding for such URIs.
  try {
    url = decodeURI(url);
  } catch (err) {
    // Silently swallow error
  }

  return urlParse(url);
}

const cookieDefaults = {
  // the order in which the RFC has them:
  key: "",
  value: "",
  expires: "Infinity",
  maxAge: null,
  domain: null,
  path: null,
  secure: false,
  httpOnly: false,
  extensions: null,
  // set by the CookieJar:
  hostOnly: null,
  pathIsDefault: null,
  creation: null,
  lastAccessed: null,
  sameSite: undefined
};

class Cookie {
  constructor(options = {}) {
    const customInspectSymbol = getCustomInspectSymbol();
    if (customInspectSymbol) {
      this[customInspectSymbol] = this.inspect;
    }

    Object.assign(this, cookieDefaults, options);
    this.creation = this.creation || new Date();

    // used to break creation ties in cookieCompare():
    Object.defineProperty(this, "creationIndex", {
      configurable: false,
      enumerable: false, // important for assert.deepEqual checks
      writable: true,
      value: ++Cookie.cookiesCreated
    });
  }

  inspect() {
    const now = Date.now();
    const hostOnly = this.hostOnly != null ? this.hostOnly : "?";
    const createAge = this.creation
      ? `${now - this.creation.getTime()}ms`
      : "?";
    const accessAge = this.lastAccessed
      ? `${now - this.lastAccessed.getTime()}ms`
      : "?";
    return `Cookie="${this.toString()}; hostOnly=${hostOnly}; aAge=${accessAge}; cAge=${createAge}"`;
  }

  toJSON() {
    const obj = {};

    for (const prop of Cookie.serializableProperties) {
      if (this[prop] === cookieDefaults[prop]) {
        continue; // leave as prototype default
      }

      if (
        prop === "expires" ||
        prop === "creation" ||
        prop === "lastAccessed"
      ) {
        if (this[prop] === null) {
          obj[prop] = null;
        } else {
          obj[prop] =
            this[prop] == "Infinity" // intentionally not ===
              ? "Infinity"
              : this[prop].toISOString();
        }
      } else if (prop === "maxAge") {
        if (this[prop] !== null) {
          // again, intentionally not ===
          obj[prop] =
            this[prop] == Infinity || this[prop] == -Infinity
              ? this[prop].toString()
              : this[prop];
        }
      } else {
        if (this[prop] !== cookieDefaults[prop]) {
          obj[prop] = this[prop];
        }
      }
    }

    return obj;
  }

  clone() {
    return fromJSON(this.toJSON());
  }

  validate() {
    if (!COOKIE_OCTETS.test(this.value)) {
      return false;
    }
    if (
      this.expires != Infinity &&
      !(this.expires instanceof Date) &&
      !parseDate(this.expires)
    ) {
      return false;
    }
    if (this.maxAge != null && this.maxAge <= 0) {
      return false; // "Max-Age=" non-zero-digit *DIGIT
    }
    if (this.path != null && !PATH_VALUE.test(this.path)) {
      return false;
    }

    const cdomain = this.cdomain();
    if (cdomain) {
      if (cdomain.match(/\.$/)) {
        return false; // S4.1.2.3 suggests that this is bad. domainMatch() tests confirm this
      }
      const suffix = pubsuffix.getPublicSuffix(cdomain);
      if (suffix == null) {
        // it's a public suffix
        return false;
      }
    }
    return true;
  }

  setExpires(exp) {
    if (exp instanceof Date) {
      this.expires = exp;
    } else {
      this.expires = parseDate(exp) || "Infinity";
    }
  }

  setMaxAge(age) {
    if (age === Infinity || age === -Infinity) {
      this.maxAge = age.toString(); // so JSON.stringify() works
    } else {
      this.maxAge = age;
    }
  }

  cookieString() {
    let val = this.value;
    if (val == null) {
      val = "";
    }
    if (this.key === "") {
      return val;
    }
    return `${this.key}=${val}`;
  }

  // gives Set-Cookie header format
  toString() {
    let str = this.cookieString();

    if (this.expires != Infinity) {
      if (this.expires instanceof Date) {
        str += `; Expires=${formatDate(this.expires)}`;
      } else {
        str += `; Expires=${this.expires}`;
      }
    }

    if (this.maxAge != null && this.maxAge != Infinity) {
      str += `; Max-Age=${this.maxAge}`;
    }

    if (this.domain && !this.hostOnly) {
      str += `; Domain=${this.domain}`;
    }
    if (this.path) {
      str += `; Path=${this.path}`;
    }

    if (this.secure) {
      str += "; Secure";
    }
    if (this.httpOnly) {
      str += "; HttpOnly";
    }
    if (this.sameSite && this.sameSite !== "none") {
      const ssCanon = Cookie.sameSiteCanonical[this.sameSite.toLowerCase()];
      str += `; SameSite=${ssCanon ? ssCanon : this.sameSite}`;
    }
    if (this.extensions) {
      this.extensions.forEach(ext => {
        str += `; ${ext}`;
      });
    }

    return str;
  }

  // TTL() partially replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  // S5.3 says to give the "latest representable date" for which we use Infinity
  // For "expired" we use 0
  TTL(now) {
    /* RFC6265 S4.1.2.2 If a cookie has both the Max-Age and the Expires
     * attribute, the Max-Age attribute has precedence and controls the
     * expiration date of the cookie.
     * (Concurs with S5.3 step 3)
     */
    if (this.maxAge != null) {
      return this.maxAge <= 0 ? 0 : this.maxAge * 1000;
    }

    let expires = this.expires;
    if (expires != Infinity) {
      if (!(expires instanceof Date)) {
        expires = parseDate(expires) || Infinity;
      }

      if (expires == Infinity) {
        return Infinity;
      }

      return expires.getTime() - (now || Date.now());
    }

    return Infinity;
  }

  // expiryTime() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere)
  expiryTime(now) {
    if (this.maxAge != null) {
      const relativeTo = now || this.creation || new Date();
      const age = this.maxAge <= 0 ? -Infinity : this.maxAge * 1000;
      return relativeTo.getTime() + age;
    }

    if (this.expires == Infinity) {
      return Infinity;
    }
    return this.expires.getTime();
  }

  // expiryDate() replaces the "expiry-time" parts of S5.3 step 3 (setCookie()
  // elsewhere), except it returns a Date
  expiryDate(now) {
    const millisec = this.expiryTime(now);
    if (millisec == Infinity) {
      return new Date(MAX_TIME);
    } else if (millisec == -Infinity) {
      return new Date(MIN_TIME);
    } else {
      return new Date(millisec);
    }
  }

  // This replaces the "persistent-flag" parts of S5.3 step 3
  isPersistent() {
    return this.maxAge != null || this.expires != Infinity;
  }

  // Mostly S5.1.2 and S5.2.3:
  canonicalizedDomain() {
    if (this.domain == null) {
      return null;
    }
    return canonicalDomain(this.domain);
  }

  cdomain() {
    return this.canonicalizedDomain();
  }
}

Cookie.cookiesCreated = 0;
Cookie.parse = parse;
Cookie.fromJSON = fromJSON;
Cookie.serializableProperties = Object.keys(cookieDefaults);
Cookie.sameSiteLevel = {
  strict: 3,
  lax: 2,
  none: 1
};

Cookie.sameSiteCanonical = {
  strict: "Strict",
  lax: "Lax"
};

function getNormalizedPrefixSecurity(prefixSecurity) {
  if (prefixSecurity != null) {
    const normalizedPrefixSecurity = prefixSecurity.toLowerCase();
    /* The three supported options */
    switch (normalizedPrefixSecurity) {
      case PrefixSecurityEnum.STRICT:
      case PrefixSecurityEnum.SILENT:
      case PrefixSecurityEnum.DISABLED:
        return normalizedPrefixSecurity;
    }
  }
  /* Default is SILENT */
  return PrefixSecurityEnum.SILENT;
}

class CookieJar {
  constructor(store, options = { rejectPublicSuffixes: true }) {
    if (typeof options === "boolean") {
      options = { rejectPublicSuffixes: options };
    }
    validators.validate(validators.isObject(options), options);
    this.rejectPublicSuffixes = options.rejectPublicSuffixes;
    this.enableLooseMode = !!options.looseMode;
    this.allowSpecialUseDomain =
      typeof options.allowSpecialUseDomain === "boolean"
        ? options.allowSpecialUseDomain
        : true;
    this.store = store || new MemoryCookieStore();
    this.prefixSecurity = getNormalizedPrefixSecurity(options.prefixSecurity);
    this._cloneSync = syncWrap("clone");
    this._importCookiesSync = syncWrap("_importCookies");
    this.getCookiesSync = syncWrap("getCookies");
    this.getCookieStringSync = syncWrap("getCookieString");
    this.getSetCookieStringsSync = syncWrap("getSetCookieStrings");
    this.removeAllCookiesSync = syncWrap("removeAllCookies");
    this.setCookieSync = syncWrap("setCookie");
    this.serializeSync = syncWrap("serialize");
  }

  setCookie(cookie, url, options, cb) {
    validators.validate(validators.isUrlStringOrObject(url), cb, options);

    let err;

    if (validators.isFunction(url)) {
      cb = url;
      return cb(new Error("No URL was specified"));
    }

    const context = getCookieContext(url);
    if (validators.isFunction(options)) {
      cb = options;
      options = {};
    }

    validators.validate(validators.isFunction(cb), cb);

    if (
      !validators.isNonEmptyString(cookie) &&
      !validators.isObject(cookie) &&
      cookie instanceof String &&
      cookie.length == 0
    ) {
      return cb(null);
    }

    const host = canonicalDomain(context.hostname);
    const loose = options.loose || this.enableLooseMode;

    let sameSiteContext = null;
    if (options.sameSiteContext) {
      sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      if (!sameSiteContext) {
        return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }

    // S5.3 step 1
    if (typeof cookie === "string" || cookie instanceof String) {
      cookie = Cookie.parse(cookie, { loose: loose });
      if (!cookie) {
        err = new Error("Cookie failed to parse");
        return cb(options.ignoreError ? null : err);
      }
    } else if (!(cookie instanceof Cookie)) {
      // If you're seeing this error, and are passing in a Cookie object,
      // it *might* be a Cookie object from another loaded version of tough-cookie.
      err = new Error(
        "First argument to setCookie must be a Cookie object or string"
      );
      return cb(options.ignoreError ? null : err);
    }

    // S5.3 step 2
    const now = options.now || new Date(); // will assign later to save effort in the face of errors

    // S5.3 step 3: NOOP; persistent-flag and expiry-time is handled by getCookie()

    // S5.3 step 4: NOOP; domain is null by default

    // S5.3 step 5: public suffixes
    if (this.rejectPublicSuffixes && cookie.domain) {
      const suffix = pubsuffix.getPublicSuffix(cookie.cdomain(), {
        allowSpecialUseDomain: this.allowSpecialUseDomain,
        ignoreError: options.ignoreError
      });
      if (suffix == null && !IP_V6_REGEX_OBJECT.test(cookie.domain)) {
        // e.g. "com"
        err = new Error("Cookie has domain set to a public suffix");
        return cb(options.ignoreError ? null : err);
      }
    }

    // S5.3 step 6:
    if (cookie.domain) {
      if (!domainMatch(host, cookie.cdomain(), false)) {
        err = new Error(
          `Cookie not in this host's domain. Cookie:${cookie.cdomain()} Request:${host}`
        );
        return cb(options.ignoreError ? null : err);
      }

      if (cookie.hostOnly == null) {
        // don't reset if already set
        cookie.hostOnly = false;
      }
    } else {
      cookie.hostOnly = true;
      cookie.domain = host;
    }

    //S5.2.4 If the attribute-value is empty or if the first character of the
    //attribute-value is not %x2F ("/"):
    //Let cookie-path be the default-path.
    if (!cookie.path || cookie.path[0] !== "/") {
      cookie.path = defaultPath(context.pathname);
      cookie.pathIsDefault = true;
    }

    // S5.3 step 8: NOOP; secure attribute
    // S5.3 step 9: NOOP; httpOnly attribute

    // S5.3 step 10
    if (options.http === false && cookie.httpOnly) {
      err = new Error("Cookie is HttpOnly and this isn't an HTTP API");
      return cb(options.ignoreError ? null : err);
    }

    // 6252bis-02 S5.4 Step 13 & 14:
    if (
      cookie.sameSite !== "none" &&
      cookie.sameSite !== undefined &&
      sameSiteContext
    ) {
      // "If the cookie's "same-site-flag" is not "None", and the cookie
      //  is being set from a context whose "site for cookies" is not an
      //  exact match for request-uri's host's registered domain, then
      //  abort these steps and ignore the newly created cookie entirely."
      if (sameSiteContext === "none") {
        err = new Error(
          "Cookie is SameSite but this is a cross-origin request"
        );
        return cb(options.ignoreError ? null : err);
      }
    }

    /* 6265bis-02 S5.4 Steps 15 & 16 */
    const ignoreErrorForPrefixSecurity =
      this.prefixSecurity === PrefixSecurityEnum.SILENT;
    const prefixSecurityDisabled =
      this.prefixSecurity === PrefixSecurityEnum.DISABLED;
    /* If prefix checking is not disabled ...*/
    if (!prefixSecurityDisabled) {
      let errorFound = false;
      let errorMsg;
      /* Check secure prefix condition */
      if (!isSecurePrefixConditionMet(cookie)) {
        errorFound = true;
        errorMsg = "Cookie has __Secure prefix but Secure attribute is not set";
      } else if (!isHostPrefixConditionMet(cookie)) {
        /* Check host prefix condition */
        errorFound = true;
        errorMsg =
          "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'";
      }
      if (errorFound) {
        return cb(
          options.ignoreError || ignoreErrorForPrefixSecurity
            ? null
            : new Error(errorMsg)
        );
      }
    }

    const store = this.store;

    if (!store.updateCookie) {
      store.updateCookie = function(oldCookie, newCookie, cb) {
        this.putCookie(newCookie, cb);
      };
    }

    function withCookie(err, oldCookie) {
      if (err) {
        return cb(err);
      }

      const next = function(err) {
        if (err) {
          return cb(err);
        } else {
          cb(null, cookie);
        }
      };

      if (oldCookie) {
        // S5.3 step 11 - "If the cookie store contains a cookie with the same name,
        // domain, and path as the newly created cookie:"
        if (options.http === false && oldCookie.httpOnly) {
          // step 11.2
          err = new Error("old Cookie is HttpOnly and this isn't an HTTP API");
          return cb(options.ignoreError ? null : err);
        }
        cookie.creation = oldCookie.creation; // step 11.3
        cookie.creationIndex = oldCookie.creationIndex; // preserve tie-breaker
        cookie.lastAccessed = now;
        // Step 11.4 (delete cookie) is implied by just setting the new one:
        store.updateCookie(oldCookie, cookie, next); // step 12
      } else {
        cookie.creation = cookie.lastAccessed = now;
        store.putCookie(cookie, next); // step 12
      }
    }

    store.findCookie(cookie.domain, cookie.path, cookie.key, withCookie);
  }

  // RFC6365 S5.4
  getCookies(url, options, cb) {
    validators.validate(validators.isUrlStringOrObject(url), cb, url);

    const context = getCookieContext(url);
    if (validators.isFunction(options)) {
      cb = options;
      options = {};
    }
    validators.validate(validators.isObject(options), cb, options);
    validators.validate(validators.isFunction(cb), cb);

    const host = canonicalDomain(context.hostname);
    const path = context.pathname || "/";

    let secure = options.secure;
    if (
      secure == null &&
      context.protocol &&
      (context.protocol == "https:" || context.protocol == "wss:")
    ) {
      secure = true;
    }

    let sameSiteLevel = 0;
    if (options.sameSiteContext) {
      const sameSiteContext = checkSameSiteContext(options.sameSiteContext);
      sameSiteLevel = Cookie.sameSiteLevel[sameSiteContext];
      if (!sameSiteLevel) {
        return cb(new Error(SAME_SITE_CONTEXT_VAL_ERR));
      }
    }

    let http = options.http;
    if (http == null) {
      http = true;
    }

    const now = options.now || Date.now();
    const expireCheck = options.expire !== false;
    const allPaths = !!options.allPaths;
    const store = this.store;

    function matchingCookie(c) {
      // "Either:
      //   The cookie's host-only-flag is true and the canonicalized
      //   request-host is identical to the cookie's domain.
      // Or:
      //   The cookie's host-only-flag is false and the canonicalized
      //   request-host domain-matches the cookie's domain."
      if (c.hostOnly) {
        if (c.domain != host) {
          return false;
        }
      } else {
        if (!domainMatch(host, c.domain, false)) {
          return false;
        }
      }

      // "The request-uri's path path-matches the cookie's path."
      if (!allPaths && !pathMatch(path, c.path)) {
        return false;
      }

      // "If the cookie's secure-only-flag is true, then the request-uri's
      // scheme must denote a "secure" protocol"
      if (c.secure && !secure) {
        return false;
      }

      // "If the cookie's http-only-flag is true, then exclude the cookie if the
      // cookie-string is being generated for a "non-HTTP" API"
      if (c.httpOnly && !http) {
        return false;
      }

      // RFC6265bis-02 S5.3.7
      if (sameSiteLevel) {
        const cookieLevel = Cookie.sameSiteLevel[c.sameSite || "none"];
        if (cookieLevel > sameSiteLevel) {
          // only allow cookies at or below the request level
          return false;
        }
      }

      // deferred from S5.3
      // non-RFC: allow retention of expired cookies by choice
      if (expireCheck && c.expiryTime() <= now) {
        store.removeCookie(c.domain, c.path, c.key, () => {}); // result ignored
        return false;
      }

      return true;
    }

    store.findCookies(
      host,
      allPaths ? null : path,
      this.allowSpecialUseDomain,
      (err, cookies) => {
        if (err) {
          return cb(err);
        }

        cookies = cookies.filter(matchingCookie);

        // sorting of S5.4 part 2
        if (options.sort !== false) {
          cookies = cookies.sort(cookieCompare);
        }

        // S5.4 part 3
        const now = new Date();
        for (const cookie of cookies) {
          cookie.lastAccessed = now;
        }
        // TODO persist lastAccessed

        cb(null, cookies);
      }
    );
  }

  getCookieString(...args) {
    const cb = args.pop();
    validators.validate(validators.isFunction(cb), cb);
    const next = function(err, cookies) {
      if (err) {
        cb(err);
      } else {
        cb(
          null,
          cookies
            .sort(cookieCompare)
            .map(c => c.cookieString())
            .join("; ")
        );
      }
    };
    args.push(next);
    this.getCookies.apply(this, args);
  }

  getSetCookieStrings(...args) {
    const cb = args.pop();
    validators.validate(validators.isFunction(cb), cb);
    const next = function(err, cookies) {
      if (err) {
        cb(err);
      } else {
        cb(
          null,
          cookies.map(c => {
            return c.toString();
          })
        );
      }
    };
    args.push(next);
    this.getCookies.apply(this, args);
  }

  serialize(cb) {
    validators.validate(validators.isFunction(cb), cb);
    let type = this.store.constructor.name;
    if (validators.isObject(type)) {
      type = null;
    }

    // update README.md "Serialization Format" if you change this, please!
    const serialized = {
      // The version of tough-cookie that serialized this jar. Generally a good
      // practice since future versions can make data import decisions based on
      // known past behavior. When/if this matters, use `semver`.
      version: `tough-cookie@${VERSION}`,

      // add the store type, to make humans happy:
      storeType: type,

      // CookieJar configuration:
      rejectPublicSuffixes: !!this.rejectPublicSuffixes,
      enableLooseMode: !!this.enableLooseMode,
      allowSpecialUseDomain: !!this.allowSpecialUseDomain,
      prefixSecurity: getNormalizedPrefixSecurity(this.prefixSecurity),

      // this gets filled from getAllCookies:
      cookies: []
    };

    if (
      !(
        this.store.getAllCookies &&
        typeof this.store.getAllCookies === "function"
      )
    ) {
      return cb(
        new Error(
          "store does not support getAllCookies and cannot be serialized"
        )
      );
    }

    this.store.getAllCookies((err, cookies) => {
      if (err) {
        return cb(err);
      }

      serialized.cookies = cookies.map(cookie => {
        // convert to serialized 'raw' cookies
        cookie = cookie instanceof Cookie ? cookie.toJSON() : cookie;

        // Remove the index so new ones get assigned during deserialization
        delete cookie.creationIndex;

        return cookie;
      });

      return cb(null, serialized);
    });
  }

  toJSON() {
    return this.serializeSync();
  }

  // use the class method CookieJar.deserialize instead of calling this directly
  _importCookies(serialized, cb) {
    let cookies = serialized.cookies;
    if (!cookies || !Array.isArray(cookies)) {
      return cb(new Error("serialized jar has no cookies array"));
    }
    cookies = cookies.slice(); // do not modify the original

    const putNext = err => {
      if (err) {
        return cb(err);
      }

      if (!cookies.length) {
        return cb(err, this);
      }

      let cookie;
      try {
        cookie = fromJSON(cookies.shift());
      } catch (e) {
        return cb(e);
      }

      if (cookie === null) {
        return putNext(null); // skip this cookie
      }

      this.store.putCookie(cookie, putNext);
    };

    putNext();
  }

  clone(newStore, cb) {
    if (arguments.length === 1) {
      cb = newStore;
      newStore = null;
    }

    this.serialize((err, serialized) => {
      if (err) {
        return cb(err);
      }
      CookieJar.deserialize(serialized, newStore, cb);
    });
  }

  cloneSync(newStore) {
    if (arguments.length === 0) {
      return this._cloneSync();
    }
    if (!newStore.synchronous) {
      throw new Error(
        "CookieJar clone destination store is not synchronous; use async API instead."
      );
    }
    return this._cloneSync(newStore);
  }

  removeAllCookies(cb) {
    validators.validate(validators.isFunction(cb), cb);
    const store = this.store;

    // Check that the store implements its own removeAllCookies(). The default
    // implementation in Store will immediately call the callback with a "not
    // implemented" Error.
    if (
      typeof store.removeAllCookies === "function" &&
      store.removeAllCookies !== Store.prototype.removeAllCookies
    ) {
      return store.removeAllCookies(cb);
    }

    store.getAllCookies((err, cookies) => {
      if (err) {
        return cb(err);
      }

      if (cookies.length === 0) {
        return cb(null);
      }

      let completedCount = 0;
      const removeErrors = [];

      function removeCookieCb(removeErr) {
        if (removeErr) {
          removeErrors.push(removeErr);
        }

        completedCount++;

        if (completedCount === cookies.length) {
          return cb(removeErrors.length ? removeErrors[0] : null);
        }
      }

      cookies.forEach(cookie => {
        store.removeCookie(
          cookie.domain,
          cookie.path,
          cookie.key,
          removeCookieCb
        );
      });
    });
  }

  static deserialize(strOrObj, store, cb) {
    if (arguments.length !== 3) {
      // store is optional
      cb = store;
      store = null;
    }
    validators.validate(validators.isFunction(cb), cb);

    let serialized;
    if (typeof strOrObj === "string") {
      serialized = jsonParse(strOrObj);
      if (serialized instanceof Error) {
        return cb(serialized);
      }
    } else {
      serialized = strOrObj;
    }

    const jar = new CookieJar(store, {
      rejectPublicSuffixes: serialized.rejectPublicSuffixes,
      looseMode: serialized.enableLooseMode,
      allowSpecialUseDomain: serialized.allowSpecialUseDomain,
      prefixSecurity: serialized.prefixSecurity
    });
    jar._importCookies(serialized, err => {
      if (err) {
        return cb(err);
      }
      cb(null, jar);
    });
  }

  static deserializeSync(strOrObj, store) {
    const serialized =
      typeof strOrObj === "string" ? JSON.parse(strOrObj) : strOrObj;
    const jar = new CookieJar(store, {
      rejectPublicSuffixes: serialized.rejectPublicSuffixes,
      looseMode: serialized.enableLooseMode
    });

    // catch this mistake early:
    if (!jar.store.synchronous) {
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    }

    jar._importCookiesSync(serialized);
    return jar;
  }
}
CookieJar.fromJSON = CookieJar.deserializeSync;

[
  "_importCookies",
  "clone",
  "getCookies",
  "getCookieString",
  "getSetCookieStrings",
  "removeAllCookies",
  "serialize",
  "setCookie"
].forEach(name => {
  CookieJar.prototype[name] = fromCallback(CookieJar.prototype[name]);
});
CookieJar.deserialize = fromCallback(CookieJar.deserialize);

// Use a closure to provide a true imperative API for synchronous stores.
function syncWrap(method) {
  return function(...args) {
    if (!this.store.synchronous) {
      throw new Error(
        "CookieJar store is not synchronous; use async API instead."
      );
    }

    let syncErr, syncResult;
    this[method](...args, (err, result) => {
      syncErr = err;
      syncResult = result;
    });

    if (syncErr) {
      throw syncErr;
    }
    return syncResult;
  };
}

exports.version = VERSION;
exports.CookieJar = CookieJar;
exports.Cookie = Cookie;
exports.Store = Store;
exports.MemoryCookieStore = MemoryCookieStore;
exports.parseDate = parseDate;
exports.formatDate = formatDate;
exports.parse = parse;
exports.fromJSON = fromJSON;
exports.domainMatch = domainMatch;
exports.defaultPath = defaultPath;
exports.pathMatch = pathMatch;
exports.getPublicSuffix = pubsuffix.getPublicSuffix;
exports.cookieCompare = cookieCompare;
exports.permuteDomain = require("./permuteDomain").permuteDomain;
exports.permutePath = permutePath;
exports.canonicalDomain = canonicalDomain;
exports.PrefixSecurityEnum = PrefixSecurityEnum;
exports.ParameterError = validators.ParameterError;
