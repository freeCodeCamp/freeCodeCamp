"use strict";

var _redux = require("../redux");
var _datastore = require("../datastore");
var _iterable = require("../datastore/common/iterable");
var _detectNodeMutations = require("../utils/detect-node-mutations");
var _utils = require("./utils");
var _resolvers = require("./resolvers");
const _ = require(`lodash`);
const {
  isAbstractType,
  GraphQLOutputType,
  GraphQLUnionType,
  GraphQLList,
  getNamedType,
  getNullableType,
  isCompositeType
} = require(`graphql`);
const invariant = require(`invariant`);
const reporter = require(`gatsby-cli/lib/reporter`);
class LocalNodeModel {
  constructor({
    schema,
    schemaComposer,
    createPageDependency,
    _rootNodeMap,
    _trackedRootNodes
  }) {
    this.schema = schema;
    this.schemaComposer = schemaComposer;
    this.createPageDependencyActionCreator = createPageDependency;
    this._rootNodeMap = _rootNodeMap || new WeakMap();
    this._trackedRootNodes = _trackedRootNodes || new WeakSet();
    this._prepareNodesQueues = {};
    this._prepareNodesPromises = {};
    this._preparedNodesCache = new Map();
    this.replaceFiltersCache();
  }
  createPageDependency(createPageDependencyArgs) {
    if (createPageDependencyArgs.connection) {
      const nodeTypeNames = (0, _utils.toNodeTypeNames)(this.schema, createPageDependencyArgs.connection);
      if (nodeTypeNames) {
        nodeTypeNames.forEach(typeName => {
          this.createPageDependencyActionCreator({
            ...createPageDependencyArgs,
            connection: typeName
          });
        });
        return;
      }
    }
    this.createPageDependencyActionCreator(createPageDependencyArgs);
  }

  /**
   * Replace the cache either with the value passed on (mainly for tests) or
   * an empty new Map.
   *
   * @param {undefined | null | FiltersCache} map
   * This cache caches a set of buckets (Sets) of Nodes based on filter and tracks this for each set of types which are
   * actually queried. If the filter targets `id` directly, only one Node is
   * cached instead of a Set of Nodes. If null, don't create or use a cache.
   */
  replaceFiltersCache(map = new Map()) {
    this._filtersCache = map; // See redux/nodes.js for usage
  }

  withContext(context) {
    return new ContextualNodeModel(this, context);
  }

  /**
   * Get a node from the store by ID and optional type.
   *
   * @param {Object} args
   * @param {string} args.id ID of the requested node
   * @param {(string|GraphQLOutputType)} [args.type] Optional type of the node
   * @param {PageDependencies} [pageDependencies]
   * @returns {(Node|null)}
   * @example
   * // Using only the id
   * getNodeById({ id: `123` })
   * // Using id and type
   * getNodeById({ id: `123`, type: `MyType` })
   * // Providing page dependencies
   * getNodeById({ id: `123` }, { path: `/` })
   */
  getNodeById(args, pageDependencies) {
    const {
      id,
      type
    } = args || {};
    const node = getNodeById(id);
    let result;
    if (!node) {
      result = null;
    } else if (!type) {
      result = node;
    } else {
      const nodeTypeNames = (0, _utils.toNodeTypeNames)(this.schema, type);
      result = nodeTypeNames.includes(node.internal.type) ? node : null;
    }
    if (result) {
      this.trackInlineObjectsInRootNode(node);
    }
    return (0, _detectNodeMutations.wrapNode)(this.trackPageDependencies(result, pageDependencies));
  }

