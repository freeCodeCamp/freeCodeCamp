"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.module = _module;
exports.moduleMetadata = moduleMetadata;
exports.moduleNameMetadata = moduleNameMetadata;
exports.functionNameMetadata = functionNameMetadata;
exports.localNameMetadata = localNameMetadata;
exports.binaryModule = binaryModule;
exports.quoteModule = quoteModule;
exports.sectionMetadata = sectionMetadata;
exports.producersSectionMetadata = producersSectionMetadata;
exports.producerMetadata = producerMetadata;
exports.producerMetadataVersionedName = producerMetadataVersionedName;
exports.loopInstruction = loopInstruction;
exports.instr = instr;
exports.ifInstruction = ifInstruction;
exports.stringLiteral = stringLiteral;
exports.numberLiteral = numberLiteral;
exports.longNumberLiteral = longNumberLiteral;
exports.floatLiteral = floatLiteral;
exports.elem = elem;
exports.indexInFuncSection = indexInFuncSection;
exports.valtypeLiteral = valtypeLiteral;
exports.typeInstruction = typeInstruction;
exports.start = start;
exports.globalType = globalType;
exports.leadingComment = leadingComment;
exports.blockComment = blockComment;
exports.data = data;
exports.global = global;
exports.table = table;
exports.memory = memory;
exports.funcImportDescr = funcImportDescr;
exports.moduleImport = moduleImport;
exports.moduleExportDescr = moduleExportDescr;
exports.moduleExport = moduleExport;
exports.limit = limit;
exports.signature = signature;
exports.program = program;
exports.identifier = identifier;
exports.blockInstruction = blockInstruction;
exports.callInstruction = callInstruction;
exports.callIndirectInstruction = callIndirectInstruction;
exports.byteArray = byteArray;
exports.func = func;
exports.internalBrUnless = internalBrUnless;
exports.internalGoto = internalGoto;
exports.internalCallExtern = internalCallExtern;
exports.internalEndAndReturn = internalEndAndReturn;
exports.assertInternalCallExtern = exports.assertInternalGoto = exports.assertInternalBrUnless = exports.assertFunc = exports.assertByteArray = exports.assertCallIndirectInstruction = exports.assertCallInstruction = exports.assertBlockInstruction = exports.assertIdentifier = exports.assertProgram = exports.assertSignature = exports.assertLimit = exports.assertModuleExport = exports.assertModuleExportDescr = exports.assertModuleImport = exports.assertFuncImportDescr = exports.assertMemory = exports.assertTable = exports.assertGlobal = exports.assertData = exports.assertBlockComment = exports.assertLeadingComment = exports.assertGlobalType = exports.assertStart = exports.assertTypeInstruction = exports.assertValtypeLiteral = exports.assertIndexInFuncSection = exports.assertElem = exports.assertFloatLiteral = exports.assertLongNumberLiteral = exports.assertNumberLiteral = exports.assertStringLiteral = exports.assertIfInstruction = exports.assertInstr = exports.assertLoopInstruction = exports.assertProducerMetadataVersionedName = exports.assertProducerMetadata = exports.assertProducersSectionMetadata = exports.assertSectionMetadata = exports.assertQuoteModule = exports.assertBinaryModule = exports.assertLocalNameMetadata = exports.assertFunctionNameMetadata = exports.assertModuleNameMetadata = exports.assertModuleMetadata = exports.assertModule = exports.isIntrinsic = exports.isImportDescr = exports.isNumericLiteral = exports.isExpression = exports.isInstruction = exports.isBlock = exports.isNode = exports.isInternalEndAndReturn = exports.isInternalCallExtern = exports.isInternalGoto = exports.isInternalBrUnless = exports.isFunc = exports.isByteArray = exports.isCallIndirectInstruction = exports.isCallInstruction = exports.isBlockInstruction = exports.isIdentifier = exports.isProgram = exports.isSignature = exports.isLimit = exports.isModuleExport = exports.isModuleExportDescr = exports.isModuleImport = exports.isFuncImportDescr = exports.isMemory = exports.isTable = exports.isGlobal = exports.isData = exports.isBlockComment = exports.isLeadingComment = exports.isGlobalType = exports.isStart = exports.isTypeInstruction = exports.isValtypeLiteral = exports.isIndexInFuncSection = exports.isElem = exports.isFloatLiteral = exports.isLongNumberLiteral = exports.isNumberLiteral = exports.isStringLiteral = exports.isIfInstruction = exports.isInstr = exports.isLoopInstruction = exports.isProducerMetadataVersionedName = exports.isProducerMetadata = exports.isProducersSectionMetadata = exports.isSectionMetadata = exports.isQuoteModule = exports.isBinaryModule = exports.isLocalNameMetadata = exports.isFunctionNameMetadata = exports.isModuleNameMetadata = exports.isModuleMetadata = exports.isModule = void 0;
exports.nodeAndUnionTypes = exports.unionTypesMap = exports.assertInternalEndAndReturn = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// THIS FILE IS AUTOGENERATED
// see scripts/generateNodeUtils.js
function isTypeOf(t) {
  return function (n) {
    return n.type === t;
  };
}

