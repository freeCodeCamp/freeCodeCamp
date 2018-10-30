"use strict";
const MIMEType = require("whatwg-mimetype");
const { parseURL, serializeURL } = require("whatwg-url");
const {
  stripLeadingAndTrailingASCIIWhitespace,
  stringPercentDecode,
  isomorphicDecode,
  forgivingBase64Decode
} = require("./utils.js");

module.exports = stringInput => {
  const urlRecord = parseURL(stringInput);

  if (urlRecord === null) {
    return null;
  }

  return module.exports.fromURLRecord(urlRecord);
};

module.exports.fromURLRecord = urlRecord => {
  if (urlRecord.scheme !== "data") {
    return null;
  }

  const input = serializeURL(urlRecord, true).substring("data:".length);

  let position = 0;

  let mimeType = "";
  while (position < input.length && input[position] !== ",") {
    mimeType += input[position];
    ++position;
  }
  mimeType = stripLeadingAndTrailingASCIIWhitespace(mimeType);

  if (position === input.length) {
    return null;
  }

  ++position;

  const encodedBody = input.substring(position);

  let body = stringPercentDecode(encodedBody);

  // Can't use /i regexp flag because it isn't restricted to ASCII.
  const mimeTypeBase64MatchResult = /(.*); *[Bb][Aa][Ss][Ee]64$/.exec(mimeType);
  if (mimeTypeBase64MatchResult) {
    const stringBody = isomorphicDecode(body);
    body = forgivingBase64Decode(stringBody);

    if (body === null) {
      return null;
    }
    mimeType = mimeTypeBase64MatchResult[1];
  }

  if (mimeType.startsWith(";")) {
    mimeType = "text/plain" + mimeType;
  }

  let mimeTypeRecord;
  try {
    mimeTypeRecord = new MIMEType(mimeType);
  } catch (e) {
    mimeTypeRecord = new MIMEType("text/plain;charset=US-ASCII");
  }

  return {
    mimeType: mimeTypeRecord,
    body
  };
};
