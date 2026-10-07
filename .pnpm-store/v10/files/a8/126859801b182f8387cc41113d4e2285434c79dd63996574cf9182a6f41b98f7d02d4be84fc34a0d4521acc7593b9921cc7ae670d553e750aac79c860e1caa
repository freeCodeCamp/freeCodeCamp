"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getExampleObject = void 0;
var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));
// See gatsby/src/schema/infer/inference-metadata.ts for the ValueDescriptor structs (-> typeInfo)

const getExampleObject = ({
  fieldMap = {},
  typeName,
  typeConflictReporter
}) => Object.keys(fieldMap).reduce((acc, key) => {
  const value = buildExampleValue({
    path: `${typeName}.${key}`,
    descriptor: fieldMap[key],
    typeConflictReporter
  });
  if (key && value !== null) {
    acc[key] = value;
  }
  return acc;
}, {});
exports.getExampleObject = getExampleObject;
const buildExampleValue = ({
  descriptor,
  typeConflictReporter,
  isArrayItem = false,
  path = ``
}) => {
  const [type, conflicts = false] = resolveWinnerType(descriptor);
  if (conflicts && typeConflictReporter) {
    typeConflictReporter.addConflict(path, prepareConflictExamples(descriptor, isArrayItem));
  }
  const typeInfo = descriptor[type];
  switch (type) {
    case `null`:
      return null;
    case `date`:
    case `string`:
      {
        if (isMixOfDateAndString(descriptor)) {
          return hasOnlyEmptyStrings(descriptor) ? `1978-09-26` : `String`;
        }
        return typeInfo.example;
      }
    case `array`:
      {
        const {
          item
        } = typeInfo;
        const exampleItemValue = item ? buildExampleValue({
          descriptor: item,
          isArrayItem: true,
          typeConflictReporter,
          path
        }) : null;
        return exampleItemValue === null ? null : [exampleItemValue];
      }
    case `relatedNode`:
    case `relatedNodeList`:
      {
        const {
          nodes = {}
        } = typeInfo;
        return {
          multiple: type === `relatedNodeList`,
          linkedNodes: Object.keys(nodes).filter(key => nodes[key] > 0)
        };
      }
    case `object`:
      {
        const {
          dprops
        } = typeInfo;
        let hasKeys = false;
        const result = {};
        Object.keys(dprops).forEach(prop => {
          const value = buildExampleValue({
            descriptor: dprops[prop],
            typeConflictReporter,
            path: `${path}.${prop}`
          });
          if (value !== null) {
            hasKeys = true;
            result[prop] = value;
          }
        });
        return hasKeys ? result : null;
      }
    default:
      return typeInfo.example;
  }
};
const resolveWinnerType = descriptor => {
  const candidates = possibleTypes(descriptor);
  if (candidates.length === 1) {
    return [candidates[0]];
  }
  if (candidates.length === 2 && isMixedNumber(descriptor)) {
    return [`float`];
  }
  if (candidates.length === 2 && isMixOfDateAndString(descriptor)) {
    return [hasOnlyEmptyStrings(descriptor) ? `date` : `string`];
  }
  if (candidates.length > 1) {
    return [`null`, true];
  }
  return [`null`];
};
const prepareConflictExamples = (descriptor, isArrayItem) => {
  const typeNameMapper = typeName => {
    if (typeName === `relatedNode`) {
      return `string`;
    }
    if (typeName === `relatedNodeList`) {
      return `[string]`;
    }
    return [`float`, `int`].includes(typeName) ? `number` : typeName;
  };
  const reportedValueMapper = typeName => {
    var _descriptor$typeName;
    if (typeName === `relatedNode`) {
      var _descriptor$relatedNo;
      const {
        nodes
      } = (_descriptor$relatedNo = descriptor.relatedNode) !== null && _descriptor$relatedNo !== void 0 ? _descriptor$relatedNo : {
        nodes: {}
      };
      return Object.keys(nodes).find(key => nodes[key] > 0);
    }
    if (typeName === `relatedNodeList`) {
      var _descriptor$relatedNo2;
      const {
        nodes
      } = (_descriptor$relatedNo2 = descriptor.relatedNodeList) !== null && _descriptor$relatedNo2 !== void 0 ? _descriptor$relatedNo2 : {
        nodes: {}
      };
      return Object.keys(nodes).filter(key => nodes[key] > 0);
    }
    if (typeName === `object`) {
      return getExampleObject({
        typeName,
        fieldMap: descriptor.object.dprops
      });
    }
    if (typeName === `array`) {
      const itemValue = buildExampleValue({
        descriptor: descriptor.array.item,
        isArrayItem: true
      });
      return itemValue === null || itemValue === undefined ? [] : [itemValue];
    }
    return (_descriptor$typeName = descriptor[typeName]) === null || _descriptor$typeName === void 0 ? void 0 : _descriptor$typeName.example;
  };
  const conflictingTypes = possibleTypes(descriptor);
  if (isArrayItem) {
    // Differentiate conflict examples by node they were first seen in.
    // See Caveats section in the header of the ./inference-metadata.ts
    const groups = (0, _groupBy2.default)(conflictingTypes, type => {
      var _descriptor$type;
      return ((_descriptor$type = descriptor[type]) === null || _descriptor$type === void 0 ? void 0 : _descriptor$type.first) || ``;
    });
    return Object.keys(groups).map(nodeId => {
      return {
        type: `[${groups[nodeId].map(typeNameMapper).join(`,`)}]`,
        value: groups[nodeId].map(reportedValueMapper)
      };
    });
  }
  return conflictingTypes.map(type => {
    return {
      type: typeNameMapper(type),
      value: reportedValueMapper(type)
    };
  });
};
const isMixedNumber = descriptor => {
  const {
    float,
    int
  } = descriptor;
  return Boolean(float === null || float === void 0 ? void 0 : float.total) && Boolean(int === null || int === void 0 ? void 0 : int.total);
};
const isMixOfDateAndString = descriptor => {
  const {
    date,
    string
  } = descriptor;
  return Boolean(date === null || date === void 0 ? void 0 : date.total) && Boolean(string === null || string === void 0 ? void 0 : string.total);
};
const hasOnlyEmptyStrings = descriptor => {
  const {
    string
  } = descriptor;
  return string !== undefined && (string === null || string === void 0 ? void 0 : string.empty) === (string === null || string === void 0 ? void 0 : string.total);
};
const possibleTypes = (descriptor = {}) => Object.keys(descriptor).filter(type => descriptor[type].total > 0);
//# sourceMappingURL=build-example-data.js.map