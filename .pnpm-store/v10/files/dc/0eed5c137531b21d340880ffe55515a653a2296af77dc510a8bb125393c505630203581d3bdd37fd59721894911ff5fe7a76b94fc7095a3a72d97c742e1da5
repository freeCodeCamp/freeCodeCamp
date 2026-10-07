"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isEmpty = exports.initialMetadata = exports.ignore = exports.haveEqualFields = exports.hasNodes = exports.disable = exports.deleteNode = exports.addNodes = exports.addNode = void 0;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var _is32BitInteger = require("../../utils/is-32-bit-integer");
var _date = require("../types/date");
const getType = (value, key) => {
  // Staying as close as possible to GraphQL types
  switch (typeof value) {
    case `number`:
      return (0, _is32BitInteger.is32BitInteger)(value) ? `int` : `float`;
    case `string`:
      if (key.includes(`___NODE`)) {
        return `relatedNode`;
      }
      return (0, _date.looksLikeADate)(value) ? `date` : `string`;
    case `boolean`:
      return `boolean`;
    case `object`:
      if (value === null) return `null`;
      if (value instanceof Date) return `date`;
      if (value instanceof String) return `string`;
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return `null`;
        }
        return key.includes(`___NODE`) ? `relatedNodeList` : `array`;
      }
      if (!Object.keys(value).length) return `null`;
      return `object`;
    default:
      // bigint, symbol, function, unknown (host objects in IE were typeof "unknown", for example)
      return `null`;
  }
};
const updateValueDescriptorObject = (value, typeInfo, nodeId, operation, metadata, path) => {
  path.push(value);
  const {
    dprops = {}
  } = typeInfo;
  typeInfo.dprops = dprops;
  Object.keys(value).forEach(key => {
    const v = value[key];
    let descriptor = dprops[key];
    if (descriptor === undefined) {
      descriptor = {};
      dprops[key] = descriptor;
    }
    updateValueDescriptor(nodeId, key, v, operation, descriptor, metadata, path);
  });
  path.pop();
};
const updateValueDescriptorArray = (value, key, typeInfo, nodeId, operation, metadata, path) => {
  value.forEach(item => {
    let descriptor = typeInfo.item;
    if (descriptor === undefined) {
      descriptor = {};
      typeInfo.item = descriptor;
    }
    updateValueDescriptor(nodeId, key, item, operation, descriptor, metadata, path);
  });
};
const updateValueDescriptorRelNodes = (listOfNodeIds, delta, operation, typeInfo, metadata) => {
  const {
    nodes = {}
  } = typeInfo;
  typeInfo.nodes = nodes;
  listOfNodeIds.forEach(nodeId => {
    nodes[nodeId] = (nodes[nodeId] || 0) + delta;

    // Treat any new related node addition or removal as a structural change
    // FIXME: this will produce false positives as this node can be
    //  of the same type as another node already in the map (but we don't know it here)
    if (nodes[nodeId] === 0 || operation === `add` && nodes[nodeId] === 1) {
      metadata.dirty = true;
    }
  });
};
const updateValueDescriptorString = (value, delta, typeInfo) => {
  if (value === ``) {
    const {
      empty = 0
    } = typeInfo;
    typeInfo.empty = empty + delta;
  }
  typeInfo.example = typeof typeInfo.example !== `undefined` ? typeInfo.example : value;
};
const updateValueDescriptor = (nodeId, key, value, operation = `add`, descriptor, metadata, path) => {
  // The object may be traversed multiple times from root.
  // Each time it does it should not revisit the same node twice
  if (path.includes(value)) {
    return;
  }
  const typeName = getType(value, key);
  if (typeName === `null`) {
    return;
  }
  const delta = operation === `del` ? -1 : 1;
  let typeInfo = descriptor[typeName];
  if (typeInfo === undefined) {
    // eslint-disable-next-line no-undef
    typeInfo = descriptor[typeName] = {
      total: 0
    };
  }
  typeInfo.total += delta;

  // Keeping track of structural changes
  // (when value of a new type is added or an existing type has no more values assigned)
  if (typeInfo.total === 0 || operation === `add` && typeInfo.total === 1) {
    metadata.dirty = true;
  }

  // Keeping track of the first node for this type. Only used for better conflict reporting.
  // (see Caveats section in the header comments)
  if (operation === `add`) {
    if (!typeInfo.first) {
      typeInfo.first = nodeId;
    }
  } else if (operation === `del`) {
    if (typeInfo.first === nodeId || typeInfo.total === 0) {
      typeInfo.first = undefined;
    }
  }
  switch (typeName) {
    case `object`:
      updateValueDescriptorObject(value, typeInfo, nodeId, operation, metadata, path);
      return;
    case `array`:
      updateValueDescriptorArray(value, key, typeInfo, nodeId, operation, metadata, path);
      return;
    case `relatedNode`:
      updateValueDescriptorRelNodes([value], delta, operation, typeInfo, metadata);
      return;
    case `relatedNodeList`:
      updateValueDescriptorRelNodes(value, delta, operation, typeInfo, metadata);
      return;
    case `string`:
      updateValueDescriptorString(value, delta, typeInfo);
      return;
  }

  // int, float, boolean, null

  typeInfo.example = typeof typeInfo.example !== `undefined` ? typeInfo.example : value;
};
const mergeObjectKeys = (dpropsKeysA = {}, dpropsKeysB = {}) => {
  const dprops = Object.keys(dpropsKeysA);
  const otherProps = Object.keys(dpropsKeysB);
  return [...new Set(dprops.concat(otherProps))];
};
const descriptorsAreEqual = (descriptor, otherDescriptor) => {
  const types = possibleTypes(descriptor);
  const otherTypes = possibleTypes(otherDescriptor);
  const childDescriptorsAreEqual = type => {
    var _descriptor$array, _otherDescriptor$arra;
    switch (type) {
      case `array`:
        return descriptorsAreEqual(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$array = descriptor.array) === null || _descriptor$array === void 0 ? void 0 : _descriptor$array.item, otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$arra = otherDescriptor.array) === null || _otherDescriptor$arra === void 0 ? void 0 : _otherDescriptor$arra.item);
      case `object`:
        {
          var _descriptor$object, _otherDescriptor$obje;
          const dpropsKeys = mergeObjectKeys(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$object = descriptor.object) === null || _descriptor$object === void 0 ? void 0 : _descriptor$object.dprops, otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$obje = otherDescriptor.object) === null || _otherDescriptor$obje === void 0 ? void 0 : _otherDescriptor$obje.dprops);
          return dpropsKeys.every(prop => {
            var _descriptor$object2, _otherDescriptor$obje2;
            return descriptorsAreEqual(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$object2 = descriptor.object) === null || _descriptor$object2 === void 0 ? void 0 : _descriptor$object2.dprops[prop], otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$obje2 = otherDescriptor.object) === null || _otherDescriptor$obje2 === void 0 ? void 0 : _otherDescriptor$obje2.dprops[prop]);
          });
        }
      case `relatedNode`:
        {
          var _descriptor$relatedNo, _otherDescriptor$rela;
          const nodeIds = mergeObjectKeys(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$relatedNo = descriptor.relatedNode) === null || _descriptor$relatedNo === void 0 ? void 0 : _descriptor$relatedNo.nodes, otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$rela = otherDescriptor.relatedNode) === null || _otherDescriptor$rela === void 0 ? void 0 : _otherDescriptor$rela.nodes);
          // Must be present in both descriptors or absent in both
          // in order to be considered equal
          return nodeIds.every(id => {
            var _descriptor$relatedNo2, _otherDescriptor$rela2;
            return Boolean(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$relatedNo2 = descriptor.relatedNode) === null || _descriptor$relatedNo2 === void 0 ? void 0 : _descriptor$relatedNo2.nodes[id]) === Boolean(otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$rela2 = otherDescriptor.relatedNode) === null || _otherDescriptor$rela2 === void 0 ? void 0 : _otherDescriptor$rela2.nodes[id]);
          });
        }
      case `relatedNodeList`:
        {
          var _descriptor$relatedNo3, _otherDescriptor$rela3;
          const nodeIds = mergeObjectKeys(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$relatedNo3 = descriptor.relatedNodeList) === null || _descriptor$relatedNo3 === void 0 ? void 0 : _descriptor$relatedNo3.nodes, otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$rela3 = otherDescriptor.relatedNodeList) === null || _otherDescriptor$rela3 === void 0 ? void 0 : _otherDescriptor$rela3.nodes);
          return nodeIds.every(id => {
            var _descriptor$relatedNo4, _otherDescriptor$rela4;
            return Boolean(descriptor === null || descriptor === void 0 ? void 0 : (_descriptor$relatedNo4 = descriptor.relatedNodeList) === null || _descriptor$relatedNo4 === void 0 ? void 0 : _descriptor$relatedNo4.nodes[id]) === Boolean(otherDescriptor === null || otherDescriptor === void 0 ? void 0 : (_otherDescriptor$rela4 = otherDescriptor.relatedNodeList) === null || _otherDescriptor$rela4 === void 0 ? void 0 : _otherDescriptor$rela4.nodes[id]);
          });
        }
      default:
        return true;
    }
  };

  // Equal when all possible types are equal (including conflicts)
  return (0, _isEqual2.default)(types, otherTypes) && types.every(childDescriptorsAreEqual);
};
const nodeFields = (node, ignoredFields = new Set()) => Object.keys(node).filter(key => !ignoredFields.has(key));
const updateTypeMetadata = (metadata = initialMetadata(), operation, node) => {
  if (metadata.disabled) {
    return metadata;
  }
  metadata.total = (metadata.total || 0) + (operation === `add` ? 1 : -1);
  if (metadata.ignored) {
    return metadata;
  }
  const {
    ignoredFields,
    fieldMap = {}
  } = metadata;
  nodeFields(node, ignoredFields).forEach(field => {
    let descriptor = fieldMap[field];
    if (descriptor === undefined) {
      descriptor = {};
      fieldMap[field] = descriptor;
    }
    updateValueDescriptor(node.id, field, node[field], operation, descriptor, metadata, []);
  });
  metadata.fieldMap = fieldMap;
  return metadata;
};
const ignore = (metadata = initialMetadata(), set = true) => {
  metadata.ignored = set;
  metadata.fieldMap = {};
  return metadata;
};
exports.ignore = ignore;
const disable = (metadata = initialMetadata(), set = true) => {
  metadata.disabled = set;
  return metadata;
};
exports.disable = disable;
const addNode = (metadata, node) => updateTypeMetadata(metadata, `add`, node);
exports.addNode = addNode;
const deleteNode = (metadata, node) => updateTypeMetadata(metadata, `del`, node);
exports.deleteNode = deleteNode;
const addNodes = (metadata = initialMetadata(), nodes) => {
  let state = metadata;
  for (const node of nodes) {
    state = addNode(state, node);
  }
  return state;
};
exports.addNodes = addNodes;
const possibleTypes = (descriptor = {}) => Object.keys(descriptor).filter(type => descriptor[type].total > 0);
const isEmpty = ({
  fieldMap
}) => Object.keys(fieldMap).every(field => possibleTypes(fieldMap[field]).length === 0);

// Even empty type may still have nodes
exports.isEmpty = isEmpty;
const hasNodes = typeMetadata => {
  var _typeMetadata$total;
  return ((_typeMetadata$total = typeMetadata.total) !== null && _typeMetadata$total !== void 0 ? _typeMetadata$total : 0) > 0;
};
exports.hasNodes = hasNodes;
const haveEqualFields = ({
  fieldMap = {}
} = {}, {
  fieldMap: otherFieldMap = {}
} = {}) => {
  const fields = mergeObjectKeys(fieldMap, otherFieldMap);
  return fields.every(field => descriptorsAreEqual(fieldMap[field], otherFieldMap[field]));
};
exports.haveEqualFields = haveEqualFields;
const initialMetadata = state => {
  return {
    typeName: undefined,
    disabled: false,
    ignored: false,
    dirty: false,
    total: 0,
    ignoredFields: undefined,
    fieldMap: {},
    ...state
  };
};
exports.initialMetadata = initialMetadata;
//# sourceMappingURL=inference-metadata.js.map