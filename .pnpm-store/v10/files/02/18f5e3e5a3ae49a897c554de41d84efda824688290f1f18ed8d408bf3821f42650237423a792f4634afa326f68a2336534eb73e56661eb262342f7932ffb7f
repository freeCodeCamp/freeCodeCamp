"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperRemapAsyncToGenerator = require("@babel/helper-remap-async-to-generator");
var _core = require("@babel/core");
var _forAwait = require("./for-await.js");
var _helperEnvironmentVisitor = require("@babel/helper-environment-visitor");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  const yieldStarVisitor = _core.traverse.visitors.merge([{
    ArrowFunctionExpression(path) {
      path.skip();
    },
    YieldExpression({
      node
    }, state) {
      if (!node.delegate) return;
      const asyncIter = _core.types.callExpression(state.addHelper("asyncIterator"), [node.argument]);
      node.argument = _core.types.callExpression(state.addHelper("asyncGeneratorDelegate"), [asyncIter, state.addHelper("awaitAsyncGenerator")]);
    }
  }, _helperEnvironmentVisitor.default]);
  const forAwaitVisitor = _core.traverse.visitors.merge([{
    ArrowFunctionExpression(path) {
      path.skip();
    },
    ForOfStatement(path, {
      file
    }) {
      const {
        node
      } = path;
      if (!node.await) return;
      const build = (0, _forAwait.default)(path, {
        getAsyncIterator: file.addHelper("asyncIterator")
      });
      const {
        declar,
        loop
      } = build;
      const block = loop.body;
      path.ensureBlock();
      if (declar) {
        block.body.push(declar);
        if (path.node.body.body.length) {
          block.body.push(_core.types.blockStatement(path.node.body.body));
        }
      } else {
        block.body.push(...path.node.body.body);
      }
      _core.types.inherits(loop, node);
      _core.types.inherits(loop.body, node.body);
      const p = build.replaceParent ? path.parentPath : path;
      p.replaceWithMultiple(build.node);
      p.scope.parent.crawl();
    }
  }, _helperEnvironmentVisitor.default]);
  const visitor = {
    Function(path, state) {
      if (!path.node.async) return;
      path.traverse(forAwaitVisitor, state);
      if (!path.node.generator) return;
      path.traverse(yieldStarVisitor, state);
      (0, _helperRemapAsyncToGenerator.default)(path, {
        wrapAsync: state.addHelper("wrapAsyncGenerator"),
        wrapAwait: state.addHelper("awaitAsyncGenerator")
      });
    }
  };
  return {
    name: "transform-async-generator-functions",
    inherits: require("@babel/plugin-syntax-async-generators").default,
    visitor: {
      Program(path, state) {
        path.traverse(visitor, state);
      }
    }
  };
});

//# sourceMappingURL=index.js.map
