# @webassemblyjs/ast

> AST utils for webassemblyjs

## Installation

```sh
yarn add @webassemblyjs/ast
```

## Usage

### Traverse

```js
import { traverse } from "@webassemblyjs/ast";

traverse(ast, {
  Module(path) {
    console.log(path.node);
  }
});
```

### Instruction signatures

```js
import { signatures } from "@webassemblyjs/ast";

console.log(signatures);
```

### Path methods

- `findParent: NodeLocator`
- `replaceWith: Node => void`
- `remove: () => void`
- `insertBefore: Node => void`
- `insertAfter: Node => void`
- `stop: () => void`

### AST utils

- function `module(id, fields, metadata)`
- function `moduleMetadata(sections, functionNames, localNames)`
- function `moduleNameMetadata(value)`
- function `functionNameMetadata(value, index)`
- function `localNameMetadata(value, localIndex, functionIndex)`
- function `binaryModule(id, blob)`
- function `quoteModule(id, string)`
- function `sectionMetadata(section, startOffset, size, vectorOfSize)`
- function `loopInstruction(label, resulttype, instr)`
- function `instruction(id, args, namedArgs)`
- function `objectInstruction(id, object, args, namedArgs)`
- function `ifInstruction(testLabel, test, result, consequent, alternate)`
- function `stringLiteral(value)`
- function `numberLiteralFromRaw(value, raw)`
- function `longNumberLiteral(value, raw)`
- function `floatLiteral(value, nan, inf, raw)`
- function `elem(table, offset, funcs)`
- function `indexInFuncSection(index)`
- function `valtypeLiteral(name)`
- function `typeInstruction(id, functype)`
- function `start(index)`
- function `globalType(valtype, mutability)`
- function `leadingComment(value)`
- function `blockComment(value)`
- function `data(memoryIndex, offset, init)`
- function `global(globalType, init, name)`
- function `table(elementType, limits, name, elements)`
- function `memory(limits, id)`
- function `funcImportDescr(id, signature)`
- function `moduleImport(module, name, descr)`
- function `moduleExportDescr(exportType, id)`
- function `moduleExport(name, descr)`
- function `limit(min, max)`
- function `signature(params, results)`
- function `program(body)`
- function `identifier(value, raw)`
- function `blockInstruction(label, instr, result)`
- function `callInstruction(index, instrArgs)`
- function `callIndirectInstruction(signature, intrs)`
- function `byteArray(values)`
- function `func(name, signature, body, isExternal, metadata)`
- Constant`isModule`
- Constant`isModuleMetadata`
- Constant`isModuleNameMetadata`
- Constant`isFunctionNameMetadata`
- Constant`isLocalNameMetadata`
- Constant`isBinaryModule`
- Constant`isQuoteModule`
- Constant`isSectionMetadata`
- Constant`isLoopInstruction`
- Constant`isInstruction`
- Constant`isObjectInstruction`
- Constant`isIfInstruction`
- Constant`isStringLiteral`
- Constant`isNumberLiteral`
- Constant`isLongNumberLiteral`
- Constant`isFloatLiteral`
- Constant`isElem`
- Constant`isIndexInFuncSection`
- Constant`isValtypeLiteral`
- Constant`isTypeInstruction`
- Constant`isStart`
- Constant`isGlobalType`
- Constant`isLeadingComment`
- Constant`isBlockComment`
- Constant`isData`
- Constant`isGlobal`
- Constant`isTable`
- Constant`isMemory`
- Constant`isFuncImportDescr`
- Constant`isModuleImport`
- Constant`isModuleExportDescr`
- Constant`isModuleExport`
- Constant`isLimit`
- Constant`isSignature`
- Constant`isProgram`
- Constant`isIdentifier`
- Constant`isBlockInstruction`
- Constant`isCallInstruction`
- Constant`isCallIndirectInstruction`
- Constant`isByteArray`
- Constant`isFunc`
- Constant`assertModule`
- Constant`assertModuleMetadata`
- Constant`assertModuleNameMetadata`
- Constant`assertFunctionNameMetadata`
- Constant`assertLocalNameMetadata`
- Constant`assertBinaryModule`
- Constant`assertQuoteModule`
- Constant`assertSectionMetadata`
- Constant`assertLoopInstruction`
- Constant`assertInstruction`
- Constant`assertObjectInstruction`
- Constant`assertIfInstruction`
- Constant`assertStringLiteral`
- Constant`assertNumberLiteral`
- Constant`assertLongNumberLiteral`
- Constant`assertFloatLiteral`
- Constant`assertElem`
- Constant`assertIndexInFuncSection`
- Constant`assertValtypeLiteral`
- Constant`assertTypeInstruction`
- Constant`assertStart`
- Constant`assertGlobalType`
- Constant`assertLeadingComment`
- Constant`assertBlockComment`
- Constant`assertData`
- Constant`assertGlobal`
- Constant`assertTable`
- Constant`assertMemory`
- Constant`assertFuncImportDescr`
- Constant`assertModuleImport`
- Constant`assertModuleExportDescr`
- Constant`assertModuleExport`
- Constant`assertLimit`
- Constant`assertSignature`
- Constant`assertProgram`
- Constant`assertIdentifier`
- Constant`assertBlockInstruction`
- Constant`assertCallInstruction`
- Constant`assertCallIndirectInstruction`
- Constant`assertByteArray`
- Constant`assertFunc`

