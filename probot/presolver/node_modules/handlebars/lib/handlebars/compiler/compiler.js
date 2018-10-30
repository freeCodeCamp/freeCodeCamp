/* eslint-disable new-cap */

import Exception from '../exception';
import {isArray, indexOf} from '../utils';
import AST from './ast';

const slice = [].slice;

export function Compiler() {}

// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function(other) {
    let len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (let i = 0; i < len; i++) {
      let opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (let i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function(program, options) {
    this.sourceNode = [];
    this.opcodes = [];
    this.children = [];
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    options.blockParams = options.blockParams || [];

    // These changes will propagate to the other compiler components
    let knownHelpers = options.knownHelpers;
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
      for (let name in knownHelpers) {
        /* istanbul ignore else */
        if (name in knownHelpers) {
          options.knownHelpers[name] = knownHelpers[name];
        }
      }
    }

    return this.accept(program);
  },

  compileProgram: function(program) {
    let childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options),
        guid = this.guid++;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;
    this.useDepths = this.useDepths || result.useDepths;

    return guid;
  },

  accept: function(node) {
    /* istanbul ignore next: Sanity code */
    if (!this[node.type]) {
      throw new Exception('Unknown type: ' + node.type, node);
    }

    this.sourceNode.unshift(node);
    let ret = this[node.type](node);
    this.sourceNode.shift();
    return ret;
  },

  Program: function(program) {
    this.options.blockParams.unshift(program.blockParams);

    let body = program.body,
        bodyLength = body.length;
    for (let i = 0; i < bodyLength; i++) {
      this.accept(body[i]);
    }

    this.options.blockParams.shift();

    this.isSimple = bodyLength === 1;
    this.blockParams = program.blockParams ? program.blockParams.length : 0;

    return this;
  },

  BlockStatement: function(block) {
    transformLiteralToPath(block);

    let program = block.program,
        inverse = block.inverse;

    program = program && this.compileProgram(program);
    inverse = inverse && this.compileProgram(inverse);

    let type = this.classifySexpr(block);

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

  DecoratorBlock(decorator) {
    let program = decorator.program && this.compileProgram(decorator.program);
    let params = this.setupFullMustacheParams(decorator, program, undefined),
        path = decorator.path;

    this.useDecorators = true;
    this.opcode('registerDecorator', params.length, path.original);
  },

  PartialStatement: function(partial) {
    this.usePartial = true;

    let program = partial.program;
    if (program) {
      program = this.compileProgram(partial.program);
    }

    let params = partial.params;
    if (params.length > 1) {
      throw new Exception('Unsupported number of partial arguments: ' + params.length, partial);
    } else if (!params.length) {
      if (this.options.explicitPartialContext) {
        this.opcode('pushLiteral', 'undefined');
      } else {
        params.push({type: 'PathExpression', parts: [], depth: 0});
      }
    }

    let partialName = partial.name.original,
        isDynamic = partial.name.type === 'SubExpression';
    if (isDynamic) {
      this.accept(partial.name);
    }

    this.setupFullMustacheParams(partial, program, undefined, true);

    let indent = partial.indent || '';
    if (this.options.preventIndent && indent) {
      this.opcode('appendContent', indent);
      indent = '';
    }

    this.opcode('invokePartial', isDynamic, partialName, indent);
    this.opcode('append');
  },
  PartialBlockStatement: function(partialBlock) {
    this.PartialStatement(partialBlock);
  },

  MustacheStatement: function(mustache) {
    this.SubExpression(mustache);

    if (mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },
  Decorator(decorator) {
    this.DecoratorBlock(decorator);
  },


  ContentStatement: function(content) {
    if (content.value) {
      this.opcode('appendContent', content.value);
    }
  },

  CommentStatement: function() {},

  SubExpression: function(sexpr) {
    transformLiteralToPath(sexpr);
    let type = this.classifySexpr(sexpr);

    if (type === 'simple') {
      this.simpleSexpr(sexpr);
    } else if (type === 'helper') {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },
  ambiguousSexpr: function(sexpr, program, inverse) {
    let path = sexpr.path,
        name = path.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', path.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    path.strict = true;
    this.accept(path);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function(sexpr) {
    let path = sexpr.path;
    path.strict = true;
    this.accept(path);
    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function(sexpr, program, inverse) {
    let params = this.setupFullMustacheParams(sexpr, program, inverse),
        path = sexpr.path,
        name = path.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new Exception('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
    } else {
      path.strict = true;
      path.falsy = true;

      this.accept(path);
      this.opcode('invokeHelper', params.length, path.original, AST.helpers.simpleId(path));
    }
  },

  PathExpression: function(path) {
    this.addDepth(path.depth);
    this.opcode('getContext', path.depth);

    let name = path.parts[0],
        scoped = AST.helpers.scopedId(path),
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

  StringLiteral: function(string) {
    this.opcode('pushString', string.value);
  },

  NumberLiteral: function(number) {
    this.opcode('pushLiteral', number.value);
  },

  BooleanLiteral: function(bool) {
    this.opcode('pushLiteral', bool.value);
  },

  UndefinedLiteral: function() {
    this.opcode('pushLiteral', 'undefined');
  },

  NullLiteral: function() {
    this.opcode('pushLiteral', 'null');
  },

  Hash: function(hash) {
    let pairs = hash.pairs,
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
  opcode: function(name) {
    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
  },

  addDepth: function(depth) {
    if (!depth) {
      return;
    }

    this.useDepths = true;
  },

  classifySexpr: function(sexpr) {
    let isSimple = AST.helpers.simpleId(sexpr.path);

    let isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    let isHelper = !isBlockParam && AST.helpers.helperExpression(sexpr);

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
    let isEligible = !isBlockParam && (isHelper || isSimple);

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      let name = sexpr.path.parts[0],
          options = this.options;

      if (options.knownHelpers[name]) {
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

  pushParams: function(params) {
    for (let i = 0, l = params.length; i < l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function(val) {
    let value = val.value != null ? val.value : val.original || '';

    if (this.stringParams) {
      if (value.replace) {
        value = value
            .replace(/^(\.?\.\/)*/g, '')
            .replace(/\//g, '.');
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
        let blockParamIndex;
        if (val.parts && !AST.helpers.scopedId(val) && !val.depth) {
           blockParamIndex = this.blockParamIndex(val.parts[0]);
        }
        if (blockParamIndex) {
          let blockParamChild = val.parts.slice(1).join('.');
          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
        } else {
          value = val.original || value;
          if (value.replace) {
            value = value
                .replace(/^this(?:\.|$)/, '')
                .replace(/^\.\//, '')
                .replace(/^\.$/, '');
          }

          this.opcode('pushId', val.type, value);
        }
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function(sexpr, program, inverse, omitEmpty) {
    let params = sexpr.params;
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

  blockParamIndex: function(name) {
    for (let depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
      let blockParams = this.options.blockParams[depth],
          param = blockParams && indexOf(blockParams, name);
      if (blockParams && param >= 0) {
        return [depth, param];
      }
    }
  }
};

export function precompile(input, options, env) {
  if (input == null || (typeof input !== 'string' && input.type !== 'Program')) {
    throw new Exception('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  let ast = env.parse(input, options),
      environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

export function compile(input, options = {}, env) {
  if (input == null || (typeof input !== 'string' && input.type !== 'Program')) {
    throw new Exception('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
  }

  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  let compiled;

  function compileInput() {
    let ast = env.parse(input, options),
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
  ret._setup = function(setupOptions) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(setupOptions);
  };
  ret._child = function(i, data, blockParams, depths) {
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

  if (isArray(a) && isArray(b) && a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}

function transformLiteralToPath(sexpr) {
  if (!sexpr.path.parts) {
    let literal = sexpr.path;
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
