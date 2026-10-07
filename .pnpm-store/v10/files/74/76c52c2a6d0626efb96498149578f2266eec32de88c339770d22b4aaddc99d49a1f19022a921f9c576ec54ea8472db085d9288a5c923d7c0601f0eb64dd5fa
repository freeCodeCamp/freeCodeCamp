'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getImportSource = getImportSource;
exports.createDynamicImportTransform = createDynamicImportTransform;
function getImportSource(t, callNode) {
  var importArguments = callNode.arguments;

  var _importArguments = _slicedToArray(importArguments, 1),
      importPath = _importArguments[0];

  var isString = t.isStringLiteral(importPath) || t.isTemplateLiteral(importPath);
  if (isString) {
    t.removeComments(importPath);
    return importPath;
  }

  return t.templateLiteral([t.templateElement({ raw: '', cooked: '' }), t.templateElement({ raw: '', cooked: '' }, true)], importArguments);
}

function createDynamicImportTransform(_ref) {
  var template = _ref.template,
      t = _ref.types;

  var builders = {
    'static': {
      interop: template('Promise.resolve().then(() => INTEROP(require(SOURCE)))'),
      noInterop: template('Promise.resolve().then(() => require(SOURCE))')
    },
    dynamic: {
      interop: template('Promise.resolve(SOURCE).then(s => INTEROP(require(s)))'),
      noInterop: template('Promise.resolve(SOURCE).then(s => require(s))')
    }
  };

  var visited = typeof WeakSet === 'function' && new WeakSet();

  var isString = function isString(node) {
    return t.isStringLiteral(node) || t.isTemplateLiteral(node) && node.expressions.length === 0;
  };

  return function (context, path) {
    if (visited) {
      if (visited.has(path)) {
        return;
      }
      visited.add(path);
    }

    var SOURCE = getImportSource(t, path.parent);

    var builder = isString(SOURCE) ? builders['static'] : builders.dynamic;

    var newImport = context.opts.noInterop ? builder.noInterop({ SOURCE: SOURCE }) : builder.interop({ SOURCE: SOURCE, INTEROP: context.addHelper('interopRequireWildcard') });

    path.parentPath.replaceWith(newImport);
  };
}