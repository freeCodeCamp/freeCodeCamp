"use strict";

var convertTemplateType = require("./convertTemplateType");
var toToken = require("./toToken");

module.exports = function(tokens, tt, code) {
  return convertTemplateType(tokens, tt)
    .filter(t => t.type !== "CommentLine" && t.type !== "CommentBlock")
    .map(t => toToken(t, tt, code));
};
