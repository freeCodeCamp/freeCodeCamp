/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const Profiler = require('../../core/GraphQLCompilerProfiler');

const babylon = require('@babel/parser');
const util = require('util');

import type {GraphQLTag} from '../RelayLanguagePluginInterface';

// Attempt to be as inclusive as possible of source text.
const BABYLON_OPTIONS = {
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  sourceType: 'module',
  plugins: [
    'asyncGenerators',
    'classProperties',
    ['decorators', {decoratorsBeforeExport: true}],
    'doExpressions',
    'dynamicImport',
    'exportExtensions',
    ['flow', {enums: true}],
    'functionBind',
    'functionSent',
    'jsx',
    'nullishCoalescingOperator',
    'objectRestSpread',
    'optionalChaining',
    'optionalCatchBinding',
  ],
  strictMode: false,
};

function find(text: string): $ReadOnlyArray<GraphQLTag> {
  const result: Array<GraphQLTag> = [];
  // $FlowFixMe Discovered when typing babel/parser
  const ast = babylon.parse(text, BABYLON_OPTIONS);

  const visitors = {
    TaggedTemplateExpression: node => {
      if (isGraphQLTag(node.tag)) {
        result.push({
          keyName: null,
          template: node.quasi.quasis[0].value.raw,
          sourceLocationOffset: getSourceLocationOffset(node.quasi),
        });
      }
    },
  };
  visit(ast, visitors);
  return result;
}

const IGNORED_KEYS = {
  comments: true,
  end: true,
  leadingComments: true,
  loc: true,
  name: true,
  start: true,
  trailingComments: true,
  type: true,
};

function isGraphQLTag(tag): boolean {
  return tag.type === 'Identifier' && tag.name === 'graphql';
}

function getTemplateNode(quasi) {
  const quasis = quasi.quasis;
  invariant(
    quasis && quasis.length === 1,
    'FindGraphQLTags: Substitutions are not allowed in graphql tags.',
  );
  return quasis[0];
}

function getSourceLocationOffset(quasi) {
  const loc = getTemplateNode(quasi).loc.start;
  return {
    line: loc.line,
    column: loc.column + 1, // babylon is 0-indexed, graphql expects 1-indexed
  };
}

function invariant(condition, msg, ...args) {
  if (!condition) {
    throw new Error(util.format(msg, ...args));
  }
}

function visit(node, visitors) {
  // $FlowFixMe Discovered when typing babel
  const fn = visitors[node.type];
  if (fn != null) {
    fn(node);
    return;
  }
  traverse(node, visitors);
}

function traverse(node, visitors) {
  for (const key in node) {
    if (IGNORED_KEYS[key]) {
      continue;
    }
    const prop = node[key];
    if (prop && typeof prop === 'object' && typeof prop.type === 'string') {
      visit(prop, visitors);
    } else if (Array.isArray(prop)) {
      prop.forEach(item => {
        if (item && typeof item === 'object' && typeof item.type === 'string') {
          visit(item, visitors);
        }
      });
    }
  }
}

module.exports = {
  find: (Profiler.instrument(find, 'FindGraphQLTags.find'): (
    text: string,
  ) => $ReadOnlyArray<GraphQLTag>),
};
