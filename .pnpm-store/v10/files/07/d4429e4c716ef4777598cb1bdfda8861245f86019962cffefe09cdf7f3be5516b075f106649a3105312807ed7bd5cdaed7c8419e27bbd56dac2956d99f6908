"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParserServices = getParserServices;
const parserSeemsToBeTSESLint_1 = require("./parserSeemsToBeTSESLint");
const ERROR_MESSAGE_REQUIRES_PARSER_SERVICES = "You have used a rule which requires type information, but don't have parserOptions set to generate type information for this file. See https://tseslint.com/typed-linting for enabling linting with type information.";
const ERROR_MESSAGE_UNKNOWN_PARSER = 'Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.';
function getParserServices(context, allowWithoutFullTypeInformation = false) {
    const parser = 
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- For compatibility with ESLint 8
    context.parserPath || context.languageOptions.parser?.meta?.name;
    // This check is unnecessary if the user is using the latest version of our parser.
    //
    // However the world isn't perfect:
    // - Users often use old parser versions.
    //   Old versions of the parser would not return any parserServices unless parserOptions.project was set.
    // - Users sometimes use parsers that aren't @typescript-eslint/parser
    //   Other parsers won't return the parser services we expect (if they return any at all).
    //
    // This check allows us to handle bad user setups whilst providing a nice user-facing
    // error message explaining the problem.
    if (context.sourceCode.parserServices?.esTreeNodeToTSNodeMap == null ||
        context.sourceCode.parserServices.tsNodeToESTreeNodeMap == null) {
        throwError(parser);
    }
    // if a rule requires full type information, then hard fail if it doesn't exist
    // this forces the user to supply parserOptions.project
    if (context.sourceCode.parserServices.program == null &&
        !allowWithoutFullTypeInformation) {
        throwError(parser);
    }
    return context.sourceCode.parserServices;
}
/* eslint-enable @typescript-eslint/unified-signatures */
function throwError(parser) {
    const messages = [
        ERROR_MESSAGE_REQUIRES_PARSER_SERVICES,
        `Parser: ${parser || '(unknown)'}`,
        !(0, parserSeemsToBeTSESLint_1.parserSeemsToBeTSESLint)(parser) && ERROR_MESSAGE_UNKNOWN_PARSER,
    ].filter(Boolean);
    throw new Error(messages.join('\n'));
}