  /**
   * Get nodes from the store by IDs and optional type.
   *
   * @param {Object} args
   * @param {string[]} args.ids IDs of the requested nodes
   * @param {(string|GraphQLOutputType)} [args.type] Optional type of the nodes
   * @param {PageDependencies} [pageDependencies]
   * @returns {Node[]}
   * @example
   * // Using only the id
   * getNodesByIds({ ids: [`123`, `456`] })
   *
   * // Using id and type
   * getNodesByIds({ ids: [`123`, `456`], type: `MyType` })
   *
   * // Providing page dependencies
   * getNodesByIds({ ids: [`123`, `456`] }, { path: `/` })
   */
  getNodesByIds(args, pageDependencies) {
    const {
      ids,
      type
    } = args || {};
    const nodes = Array.isArray(ids) ? ids.map(id => getNodeById(id)).filter(Boolean) : [];
    let result;
    if (!nodes.length || !type) {
      result = nodes;
    } else {
      const nodeTypeNames = (0, _utils.toNodeTypeNames)(this.schema, type);
      result = nodes.filter(node => nodeTypeNames.includes(node.internal.type));
    }
    if (result) {
      result.forEach(node => this.trackInlineObjectsInRootNode(node));
    }
    return (0, _detectNodeMutations.wrapNodes)(this.trackPageDependencies(result, pageDependencies));
  }
  async _query(args) {
    var _query, _query$filter, _query$filter$id;
    let {
      query = {},
      type,
      stats,
      tracer
    } = args || {};

    // We don't support querying union types (yet?), because the combined types
    // need not have any fields in common.
    const gqlType = typeof type === `string` ? this.schema.getType(type) : type;
    invariant(!(gqlType instanceof GraphQLUnionType), `Querying GraphQLUnion types is not supported.`);
    const nodeTypeNames = (0, _utils.toNodeTypeNames)(this.schema, gqlType);
    let runQueryActivity;

    // check if we can get node by id and skip
    // more expensive query pipeline
    if (typeof ((_query = query) === null || _query === void 0 ? void 0 : (_query$filter = _query.filter) === null || _query$filter === void 0 ? void 0 : (_query$filter$id = _query$filter.id) === null || _query$filter$id === void 0 ? void 0 : _query$filter$id.eq) !== `undefined` && Object.keys(query.filter).length === 1 && Object.keys(query.filter.id).length === 1) {
      if (tracer) {
        runQueryActivity = reporter.phantomActivity(`runQuerySimpleIdEq`, {
          parentSpan: tracer.getParentActivity().span
        });
        runQueryActivity.start();
      }
      const nodeFoundById = this.getNodeById({
        id: query.filter.id.eq,
        type: gqlType
      });
      if (runQueryActivity) {
        runQueryActivity.end();
      }
      return {
        gqlType,
        entries: new _iterable.GatsbyIterable(nodeFoundById ? [nodeFoundById] : []),
        totalCount: async () => nodeFoundById ? 1 : 0
      };
    }
    query = (0, _utils.maybeConvertSortInputObjectToSortPath)(query);
    let materializationActivity;
    if (tracer) {
      materializationActivity = reporter.phantomActivity(`Materialization`, {
        parentSpan: tracer.getParentActivity().span
      });
      materializationActivity.start();
    }
    const fields = getQueryFields({
      filter: query.filter,
      sort: query.sort,
      group: query.group,
      distinct: query.distinct,
      max: query.max,
      min: query.min,
      sum: query.sum
    });
    const fieldsToResolve = determineResolvableFields(this.schemaComposer, this.schema, gqlType, fields);
    for (const nodeTypeName of nodeTypeNames) {
      const gqlNodeType = this.schema.getType(nodeTypeName);
      await this.prepareNodes(gqlNodeType, fields, fieldsToResolve);
    }
    if (materializationActivity) {
      materializationActivity.end();
    }
    if (tracer) {
      runQueryActivity = reporter.phantomActivity(`runQuery`, {
        parentSpan: tracer.getParentActivity().span
      });
      runQueryActivity.start();
    }
    const {
      entries,
      totalCount
    } = await (0, _datastore.getDataStore)().runQuery({
      queryArgs: query,
      gqlSchema: this.schema,
      gqlComposer: this.schemaComposer,
      gqlType,
      resolvedFields: fieldsToResolve,
      nodeTypeNames,
      filtersCache: this._filtersCache,
      stats
    });
    if (runQueryActivity) {
      runQueryActivity.end();
    }
    return {
      gqlType,
      entries: entries.map(node => {
        // With GatsbyIterable it happens lazily as we iterate
        this.trackInlineObjectsInRootNode(node);
        return node;
      }),
      totalCount
    };
  }

