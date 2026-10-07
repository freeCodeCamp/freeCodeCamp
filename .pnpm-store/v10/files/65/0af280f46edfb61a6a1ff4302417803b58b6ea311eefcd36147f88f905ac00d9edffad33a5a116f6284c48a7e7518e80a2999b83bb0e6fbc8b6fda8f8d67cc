"use strict";

exports.__esModule = true;
exports.createIndex = createIndex;
exports.getIndexMetadata = getIndexMetadata;
exports.undefinedSymbol = void 0;
var _util = require("util");
var _redux = require("../../../redux");
var _common = require("./common");
const undefinedSymbol = Symbol.for(`undef`);
exports.undefinedSymbol = undefinedSymbol;
async function createIndex(context, typeName, indexFields) {
  const indexName = buildIndexName(typeName, indexFields);
  const meta = getIndexMetadata(context, typeName, indexFields, false);
  switch (meta === null || meta === void 0 ? void 0 : meta.state) {
    case `ready`:
      return meta;
    case `building`:
      {
        return indexReady(context, indexName);
      }
    case `initial`:
    default:
      {
        try {
          await lockIndex(context, indexName);
        } catch (err) {
          // Index is being updated in some other process.
          // Wait and assume it's in a good state when done
          return indexReady(context, indexName);
        }
        return doCreateIndex(context, typeName, indexFields);
      }
  }
}
function getIndexMetadata(context, typeName, indexFields, assertReady = true) {
  const {
    databases
  } = context;
  const indexName = buildIndexName(typeName, indexFields);
  const meta = databases.metadata.get(toMetadataKey(indexName));
  if (assertReady && (meta === null || meta === void 0 ? void 0 : meta.state) !== `ready`) {
    var _meta$state;
    throw new Error(`Index ${indexName} is not ready yet. State: ${(_meta$state = meta === null || meta === void 0 ? void 0 : meta.state) !== null && _meta$state !== void 0 ? _meta$state : `unknown`}`);
  }
  return meta;
}
async function doCreateIndex(context, typeName, indexFields) {
  const {
    datastore,
    databases
  } = context;
  const {
    indexes,
    metadata
  } = databases;
  const indexName = buildIndexName(typeName, indexFields);
  const label = `Indexing ${indexName}`;
  console.time(label);

  // Assuming materialization was run before creating index
  const resolvedNodes = _redux.store.getState().resolvedNodesCache.get(typeName);

  // TODO: iterate only over dirty nodes
  // TODO: wrap in async transaction?
  const stats = {
    maxKeysPerItem: 0,
    keyCount: 0,
    itemCount: 0
  };
  const indexMetadata = {
    state: `building`,
    typeName,
    keyFields: [...indexFields],
    multiKeyFields: [],
    keyPrefix: indexName,
    // FIXME
    stats
  };
  try {
    let i = 0;
    for (const node of datastore.iterateNodesByType(typeName)) {
      // Assuming materialization was run (executing custom resolvers for fields in `filter` and `sort` clauses)
      //  And materialized values of those fields are stored in resolvedNodes
      const resolvedFields = resolvedNodes === null || resolvedNodes === void 0 ? void 0 : resolvedNodes.get(node.id);
      const {
        keys,
        multiKeyFields
      } = prepareIndexKeys(node, resolvedFields, indexName, indexFields);
      stats.keyCount += keys.length;
      stats.itemCount++;
      stats.maxKeysPerItem = Math.max(stats.maxKeysPerItem, keys.length);
      indexMetadata.multiKeyFields.push(...multiKeyFields);
      for (const indexKey of keys) {
        // Note: this may throw if indexKey exceeds 1978 chars (lmdb limit) or contain objects/buffers/etc
        indexes.put(indexKey, node.id);
      }
      if (++i % 5000 === 0) {
        // Do not block event loop too much
        await new Promise(resolve => setTimeout(resolve, 3));
      }
    }
    indexMetadata.state = `ready`;
    indexMetadata.multiKeyFields = [...new Set(indexMetadata.multiKeyFields)];
    await metadata.put(toMetadataKey(indexName), indexMetadata);
    console.timeEnd(label);
    return indexMetadata;
  } catch (e) {
    indexMetadata.state = `error`;
    indexMetadata.error = String(e);
    await metadata.put(toMetadataKey(indexName), indexMetadata);
    throw e;
  }
}

