// src/index.ts
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
export {
  areDocsInformative
};