  /**
   * Get all nodes in the store, or all nodes of a specified type (optionally with limit/skip).
   * Returns slice of result as iterable and total count of nodes.
   *
   * You can directly return its `entries` result in your resolver.
   *
   * @param {*} args
   * @param {Object} args.query Query arguments (e.g. `limit` and `skip`)
   * @param {(string|GraphQLOutputType)} args.type Type
   * @param {PageDependencies} [pageDependencies]
   * @return {Promise<Object>} Object containing `{ entries: GatsbyIterable, totalCount: () => Promise<number> }`
   * @example
   * // Get all nodes of a type
   * const { entries, totalCount } = await findAll({ type: `MyType` })
   *
   * // Get all nodes of a type while filtering and sorting
   * const { entries, totalCount } = await findAll({
   *   type: `MyType`,
   *   query: {
   *     sort: { date: `desc` },
   *     filter: { published: { eq: false } },
   *   },
   * })
   *
   * // The `entries` return value is a `GatsbyIterable` (check its TypeScript definition for more details) and allows you to execute array like methods like filter, map, slice, forEach. Calling these methods is more performant than first turning the iterable into an array and then calling the array methods.
   * const { entries, totalCount } = await findAll({ type: `MyType` })
   *
   * const count = await totalCount()
   * const filteredEntries = entries.filter(entry => entry.published)
   *
   * // However, if a method is not available on the `GatsbyIterable` you can turn it into an array first.
   * const filteredEntries = entries.filter(entry => entry.published)
   * return Array.from(posts).length
   */
  async findAll(args, pageDependencies = {}) {
    const {
      gqlType,
      ...result
    } = await this._query(args, pageDependencies);

    // Tracking connections by default:
    if (typeof pageDependencies.connectionType === `undefined`) {
      pageDependencies.connectionType = gqlType.name;
    }
    this.trackPageDependencies(result.entries, pageDependencies);
    return {
      entries: (0, _detectNodeMutations.wrapNodes)(result.entries),
      totalCount: result.totalCount
    };
  }

