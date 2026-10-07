import esquery from 'esquery';

import {
  visitorKeys as jsdocTypePrattParserVisitorKeys
} from 'jsdoc-type-pratt-parser';

import {
  commentParserToESTree, jsdocVisitorKeys
} from './commentParserToESTree.js';

/**
 * @param {{[name: string]: any}} settings
 * @returns {import('.').CommentHandler}
 */
const commentHandler = (settings) => {
  /**
   * @type {import('.').CommentHandler}
   */
  return (commentSelector, jsdoc) => {
    const {mode} = settings;

    const selector = esquery.parse(commentSelector);

    const ast = commentParserToESTree(jsdoc, mode);

    const _ast = /** @type {unknown} */ (ast);

    return esquery.matches(/** @type {import('estree').Node} */ (
      _ast
    ), selector, undefined, {
      visitorKeys: {
        ...jsdocTypePrattParserVisitorKeys,
        ...jsdocVisitorKeys
      }
    });
  };
};

export {commentHandler};
