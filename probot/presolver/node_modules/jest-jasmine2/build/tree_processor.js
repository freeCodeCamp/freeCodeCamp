'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = treeProcessor;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Try getting the real promise object from the context, if available. Someone
// could have overridden it in a test. Async functions return it implicitly.
// eslint-disable-next-line no-unused-vars
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const Promise = global[Symbol.for('jest-native-promise')] || global.Promise;

function treeProcessor(options) {
  const nodeComplete = options.nodeComplete,
        nodeStart = options.nodeStart,
        queueRunnerFactory = options.queueRunnerFactory,
        runnableIds = options.runnableIds,
        tree = options.tree;


  function isEnabled(node, parentEnabled) {
    return parentEnabled || runnableIds.indexOf(node.id) !== -1;
  }

  return queueRunnerFactory({
    onException: error => tree.onException(error),
    queueableFns: wrapChildren(tree, isEnabled(tree, false)),
    userContext: tree.sharedUserContext()
  });

  function executeNode(node, parentEnabled) {
    const enabled = isEnabled(node, parentEnabled);
    if (!node.children) {
      return {
        fn(done) {
          node.execute(done, enabled);
        }
      };
    }
    return {
      fn(done) {
        return _asyncToGenerator(function* () {
          nodeStart(node);
          yield queueRunnerFactory({
            onException: function (error) {
              return node.onException(error);
            },
            queueableFns: wrapChildren(node, enabled),
            userContext: node.sharedUserContext()
          });
          nodeComplete(node);
          done();
        })();
      }
    };
  }

  function wrapChildren(node, enabled) {
    if (!node.children) {
      throw new Error('`node.children` is not defined.');
    }
    const children = node.children.map(child => executeNode(child, enabled));
    return node.beforeAllFns.concat(children).concat(node.afterAllFns);
  }
}