  /**
   * Get one node in the store. Only returns the first result. When possible, always use this method instead of fetching all nodes and then filtering them. `findOne` is more performant in that regard.
   *
   * @param {*} args
   * @param {Object} args.query Query arguments (e.g. `filter`). Doesn't support `sort`, `limit`, `skip`.
   * @param {(string|GraphQLOutputType)} args.type Type
   * @param {PageDependencies} [pageDependencies]
   * @returns {Promise<Node>}
   * @example
   * // Get one node of type `MyType` by its title
   * const node = await findOne({
   *   type: `MyType`,
   *   query: { filter: { title: { eq: `My Title` } } },
   * })
   */
  async findOne(args, pageDependencies = {}) {
    var _query$sort, _query$sort$fields, _result$;
    const {
      query = {}
    } = args;
    if (((_query$sort = query.sort) === null || _query$sort === void 0 ? void 0 : (_query$sort$fields = _query$sort.fields) === null || _query$sort$fields === void 0 ? void 0 : _query$sort$fields.length) > 0) {
      // If we support sorting and return the first node based on sorting
      // we'll have to always track connection not an individual node
      throw new Error(`nodeModel.findOne() does not support sorting. Use nodeModel.findAll({ query: { limit: 1 } }) instead.`);
    }
    const {
      gqlType,
      entries
    } = await this._query({
      ...args,
      query: {
        ...query,
        skip: 0,
        limit: 1,
        sort: undefined
      }
    });
    const result = Array.from(entries);
    const first = (_result$ = result[0]) !== null && _result$ !== void 0 ? _result$ : null;
    if (!first) {
      // Couldn't find matching node.
      //  This leads to a state where data tracking for this query gets empty.
      //  It means we will NEVER re-run this query on any data updates
      //  (even if a new node matching this query is added at some point).
      //  To workaround this, we have to add a connection tracking to re-run
      //  the query whenever any node of this type changes.
      pageDependencies.connectionType = gqlType.name;
    }
    return (0, _detectNodeMutations.wrapNode)(this.trackPageDependencies(first, pageDependencies));
  }
  prepareNodes(type, queryFields, fieldsToResolve) {
    const typeName = type.name;
    if (!this._prepareNodesQueues[typeName]) {
      this._prepareNodesQueues[typeName] = [];
    }
    this._prepareNodesQueues[typeName].push({
      queryFields,
      fieldsToResolve
    });
    if (!this._prepareNodesPromises[typeName]) {
      this._prepareNodesPromises[typeName] = new Promise(resolve => {
        process.nextTick(async () => {
          await this._doResolvePrepareNodesQueue(type);
          resolve();
        });
      });
    }
    return this._prepareNodesPromises[typeName];
  }
  async _doResolvePrepareNodesQueue(type) {
    const typeName = type.name;
    const queue = this._prepareNodesQueues[typeName];
    this._prepareNodesQueues[typeName] = [];
    this._prepareNodesPromises[typeName] = null;
    const {
      queryFields,
      fieldsToResolve
    } = queue.reduce(({
      queryFields,
      fieldsToResolve
    }, {
      queryFields: nextQueryFields,
      fieldsToResolve: nextFieldsToResolve
    }) => {
      return {
        queryFields: _.merge(queryFields, nextQueryFields),
        fieldsToResolve: _.merge(fieldsToResolve, nextFieldsToResolve)
      };
    }, {
      queryFields: {},
      fieldsToResolve: {}
    });
    const actualFieldsToResolve = deepObjectDifference(fieldsToResolve, this._preparedNodesCache.get(typeName) || {});
    if (!_.isEmpty(actualFieldsToResolve)) {
      const {
        schemaCustomization: {
          context: customContext
        }
      } = _redux.store.getState();
      const resolvedNodes = new Map();
      for (const node of (0, _datastore.getDataStore)().iterateNodesByType(typeName)) {
        this.trackInlineObjectsInRootNode(node);
        const resolvedFields = await resolveRecursive(this, this.schemaComposer, this.schema, node, type, queryFields, actualFieldsToResolve, customContext);
        resolvedNodes.set(node.id, resolvedFields);
      }
      if (resolvedNodes.size) {
        await saveResolvedNodes(typeName, resolvedNodes);
      }
      this._preparedNodesCache.set(typeName, _.merge({}, this._preparedNodesCache.get(typeName) || {}, actualFieldsToResolve));
    }
  }

  /**
   * Get the names of all node types in the store.
   *
   * @returns {string[]}
   */
  getTypes() {
    return (0, _datastore.getTypes)();
  }

  /**
   * Adds link between inline objects/arrays contained in Node object
   * and that Node object.
   * @param {Node} node Root Node
   */
  trackInlineObjectsInRootNode(node) {
    if (!this._trackedRootNodes.has(node)) {
      addRootNodeToInlineObject(this._rootNodeMap, node, node.id, true, new Set());
      this._trackedRootNodes.add(node);
    }
  }

  /**
   * Finds top most ancestor of node that contains passed Object or Array
   * @param {(Object|Array)} obj Object/Array belonging to Node object or Node object
   * @param {nodePredicate} [predicate] Optional callback to check if ancestor meets defined conditions
   * @returns {Node} Top most ancestor if predicate is not specified
   * or first node that meet predicate conditions if predicate is specified
   */
  findRootNodeAncestor(obj, predicate = null) {
    let iterations = 0;
    let ids = this._rootNodeMap.get(obj);
    if (!ids) {
      ids = new Set();
    }
    if (obj !== null && obj !== void 0 && obj.parent && typeof obj.parent === `string`) {
      ids.add(obj.parent);
    }
    let matchingRoot = null;
    if (ids) {
      for (const id of ids) {
        let tracked = getNodeById(id);
        if (tracked) {
          const visited = new Set();
          while (iterations++ < 100) {
            if (predicate && predicate(tracked)) {
              return tracked;
            }
            if (visited.has(tracked)) {
              reporter.error(`It looks like you have a node that's set its parent as itself:\n\n` + tracked);
              break;
            }
            visited.add(tracked);
            const parent = getNodeById(tracked.parent);
            if (!parent) {
              break;
            }
            tracked = parent;
          }
          if (tracked && !predicate) {
            matchingRoot = tracked;
          }
        }
      }
    }
    return matchingRoot;
  }