function assertTypeOf(t) {
  return function (n) {
    return function () {
      if (!(n.type === t)) {
        throw new Error('n.type === t' + " error: " + (undefined || "unknown"));
      }
    }();
  };
}

function _module(id, fields, metadata) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
    throw new Error('typeof fields === "object" && typeof fields.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Module",
    id: id,
    fields: fields
  };

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}

function moduleMetadata(sections, functionNames, localNames, producers) {
  if (!(_typeof(sections) === "object" && typeof sections.length !== "undefined")) {
    throw new Error('typeof sections === "object" && typeof sections.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (functionNames !== null && functionNames !== undefined) {
    if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
      throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (localNames !== null && localNames !== undefined) {
    if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
      throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (producers !== null && producers !== undefined) {
    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "ModuleMetadata",
    sections: sections
  };

  if (typeof functionNames !== "undefined" && functionNames.length > 0) {
    node.functionNames = functionNames;
  }

  if (typeof localNames !== "undefined" && localNames.length > 0) {
    node.localNames = localNames;
  }

  if (typeof producers !== "undefined" && producers.length > 0) {
    node.producers = producers;
  }

  return node;
}

function moduleNameMetadata(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "ModuleNameMetadata",
    value: value
  };
  return node;
}

function functionNameMetadata(value, index) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof index === "number")) {
    throw new Error('typeof index === "number"' + " error: " + ("Argument index must be of type number, given: " + _typeof(index) || "unknown"));
  }

  var node = {
    type: "FunctionNameMetadata",
    value: value,
    index: index
  };
  return node;
}

function localNameMetadata(value, localIndex, functionIndex) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof localIndex === "number")) {
    throw new Error('typeof localIndex === "number"' + " error: " + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || "unknown"));
  }

  if (!(typeof functionIndex === "number")) {
    throw new Error('typeof functionIndex === "number"' + " error: " + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || "unknown"));
  }

  var node = {
    type: "LocalNameMetadata",
    value: value,
    localIndex: localIndex,
    functionIndex: functionIndex
  };
  return node;
}

function binaryModule(id, blob) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(blob) === "object" && typeof blob.length !== "undefined")) {
    throw new Error('typeof blob === "object" && typeof blob.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BinaryModule",
    id: id,
    blob: blob
  };
  return node;
}

function quoteModule(id, string) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
    }
  }

  if (!(_typeof(string) === "object" && typeof string.length !== "undefined")) {
    throw new Error('typeof string === "object" && typeof string.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "QuoteModule",
    id: id,
    string: string
  };
  return node;
}

function sectionMetadata(section, startOffset, size, vectorOfSize) {
  if (!(typeof startOffset === "number")) {
    throw new Error('typeof startOffset === "number"' + " error: " + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || "unknown"));
  }

  var node = {
    type: "SectionMetadata",
    section: section,
    startOffset: startOffset,
    size: size,
    vectorOfSize: vectorOfSize
  };
  return node;
}

