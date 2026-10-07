"use strict";

exports.__esModule = true;
exports.createPagesFromCollectionBuilder = createPagesFromCollectionBuilder;
var _watchCollectionBuilder = require("./watch-collection-builder");
var _collectionExtractQueryString = require("./collection-extract-query-string");
var _isValidCollectionPathImplementation = require("./is-valid-collection-path-implementation");
var _errorUtils = require("./error-utils");
var _trackedNodesState = require("./tracked-nodes-state");
var _pathUtils = require("./path-utils");
// Move this to gatsby-core-utils?

async function createPagesFromCollectionBuilder(args) {
  const {
    filePath,
    absolutePath,
    pagesPath,
    actions,
    graphql,
    reporter
  } = args || {};
  if ((0, _isValidCollectionPathImplementation.isValidCollectionPathImplementation)(absolutePath, reporter) === false) {
    (0, _watchCollectionBuilder.watchCollectionBuilder)(absolutePath, ``, [], actions, reporter, () => createPagesFromCollectionBuilder(args));
    return;
  }

  // 1. Query for the data for the collection to generate pages
  const queryString = (0, _collectionExtractQueryString.collectionExtractQueryString)(absolutePath, reporter);

  // 1.a  If the query string is not findable, we can't move on. So we stop and watch
  if (queryString === null) {
    (0, _watchCollectionBuilder.watchCollectionBuilder)(absolutePath, ``, [], actions, reporter, () => createPagesFromCollectionBuilder(args));
    return;
  }
  const {
    data,
    errors
  } = await graphql(queryString);

  // 1.a If it fails, we need to inform the user and exit early
  if (!data || errors) {
    reporter.error({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.CollectionBuilder),
      context: {
        sourceMessage: `Tried to create pages from the collection builder.
Unfortunately, the query came back empty. There may be an error in your query:

${errors.map(error => error.message).join(`\n`)}`.trim()
      },
      filePath: absolutePath
    });
    (0, _watchCollectionBuilder.watchCollectionBuilder)(absolutePath, queryString, [], actions, reporter, () => createPagesFromCollectionBuilder(args));
    return;
  }

  // 2. Get the nodes out of the data. We very much expect data to come back in a known shape:
  //    data = { [key: string]: { nodes: Array<ACTUAL_DATA> } }
  const nodes = Object.values(Object.values(data)[0])[0];
  if (nodes) {
    reporter.verbose(`   PageCreator: Creating ${nodes.length} page${nodes.length > 1 ? `s` : ``} from ${filePath}`);
  }
  let derivePathErrors = 0;

  // Start listening for changes to this type
  const pluginInstance = (0, _trackedNodesState.getPluginInstance)({
    path: pagesPath
  });
  if (!pluginInstance.createAPageFromNode) {
    throw new Error(`Expected pluginInstance.createAPageFromNode to be defined`);
  }
  const nodeType = (0, _pathUtils.extractModel)(absolutePath);
  let listOfTemplateFilePaths = pluginInstance.trackedTypes.get(nodeType);
  if (!listOfTemplateFilePaths) {
    listOfTemplateFilePaths = new Set();
    pluginInstance.trackedTypes.set(nodeType, listOfTemplateFilePaths);
  }
  listOfTemplateFilePaths.add(absolutePath);

  // 3. Loop through each node and create the page, also save the path it creates to pass to the watcher
  //    the watcher will use this data to delete the pages if the query changes significantly.
  const paths = [];
  for (const node of nodes) {
    const createPageResult = await pluginInstance.createAPageFromNode({
      absolutePath,
      node
    });
    if (createPageResult) {
      derivePathErrors += createPageResult.errors;
      paths.push(createPageResult.path);
    }
  }
  if (derivePathErrors > 0) {
    reporter.panicOnBuild({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.GeneratePath),
      context: {
        sourceMessage: `Could not find a value in the node for ${filePath}. Please make sure that the syntax is correct and supported.`
      }
    });
  }
  (0, _watchCollectionBuilder.watchCollectionBuilder)(absolutePath, queryString, paths, actions, reporter, () => createPagesFromCollectionBuilder(args));
}