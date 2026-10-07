"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  areDocsInformative: () => areDocsInformative
});
module.exports = __toCommonJS(src_exports);
var defaultAliases = {
  a: ["an", "our"]
};
var defaultUselessWords = ["a", "an", "i", "in", "of", "s", "the"];
function areDocsInformative(docs, name, {
  aliases = defaultAliases,
  uselessWords = defaultUselessWords
} = {}) {
  const docsWords = new Set(splitTextIntoWords(docs));
  const nameWords = splitTextIntoWords(name);
  for (const nameWord of nameWords) {
    docsWords.delete(nameWord);
  }
  for (const uselessWord of uselessWords) {
    docsWords.delete(uselessWord);
  }
  return !!docsWords.size;
  function normalizeWord(word) {
    const wordLower = word.toLowerCase();
    return aliases[wordLower] ?? wordLower;
  }
  function splitTextIntoWords(text) {
    return (typeof text === "string" ? [text] : text).flatMap((name2) => {
      return name2.replace(/\W+/gu, " ").replace(/([a-z])([A-Z])/gu, "$1 $2").trim().split(" ");
    }).flatMap(normalizeWord).filter(Boolean);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  areDocsInformative
});
