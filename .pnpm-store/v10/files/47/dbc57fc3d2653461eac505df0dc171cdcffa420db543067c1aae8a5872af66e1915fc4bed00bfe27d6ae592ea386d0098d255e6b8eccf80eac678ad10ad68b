"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.GraphQLRunner = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _graphql = require("graphql");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _hash = require("gatsby-core-utils/hash");
var _addPageDependency = require("../redux/actions/add-page-dependency");
var _context = _interopRequireDefault(require("../schema/context"));
var _nodeModel = require("../schema/node-model");
var _graphqlSpanTracer = _interopRequireDefault(require("./graphql-span-tracer"));
var _transformDocument = require("./transform-document");
// Preserve these caches across graphql instances.
const _rootNodeMap = new WeakMap();
const _trackedRootNodes = new WeakSet();
class GraphQLRunner {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // TODO: convert "../schema/node-model" from Flow

  constructor(store, {
    collectStats,
    graphqlTracing
  } = {}) {
    this.store = store;
    const {
      schema,
      schemaCustomization
    } = this.store.getState();
    this.nodeModel = new _nodeModel.LocalNodeModel({
      schema,
      schemaComposer: schemaCustomization.composer,
      createPageDependency: _addPageDependency.createPageDependency,
      _rootNodeMap,
      _trackedRootNodes
    });
    this.schema = schema;
    this.parseCache = new Map();
    this.validDocuments = new WeakMap();
    this.scheduleClearCache = (0, _debounce2.default)(this.clearCache.bind(this), 5000);
    this.graphqlTracing = graphqlTracing || false;
    if (collectStats) {
      this.stats = {
        totalQueries: 0,
        uniqueOperations: new Set(),
        uniqueQueries: new Set(),
        totalRunQuery: 0,
        totalPluralRunQuery: 0,
        totalIndexHits: 0,
        totalSiftHits: 0,
        totalNonSingleFilters: 0,
        comparatorsUsed: new Map(),
        uniqueFilterPaths: new Set(),
        uniqueSorts: new Set()
      };
    } else {
      this.stats = null;
    }
  }
  clearCache() {
    this.parseCache.clear();
    this.validDocuments = new WeakMap();
  }
  parse(query) {
    if (!this.parseCache.has(query)) {
      this.parseCache.set(query, (0, _graphql.parse)(query));
    }
    return this.parseCache.get(query);
  }
  validate(schema, originalQueryText, document, originalDocument = document) {
    let errors = [];
    let warnings = [];
    const validatedDocument = this.validDocuments.get(document);
    if (validatedDocument) {
      return {
        errors: [],
        warnings: [],
        document: validatedDocument
      };
    }
    errors = (0, _graphql.validate)(schema, document);
    warnings = (0, _graphql.validate)(schema, document, [_graphql.NoDeprecatedCustomRule]);
    if (!errors.length) {
      this.validDocuments.set(originalDocument, document);
    } else {
      const {
        ast: transformedDocument,
        hasChanged
      } = (0, _transformDocument.tranformDocument)(document);
      if (hasChanged) {
        const {
          errors,
          warnings,
          document
        } = this.validate(schema, originalQueryText, transformedDocument, originalDocument);
        if (!errors.length) {
          _reporter.default.warn(`Deprecated syntax of sort and/or aggregation field arguments were found in your query (see https://gatsby.dev/graphql-nested-sort-and-aggregate). Query was automatically converted to a new syntax. You should update query in your code.\n\nCurrent query:\n\n${_reporter.default.stripIndent(originalQueryText)}\n\nConverted query:\n\n${(0, _graphql.print)(transformedDocument)}`);
        }
        return {
          errors,
          warnings,
          document
        };
      }
    }
    return {
      errors,
      warnings,
      document
    };
  }
  getStats() {
    if (this.stats) {
      const comparatorsUsedObj = [];
      this.stats.comparatorsUsed.forEach((value, key) => {
        comparatorsUsedObj.push({
          comparator: key,
          amount: value
        });
      });
      return {
        totalQueries: this.stats.totalQueries,
        uniqueOperations: this.stats.uniqueOperations.size,
        uniqueQueries: this.stats.uniqueQueries.size,
        totalRunQuery: this.stats.totalRunQuery,
        totalPluralRunQuery: this.stats.totalPluralRunQuery,
        totalIndexHits: this.stats.totalIndexHits,
        totalSiftHits: this.stats.totalSiftHits,
        totalNonSingleFilters: this.stats.totalNonSingleFilters,
        comparatorsUsed: comparatorsUsedObj,
        uniqueFilterPaths: this.stats.uniqueFilterPaths.size,
        uniqueSorts: this.stats.uniqueSorts.size
      };
    } else {
      return null;
    }
  }
  async query(query, context, {
    parentSpan,
    queryName,
    componentPath,
    forceGraphqlTracing = false,
    telemetryResolverTimings
  }) {
    const {
      schema,
      schemaCustomization
    } = this.store.getState();
    if (this.schema !== schema) {
      this.schema = schema;
      this.clearCache();
    }
    let queryText = query;
    if (typeof queryText !== `string`) {
      queryText = queryText.body;
    }
    if (this.stats) {
      this.stats.totalQueries++;
      const hash = await (0, _hash.sha1)(queryText);
      this.stats.uniqueQueries.add(hash);
    }
    const {
      errors,
      warnings,
      document
    } = this.validate(schema, queryText, this.parse(query));

    // Queries are usually executed in batch. But after the batch is finished
    // cache just wastes memory without much benefits.
    // TODO: consider a better strategy for cache purging/invalidation
    this.scheduleClearCache();
    if (warnings.length > 0) {
      // TODO: move those warnings to the caller side, e.g. query-runner.ts
      warnings.forEach(err => {
        const message = componentPath ? `\nQueried in ${componentPath}` : ``;
        _reporter.default.warn(err.message + message);
      });
    }
    if (errors.length > 0) {
      return {
        errors
      };
    }
    let tracer;
    if ((this.graphqlTracing || forceGraphqlTracing) && parentSpan) {
      tracer = new _graphqlSpanTracer.default(`GraphQL Query`, {
        parentSpan,
        tags: {
          queryName: queryName
        }
      });
      tracer.start();
    }
    try {
      // `execute` will return a promise
      return await (0, _graphql.execute)({
        schema,
        document,
        rootValue: context,
        contextValue: (0, _context.default)({
          schema,
          schemaComposer: schemaCustomization.composer,
          context,
          customContext: schemaCustomization.context,
          nodeModel: this.nodeModel,
          stats: this.stats,
          tracer,
          telemetryResolverTimings
        }),
        variableValues: context
      });
    } finally {
      if (tracer) {
        tracer.end();
      }
    }
  }
}
exports.GraphQLRunner = GraphQLRunner;
//# sourceMappingURL=graphql-runner.js.map