function producersSectionMetadata(producers) {
  if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
    throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducersSectionMetadata",
    producers: producers
  };
  return node;
}

function producerMetadata(language, processedBy, sdk) {
  if (!(_typeof(language) === "object" && typeof language.length !== "undefined")) {
    throw new Error('typeof language === "object" && typeof language.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(processedBy) === "object" && typeof processedBy.length !== "undefined")) {
    throw new Error('typeof processedBy === "object" && typeof processedBy.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(sdk) === "object" && typeof sdk.length !== "undefined")) {
    throw new Error('typeof sdk === "object" && typeof sdk.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducerMetadata",
    language: language,
    processedBy: processedBy,
    sdk: sdk
  };
  return node;
}

function producerMetadataVersionedName(name, version) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  if (!(typeof version === "string")) {
    throw new Error('typeof version === "string"' + " error: " + ("Argument version must be of type string, given: " + _typeof(version) || "unknown"));
  }

  var node = {
    type: "ProducerMetadataVersionedName",
    name: name,
    version: version
  };
  return node;
}

function loopInstruction(label, resulttype, instr) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "LoopInstruction",
    id: "loop",
    label: label,
    resulttype: resulttype,
    instr: instr
  };
  return node;
}

function instr(id, object, args, namedArgs) {
  if (!(typeof id === "string")) {
    throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
  }

  if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
    throw new Error('typeof args === "object" && typeof args.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Instr",
    id: id,
    args: args
  };

  if (typeof object !== "undefined") {
    node.object = object;
  }

  if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
    node.namedArgs = namedArgs;
  }

  return node;
}

function ifInstruction(testLabel, test, result, consequent, alternate) {
  if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
    throw new Error('typeof test === "object" && typeof test.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
    throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
    throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "IfInstruction",
    id: "if",
    testLabel: testLabel,
    test: test,
    result: result,
    consequent: consequent,
    alternate: alternate
  };
  return node;
}

function stringLiteral(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "StringLiteral",
    value: value
  };
  return node;
}

function numberLiteral(value, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "NumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}

function longNumberLiteral(value, raw) {
  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "LongNumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}

function floatLiteral(value, nan, inf, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
  }

  if (nan !== null && nan !== undefined) {
    if (!(typeof nan === "boolean")) {
      throw new Error('typeof nan === "boolean"' + " error: " + ("Argument nan must be of type boolean, given: " + _typeof(nan) || "unknown"));
    }
  }

  if (inf !== null && inf !== undefined) {
    if (!(typeof inf === "boolean")) {
      throw new Error('typeof inf === "boolean"' + " error: " + ("Argument inf must be of type boolean, given: " + _typeof(inf) || "unknown"));
    }
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
  }

  var node = {
    type: "FloatLiteral",
    value: value,
    raw: raw
  };

  if (nan === true) {
    node.nan = true;
  }

  if (inf === true) {
    node.inf = true;
  }

  return node;
}

function elem(table, offset, funcs) {
  if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
    throw new Error('typeof offset === "object" && typeof offset.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
    throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Elem",
    table: table,
    offset: offset,
    funcs: funcs
  };
  return node;
}

function indexInFuncSection(index) {
  var node = {
    type: "IndexInFuncSection",
    index: index
  };
  return node;
}

function valtypeLiteral(name) {
  var node = {
    type: "ValtypeLiteral",
    name: name
  };
  return node;
}

function typeInstruction(id, functype) {
  var node = {
    type: "TypeInstruction",
    id: id,
    functype: functype
  };
  return node;
}

function start(index) {
  var node = {
    type: "Start",
    index: index
  };
  return node;
}

function globalType(valtype, mutability) {
  var node = {
    type: "GlobalType",
    valtype: valtype,
    mutability: mutability
  };
  return node;
}

function leadingComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "LeadingComment",
    value: value
  };
  return node;
}

function blockComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  var node = {
    type: "BlockComment",
    value: value
  };
  return node;
}