  /**
   * Given a result, that's either a single node or an array of them, track them
   * using pageDependencies. Defaults to tracking according to current resolver
   * path. Returns the result back.
   *
   * @param {Node | Node[]} result
   * @param {PageDependencies} [pageDependencies]
   * @returns {Node | Node[]}
   */
  trackPageDependencies(result, pageDependencies = {}) {
    const {
      path,
      connectionType,
      track = true
    } = pageDependencies;
    if (path && track) {
      if (connectionType) {
        this.createPageDependency({
          path,
          connection: connectionType
        });
      } else {
        const nodes = (0, _iterable.isIterable)(result) ? result : [result];
        for (const node of nodes) {
          if (node) {
            this.createPageDependency({
              path,
              nodeId: node.id
            });
          }
        }
      }
    }
    return result;
  }

  /**
   * Utility to get a field value from a node, even when that value needs to be materialized first (e.g. nested field that was connected via @link directive)
   * @param {Node} node
   * @param {string} fieldPath
   * @returns {any}
   * @example
   * // Example: Via schema customization the author ID is linked to the Author type
   * const blogPostNode = {
   *   author: 'author-id-1',
   *   // Rest of node fields...
   * }
   *
   * getFieldValue(blogPostNode, 'author.name')
   */
  getFieldValue = async (node, fieldPath) => {
    const fieldToResolve = pathToObject(fieldPath);
    const typeName = node.internal.type;
    const type = this.schema.getType(typeName);
    await this.prepareNodes(type, fieldToResolve, fieldToResolve);
    return (0, _resolvers.getMaybeResolvedValue)(node, fieldPath, typeName);
  };
}
class ContextualNodeModel {
  constructor(rootNodeModel, context) {
    this.nodeModel = rootNodeModel;
    this.context = context;
  }
  withContext(context) {
    return new ContextualNodeModel(this.nodeModel, {
      ...this.context,
      ...context
    });
  }
  _getFullDependencies(pageDependencies) {
    return {
      path: this.context.path,
      ...(pageDependencies || {})
    };
  }
  getNodeById(args, pageDependencies) {
    return this.nodeModel.getNodeById(args, this._getFullDependencies(pageDependencies));
  }
  getNodesByIds(args, pageDependencies) {
    return this.nodeModel.getNodesByIds(args, this._getFullDependencies(pageDependencies));
  }
  findOne(args, pageDependencies) {
    return this.nodeModel.findOne(args, this._getFullDependencies(pageDependencies));
  }
  findAll(args, pageDependencies) {
    return this.nodeModel.findAll(args, this._getFullDependencies(pageDependencies));
  }
  prepareNodes(...args) {
    return this.nodeModel.prepareNodes(...args);
  }
  getTypes(...args) {
    return this.nodeModel.getTypes(...args);
  }
  trackInlineObjectsInRootNode(...args) {
    return this.nodeModel.trackInlineObjectsInRootNode(...args);
  }
  findRootNodeAncestor(...args) {
    return this.nodeModel.findRootNodeAncestor(...args);
  }
  createPageDependency(...args) {
    return this.nodeModel.createPageDependency(...args);
  }
  trackPageDependencies(result, pageDependencies) {
    return this.nodeModel.trackPageDependencies(result, this._getFullDependencies(pageDependencies));
  }
  getFieldValue = (...args) => this.nodeModel.getFieldValue(...args);
}
const getNodeById = id => id != null ? (0, _datastore.getNode)(id) : null;
const getQueryFields = ({
  filter,
  sort,
  group,
  distinct,
  max,
  min,
  sum
}) => {
  const filterFields = filter ? dropQueryOperators(filter) : {};
  const sortFields = sort && sort.fields || [];
  if (group && !Array.isArray(group)) {
    group = [group];
  } else if (group == null) {
    group = [];
  }
  if (distinct && !Array.isArray(distinct)) {
    distinct = [distinct];
  } else if (distinct == null) {
    distinct = [];
  }
  if (max && !Array.isArray(max)) {
    max = [max];
  } else if (max == null) {
    max = [];
  }
  if (min && !Array.isArray(min)) {
    min = [min];
  } else if (min == null) {
    min = [];
  }
  if (sum && !Array.isArray(sum)) {
    sum = [sum];
  } else if (sum == null) {
    sum = [];
  }
  return _.merge(filterFields, ...sortFields.map(pathToObject), ...group.map(pathToObject), ...distinct.map(pathToObject), ...max.map(pathToObject), ...min.map(pathToObject), ...sum.map(pathToObject));
};
const pathToObject = path => {
  if (path && typeof path === `string`) {
    return path.split(`.`).reduceRight((acc, key) => {
      return {
        [key]: acc
      };
    }, true);
  }
  return {};
};
const dropQueryOperators = filter => Object.keys(filter).reduce((acc, key) => {
  const value = filter[key];
  const k = Object.keys(value)[0];
  const v = value[k];
  if (_.isPlainObject(value) && _.isPlainObject(v)) {
    acc[key] = k === `elemMatch` ? dropQueryOperators(v) : dropQueryOperators(value);
  } else {
    acc[key] = true;
  }
  return acc;
}, {});
const getFields = (schema, type, node) => {
  if (!isAbstractType(type)) {
    return type.getFields();
  }
  const concreteType = type.resolveType(node);
  return schema.getType(concreteType).getFields();
};
async function resolveRecursive(nodeModel, schemaComposer, schema, node, type, queryFields, fieldsToResolve, customContext) {
  const gqlFields = getFields(schema, type, node);
  const resolvedFields = {};
  for (const fieldName of Object.keys(fieldsToResolve)) {
    const fieldToResolve = fieldsToResolve[fieldName];
    const queryField = queryFields[fieldName];
    const gqlField = gqlFields[fieldName];
    const gqlNonNullType = getNullableType(gqlField.type);
    const gqlFieldType = getNamedType(gqlField.type);
    let innerValue = await resolveField(nodeModel, schemaComposer, schema, node, gqlField, fieldName, customContext);
    if (gqlField && innerValue != null) {
      if (isCompositeType(gqlFieldType) && !(gqlNonNullType instanceof GraphQLList)) {
        innerValue = await resolveRecursive(nodeModel, schemaComposer, schema, innerValue, gqlFieldType, queryField, _.isObject(fieldToResolve) ? fieldToResolve : queryField, customContext);
      } else if (isCompositeType(gqlFieldType) && (_.isArray(innerValue) || innerValue instanceof _iterable.GatsbyIterable) && gqlNonNullType instanceof GraphQLList) {
        innerValue = await Promise.all(innerValue.map(item => item == null ? item : resolveRecursive(nodeModel, schemaComposer, schema, item, gqlFieldType, queryField, _.isObject(fieldToResolve) ? fieldToResolve : queryField, customContext)));
      }
    }
    if (innerValue != null) {
      resolvedFields[fieldName] = innerValue;
    }
  }
  for (const fieldName of Object.keys(queryFields)) {
    if (!fieldsToResolve[fieldName] && node[fieldName]) {
      // It is possible that this field still has a custom resolver
      // See https://github.com/gatsbyjs/gatsby/issues/27368
      resolvedFields[fieldName] = await resolveField(nodeModel, schemaComposer, schema, node, gqlFields[fieldName], fieldName, customContext);
    }
  }
  return _.pickBy(resolvedFields, (value, key) => queryFields[key]);
}
let withResolverContext;
function resolveField(nodeModel, schemaComposer, schema, node, gqlField, fieldName, customContext) {
  if (!(gqlField !== null && gqlField !== void 0 && gqlField.resolve)) {
    return node[fieldName];
  }

  // We require this inline as there's a circular dependency from context back to this file.
  // https://github.com/gatsbyjs/gatsby/blob/9d33b107d167e3e9e2aa282924a0c409f6afd5a0/packages/gatsby/src/schema/context.ts#L5
  if (!withResolverContext) {
    withResolverContext = require(`./context`);
  }
  return gqlField.resolve(node, gqlField.args.reduce((acc, arg) => {
    acc[arg.name] = arg.defaultValue;
    return acc;
  }, {}), withResolverContext({
    schema,
    schemaComposer,
    nodeModel,
    customContext
  }), {
    fieldName,
    schema,
    returnType: gqlField.type
  });
}
const determineResolvableFields = (schemaComposer, schema, type, fields, isNestedAndParentNeedsResolve = false) => {
  const fieldsToResolve = {};
  const gqlFields = type.getFields();
  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    const gqlField = gqlFields[fieldName];
    const gqlFieldType = getNamedType(gqlField.type);
    const typeComposer = schemaComposer.getAnyTC(type.name);
    const needsResolve = (0, _utils.fieldNeedToResolve)({
      schema,
      gqlType: type,
      typeComposer,
      schemaComposer,
      fieldName
    });
    if (_.isObject(field) && gqlField) {
      const innerResolved = determineResolvableFields(schemaComposer, schema, gqlFieldType, field, isNestedAndParentNeedsResolve || needsResolve);
      if (!_.isEmpty(innerResolved)) {
        fieldsToResolve[fieldName] = innerResolved;
      }
    }
    if (!fieldsToResolve[fieldName] && needsResolve) {
      fieldsToResolve[fieldName] = true;
    }
    if (!fieldsToResolve[fieldName] && isNestedAndParentNeedsResolve) {
      // If parent field needs to be resolved - all nested fields should be added as well
      // See https://github.com/gatsbyjs/gatsby/issues/26056
      fieldsToResolve[fieldName] = true;
    }
  });
  return fieldsToResolve;
};
const addRootNodeToInlineObject = (rootNodeMap, data, nodeId, isNode /* : boolean */, path /* : Set<mixed> */) /* : void */ => {
  const isPlainObject = _.isPlainObject(data);
  if (isPlainObject || _.isArray(data)) {
    if (path.has(data)) return;
    path.add(data);
    _.each(data, (o, key) => {
      if (!isNode || key !== `internal`) {
        addRootNodeToInlineObject(rootNodeMap, o, nodeId, false, path);
      }
    });

    // don't need to track node itself
    if (!isNode) {
      let nodeIds = rootNodeMap.get(data);
      if (!nodeIds) {
        nodeIds = new Set([nodeId]);
      } else {
        nodeIds.add(nodeId);
      }
      rootNodeMap.set(data, nodeIds);
    }
  }
};
const saveResolvedNodes = (typeName, resolvedNodes) => {
  _redux.store.dispatch({
    type: `SET_RESOLVED_NODES`,
    payload: {
      key: typeName,
      nodes: resolvedNodes
    }
  });
};
const deepObjectDifference = (from, to) => {
  const result = {};
  Object.keys(from).forEach(key => {
    const toValue = to[key];
    if (toValue) {
      if (_.isPlainObject(toValue)) {
        const deepResult = deepObjectDifference(from[key], toValue);
        if (!_.isEmpty(deepResult)) {
          result[key] = deepResult;
        }
      }
    } else {
      result[key] = from[key];
    }
  });
  return result;
};
module.exports = {
  LocalNodeModel
};
//# sourceMappingURL=node-model.js.map