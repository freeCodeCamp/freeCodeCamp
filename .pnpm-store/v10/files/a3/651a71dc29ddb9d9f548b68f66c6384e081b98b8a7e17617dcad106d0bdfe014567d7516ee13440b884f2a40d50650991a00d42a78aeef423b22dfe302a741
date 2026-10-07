"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.duplicateFragmentError = duplicateFragmentError;
exports.graphqlError = graphqlError;
exports.multipleRootQueriesError = multipleRootQueriesError;
exports.unknownFragmentError = unknownFragmentError;
var _upperFirst2 = _interopRequireDefault(require("lodash/upperFirst"));
var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));
var _graphql = require("graphql");
var _codeFrame = require("@babel/code-frame");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _graphqlErrorsCodeframe = require("./graphql-errors-codeframe");
const fs = require(`fs-extra`);
const {
  distance: levenshtein
} = require(`fastest-levenshtein`);
const {
  locInGraphQlToLocInFile
} = require(`./error-parser`);
// These handle specific errors throw by RelayParser. If an error matches
// you get a pointer to the location in the query that is broken, otherwise
// we show the error and the query.
const handlers = [[/Unknown field `(.+)` on type `(.+)`/i, ([name], node) => {
  if (node.kind === `Field` && node.name.value === name) {
    return node.name.loc;
  }
  return null;
}], [/Unknown argument `(.+)`/i, ([name], node) => {
  if (node.kind === `Argument` && node.name.value === name) {
    return node.name.loc;
  }
  return null;
}], [/Unknown directive `@(.+)`/i, ([name], node) => {
  if (node.kind === `Directive` && node.name.value === name) {
    return node.name.loc;
  }
  return null;
}]];
function formatFilePath(filePath) {
  return `${_reporter.default.format.bold(`file:`)} ${_reporter.default.format.blue(filePath)}`;
}
function formatError(message, filePath, codeFrame) {
  return _reporter.default.stripIndent`
    ${message}

      ${formatFilePath(filePath)}
  ` + `\n\n${codeFrame}\n`;
}
function extractError(error) {
  const docRegex = /Error:.(RelayParser|GraphQLParser):(.*)Source: document.`(.*)`.file.*(GraphQL.request.*^\s*$)/gms;
  let matches;
  let message = ``;
  let docName = ``;
  let codeBlock = ``;
  while ((matches = docRegex.exec(error.toString())) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (matches.index === docRegex.lastIndex) docRegex.lastIndex++;
    [,, message, docName, codeBlock] = matches;
  }
  if (!message) {
    message = error.toString();
  }
  message = message.trim();
  return {
    message,
    codeBlock,
    docName
  };
}
function findLocation(extractedMessage, def) {
  let location = null;
  (0, _graphql.visit)(def, {
    enter(node) {
      if (location) return;
      for (const [regex, handler] of handlers) {
        const match = extractedMessage.match(regex);
        if (!match) continue;
        if (location = handler(match.slice(1), node)) break;
      }
    }
  });
  return location;
}
function getCodeFrameFromRelayError(def, extractedMessage, error) {
  const {
    start,
    source
  } = findLocation(extractedMessage, def) || {};
  const query = source ? source.body : (0, _graphql.print)(def);

  // we can't reliably get a location without the location source, since
  // the printed query may differ from the original.
  const {
    line,
    column
  } = source && (0, _graphql.getLocation)(source, start) || {};
  return (0, _graphqlErrorsCodeframe.getCodeFrame)(query, line, column);
}
function multipleRootQueriesError(filePath, def, otherDef) {
  const name = def.name.value;
  const otherName = otherDef.name.value;
  const field = def.selectionSet.selections[0].name.value;
  const otherField = otherDef.selectionSet.selections[0].name.value;
  const unifiedName = `${(0, _camelCase2.default)(name)}And${(0, _upperFirst2.default)((0, _camelCase2.default)(otherName))}`;

  // colors are problematic for tests as we can different
  // results depending on platform, so we don't
  // highlight code for tests
  const highlightCode = process.env.NODE_ENV !== `test`;
  return {
    id: `85910`,
    filePath,
    context: {
      name,
      otherName,
      beforeCodeFrame: (0, _codeFrame.codeFrameColumns)(_reporter.default.stripIndent`
        query ${otherName} {
          ${field} {
            #...
          }
        }

        query ${name} {
          ${otherField} {
            #...
          }
        }
      `, {
        start: {
          column: 0,
          line: 0
        }
      }, {
        linesBelow: Number.MAX_SAFE_INTEGER,
        highlightCode
      }),
      afterCodeFrame: (0, _codeFrame.codeFrameColumns)(_reporter.default.stripIndent`
        query ${unifiedName} {
          ${field} {
            #...
          }
          ${otherField} {
            #...
          }
        }
      `, {
        start: {
          column: 0,
          line: 0
        }
      }, {
        linesBelow: Number.MAX_SAFE_INTEGER,
        highlightCode
      })
    }
  };
}
function graphqlError(definitionsByName, error) {
  let codeBlock;
  const {
    message,
    docName
  } = extractError(error);
  const {
    def,
    filePath
  } = definitionsByName.get(docName) || {};
  if (filePath && docName) {
    codeBlock = getCodeFrameFromRelayError(def, message, error);
    const formattedMessage = formatError(message, filePath, codeBlock);
    return {
      formattedMessage,
      docName,
      message,
      codeBlock
    };
  }
  let reportedMessage = `There was an error while compiling your site's GraphQL queries.
  ${message || error.message}
    `;
  if (error.message.match(/must be an instance of/)) {
    reportedMessage += `This usually means that more than one instance of 'graphql' is installed ` + `in your node_modules. Remove all but the top level one or run \`npm dedupe\` to fix it.`;
  }
  if (error.message.match(/Duplicate document/)) {
    reportedMessage += `${error.message.slice(21)}\n`;
  }
  return {
    formattedMessage: reportedMessage,
    docName,
    message,
    codeBlock
  };
}
function unknownFragmentError({
  fragmentNames,
  filePath,
  definition,
  node
}) {
  var _fragmentNames$map$fi;
  const name = node.name.value;
  const closestFragment = (_fragmentNames$map$fi = fragmentNames.map(f => {
    return {
      fragment: f,
      score: levenshtein(name, f)
    };
  }).filter(f => f.score < 10).sort((a, b) => a.score > b.score)[0]) === null || _fragmentNames$map$fi === void 0 ? void 0 : _fragmentNames$map$fi.fragment;
  let text;
  try {
    text = fs.readFileSync(filePath, {
      encoding: `utf-8`
    });
  } catch {
    text = definition.text;
  }
  return {
    id: `85908`,
    filePath,
    context: {
      fragmentName: name,
      closestFragment,
      codeFrame: (0, _codeFrame.codeFrameColumns)(text, {
        start: locInGraphQlToLocInFile(definition.templateLoc, (0, _graphql.getLocation)({
          body: definition.text
        }, node.loc.start)),
        end: locInGraphQlToLocInFile(definition.templateLoc, (0, _graphql.getLocation)({
          body: definition.text
        }, node.loc.end))
      }, {
        linesAbove: 10,
        linesBelow: 10
      })
    }
  };
}
function duplicateFragmentError({
  name,
  leftDefinition,
  rightDefinition
}) {
  return {
    id: `85919`,
    context: {
      fragmentName: name,
      leftFragment: {
        filePath: leftDefinition.filePath,
        codeFrame: (0, _codeFrame.codeFrameColumns)(leftDefinition.text, {
          start: (0, _graphql.getLocation)({
            body: leftDefinition.text
          }, leftDefinition.def.name.loc.start),
          end: (0, _graphql.getLocation)({
            body: leftDefinition.text
          }, leftDefinition.def.name.loc.end)
        }, {
          linesAbove: 10,
          linesBelow: 10
        })
      },
      rightFragment: {
        filePath: rightDefinition.filePath,
        codeFrame: (0, _codeFrame.codeFrameColumns)(rightDefinition.text, {
          start: (0, _graphql.getLocation)({
            body: rightDefinition.text
          }, rightDefinition.def.name.loc.start),
          end: (0, _graphql.getLocation)({
            body: rightDefinition.text
          }, rightDefinition.def.name.loc.end)
        }, {
          linesAbove: 10,
          linesBelow: 10
        })
      }
    }
  };
}
//# sourceMappingURL=graphql-errors.js.map