(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.esquery = factory());
}(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var estraverse = createCommonjsModule(function (module, exports) {
    /*
      Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>
      Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
    
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are met:
    
        * Redistributions of source code must retain the above copyright
          notice, this list of conditions and the following disclaimer.
        * Redistributions in binary form must reproduce the above copyright
          notice, this list of conditions and the following disclaimer in the
          documentation and/or other materials provided with the distribution.
    
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
      DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
      (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
      LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
      ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
      (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
      THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    /*jslint vars:false, bitwise:true*/
    /*jshint indent:4*/
    /*global exports:true*/
    (function clone(exports) {

      var Syntax, VisitorOption, VisitorKeys, BREAK, SKIP, REMOVE;
      function deepCopy(obj) {
        var ret = {},
          key,
          val;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            val = obj[key];
            if (typeof val === 'object' && val !== null) {
              ret[key] = deepCopy(val);
            } else {
              ret[key] = val;
            }
          }
        }
        return ret;
      }

      // based on LLVM libc++ upper_bound / lower_bound
      // MIT License

      function upperBound(array, func) {
        var diff, len, i, current;
        len = array.length;
        i = 0;
        while (len) {
          diff = len >>> 1;
          current = i + diff;
          if (func(array[current])) {
            len = diff;
          } else {
            i = current + 1;
            len -= diff + 1;
          }
        }
        return i;
      }
      Syntax = {
        AssignmentExpression: 'AssignmentExpression',
        AssignmentPattern: 'AssignmentPattern',
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AwaitExpression: 'AwaitExpression',
        // CAUTION: It's deferred to ES7.
        BlockStatement: 'BlockStatement',
        BinaryExpression: 'BinaryExpression',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ChainExpression: 'ChainExpression',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ComprehensionBlock: 'ComprehensionBlock',
        // CAUTION: It's deferred to ES7.
        ComprehensionExpression: 'ComprehensionExpression',
        // CAUTION: It's deferred to ES7.
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DebuggerStatement: 'DebuggerStatement',
        DirectiveStatement: 'DirectiveStatement',
        DoWhileStatement: 'DoWhileStatement',
        EmptyStatement: 'EmptyStatement',
        ExportAllDeclaration: 'ExportAllDeclaration',
        ExportDefaultDeclaration: 'ExportDefaultDeclaration',
        ExportNamedDeclaration: 'ExportNamedDeclaration',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForStatement: 'ForStatement',
        ForInStatement: 'ForInStatement',
        ForOfStatement: 'ForOfStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        GeneratorExpression: 'GeneratorExpression',
        // CAUTION: It's deferred to ES7.
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportExpression: 'ImportExpression',
        ImportDeclaration: 'ImportDeclaration',
        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
        ImportSpecifier: 'ImportSpecifier',
        Literal: 'Literal',
        LabeledStatement: 'LabeledStatement',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MetaProperty: 'MetaProperty',
        MethodDefinition: 'MethodDefinition',
        ModuleSpecifier: 'ModuleSpecifier',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        PrivateIdentifier: 'PrivateIdentifier',
        Program: 'Program',
        Property: 'Property',
        PropertyDefinition: 'PropertyDefinition',
        RestElement: 'RestElement',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        Super: 'Super',
        SwitchStatement: 'SwitchStatement',
        SwitchCase: 'SwitchCase',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        YieldExpression: 'YieldExpression'
      };
      VisitorKeys = {
        AssignmentExpression: ['left', 'right'],
        AssignmentPattern: ['left', 'right'],
        ArrayExpression: ['elements'],
        ArrayPattern: ['elements'],
        ArrowFunctionExpression: ['params', 'body'],
        AwaitExpression: ['argument'],
        // CAUTION: It's deferred to ES7.
        BlockStatement: ['body'],
        BinaryExpression: ['left', 'right'],
        BreakStatement: ['label'],
        CallExpression: ['callee', 'arguments'],
        CatchClause: ['param', 'body'],
        ChainExpression: ['expression'],
        ClassBody: ['body'],
        ClassDeclaration: ['id', 'superClass', 'body'],
        ClassExpression: ['id', 'superClass', 'body'],
        ComprehensionBlock: ['left', 'right'],
        // CAUTION: It's deferred to ES7.
        ComprehensionExpression: ['blocks', 'filter', 'body'],
        // CAUTION: It's deferred to ES7.
        ConditionalExpression: ['test', 'consequent', 'alternate'],
        ContinueStatement: ['label'],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ['body', 'test'],
        EmptyStatement: [],
        ExportAllDeclaration: ['source'],
        ExportDefaultDeclaration: ['declaration'],
        ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
        ExportSpecifier: ['exported', 'local'],
        ExpressionStatement: ['expression'],
        ForStatement: ['init', 'test', 'update', 'body'],
        ForInStatement: ['left', 'right', 'body'],
        ForOfStatement: ['left', 'right', 'body'],
        FunctionDeclaration: ['id', 'params', 'body'],
        FunctionExpression: ['id', 'params', 'body'],
        GeneratorExpression: ['blocks', 'filter', 'body'],
        // CAUTION: It's deferred to ES7.
        Identifier: [],
        IfStatement: ['test', 'consequent', 'alternate'],
        ImportExpression: ['source'],
        ImportDeclaration: ['specifiers', 'source'],
        ImportDefaultSpecifier: ['local'],
        ImportNamespaceSpecifier: ['local'],
        ImportSpecifier: ['imported', 'local'],
        Literal: [],
        LabeledStatement: ['label', 'body'],
        LogicalExpression: ['left', 'right'],
        MemberExpression: ['object', 'property'],
        MetaProperty: ['meta', 'property'],
        MethodDefinition: ['key', 'value'],
        ModuleSpecifier: [],
        NewExpression: ['callee', 'arguments'],
        ObjectExpression: ['properties'],
        ObjectPattern: ['properties'],
        PrivateIdentifier: [],
        Program: ['body'],
        Property: ['key', 'value'],
        PropertyDefinition: ['key', 'value'],
        RestElement: ['argument'],
        ReturnStatement: ['argument'],
        SequenceExpression: ['expressions'],
        SpreadElement: ['argument'],
        Super: [],
        SwitchStatement: ['discriminant', 'cases'],
        SwitchCase: ['test', 'consequent'],
        TaggedTemplateExpression: ['tag', 'quasi'],
        TemplateElement: [],
        TemplateLiteral: ['quasis', 'expressions'],
        ThisExpression: [],
        ThrowStatement: ['argument'],
        TryStatement: ['block', 'handler', 'finalizer'],
        UnaryExpression: ['argument'],
        UpdateExpression: ['argument'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id', 'init'],
        WhileStatement: ['test', 'body'],
        WithStatement: ['object', 'body'],
        YieldExpression: ['argument']
      };

      // unique id
      BREAK = {};
      SKIP = {};
      REMOVE = {};
      VisitorOption = {
        Break: BREAK,
        Skip: SKIP,
        Remove: REMOVE
      };
      function Reference(parent, key) {
        this.parent = parent;
        this.key = key;
      }
      Reference.prototype.replace = function replace(node) {
        this.parent[this.key] = node;
      };
      Reference.prototype.remove = function remove() {
        if (Array.isArray(this.parent)) {
          this.parent.splice(this.key, 1);
          return true;
        } else {
          this.replace(null);
          return false;
        }
      };
      function Element(node, path, wrap, ref) {
        this.node = node;
        this.path = path;
        this.wrap = wrap;
        this.ref = ref;
      }
      function Controller() {}

      // API:
      // return property path array from root to current node
      Controller.prototype.path = function path() {
        var i, iz, j, jz, result, element;
        function addToPath(result, path) {
          if (Array.isArray(path)) {
            for (j = 0, jz = path.length; j < jz; ++j) {
              result.push(path[j]);
            }
          } else {
            result.push(path);
          }
        }

        // root node
        if (!this.__current.path) {
          return null;
        }

        // first node is sentinel, second node is root element
        result = [];
        for (i = 2, iz = this.__leavelist.length; i < iz; ++i) {
          element = this.__leavelist[i];
          addToPath(result, element.path);
        }
        addToPath(result, this.__current.path);
        return result;
      };

      // API:
      // return type of current node
      Controller.prototype.type = function () {
        var node = this.current();
        return node.type || this.__current.wrap;
      };

      // API:
      // return array of parent elements
      Controller.prototype.parents = function parents() {
        var i, iz, result;

        // first node is sentinel
        result = [];
        for (i = 1, iz = this.__leavelist.length; i < iz; ++i) {
          result.push(this.__leavelist[i].node);
        }
        return result;
      };

      // API:
      // return current node
      Controller.prototype.current = function current() {
        return this.__current.node;
      };
      Controller.prototype.__execute = function __execute(callback, element) {
        var previous, result;
        result = undefined;
        previous = this.__current;
        this.__current = element;
        this.__state = null;
        if (callback) {
          result = callback.call(this, element.node, this.__leavelist[this.__leavelist.length - 1].node);
        }
        this.__current = previous;
        return result;
      };

      // API:
      // notify control skip / break
      Controller.prototype.notify = function notify(flag) {
        this.__state = flag;
      };

      // API:
      // skip child nodes of current node
      Controller.prototype.skip = function () {
        this.notify(SKIP);
      };

      // API:
      // break traversals
      Controller.prototype['break'] = function () {
        this.notify(BREAK);
      };

      // API:
      // remove node
      Controller.prototype.remove = function () {
        this.notify(REMOVE);
      };
      Controller.prototype.__initialize = function (root, visitor) {
        this.visitor = visitor;
        this.root = root;
        this.__worklist = [];
        this.__leavelist = [];
        this.__current = null;
        this.__state = null;
        this.__fallback = null;
        if (visitor.fallback === 'iteration') {
          this.__fallback = Object.keys;
        } else if (typeof visitor.fallback === 'function') {
          this.__fallback = visitor.fallback;
        }
        this.__keys = VisitorKeys;
        if (visitor.keys) {
          this.__keys = Object.assign(Object.create(this.__keys), visitor.keys);
        }
      };
      function isNode(node) {
        if (node == null) {
          return false;
        }
        return typeof node === 'object' && typeof node.type === 'string';
      }
      function isProperty(nodeType, key) {
        return (nodeType === Syntax.ObjectExpression || nodeType === Syntax.ObjectPattern) && 'properties' === key;
      }
      function candidateExistsInLeaveList(leavelist, candidate) {
        for (var i = leavelist.length - 1; i >= 0; --i) {
          if (leavelist[i].node === candidate) {
            return true;
          }
        }
        return false;
      }
      Controller.prototype.traverse = function traverse(root, visitor) {
        var worklist, leavelist, element, node, nodeType, ret, key, current, current2, candidates, candidate, sentinel;
        this.__initialize(root, visitor);
        sentinel = {};

        // reference
        worklist = this.__worklist;
        leavelist = this.__leavelist;

        // initialize
        worklist.push(new Element(root, null, null, null));
        leavelist.push(new Element(null, null, null, null));
        while (worklist.length) {
          element = worklist.pop();
          if (element === sentinel) {
            element = leavelist.pop();
            ret = this.__execute(visitor.leave, element);
            if (this.__state === BREAK || ret === BREAK) {
              return;
            }
            continue;
          }
          if (element.node) {
            ret = this.__execute(visitor.enter, element);
            if (this.__state === BREAK || ret === BREAK) {
              return;
            }
            worklist.push(sentinel);
            leavelist.push(element);
            if (this.__state === SKIP || ret === SKIP) {
              continue;
            }
            node = element.node;
            nodeType = node.type || element.wrap;
            candidates = this.__keys[nodeType];
            if (!candidates) {
              if (this.__fallback) {
                candidates = this.__fallback(node);
              } else {
                throw new Error('Unknown node type ' + nodeType + '.');
              }
            }
            current = candidates.length;
            while ((current -= 1) >= 0) {
              key = candidates[current];
              candidate = node[key];
              if (!candidate) {
                continue;
              }
              if (Array.isArray(candidate)) {
                current2 = candidate.length;
                while ((current2 -= 1) >= 0) {
                  if (!candidate[current2]) {
                    continue;
                  }
                  if (candidateExistsInLeaveList(leavelist, candidate[current2])) {
                    continue;
                  }
                  if (isProperty(nodeType, candidates[current])) {
                    element = new Element(candidate[current2], [key, current2], 'Property', null);
                  } else if (isNode(candidate[current2])) {
                    element = new Element(candidate[current2], [key, current2], null, null);
                  } else {
                    continue;
                  }
                  worklist.push(element);
                }
              } else if (isNode(candidate)) {
                if (candidateExistsInLeaveList(leavelist, candidate)) {
                  continue;
                }
                worklist.push(new Element(candidate, key, null, null));
              }
            }
          }
        }
      };
      Controller.prototype.replace = function replace(root, visitor) {
        var worklist, leavelist, node, nodeType, target, element, current, current2, candidates, candidate, sentinel, outer, key;
        function removeElem(element) {
          var i, key, nextElem, parent;
          if (element.ref.remove()) {
            // When the reference is an element of an array.
            key = element.ref.key;
            parent = element.ref.parent;

            // If removed from array, then decrease following items' keys.
            i = worklist.length;
            while (i--) {
              nextElem = worklist[i];
              if (nextElem.ref && nextElem.ref.parent === parent) {
                if (nextElem.ref.key < key) {
                  break;
                }
                --nextElem.ref.key;
              }
            }
          }
        }
        this.__initialize(root, visitor);
        sentinel = {};

        // reference
        worklist = this.__worklist;
        leavelist = this.__leavelist;

        // initialize
        outer = {
          root: root
        };
        element = new Element(root, null, null, new Reference(outer, 'root'));
        worklist.push(element);
        leavelist.push(element);
        while (worklist.length) {
          element = worklist.pop();
          if (element === sentinel) {
            element = leavelist.pop();
            target = this.__execute(visitor.leave, element);

            // node may be replaced with null,
            // so distinguish between undefined and null in this place
            if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
              // replace
              element.ref.replace(target);
            }
            if (this.__state === REMOVE || target === REMOVE) {
              removeElem(element);
            }
            if (this.__state === BREAK || target === BREAK) {
              return outer.root;
            }
            continue;
          }
          target = this.__execute(visitor.enter, element);

          // node may be replaced with null,
          // so distinguish between undefined and null in this place
          if (target !== undefined && target !== BREAK && target !== SKIP && target !== REMOVE) {
            // replace
            element.ref.replace(target);
            element.node = target;
          }
          if (this.__state === REMOVE || target === REMOVE) {
            removeElem(element);
            element.node = null;
          }
          if (this.__state === BREAK || target === BREAK) {
            return outer.root;
          }

          // node may be null
          node = element.node;
          if (!node) {
            continue;
          }
          worklist.push(sentinel);
          leavelist.push(element);
          if (this.__state === SKIP || target === SKIP) {
            continue;
          }
          nodeType = node.type || element.wrap;
          candidates = this.__keys[nodeType];
          if (!candidates) {
            if (this.__fallback) {
              candidates = this.__fallback(node);
            } else {
              throw new Error('Unknown node type ' + nodeType + '.');
            }
          }
          current = candidates.length;
          while ((current -= 1) >= 0) {
            key = candidates[current];
            candidate = node[key];
            if (!candidate) {
              continue;
            }
            if (Array.isArray(candidate)) {
              current2 = candidate.length;
              while ((current2 -= 1) >= 0) {
                if (!candidate[current2]) {
                  continue;
                }
                if (isProperty(nodeType, candidates[current])) {
                  element = new Element(candidate[current2], [key, current2], 'Property', new Reference(candidate, current2));
                } else if (isNode(candidate[current2])) {
                  element = new Element(candidate[current2], [key, current2], null, new Reference(candidate, current2));
                } else {
                  continue;
                }
                worklist.push(element);
              }
            } else if (isNode(candidate)) {
              worklist.push(new Element(candidate, key, null, new Reference(node, key)));
            }
          }
        }
        return outer.root;
      };
      function traverse(root, visitor) {
        var controller = new Controller();
        return controller.traverse(root, visitor);
      }
      function replace(root, visitor) {
        var controller = new Controller();
        return controller.replace(root, visitor);
      }
      function extendCommentRange(comment, tokens) {
        var target;
        target = upperBound(tokens, function search(token) {
          return token.range[0] > comment.range[0];
        });
        comment.extendedRange = [comment.range[0], comment.range[1]];
        if (target !== tokens.length) {
          comment.extendedRange[1] = tokens[target].range[0];
        }
        target -= 1;
        if (target >= 0) {
          comment.extendedRange[0] = tokens[target].range[1];
        }
        return comment;
      }
      function attachComments(tree, providedComments, tokens) {
        // At first, we should calculate extended comment ranges.
        var comments = [],
          comment,
          len,
          i,
          cursor;
        if (!tree.range) {
          throw new Error('attachComments needs range information');
        }

        // tokens array is empty, we attach comments to tree as 'leadingComments'
        if (!tokens.length) {
          if (providedComments.length) {
            for (i = 0, len = providedComments.length; i < len; i += 1) {
              comment = deepCopy(providedComments[i]);
              comment.extendedRange = [0, tree.range[0]];
              comments.push(comment);
            }
            tree.leadingComments = comments;
          }
          return tree;
        }
        for (i = 0, len = providedComments.length; i < len; i += 1) {
          comments.push(extendCommentRange(deepCopy(providedComments[i]), tokens));
        }

        // This is based on John Freeman's implementation.
        cursor = 0;
        traverse(tree, {
          enter: function (node) {
            var comment;
            while (cursor < comments.length) {
              comment = comments[cursor];
              if (comment.extendedRange[1] > node.range[0]) {
                break;
              }
              if (comment.extendedRange[1] === node.range[0]) {
                if (!node.leadingComments) {
                  node.leadingComments = [];
                }
                node.leadingComments.push(comment);
                comments.splice(cursor, 1);
              } else {
                cursor += 1;
              }
            }

            // already out of owned node
            if (cursor === comments.length) {
              return VisitorOption.Break;
            }
            if (comments[cursor].extendedRange[0] > node.range[1]) {
              return VisitorOption.Skip;
            }
          }
        });
        cursor = 0;
        traverse(tree, {
          leave: function (node) {
            var comment;
            while (cursor < comments.length) {
              comment = comments[cursor];
              if (node.range[1] < comment.extendedRange[0]) {
                break;
              }
              if (node.range[1] === comment.extendedRange[0]) {
                if (!node.trailingComments) {
                  node.trailingComments = [];
                }
                node.trailingComments.push(comment);
                comments.splice(cursor, 1);
              } else {
                cursor += 1;
              }
            }

            // already out of owned node
            if (cursor === comments.length) {
              return VisitorOption.Break;
            }
            if (comments[cursor].extendedRange[0] > node.range[1]) {
              return VisitorOption.Skip;
            }
          }
        });
        return tree;
      }
      exports.Syntax = Syntax;
      exports.traverse = traverse;
      exports.replace = replace;
      exports.attachComments = attachComments;
      exports.VisitorKeys = VisitorKeys;
      exports.VisitorOption = VisitorOption;
      exports.Controller = Controller;
      exports.cloneEnvironment = function () {
        return clone({});
      };
      return exports;
    })(exports);
    /* vim: set sw=4 ts=4 et tw=80 : */
  });

  var parser = createCommonjsModule(function (module) {
    /*
     * Generated by PEG.js 0.10.0.
     *
     * http://pegjs.org/
     */
    (function (root, factory) {
      if ( module.exports) {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {

      function peg$subclass(child, parent) {
        function ctor() {
          this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
      }
      function peg$SyntaxError(message, expected, found, location) {
        this.message = message;
        this.expected = expected;
        this.found = found;
        this.location = location;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
          Error.captureStackTrace(this, peg$SyntaxError);
        }
      }
      peg$subclass(peg$SyntaxError, Error);
      peg$SyntaxError.buildMessage = function (expected, found) {
        var DESCRIBE_EXPECTATION_FNS = {
          literal: function literal(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },
          "class": function _class(expectation) {
            var escapedParts = "",
              i;
            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
            }
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },
          any: function any(expectation) {
            return "any character";
          },
          end: function end(expectation) {
            return "end of input";
          },
          other: function other(expectation) {
            return expectation.description;
          }
        };
        function hex(ch) {
          return ch.charCodeAt(0).toString(16).toUpperCase();
        }
        function literalEscape(s) {
          return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
            return '\\x0' + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return '\\x' + hex(ch);
          });
        }
        function classEscape(s) {
          return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
            return '\\x0' + hex(ch);
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
            return '\\x' + hex(ch);
          });
        }
        function describeExpectation(expectation) {
          return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
        }
        function describeExpected(expected) {
          var descriptions = new Array(expected.length),
            i,
            j;
          for (i = 0; i < expected.length; i++) {
            descriptions[i] = describeExpectation(expected[i]);
          }
          descriptions.sort();
          if (descriptions.length > 0) {
            for (i = 1, j = 1; i < descriptions.length; i++) {
              if (descriptions[i - 1] !== descriptions[i]) {
                descriptions[j] = descriptions[i];
                j++;
              }
            }
            descriptions.length = j;
          }
          switch (descriptions.length) {
            case 1:
              return descriptions[0];
            case 2:
              return descriptions[0] + " or " + descriptions[1];
            default:
              return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
          }
        }
        function describeFound(found) {
          return found ? "\"" + literalEscape(found) + "\"" : "end of input";
        }
        return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
      };
      function peg$parse(input, options) {
        options = options !== void 0 ? options : {};
        var peg$FAILED = {},
          peg$startRuleFunctions = {
            start: peg$parsestart
          },
          peg$startRuleFunction = peg$parsestart,
          peg$c0 = function peg$c0(ss) {
            return ss.length === 1 ? ss[0] : {
              type: 'matches',
              selectors: ss
            };
          },
          peg$c1 = function peg$c1() {
            return void 0;
          },
          peg$c2 = " ",
          peg$c3 = peg$literalExpectation(" ", false),
          peg$c4 = /^[^ [\],():#!=><~+.]/,
          peg$c5 = peg$classExpectation([" ", "[", "]", ",", "(", ")", ":", "#", "!", "=", ">", "<", "~", "+", "."], true, false),
          peg$c6 = function peg$c6(i) {
            return i.join('');
          },
          peg$c7 = ">",
          peg$c8 = peg$literalExpectation(">", false),
          peg$c9 = function peg$c9() {
            return 'child';
          },
          peg$c10 = "~",
          peg$c11 = peg$literalExpectation("~", false),
          peg$c12 = function peg$c12() {
            return 'sibling';
          },
          peg$c13 = "+",
          peg$c14 = peg$literalExpectation("+", false),
          peg$c15 = function peg$c15() {
            return 'adjacent';
          },
          peg$c16 = function peg$c16() {
            return 'descendant';
          },
          peg$c17 = ",",
          peg$c18 = peg$literalExpectation(",", false),
          peg$c19 = function peg$c19(s, ss) {
            return [s].concat(ss.map(function (s) {
              return s[3];
            }));
          },
          peg$c20 = function peg$c20(op, s) {
            if (!op) return s;
            return {
              type: op,
              left: {
                type: 'exactNode'
              },
              right: s
            };
          },
          peg$c21 = function peg$c21(a, ops) {
            return ops.reduce(function (memo, rhs) {
              return {
                type: rhs[0],
                left: memo,
                right: rhs[1]
              };
            }, a);
          },
          peg$c22 = "!",
          peg$c23 = peg$literalExpectation("!", false),
          peg$c24 = function peg$c24(subject, as) {
            var b = as.length === 1 ? as[0] : {
              type: 'compound',
              selectors: as
            };
            if (subject) b.subject = true;
            return b;
          },
          peg$c25 = "*",
          peg$c26 = peg$literalExpectation("*", false),
          peg$c27 = function peg$c27(a) {
            return {
              type: 'wildcard',
              value: a
            };
          },
          peg$c28 = "#",
          peg$c29 = peg$literalExpectation("#", false),
          peg$c30 = function peg$c30(i) {
            return {
              type: 'identifier',
              value: i
            };
          },
          peg$c31 = "[",
          peg$c32 = peg$literalExpectation("[", false),
          peg$c33 = "]",
          peg$c34 = peg$literalExpectation("]", false),
          peg$c35 = function peg$c35(v) {
            return v;
          },
          peg$c36 = /^[><!]/,
          peg$c37 = peg$classExpectation([">", "<", "!"], false, false),
          peg$c38 = "=",
          peg$c39 = peg$literalExpectation("=", false),
          peg$c40 = function peg$c40(a) {
            return (a || '') + '=';
          },
          peg$c41 = /^[><]/,
          peg$c42 = peg$classExpectation([">", "<"], false, false),
          peg$c43 = ".",
          peg$c44 = peg$literalExpectation(".", false),
          peg$c45 = function peg$c45(a, as) {
            return [].concat.apply([a], as).join('');
          },
          peg$c46 = function peg$c46(name, op, value) {
            return {
              type: 'attribute',
              name: name,
              operator: op,
              value: value
            };
          },
          peg$c47 = function peg$c47(name) {
            return {
              type: 'attribute',
              name: name
            };
          },
          peg$c48 = "\"",
          peg$c49 = peg$literalExpectation("\"", false),
          peg$c50 = /^[^\\"]/,
          peg$c51 = peg$classExpectation(["\\", "\""], true, false),
          peg$c52 = "\\",
          peg$c53 = peg$literalExpectation("\\", false),
          peg$c54 = peg$anyExpectation(),
          peg$c55 = function peg$c55(a, b) {
            return a + b;
          },
          peg$c56 = function peg$c56(d) {
            return {
              type: 'literal',
              value: strUnescape(d.join(''))
            };
          },
          peg$c57 = "'",
          peg$c58 = peg$literalExpectation("'", false),
          peg$c59 = /^[^\\']/,
          peg$c60 = peg$classExpectation(["\\", "'"], true, false),
          peg$c61 = /^[0-9]/,
          peg$c62 = peg$classExpectation([["0", "9"]], false, false),
          peg$c63 = function peg$c63(a, b) {
            // Can use `a.flat().join('')` once supported
            var leadingDecimals = a ? [].concat.apply([], a).join('') : '';
            return {
              type: 'literal',
              value: parseFloat(leadingDecimals + b.join(''))
            };
          },
          peg$c64 = function peg$c64(i) {
            return {
              type: 'literal',
              value: i
            };
          },
          peg$c65 = "type(",
          peg$c66 = peg$literalExpectation("type(", false),
          peg$c67 = /^[^ )]/,
          peg$c68 = peg$classExpectation([" ", ")"], true, false),
          peg$c69 = ")",
          peg$c70 = peg$literalExpectation(")", false),
          peg$c71 = function peg$c71(t) {
            return {
              type: 'type',
              value: t.join('')
            };
          },
          peg$c72 = /^[imsu]/,
          peg$c73 = peg$classExpectation(["i", "m", "s", "u"], false, false),
          peg$c74 = "/",
          peg$c75 = peg$literalExpectation("/", false),
          peg$c76 = function peg$c76(pattern, flgs) {
            return {
              type: 'regexp',
              value: new RegExp(pattern.join(''), flgs ? flgs.join('') : '')
            };
          },
          peg$c77 = /^[^\]\\]/,
          peg$c78 = peg$classExpectation(["]", "\\"], true, false),
          peg$c79 = function peg$c79(cs) {
            return '[' + cs.join('') + ']';
          },
          peg$c80 = function peg$c80(a) {
            return '\\' + a;
          },
          peg$c81 = /^[^\/\\[]/,
          peg$c82 = peg$classExpectation(["/", "\\", "["], true, false),
          peg$c83 = function peg$c83(cs) {
            return cs.join('');
          },
          peg$c84 = function peg$c84(i, is) {
            return {
              type: 'field',
              name: is.reduce(function (memo, p) {
                return memo + p[0] + p[1];
              }, i)
            };
          },
          peg$c85 = ":not(",
          peg$c86 = peg$literalExpectation(":not(", false),
          peg$c87 = function peg$c87(ss) {
            return {
              type: 'not',
              selectors: ss
            };
          },
          peg$c88 = ":matches(",
          peg$c89 = peg$literalExpectation(":matches(", false),
          peg$c90 = function peg$c90(ss) {
            return {
              type: 'matches',
              selectors: ss
            };
          },
          peg$c91 = ":is(",
          peg$c92 = peg$literalExpectation(":is(", false),
          peg$c93 = ":has(",
          peg$c94 = peg$literalExpectation(":has(", false),
          peg$c95 = function peg$c95(ss) {
            return {
              type: 'has',
              selectors: ss
            };
          },
          peg$c96 = ":first-child",
          peg$c97 = peg$literalExpectation(":first-child", false),
          peg$c98 = function peg$c98() {
            return nth(1);
          },
          peg$c99 = ":last-child",
          peg$c100 = peg$literalExpectation(":last-child", false),
          peg$c101 = function peg$c101() {
            return nthLast(1);
          },
          peg$c102 = ":nth-child(",
          peg$c103 = peg$literalExpectation(":nth-child(", false),
          peg$c104 = function peg$c104(n) {
            return nth(parseInt(n.join(''), 10));
          },
          peg$c105 = ":nth-last-child(",
          peg$c106 = peg$literalExpectation(":nth-last-child(", false),
          peg$c107 = function peg$c107(n) {
            return nthLast(parseInt(n.join(''), 10));
          },
          peg$c108 = ":",
          peg$c109 = peg$literalExpectation(":", false),
          peg$c110 = function peg$c110(c) {
            return {
              type: 'class',
              name: c
            };
          },
          peg$currPos = 0,
          peg$posDetailsCache = [{
            line: 1,
            column: 1
          }],
          peg$maxFailPos = 0,
          peg$maxFailExpected = [],
          peg$resultsCache = {},
          peg$result;
        if ("startRule" in options) {
          if (!(options.startRule in peg$startRuleFunctions)) {
            throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
          }
          peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
        }
        function peg$literalExpectation(text, ignoreCase) {
          return {
            type: "literal",
            text: text,
            ignoreCase: ignoreCase
          };
        }
        function peg$classExpectation(parts, inverted, ignoreCase) {
          return {
            type: "class",
            parts: parts,
            inverted: inverted,
            ignoreCase: ignoreCase
          };
        }
        function peg$anyExpectation() {
          return {
            type: "any"
          };
        }
        function peg$endExpectation() {
          return {
            type: "end"
          };
        }
        function peg$computePosDetails(pos) {
          var details = peg$posDetailsCache[pos],
            p;
          if (details) {
            return details;
          } else {
            p = pos - 1;
            while (!peg$posDetailsCache[p]) {
              p--;
            }
            details = peg$posDetailsCache[p];
            details = {
              line: details.line,
              column: details.column
            };
            while (p < pos) {
              if (input.charCodeAt(p) === 10) {
                details.line++;
                details.column = 1;
              } else {
                details.column++;
              }
              p++;
            }
            peg$posDetailsCache[pos] = details;
            return details;
          }
        }
        function peg$computeLocation(startPos, endPos) {
          var startPosDetails = peg$computePosDetails(startPos),
            endPosDetails = peg$computePosDetails(endPos);
          return {
            start: {
              offset: startPos,
              line: startPosDetails.line,
              column: startPosDetails.column
            },
            end: {
              offset: endPos,
              line: endPosDetails.line,
              column: endPosDetails.column
            }
          };
        }
        function peg$fail(expected) {
          if (peg$currPos < peg$maxFailPos) {
            return;
          }
          if (peg$currPos > peg$maxFailPos) {
            peg$maxFailPos = peg$currPos;
            peg$maxFailExpected = [];
          }
          peg$maxFailExpected.push(expected);
        }
        function peg$buildStructuredError(expected, found, location) {
          return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
        }
        function peg$parsestart() {
          var s0, s1, s2, s3;
          var key = peg$currPos * 36 + 0,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            s2 = peg$parseselectors();
            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();
              if (s3 !== peg$FAILED) {
                s1 = peg$c0(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
              s1 = peg$c1();
            }
            s0 = s1;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parse_() {
          var s0, s1;
          var key = peg$currPos * 36 + 1,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = [];
          if (input.charCodeAt(peg$currPos) === 32) {
            s1 = peg$c2;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c3);
            }
          }
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            if (input.charCodeAt(peg$currPos) === 32) {
              s1 = peg$c2;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              {
                peg$fail(peg$c3);
              }
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseidentifierName() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 2,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = [];
          if (peg$c4.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            {
              peg$fail(peg$c5);
            }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              if (peg$c4.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                {
                  peg$fail(peg$c5);
                }
              }
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s1 = peg$c6(s1);
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsebinaryOp() {
          var s0, s1, s2, s3;
          var key = peg$currPos * 36 + 3,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s2 = peg$c7;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              {
                peg$fail(peg$c8);
              }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();
              if (s3 !== peg$FAILED) {
                s1 = peg$c9();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 126) {
                s2 = peg$c10;
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                {
                  peg$fail(peg$c11);
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parse_();
                if (s3 !== peg$FAILED) {
                  s1 = peg$c12();
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parse_();
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 43) {
                  s2 = peg$c13;
                  peg$currPos++;
                } else {
                  s2 = peg$FAILED;
                  {
                    peg$fail(peg$c14);
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$parse_();
                  if (s3 !== peg$FAILED) {
                    s1 = peg$c15();
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 32) {
                  s1 = peg$c2;
                  peg$currPos++;
                } else {
                  s1 = peg$FAILED;
                  {
                    peg$fail(peg$c3);
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parse_();
                  if (s2 !== peg$FAILED) {
                    s1 = peg$c16();
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsehasSelectors() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          var key = peg$currPos * 36 + 4,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parsehasSelector();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c17;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                {
                  peg$fail(peg$c18);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsehasSelector();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c17;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  {
                    peg$fail(peg$c18);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parsehasSelector();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c19(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseselectors() {
          var s0, s1, s2, s3, s4, s5, s6, s7;
          var key = peg$currPos * 36 + 5,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parseselector();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s5 = peg$c17;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                {
                  peg$fail(peg$c18);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseselector();
                  if (s7 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s5 = peg$c17;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  {
                    peg$fail(peg$c18);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseselector();
                    if (s7 !== peg$FAILED) {
                      s4 = [s4, s5, s6, s7];
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c19(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsehasSelector() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 6,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parsebinaryOp();
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseselector();
            if (s2 !== peg$FAILED) {
              s1 = peg$c20(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseselector() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 7,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parsesequence();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            s4 = peg$parsebinaryOp();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsesequence();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = peg$parsebinaryOp();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsesequence();
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c21(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsesequence() {
          var s0, s1, s2, s3;
          var key = peg$currPos * 36 + 8,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 33) {
            s1 = peg$c22;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c23);
            }
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseatom();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseatom();
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c24(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseatom() {
          var s0;
          var key = peg$currPos * 36 + 9,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$parsewildcard();
          if (s0 === peg$FAILED) {
            s0 = peg$parseidentifier();
            if (s0 === peg$FAILED) {
              s0 = peg$parseattr();
              if (s0 === peg$FAILED) {
                s0 = peg$parsefield();
                if (s0 === peg$FAILED) {
                  s0 = peg$parsenegation();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parsematches();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parseis();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parsehas();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parsefirstChild();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parselastChild();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parsenthChild();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parsenthLastChild();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parseclass();
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsewildcard() {
          var s0, s1;
          var key = peg$currPos * 36 + 10,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c25;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c26);
            }
          }
          if (s1 !== peg$FAILED) {
            s1 = peg$c27(s1);
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseidentifier() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 11,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 35) {
            s1 = peg$c28;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c29);
            }
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseidentifierName();
            if (s2 !== peg$FAILED) {
              s1 = peg$c30(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseattr() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 12,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 91) {
            s1 = peg$c31;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c32);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseattrValue();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s5 = peg$c33;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c34);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c35(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseattrOps() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 13,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c37);
            }
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 61) {
              s2 = peg$c38;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              {
                peg$fail(peg$c39);
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c40(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            if (peg$c41.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              {
                peg$fail(peg$c42);
              }
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseattrEqOps() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 14,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 33) {
            s1 = peg$c22;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c23);
            }
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 61) {
              s2 = peg$c38;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              {
                peg$fail(peg$c39);
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c40(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseattrName() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 15,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parseidentifierName();
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 46) {
              s4 = peg$c43;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              {
                peg$fail(peg$c44);
              }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseidentifierName();
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 46) {
                s4 = peg$c43;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                {
                  peg$fail(peg$c44);
                }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseidentifierName();
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c45(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseattrValue() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 16,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parseattrName();
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseattrEqOps();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsetype();
                  if (s5 === peg$FAILED) {
                    s5 = peg$parseregex();
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c46(s1, s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseattrName();
            if (s1 !== peg$FAILED) {
              s2 = peg$parse_();
              if (s2 !== peg$FAILED) {
                s3 = peg$parseattrOps();
                if (s3 !== peg$FAILED) {
                  s4 = peg$parse_();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsestring();
                    if (s5 === peg$FAILED) {
                      s5 = peg$parsenumber();
                      if (s5 === peg$FAILED) {
                        s5 = peg$parsepath();
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      s1 = peg$c46(s1, s3, s5);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$parseattrName();
              if (s1 !== peg$FAILED) {
                s1 = peg$c47(s1);
              }
              s0 = s1;
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsestring() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 17,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 34) {
            s1 = peg$c48;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c49);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            if (peg$c50.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              {
                peg$fail(peg$c51);
              }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 92) {
                s4 = peg$c52;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                {
                  peg$fail(peg$c53);
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  {
                    peg$fail(peg$c54);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s4 = peg$c55(s4, s5);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              if (peg$c50.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                {
                  peg$fail(peg$c51);
                }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                  s4 = peg$c52;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  {
                    peg$fail(peg$c53);
                  }
                }
                if (s4 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c54);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s4 = peg$c55(s4, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s3 = peg$c48;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                {
                  peg$fail(peg$c49);
                }
              }
              if (s3 !== peg$FAILED) {
                s1 = peg$c56(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 39) {
              s1 = peg$c57;
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              {
                peg$fail(peg$c58);
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = [];
              if (peg$c59.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                {
                  peg$fail(peg$c60);
                }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                  s4 = peg$c52;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  {
                    peg$fail(peg$c53);
                  }
                }
                if (s4 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c54);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s4 = peg$c55(s4, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                if (peg$c59.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  {
                    peg$fail(peg$c60);
                  }
                }
                if (s3 === peg$FAILED) {
                  s3 = peg$currPos;
                  if (input.charCodeAt(peg$currPos) === 92) {
                    s4 = peg$c52;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    {
                      peg$fail(peg$c53);
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    if (input.length > peg$currPos) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      {
                        peg$fail(peg$c54);
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      s4 = peg$c55(s4, s5);
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                }
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s3 = peg$c57;
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  {
                    peg$fail(peg$c58);
                  }
                }
                if (s3 !== peg$FAILED) {
                  s1 = peg$c56(s2);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsenumber() {
          var s0, s1, s2, s3;
          var key = peg$currPos * 36 + 18,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = [];
          if (peg$c61.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            {
              peg$fail(peg$c62);
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c61.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              {
                peg$fail(peg$c62);
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s3 = peg$c43;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              {
                peg$fail(peg$c44);
              }
            }
            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
          if (s1 === peg$FAILED) {
            s1 = null;
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            if (peg$c61.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              {
                peg$fail(peg$c62);
              }
            }
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                if (peg$c61.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  {
                    peg$fail(peg$c62);
                  }
                }
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c63(s1, s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsepath() {
          var s0, s1;
          var key = peg$currPos * 36 + 19,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = peg$parseidentifierName();
          if (s1 !== peg$FAILED) {
            s1 = peg$c64(s1);
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsetype() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 20,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c65) {
            s1 = peg$c65;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c66);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = [];
              if (peg$c67.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                {
                  peg$fail(peg$c68);
                }
              }
              if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  if (peg$c67.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    {
                      peg$fail(peg$c68);
                    }
                  }
                }
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c71(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseflags() {
          var s0, s1;
          var key = peg$currPos * 36 + 21,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = [];
          if (peg$c72.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c73);
            }
          }
          if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
              s0.push(s1);
              if (peg$c72.test(input.charAt(peg$currPos))) {
                s1 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s1 = peg$FAILED;
                {
                  peg$fail(peg$c73);
                }
              }
            }
          } else {
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseregex() {
          var s0, s1, s2, s3, s4;
          var key = peg$currPos * 36 + 22,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 47) {
            s1 = peg$c74;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c75);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parsere_character_class();
            if (s3 === peg$FAILED) {
              s3 = peg$parsere_escape();
              if (s3 === peg$FAILED) {
                s3 = peg$parsere_chars();
              }
            }
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parsere_character_class();
                if (s3 === peg$FAILED) {
                  s3 = peg$parsere_escape();
                  if (s3 === peg$FAILED) {
                    s3 = peg$parsere_chars();
                  }
                }
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 47) {
                s3 = peg$c74;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                {
                  peg$fail(peg$c75);
                }
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parseflags();
                if (s4 === peg$FAILED) {
                  s4 = null;
                }
                if (s4 !== peg$FAILED) {
                  s1 = peg$c76(s2, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsere_character_class() {
          var s0, s1, s2, s3;
          var key = peg$currPos * 36 + 23,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 91) {
            s1 = peg$c31;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c32);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            if (peg$c77.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              {
                peg$fail(peg$c78);
              }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$parsere_escape();
            }
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                if (peg$c77.test(input.charAt(peg$currPos))) {
                  s3 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s3 = peg$FAILED;
                  {
                    peg$fail(peg$c78);
                  }
                }
                if (s3 === peg$FAILED) {
                  s3 = peg$parsere_escape();
                }
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s3 = peg$c33;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                {
                  peg$fail(peg$c34);
                }
              }
              if (s3 !== peg$FAILED) {
                s1 = peg$c79(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsere_escape() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 24,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 92) {
            s1 = peg$c52;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c53);
            }
          }
          if (s1 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              {
                peg$fail(peg$c54);
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = peg$c80(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsere_chars() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 25,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          s1 = [];
          if (peg$c81.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            {
              peg$fail(peg$c82);
            }
          }
          if (s2 !== peg$FAILED) {
            while (s2 !== peg$FAILED) {
              s1.push(s2);
              if (peg$c81.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                {
                  peg$fail(peg$c82);
                }
              }
            }
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            s1 = peg$c83(s1);
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsefield() {
          var s0, s1, s2, s3, s4, s5, s6;
          var key = peg$currPos * 36 + 26,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 46) {
            s1 = peg$c43;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c44);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseidentifierName();
            if (s2 !== peg$FAILED) {
              s3 = [];
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 46) {
                s5 = peg$c43;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                {
                  peg$fail(peg$c44);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseidentifierName();
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c43;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  {
                    peg$fail(peg$c44);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseidentifierName();
                  if (s6 !== peg$FAILED) {
                    s5 = [s5, s6];
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              }
              if (s3 !== peg$FAILED) {
                s1 = peg$c84(s2, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsenegation() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 27,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c85) {
            s1 = peg$c85;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c86);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseselectors();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c87(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsematches() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 28,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 9) === peg$c88) {
            s1 = peg$c88;
            peg$currPos += 9;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c89);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseselectors();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c90(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseis() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 29,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c91) {
            s1 = peg$c91;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c92);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseselectors();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c90(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsehas() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 30,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 5) === peg$c93) {
            s1 = peg$c93;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c94);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parsehasSelectors();
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c95(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsefirstChild() {
          var s0, s1;
          var key = peg$currPos * 36 + 31,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 12) === peg$c96) {
            s1 = peg$c96;
            peg$currPos += 12;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c97);
            }
          }
          if (s1 !== peg$FAILED) {
            s1 = peg$c98();
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parselastChild() {
          var s0, s1;
          var key = peg$currPos * 36 + 32,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 11) === peg$c99) {
            s1 = peg$c99;
            peg$currPos += 11;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c100);
            }
          }
          if (s1 !== peg$FAILED) {
            s1 = peg$c101();
          }
          s0 = s1;
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsenthChild() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 33,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 11) === peg$c102) {
            s1 = peg$c102;
            peg$currPos += 11;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c103);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = [];
              if (peg$c61.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                {
                  peg$fail(peg$c62);
                }
              }
              if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  if (peg$c61.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    {
                      peg$fail(peg$c62);
                    }
                  }
                }
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c104(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parsenthLastChild() {
          var s0, s1, s2, s3, s4, s5;
          var key = peg$currPos * 36 + 34,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 16) === peg$c105) {
            s1 = peg$c105;
            peg$currPos += 16;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c106);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = [];
              if (peg$c61.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                {
                  peg$fail(peg$c62);
                }
              }
              if (s4 !== peg$FAILED) {
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  if (peg$c61.test(input.charAt(peg$currPos))) {
                    s4 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    {
                      peg$fail(peg$c62);
                    }
                  }
                }
              } else {
                s3 = peg$FAILED;
              }
              if (s3 !== peg$FAILED) {
                s4 = peg$parse_();
                if (s4 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s5 = peg$c69;
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    {
                      peg$fail(peg$c70);
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s1 = peg$c107(s3);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function peg$parseclass() {
          var s0, s1, s2;
          var key = peg$currPos * 36 + 35,
            cached = peg$resultsCache[key];
          if (cached) {
            peg$currPos = cached.nextPos;
            return cached.result;
          }
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 58) {
            s1 = peg$c108;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            {
              peg$fail(peg$c109);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parseidentifierName();
            if (s2 !== peg$FAILED) {
              s1 = peg$c110(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          peg$resultsCache[key] = {
            nextPos: peg$currPos,
            result: s0
          };
          return s0;
        }
        function nth(n) {
          return {
            type: 'nth-child',
            index: {
              type: 'literal',
              value: n
            }
          };
        }
        function nthLast(n) {
          return {
            type: 'nth-last-child',
            index: {
              type: 'literal',
              value: n
            }
          };
        }
        function strUnescape(s) {
          return s.replace(/\\(.)/g, function (match, ch) {
            switch (ch) {
              case 'b':
                return '\b';
              case 'f':
                return '\f';
              case 'n':
                return '\n';
              case 'r':
                return '\r';
              case 't':
                return '\t';
              case 'v':
                return '\v';
              default:
                return ch;
            }
          });
        }
        peg$result = peg$startRuleFunction();
        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
          return peg$result;
        } else {
          if (peg$result !== peg$FAILED && peg$currPos < input.length) {
            peg$fail(peg$endExpectation());
          }
          throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
      }
      return {
        SyntaxError: peg$SyntaxError,
        parse: peg$parse
      };
    });
  });

  /**
  * @typedef {"LEFT_SIDE"|"RIGHT_SIDE"} Side
  */

  var LEFT_SIDE = 'LEFT_SIDE';
  var RIGHT_SIDE = 'RIGHT_SIDE';

  /**
   * @external AST
   * @see https://esprima.readthedocs.io/en/latest/syntax-tree-format.html
   */

  /**
   * One of the rules of `grammar.pegjs`
   * @typedef {PlainObject} SelectorAST
   * @see grammar.pegjs
  */

  /**
   * The `sequence` production of `grammar.pegjs`
   * @typedef {PlainObject} SelectorSequenceAST
  */

  /**
   * Get the value of a property which may be multiple levels down
   * in the object.
   * @param {?PlainObject} obj
   * @param {string[]} keys
   * @returns {undefined|boolean|string|number|external:AST}
   */
  function getPath(obj, keys) {
    for (var i = 0; i < keys.length; ++i) {
      if (obj == null) {
        return obj;
      }
      obj = obj[keys[i]];
    }
    return obj;
  }

  /**
   * Determine whether `node` can be reached by following `path`,
   * starting at `ancestor`.
   * @param {?external:AST} node
   * @param {?external:AST} ancestor
   * @param {string[]} path
   * @param {Integer} fromPathIndex
   * @returns {boolean}
   */
  function inPath(node, ancestor, path, fromPathIndex) {
    var current = ancestor;
    for (var i = fromPathIndex; i < path.length; ++i) {
      if (current == null) {
        return false;
      }
      var field = current[path[i]];
      if (Array.isArray(field)) {
        for (var k = 0; k < field.length; ++k) {
          if (inPath(node, field[k], path, i + 1)) {
            return true;
          }
        }
        return false;
      }
      current = field;
    }
    return node === current;
  }

  /**
   * A generated matcher function for a selector.
   * @callback SelectorMatcher
   * @param {?SelectorAST} selector
   * @param {external:AST[]} [ancestry=[]]
   * @param {ESQueryOptions} [options]
   * @returns {void}
  */

  /**
   * A WeakMap for holding cached matcher functions for selectors.
   * @type {WeakMap<SelectorAST, SelectorMatcher>}
  */
  var MATCHER_CACHE = typeof WeakMap === 'function' ? new WeakMap() : null;

  /**
   * Look up a matcher function for `selector` in the cache.
   * If it does not exist, generate it with `generateMatcher` and add it to the cache.
   * In engines without WeakMap, the caching is skipped and matchers are generated with every call.
   * @param {?SelectorAST} selector
   * @returns {SelectorMatcher}
   */
  function getMatcher(selector) {
    if (selector == null) {
      return function () {
        return true;
      };
    }
    if (MATCHER_CACHE != null) {
      var matcher = MATCHER_CACHE.get(selector);
      if (matcher != null) {
        return matcher;
      }
      matcher = generateMatcher(selector);
      MATCHER_CACHE.set(selector, matcher);
      return matcher;
    }
    return generateMatcher(selector);
  }

  /**
   * Create a matcher function for `selector`,
   * @param {?SelectorAST} selector
   * @returns {SelectorMatcher}
   */
  function generateMatcher(selector) {
    switch (selector.type) {
      case 'wildcard':
        return function () {
          return true;
        };
      case 'identifier':
        {
          var value = selector.value.toLowerCase();
          return function (node, ancestry, options) {
            var nodeTypeKey = options && options.nodeTypeKey || 'type';
            return value === node[nodeTypeKey].toLowerCase();
          };
        }
      case 'exactNode':
        return function (node, ancestry) {
          return ancestry.length === 0;
        };
      case 'field':
        {
          var path = selector.name.split('.');
          return function (node, ancestry) {
            var ancestor = ancestry[path.length - 1];
            return inPath(node, ancestor, path, 0);
          };
        }
      case 'matches':
        {
          var matchers = selector.selectors.map(getMatcher);
          return function (node, ancestry, options) {
            for (var i = 0; i < matchers.length; ++i) {
              if (matchers[i](node, ancestry, options)) {
                return true;
              }
            }
            return false;
          };
        }
      case 'compound':
        {
          var _matchers = selector.selectors.map(getMatcher);
          return function (node, ancestry, options) {
            for (var i = 0; i < _matchers.length; ++i) {
              if (!_matchers[i](node, ancestry, options)) {
                return false;
              }
            }
            return true;
          };
        }
      case 'not':
        {
          var _matchers2 = selector.selectors.map(getMatcher);
          return function (node, ancestry, options) {
            for (var i = 0; i < _matchers2.length; ++i) {
              if (_matchers2[i](node, ancestry, options)) {
                return false;
              }
            }
            return true;
          };
        }
      case 'has':
        {
          var _matchers3 = selector.selectors.map(getMatcher);
          return function (node, ancestry, options) {
            var result = false;
            var a = [];
            estraverse.traverse(node, {
              enter: function enter(node, parent) {
                if (parent != null) {
                  a.unshift(parent);
                }
                for (var i = 0; i < _matchers3.length; ++i) {
                  if (_matchers3[i](node, a, options)) {
                    result = true;
                    this["break"]();
                    return;
                  }
                }
              },
              leave: function leave() {
                a.shift();
              },
              keys: options && options.visitorKeys,
              fallback: options && options.fallback || 'iteration'
            });
            return result;
          };
        }
      case 'child':
        {
          var left = getMatcher(selector.left);
          var right = getMatcher(selector.right);
          return function (node, ancestry, options) {
            if (ancestry.length > 0 && right(node, ancestry, options)) {
              return left(ancestry[0], ancestry.slice(1), options);
            }
            return false;
          };
        }
      case 'descendant':
        {
          var _left = getMatcher(selector.left);
          var _right = getMatcher(selector.right);
          return function (node, ancestry, options) {
            if (_right(node, ancestry, options)) {
              for (var i = 0, l = ancestry.length; i < l; ++i) {
                if (_left(ancestry[i], ancestry.slice(i + 1), options)) {
                  return true;
                }
              }
            }
            return false;
          };
        }
      case 'attribute':
        {
          var _path = selector.name.split('.');
          switch (selector.operator) {
            case void 0:
              return function (node) {
                return getPath(node, _path) != null;
              };
            case '=':
              switch (selector.value.type) {
                case 'regexp':
                  return function (node) {
                    var p = getPath(node, _path);
                    return typeof p === 'string' && selector.value.value.test(p);
                  };
                case 'literal':
                  {
                    var literal = "".concat(selector.value.value);
                    return function (node) {
                      return literal === "".concat(getPath(node, _path));
                    };
                  }
                case 'type':
                  return function (node) {
                    return selector.value.value === _typeof(getPath(node, _path));
                  };
              }
              throw new Error("Unknown selector value type: ".concat(selector.value.type));
            case '!=':
              switch (selector.value.type) {
                case 'regexp':
                  return function (node) {
                    return !selector.value.value.test(getPath(node, _path));
                  };
                case 'literal':
                  {
                    var _literal = "".concat(selector.value.value);
                    return function (node) {
                      return _literal !== "".concat(getPath(node, _path));
                    };
                  }
                case 'type':
                  return function (node) {
                    return selector.value.value !== _typeof(getPath(node, _path));
                  };
              }
              throw new Error("Unknown selector value type: ".concat(selector.value.type));
            case '<=':
              return function (node) {
                return getPath(node, _path) <= selector.value.value;
              };
            case '<':
              return function (node) {
                return getPath(node, _path) < selector.value.value;
              };
            case '>':
              return function (node) {
                return getPath(node, _path) > selector.value.value;
              };
            case '>=':
              return function (node) {
                return getPath(node, _path) >= selector.value.value;
              };
          }
          throw new Error("Unknown operator: ".concat(selector.operator));
        }
      case 'sibling':
        {
          var _left2 = getMatcher(selector.left);
          var _right2 = getMatcher(selector.right);
          return function (node, ancestry, options) {
            return _right2(node, ancestry, options) && sibling(node, _left2, ancestry, LEFT_SIDE, options) || selector.left.subject && _left2(node, ancestry, options) && sibling(node, _right2, ancestry, RIGHT_SIDE, options);
          };
        }
      case 'adjacent':
        {
          var _left3 = getMatcher(selector.left);
          var _right3 = getMatcher(selector.right);
          return function (node, ancestry, options) {
            return _right3(node, ancestry, options) && adjacent(node, _left3, ancestry, LEFT_SIDE, options) || selector.right.subject && _left3(node, ancestry, options) && adjacent(node, _right3, ancestry, RIGHT_SIDE, options);
          };
        }
      case 'nth-child':
        {
          var nth = selector.index.value;
          var _right4 = getMatcher(selector.right);
          return function (node, ancestry, options) {
            return _right4(node, ancestry, options) && nthChild(node, ancestry, nth, options);
          };
        }
      case 'nth-last-child':
        {
          var _nth = -selector.index.value;
          var _right5 = getMatcher(selector.right);
          return function (node, ancestry, options) {
            return _right5(node, ancestry, options) && nthChild(node, ancestry, _nth, options);
          };
        }
      case 'class':
        {
          var name = selector.name.toLowerCase();
          return function (node, ancestry, options) {
            if (options && options.matchClass) {
              return options.matchClass(selector.name, node, ancestry);
            }
            if (options && options.nodeTypeKey) return false;
            switch (name) {
              case 'statement':
                if (node.type.slice(-9) === 'Statement') return true;
              // fallthrough: interface Declaration <: Statement { }
              case 'declaration':
                return node.type.slice(-11) === 'Declaration';
              case 'pattern':
                if (node.type.slice(-7) === 'Pattern') return true;
              // fallthrough: interface Expression <: Node, Pattern { }
              case 'expression':
                return node.type.slice(-10) === 'Expression' || node.type.slice(-7) === 'Literal' || node.type === 'Identifier' && (ancestry.length === 0 || ancestry[0].type !== 'MetaProperty') || node.type === 'MetaProperty';
              case 'function':
                return node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression';
            }
            throw new Error("Unknown class name: ".concat(selector.name));
          };
        }
    }
    throw new Error("Unknown selector type: ".concat(selector.type));
  }

  /**
   * @callback TraverseOptionFallback
   * @param {external:AST} node The given node.
   * @returns {string[]} An array of visitor keys for the given node.
   */

  /**
   * @callback ClassMatcher
   * @param {string} className The name of the class to match.
   * @param {external:AST} node The node to match against.
   * @param {Array<external:AST>} ancestry The ancestry of the node.
   * @returns {boolean} True if the node matches the class, false if not.
   */

  /**
   * @typedef {object} ESQueryOptions
   * @property {string} [nodeTypeKey="type"] By passing `nodeTypeKey`, we can allow other ASTs to use ESQuery.
   * @property { { [nodeType: string]: string[] } } [visitorKeys] By passing `visitorKeys` mapping, we can extend the properties of the nodes that traverse the node.
   * @property {TraverseOptionFallback} [fallback] By passing `fallback` option, we can control the properties of traversing nodes when encountering unknown nodes.
   * @property {ClassMatcher} [matchClass] By passing `matchClass` option, we can customize the interpretation of classes.
   */

  /**
   * Given a `node` and its ancestors, determine if `node` is matched
   * by `selector`.
   * @param {?external:AST} node
   * @param {?SelectorAST} selector
   * @param {external:AST[]} [ancestry=[]]
   * @param {ESQueryOptions} [options]
   * @throws {Error} Unknowns (operator, class name, selector type, or
   * selector value type)
   * @returns {boolean}
   */
  function matches(node, selector, ancestry, options) {
    if (!selector) {
      return true;
    }
    if (!node) {
      return false;
    }
    if (!ancestry) {
      ancestry = [];
    }
    return getMatcher(selector)(node, ancestry, options);
  }

  /**
   * Get visitor keys of a given node.
   * @param {external:AST} node The AST node to get keys.
   * @param {ESQueryOptions|undefined} options
   * @returns {string[]} Visitor keys of the node.
   */
  function getVisitorKeys(node, options) {
    var nodeTypeKey = options && options.nodeTypeKey || 'type';
    var nodeType = node[nodeTypeKey];
    if (options && options.visitorKeys && options.visitorKeys[nodeType]) {
      return options.visitorKeys[nodeType];
    }
    if (estraverse.VisitorKeys[nodeType]) {
      return estraverse.VisitorKeys[nodeType];
    }
    if (options && typeof options.fallback === 'function') {
      return options.fallback(node);
    }
    // 'iteration' fallback
    return Object.keys(node).filter(function (key) {
      return key !== nodeTypeKey;
    });
  }

  /**
   * Check whether the given value is an ASTNode or not.
   * @param {any} node The value to check.
   * @param {ESQueryOptions|undefined} options The options to use.
   * @returns {boolean} `true` if the value is an ASTNode.
   */
  function isNode(node, options) {
    var nodeTypeKey = options && options.nodeTypeKey || 'type';
    return node !== null && _typeof(node) === 'object' && typeof node[nodeTypeKey] === 'string';
  }

  /**
   * Determines if the given node has a sibling that matches the
   * given selector matcher.
   * @param {external:AST} node
   * @param {SelectorMatcher} matcher
   * @param {external:AST[]} ancestry
   * @param {Side} side
   * @param {ESQueryOptions|undefined} options
   * @returns {boolean}
   */
  function sibling(node, matcher, ancestry, side, options) {
    var _ancestry = _slicedToArray(ancestry, 1),
      parent = _ancestry[0];
    if (!parent) {
      return false;
    }
    var keys = getVisitorKeys(parent, options);
    for (var i = 0; i < keys.length; ++i) {
      var listProp = parent[keys[i]];
      if (Array.isArray(listProp)) {
        var startIndex = listProp.indexOf(node);
        if (startIndex < 0) {
          continue;
        }
        var lowerBound = void 0,
          upperBound = void 0;
        if (side === LEFT_SIDE) {
          lowerBound = 0;
          upperBound = startIndex;
        } else {
          lowerBound = startIndex + 1;
          upperBound = listProp.length;
        }
        for (var k = lowerBound; k < upperBound; ++k) {
          if (isNode(listProp[k], options) && matcher(listProp[k], ancestry, options)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  /**
   * Determines if the given node has an adjacent sibling that matches
   * the given selector matcher.
   * @param {external:AST} node
   * @param {SelectorMatcher} matcher
   * @param {external:AST[]} ancestry
   * @param {Side} side
   * @param {ESQueryOptions|undefined} options
   * @returns {boolean}
   */
  function adjacent(node, matcher, ancestry, side, options) {
    var _ancestry2 = _slicedToArray(ancestry, 1),
      parent = _ancestry2[0];
    if (!parent) {
      return false;
    }
    var keys = getVisitorKeys(parent, options);
    for (var i = 0; i < keys.length; ++i) {
      var listProp = parent[keys[i]];
      if (Array.isArray(listProp)) {
        var idx = listProp.indexOf(node);
        if (idx < 0) {
          continue;
        }
        if (side === LEFT_SIDE && idx > 0 && isNode(listProp[idx - 1], options) && matcher(listProp[idx - 1], ancestry, options)) {
          return true;
        }
        if (side === RIGHT_SIDE && idx < listProp.length - 1 && isNode(listProp[idx + 1], options) && matcher(listProp[idx + 1], ancestry, options)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Determines if the given node is the `nth` child.
   * If `nth` is negative then the position is counted
   * from the end of the list of children.
   * @param {external:AST} node
   * @param {external:AST[]} ancestry
   * @param {Integer} nth
   * @param {ESQueryOptions|undefined} options
   * @returns {boolean}
   */
  function nthChild(node, ancestry, nth, options) {
    if (nth === 0) {
      return false;
    }
    var _ancestry3 = _slicedToArray(ancestry, 1),
      parent = _ancestry3[0];
    if (!parent) {
      return false;
    }
    var keys = getVisitorKeys(parent, options);
    for (var i = 0; i < keys.length; ++i) {
      var listProp = parent[keys[i]];
      if (Array.isArray(listProp)) {
        var idx = nth < 0 ? listProp.length + nth : nth - 1;
        if (idx >= 0 && idx < listProp.length && listProp[idx] === node) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * For each selector node marked as a subject, find the portion of the
   * selector that the subject must match.
   * @param {SelectorAST} selector
   * @param {SelectorAST} [ancestor] Defaults to `selector`
   * @returns {SelectorAST[]}
   */
  function subjects(selector, ancestor) {
    if (selector == null || _typeof(selector) != 'object') {
      return [];
    }
    if (ancestor == null) {
      ancestor = selector;
    }
    var results = selector.subject ? [ancestor] : [];
    var keys = Object.keys(selector);
    for (var i = 0; i < keys.length; ++i) {
      var p = keys[i];
      var sel = selector[p];
      results.push.apply(results, _toConsumableArray(subjects(sel, p === 'left' ? sel : ancestor)));
    }
    return results;
  }

  /**
  * @callback TraverseVisitor
  * @param {?external:AST} node
  * @param {?external:AST} parent
  * @param {external:AST[]} ancestry
  */

  /**
   * From a JS AST and a selector AST, collect all JS AST nodes that
   * match the selector.
   * @param {external:AST} ast
   * @param {?SelectorAST} selector
   * @param {TraverseVisitor} visitor
   * @param {ESQueryOptions} [options]
   * @returns {external:AST[]}
   */
  function traverse(ast, selector, visitor, options) {
    if (!selector) {
      return;
    }
    var ancestry = [];
    var matcher = getMatcher(selector);
    var altSubjects = subjects(selector).map(getMatcher);
    estraverse.traverse(ast, {
      enter: function enter(node, parent) {
        if (parent != null) {
          ancestry.unshift(parent);
        }
        if (matcher(node, ancestry, options)) {
          if (altSubjects.length) {
            for (var i = 0, l = altSubjects.length; i < l; ++i) {
              if (altSubjects[i](node, ancestry, options)) {
                visitor(node, parent, ancestry);
              }
              for (var k = 0, m = ancestry.length; k < m; ++k) {
                var succeedingAncestry = ancestry.slice(k + 1);
                if (altSubjects[i](ancestry[k], succeedingAncestry, options)) {
                  visitor(ancestry[k], parent, succeedingAncestry);
                }
              }
            }
          } else {
            visitor(node, parent, ancestry);
          }
        }
      },
      leave: function leave() {
        ancestry.shift();
      },
      keys: options && options.visitorKeys,
      fallback: options && options.fallback || 'iteration'
    });
  }

  /**
   * From a JS AST and a selector AST, collect all JS AST nodes that
   * match the selector.
   * @param {external:AST} ast
   * @param {?SelectorAST} selector
   * @param {ESQueryOptions} [options]
   * @returns {external:AST[]}
   */
  function match(ast, selector, options) {
    var results = [];
    traverse(ast, selector, function (node) {
      results.push(node);
    }, options);
    return results;
  }

  /**
   * Parse a selector string and return its AST.
   * @param {string} selector
   * @returns {SelectorAST}
   */
  function parse(selector) {
    return parser.parse(selector);
  }

  /**
   * Query the code AST using the selector string.
   * @param {external:AST} ast
   * @param {string} selector
   * @param {ESQueryOptions} [options]
   * @returns {external:AST[]}
   */
  function query(ast, selector, options) {
    return match(ast, parse(selector), options);
  }
  query.parse = parse;
  query.match = match;
  query.traverse = traverse;
  query.matches = matches;
  query.query = query;

  return query;

})));