/**
 * Returns a list of index keys for a given node.
 * One node may produce multiple index entries when indexing over array values.
 *
 * For example:
 *  Node: { foo: [{ bar: `bar1`}, { bar: `bar2` }] }
 *  Index fields: [`foo.bar`] will produce the following elements: [`bar1`, `bar2`]
 *
 * Keys are prefixed with index name and suffixed with node counter for stable sort.
 *
 * If materialization result (resolvedFields) exists for a given index field
 *  it is used as a key element, otherwise the a raw node value is used.
 */
function prepareIndexKeys(node, resolvedFields, indexName, indexFields) {
  // TODO: use index id vs index name (shorter)
  const indexKeyElements = [];
  const multiKeyFields = [];
  indexKeyElements.push([indexName]);
  for (const dottedField of indexFields.keys()) {
    const fieldValue = (0, _common.resolveFieldValue)(dottedField, node, resolvedFields);
    let indexFieldValue = jsValueToLmdbKey(fieldValue);

    // Got value that can't be stored in lmdb key
    if (typeof indexFieldValue === `undefined`) {
      const path = `${node.internal.type}.${dottedField} (id: ${node.id})`;
      throw new Error(`Bad value at ${path}: ${(0, _util.inspect)(fieldValue)}`);
    }
    indexFieldValue = Array.isArray(indexFieldValue) ? indexFieldValue.flat() // FIXME
    : [indexFieldValue];
    indexKeyElements.push(indexFieldValue);
    if (indexFieldValue.length > 1) {
      multiKeyFields.push(dottedField);
    }
  }
  indexKeyElements.push([node.internal.counter]);
  return {
    keys: (0, _common.cartesianProduct)(...indexKeyElements),
    multiKeyFields
  };
}
async function lockIndex(context, indexName) {
  const {
    metadata
  } = context.databases;
  const indexKey = toMetadataKey(indexName);
  const justLocked = await metadata.ifNoExists(indexKey, () => {
    metadata.put(indexKey, null);
  });
  if (!justLocked) {
    throw new Error(`Index is already locked`);
  }
}
async function indexReady(context, indexName) {
  return new Promise((resolve, reject) => {
    const {
      metadata
    } = context.databases;
    let retries = 0;
    let timeout = 16;
    function poll() {
      const indexMetadata = metadata.get(toMetadataKey(indexName));
      if ((indexMetadata === null || indexMetadata === void 0 ? void 0 : indexMetadata.state) === `ready`) {
        resolve(indexMetadata);
        return;
      }
      if (retries++ > 1000) {
        reject(new Error(`Index ${indexName} is locked for too long`));
        return;
      }
      setTimeout(poll, timeout);
      timeout = Math.min(200, timeout * 1.5);
    }
    poll();
  });
}

/**
 * Autogenerate index name based on parameters.
 *
 * Example:
 *
 * buildIndexName(`Foo`, { foo: 1, bar: -1 }) -> `Foo/foo:1/bar:-1
 */
function buildIndexName(typeName, fields) {
  const tokens = [typeName];
  for (const [field, sortDirection] of fields) {
    tokens.push(`${field}:${sortDirection}`);
  }
  return tokens.join(`/`);
}
function toMetadataKey(indexName) {
  return `index:${indexName}`;
}
function jsValueToLmdbKey(value) {
  if (typeof value === `number` || typeof value === `string` || typeof value === `boolean` || value === null) {
    return value;
  }
  if (typeof value === `undefined`) {
    // Array keys containing `undefined` are not supported by lmdb-store
    //  But we can't exclude those nodes from an index because
    //  filters { eq: null, gte: null, lte: null } are expected to return such nodes
    // Furthermore, lmdb-store puts those keys before others and we want them to be below
    //  so need to add additional padding
    return undefinedSymbol;
  }
  if (Array.isArray(value)) {
    const result = [];
    for (const item of value) {
      const lmdbKey = jsValueToLmdbKey(item);
      if (typeof lmdbKey === `undefined`) {
        return undefined; // bad value
      }

      result.push(lmdbKey);
    }
    return result;
  }
  // FIXME: not sure if we want this but there are tests for this :/
  if (typeof value === `object`) {
    return JSON.stringify(value);
  }
  return undefined;
}
//# sourceMappingURL=create-index.js.map