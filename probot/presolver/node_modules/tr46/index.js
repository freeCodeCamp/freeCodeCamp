"use strict";

const punycode = require("punycode");
const regexes = require("./lib/regexes.js");
const mappingTable = require("./lib/mappingTable.json");

function containsNonASCII(str) {
  return /[^\x00-\x7F]/.test(str);
}

function findStatus(val, { useSTD3ASCIIRules }) {
  let start = 0;
  let end = mappingTable.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    const target = mappingTable[mid];
    if (target[0][0] <= val && target[0][1] >= val) {
      if (target[1].startsWith("disallowed_STD3_")) {
        const newStatus = useSTD3ASCIIRules ? "disallowed" : target[1].slice(16);
        return [newStatus, ...target.slice(2)];
      }
      return target.slice(1);
    } else if (target[0][0] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
}

function mapChars(domainName, { useSTD3ASCIIRules, processingOption }) {
  let hasError = false;
  let processed = "";

  for (const ch of domainName) {
    const [status, mapping] = findStatus(ch.codePointAt(0), { useSTD3ASCIIRules });

    switch (status) {
      case "disallowed":
        hasError = true;
        processed += ch;
        break;
      case "ignored":
        break;
      case "mapped":
        processed += mapping;
        break;
      case "deviation":
        if (processingOption === "transitional") {
          processed += mapping;
        } else {
          processed += ch;
        }
        break;
      case "valid":
        processed += ch;
        break;
    }
  }

  return {
    string: processed,
    error: hasError
  };
}

function validateLabel(label, { checkHyphens, checkBidi, checkJoiners, processingOption, useSTD3ASCIIRules }) {
  if (label.normalize("NFC") !== label) {
    return false;
  }

  const codePoints = Array.from(label);

  if (checkHyphens) {
    if ((codePoints[2] === "-" && codePoints[3] === "-") ||
        (label.startsWith("-") || label.endsWith("-"))) {
      return false;
    }
  }

  if (label.includes(".") ||
      (codePoints.length > 0 && regexes.combiningMarks.test(codePoints[0]))) {
    return false;
  }

  for (const ch of codePoints) {
    const [status] = findStatus(ch.codePointAt(0), { useSTD3ASCIIRules });
    if ((processingOption === "transitional" && status !== "valid") ||
        (processingOption === "nontransitional" &&
         status !== "valid" && status !== "deviation")) {
      return false;
    }
  }

  // https://tools.ietf.org/html/rfc5892#appendix-A
  if (checkJoiners) {
    let last = 0;
    for (const [i, ch] of codePoints.entries()) {
      if (ch === "\u200C" || ch === "\u200D") {
        if (i > 0) {
          if (regexes.combiningClassVirama.test(codePoints[i - 1])) {
            continue;
          }
          if (ch === "\u200C") {
            // TODO: make this more efficient
            const next = codePoints.indexOf("\u200C", i + 1);
            const test = next < 0 ? codePoints.slice(last) : codePoints.slice(last, next);
            if (regexes.validZWNJ.test(test.join(""))) {
              last = i + 1;
              continue;
            }
          }
        }
        return false;
      }
    }
  }

  // https://tools.ietf.org/html/rfc5893#section-2
  if (checkBidi) {
    let rtl;

    // 1
    if (regexes.bidiS1LTR.test(codePoints[0])) {
      rtl = false;
    } else if (regexes.bidiS1RTL.test(codePoints[0])) {
      rtl = true;
    } else {
      return false;
    }

    if (rtl) {
      // 2-4
      if (!regexes.bidiS2.test(label) ||
          !regexes.bidiS3.test(label) ||
          (regexes.bidiS4EN.test(label) && regexes.bidiS4AN.test(label))) {
        return false;
      }
    } else if (!regexes.bidiS5.test(label) ||
               !regexes.bidiS6.test(label)) { // 5-6
      return false;
    }
  }

  return true;
}

function isBidiDomain(labels) {
  const domain = labels.map(label => {
    if (label.startsWith("xn--")) {
      try {
        return punycode.decode(label.substring(4));
      } catch (err) {
        return "";
      }
    }
    return label;
  }).join(".");
  return regexes.bidiDomain.test(domain);
}

function processing(domainName, options) {
  const { processingOption } = options;

  // 1. Map.
  let { string, error } = mapChars(domainName, options);

  // 2. Normalize.
  string = string.normalize("NFC");

  // 3. Break.
  const labels = string.split(".");
  const isBidi = isBidiDomain(labels);

  // 4. Convert/Validate.
  for (const [i, origLabel] of labels.entries()) {
    let label = origLabel;
    let curProcessing = processingOption;
    if (label.startsWith("xn--")) {
      try {
        label = punycode.decode(label.substring(4));
        labels[i] = label;
      } catch (err) {
        error = true;
        continue;
      }
      curProcessing = "nontransitional";
    }

    // No need to validate if we already know there is an error.
    if (error) {
      continue;
    }
    const validation = validateLabel(label, Object.assign({}, options, {
      processingOption: curProcessing,
      checkBidi: options.checkBidi && isBidi
    }));
    if (!validation) {
      error = true;
    }
  }

  return {
    string: labels.join("."),
    error
  };
}

function toASCII(domainName, {
  checkHyphens = false,
  checkBidi = false,
  checkJoiners = false,
  useSTD3ASCIIRules = false,
  processingOption = "nontransitional",
  verifyDNSLength = false
} = {}) {
  if (processingOption !== "transitional" && processingOption !== "nontransitional") {
    throw new RangeError("processingOption must be either transitional or nontransitional");
  }

  const result = processing(domainName, {
    processingOption,
    checkHyphens,
    checkBidi,
    checkJoiners,
    useSTD3ASCIIRules
  });
  let labels = result.string.split(".");
  labels = labels.map(l => {
    if (containsNonASCII(l)) {
      try {
        return "xn--" + punycode.encode(l);
      } catch (e) {
        result.error = true;
      }
    }
    return l;
  });

  if (verifyDNSLength) {
    const total = labels.join(".").length;
    if (total > 253 || total === 0) {
      result.error = true;
    }

    for (let i = 0; i < labels.length; ++i) {
      if (labels[i].length > 63 || labels[i].length === 0) {
        result.error = true;
        break;
      }
    }
  }

  if (result.error) {
    return null;
  }
  return labels.join(".");
}

function toUnicode(domainName, {
  checkHyphens = false,
  checkBidi = false,
  checkJoiners = false,
  useSTD3ASCIIRules = false
} = {}) {
  const result = processing(domainName, {
    processingOption: "nontransitional",
    checkHyphens,
    checkBidi,
    checkJoiners,
    useSTD3ASCIIRules
  });

  return {
    domain: result.string,
    error: result.error
  };
}

module.exports = {
  toASCII,
  toUnicode
};