function data(memoryIndex, offset, init) {
  var node = {
    type: "Data",
    memoryIndex: memoryIndex,
    offset: offset,
    init: init
  };
  return node;
}

function global(globalType, init, name) {
  if (!(_typeof(init) === "object" && typeof init.length !== "undefined")) {
    throw new Error('typeof init === "object" && typeof init.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Global",
    globalType: globalType,
    init: init,
    name: name
  };
  return node;
}

function table(elementType, limits, name, elements) {
  if (!(limits.type === "Limit")) {
    throw new Error('limits.type === "Limit"' + " error: " + ("Argument limits must be of type Limit, given: " + limits.type || "unknown"));
  }

  if (elements !== null && elements !== undefined) {
    if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
      throw new Error('typeof elements === "object" && typeof elements.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "Table",
    elementType: elementType,
    limits: limits,
    name: name
  };

  if (typeof elements !== "undefined" && elements.length > 0) {
    node.elements = elements;
  }

  return node;
}

function memory(limits, id) {
  var node = {
    type: "Memory",
    limits: limits,
    id: id
  };
  return node;
}

function funcImportDescr(id, signature) {
  var node = {
    type: "FuncImportDescr",
    id: id,
    signature: signature
  };
  return node;
}

function moduleImport(module, name, descr) {
  if (!(typeof module === "string")) {
    throw new Error('typeof module === "string"' + " error: " + ("Argument module must be of type string, given: " + _typeof(module) || "unknown"));
  }

  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  var node = {
    type: "ModuleImport",
    module: module,
    name: name,
    descr: descr
  };
  return node;
}

function moduleExportDescr(exportType, id) {
  var node = {
    type: "ModuleExportDescr",
    exportType: exportType,
    id: id
  };
  return node;
}

function moduleExport(name, descr) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
  }

  var node = {
    type: "ModuleExport",
    name: name,
    descr: descr
  };
  return node;
}

function limit(min, max, shared) {
  if (!(typeof min === "number")) {
    throw new Error('typeof min === "number"' + " error: " + ("Argument min must be of type number, given: " + _typeof(min) || "unknown"));
  }

  if (max !== null && max !== undefined) {
    if (!(typeof max === "number")) {
      throw new Error('typeof max === "number"' + " error: " + ("Argument max must be of type number, given: " + _typeof(max) || "unknown"));
    }
  }

  if (shared !== null && shared !== undefined) {
    if (!(typeof shared === "boolean")) {
      throw new Error('typeof shared === "boolean"' + " error: " + ("Argument shared must be of type boolean, given: " + _typeof(shared) || "unknown"));
    }
  }

  var node = {
    type: "Limit",
    min: min
  };

  if (typeof max !== "undefined") {
    node.max = max;
  }

  if (shared === true) {
    node.shared = true;
  }

  return node;
}

function signature(params, results) {
  if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
    throw new Error('typeof params === "object" && typeof params.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
    throw new Error('typeof results === "object" && typeof results.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Signature",
    params: params,
    results: results
  };
  return node;
}

function program(body) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Program",
    body: body
  };
  return node;
}

function identifier(value, raw) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
  }

  if (raw !== null && raw !== undefined) {
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
    }
  }

  var node = {
    type: "Identifier",
    value: value
  };

  if (typeof raw !== "undefined") {
    node.raw = raw;
  }

  return node;
}

function blockInstruction(label, instr, result) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BlockInstruction",
    id: "block",
    label: label,
    instr: instr,
    result: result
  };
  return node;
}

function callInstruction(index, instrArgs, numeric) {
  if (instrArgs !== null && instrArgs !== undefined) {
    if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
      throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallInstruction",
    id: "call",
    index: index
  };

  if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
    node.instrArgs = instrArgs;
  }

  if (typeof numeric !== "undefined") {
    node.numeric = numeric;
  }

  return node;
}

function callIndirectInstruction(signature, intrs) {
  if (intrs !== null && intrs !== undefined) {
    if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
      throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallIndirectInstruction",
    id: "call_indirect",
    signature: signature
  };

  if (typeof intrs !== "undefined" && intrs.length > 0) {
    node.intrs = intrs;
  }

  return node;
}

