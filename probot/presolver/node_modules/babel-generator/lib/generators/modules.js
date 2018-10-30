"use strict";

exports.__esModule = true;
exports.ImportSpecifier = ImportSpecifier;
exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
exports.ExportDefaultSpecifier = ExportDefaultSpecifier;
exports.ExportSpecifier = ExportSpecifier;
exports.ExportNamespaceSpecifier = ExportNamespaceSpecifier;
exports.ExportAllDeclaration = ExportAllDeclaration;
exports.ExportNamedDeclaration = ExportNamedDeclaration;
exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
exports.ImportDeclaration = ImportDeclaration;
exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ImportSpecifier(node) {
  if (node.importKind === "type" || node.importKind === "typeof") {
    this.word(node.importKind);
    this.space();
  }

  this.print(node.imported, node);
  if (node.local && node.local.name !== node.imported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.local, node);
  }
}

function ImportDefaultSpecifier(node) {
  this.print(node.local, node);
}

function ExportDefaultSpecifier(node) {
  this.print(node.exported, node);
}

function ExportSpecifier(node) {
  this.print(node.local, node);
  if (node.exported && node.local.name !== node.exported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.exported, node);
  }
}

function ExportNamespaceSpecifier(node) {
  this.token("*");
  this.space();
  this.word("as");
  this.space();
  this.print(node.exported, node);
}

function ExportAllDeclaration(node) {
  this.word("export");
  this.space();
  this.token("*");
  this.space();
  this.word("from");
  this.space();
  this.print(node.source, node);
  this.semicolon();
}

function ExportNamedDeclaration() {
  this.word("export");
  this.space();
  ExportDeclaration.apply(this, arguments);
}

function ExportDefaultDeclaration() {
  this.word("export");
  this.space();
  this.word("default");
  this.space();
  ExportDeclaration.apply(this, arguments);
}

function ExportDeclaration(node) {
  if (node.declaration) {
    var declar = node.declaration;
    this.print(declar, node);
    if (!t.isStatement(declar)) this.semicolon();
  } else {
    if (node.exportKind === "type") {
      this.word("type");
      this.space();
    }

    var specifiers = node.specifiers.slice(0);

    var hasSpecial = false;
    while (true) {
      var first = specifiers[0];
      if (t.isExportDefaultSpecifier(first) || t.isExportNamespaceSpecifier(first)) {
        hasSpecial = true;
        this.print(specifiers.shift(), node);
        if (specifiers.length) {
          this.token(",");
          this.space();
        }
      } else {
        break;
      }
    }

    if (specifiers.length || !specifiers.length && !hasSpecial) {
      this.token("{");
      if (specifiers.length) {
        this.space();
        this.printList(specifiers, node);
        this.space();
      }
      this.token("}");
    }

    if (node.source) {
      this.space();
      this.word("from");
      this.space();
      this.print(node.source, node);
    }

    this.semicolon();
  }
}

function ImportDeclaration(node) {
  this.word("import");
  this.space();

  if (node.importKind === "type" || node.importKind === "typeof") {
    this.word(node.importKind);
    this.space();
  }

  var specifiers = node.specifiers.slice(0);
  if (specifiers && specifiers.length) {
    while (true) {
      var first = specifiers[0];
      if (t.isImportDefaultSpecifier(first) || t.isImportNamespaceSpecifier(first)) {
        this.print(specifiers.shift(), node);
        if (specifiers.length) {
          this.token(",");
          this.space();
        }
      } else {
        break;
      }
    }

    if (specifiers.length) {
      this.token("{");
      this.space();
      this.printList(specifiers, node);
      this.space();
      this.token("}");
    }

    this.space();
    this.word("from");
    this.space();
  }

  this.print(node.source, node);
  this.semicolon();
}

function ImportNamespaceSpecifier(node) {
  this.token("*");
  this.space();
  this.word("as");
  this.space();
  this.print(node.local, node);
}