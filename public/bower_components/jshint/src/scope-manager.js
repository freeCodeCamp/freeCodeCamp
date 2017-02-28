"use strict";

var _      = require("lodash");
var events = require("events");

// Used to denote membership in lookup tables (a primitive value such as `true`
// would be silently rejected for the property name "__proto__" in some
// environments)
var marker = {};

/**
 * Creates a scope manager that handles variables and labels, storing usages
 * and resolving when variables are used and undefined
 */
var scopeManager = function(state, predefined, exported, declared) {

  var _current;
  var _scopeStack = [];

  function _newScope(type) {
    _current = {
      "(labels)": Object.create(null),
      "(usages)": Object.create(null),
      "(breakLabels)": Object.create(null),
      "(parent)": _current,
      "(type)": type,
      "(params)": (type === "functionparams" || type === "catchparams") ? [] : null
    };
    _scopeStack.push(_current);
  }

  _newScope("global");
  _current["(predefined)"] = predefined;

  var _currentFunctBody = _current; // this is the block after the params = function

  var usedPredefinedAndGlobals = Object.create(null);
  var impliedGlobals = Object.create(null);
  var unuseds = [];
  var emitter = new events.EventEmitter();

  function warning(code, token) {
    emitter.emit("warning", {
      code: code,
      token: token,
      data: _.slice(arguments, 2)
    });
  }

  function error(code, token) {
    emitter.emit("warning", {
      code: code,
      token: token,
      data: _.slice(arguments, 2)
    });
  }

  function _setupUsages(labelName) {
    if (!_current["(usages)"][labelName]) {
      _current["(usages)"][labelName] = {
        "(modified)": [],
        "(reassigned)": [],
        "(tokens)": []
      };
    }
  }

  var _getUnusedOption = function(unused_opt) {
    if (unused_opt === undefined) {
      unused_opt = state.option.unused;
    }

    if (unused_opt === true) {
      unused_opt = "last-param";
    }

    return unused_opt;
  };

  var _warnUnused = function(name, tkn, type, unused_opt) {
    var line = tkn.line;
    var chr  = tkn.from;
    var raw_name = tkn.raw_text || name;

    unused_opt = _getUnusedOption(unused_opt);

    var warnable_types = {
      "vars": ["var"],
      "last-param": ["var", "param"],
      "strict": ["var", "param", "last-param"]
    };

    if (unused_opt) {
      if (warnable_types[unused_opt] && warnable_types[unused_opt].indexOf(type) !== -1) {
        warning("W098", { line: line, from: chr }, raw_name);
      }
    }

    // inconsistent - see gh-1894
    if (unused_opt || type === "var") {
      unuseds.push({
        name: name,
        line: line,
        character: chr
      });
    }
  };

  /**
   * Checks the current scope for unused identifiers
   */
  function _checkForUnused() {
    // function params are handled specially
    // assume that parameters are the only thing declared in the param scope
    if (_current["(type)"] === "functionparams") {
      _checkParams();
      return;
    }
    var curentLabels = _current["(labels)"];
    for (var labelName in curentLabels) {
      if (curentLabels[labelName]) {
        if (curentLabels[labelName]["(type)"] !== "exception" &&
          curentLabels[labelName]["(unused)"]) {
          _warnUnused(labelName, curentLabels[labelName]["(token)"], "var");
        }
      }
    }
  }

  /**
   * Checks the current scope for unused parameters
   * Must be called in a function parameter scope
   */
  function _checkParams() {
    var params = _current["(params)"];

    if (!params) {
      return;
    }

    var param = params.pop();
    var unused_opt;

    while (param) {
      var label = _current["(labels)"][param];

      unused_opt = _getUnusedOption(state.funct["(unusedOption)"]);

      // 'undefined' is a special case for (function(window, undefined) { ... })();
      // patterns.
      if (param === "undefined")
        return;

      if (label["(unused)"]) {
        _warnUnused(param, label["(token)"], "param", state.funct["(unusedOption)"]);
      } else if (unused_opt === "last-param") {
        return;
      }

      param = params.pop();
    }
  }

  /**
   * Finds the relevant label's scope, searching from nearest outwards
   * @returns {Object} the scope the label was found in
   */
  function _getLabel(labelName) {
    for (var i = _scopeStack.length - 1 ; i >= 0; --i) {
      var scopeLabels = _scopeStack[i]["(labels)"];
      if (scopeLabels[labelName]) {
        return scopeLabels;
      }
    }
  }

  function usedSoFarInCurrentFunction(labelName) {
    // used so far in this whole function and any sub functions
    for (var i = _scopeStack.length - 1; i >= 0; i--) {
      var current = _scopeStack[i];
      if (current["(usages)"][labelName]) {
        return current["(usages)"][labelName];
      }
      if (current === _currentFunctBody) {
        break;
      }
    }
    return false;
  }

  function _checkOuterShadow(labelName, token) {

    // only check if shadow is outer
    if (state.option.shadow !== "outer") {
      return;
    }

    var isGlobal = _currentFunctBody["(type)"] === "global",
      isNewFunction = _current["(type)"] === "functionparams";

    var outsideCurrentFunction = !isGlobal;
    for (var i = 0; i < _scopeStack.length; i++) {
      var stackItem = _scopeStack[i];

      if (!isNewFunction && _scopeStack[i + 1] === _currentFunctBody) {
        outsideCurrentFunction = false;
      }
      if (outsideCurrentFunction && stackItem["(labels)"][labelName]) {
        warning("W123", token, labelName);
      }
      if (stackItem["(breakLabels)"][labelName]) {
        warning("W123", token, labelName);
      }
    }
  }

  function _latedefWarning(type, labelName, token) {
    if (state.option.latedef) {
      // if either latedef is strict and this is a function
      //    or this is not a function
      if ((state.option.latedef === true && type === "function") ||
        type !== "function") {
        warning("W003", token, labelName);
      }
    }
  }

  var scopeManagerInst = {

    on: function(names, listener) {
      names.split(" ").forEach(function(name) {
        emitter.on(name, listener);
      });
    },

    isPredefined: function(labelName) {
      return !this.has(labelName) && _.has(_scopeStack[0]["(predefined)"], labelName);
    },

    /**
     * Tell the manager we are entering a new block of code
     * @param {string} [type] - The type of the block. Valid values are
     *                          "functionparams", "catchparams" and
     *                          "functionouter"
     */
    stack: function(type) {
      var previousScope = _current;
      _newScope(type);

      if (!type && previousScope["(type)"] === "functionparams") {

        _current["(isFuncBody)"] = true;
        _current["(context)"] = _currentFunctBody;
        _currentFunctBody = _current;
      }
    },

    unstack: function() {
      // jshint proto: true
      var subScope = _scopeStack.length > 1 ? _scopeStack[_scopeStack.length - 2] : null;
      var isUnstackingFunctionBody = _current === _currentFunctBody,
        isUnstackingFunctionParams = _current["(type)"] === "functionparams",
        isUnstackingFunctionOuter = _current["(type)"] === "functionouter";

      var i, j;
      var currentUsages = _current["(usages)"];
      var currentLabels = _current["(labels)"];
      var usedLabelNameList = Object.keys(currentUsages);

      if (currentUsages.__proto__ && usedLabelNameList.indexOf("__proto__") === -1) {
        usedLabelNameList.push("__proto__");
      }

      for (i = 0; i < usedLabelNameList.length; i++) {
        var usedLabelName = usedLabelNameList[i];

        var usage = currentUsages[usedLabelName];
        var usedLabel = currentLabels[usedLabelName];
        if (usedLabel) {
          var usedLabelType = usedLabel["(type)"];

          if (usedLabel["(useOutsideOfScope)"] && !state.option.funcscope) {
            var usedTokens = usage["(tokens)"];
            if (usedTokens) {
              for (j = 0; j < usedTokens.length; j++) {
                // Keep the consistency of https://github.com/jshint/jshint/issues/2409
                if (usedLabel["(function)"] === usedTokens[j]["(function)"]) {
                  error("W038", usedTokens[j], usedLabelName);
                }
              }
            }
          }

          // mark the label used
          _current["(labels)"][usedLabelName]["(unused)"] = false;

          // check for modifying a const
          if (usedLabelType === "const" && usage["(modified)"]) {
            for (j = 0; j < usage["(modified)"].length; j++) {
              error("E013", usage["(modified)"][j], usedLabelName);
            }
          }

          // check for re-assigning a function declaration
          if ((usedLabelType === "function" || usedLabelType === "class") &&
              usage["(reassigned)"]) {
            for (j = 0; j < usage["(reassigned)"].length; j++) {
              if (!usage["(reassigned)"][j].ignoreW021) {
                warning("W021", usage["(reassigned)"][j], usedLabelName, usedLabelType);
              }
            }
          }
          continue;
        }

        if (isUnstackingFunctionOuter) {
          state.funct["(isCapturing)"] = true;
        }

        if (subScope) {
          // not exiting the global scope, so copy the usage down in case its an out of scope usage
          if (!subScope["(usages)"][usedLabelName]) {
            subScope["(usages)"][usedLabelName] = usage;
            if (isUnstackingFunctionBody) {
              subScope["(usages)"][usedLabelName]["(onlyUsedSubFunction)"] = true;
            }
          } else {
            var subScopeUsage = subScope["(usages)"][usedLabelName];
            subScopeUsage["(modified)"] = subScopeUsage["(modified)"].concat(usage["(modified)"]);
            subScopeUsage["(tokens)"] = subScopeUsage["(tokens)"].concat(usage["(tokens)"]);
            subScopeUsage["(reassigned)"] =
              subScopeUsage["(reassigned)"].concat(usage["(reassigned)"]);
          }
        } else {
          // this is exiting global scope, so we finalise everything here - we are at the end of the file
          if (typeof _current["(predefined)"][usedLabelName] === "boolean") {

            // remove the declared token, so we know it is used
            delete declared[usedLabelName];

            // note it as used so it can be reported
            usedPredefinedAndGlobals[usedLabelName] = marker;

            // check for re-assigning a read-only (set to false) predefined
            if (_current["(predefined)"][usedLabelName] === false && usage["(reassigned)"]) {
              for (j = 0; j < usage["(reassigned)"].length; j++) {
                if (!usage["(reassigned)"][j].ignoreW020) {
                  warning("W020", usage["(reassigned)"][j]);
                }
              }
            }
          }
          else {
            // label usage is not predefined and we have not found a declaration
            // so report as undeclared
            if (usage["(tokens)"]) {
              for (j = 0; j < usage["(tokens)"].length; j++) {
                var undefinedToken = usage["(tokens)"][j];
                // if its not a forgiven undefined (e.g. typof x)
                if (!undefinedToken.forgiveUndef) {
                  // if undef is on and undef was on when the token was defined
                  if (state.option.undef && !undefinedToken.ignoreUndef) {
                    warning("W117", undefinedToken, usedLabelName);
                  }
                  if (impliedGlobals[usedLabelName]) {
                    impliedGlobals[usedLabelName].line.push(undefinedToken.line);
                  } else {
                    impliedGlobals[usedLabelName] = {
                      name: usedLabelName,
                      line: [undefinedToken.line]
                    };
                  }
                }
              }
            }
          }
        }
      }

      // if exiting the global scope, we can warn about declared globals that haven't been used yet
      if (!subScope) {
        Object.keys(declared)
          .forEach(function(labelNotUsed) {
            _warnUnused(labelNotUsed, declared[labelNotUsed], "var");
          });
      }

      // If this is not a function boundary, transfer function-scoped labels to
      // the parent block (a rough simulation of variable hoisting). Previously
      // existing labels in the parent block should take precedence so that things and stuff.
      if (subScope && !isUnstackingFunctionBody &&
        !isUnstackingFunctionParams && !isUnstackingFunctionOuter) {
        var labelNames = Object.keys(currentLabels);
        for (i = 0; i < labelNames.length; i++) {

          var defLabelName = labelNames[i];
          var defLabel = currentLabels[defLabelName];

          if (!defLabel["(blockscoped)"] && defLabel["(type)"] !== "exception") {
            var shadowed = subScope["(labels)"][defLabelName];

            // Do not overwrite a label if it exists in the parent scope
            // because it is shared by adjacent blocks. Copy the `unused`
            // property so that any references found within the current block
            // are counted toward that higher-level declaration.
            if (shadowed) {
              shadowed["(unused)"] &= defLabel["(unused)"];

            // "Hoist" the variable to the parent block, decorating the label
            // so that future references, though technically valid, can be
            // reported as "out-of-scope" in the absence of the `funcscope`
            // option.
            } else {
              defLabel["(useOutsideOfScope)"] =
                // Do not warn about out-of-scope usages in the global scope
                _currentFunctBody["(type)"] !== "global" &&
                // When a higher scope contains a binding for the label, the
                // label is a re-declaration and should not prompt "used
                // out-of-scope" warnings.
                !this.funct.has(defLabelName, { excludeCurrent: true });

              subScope["(labels)"][defLabelName] = defLabel;
            }

            delete currentLabels[defLabelName];
          }
        }
      }

      _checkForUnused();

      _scopeStack.pop();
      if (isUnstackingFunctionBody) {
        _currentFunctBody = _scopeStack[_.findLastIndex(_scopeStack, function(scope) {
          // if function or if global (which is at the bottom so it will only return true if we call back)
          return scope["(isFuncBody)"] || scope["(type)"] === "global";
        })];
      }

      _current = subScope;
    },

    /**
     * Add a param to the current scope
     * @param {string} labelName
     * @param {Token} token
     * @param {string} [type="param"] param type
     */
    addParam: function(labelName, token, type) {
      type = type || "param";

      if (type === "exception") {
        // if defined in the current function
        var previouslyDefinedLabelType = this.funct.labeltype(labelName);
        if (previouslyDefinedLabelType && previouslyDefinedLabelType !== "exception") {
          // and has not been used yet in the current function scope
          if (!state.option.node) {
            warning("W002", state.tokens.next, labelName);
          }
        }
      }

      // The variable was declared in the current scope
      if (_.has(_current["(labels)"], labelName)) {
        _current["(labels)"][labelName].duplicated = true;

      // The variable was declared in an outer scope
      } else {
        // if this scope has the variable defined, it's a re-definition error
        _checkOuterShadow(labelName, token, type);

        _current["(labels)"][labelName] = {
          "(type)" : type,
          "(token)": token,
          "(unused)": true };

        _current["(params)"].push(labelName);
      }

      if (_.has(_current["(usages)"], labelName)) {
        var usage = _current["(usages)"][labelName];
        // if its in a sub function it is not necessarily an error, just latedef
        if (usage["(onlyUsedSubFunction)"]) {
          _latedefWarning(type, labelName, token);
        } else {
          // this is a clear illegal usage for block scoped variables
          warning("E056", token, labelName, type);
        }
      }
    },

    validateParams: function() {
      // This method only concerns errors for function parameters
      if (_currentFunctBody["(type)"] === "global") {
        return;
      }

      var isStrict = state.isStrict();
      var currentFunctParamScope = _currentFunctBody["(parent)"];

      if (!currentFunctParamScope["(params)"]) {
        return;
      }

      currentFunctParamScope["(params)"].forEach(function(labelName) {
        var label = currentFunctParamScope["(labels)"][labelName];

        if (label && label.duplicated) {
          if (isStrict) {
            warning("E011", label["(token)"], labelName);
          } else if (state.option.shadow !== true) {
            warning("W004", label["(token)"], labelName);
          }
        }
      });
    },

    getUsedOrDefinedGlobals: function() {
      // jshint proto: true
      var list = Object.keys(usedPredefinedAndGlobals);

      // If `__proto__` is used as a global variable name, its entry in the
      // lookup table may not be enumerated by `Object.keys` (depending on the
      // environment).
      if (usedPredefinedAndGlobals.__proto__ === marker &&
        list.indexOf("__proto__") === -1) {
        list.push("__proto__");
      }

      return list;
    },

    /**
     * Gets an array of implied globals
     * @returns {Array.<{ name: string, line: Array.<number>}>}
     */
    getImpliedGlobals: function() {
      // jshint proto: true
      var values = _.values(impliedGlobals);
      var hasProto = false;

      // If `__proto__` is an implied global variable, its entry in the lookup
      // table may not be enumerated by `_.values` (depending on the
      // environment).
      if (impliedGlobals.__proto__) {
        hasProto = values.some(function(value) {
          return value.name === "__proto__";
        });

        if (!hasProto) {
          values.push(impliedGlobals.__proto__);
        }
      }

      return values;
    },

    /**
     * Returns a list of unused variables
     * @returns {Array}
     */
    getUnuseds: function() {
      return unuseds;
    },

    has: function(labelName) {
      return Boolean(_getLabel(labelName));
    },

    labeltype: function(labelName) {
      // returns a labels type or null if not present
      var scopeLabels = _getLabel(labelName);
      if (scopeLabels) {
        return scopeLabels[labelName]["(type)"];
      }
      return null;
    },

    /**
     * for the exported options, indicating a variable is used outside the file
     */
    addExported: function(labelName) {
      var globalLabels = _scopeStack[0]["(labels)"];
      if (_.has(declared, labelName)) {
        // remove the declared token, so we know it is used
        delete declared[labelName];
      } else if (_.has(globalLabels, labelName)) {
        globalLabels[labelName]["(unused)"] = false;
      } else {
        for (var i = 1; i < _scopeStack.length; i++) {
          var scope = _scopeStack[i];
          // if `scope.(type)` is not defined, it is a block scope
          if (!scope["(type)"]) {
            if (_.has(scope["(labels)"], labelName) &&
                !scope["(labels)"][labelName]["(blockscoped)"]) {
              scope["(labels)"][labelName]["(unused)"] = false;
              return;
            }
          } else {
            break;
          }
        }
        exported[labelName] = true;
      }
    },

    /**
     * Mark an indentifier as es6 module exported
     */
    setExported: function(labelName, token) {
      this.block.use(labelName, token);
    },

    initialize: function(labelName) {
      if (_current["(labels)"][labelName]) {
        _current["(labels)"][labelName]["(initialized)"] = true;
      }
    },

    /**
     * adds an indentifier to the relevant current scope and creates warnings/errors as necessary
     * @param {string} labelName
     * @param {Object} opts
     * @param {String} opts.type - the type of the label e.g. "param", "var", "let, "const", "function"
     * @param {Token} opts.token - the token pointing at the declaration
     * @param {boolean} opts.initialized - whether the binding should be created in an "initialized" state.
     */
    addlabel: function(labelName, opts) {

      var type  = opts.type;
      var token = opts.token;
      var isblockscoped = type === "let" || type === "const" || type === "class";
      var isexported    = (isblockscoped ? _current : _currentFunctBody)["(type)"] === "global" &&
                          _.has(exported, labelName);

      // outer shadow check (inner is only on non-block scoped)
      _checkOuterShadow(labelName, token, type);

      // if is block scoped (let or const)
      if (isblockscoped) {

        var declaredInCurrentScope = _current["(labels)"][labelName];
        // for block scoped variables, params are seen in the current scope as the root function
        // scope, so check these too.
        if (!declaredInCurrentScope && _current === _currentFunctBody &&
          _current["(type)"] !== "global") {
          declaredInCurrentScope = !!_currentFunctBody["(parent)"]["(labels)"][labelName];
        }

        // if its not already defined (which is an error, so ignore) and is used in TDZ
        if (!declaredInCurrentScope && _current["(usages)"][labelName]) {
          var usage = _current["(usages)"][labelName];
          // if its in a sub function it is not necessarily an error, just latedef
          if (usage["(onlyUsedSubFunction)"]) {
            _latedefWarning(type, labelName, token);
          } else {
            // this is a clear illegal usage for block scoped variables
            warning("E056", token, labelName, type);
          }
        }

        // if this scope has the variable defined, its a re-definition error
        if (declaredInCurrentScope) {
          warning("E011", token, labelName);
        }
        else if (state.option.shadow === "outer") {

          // if shadow is outer, for block scope we want to detect any shadowing within this function
          if (scopeManagerInst.funct.has(labelName)) {
            warning("W004", token, labelName);
          }
        }

        scopeManagerInst.block.add(
          labelName, type, token, !isexported, opts.initialized
        );

      } else {

        var declaredInCurrentFunctionScope = scopeManagerInst.funct.has(labelName);

        // check for late definition, ignore if already declared
        if (!declaredInCurrentFunctionScope && usedSoFarInCurrentFunction(labelName)) {
          _latedefWarning(type, labelName, token);
        }

        // defining with a var or a function when a block scope variable of the same name
        // is in scope is an error
        if (scopeManagerInst.funct.has(labelName, { onlyBlockscoped: true })) {
          warning("E011", token, labelName);
        } else if (state.option.shadow !== true) {
          // now since we didn't get any block scope variables, test for var/function
          // shadowing
          if (declaredInCurrentFunctionScope && labelName !== "__proto__") {

            // see https://github.com/jshint/jshint/issues/2400
            if (_currentFunctBody["(type)"] !== "global") {
              warning("W004", token, labelName);
            }
          }
        }

        scopeManagerInst.funct.add(labelName, type, token, !isexported);

        if (_currentFunctBody["(type)"] === "global" && !state.impliedClosure()) {
          usedPredefinedAndGlobals[labelName] = marker;
        }
      }
    },

    funct: {
      /**
       * Returns the label type given certain options
       * @param labelName
       * @param {Object=} options
       * @param {Boolean=} options.onlyBlockscoped - only include block scoped labels
       * @param {Boolean=} options.excludeParams - exclude the param scope
       * @param {Boolean=} options.excludeCurrent - exclude the current scope
       * @returns {String}
       */
      labeltype: function(labelName, options) {
        var onlyBlockscoped = options && options.onlyBlockscoped;
        var excludeParams = options && options.excludeParams;
        var currentScopeIndex = _scopeStack.length - (options && options.excludeCurrent ? 2 : 1);
        for (var i = currentScopeIndex; i >= 0; i--) {
          var current = _scopeStack[i];
          if (current["(labels)"][labelName] &&
            (!onlyBlockscoped || current["(labels)"][labelName]["(blockscoped)"])) {
            return current["(labels)"][labelName]["(type)"];
          }
          var scopeCheck = excludeParams ? _scopeStack[ i - 1 ] : current;
          if (scopeCheck && scopeCheck["(type)"] === "functionparams") {
            return null;
          }
        }
        return null;
      },
      /**
       * Returns if a break label exists in the function scope
       * @param {string} labelName
       * @returns {boolean}
       */
      hasBreakLabel: function(labelName) {
        for (var i = _scopeStack.length - 1; i >= 0; i--) {
          var current = _scopeStack[i];

          if (current["(breakLabels)"][labelName]) {
            return true;
          }
          if (current["(type)"] === "functionparams") {
            return false;
          }
        }
        return false;
      },
      /**
       * Returns if the label is in the current function scope
       * See scopeManager.funct.labelType for options
       */
      has: function(labelName, options) {
        return Boolean(this.labeltype(labelName, options));
      },

      /**
       * Adds a new function scoped variable
       * see block.add for block scoped
       */
      add: function(labelName, type, tok, unused) {
        _current["(labels)"][labelName] = {
          "(type)" : type,
          "(token)": tok,
          "(blockscoped)": false,
          "(function)": _currentFunctBody,
          "(unused)": unused };
      }
    },

    block: {

      /**
       * is the current block global?
       * @returns Boolean
       */
      isGlobal: function() {
        return _current["(type)"] === "global";
      },

      use: function(labelName, token) {

        // if resolves to current function params, then do not store usage just resolve
        // this is because function(a) { var a; a = a; } will resolve to the param, not
        // to the unset var
        // first check the param is used
        var paramScope = _currentFunctBody["(parent)"];
        if (paramScope && paramScope["(labels)"][labelName] &&
          paramScope["(labels)"][labelName]["(type)"] === "param") {

          // then check its not declared by a block scope variable
          if (!scopeManagerInst.funct.has(labelName,
                { excludeParams: true, onlyBlockscoped: true })) {
            paramScope["(labels)"][labelName]["(unused)"] = false;
          }
        }

        if (token && (state.ignored.W117 || state.option.undef === false)) {
          token.ignoreUndef = true;
        }

        _setupUsages(labelName);

        _current["(usages)"][labelName]["(onlyUsedSubFunction)"] = false;

        if (token) {
          token["(function)"] = _currentFunctBody;
          _current["(usages)"][labelName]["(tokens)"].push(token);
        }

        // blockscoped vars can't be used within their initializer (TDZ)
        var label = _current["(labels)"][labelName];
        if (label && label["(blockscoped)"] && !label["(initialized)"]) {
          error("E056", token, labelName, label["(type)"]);
        }
      },

      reassign: function(labelName, token) {
        token.ignoreW020 = state.ignored.W020;
        token.ignoreW021 = state.ignored.W021;

        this.modify(labelName, token);

        _current["(usages)"][labelName]["(reassigned)"].push(token);
      },

      modify: function(labelName, token) {

        _setupUsages(labelName);

        _current["(usages)"][labelName]["(onlyUsedSubFunction)"] = false;
        _current["(usages)"][labelName]["(modified)"].push(token);
      },

      /**
       * Adds a new variable
       */
      add: function(labelName, type, tok, unused, initialized) {
        _current["(labels)"][labelName] = {
          "(type)" : type,
          "(token)": tok,
          "(initialized)": !!initialized,
          "(blockscoped)": true,
          "(unused)": unused };
      },

      addBreakLabel: function(labelName, opts) {
        var token = opts.token;
        if (scopeManagerInst.funct.hasBreakLabel(labelName)) {
          warning("E011", token, labelName);
        }
        else if (state.option.shadow === "outer") {
          if (scopeManagerInst.funct.has(labelName)) {
            warning("W004", token, labelName);
          } else {
            _checkOuterShadow(labelName, token);
          }
        }
        _current["(breakLabels)"][labelName] = token;
      }
    }
  };
  return scopeManagerInst;
};

module.exports = scopeManager;
