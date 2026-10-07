"use strict";

exports.__esModule = true;
exports.graphQLTypegen = graphQLTypegen;
var _fileWrites = require("../utils/graphql-typegen/file-writes");
var _tsCodegen = require("../utils/graphql-typegen/ts-codegen");
async function graphQLTypegen({
  program,
  store,
  parentSpan,
  reporter
}) {
  // TypeScript requires null/undefined checks for these
  // But this should never happen unless e.g. the state machine doesn't receive this information from a parent state machine
  if (!program || !store || !reporter) {
    throw new Error(`Missing required params in graphQLTypegen. program: ${!!program}. store: ${!!store}.`);
  }
  const directory = program.directory;
  const activity = reporter.activityTimer(`Generating GraphQL and TypeScript types`, {
    parentSpan
  });
  activity.start();
  const {
    schema,
    definitions,
    config
  } = store.getState();
  const graphqlTypegenOptions = config.graphqlTypegen;
  if (!graphqlTypegenOptions) {
    throw new Error(`graphqlTypegen option is falsy. This should never happen.`);
  }
  try {
    await (0, _fileWrites.writeGraphQLSchema)(directory, schema);
    await (0, _fileWrites.writeGraphQLFragments)(directory, definitions);
    await (0, _tsCodegen.writeTypeScriptTypes)(directory, schema, definitions, graphqlTypegenOptions);
  } catch (err) {
    activity.panicOnBuild({
      id: `12100`,
      context: {
        sourceMessage: err
      }
    });
  }
  activity.end();
}
//# sourceMappingURL=graphql-typegen.js.map