"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeGraphQLConfig = writeGraphQLConfig;
exports.writeGraphQLFragments = writeGraphQLFragments;
exports.writeGraphQLSchema = writeGraphQLSchema;
var fs = _interopRequireWildcard(require("fs-extra"));
var _path = require("path");
var _graphql = require("graphql");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _utils = require("./utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const OUTPUT_PATHS = {
  schema: `.cache/typegen/schema.graphql`,
  fragments: `.cache/typegen/fragments.graphql`,
  config: `.cache/typegen/graphql.config.json`
};
async function writeGraphQLConfig(program) {
  try {
    const base = program.directory;
    const outputPath = (0, _path.join)(base, OUTPUT_PATHS.config);
    if (fs.existsSync(outputPath)) {
      _reporter.default.verbose(`graphql.config.json already exists. Skipping...`);
      return;
    }
    const configJSONString = JSON.stringify({
      schema: OUTPUT_PATHS.schema,
      documents: [`src/**/**.{ts,js,tsx,jsx}`, OUTPUT_PATHS.fragments],
      extensions: {
        endpoints: {
          default: {
            url: `${program.https ? `https://` : `http://`}${program.host}:${program.port}/___graphql`
          }
        }
      }
    }, null, 2);
    await fs.outputFile(outputPath, configJSONString);
    _reporter.default.verbose(`Successfully created graphql.config.json`);
  } catch (err) {
    _reporter.default.error(`Failed to write graphql.config.json`, err);
  }
}
async function writeGraphQLFragments(directory, definitions) {
  try {
    const fragmentString = Array.from(definitions.entries()).filter(([_, def]) => def.isFragment).map(([_, def]) => `# ${def.filePath}\n${def.printedAst}`).join(`\n`);
    await fs.outputFile((0, _path.join)(directory, OUTPUT_PATHS.fragments), fragmentString);
    _reporter.default.verbose(`Wrote fragments.graphql file to .cache`);
  } catch (err) {
    _reporter.default.error(`Failed to write fragments.graphql to .cache`, err);
  }
}
async function writeGraphQLSchema(directory, schema) {
  try {
    const schemaSDLString = (0, _graphql.printSchema)((0, _utils.stabilizeSchema)(schema));
    await fs.outputFile((0, _path.join)(directory, OUTPUT_PATHS.schema), schemaSDLString);
    _reporter.default.verbose(`Successfully created schema.graphql`);
  } catch (err) {
    _reporter.default.error(`Failed to write schema.graphql to .cache`, err);
  }
}
//# sourceMappingURL=file-writes.js.map