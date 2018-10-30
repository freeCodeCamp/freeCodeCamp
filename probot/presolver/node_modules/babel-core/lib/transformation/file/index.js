"use strict";

exports.__esModule = true;
exports.File = undefined;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _babelHelpers = require("babel-helpers");

var _babelHelpers2 = _interopRequireDefault(_babelHelpers);

var _metadata = require("./metadata");

var metadataVisitor = _interopRequireWildcard(_metadata);

var _convertSourceMap = require("convert-source-map");

var _convertSourceMap2 = _interopRequireDefault(_convertSourceMap);

var _optionManager = require("./options/option-manager");

var _optionManager2 = _interopRequireDefault(_optionManager);

var _pluginPass = require("../plugin-pass");

var _pluginPass2 = _interopRequireDefault(_pluginPass);

var _babelTraverse = require("babel-traverse");

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _babelGenerator = require("babel-generator");

var _babelGenerator2 = _interopRequireDefault(_babelGenerator);

var _babelCodeFrame = require("babel-code-frame");

var _babelCodeFrame2 = _interopRequireDefault(_babelCodeFrame);

var _defaults = require("lodash/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _logger = require("./logger");

var _logger2 = _interopRequireDefault(_logger);

var _store = require("../../store");

var _store2 = _interopRequireDefault(_store);

var _babylon = require("babylon");

var _util = require("../../util");

var util = _interopRequireWildcard(_util);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

var _mergeMap = require("./merge-map");

var _mergeMap2 = _interopRequireDefault(_mergeMap);

var _resolve = require("../../helpers/resolve");

var _resolve2 = _interopRequireDefault(_resolve);

var _blockHoist = require("../internal-plugins/block-hoist");

var _blockHoist2 = _interopRequireDefault(_blockHoist);

var _shadowFunctions = require("../internal-plugins/shadow-functions");

var _shadowFunctions2 = _interopRequireDefault(_shadowFunctions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shebangRegex = /^#!.*/;

var INTERNAL_PLUGINS = [[_blockHoist2.default], [_shadowFunctions2.default]];

var errorVisitor = {
  enter: function enter(path, state) {
    var loc = path.node.loc;
    if (loc) {
      state.loc = loc;
      path.stop();
    }
  }
};

var File = function (_Store) {
  (0, _inherits3.default)(File, _Store);

  function File() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var pipeline = arguments[1];
    (0, _classCallCheck3.default)(this, File);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Store.call(this));

    _this.pipeline = pipeline;

    _this.log = new _logger2.default(_this, opts.filename || "unknown");
    _this.opts = _this.initOptions(opts);

    _this.parserOpts = {
      sourceType: _this.opts.sourceType,
      sourceFileName: _this.opts.filename,
      plugins: []
    };

    _this.pluginVisitors = [];
    _this.pluginPasses = [];

    _this.buildPluginsForOptions(_this.opts);

    if (_this.opts.passPerPreset) {
      _this.perPresetOpts = [];
      _this.opts.presets.forEach(function (presetOpts) {
        var perPresetOpts = (0, _assign2.default)((0, _create2.default)(_this.opts), presetOpts);
        _this.perPresetOpts.push(perPresetOpts);
        _this.buildPluginsForOptions(perPresetOpts);
      });
    }

    _this.metadata = {
      usedHelpers: [],
      marked: [],
      modules: {
        imports: [],
        exports: {
          exported: [],
          specifiers: []
        }
      }
    };

    _this.dynamicImportTypes = {};
    _this.dynamicImportIds = {};
    _this.dynamicImports = [];
    _this.declarations = {};
    _this.usedHelpers = {};

    _this.path = null;
    _this.ast = {};

    _this.code = "";
    _this.shebang = "";

    _this.hub = new _babelTraverse.Hub(_this);
    return _this;
  }

  File.prototype.getMetadata = function getMetadata() {
    var has = false;
    for (var _iterator = this.ast.program.body, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var node = _ref;

      if (t.isModuleDeclaration(node)) {
        has = true;
        break;
      }
    }
    if (has) {
      this.path.traverse(metadataVisitor, this);
    }
  };

  File.prototype.initOptions = function initOptions(opts) {
    opts = new _optionManager2.default(this.log, this.pipeline).init(opts);

    if (opts.inputSourceMap) {
      opts.sourceMaps = true;
    }

    if (opts.moduleId) {
      opts.moduleIds = true;
    }

    opts.basename = _path2.default.basename(opts.filename, _path2.default.extname(opts.filename));

    opts.ignore = util.arrayify(opts.ignore, util.regexify);

    if (opts.only) opts.only = util.arrayify(opts.only, util.regexify);

    (0, _defaults2.default)(opts, {
      moduleRoot: opts.sourceRoot
    });

    (0, _defaults2.default)(opts, {
      sourceRoot: opts.moduleRoot
    });

    (0, _defaults2.default)(opts, {
      filenameRelative: opts.filename
    });

    var basenameRelative = _path2.default.basename(opts.filenameRelative);

    (0, _defaults2.default)(opts, {
      sourceFileName: basenameRelative,
      sourceMapTarget: basenameRelative
    });

    return opts;
  };

  File.prototype.buildPluginsForOptions = function buildPluginsForOptions(opts) {
    if (!Array.isArray(opts.plugins)) {
      return;
    }

    var plugins = opts.plugins.concat(INTERNAL_PLUGINS);
    var currentPluginVisitors = [];
    var currentPluginPasses = [];

    for (var _iterator2 = plugins, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var ref = _ref2;
      var plugin = ref[0],
          pluginOpts = ref[1];


      currentPluginVisitors.push(plugin.visitor);
      currentPluginPasses.push(new _pluginPass2.default(this, plugin, pluginOpts));

      if (plugin.manipulateOptions) {
        plugin.manipulateOptions(opts, this.parserOpts, this);
      }
    }

    this.pluginVisitors.push(currentPluginVisitors);
    this.pluginPasses.push(currentPluginPasses);
  };

  File.prototype.getModuleName = function getModuleName() {
    var opts = this.opts;
    if (!opts.moduleIds) {
      return null;
    }

    if (opts.moduleId != null && !opts.getModuleId) {
      return opts.moduleId;
    }

    var filenameRelative = opts.filenameRelative;
    var moduleName = "";

    if (opts.moduleRoot != null) {
      moduleName = opts.moduleRoot + "/";
    }

    if (!opts.filenameRelative) {
      return moduleName + opts.filename.replace(/^\//, "");
    }

    if (opts.sourceRoot != null) {
      var sourceRootRegEx = new RegExp("^" + opts.sourceRoot + "\/?");
      filenameRelative = filenameRelative.replace(sourceRootRegEx, "");
    }

    filenameRelative = filenameRelative.replace(/\.(\w*?)$/, "");

    moduleName += filenameRelative;

    moduleName = moduleName.replace(/\\/g, "/");

    if (opts.getModuleId) {
      return opts.getModuleId(moduleName) || moduleName;
    } else {
      return moduleName;
    }
  };

  File.prototype.resolveModuleSource = function resolveModuleSource(source) {
    var resolveModuleSource = this.opts.resolveModuleSource;
    if (resolveModuleSource) source = resolveModuleSource(source, this.opts.filename);
    return source;
  };

  File.prototype.addImport = function addImport(source, imported) {
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : imported;

    var alias = source + ":" + imported;
    var id = this.dynamicImportIds[alias];

    if (!id) {
      source = this.resolveModuleSource(source);
      id = this.dynamicImportIds[alias] = this.scope.generateUidIdentifier(name);

      var specifiers = [];

      if (imported === "*") {
        specifiers.push(t.importNamespaceSpecifier(id));
      } else if (imported === "default") {
        specifiers.push(t.importDefaultSpecifier(id));
      } else {
        specifiers.push(t.importSpecifier(id, t.identifier(imported)));
      }

      var declar = t.importDeclaration(specifiers, t.stringLiteral(source));
      declar._blockHoist = 3;

      this.path.unshiftContainer("body", declar);
    }

    return id;
  };

  File.prototype.addHelper = function addHelper(name) {
    var declar = this.declarations[name];
    if (declar) return declar;

    if (!this.usedHelpers[name]) {
      this.metadata.usedHelpers.push(name);
      this.usedHelpers[name] = true;
    }

    var generator = this.get("helperGenerator");
    var runtime = this.get("helpersNamespace");
    if (generator) {
      var res = generator(name);
      if (res) return res;
    } else if (runtime) {
      return t.memberExpression(runtime, t.identifier(name));
    }

    var ref = (0, _babelHelpers2.default)(name);
    var uid = this.declarations[name] = this.scope.generateUidIdentifier(name);

    if (t.isFunctionExpression(ref) && !ref.id) {
      ref.body._compact = true;
      ref._generated = true;
      ref.id = uid;
      ref.type = "FunctionDeclaration";
      this.path.unshiftContainer("body", ref);
    } else {
      ref._compact = true;
      this.scope.push({
        id: uid,
        init: ref,
        unique: true
      });
    }

    return uid;
  };

  File.prototype.addTemplateObject = function addTemplateObject(helperName, strings, raw) {
    var stringIds = raw.elements.map(function (string) {
      return string.value;
    });
    var name = helperName + "_" + raw.elements.length + "_" + stringIds.join(",");

    var declar = this.declarations[name];
    if (declar) return declar;

    var uid = this.declarations[name] = this.scope.generateUidIdentifier("templateObject");

    var helperId = this.addHelper(helperName);
    var init = t.callExpression(helperId, [strings, raw]);
    init._compact = true;
    this.scope.push({
      id: uid,
      init: init,
      _blockHoist: 1.9 });
    return uid;
  };

  File.prototype.buildCodeFrameError = function buildCodeFrameError(node, msg) {
    var Error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SyntaxError;

    var loc = node && (node.loc || node._loc);

    var err = new Error(msg);

    if (loc) {
      err.loc = loc.start;
    } else {
      (0, _babelTraverse2.default)(node, errorVisitor, this.scope, err);

      err.message += " (This is an error on an internal node. Probably an internal error";

      if (err.loc) {
        err.message += ". Location has been estimated.";
      }

      err.message += ")";
    }

    return err;
  };

  File.prototype.mergeSourceMap = function mergeSourceMap(map) {
    var inputMap = this.opts.inputSourceMap;

    if (inputMap && map) {
      return (0, _mergeMap2.default)(inputMap, map);
    } else {
      return map;
    }
  };

  File.prototype.parse = function parse(code) {
    var parseCode = _babylon.parse;
    var parserOpts = this.opts.parserOpts;

    if (parserOpts) {
      parserOpts = (0, _assign2.default)({}, this.parserOpts, parserOpts);

      if (parserOpts.parser) {
        if (typeof parserOpts.parser === "string") {
          var dirname = _path2.default.dirname(this.opts.filename) || process.cwd();
          var parser = (0, _resolve2.default)(parserOpts.parser, dirname);
          if (parser) {
            parseCode = require(parser).parse;
          } else {
            throw new Error("Couldn't find parser " + parserOpts.parser + " with \"parse\" method " + ("relative to directory " + dirname));
          }
        } else {
          parseCode = parserOpts.parser;
        }

        parserOpts.parser = {
          parse: function parse(source) {
            return (0, _babylon.parse)(source, parserOpts);
          }
        };
      }
    }

    this.log.debug("Parse start");
    var ast = parseCode(code, parserOpts || this.parserOpts);
    this.log.debug("Parse stop");
    return ast;
  };

  File.prototype._addAst = function _addAst(ast) {
    this.path = _babelTraverse.NodePath.get({
      hub: this.hub,
      parentPath: null,
      parent: ast,
      container: ast,
      key: "program"
    }).setContext();
    this.scope = this.path.scope;
    this.ast = ast;
    this.getMetadata();
  };

  File.prototype.addAst = function addAst(ast) {
    this.log.debug("Start set AST");
    this._addAst(ast);
    this.log.debug("End set AST");
  };

  File.prototype.transform = function transform() {
    for (var i = 0; i < this.pluginPasses.length; i++) {
      var pluginPasses = this.pluginPasses[i];
      this.call("pre", pluginPasses);
      this.log.debug("Start transform traverse");

      var visitor = _babelTraverse2.default.visitors.merge(this.pluginVisitors[i], pluginPasses, this.opts.wrapPluginVisitorMethod);
      (0, _babelTraverse2.default)(this.ast, visitor, this.scope);

      this.log.debug("End transform traverse");
      this.call("post", pluginPasses);
    }

    return this.generate();
  };

  File.prototype.wrap = function wrap(code, callback) {
    code = code + "";

    try {
      if (this.shouldIgnore()) {
        return this.makeResult({ code: code, ignored: true });
      } else {
        return callback();
      }
    } catch (err) {
      if (err._babel) {
        throw err;
      } else {
        err._babel = true;
      }

      var message = err.message = this.opts.filename + ": " + err.message;

      var loc = err.loc;
      if (loc) {
        err.codeFrame = (0, _babelCodeFrame2.default)(code, loc.line, loc.column + 1, this.opts);
        message += "\n" + err.codeFrame;
      }

      if (process.browser) {
        err.message = message;
      }

      if (err.stack) {
        var newStack = err.stack.replace(err.message, message);
        err.stack = newStack;
      }

      throw err;
    }
  };

  File.prototype.addCode = function addCode(code) {
    code = (code || "") + "";
    code = this.parseInputSourceMap(code);
    this.code = code;
  };

  File.prototype.parseCode = function parseCode() {
    this.parseShebang();
    var ast = this.parse(this.code);
    this.addAst(ast);
  };

  File.prototype.shouldIgnore = function shouldIgnore() {
    var opts = this.opts;
    return util.shouldIgnore(opts.filename, opts.ignore, opts.only);
  };

  File.prototype.call = function call(key, pluginPasses) {
    for (var _iterator3 = pluginPasses, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var pass = _ref3;

      var plugin = pass.plugin;
      var fn = plugin[key];
      if (fn) fn.call(pass, this);
    }
  };

  File.prototype.parseInputSourceMap = function parseInputSourceMap(code) {
    var opts = this.opts;

    if (opts.inputSourceMap !== false) {
      var inputMap = _convertSourceMap2.default.fromSource(code);
      if (inputMap) {
        opts.inputSourceMap = inputMap.toObject();
        code = _convertSourceMap2.default.removeComments(code);
      }
    }

    return code;
  };

  File.prototype.parseShebang = function parseShebang() {
    var shebangMatch = shebangRegex.exec(this.code);
    if (shebangMatch) {
      this.shebang = shebangMatch[0];
      this.code = this.code.replace(shebangRegex, "");
    }
  };

  File.prototype.makeResult = function makeResult(_ref4) {
    var code = _ref4.code,
        map = _ref4.map,
        ast = _ref4.ast,
        ignored = _ref4.ignored;

    var result = {
      metadata: null,
      options: this.opts,
      ignored: !!ignored,
      code: null,
      ast: null,
      map: map || null
    };

    if (this.opts.code) {
      result.code = code;
    }

    if (this.opts.ast) {
      result.ast = ast;
    }

    if (this.opts.metadata) {
      result.metadata = this.metadata;
    }

    return result;
  };

  File.prototype.generate = function generate() {
    var opts = this.opts;
    var ast = this.ast;

    var result = { ast: ast };
    if (!opts.code) return this.makeResult(result);

    var gen = _babelGenerator2.default;
    if (opts.generatorOpts.generator) {
      gen = opts.generatorOpts.generator;

      if (typeof gen === "string") {
        var dirname = _path2.default.dirname(this.opts.filename) || process.cwd();
        var generator = (0, _resolve2.default)(gen, dirname);
        if (generator) {
          gen = require(generator).print;
        } else {
          throw new Error("Couldn't find generator " + gen + " with \"print\" method relative " + ("to directory " + dirname));
        }
      }
    }

    this.log.debug("Generation start");

    var _result = gen(ast, opts.generatorOpts ? (0, _assign2.default)(opts, opts.generatorOpts) : opts, this.code);
    result.code = _result.code;
    result.map = _result.map;

    this.log.debug("Generation end");

    if (this.shebang) {
      result.code = this.shebang + "\n" + result.code;
    }

    if (result.map) {
      result.map = this.mergeSourceMap(result.map);
    }

    if (opts.sourceMaps === "inline" || opts.sourceMaps === "both") {
      result.code += "\n" + _convertSourceMap2.default.fromObject(result.map).toComment();
    }

    if (opts.sourceMaps === "inline") {
      result.map = null;
    }

    return this.makeResult(result);
  };

  return File;
}(_store2.default);

exports.default = File;
exports.File = File;