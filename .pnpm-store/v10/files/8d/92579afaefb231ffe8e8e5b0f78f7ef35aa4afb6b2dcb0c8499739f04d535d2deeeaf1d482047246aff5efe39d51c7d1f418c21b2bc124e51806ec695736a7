'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _arrayIncludes = require('array-includes');var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);
var _eslint = require('eslint');
var _doc = require('./doc');
var _namespace = require('./namespace');var _namespace2 = _interopRequireDefault(_namespace);
var _specifier = require('./specifier');var _specifier2 = _interopRequireDefault(_specifier);
var _captureDependency = require('./captureDependency');
var _patternCapture = require('./patternCapture');var _patternCapture2 = _interopRequireDefault(_patternCapture);
var _remotePath = require('./remotePath');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

/**
                                                                                                                                                                                                                                                                                                * sometimes legacy support isn't _that_ hard... right?
                                                                                                                                                                                                                                                                                                */
function makeSourceCode(text, ast) {
  if (_eslint.SourceCode.length > 1) {
    // ESLint 3
    return new _eslint.SourceCode(text, ast);
  } else {
    // ESLint 4, 5
    return new _eslint.SourceCode({ text: text, ast: ast });
  }
}var

ImportExportVisitorBuilder = function () {
  function ImportExportVisitorBuilder(
  path,
  context,
  exportMap,
  ExportMapBuilder,
  content,
  ast,
  isEsModuleInteropTrue,
  thunkFor)
  {var _this = this;_classCallCheck(this, ImportExportVisitorBuilder);
    this.context = context;
    this.namespace = new _namespace2['default'](path, context, ExportMapBuilder);
    this.remotePathResolver = new _remotePath.RemotePath(path, context);
    this.source = makeSourceCode(content, ast);
    this.exportMap = exportMap;
    this.ast = ast;
    this.isEsModuleInteropTrue = isEsModuleInteropTrue;
    this.thunkFor = thunkFor;
    var docstyle = this.context.settings && this.context.settings['import/docstyle'] || ['jsdoc'];
    this.docStyleParsers = {};
    docstyle.forEach(function (style) {
      _this.docStyleParsers[style] = _doc.availableDocStyleParsers[style];
    });
  }_createClass(ImportExportVisitorBuilder, [{ key: 'build', value: function () {function build(

      astNode) {var _this3 = this;
        return Object.assign({
          ExportDefaultDeclaration: function () {function ExportDefaultDeclaration() {
              var exportMeta = (0, _doc.captureDoc)(this.source, this.docStyleParsers, astNode);
              if (astNode.declaration.type === 'Identifier') {
                this.namespace.add(exportMeta, astNode.declaration);
              }
              this.exportMap.namespace.set('default', exportMeta);
            }return ExportDefaultDeclaration;}(),
          ExportAllDeclaration: function () {function ExportAllDeclaration() {
              var getter = (0, _captureDependency.captureDependency)(astNode, astNode.exportKind === 'type', this.remotePathResolver, this.exportMap, this.context, this.thunkFor);
              if (getter) {this.exportMap.dependencies.add(getter);}
              if (astNode.exported) {
                (0, _specifier2['default'])(astNode, astNode.exported, this.exportMap, this.namespace);
              }
            }return ExportAllDeclaration;}(),
          /** capture namespaces in case of later export */
          ImportDeclaration: function () {function ImportDeclaration() {
              (0, _captureDependency.captureDependencyWithSpecifiers)(astNode, this.remotePathResolver, this.exportMap, this.context, this.thunkFor);
              var ns = astNode.specifiers.find(function (s) {return s.type === 'ImportNamespaceSpecifier';});
              if (ns) {
                this.namespace.rawSet(ns.local.name, astNode.source.value);
              }
            }return ImportDeclaration;}(),
          ExportNamedDeclaration: function () {function ExportNamedDeclaration() {var _this2 = this;
              (0, _captureDependency.captureDependencyWithSpecifiers)(astNode, this.remotePathResolver, this.exportMap, this.context, this.thunkFor);
              // capture declaration
              if (astNode.declaration != null) {
                switch (astNode.declaration.type) {
                  case 'FunctionDeclaration':
                  case 'ClassDeclaration':
                  case 'TypeAlias': // flowtype with babel-eslint parser
                  case 'InterfaceDeclaration':
                  case 'DeclareFunction':
                  case 'TSDeclareFunction':
                  case 'TSEnumDeclaration':
                  case 'TSTypeAliasDeclaration':
                  case 'TSInterfaceDeclaration':
                  case 'TSAbstractClassDeclaration':
                  case 'TSModuleDeclaration':
                    this.exportMap.namespace.set(astNode.declaration.id.name, (0, _doc.captureDoc)(this.source, this.docStyleParsers, astNode));
                    break;
                  case 'VariableDeclaration':
                    astNode.declaration.declarations.forEach(function (d) {
                      (0, _patternCapture2['default'])(
                      d.id,
                      function (id) {return _this2.exportMap.namespace.set(id.name, (0, _doc.captureDoc)(_this2.source, _this2.docStyleParsers, d, astNode));});

                    });
                    break;
                  default:}

              }
              astNode.specifiers.forEach(function (s) {return (0, _specifier2['default'])(s, astNode, _this2.exportMap, _this2.namespace);});
            }return ExportNamedDeclaration;}(),
          TSExportAssignment: function () {function TSExportAssignment() {return _this3.typeScriptExport(astNode);}return TSExportAssignment;}() },
        this.isEsModuleInteropTrue && { TSNamespaceExportDeclaration: function () {function TSNamespaceExportDeclaration() {return _this3.typeScriptExport(astNode);}return TSNamespaceExportDeclaration;}() });

      }return build;}()

    // This doesn't declare anything, but changes what's being exported.
  }, { key: 'typeScriptExport', value: function () {function typeScriptExport(astNode) {var _this4 = this;
        var exportedName = astNode.type === 'TSNamespaceExportDeclaration' ?
        (astNode.id || astNode.name).name :
        astNode.expression && astNode.expression.name || astNode.expression.id && astNode.expression.id.name || null;
        var declTypes = [
        'VariableDeclaration',
        'ClassDeclaration',
        'TSDeclareFunction',
        'TSEnumDeclaration',
        'TSTypeAliasDeclaration',
        'TSInterfaceDeclaration',
        'TSAbstractClassDeclaration',
        'TSModuleDeclaration'];

        var exportedDecls = this.ast.body.filter(function (_ref) {var type = _ref.type,id = _ref.id,declarations = _ref.declarations;return (0, _arrayIncludes2['default'])(declTypes, type) && (
          id && id.name === exportedName || declarations && declarations.find(function (d) {return d.id.name === exportedName;}));});

        if (exportedDecls.length === 0) {
          // Export is not referencing any local declaration, must be re-exporting
          this.exportMap.namespace.set('default', (0, _doc.captureDoc)(this.source, this.docStyleParsers, astNode));
          return;
        }
        if (
        this.isEsModuleInteropTrue // esModuleInterop is on in tsconfig
        && !this.exportMap.namespace.has('default') // and default isn't added already
        ) {
            this.exportMap.namespace.set('default', {}); // add default export
          }
        exportedDecls.forEach(function (decl) {
          if (decl.type === 'TSModuleDeclaration') {
            if (decl.body && decl.body.type === 'TSModuleDeclaration') {
              _this4.exportMap.namespace.set(decl.body.id.name, (0, _doc.captureDoc)(_this4.source, _this4.docStyleParsers, decl.body));
            } else if (decl.body && decl.body.body) {
              decl.body.body.forEach(function (moduleBlockNode) {
                // Export-assignment exports all members in the namespace,
                // explicitly exported or not.
                var namespaceDecl = moduleBlockNode.type === 'ExportNamedDeclaration' ?
                moduleBlockNode.declaration :
                moduleBlockNode;

                if (!namespaceDecl) {
                  // TypeScript can check this for us; we needn't
                } else if (namespaceDecl.type === 'VariableDeclaration') {
                  namespaceDecl.declarations.forEach(function (d) {return (0, _patternCapture2['default'])(d.id, function (id) {return _this4.exportMap.namespace.set(
                      id.name,
                      (0, _doc.captureDoc)(_this4.source, _this4.docStyleParsers, decl, namespaceDecl, moduleBlockNode));});});


                } else {
                  _this4.exportMap.namespace.set(
                  namespaceDecl.id.name,
                  (0, _doc.captureDoc)(_this4.source, _this4.docStyleParsers, moduleBlockNode));
                }
              });
            }
          } else {
            // Export as default
            _this4.exportMap.namespace.set('default', (0, _doc.captureDoc)(_this4.source, _this4.docStyleParsers, decl));
          }
        });
      }return typeScriptExport;}() }]);return ImportExportVisitorBuilder;}();exports['default'] = ImportExportVisitorBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvdmlzaXRvci5qcyJdLCJuYW1lcyI6WyJtYWtlU291cmNlQ29kZSIsInRleHQiLCJhc3QiLCJTb3VyY2VDb2RlIiwibGVuZ3RoIiwiSW1wb3J0RXhwb3J0VmlzaXRvckJ1aWxkZXIiLCJwYXRoIiwiY29udGV4dCIsImV4cG9ydE1hcCIsIkV4cG9ydE1hcEJ1aWxkZXIiLCJjb250ZW50IiwiaXNFc01vZHVsZUludGVyb3BUcnVlIiwidGh1bmtGb3IiLCJuYW1lc3BhY2UiLCJOYW1lc3BhY2UiLCJyZW1vdGVQYXRoUmVzb2x2ZXIiLCJSZW1vdGVQYXRoIiwic291cmNlIiwiZG9jc3R5bGUiLCJzZXR0aW5ncyIsImRvY1N0eWxlUGFyc2VycyIsImZvckVhY2giLCJzdHlsZSIsImF2YWlsYWJsZURvY1N0eWxlUGFyc2VycyIsImFzdE5vZGUiLCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24iLCJleHBvcnRNZXRhIiwiZGVjbGFyYXRpb24iLCJ0eXBlIiwiYWRkIiwic2V0IiwiRXhwb3J0QWxsRGVjbGFyYXRpb24iLCJnZXR0ZXIiLCJleHBvcnRLaW5kIiwiZGVwZW5kZW5jaWVzIiwiZXhwb3J0ZWQiLCJJbXBvcnREZWNsYXJhdGlvbiIsIm5zIiwic3BlY2lmaWVycyIsImZpbmQiLCJzIiwicmF3U2V0IiwibG9jYWwiLCJuYW1lIiwidmFsdWUiLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIiwiaWQiLCJkZWNsYXJhdGlvbnMiLCJkIiwiVFNFeHBvcnRBc3NpZ25tZW50IiwidHlwZVNjcmlwdEV4cG9ydCIsIlRTTmFtZXNwYWNlRXhwb3J0RGVjbGFyYXRpb24iLCJleHBvcnRlZE5hbWUiLCJleHByZXNzaW9uIiwiZGVjbFR5cGVzIiwiZXhwb3J0ZWREZWNscyIsImJvZHkiLCJmaWx0ZXIiLCJoYXMiLCJkZWNsIiwibW9kdWxlQmxvY2tOb2RlIiwibmFtZXNwYWNlRGVjbCJdLCJtYXBwaW5ncyI6ImduQkFBQSwrQztBQUNBO0FBQ0E7QUFDQSx3QztBQUNBLHdDO0FBQ0E7QUFDQSxrRDtBQUNBLDBDOztBQUVBOzs7QUFHQSxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFDakMsTUFBSUMsbUJBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekI7QUFDQSxXQUFPLElBQUlELGtCQUFKLENBQWVGLElBQWYsRUFBcUJDLEdBQXJCLENBQVA7QUFDRCxHQUhELE1BR087QUFDTDtBQUNBLFdBQU8sSUFBSUMsa0JBQUosQ0FBZSxFQUFFRixVQUFGLEVBQVFDLFFBQVIsRUFBZixDQUFQO0FBQ0Q7QUFDRixDOztBQUVvQkcsMEI7QUFDbkI7QUFDRUMsTUFERjtBQUVFQyxTQUZGO0FBR0VDLFdBSEY7QUFJRUMsa0JBSkY7QUFLRUMsU0FMRjtBQU1FUixLQU5GO0FBT0VTLHVCQVBGO0FBUUVDLFVBUkY7QUFTRTtBQUNBLFNBQUtMLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtNLFNBQUwsR0FBaUIsSUFBSUMsc0JBQUosQ0FBY1IsSUFBZCxFQUFvQkMsT0FBcEIsRUFBNkJFLGdCQUE3QixDQUFqQjtBQUNBLFNBQUtNLGtCQUFMLEdBQTBCLElBQUlDLHNCQUFKLENBQWVWLElBQWYsRUFBcUJDLE9BQXJCLENBQTFCO0FBQ0EsU0FBS1UsTUFBTCxHQUFjakIsZUFBZVUsT0FBZixFQUF3QlIsR0FBeEIsQ0FBZDtBQUNBLFNBQUtNLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS04sR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS1MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsUUFBTU0sV0FBVyxLQUFLWCxPQUFMLENBQWFZLFFBQWIsSUFBeUIsS0FBS1osT0FBTCxDQUFhWSxRQUFiLENBQXNCLGlCQUF0QixDQUF6QixJQUFxRSxDQUFDLE9BQUQsQ0FBdEY7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0FGLGFBQVNHLE9BQVQsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFCLFlBQUtGLGVBQUwsQ0FBcUJFLEtBQXJCLElBQThCQyw4QkFBeUJELEtBQXpCLENBQTlCO0FBQ0QsS0FGRDtBQUdELEc7O0FBRUtFLGEsRUFBUztBQUNiO0FBQ0VDLGtDQURGLG1EQUM2QjtBQUN6QixrQkFBTUMsYUFBYSxxQkFBVyxLQUFLVCxNQUFoQixFQUF3QixLQUFLRyxlQUE3QixFQUE4Q0ksT0FBOUMsQ0FBbkI7QUFDQSxrQkFBSUEsUUFBUUcsV0FBUixDQUFvQkMsSUFBcEIsS0FBNkIsWUFBakMsRUFBK0M7QUFDN0MscUJBQUtmLFNBQUwsQ0FBZWdCLEdBQWYsQ0FBbUJILFVBQW5CLEVBQStCRixRQUFRRyxXQUF2QztBQUNEO0FBQ0QsbUJBQUtuQixTQUFMLENBQWVLLFNBQWYsQ0FBeUJpQixHQUF6QixDQUE2QixTQUE3QixFQUF3Q0osVUFBeEM7QUFDRCxhQVBIO0FBUUVLLDhCQVJGLCtDQVF5QjtBQUNyQixrQkFBTUMsU0FBUywwQ0FBa0JSLE9BQWxCLEVBQTJCQSxRQUFRUyxVQUFSLEtBQXVCLE1BQWxELEVBQTBELEtBQUtsQixrQkFBL0QsRUFBbUYsS0FBS1AsU0FBeEYsRUFBbUcsS0FBS0QsT0FBeEcsRUFBaUgsS0FBS0ssUUFBdEgsQ0FBZjtBQUNBLGtCQUFJb0IsTUFBSixFQUFZLENBQUUsS0FBS3hCLFNBQUwsQ0FBZTBCLFlBQWYsQ0FBNEJMLEdBQTVCLENBQWdDRyxNQUFoQyxFQUEwQztBQUN4RCxrQkFBSVIsUUFBUVcsUUFBWixFQUFzQjtBQUNwQiw0Q0FBaUJYLE9BQWpCLEVBQTBCQSxRQUFRVyxRQUFsQyxFQUE0QyxLQUFLM0IsU0FBakQsRUFBNEQsS0FBS0ssU0FBakU7QUFDRDtBQUNGLGFBZEg7QUFlRTtBQUNBdUIsMkJBaEJGLDRDQWdCc0I7QUFDbEIsc0VBQWdDWixPQUFoQyxFQUF5QyxLQUFLVCxrQkFBOUMsRUFBa0UsS0FBS1AsU0FBdkUsRUFBa0YsS0FBS0QsT0FBdkYsRUFBZ0csS0FBS0ssUUFBckc7QUFDQSxrQkFBTXlCLEtBQUtiLFFBQVFjLFVBQVIsQ0FBbUJDLElBQW5CLENBQXdCLFVBQUNDLENBQUQsVUFBT0EsRUFBRVosSUFBRixLQUFXLDBCQUFsQixFQUF4QixDQUFYO0FBQ0Esa0JBQUlTLEVBQUosRUFBUTtBQUNOLHFCQUFLeEIsU0FBTCxDQUFlNEIsTUFBZixDQUFzQkosR0FBR0ssS0FBSCxDQUFTQyxJQUEvQixFQUFxQ25CLFFBQVFQLE1BQVIsQ0FBZTJCLEtBQXBEO0FBQ0Q7QUFDRixhQXRCSDtBQXVCRUMsZ0NBdkJGLGlEQXVCMkI7QUFDdkIsc0VBQWdDckIsT0FBaEMsRUFBeUMsS0FBS1Qsa0JBQTlDLEVBQWtFLEtBQUtQLFNBQXZFLEVBQWtGLEtBQUtELE9BQXZGLEVBQWdHLEtBQUtLLFFBQXJHO0FBQ0E7QUFDQSxrQkFBSVksUUFBUUcsV0FBUixJQUF1QixJQUEzQixFQUFpQztBQUMvQix3QkFBUUgsUUFBUUcsV0FBUixDQUFvQkMsSUFBNUI7QUFDRSx1QkFBSyxxQkFBTDtBQUNBLHVCQUFLLGtCQUFMO0FBQ0EsdUJBQUssV0FBTCxDQUhGLENBR29CO0FBQ2xCLHVCQUFLLHNCQUFMO0FBQ0EsdUJBQUssaUJBQUw7QUFDQSx1QkFBSyxtQkFBTDtBQUNBLHVCQUFLLG1CQUFMO0FBQ0EsdUJBQUssd0JBQUw7QUFDQSx1QkFBSyx3QkFBTDtBQUNBLHVCQUFLLDRCQUFMO0FBQ0EsdUJBQUsscUJBQUw7QUFDRSx5QkFBS3BCLFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCLENBQTZCTixRQUFRRyxXQUFSLENBQW9CbUIsRUFBcEIsQ0FBdUJILElBQXBELEVBQTBELHFCQUFXLEtBQUsxQixNQUFoQixFQUF3QixLQUFLRyxlQUE3QixFQUE4Q0ksT0FBOUMsQ0FBMUQ7QUFDQTtBQUNGLHVCQUFLLHFCQUFMO0FBQ0VBLDRCQUFRRyxXQUFSLENBQW9Cb0IsWUFBcEIsQ0FBaUMxQixPQUFqQyxDQUF5QyxVQUFDMkIsQ0FBRCxFQUFPO0FBQzlDO0FBQ0VBLHdCQUFFRixFQURKO0FBRUUsZ0NBQUNBLEVBQUQsVUFBUSxPQUFLdEMsU0FBTCxDQUFlSyxTQUFmLENBQXlCaUIsR0FBekIsQ0FBNkJnQixHQUFHSCxJQUFoQyxFQUFzQyxxQkFBVyxPQUFLMUIsTUFBaEIsRUFBd0IsT0FBS0csZUFBN0IsRUFBOEM0QixDQUE5QyxFQUFpRHhCLE9BQWpELENBQXRDLENBQVIsRUFGRjs7QUFJRCxxQkFMRDtBQU1BO0FBQ0YsMEJBdEJGOztBQXdCRDtBQUNEQSxzQkFBUWMsVUFBUixDQUFtQmpCLE9BQW5CLENBQTJCLFVBQUNtQixDQUFELFVBQU8sNEJBQWlCQSxDQUFqQixFQUFvQmhCLE9BQXBCLEVBQTZCLE9BQUtoQixTQUFsQyxFQUE2QyxPQUFLSyxTQUFsRCxDQUFQLEVBQTNCO0FBQ0QsYUFyREg7QUFzREVvQywyQ0FBb0Isc0NBQU0sT0FBS0MsZ0JBQUwsQ0FBc0IxQixPQUF0QixDQUFOLEVBQXBCLDZCQXRERjtBQXVESyxhQUFLYixxQkFBTCxJQUE4QixFQUFFd0MsMkNBQThCLGdEQUFNLE9BQUtELGdCQUFMLENBQXNCMUIsT0FBdEIsQ0FBTixFQUE5Qix1Q0FBRixFQXZEbkM7O0FBeURELE87O0FBRUQ7OEVBQ2lCQSxPLEVBQVM7QUFDeEIsWUFBTTRCLGVBQWU1QixRQUFRSSxJQUFSLEtBQWlCLDhCQUFqQjtBQUNqQixTQUFDSixRQUFRc0IsRUFBUixJQUFjdEIsUUFBUW1CLElBQXZCLEVBQTZCQSxJQURaO0FBRWpCbkIsZ0JBQVE2QixVQUFSLElBQXNCN0IsUUFBUTZCLFVBQVIsQ0FBbUJWLElBQXpDLElBQWlEbkIsUUFBUTZCLFVBQVIsQ0FBbUJQLEVBQW5CLElBQXlCdEIsUUFBUTZCLFVBQVIsQ0FBbUJQLEVBQW5CLENBQXNCSCxJQUFoRyxJQUF3RyxJQUY1RztBQUdBLFlBQU1XLFlBQVk7QUFDaEIsNkJBRGdCO0FBRWhCLDBCQUZnQjtBQUdoQiwyQkFIZ0I7QUFJaEIsMkJBSmdCO0FBS2hCLGdDQUxnQjtBQU1oQixnQ0FOZ0I7QUFPaEIsb0NBUGdCO0FBUWhCLDZCQVJnQixDQUFsQjs7QUFVQSxZQUFNQyxnQkFBZ0IsS0FBS3JELEdBQUwsQ0FBU3NELElBQVQsQ0FBY0MsTUFBZCxDQUFxQixxQkFBRzdCLElBQUgsUUFBR0EsSUFBSCxDQUFTa0IsRUFBVCxRQUFTQSxFQUFULENBQWFDLFlBQWIsUUFBYUEsWUFBYixRQUFnQyxnQ0FBU08sU0FBVCxFQUFvQjFCLElBQXBCO0FBQ3pFa0IsZ0JBQU1BLEdBQUdILElBQUgsS0FBWVMsWUFBbEIsSUFBa0NMLGdCQUFnQkEsYUFBYVIsSUFBYixDQUFrQixVQUFDUyxDQUFELFVBQU9BLEVBQUVGLEVBQUYsQ0FBS0gsSUFBTCxLQUFjUyxZQUFyQixFQUFsQixDQUR1QixDQUFoQyxFQUFyQixDQUF0Qjs7QUFHQSxZQUFJRyxjQUFjbkQsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QjtBQUNBLGVBQUtJLFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCLENBQTZCLFNBQTdCLEVBQXdDLHFCQUFXLEtBQUtiLE1BQWhCLEVBQXdCLEtBQUtHLGVBQTdCLEVBQThDSSxPQUE5QyxDQUF4QztBQUNBO0FBQ0Q7QUFDRDtBQUNFLGFBQUtiLHFCQUFMLENBQTJCO0FBQTNCLFdBQ0csQ0FBQyxLQUFLSCxTQUFMLENBQWVLLFNBQWYsQ0FBeUI2QyxHQUF6QixDQUE2QixTQUE3QixDQUZOLENBRThDO0FBRjlDLFVBR0U7QUFDQSxpQkFBS2xELFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCLENBQTZCLFNBQTdCLEVBQXdDLEVBQXhDLEVBREEsQ0FDNkM7QUFDOUM7QUFDRHlCLHNCQUFjbEMsT0FBZCxDQUFzQixVQUFDc0MsSUFBRCxFQUFVO0FBQzlCLGNBQUlBLEtBQUsvQixJQUFMLEtBQWMscUJBQWxCLEVBQXlDO0FBQ3ZDLGdCQUFJK0IsS0FBS0gsSUFBTCxJQUFhRyxLQUFLSCxJQUFMLENBQVU1QixJQUFWLEtBQW1CLHFCQUFwQyxFQUEyRDtBQUN6RCxxQkFBS3BCLFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCLENBQTZCNkIsS0FBS0gsSUFBTCxDQUFVVixFQUFWLENBQWFILElBQTFDLEVBQWdELHFCQUFXLE9BQUsxQixNQUFoQixFQUF3QixPQUFLRyxlQUE3QixFQUE4Q3VDLEtBQUtILElBQW5ELENBQWhEO0FBQ0QsYUFGRCxNQUVPLElBQUlHLEtBQUtILElBQUwsSUFBYUcsS0FBS0gsSUFBTCxDQUFVQSxJQUEzQixFQUFpQztBQUN0Q0csbUJBQUtILElBQUwsQ0FBVUEsSUFBVixDQUFlbkMsT0FBZixDQUF1QixVQUFDdUMsZUFBRCxFQUFxQjtBQUMxQztBQUNBO0FBQ0Esb0JBQU1DLGdCQUFnQkQsZ0JBQWdCaEMsSUFBaEIsS0FBeUIsd0JBQXpCO0FBQ2xCZ0MsZ0NBQWdCakMsV0FERTtBQUVsQmlDLCtCQUZKOztBQUlBLG9CQUFJLENBQUNDLGFBQUwsRUFBb0I7QUFDbEI7QUFDRCxpQkFGRCxNQUVPLElBQUlBLGNBQWNqQyxJQUFkLEtBQXVCLHFCQUEzQixFQUFrRDtBQUN2RGlDLGdDQUFjZCxZQUFkLENBQTJCMUIsT0FBM0IsQ0FBbUMsVUFBQzJCLENBQUQsVUFBTyxpQ0FBd0JBLEVBQUVGLEVBQTFCLEVBQThCLFVBQUNBLEVBQUQsVUFBUSxPQUFLdEMsU0FBTCxDQUFlSyxTQUFmLENBQXlCaUIsR0FBekI7QUFDOUVnQix5QkFBR0gsSUFEMkU7QUFFOUUsMkNBQVcsT0FBSzFCLE1BQWhCLEVBQXdCLE9BQUtHLGVBQTdCLEVBQThDdUMsSUFBOUMsRUFBb0RFLGFBQXBELEVBQW1FRCxlQUFuRSxDQUY4RSxDQUFSLEVBQTlCLENBQVAsRUFBbkM7OztBQUtELGlCQU5NLE1BTUE7QUFDTCx5QkFBS3BELFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCO0FBQ0UrQixnQ0FBY2YsRUFBZCxDQUFpQkgsSUFEbkI7QUFFRSx1Q0FBVyxPQUFLMUIsTUFBaEIsRUFBd0IsT0FBS0csZUFBN0IsRUFBOEN3QyxlQUE5QyxDQUZGO0FBR0Q7QUFDRixlQXBCRDtBQXFCRDtBQUNGLFdBMUJELE1BMEJPO0FBQ0w7QUFDQSxtQkFBS3BELFNBQUwsQ0FBZUssU0FBZixDQUF5QmlCLEdBQXpCLENBQTZCLFNBQTdCLEVBQXdDLHFCQUFXLE9BQUtiLE1BQWhCLEVBQXdCLE9BQUtHLGVBQTdCLEVBQThDdUMsSUFBOUMsQ0FBeEM7QUFDRDtBQUNGLFNBL0JEO0FBZ0NELE8sMkZBbkprQnRELDBCIiwiZmlsZSI6InZpc2l0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5jbHVkZXMgZnJvbSAnYXJyYXktaW5jbHVkZXMnO1xuaW1wb3J0IHsgU291cmNlQ29kZSB9IGZyb20gJ2VzbGludCc7XG5pbXBvcnQgeyBhdmFpbGFibGVEb2NTdHlsZVBhcnNlcnMsIGNhcHR1cmVEb2MgfSBmcm9tICcuL2RvYyc7XG5pbXBvcnQgTmFtZXNwYWNlIGZyb20gJy4vbmFtZXNwYWNlJztcbmltcG9ydCBwcm9jZXNzU3BlY2lmaWVyIGZyb20gJy4vc3BlY2lmaWVyJztcbmltcG9ydCB7IGNhcHR1cmVEZXBlbmRlbmN5LCBjYXB0dXJlRGVwZW5kZW5jeVdpdGhTcGVjaWZpZXJzIH0gZnJvbSAnLi9jYXB0dXJlRGVwZW5kZW5jeSc7XG5pbXBvcnQgcmVjdXJzaXZlUGF0dGVybkNhcHR1cmUgZnJvbSAnLi9wYXR0ZXJuQ2FwdHVyZSc7XG5pbXBvcnQgeyBSZW1vdGVQYXRoIH0gZnJvbSAnLi9yZW1vdGVQYXRoJztcblxuLyoqXG4gKiBzb21ldGltZXMgbGVnYWN5IHN1cHBvcnQgaXNuJ3QgX3RoYXRfIGhhcmQuLi4gcmlnaHQ/XG4gKi9cbmZ1bmN0aW9uIG1ha2VTb3VyY2VDb2RlKHRleHQsIGFzdCkge1xuICBpZiAoU291cmNlQ29kZS5sZW5ndGggPiAxKSB7XG4gICAgLy8gRVNMaW50IDNcbiAgICByZXR1cm4gbmV3IFNvdXJjZUNvZGUodGV4dCwgYXN0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFU0xpbnQgNCwgNVxuICAgIHJldHVybiBuZXcgU291cmNlQ29kZSh7IHRleHQsIGFzdCB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBvcnRFeHBvcnRWaXNpdG9yQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGgsXG4gICAgY29udGV4dCxcbiAgICBleHBvcnRNYXAsXG4gICAgRXhwb3J0TWFwQnVpbGRlcixcbiAgICBjb250ZW50LFxuICAgIGFzdCxcbiAgICBpc0VzTW9kdWxlSW50ZXJvcFRydWUsXG4gICAgdGh1bmtGb3IsXG4gICkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuZXcgTmFtZXNwYWNlKHBhdGgsIGNvbnRleHQsIEV4cG9ydE1hcEJ1aWxkZXIpO1xuICAgIHRoaXMucmVtb3RlUGF0aFJlc29sdmVyID0gbmV3IFJlbW90ZVBhdGgocGF0aCwgY29udGV4dCk7XG4gICAgdGhpcy5zb3VyY2UgPSBtYWtlU291cmNlQ29kZShjb250ZW50LCBhc3QpO1xuICAgIHRoaXMuZXhwb3J0TWFwID0gZXhwb3J0TWFwO1xuICAgIHRoaXMuYXN0ID0gYXN0O1xuICAgIHRoaXMuaXNFc01vZHVsZUludGVyb3BUcnVlID0gaXNFc01vZHVsZUludGVyb3BUcnVlO1xuICAgIHRoaXMudGh1bmtGb3IgPSB0aHVua0ZvcjtcbiAgICBjb25zdCBkb2NzdHlsZSA9IHRoaXMuY29udGV4dC5zZXR0aW5ncyAmJiB0aGlzLmNvbnRleHQuc2V0dGluZ3NbJ2ltcG9ydC9kb2NzdHlsZSddIHx8IFsnanNkb2MnXTtcbiAgICB0aGlzLmRvY1N0eWxlUGFyc2VycyA9IHt9O1xuICAgIGRvY3N0eWxlLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICB0aGlzLmRvY1N0eWxlUGFyc2Vyc1tzdHlsZV0gPSBhdmFpbGFibGVEb2NTdHlsZVBhcnNlcnNbc3R5bGVdO1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGQoYXN0Tm9kZSkge1xuICAgIHJldHVybiB7XG4gICAgICBFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGV4cG9ydE1ldGEgPSBjYXB0dXJlRG9jKHRoaXMuc291cmNlLCB0aGlzLmRvY1N0eWxlUGFyc2VycywgYXN0Tm9kZSk7XG4gICAgICAgIGlmIChhc3ROb2RlLmRlY2xhcmF0aW9uLnR5cGUgPT09ICdJZGVudGlmaWVyJykge1xuICAgICAgICAgIHRoaXMubmFtZXNwYWNlLmFkZChleHBvcnRNZXRhLCBhc3ROb2RlLmRlY2xhcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4cG9ydE1hcC5uYW1lc3BhY2Uuc2V0KCdkZWZhdWx0JywgZXhwb3J0TWV0YSk7XG4gICAgICB9LFxuICAgICAgRXhwb3J0QWxsRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGdldHRlciA9IGNhcHR1cmVEZXBlbmRlbmN5KGFzdE5vZGUsIGFzdE5vZGUuZXhwb3J0S2luZCA9PT0gJ3R5cGUnLCB0aGlzLnJlbW90ZVBhdGhSZXNvbHZlciwgdGhpcy5leHBvcnRNYXAsIHRoaXMuY29udGV4dCwgdGhpcy50aHVua0Zvcik7XG4gICAgICAgIGlmIChnZXR0ZXIpIHsgdGhpcy5leHBvcnRNYXAuZGVwZW5kZW5jaWVzLmFkZChnZXR0ZXIpOyB9XG4gICAgICAgIGlmIChhc3ROb2RlLmV4cG9ydGVkKSB7XG4gICAgICAgICAgcHJvY2Vzc1NwZWNpZmllcihhc3ROb2RlLCBhc3ROb2RlLmV4cG9ydGVkLCB0aGlzLmV4cG9ydE1hcCwgdGhpcy5uYW1lc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqIGNhcHR1cmUgbmFtZXNwYWNlcyBpbiBjYXNlIG9mIGxhdGVyIGV4cG9ydCAqL1xuICAgICAgSW1wb3J0RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNhcHR1cmVEZXBlbmRlbmN5V2l0aFNwZWNpZmllcnMoYXN0Tm9kZSwgdGhpcy5yZW1vdGVQYXRoUmVzb2x2ZXIsIHRoaXMuZXhwb3J0TWFwLCB0aGlzLmNvbnRleHQsIHRoaXMudGh1bmtGb3IpO1xuICAgICAgICBjb25zdCBucyA9IGFzdE5vZGUuc3BlY2lmaWVycy5maW5kKChzKSA9PiBzLnR5cGUgPT09ICdJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXInKTtcbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgdGhpcy5uYW1lc3BhY2UucmF3U2V0KG5zLmxvY2FsLm5hbWUsIGFzdE5vZGUuc291cmNlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24oKSB7XG4gICAgICAgIGNhcHR1cmVEZXBlbmRlbmN5V2l0aFNwZWNpZmllcnMoYXN0Tm9kZSwgdGhpcy5yZW1vdGVQYXRoUmVzb2x2ZXIsIHRoaXMuZXhwb3J0TWFwLCB0aGlzLmNvbnRleHQsIHRoaXMudGh1bmtGb3IpO1xuICAgICAgICAvLyBjYXB0dXJlIGRlY2xhcmF0aW9uXG4gICAgICAgIGlmIChhc3ROb2RlLmRlY2xhcmF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFzdE5vZGUuZGVjbGFyYXRpb24udHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnRnVuY3Rpb25EZWNsYXJhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdDbGFzc0RlY2xhcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1R5cGVBbGlhcyc6IC8vIGZsb3d0eXBlIHdpdGggYmFiZWwtZXNsaW50IHBhcnNlclxuICAgICAgICAgICAgY2FzZSAnSW50ZXJmYWNlRGVjbGFyYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnRGVjbGFyZUZ1bmN0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1RTRGVjbGFyZUZ1bmN0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1RTRW51bURlY2xhcmF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ1RTVHlwZUFsaWFzRGVjbGFyYXRpb24nOlxuICAgICAgICAgICAgY2FzZSAnVFNJbnRlcmZhY2VEZWNsYXJhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdUU0Fic3RyYWN0Q2xhc3NEZWNsYXJhdGlvbic6XG4gICAgICAgICAgICBjYXNlICdUU01vZHVsZURlY2xhcmF0aW9uJzpcbiAgICAgICAgICAgICAgdGhpcy5leHBvcnRNYXAubmFtZXNwYWNlLnNldChhc3ROb2RlLmRlY2xhcmF0aW9uLmlkLm5hbWUsIGNhcHR1cmVEb2ModGhpcy5zb3VyY2UsIHRoaXMuZG9jU3R5bGVQYXJzZXJzLCBhc3ROb2RlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVmFyaWFibGVEZWNsYXJhdGlvbic6XG4gICAgICAgICAgICAgIGFzdE5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZShcbiAgICAgICAgICAgICAgICAgIGQuaWQsXG4gICAgICAgICAgICAgICAgICAoaWQpID0+IHRoaXMuZXhwb3J0TWFwLm5hbWVzcGFjZS5zZXQoaWQubmFtZSwgY2FwdHVyZURvYyh0aGlzLnNvdXJjZSwgdGhpcy5kb2NTdHlsZVBhcnNlcnMsIGQsIGFzdE5vZGUpKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3ROb2RlLnNwZWNpZmllcnMuZm9yRWFjaCgocykgPT4gcHJvY2Vzc1NwZWNpZmllcihzLCBhc3ROb2RlLCB0aGlzLmV4cG9ydE1hcCwgdGhpcy5uYW1lc3BhY2UpKTtcbiAgICAgIH0sXG4gICAgICBUU0V4cG9ydEFzc2lnbm1lbnQ6ICgpID0+IHRoaXMudHlwZVNjcmlwdEV4cG9ydChhc3ROb2RlKSxcbiAgICAgIC4uLnRoaXMuaXNFc01vZHVsZUludGVyb3BUcnVlICYmIHsgVFNOYW1lc3BhY2VFeHBvcnREZWNsYXJhdGlvbjogKCkgPT4gdGhpcy50eXBlU2NyaXB0RXhwb3J0KGFzdE5vZGUpIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRoaXMgZG9lc24ndCBkZWNsYXJlIGFueXRoaW5nLCBidXQgY2hhbmdlcyB3aGF0J3MgYmVpbmcgZXhwb3J0ZWQuXG4gIHR5cGVTY3JpcHRFeHBvcnQoYXN0Tm9kZSkge1xuICAgIGNvbnN0IGV4cG9ydGVkTmFtZSA9IGFzdE5vZGUudHlwZSA9PT0gJ1RTTmFtZXNwYWNlRXhwb3J0RGVjbGFyYXRpb24nXG4gICAgICA/IChhc3ROb2RlLmlkIHx8IGFzdE5vZGUubmFtZSkubmFtZVxuICAgICAgOiBhc3ROb2RlLmV4cHJlc3Npb24gJiYgYXN0Tm9kZS5leHByZXNzaW9uLm5hbWUgfHwgYXN0Tm9kZS5leHByZXNzaW9uLmlkICYmIGFzdE5vZGUuZXhwcmVzc2lvbi5pZC5uYW1lIHx8IG51bGw7XG4gICAgY29uc3QgZGVjbFR5cGVzID0gW1xuICAgICAgJ1ZhcmlhYmxlRGVjbGFyYXRpb24nLFxuICAgICAgJ0NsYXNzRGVjbGFyYXRpb24nLFxuICAgICAgJ1RTRGVjbGFyZUZ1bmN0aW9uJyxcbiAgICAgICdUU0VudW1EZWNsYXJhdGlvbicsXG4gICAgICAnVFNUeXBlQWxpYXNEZWNsYXJhdGlvbicsXG4gICAgICAnVFNJbnRlcmZhY2VEZWNsYXJhdGlvbicsXG4gICAgICAnVFNBYnN0cmFjdENsYXNzRGVjbGFyYXRpb24nLFxuICAgICAgJ1RTTW9kdWxlRGVjbGFyYXRpb24nLFxuICAgIF07XG4gICAgY29uc3QgZXhwb3J0ZWREZWNscyA9IHRoaXMuYXN0LmJvZHkuZmlsdGVyKCh7IHR5cGUsIGlkLCBkZWNsYXJhdGlvbnMgfSkgPT4gaW5jbHVkZXMoZGVjbFR5cGVzLCB0eXBlKSAmJiAoXG4gICAgICBpZCAmJiBpZC5uYW1lID09PSBleHBvcnRlZE5hbWUgfHwgZGVjbGFyYXRpb25zICYmIGRlY2xhcmF0aW9ucy5maW5kKChkKSA9PiBkLmlkLm5hbWUgPT09IGV4cG9ydGVkTmFtZSlcbiAgICApKTtcbiAgICBpZiAoZXhwb3J0ZWREZWNscy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEV4cG9ydCBpcyBub3QgcmVmZXJlbmNpbmcgYW55IGxvY2FsIGRlY2xhcmF0aW9uLCBtdXN0IGJlIHJlLWV4cG9ydGluZ1xuICAgICAgdGhpcy5leHBvcnRNYXAubmFtZXNwYWNlLnNldCgnZGVmYXVsdCcsIGNhcHR1cmVEb2ModGhpcy5zb3VyY2UsIHRoaXMuZG9jU3R5bGVQYXJzZXJzLCBhc3ROb2RlKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMuaXNFc01vZHVsZUludGVyb3BUcnVlIC8vIGVzTW9kdWxlSW50ZXJvcCBpcyBvbiBpbiB0c2NvbmZpZ1xuICAgICAgJiYgIXRoaXMuZXhwb3J0TWFwLm5hbWVzcGFjZS5oYXMoJ2RlZmF1bHQnKSAvLyBhbmQgZGVmYXVsdCBpc24ndCBhZGRlZCBhbHJlYWR5XG4gICAgKSB7XG4gICAgICB0aGlzLmV4cG9ydE1hcC5uYW1lc3BhY2Uuc2V0KCdkZWZhdWx0Jywge30pOyAvLyBhZGQgZGVmYXVsdCBleHBvcnRcbiAgICB9XG4gICAgZXhwb3J0ZWREZWNscy5mb3JFYWNoKChkZWNsKSA9PiB7XG4gICAgICBpZiAoZGVjbC50eXBlID09PSAnVFNNb2R1bGVEZWNsYXJhdGlvbicpIHtcbiAgICAgICAgaWYgKGRlY2wuYm9keSAmJiBkZWNsLmJvZHkudHlwZSA9PT0gJ1RTTW9kdWxlRGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgdGhpcy5leHBvcnRNYXAubmFtZXNwYWNlLnNldChkZWNsLmJvZHkuaWQubmFtZSwgY2FwdHVyZURvYyh0aGlzLnNvdXJjZSwgdGhpcy5kb2NTdHlsZVBhcnNlcnMsIGRlY2wuYm9keSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlY2wuYm9keSAmJiBkZWNsLmJvZHkuYm9keSkge1xuICAgICAgICAgIGRlY2wuYm9keS5ib2R5LmZvckVhY2goKG1vZHVsZUJsb2NrTm9kZSkgPT4ge1xuICAgICAgICAgICAgLy8gRXhwb3J0LWFzc2lnbm1lbnQgZXhwb3J0cyBhbGwgbWVtYmVycyBpbiB0aGUgbmFtZXNwYWNlLFxuICAgICAgICAgICAgLy8gZXhwbGljaXRseSBleHBvcnRlZCBvciBub3QuXG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2VEZWNsID0gbW9kdWxlQmxvY2tOb2RlLnR5cGUgPT09ICdFeHBvcnROYW1lZERlY2xhcmF0aW9uJ1xuICAgICAgICAgICAgICA/IG1vZHVsZUJsb2NrTm9kZS5kZWNsYXJhdGlvblxuICAgICAgICAgICAgICA6IG1vZHVsZUJsb2NrTm9kZTtcblxuICAgICAgICAgICAgaWYgKCFuYW1lc3BhY2VEZWNsKSB7XG4gICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgY2FuIGNoZWNrIHRoaXMgZm9yIHVzOyB3ZSBuZWVkbid0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZURlY2wudHlwZSA9PT0gJ1ZhcmlhYmxlRGVjbGFyYXRpb24nKSB7XG4gICAgICAgICAgICAgIG5hbWVzcGFjZURlY2wuZGVjbGFyYXRpb25zLmZvckVhY2goKGQpID0+IHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKGQuaWQsIChpZCkgPT4gdGhpcy5leHBvcnRNYXAubmFtZXNwYWNlLnNldChcbiAgICAgICAgICAgICAgICBpZC5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcHR1cmVEb2ModGhpcy5zb3VyY2UsIHRoaXMuZG9jU3R5bGVQYXJzZXJzLCBkZWNsLCBuYW1lc3BhY2VEZWNsLCBtb2R1bGVCbG9ja05vZGUpLFxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZXhwb3J0TWFwLm5hbWVzcGFjZS5zZXQoXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlRGVjbC5pZC5uYW1lLFxuICAgICAgICAgICAgICAgIGNhcHR1cmVEb2ModGhpcy5zb3VyY2UsIHRoaXMuZG9jU3R5bGVQYXJzZXJzLCBtb2R1bGVCbG9ja05vZGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRXhwb3J0IGFzIGRlZmF1bHRcbiAgICAgICAgdGhpcy5leHBvcnRNYXAubmFtZXNwYWNlLnNldCgnZGVmYXVsdCcsIGNhcHR1cmVEb2ModGhpcy5zb3VyY2UsIHRoaXMuZG9jU3R5bGVQYXJzZXJzLCBkZWNsKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==