function byteArray(values) {
  if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
    throw new Error('typeof values === "object" && typeof values.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ByteArray",
    values: values
  };
  return node;
}

function func(name, signature, body, isExternal, metadata) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (isExternal !== null && isExternal !== undefined) {
    if (!(typeof isExternal === "boolean")) {
      throw new Error('typeof isExternal === "boolean"' + " error: " + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || "unknown"));
    }
  }

  var node = {
    type: "Func",
    name: name,
    signature: signature,
    body: body
  };

  if (isExternal === true) {
    node.isExternal = true;
  }

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}

function internalBrUnless(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalBrUnless",
    target: target
  };
  return node;
}

function internalGoto(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalGoto",
    target: target
  };
  return node;
}

function internalCallExtern(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || "unknown"));
  }

  var node = {
    type: "InternalCallExtern",
    target: target
  };
  return node;
}

function internalEndAndReturn() {
  var node = {
    type: "InternalEndAndReturn"
  };
  return node;
}

var isModule = isTypeOf("Module");
exports.isModule = isModule;
var isModuleMetadata = isTypeOf("ModuleMetadata");
exports.isModuleMetadata = isModuleMetadata;
var isModuleNameMetadata = isTypeOf("ModuleNameMetadata");
exports.isModuleNameMetadata = isModuleNameMetadata;
var isFunctionNameMetadata = isTypeOf("FunctionNameMetadata");
exports.isFunctionNameMetadata = isFunctionNameMetadata;
var isLocalNameMetadata = isTypeOf("LocalNameMetadata");
exports.isLocalNameMetadata = isLocalNameMetadata;
var isBinaryModule = isTypeOf("BinaryModule");
exports.isBinaryModule = isBinaryModule;
var isQuoteModule = isTypeOf("QuoteModule");
exports.isQuoteModule = isQuoteModule;
var isSectionMetadata = isTypeOf("SectionMetadata");
exports.isSectionMetadata = isSectionMetadata;
var isProducersSectionMetadata = isTypeOf("ProducersSectionMetadata");
exports.isProducersSectionMetadata = isProducersSectionMetadata;
var isProducerMetadata = isTypeOf("ProducerMetadata");
exports.isProducerMetadata = isProducerMetadata;
var isProducerMetadataVersionedName = isTypeOf("ProducerMetadataVersionedName");
exports.isProducerMetadataVersionedName = isProducerMetadataVersionedName;
var isLoopInstruction = isTypeOf("LoopInstruction");
exports.isLoopInstruction = isLoopInstruction;
var isInstr = isTypeOf("Instr");
exports.isInstr = isInstr;
var isIfInstruction = isTypeOf("IfInstruction");
exports.isIfInstruction = isIfInstruction;
var isStringLiteral = isTypeOf("StringLiteral");
exports.isStringLiteral = isStringLiteral;
var isNumberLiteral = isTypeOf("NumberLiteral");
exports.isNumberLiteral = isNumberLiteral;
var isLongNumberLiteral = isTypeOf("LongNumberLiteral");
exports.isLongNumberLiteral = isLongNumberLiteral;
var isFloatLiteral = isTypeOf("FloatLiteral");
exports.isFloatLiteral = isFloatLiteral;
var isElem = isTypeOf("Elem");
exports.isElem = isElem;
var isIndexInFuncSection = isTypeOf("IndexInFuncSection");
exports.isIndexInFuncSection = isIndexInFuncSection;
var isValtypeLiteral = isTypeOf("ValtypeLiteral");
exports.isValtypeLiteral = isValtypeLiteral;
var isTypeInstruction = isTypeOf("TypeInstruction");
exports.isTypeInstruction = isTypeInstruction;
var isStart = isTypeOf("Start");
exports.isStart = isStart;
var isGlobalType = isTypeOf("GlobalType");
exports.isGlobalType = isGlobalType;
var isLeadingComment = isTypeOf("LeadingComment");
exports.isLeadingComment = isLeadingComment;
var isBlockComment = isTypeOf("BlockComment");
exports.isBlockComment = isBlockComment;
var isData = isTypeOf("Data");
exports.isData = isData;
var isGlobal = isTypeOf("Global");
exports.isGlobal = isGlobal;
var isTable = isTypeOf("Table");
exports.isTable = isTable;
var isMemory = isTypeOf("Memory");
exports.isMemory = isMemory;
var isFuncImportDescr = isTypeOf("FuncImportDescr");
exports.isFuncImportDescr = isFuncImportDescr;
var isModuleImport = isTypeOf("ModuleImport");
exports.isModuleImport = isModuleImport;
var isModuleExportDescr = isTypeOf("ModuleExportDescr");
exports.isModuleExportDescr = isModuleExportDescr;
var isModuleExport = isTypeOf("ModuleExport");
exports.isModuleExport = isModuleExport;
var isLimit = isTypeOf("Limit");
exports.isLimit = isLimit;
var isSignature = isTypeOf("Signature");
exports.isSignature = isSignature;
var isProgram = isTypeOf("Program");
exports.isProgram = isProgram;
var isIdentifier = isTypeOf("Identifier");
exports.isIdentifier = isIdentifier;
var isBlockInstruction = isTypeOf("BlockInstruction");
exports.isBlockInstruction = isBlockInstruction;
var isCallInstruction = isTypeOf("CallInstruction");
exports.isCallInstruction = isCallInstruction;
var isCallIndirectInstruction = isTypeOf("CallIndirectInstruction");
exports.isCallIndirectInstruction = isCallIndirectInstruction;
var isByteArray = isTypeOf("ByteArray");
exports.isByteArray = isByteArray;
var isFunc = isTypeOf("Func");
exports.isFunc = isFunc;
var isInternalBrUnless = isTypeOf("InternalBrUnless");
exports.isInternalBrUnless = isInternalBrUnless;
var isInternalGoto = isTypeOf("InternalGoto");
exports.isInternalGoto = isInternalGoto;
var isInternalCallExtern = isTypeOf("InternalCallExtern");
exports.isInternalCallExtern = isInternalCallExtern;
var isInternalEndAndReturn = isTypeOf("InternalEndAndReturn");
exports.isInternalEndAndReturn = isInternalEndAndReturn;

