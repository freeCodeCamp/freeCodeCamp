const replaceValueSymbols = require("./replaceValueSymbols.js");

const replaceSymbols = (css, replacements) => {
  css.walk((node) => {
    if (node.type === "decl" && node.value) {
      node.value = replaceValueSymbols(node.value.toString(), replacements);
    } else if (node.type === "rule" && node.selector) {
      node.selector = replaceValueSymbols(
        node.selector.toString(),
        replacements
      );
    } else if (node.type === "atrule" && node.params) {
      node.params = replaceValueSymbols(node.params.toString(), replacements);
    }
  });
};

module.exports = replaceSymbols;
