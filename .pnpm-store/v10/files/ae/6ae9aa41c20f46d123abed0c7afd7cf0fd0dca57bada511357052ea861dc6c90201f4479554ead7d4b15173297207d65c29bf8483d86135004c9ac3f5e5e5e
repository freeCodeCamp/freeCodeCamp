const { plugin } = require("./plugin.cjs");

module.exports = function (options = {}) {
  return (Parser) => plugin(options, Parser, (Parser.acorn || require("acorn")).tokTypes);
};