var isNode = function isNode(node) {
  return isModule(node) || isModuleMetadata(node) || isModuleNameMetadata(node) || isFunctionNameMetadata(node) || isLocalNameMetadata(node) || isBinaryModule(node) || isQuoteModule(node) || isSectionMetadata(node) || isProducersSectionMetadata(node) || isProducerMetadata(node) || isProducerMetadataVersionedName(node) || isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isElem(node) || isIndexInFuncSection(node) || isValtypeLiteral(node) || isTypeInstruction(node) || isStart(node) || isGlobalType(node) || isLeadingComment(node) || isBlockComment(node) || isData(node) || isGlobal(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node) || isModuleImport(node) || isModuleExportDescr(node) || isModuleExport(node) || isLimit(node) || isSignature(node) || isProgram(node) || isIdentifier(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node) || isByteArray(node) || isFunc(node) || isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};

exports.isNode = isNode;

var isBlock = function isBlock(node) {
  return isLoopInstruction(node) || isBlockInstruction(node) || isFunc(node);
};

exports.isBlock = isBlock;

var isInstruction = function isInstruction(node) {
  return isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isTypeInstruction(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node);
};

exports.isInstruction = isInstruction;

var isExpression = function isExpression(node) {
  return isInstr(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isValtypeLiteral(node) || isIdentifier(node);
};

exports.isExpression = isExpression;

var isNumericLiteral = function isNumericLiteral(node) {
  return isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node);
};

exports.isNumericLiteral = isNumericLiteral;

var isImportDescr = function isImportDescr(node) {
  return isGlobalType(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node);
};

exports.isImportDescr = isImportDescr;

var isIntrinsic = function isIntrinsic(node) {
  return isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};

