"use strict";

exports.__esModule = true;
exports.babelParseToAst = babelParseToAst;
exports.getBabelParserOptions = getBabelParserOptions;
var _parser = require("@babel/parser");
const PARSER_OPTIONS = {
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  sourceType: `unambiguous`,
  plugins: [`jsx`, `flow`, `doExpressions`, `objectRestSpread`, [`decorators`, {
    decoratorsBeforeExport: true
  }], `classProperties`, `classPrivateProperties`, `classPrivateMethods`, `exportDefaultFrom`, `exportNamespaceFrom`, `asyncGenerators`, `functionBind`, `functionSent`, `dynamicImport`, `numericSeparator`, `optionalChaining`, `importMeta`, `bigInt`, `optionalCatchBinding`, `throwExpressions`, [`pipelineOperator`, {
    proposal: `minimal`
  }], `nullishCoalescingOperator`]
};
function getBabelParserOptions(filePath) {
  // Flow and TypeScript plugins can't be enabled simultaneously
  if (/\.tsx?/.test(filePath)) {
    const {
      plugins
    } = PARSER_OPTIONS;
    return {
      ...PARSER_OPTIONS,
      plugins: plugins.map(plugin => plugin === `flow` ? `typescript` : plugin)
    };
  }
  return PARSER_OPTIONS;
}
function babelParseToAst(contents, filePath) {
  return (0, _parser.parse)(contents, getBabelParserOptions(filePath));
}
//# sourceMappingURL=babel-parse-to-ast.js.map