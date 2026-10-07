"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportAllDeclaration = ExportAllDeclaration;
exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.ExportSpecifier = ExportSpecifier;
exports.ImportAttribute = ImportAttribute;
exports.ImportDeclaration = ImportDeclaration;
exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.ImportExpression = ImportExpression;
exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
exports.ImportSpecifier = ImportSpecifier;
exports._printAttributes = _printAttributes;
var _t = require("@babel/types");
var _index = require("../node/index.js");
var _expressions = require("./expressions.js");
const {
  isClassDeclaration,
  isExportDefaultSpecifier,
  isExportNamespaceSpecifier,
  isImportDefaultSpecifier,
  isImportNamespaceSpecifier,
  isStatement
} = _t;
function ImportSpecifier(node) {
  if (node.importKind === "type" || node.importKind === "typeof") {
    this.word(node.importKind);
    this.space();
  }
  this.print(node.imported);
  if (node.local && node.local.name !== node.imported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.local);
  }
}
function ImportDefaultSpecifier(node) {
  this.print(node.local);
}
function ExportDefaultSpecifier(node) {
  this.print(node.exported);
}
function ExportSpecifier(node) {
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.print(node.local);
  if (node.exported && node.local.name !== node.exported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.exported);
  }
}
function ExportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.exported);
}
let warningShown = false;
function _printAttributes(node, hasPreviousBrace) {
  var _node$extra;
  const {
    attributes
  } = node;
  var {
    assertions
  } = node;
  const {
    importAttributesKeyword
  } = this.format;
  if (attributes && !importAttributesKeyword && node.extra && (node.extra.deprecatedAssertSyntax || node.extra.deprecatedWithLegacySyntax) && !warningShown) {
    warningShown = true;
    console.warn(`\
You are using import attributes, without specifying the desired output syntax.
Please specify the "importAttributesKeyword" generator option, whose value can be one of:
 - "with"        : \`import { a } from "b" with { type: "json" };\`
 - "assert"      : \`import { a } from "b" assert { type: "json" };\`
 - "with-legacy" : \`import { a } from "b" with type: "json";\`
`);
  }
  const useAssertKeyword = importAttributesKeyword === "assert" || !importAttributesKeyword && assertions;
  this.word(useAssertKeyword ? "assert" : "with");
  this.space();
  if (!useAssertKeyword && (importAttributesKeyword === "with-legacy" || !importAttributesKeyword && (_node$extra = node.extra) != null && _node$extra.deprecatedWithLegacySyntax)) {
    this.printList(attributes || assertions);
    return;
  }
  const occurrenceCount = hasPreviousBrace ? 1 : 0;
  this.token("{", undefined, occurrenceCount);
  this.space();
  this.printList(attributes || assertions, this.shouldPrintTrailingComma("}"));
  this.space();
  this.token("}", undefined, occurrenceCount);
}
function ExportAllDeclaration(node) {
  var _node$attributes, _node$assertions;
  this.word("export");
  this.space();
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.tokenChar(42);
  this.space();
  this.word("from");
  this.space();
  if ((_node$attributes = node.attributes) != null && _node$attributes.length || (_node$assertions = node.assertions) != null && _node$assertions.length) {
    this.print(node.source, true);
    this.space();
    _printAttributes.call(this, node, false);
  } else {
    this.print(node.source);
  }
  this.semicolon();
}
function maybePrintDecoratorsBeforeExport(printer, node) {
  if (isClassDeclaration(node.declaration) && _expressions._shouldPrintDecoratorsBeforeExport.call(printer, node)) {
    printer.printJoin(node.declaration.decorators);
  }
}
function ExportNamedDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.space();
  if (node.declaration) {
    const declar = node.declaration;
    this.print(declar);
    if (!isStatement(declar)) this.semicolon();
  } else {
    if (node.exportKind === "type") {
      this.word("type");
      this.space();
    }
    const specifiers = node.specifiers.slice(0);
    let hasSpecial = false;
    for (;;) {
      const first = specifiers[0];
      if (isExportDefaultSpecifier(first) || isExportNamespaceSpecifier(first)) {
        hasSpecial = true;
        this.print(specifiers.shift());
        if (specifiers.length) {
          this.tokenChar(44);
          this.space();
        }
      } else {
        break;
      }
    }
    let hasBrace = false;
    if (specifiers.length || !specifiers.length && !hasSpecial) {
      hasBrace = true;
      this.tokenChar(123);
      if (specifiers.length) {
        this.space();
        this.printList(specifiers, this.shouldPrintTrailingComma("}"));
        this.space();
      }
      this.tokenChar(125);
    }
    if (node.source) {
      var _node$attributes2, _node$assertions2;
      this.space();
      this.word("from");
      this.space();
      if ((_node$attributes2 = node.attributes) != null && _node$attributes2.length || (_node$assertions2 = node.assertions) != null && _node$assertions2.length) {
        this.print(node.source, true);
        this.space();
        _printAttributes.call(this, node, hasBrace);
      } else {
        this.print(node.source);
      }
    }
    this.semicolon();
  }
}
function ExportDefaultDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.noIndentInnerCommentsHere();
  this.space();
  this.word("default");
  this.space();
  this.tokenContext |= _index.TokenContext.exportDefault;
  const declar = node.declaration;
  this.print(declar);
  if (!isStatement(declar)) this.semicolon();
}
function ImportDeclaration(node) {
  var _node$attributes3, _node$assertions3;
  this.word("import");
  this.space();
  const isTypeKind = node.importKind === "type" || node.importKind === "typeof";
  if (isTypeKind) {
    this.noIndentInnerCommentsHere();
    this.word(node.importKind);
    this.space();
  } else if (node.module) {
    this.noIndentInnerCommentsHere();
    this.word("module");
    this.space();
  } else if (node.phase) {
    this.noIndentInnerCommentsHere();
    this.word(node.phase);
    this.space();
  }
  const specifiers = node.specifiers.slice(0);
  const hasSpecifiers = !!specifiers.length;
  while (hasSpecifiers) {
    const first = specifiers[0];
    if (isImportDefaultSpecifier(first) || isImportNamespaceSpecifier(first)) {
      this.print(specifiers.shift());
      if (specifiers.length) {
        this.tokenChar(44);
        this.space();
      }
    } else {
      break;
    }
  }
  let hasBrace = false;
  if (specifiers.length) {
    hasBrace = true;
    this.tokenChar(123);
    this.space();
    this.printList(specifiers, this.shouldPrintTrailingComma("}"));
    this.space();
    this.tokenChar(125);
  } else if (isTypeKind && !hasSpecifiers) {
    hasBrace = true;
    this.tokenChar(123);
    this.tokenChar(125);
  }
  if (hasSpecifiers || isTypeKind) {
    this.space();
    this.word("from");
    this.space();
  }
  if ((_node$attributes3 = node.attributes) != null && _node$attributes3.length || (_node$assertions3 = node.assertions) != null && _node$assertions3.length) {
    this.print(node.source, true);
    this.space();
    _printAttributes.call(this, node, hasBrace);
  } else {
    this.print(node.source);
  }
  this.semicolon();
}
function ImportAttribute(node) {
  this.print(node.key);
  this.tokenChar(58);
  this.space();
  this.print(node.value);
}
function ImportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.local);
}
function ImportExpression(node) {
  this.word("import");
  if (node.phase) {
    this.tokenChar(46);
    this.word(node.phase);
  }
  this.tokenChar(40);
  const shouldPrintTrailingComma = this.shouldPrintTrailingComma(")");
  this.print(node.source);
  if (node.options != null) {
    this.tokenChar(44);
    this.space();
    this.print(node.options);
  }
  if (shouldPrintTrailingComma) {
    this.tokenChar(44);
  }
  this.rightParens(node);
}

//# sourceMappingURL=modules.js.map
