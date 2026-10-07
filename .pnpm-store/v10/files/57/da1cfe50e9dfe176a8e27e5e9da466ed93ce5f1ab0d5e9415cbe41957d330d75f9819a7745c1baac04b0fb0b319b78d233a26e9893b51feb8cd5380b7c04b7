"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeNode = encodeNode;
exports.encodeU32 = void 0;

var encoder = _interopRequireWildcard(require("./encoder"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function encodeNode(n) {
  switch (n.type) {
    case "ModuleImport":
      // $FlowIgnore: ModuleImport ensure that the node is well formated
      return encoder.encodeModuleImport(n);

    case "SectionMetadata":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeSectionMetadata(n);

    case "CallInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeCallInstruction(n);

    case "CallIndirectInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeCallIndirectInstruction(n);

    case "TypeInstruction":
      return encoder.encodeTypeInstruction(n);

    case "Instr":
      // $FlowIgnore
      return encoder.encodeInstr(n);

    case "ModuleExport":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeModuleExport(n);

    case "Global":
      // $FlowIgnore
      return encoder.encodeGlobal(n);

    case "Func":
      return encoder.encodeFuncBody(n);

    case "IndexInFuncSection":
      return encoder.encodeIndexInFuncSection(n);

    case "StringLiteral":
      return encoder.encodeStringLiteral(n);

    case "Elem":
      return encoder.encodeElem(n);

    default:
      throw new Error("Unsupported encoding for node of type: " + JSON.stringify(n.type));
  }
}

var encodeU32 = encoder.encodeU32;
exports.encodeU32 = encodeU32;