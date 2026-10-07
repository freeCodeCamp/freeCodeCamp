'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1. find to `exports.default`
// 2. find to all Expression(`exports.default`, `exports.foo` etc)
// 3. add `module.exports` if exists only `exports.default` assignment
// The above works after executing `preset-env`(transform-es2015-modules-*) in `Plugin.post`

module.exports = function (_ref) {
  var template = _ref.template;

  var pluginOptions = void 0;

  function addModuleExportsDefaults(path) {
    var finder = new ExportsFinder(path);
    if (!finder.isOnlyExportsDefault()) {
      return;
    }
    if (finder.isAmd()) {
      return;
    }
    var rootPath = finder.getRootPath();

    // HACK: `path.node.body.push` instead of path.pushContainer(due doesn't work in Plugin.post)
    rootPath.node.body.push(template('module.exports = exports.default')());
    if (pluginOptions.addDefaultProperty) {
      rootPath.node.body.push(template('module.exports.default = exports.default')());
    }
  }

  var ExportsDefaultVisitor = {
    CallExpression: function CallExpression(path) {
      if (!path.get('callee').matchesPattern('Object.defineProperty')) {
        return;
      }

      var _path$get = path.get('arguments'),
          _path$get2 = _slicedToArray(_path$get, 2),
          identifier = _path$get2[0],
          prop = _path$get2[1];

      var objectName = identifier.get('name').node;
      var propertyName = prop.get('value').node;

      if ((objectName === 'exports' || objectName === '_exports') && propertyName === 'default') {
        addModuleExportsDefaults(path);
      }
    },
    AssignmentExpression: function AssignmentExpression(path) {
      if (path.get('left').matchesPattern('exports.default') || path.get('left').matchesPattern('_exports.default')) {
        addModuleExportsDefaults(path);
      }
    }
  };

  return {
    visitor: {
      Program: function Program(path, state) {
        // HACK: can't get plugin options in Plugin.post
        pluginOptions = state.opts;
      }
    },
    post: function post(fileMap) {
      fileMap.path.traverse(ExportsDefaultVisitor);
    }
  };
};

var ExportsFinder = function () {
  function ExportsFinder(exportsDefaultPath) {
    _classCallCheck(this, ExportsFinder);

    this.path = exportsDefaultPath;
    this.hasExportsDefault = false;
    this.hasExportsNamed = false;
    this.hasModuleExports = false;
  }

  _createClass(ExportsFinder, [{
    key: 'getRootPath',
    value: function getRootPath() {
      return this.path.findParent(function (path) {
        return path.key === 'body' || !path.parentPath;
      });
    }
  }, {
    key: 'isOnlyExportsDefault',
    value: function isOnlyExportsDefault() {
      var _this = this;

      this.getRootPath().get('body').forEach(function (path) {
        if (path.isVariableDeclaration()) {
          _this.findExports(path.get('declarations.0'), 'init');
        } else if (path.isExpressionStatement() && path.get('expression').isAssignmentExpression()) {
          _this.findExports(path);
        } else {
          _this.findExportsInCallExpression(path);
        }
      });
      return this.hasExportsDefault && !this.hasExportsNamed && !this.hasModuleExports;
    }
  }, {
    key: 'findExports',
    value: function findExports(path) {
      var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'expression';

      // Not `exports.anything`, skip
      if (!path.get('' + property).node || !path.get(property + '.left').node || !path.get(property + '.left.object').node) {
        return;
      }

      var objectName = path.get(property + '.left.object.name').node;
      // Check name of  MemberExpressions and values of StringLiterals
      var propertyName = path.get(property + '.left.property.name').node || path.get(property + '.left.property.value').node;
      if (objectName === 'exports' || objectName === '_exports') {
        if (propertyName === 'default') {
          this.hasExportsDefault = true;
          this.findExports(path.get(property), 'right');
        } else if (propertyName !== '__esModule') {
          this.hasExportsNamed = true;
        }
      }
      if (objectName + '.' + propertyName === 'module.exports') {
        this.hasModuleExports = true;
      }
    }
  }, {
    key: 'findExportsInCallExpression',
    value: function findExportsInCallExpression(path) {
      var self = this;
      path.traverse({
        CallExpression: function CallExpression(path) {
          if (!path.get('callee').matchesPattern('Object.defineProperty')) {
            return;
          }

          var _path$get3 = path.get('arguments'),
              _path$get4 = _slicedToArray(_path$get3, 2),
              identifier = _path$get4[0],
              prop = _path$get4[1];

          var objectName = identifier.get('name').node;
          var propertyName = prop.get('value').node;

          if ((objectName === 'exports' || objectName === '_exports') && propertyName !== '__esModule') {
            if (propertyName === 'default') {
              self.hasExportsDefault = true;
            } else {
              self.hasExportsNamed = true;
            }
          }
        }
      });
    }
  }, {
    key: 'isAmd',
    value: function isAmd() {
      var rootPath = this.getRootPath();
      var hasntAmdRoot = !(rootPath.parentPath && rootPath.parentPath.parentPath);
      if (hasntAmdRoot) {
        return false;
      }

      var amdRoot = rootPath.parentPath.parentPath;
      if (!amdRoot.isCallExpression()) {
        return false;
      }
      if (amdRoot.get('callee.name').node === 'define') {
        return true;
      }
      return false;
    }
  }]);

  return ExportsFinder;
}();
//# sourceMappingURL=index.js.map