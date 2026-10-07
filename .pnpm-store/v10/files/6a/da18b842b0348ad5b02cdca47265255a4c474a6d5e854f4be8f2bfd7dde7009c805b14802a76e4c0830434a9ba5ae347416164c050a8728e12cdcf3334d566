"use strict";

exports.__esModule = true;
exports.getHeadingID = void 0;
const getHeadingID = heading => {
  const data = heading.data;
  if (data) {
    if (data.id) return data.id;
    if (data.htmlAttributes && data.htmlAttributes.id) {
      return data.htmlAttributes.id;
    }
    if (data.hProperties && data.hProperties.id) {
      return data.hProperties.id;
    }
  }
  return null;
};
exports.getHeadingID = getHeadingID;