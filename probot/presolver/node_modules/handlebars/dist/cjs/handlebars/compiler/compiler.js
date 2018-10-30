/* eslint-disable new-cap */

'use strict';

exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

var _utils = require('../utils');

var _ast = require('./ast');

var _ast2 = _interopRequireDefault(_ast);

var slice = [].slice;

function Compiler() {}

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function equals(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (var i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function compile(program, options) {
    this.sourceNode = [];
    this.opcodes = [];
    this.children = [];
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    options.blockParams = options.blockParams || [];

    // These changes will propagate to the other compiler components
    var knownHelpers = options.knownHelpers;
    options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true,
      'lookup': true
    };
    if (knownHelpers) {
      for (var _name in knownHelpers) {
        /* istanbul ignore else */
        if (_name in knownHelpers) {
          options.knownHelpers[_name] = knownHelpers[_name];
        }
      }
    }

    return this.accept(program);
  },

  compileProgram: function compileProgram(program) {
    var childCompiler = new this.compiler(),
        // eslint-disable-line new-cap
    result = childCompiler.compile(program, this.options),
        guid = this.guid++;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;
    this.useDepths = this.useDepths || result.useDepths;

    return guid;
  },

  accept: function accept(node) {
    /* istanbul ignore next: Sanity code */
    if (!this[node.type]) {
      throw new _exception2['default']('Unknown type: ' + node.type, node);
    }

    this.sourceNode.unshift(node);
    var ret = this[node.type](node);
    this.sourceNode.shift();
    return ret;
  },

  Program: function Program(program) {
    this.options.blockParams.unshift(program.blockParams);

    var body = program.body,
        bodyLength = body.length;
    for (var i = 0; i < bodyLength; i++) {
      this.accept(body[i]);
    }

    this.options.blockParams.shift();

    this.isSimple = bodyLength === 1;
    this.blockParams = program.blockParams ? program.blockParams.length : 0;

    return this;
  },

  BlockStatement: function BlockStatement(block) {
    transformLiteralToPath(block);

    var program = block.program,
        inverse = block.inverse;

    program = program && this.compileProgram(program);
    inverse = inverse && this.compileProgram(inverse);

    var type = this.classifySexpr(block);

    if (type === 'helper') {
      this.helperSexpr(block, program, inverse);
    } else if (type === 'simple') {
      this.simpleSexpr(block);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue', block.path.original);
    } else {
      this.ambiguousSexpr(block, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  DecoratorBlock: function DecoratorBlock(decorator) {
    var program = decorator.program && this.compileProgram(decorator.program);
    var params = this.setupFullMustacheParams(decorator, program, undefined),
        path = decorator.path;

    this.useDecorators = true;
    this.opcode('registerDecorator', params.length, path.original);
  },

  PartialStatement: function PartialStatement(partial) {
    this.usePartial = true;

    var program = partial.program;
    if (program) {
      program = this.compileProgram(partial.program);
    }

    var params = partial.params;
    if (params.length > 1) {
      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
    } else if (!params.length) {
      if (this.options.explicitPartialContext) {
        this.opcode('pushLiteral', 'undefined');
      } else {
        params.push({ type: 'PathExpression', parts: [], depth: 0 });
      }
    }

    var partialName = partial.name.original,
        isDynamic = partial.name.type === 'SubExpression';
    if (isDynamic) {
      this.accept(partial.name);
    }

    this.setupFullMustacheParams(partial, program, undefined, true);

    var indent = partial.indent || '';
    if (this.options.preventIndent && indent) {
      this.opcode('appendContent', indent);
      indent = '';
    }

    this.opcode('invokePartial', isDynamic, partialName, indent);
    this.opcode('append');
  },
  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
    this.PartialStatement(partialBlock);
  },

  MustacheStatement: function MustacheStatement(mustache) {
    this.SubExpression(mustache);

    if (mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },
  Decorator: function Decorator(decorator) {
    this.DecoratorBlock(decorator);
  },

  ContentStatement: function ContentStatement(content) {
    if (content.value) {
      this.opcode('appendContent', content.value);
    }
  },

  CommentStatement: function CommentStatement() {},

  SubExpression: function SubExpression(sexpr) {
    transformLiteralToPath(sexpr);
    var type = this.classifySexpr(sexpr);

    if (type === 'simple') {
      this.simpleSexpr(sexpr);
    } else if (type === 'helper') {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },
  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
    var path = sexpr.path,
        name = path.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', path.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    path.strict = true;
    this.accept(path);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function simpleSexpr(sexpr) {
    var path = sexpr.path;
    path.strict = true;
    this.accept(path);
    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function helperSexpr(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse),
        path = sexpr.path,
        name = path.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
    } else {
      path.strict = true;
      path.falsy = true;

      this.accept(path);
      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
    }
  },

  PathExpression: function PathExpression(path) {
    this.addDepth(path.depth);
    this.opcode('getContext', path.depth);

    var name = path.parts[0],
        scoped = _ast2['default'].helpers.scopedId(path),
        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

    if (blockParamId) {
      this.opcode('lookupBlockParam', blockParamId, path.parts);
    } else if (!name) {
      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
      this.opcode('pushContext');
    } else if (path.data) {
      this.options.data = true;
      this.opcode('lookupData', path.depth, path.parts, path.strict);
    } else {
      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
    }
  },

  StringLiteral: function StringLiteral(string) {
    this.opcode('pushString', string.value);
  },

  NumberLiteral: function NumberLiteral(number) {
    this.opcode('pushLiteral', number.value);
  },

  BooleanLiteral: function BooleanLiteral(bool) {
    this.opcode('pushLiteral', bool.value);
  },

  UndefinedLiteral: function UndefinedLiteral() {
    this.opcode('pushLiteral', 'undefined');
  },

  NullLiteral: function NullLiteral() {
    this.opcode('pushLiteral', 'null');
  },

  Hash: function Hash(hash) {
    var pairs = hash.pairs,
        i = 0,
        l = pairs.length;

    this.opcode('pushHash');

    for (; i < l; i++) {
      this.pushParam(pairs[i].value);
    }
    while (i--) {
      this.opcode('assignToHash', pairs[i].key);
    }
    this.opcode('popHash');
  },

  // HELPERS
  opcode: function opcode(name) {
    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
  },

  addDepth: function addDepth(depth) {
    if (!depth) {
      return;
    }

    this.useDepths = true;
  },

  classifySexpr: function classifySexpr(sexpr) {
    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
    var isEligible = !isBlockParam && (isHelper || isSimple);

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      var _name2 = sexpr.path.parts[0],
          options = this.options;

      if (options.knownHelpers[_name2]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) {
      return 'helper';
    } else if (isEligible) {
      return 'ambiguous';
    } else {
      return 'simple';
    }
  },

  pushParams: function pushParams(params) {
    for (var i = 0, l = params.length; i < l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function pushParam(val) {
    var value = val.value != null ? val.value : val.original || '';

    if (this.stringParams) {
      if (value.replace) {
        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
      }

      if (val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode('getContext', val.depth || 0);
      this.opcode('pushStringParam', value, val.type);

      if (val.type === 'SubExpression') {
        // SubExpressions get evaluated and passed in
        // in string params mode.
        this.accept(val);
      }
    } else {
      if (this.trackIds) {
        var blockParamIndex = undefined;
        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
          blockParamIndex = this.blockParamIndex(val.parts[0]);
        }
        if (blockParamIndex) {
          var blockParamChild = val.parts.slice(1).join('.');
          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
        } else {
          value = val.original || value;
          if (value.replace) {
            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
          }

          this.opcode('pushId', val.type, value);
        }
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
    var params = sexpr.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if (sexpr.hash) {
      this.accept(sexpr.hash);
    } else {
      this.opcode('emptyHash', omitEmpty);
    }

    return params;
  },

  blockParamIndex: function blockParamIndex(name) {
    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
      var blockParams = this.options.blockParams[depth],
          param = blockParams && _utils.indexOf(blockParams, name);
      if (blockParams && param >= 0) {
        return [depth, param];
      }
    }
  }
};

function precompile(input, options, env) {
  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var ast = env.parse(input, options),
      environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

function compile(input, options, env) {
  if (options === undefined) options = {};

  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
  }

  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var compiled = undefined;

  function compileInput() {
    var ast = env.parse(input, options),
        environment = new env.Compiler().compile(ast, options),
        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
    return env.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  function ret(context, execOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, execOptions);
  }
  ret._setup = function (setupOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(setupOptions);
  };
  ret._child = function (i, data, blockParams, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, blockParams, depths);
  };
  return ret;
}

function argEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}

function transformLiteralToPath(sexpr) {
  if (!sexpr.path.parts) {
    var literal = sexpr.path;
    // Casting to string here to make false and 0 literal values play nicely with the rest
    // of the system.
    sexpr.path = {
      type: 'PathExpression',
      data: false,
      depth: 0,
      parts: [literal.original + ''],
      original: literal.original + '',
      loc: literal.loc
    };
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2NvbXBpbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFFc0IsY0FBYzs7OztxQkFDTCxVQUFVOzttQkFDekIsT0FBTzs7OztBQUV2QixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDOztBQUVoQixTQUFTLFFBQVEsR0FBRyxFQUFFOzs7Ozs7O0FBTzdCLFFBQVEsQ0FBQyxTQUFTLEdBQUc7QUFDbkIsVUFBUSxFQUFFLFFBQVE7O0FBRWxCLFFBQU0sRUFBRSxnQkFBUyxLQUFLLEVBQUU7QUFDdEIsUUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDOUIsUUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7QUFDaEMsYUFBTyxLQUFLLENBQUM7S0FDZDs7QUFFRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1VBQ3hCLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JGLGVBQU8sS0FBSyxDQUFDO09BQ2Q7S0FDRjs7OztBQUlELE9BQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMzQixTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFVBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxD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QUU7QUFDckQsU0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakMsVUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDMUIsZUFBTyxLQUFLLENBQUM7T0FDZDtLQUNGO0FBQ0QsV0FBTyxJQUFJLENBQUM7R0FDYjtDQUNGOztBQUVELFNBQVMsc0JBQXNCLENBQUMsS0FBSyxFQUFFO0FBQ3JDLE1BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNyQixRQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOzs7QUFHekIsU0FBSyxDQUFDLElBQUksR0FBRztBQUNYLFVBQUksRUFBRSxnQkFBZ0I7QUFDdEIsVUFBSSxFQUFFLEtBQUs7QUFDWCxXQUFLLEVBQUUsQ0FBQztBQUNSLFdBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzlCLGNBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUU7QUFDL0IsU0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO0tBQ2pCLENBQUM7R0FDSDtDQUNGIiwiZmlsZSI6ImNvbXBpbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4uL2V4Y2VwdGlvbic7XG5pbXBvcnQge2lzQXJyYXksIGluZGV4T2Z9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBBU1QgZnJvbSAnLi9hc3QnO1xuXG5jb25zdCBzbGljZSA9IFtdLnNsaWNlO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsZXIoKSB7fVxuXG4vLyB0aGUgZm91bmRIZWxwZXIgcmVnaXN0ZXIgd2lsbCBkaXNhbWJpZ3VhdGUgaGVscGVyIGxvb2t1cCBmcm9tIGZpbmRpbmcgYVxuLy8gZnVuY3Rpb24gaW4gYSBjb250ZXh0LiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbXVzdGFjaGUgY29tcGF0aWJpbGl0eSwgd2hpY2hcbi8vIHJlcXVpcmVzIHRoYXQgY29udGV4dCBmdW5jdGlvbnMgaW4gYmxvY2tzIGFyZSBldmFsdWF0ZWQgYnkgYmxvY2tIZWxwZXJNaXNzaW5nLFxuLy8gYW5kIHRoZW4gcHJvY2VlZCBhcyBpZiB0aGUgcmVzdWx0aW5nIHZhbHVlIHdhcyBwcm92aWRlZCB0byBibG9ja0hlbHBlck1pc3NpbmcuXG5cbkNvbXBpbGVyLnByb3RvdHlwZSA9IHtcbiAgY29tcGlsZXI6IENvbXBpbGVyLFxuXG4gIGVxdWFsczogZnVuY3Rpb24ob3RoZXIpIHtcbiAgICBsZXQgbGVuID0gdGhpcy5vcGNvZGVzLmxlbmd0aDtcbiAgICBpZiAob3RoZXIub3Bjb2Rlcy5sZW5ndGggIT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBvcGNvZGUgPSB0aGlzLm9wY29kZXNbaV0sXG4gICAgICAgICAgb3RoZXJPcGNvZGUgPSBvdGhlci5vcGNvZGVzW2ldO1xuICAgICAgaWYgKG9wY29kZS5vcGNvZGUgIT09IG90aGVyT3Bjb2RlLm9wY29kZSB8fCAhYXJnRXF1YWxzKG9wY29kZS5hcmdzLCBvdGhlck9wY29kZS5hcmdzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2Uga25vdyB0aGF0IGxlbmd0aCBpcyB0aGUgc2FtZSBiZXR3ZWVuIHRoZSB0d28gYXJyYXlzIGJlY2F1c2UgdGhleSBhcmUgZGlyZWN0bHkgdGllZFxuICAgIC8vIHRvIHRoZSBvcGNvZGUgYmVoYXZpb3IgYWJvdmUuXG4gICAgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2ldLmVxdWFscyhvdGhlci5jaGlsZHJlbltpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIGd1aWQ6IDAsXG5cbiAgY29tcGlsZTogZnVuY3Rpb24ocHJvZ3JhbSwgb3B0aW9ucykge1xuICAgIHRoaXMuc291cmNlTm9kZSA9IFtdO1xuICAgIHRoaXMub3Bjb2RlcyA9IFtdO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gb3B0aW9ucy5zdHJpbmdQYXJhbXM7XG4gICAgdGhpcy50cmFja0lkcyA9IG9wdGlvbnMudHJhY2tJZHM7XG5cbiAgICBvcHRpb25zLmJsb2NrUGFyYW1zID0gb3B0aW9ucy5ibG9ja1BhcmFtcyB8fCBbXTtcblxuICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcbiAgICBsZXQga25vd25IZWxwZXJzID0gb3B0aW9ucy5rbm93bkhlbHBlcnM7XG4gICAgb3B0aW9ucy5rbm93bkhlbHBlcnMgPSB7XG4gICAgICAnaGVscGVyTWlzc2luZyc6IHRydWUsXG4gICAgICAnYmxvY2tIZWxwZXJNaXNzaW5nJzogdHJ1ZSxcbiAgICAgICdlYWNoJzogdHJ1ZSxcbiAgICAgICdpZic6IHRydWUsXG4gICAgICAndW5sZXNzJzogdHJ1ZSxcbiAgICAgICd3aXRoJzogdHJ1ZSxcbiAgICAgICdsb2cnOiB0cnVlLFxuICAgICAgJ2xvb2t1cCc6IHRydWVcbiAgICB9O1xuICAgIGlmIChrbm93bkhlbHBlcnMpIHtcbiAgICAgIGZvciAobGV0IG5hbWUgaW4ga25vd25IZWxwZXJzKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChuYW1lIGluIGtub3duSGVscGVycykge1xuICAgICAgICAgIG9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdID0ga25vd25IZWxwZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYWNjZXB0KHByb2dyYW0pO1xuICB9LFxuXG4gIGNvbXBpbGVQcm9ncmFtOiBmdW5jdGlvbihwcm9ncmFtKSB7XG4gICAgbGV0IGNoaWxkQ29tcGlsZXIgPSBuZXcgdGhpcy5jb21waWxlcigpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgICAgICAgcmVzdWx0ID0gY2hpbGRDb21waWxlci5jb21waWxlKHByb2dyYW0sIHRoaXMub3B0aW9ucyksXG4gICAgICAgIGd1aWQgPSB0aGlzLmd1aWQrKztcblxuICAgIHRoaXMudXNlUGFydGlhbCA9IHRoaXMudXNlUGFydGlhbCB8fCByZXN1bHQudXNlUGFydGlhbDtcblxuICAgIHRoaXMuY2hpbGRyZW5bZ3VpZF0gPSByZXN1bHQ7XG4gICAgdGhpcy51c2VEZXB0aHMgPSB0aGlzLnVzZURlcHRocyB8fCByZXN1bHQudXNlRGVwdGhzO1xuXG4gICAgcmV0dXJuIGd1aWQ7XG4gIH0sXG5cbiAgYWNjZXB0OiBmdW5jdGlvbihub2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IFNhbml0eSBjb2RlICovXG4gICAgaWYgKCF0aGlzW25vZGUudHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdHlwZTogJyArIG5vZGUudHlwZSwgbm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zb3VyY2VOb2RlLnVuc2hpZnQobm9kZSk7XG4gICAgbGV0IHJldCA9IHRoaXNbbm9kZS50eXBlXShub2RlKTtcbiAgICB0aGlzLnNvdXJjZU5vZGUuc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIFByb2dyYW06IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgICB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXMudW5zaGlmdChwcm9ncmFtLmJsb2NrUGFyYW1zKTtcblxuICAgIGxldCBib2R5ID0gcHJvZ3JhbS5ib2R5LFxuICAgICAgICBib2R5TGVuZ3RoID0gYm9keS5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2R5TGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuYWNjZXB0KGJvZHlbaV0pO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5zaGlmdCgpO1xuXG4gICAgdGhpcy5pc1NpbXBsZSA9IGJvZHlMZW5ndGggPT09IDE7XG4gICAgdGhpcy5ibG9ja1BhcmFtcyA9IHByb2dyYW0uYmxvY2tQYXJhbXMgPyBwcm9ncmFtLmJsb2NrUGFyYW1zLmxlbmd0aCA6IDA7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBCbG9ja1N0YXRlbWVudDogZnVuY3Rpb24oYmxvY2spIHtcbiAgICB0cmFuc2Zvcm1MaXRlcmFsVG9QYXRoKGJsb2NrKTtcblxuICAgIGxldCBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSxcbiAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cbiAgICBwcm9ncmFtID0gcHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKHByb2dyYW0pO1xuICAgIGludmVyc2UgPSBpbnZlcnNlICYmIHRoaXMuY29tcGlsZVByb2dyYW0oaW52ZXJzZSk7XG5cbiAgICBsZXQgdHlwZSA9IHRoaXMuY2xhc3NpZnlTZXhwcihibG9jayk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2hlbHBlcicpIHtcbiAgICAgIHRoaXMuaGVscGVyU2V4cHIoYmxvY2ssIHByb2dyYW0sIGludmVyc2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NpbXBsZScpIHtcbiAgICAgIHRoaXMuc2ltcGxlU2V4cHIoYmxvY2spO1xuXG4gICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG4gICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2BcbiAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG4gICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG4gICAgICB0aGlzLm9wY29kZSgnYmxvY2tWYWx1ZScsIGJsb2NrLnBhdGgub3JpZ2luYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFtYmlndW91c1NleHByKGJsb2NrLCBwcm9ncmFtLCBpbnZlcnNlKTtcblxuICAgICAgLy8gbm93IHRoYXQgdGhlIHNpbXBsZSBtdXN0YWNoZSBpcyByZXNvbHZlZCwgd2UgbmVlZCB0b1xuICAgICAgLy8gZXZhbHVhdGUgaXQgYnkgZXhlY3V0aW5nIGBibG9ja0hlbHBlck1pc3NpbmdgXG4gICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcbiAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIGludmVyc2UpO1xuICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcpO1xuICAgICAgdGhpcy5vcGNvZGUoJ2FtYmlndW91c0Jsb2NrVmFsdWUnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wY29kZSgnYXBwZW5kJyk7XG4gIH0sXG5cbiAgRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKSB7XG4gICAgbGV0IHByb2dyYW0gPSBkZWNvcmF0b3IucHJvZ3JhbSAmJiB0aGlzLmNvbXBpbGVQcm9ncmFtKGRlY29yYXRvci5wcm9ncmFtKTtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5zZXR1cEZ1bGxNdXN0YWNoZVBhcmFtcyhkZWNvcmF0b3IsIHByb2dyYW0sIHVuZGVmaW5lZCksXG4gICAgICAgIHBhdGggPSBkZWNvcmF0b3IucGF0aDtcblxuICAgIHRoaXMudXNlRGVjb3JhdG9ycyA9IHRydWU7XG4gICAgdGhpcy5vcGNvZGUoJ3JlZ2lzdGVyRGVjb3JhdG9yJywgcGFyYW1zLmxlbmd0aCwgcGF0aC5vcmlnaW5hbCk7XG4gIH0sXG5cbiAgUGFydGlhbFN0YXRlbWVudDogZnVuY3Rpb24ocGFydGlhbCkge1xuICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cbiAgICBsZXQgcHJvZ3JhbSA9IHBhcnRpYWwucHJvZ3JhbTtcbiAgICBpZiAocHJvZ3JhbSkge1xuICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocGFydGlhbC5wcm9ncmFtKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0gcGFydGlhbC5wYXJhbXM7XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbnN1cHBvcnRlZCBudW1iZXIgb2YgcGFydGlhbCBhcmd1bWVudHM6ICcgKyBwYXJhbXMubGVuZ3RoLCBwYXJ0aWFsKTtcbiAgICB9IGVsc2UgaWYgKCFwYXJhbXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4cGxpY2l0UGFydGlhbENvbnRleHQpIHtcbiAgICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnB1c2goe3R5cGU6ICdQYXRoRXhwcmVzc2lvbicsIHBhcnRzOiBbXSwgZGVwdGg6IDB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLm5hbWUub3JpZ2luYWwsXG4gICAgICAgIGlzRHluYW1pYyA9IHBhcnRpYWwubmFtZS50eXBlID09PSAnU3ViRXhwcmVzc2lvbic7XG4gICAgaWYgKGlzRHluYW1pYykge1xuICAgICAgdGhpcy5hY2NlcHQocGFydGlhbC5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwRnVsbE11c3RhY2hlUGFyYW1zKHBhcnRpYWwsIHByb2dyYW0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBsZXQgaW5kZW50ID0gcGFydGlhbC5pbmRlbnQgfHwgJyc7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50SW5kZW50ICYmIGluZGVudCkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBpbmRlbnQpO1xuICAgICAgaW5kZW50ID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5vcGNvZGUoJ2ludm9rZVBhcnRpYWwnLCBpc0R5bmFtaWMsIHBhcnRpYWxOYW1lLCBpbmRlbnQpO1xuICAgIHRoaXMub3Bjb2RlKCdhcHBlbmQnKTtcbiAgfSxcbiAgUGFydGlhbEJsb2NrU3RhdGVtZW50OiBmdW5jdGlvbihwYXJ0aWFsQmxvY2spIHtcbiAgICB0aGlzLlBhcnRpYWxTdGF0ZW1lbnQocGFydGlhbEJsb2NrKTtcbiAgfSxcblxuICBNdXN0YWNoZVN0YXRlbWVudDogZnVuY3Rpb24obXVzdGFjaGUpIHtcbiAgICB0aGlzLlN1YkV4cHJlc3Npb24obXVzdGFjaGUpO1xuXG4gICAgaWYgKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZEVzY2FwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuICAgIH1cbiAgfSxcbiAgRGVjb3JhdG9yKGRlY29yYXRvcikge1xuICAgIHRoaXMuRGVjb3JhdG9yQmxvY2soZGVjb3JhdG9yKTtcbiAgfSxcblxuXG4gIENvbnRlbnRTdGF0ZW1lbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudC52YWx1ZSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZENvbnRlbnQnLCBjb250ZW50LnZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgQ29tbWVudFN0YXRlbWVudDogZnVuY3Rpb24oKSB7fSxcblxuICBTdWJFeHByZXNzaW9uOiBmdW5jdGlvbihzZXhwcikge1xuICAgIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpO1xuICAgIGxldCB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKHNleHByKTtcblxuICAgIGlmICh0eXBlID09PSAnc2ltcGxlJykge1xuICAgICAgdGhpcy5zaW1wbGVTZXhwcihzZXhwcik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnaGVscGVyJykge1xuICAgICAgdGhpcy5oZWxwZXJTZXhwcihzZXhwcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW1iaWd1b3VzU2V4cHIoc2V4cHIpO1xuICAgIH1cbiAgfSxcbiAgYW1iaWd1b3VzU2V4cHI6IGZ1bmN0aW9uKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG4gICAgbGV0IHBhdGggPSBzZXhwci5wYXRoLFxuICAgICAgICBuYW1lID0gcGF0aC5wYXJ0c1swXSxcbiAgICAgICAgaXNCbG9jayA9IHByb2dyYW0gIT0gbnVsbCB8fCBpbnZlcnNlICE9IG51bGw7XG5cbiAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIHBhdGguZGVwdGgpO1xuXG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cbiAgICBwYXRoLnN0cmljdCA9IHRydWU7XG4gICAgdGhpcy5hY2NlcHQocGF0aCk7XG5cbiAgICB0aGlzLm9wY29kZSgnaW52b2tlQW1iaWd1b3VzJywgbmFtZSwgaXNCbG9jayk7XG4gIH0sXG5cbiAgc2ltcGxlU2V4cHI6IGZ1bmN0aW9uKHNleHByKSB7XG4gICAgbGV0IHBhdGggPSBzZXhwci5wYXRoO1xuICAgIHBhdGguc3RyaWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmFjY2VwdChwYXRoKTtcbiAgICB0aGlzLm9wY29kZSgncmVzb2x2ZVBvc3NpYmxlTGFtYmRhJyk7XG4gIH0sXG5cbiAgaGVscGVyU2V4cHI6IGZ1bmN0aW9uKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpLFxuICAgICAgICBwYXRoID0gc2V4cHIucGF0aCxcbiAgICAgICAgbmFtZSA9IHBhdGgucGFydHNbMF07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignWW91IHNwZWNpZmllZCBrbm93bkhlbHBlcnNPbmx5LCBidXQgdXNlZCB0aGUgdW5rbm93biBoZWxwZXIgJyArIG5hbWUsIHNleHByKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aC5zdHJpY3QgPSB0cnVlO1xuICAgICAgcGF0aC5mYWxzeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuYWNjZXB0KHBhdGgpO1xuICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIHBhdGgub3JpZ2luYWwsIEFTVC5oZWxwZXJzLnNpbXBsZUlkKHBhdGgpKTtcbiAgICB9XG4gIH0sXG5cbiAgUGF0aEV4cHJlc3Npb246IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICB0aGlzLmFkZERlcHRoKHBhdGguZGVwdGgpO1xuICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgcGF0aC5kZXB0aCk7XG5cbiAgICBsZXQgbmFtZSA9IHBhdGgucGFydHNbMF0sXG4gICAgICAgIHNjb3BlZCA9IEFTVC5oZWxwZXJzLnNjb3BlZElkKHBhdGgpLFxuICAgICAgICBibG9ja1BhcmFtSWQgPSAhcGF0aC5kZXB0aCAmJiAhc2NvcGVkICYmIHRoaXMuYmxvY2tQYXJhbUluZGV4KG5hbWUpO1xuXG4gICAgaWYgKGJsb2NrUGFyYW1JZCkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cEJsb2NrUGFyYW0nLCBibG9ja1BhcmFtSWQsIHBhdGgucGFydHMpO1xuICAgIH0gZWxzZSBpZiAoIW5hbWUpIHtcbiAgICAgIC8vIENvbnRleHQgcmVmZXJlbmNlLCBpLmUuIGB7e2ZvbyAufX1gIG9yIGB7e2ZvbyAuLn19YFxuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hDb250ZXh0Jyk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmRhdGEpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5kYXRhID0gdHJ1ZTtcbiAgICAgIHRoaXMub3Bjb2RlKCdsb29rdXBEYXRhJywgcGF0aC5kZXB0aCwgcGF0aC5wYXJ0cywgcGF0aC5zdHJpY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wY29kZSgnbG9va3VwT25Db250ZXh0JywgcGF0aC5wYXJ0cywgcGF0aC5mYWxzeSwgcGF0aC5zdHJpY3QsIHNjb3BlZCk7XG4gICAgfVxuICB9LFxuXG4gIFN0cmluZ0xpdGVyYWw6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHRoaXMub3Bjb2RlKCdwdXNoU3RyaW5nJywgc3RyaW5nLnZhbHVlKTtcbiAgfSxcblxuICBOdW1iZXJMaXRlcmFsOiBmdW5jdGlvbihudW1iZXIpIHtcbiAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCBudW1iZXIudmFsdWUpO1xuICB9LFxuXG4gIEJvb2xlYW5MaXRlcmFsOiBmdW5jdGlvbihib29sKSB7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgYm9vbC52YWx1ZSk7XG4gIH0sXG5cbiAgVW5kZWZpbmVkTGl0ZXJhbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgJ3VuZGVmaW5lZCcpO1xuICB9LFxuXG4gIE51bGxMaXRlcmFsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wY29kZSgncHVzaExpdGVyYWwnLCAnbnVsbCcpO1xuICB9LFxuXG4gIEhhc2g6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICBsZXQgcGFpcnMgPSBoYXNoLnBhaXJzLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbCA9IHBhaXJzLmxlbmd0aDtcblxuICAgIHRoaXMub3Bjb2RlKCdwdXNoSGFzaCcpO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucHVzaFBhcmFtKHBhaXJzW2ldLnZhbHVlKTtcbiAgICB9XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2Fzc2lnblRvSGFzaCcsIHBhaXJzW2ldLmtleSk7XG4gICAgfVxuICAgIHRoaXMub3Bjb2RlKCdwb3BIYXNoJyk7XG4gIH0sXG5cbiAgLy8gSEVMUEVSU1xuICBvcGNvZGU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLm9wY29kZXMucHVzaCh7IG9wY29kZTogbmFtZSwgYXJnczogc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBsb2M6IHRoaXMuc291cmNlTm9kZVswXS5sb2MgfSk7XG4gIH0sXG5cbiAgYWRkRGVwdGg6IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgaWYgKCFkZXB0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXNlRGVwdGhzID0gdHJ1ZTtcbiAgfSxcblxuICBjbGFzc2lmeVNleHByOiBmdW5jdGlvbihzZXhwcikge1xuICAgIGxldCBpc1NpbXBsZSA9IEFTVC5oZWxwZXJzLnNpbXBsZUlkKHNleHByLnBhdGgpO1xuXG4gICAgbGV0IGlzQmxvY2tQYXJhbSA9IGlzU2ltcGxlICYmICEhdGhpcy5ibG9ja1BhcmFtSW5kZXgoc2V4cHIucGF0aC5wYXJ0c1swXSk7XG5cbiAgICAvLyBhIG11c3RhY2hlIGlzIGFuIGVsaWdpYmxlIGhlbHBlciBpZjpcbiAgICAvLyAqIGl0cyBpZCBpcyBzaW1wbGUgKGEgc2luZ2xlIHBhcnQsIG5vdCBgdGhpc2Agb3IgYC4uYClcbiAgICBsZXQgaXNIZWxwZXIgPSAhaXNCbG9ja1BhcmFtICYmIEFTVC5oZWxwZXJzLmhlbHBlckV4cHJlc3Npb24oc2V4cHIpO1xuXG4gICAgLy8gaWYgYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgYnV0IG5vdCBhIGRlZmluaXRlXG4gICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcbiAgICAvLyBwYXNzIG9yIGF0IHJ1bnRpbWUuXG4gICAgbGV0IGlzRWxpZ2libGUgPSAhaXNCbG9ja1BhcmFtICYmIChpc0hlbHBlciB8fCBpc1NpbXBsZSk7XG5cbiAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG4gICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxuICAgIGlmIChpc0VsaWdpYmxlICYmICFpc0hlbHBlcikge1xuICAgICAgbGV0IG5hbWUgPSBzZXhwci5wYXRoLnBhcnRzWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGlmIChvcHRpb25zLmtub3duSGVscGVyc1tuYW1lXSkge1xuICAgICAgICBpc0hlbHBlciA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuICAgICAgICBpc0VsaWdpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzSGVscGVyKSB7XG4gICAgICByZXR1cm4gJ2hlbHBlcic7XG4gICAgfSBlbHNlIGlmIChpc0VsaWdpYmxlKSB7XG4gICAgICByZXR1cm4gJ2FtYmlndW91cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnc2ltcGxlJztcbiAgICB9XG4gIH0sXG5cbiAgcHVzaFBhcmFtczogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwYXJhbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnB1c2hQYXJhbShwYXJhbXNbaV0pO1xuICAgIH1cbiAgfSxcblxuICBwdXNoUGFyYW06IGZ1bmN0aW9uKHZhbCkge1xuICAgIGxldCB2YWx1ZSA9IHZhbC52YWx1ZSAhPSBudWxsID8gdmFsLnZhbHVlIDogdmFsLm9yaWdpbmFsIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG4gICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgICAgICAucmVwbGFjZSgvXihcXC4/XFwuXFwvKSovZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwvL2csICcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWwuZGVwdGgpIHtcbiAgICAgICAgdGhpcy5hZGREZXB0aCh2YWwuZGVwdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZ1BhcmFtJywgdmFsdWUsIHZhbC50eXBlKTtcblxuICAgICAgaWYgKHZhbC50eXBlID09PSAnU3ViRXhwcmVzc2lvbicpIHtcbiAgICAgICAgLy8gU3ViRXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG4gICAgICAgIC8vIGluIHN0cmluZyBwYXJhbXMgbW9kZS5cbiAgICAgICAgdGhpcy5hY2NlcHQodmFsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcbiAgICAgICAgbGV0IGJsb2NrUGFyYW1JbmRleDtcbiAgICAgICAgaWYgKHZhbC5wYXJ0cyAmJiAhQVNULmhlbHBlcnMuc2NvcGVkSWQodmFsKSAmJiAhdmFsLmRlcHRoKSB7XG4gICAgICAgICAgIGJsb2NrUGFyYW1JbmRleCA9IHRoaXMuYmxvY2tQYXJhbUluZGV4KHZhbC5wYXJ0c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJsb2NrUGFyYW1JbmRleCkge1xuICAgICAgICAgIGxldCBibG9ja1BhcmFtQ2hpbGQgPSB2YWwucGFydHMuc2xpY2UoMSkuam9pbignLicpO1xuICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCAnQmxvY2tQYXJhbScsIGJsb2NrUGFyYW1JbmRleCwgYmxvY2tQYXJhbUNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbC5vcmlnaW5hbCB8fCB2YWx1ZTtcbiAgICAgICAgICBpZiAodmFsdWUucmVwbGFjZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9edGhpcyg/OlxcLnwkKS8sICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuXFwvLywgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC4kLywgJycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub3Bjb2RlKCdwdXNoSWQnLCB2YWwudHlwZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuICAgIH1cbiAgfSxcblxuICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UsIG9taXRFbXB0eSkge1xuICAgIGxldCBwYXJhbXMgPSBzZXhwci5wYXJhbXM7XG4gICAgdGhpcy5wdXNoUGFyYW1zKHBhcmFtcyk7XG5cbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBwcm9ncmFtKTtcbiAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcblxuICAgIGlmIChzZXhwci5oYXNoKSB7XG4gICAgICB0aGlzLmFjY2VwdChzZXhwci5oYXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGNvZGUoJ2VtcHR5SGFzaCcsIG9taXRFbXB0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfSxcblxuICBibG9ja1BhcmFtSW5kZXg6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBmb3IgKGxldCBkZXB0aCA9IDAsIGxlbiA9IHRoaXMub3B0aW9ucy5ibG9ja1BhcmFtcy5sZW5ndGg7IGRlcHRoIDwgbGVuOyBkZXB0aCsrKSB7XG4gICAgICBsZXQgYmxvY2tQYXJhbXMgPSB0aGlzLm9wdGlvbnMuYmxvY2tQYXJhbXNbZGVwdGhdLFxuICAgICAgICAgIHBhcmFtID0gYmxvY2tQYXJhbXMgJiYgaW5kZXhPZihibG9ja1BhcmFtcywgbmFtZSk7XG4gICAgICBpZiAoYmxvY2tQYXJhbXMgJiYgcGFyYW0gPj0gMCkge1xuICAgICAgICByZXR1cm4gW2RlcHRoLCBwYXJhbV07XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG4gIGlmIChpbnB1dCA9PSBudWxsIHx8ICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmIGlucHV0LnR5cGUgIT09ICdQcm9ncmFtJykpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCAnICsgaW5wdXQpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGlmICghKCdkYXRhJyBpbiBvcHRpb25zKSkge1xuICAgIG9wdGlvbnMuZGF0YSA9IHRydWU7XG4gIH1cbiAgaWYgKG9wdGlvbnMuY29tcGF0KSB7XG4gICAgb3B0aW9ucy51c2VEZXB0aHMgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG4gICAgICBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBuZXcgZW52LkphdmFTY3JpcHRDb21waWxlcigpLmNvbXBpbGUoZW52aXJvbm1lbnQsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShpbnB1dCwgb3B0aW9ucyA9IHt9LCBlbnYpIHtcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQudHlwZSAhPT0gJ1Byb2dyYW0nKSkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1lvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkICcgKyBpbnB1dCk7XG4gIH1cblxuICBpZiAoISgnZGF0YScgaW4gb3B0aW9ucykpIHtcbiAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuICB9XG4gIGlmIChvcHRpb25zLmNvbXBhdCkge1xuICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb21waWxlZDtcblxuICBmdW5jdGlvbiBjb21waWxlSW5wdXQoKSB7XG4gICAgbGV0IGFzdCA9IGVudi5wYXJzZShpbnB1dCwgb3B0aW9ucyksXG4gICAgICAgIGVudmlyb25tZW50ID0gbmV3IGVudi5Db21waWxlcigpLmNvbXBpbGUoYXN0LCBvcHRpb25zKSxcbiAgICAgICAgdGVtcGxhdGVTcGVjID0gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zLCB1bmRlZmluZWQsIHRydWUpO1xuICAgIHJldHVybiBlbnYudGVtcGxhdGUodGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIFRlbXBsYXRlIGlzIG9ubHkgY29tcGlsZWQgb24gZmlyc3QgdXNlIGFuZCBjYWNoZWQgYWZ0ZXIgdGhhdCBwb2ludC5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIGV4ZWNPcHRpb25zKSB7XG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVkLmNhbGwodGhpcywgY29udGV4dCwgZXhlY09wdGlvbnMpO1xuICB9XG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihzZXR1cE9wdGlvbnMpIHtcbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICBjb21waWxlZCA9IGNvbXBpbGVJbnB1dCgpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcGlsZWQuX3NldHVwKHNldHVwT3B0aW9ucyk7XG4gIH07XG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbihpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVkLl9jaGlsZChpLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYXJnRXF1YWxzKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KGEpICYmIGlzQXJyYXkoYikgJiYgYS5sZW5ndGggPT09IGIubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWFyZ0VxdWFscyhhW2ldLCBiW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxUb1BhdGgoc2V4cHIpIHtcbiAgaWYgKCFzZXhwci5wYXRoLnBhcnRzKSB7XG4gICAgbGV0IGxpdGVyYWwgPSBzZXhwci5wYXRoO1xuICAgIC8vIENhc3RpbmcgdG8gc3RyaW5nIGhlcmUgdG8gbWFrZSBmYWxzZSBhbmQgMCBsaXRlcmFsIHZhbHVlcyBwbGF5IG5pY2VseSB3aXRoIHRoZSByZXN0XG4gICAgLy8gb2YgdGhlIHN5c3RlbS5cbiAgICBzZXhwci5wYXRoID0ge1xuICAgICAgdHlwZTogJ1BhdGhFeHByZXNzaW9uJyxcbiAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICBwYXJ0czogW2xpdGVyYWwub3JpZ2luYWwgKyAnJ10sXG4gICAgICBvcmlnaW5hbDogbGl0ZXJhbC5vcmlnaW5hbCArICcnLFxuICAgICAgbG9jOiBsaXRlcmFsLmxvY1xuICAgIH07XG4gIH1cbn1cbiJdfQ==