exports.isIntrinsic = isIntrinsic;
var assertModule = assertTypeOf("Module");
exports.assertModule = assertModule;
var assertModuleMetadata = assertTypeOf("ModuleMetadata");
exports.assertModuleMetadata = assertModuleMetadata;
var assertModuleNameMetadata = assertTypeOf("ModuleNameMetadata");
exports.assertModuleNameMetadata = assertModuleNameMetadata;
var assertFunctionNameMetadata = assertTypeOf("FunctionNameMetadata");
exports.assertFunctionNameMetadata = assertFunctionNameMetadata;
var assertLocalNameMetadata = assertTypeOf("LocalNameMetadata");
exports.assertLocalNameMetadata = assertLocalNameMetadata;
var assertBinaryModule = assertTypeOf("BinaryModule");
exports.assertBinaryModule = assertBinaryModule;
var assertQuoteModule = assertTypeOf("QuoteModule");
exports.assertQuoteModule = assertQuoteModule;
var assertSectionMetadata = assertTypeOf("SectionMetadata");
exports.assertSectionMetadata = assertSectionMetadata;
var assertProducersSectionMetadata = assertTypeOf("ProducersSectionMetadata");
exports.assertProducersSectionMetadata = assertProducersSectionMetadata;
var assertProducerMetadata = assertTypeOf("ProducerMetadata");
exports.assertProducerMetadata = assertProducerMetadata;
var assertProducerMetadataVersionedName = assertTypeOf("ProducerMetadataVersionedName");
exports.assertProducerMetadataVersionedName = assertProducerMetadataVersionedName;
var assertLoopInstruction = assertTypeOf("LoopInstruction");
exports.assertLoopInstruction = assertLoopInstruction;
var assertInstr = assertTypeOf("Instr");
exports.assertInstr = assertInstr;
var assertIfInstruction = assertTypeOf("IfInstruction");
exports.assertIfInstruction = assertIfInstruction;
var assertStringLiteral = assertTypeOf("StringLiteral");
exports.assertStringLiteral = assertStringLiteral;
var assertNumberLiteral = assertTypeOf("NumberLiteral");
exports.assertNumberLiteral = assertNumberLiteral;
var assertLongNumberLiteral = assertTypeOf("LongNumberLiteral");
exports.assertLongNumberLiteral = assertLongNumberLiteral;
var assertFloatLiteral = assertTypeOf("FloatLiteral");
exports.assertFloatLiteral = assertFloatLiteral;
var assertElem = assertTypeOf("Elem");
exports.assertElem = assertElem;
var assertIndexInFuncSection = assertTypeOf("IndexInFuncSection");
exports.assertIndexInFuncSection = assertIndexInFuncSection;
var assertValtypeLiteral = assertTypeOf("ValtypeLiteral");
exports.assertValtypeLiteral = assertValtypeLiteral;
var assertTypeInstruction = assertTypeOf("TypeInstruction");
exports.assertTypeInstruction = assertTypeInstruction;
var assertStart = assertTypeOf("Start");
exports.assertStart = assertStart;
var assertGlobalType = assertTypeOf("GlobalType");
exports.assertGlobalType = assertGlobalType;
var assertLeadingComment = assertTypeOf("LeadingComment");
exports.assertLeadingComment = assertLeadingComment;
var assertBlockComment = assertTypeOf("BlockComment");
exports.assertBlockComment = assertBlockComment;
var assertData = assertTypeOf("Data");
exports.assertData = assertData;
var assertGlobal = assertTypeOf("Global");
exports.assertGlobal = assertGlobal;
var assertTable = assertTypeOf("Table");
exports.assertTable = assertTable;
var assertMemory = assertTypeOf("Memory");
exports.assertMemory = assertMemory;
var assertFuncImportDescr = assertTypeOf("FuncImportDescr");
exports.assertFuncImportDescr = assertFuncImportDescr;
var assertModuleImport = assertTypeOf("ModuleImport");
exports.assertModuleImport = assertModuleImport;
var assertModuleExportDescr = assertTypeOf("ModuleExportDescr");
exports.assertModuleExportDescr = assertModuleExportDescr;
var assertModuleExport = assertTypeOf("ModuleExport");
exports.assertModuleExport = assertModuleExport;
var assertLimit = assertTypeOf("Limit");
exports.assertLimit = assertLimit;
var assertSignature = assertTypeOf("Signature");
exports.assertSignature = assertSignature;
var assertProgram = assertTypeOf("Program");
exports.assertProgram = assertProgram;
var assertIdentifier = assertTypeOf("Identifier");
exports.assertIdentifier = assertIdentifier;
var assertBlockInstruction = assertTypeOf("BlockInstruction");
exports.assertBlockInstruction = assertBlockInstruction;
var assertCallInstruction = assertTypeOf("CallInstruction");
exports.assertCallInstruction = assertCallInstruction;
var assertCallIndirectInstruction = assertTypeOf("CallIndirectInstruction");
exports.assertCallIndirectInstruction = assertCallIndirectInstruction;
var assertByteArray = assertTypeOf("ByteArray");
exports.assertByteArray = assertByteArray;
var assertFunc = assertTypeOf("Func");
exports.assertFunc = assertFunc;
var assertInternalBrUnless = assertTypeOf("InternalBrUnless");
exports.assertInternalBrUnless = assertInternalBrUnless;
var assertInternalGoto = assertTypeOf("InternalGoto");
exports.assertInternalGoto = assertInternalGoto;
var assertInternalCallExtern = assertTypeOf("InternalCallExtern");
exports.assertInternalCallExtern = assertInternalCallExtern;
var assertInternalEndAndReturn = assertTypeOf("InternalEndAndReturn");
exports.assertInternalEndAndReturn = assertInternalEndAndReturn;
var unionTypesMap = {
  Module: ["Node"],
  ModuleMetadata: ["Node"],
  ModuleNameMetadata: ["Node"],
  FunctionNameMetadata: ["Node"],
  LocalNameMetadata: ["Node"],
  BinaryModule: ["Node"],
  QuoteModule: ["Node"],
  SectionMetadata: ["Node"],
  ProducersSectionMetadata: ["Node"],
  ProducerMetadata: ["Node"],
  ProducerMetadataVersionedName: ["Node"],
  LoopInstruction: ["Node", "Block", "Instruction"],
  Instr: ["Node", "Expression", "Instruction"],
  IfInstruction: ["Node", "Instruction"],
  StringLiteral: ["Node", "Expression"],
  NumberLiteral: ["Node", "NumericLiteral", "Expression"],
  LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
  FloatLiteral: ["Node", "NumericLiteral", "Expression"],
  Elem: ["Node"],
  IndexInFuncSection: ["Node"],
  ValtypeLiteral: ["Node", "Expression"],
  TypeInstruction: ["Node", "Instruction"],
  Start: ["Node"],
  GlobalType: ["Node", "ImportDescr"],
  LeadingComment: ["Node"],
  BlockComment: ["Node"],
  Data: ["Node"],
  Global: ["Node"],
  Table: ["Node", "ImportDescr"],
  Memory: ["Node", "ImportDescr"],
  FuncImportDescr: ["Node", "ImportDescr"],
  ModuleImport: ["Node"],
  ModuleExportDescr: ["Node"],
  ModuleExport: ["Node"],
  Limit: ["Node"],
  Signature: ["Node"],
  Program: ["Node"],
  Identifier: ["Node", "Expression"],
  BlockInstruction: ["Node", "Block", "Instruction"],
  CallInstruction: ["Node", "Instruction"],
  CallIndirectInstruction: ["Node", "Instruction"],
  ByteArray: ["Node"],
  Func: ["Node", "Block"],
  InternalBrUnless: ["Node", "Intrinsic"],
  InternalGoto: ["Node", "Intrinsic"],
  InternalCallExtern: ["Node", "Intrinsic"],
  InternalEndAndReturn: ["Node", "Intrinsic"]
};
exports.unionTypesMap = unionTypesMap;
var nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];
exports.nodeAndUnionTypes = nodeAndUnionTypes;