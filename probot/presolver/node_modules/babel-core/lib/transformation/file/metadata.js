"use strict";

exports.__esModule = true;
exports.ImportDeclaration = exports.ModuleDeclaration = undefined;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.ExportDeclaration = ExportDeclaration;
exports.Scope = Scope;

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleDeclaration = exports.ModuleDeclaration = {
  enter: function enter(path, file) {
    var node = path.node;

    if (node.source) {
      node.source.value = file.resolveModuleSource(node.source.value);
    }
  }
};

var ImportDeclaration = exports.ImportDeclaration = {
  exit: function exit(path, file) {
    var node = path.node;


    var specifiers = [];
    var imported = [];
    file.metadata.modules.imports.push({
      source: node.source.value,
      imported: imported,
      specifiers: specifiers
    });

    for (var _iterator = path.get("specifiers"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var specifier = _ref;

      var local = specifier.node.local.name;

      if (specifier.isImportDefaultSpecifier()) {
        imported.push("default");
        specifiers.push({
          kind: "named",
          imported: "default",
          local: local
        });
      }

      if (specifier.isImportSpecifier()) {
        var importedName = specifier.node.imported.name;
        imported.push(importedName);
        specifiers.push({
          kind: "named",
          imported: importedName,
          local: local
        });
      }

      if (specifier.isImportNamespaceSpecifier()) {
        imported.push("*");
        specifiers.push({
          kind: "namespace",
          local: local
        });
      }
    }
  }
};

function ExportDeclaration(path, file) {
  var node = path.node;


  var source = node.source ? node.source.value : null;
  var exports = file.metadata.modules.exports;

  var declar = path.get("declaration");
  if (declar.isStatement()) {
    var bindings = declar.getBindingIdentifiers();

    for (var name in bindings) {
      exports.exported.push(name);
      exports.specifiers.push({
        kind: "local",
        local: name,
        exported: path.isExportDefaultDeclaration() ? "default" : name
      });
    }
  }

  if (path.isExportNamedDeclaration() && node.specifiers) {
    for (var _iterator2 = node.specifiers, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var specifier = _ref2;

      var exported = specifier.exported.name;
      exports.exported.push(exported);

      if (t.isExportDefaultSpecifier(specifier)) {
        exports.specifiers.push({
          kind: "external",
          local: exported,
          exported: exported,
          source: source
        });
      }

      if (t.isExportNamespaceSpecifier(specifier)) {
        exports.specifiers.push({
          kind: "external-namespace",
          exported: exported,
          source: source
        });
      }

      var local = specifier.local;
      if (!local) continue;

      if (source) {
        exports.specifiers.push({
          kind: "external",
          local: local.name,
          exported: exported,
          source: source
        });
      }

      if (!source) {
        exports.specifiers.push({
          kind: "local",
          local: local.name,
          exported: exported
        });
      }
    }
  }

  if (path.isExportAllDeclaration()) {
    exports.specifiers.push({
      kind: "external-all",
      source: source
    });
  }
}

function Scope(path) {
  path.skip();
}