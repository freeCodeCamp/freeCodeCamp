'use strict';
const stylehacks = require('stylehacks');
const canMerge = require('../canMerge.js');
const getDecls = require('../getDecls.js');
const minifyTrbl = require('../minifyTrbl.js');
const parseTrbl = require('../parseTrbl.js');
const insertCloned = require('../insertCloned.js');
const mergeRules = require('../mergeRules.js');
const mergeValues = require('../mergeValues.js');
const trbl = require('../trbl.js');
const isCustomProp = require('../isCustomProp.js');
const canExplode = require('../canExplode.js');

/**
 * @param {string} prop
 * @return {{explode: (rule: import('postcss').Rule) => void, merge: (rule: import('postcss').Rule) => void}}
 */
module.exports = (prop) => {
  const properties = trbl.map((direction) => `${prop}-${direction}`);
  /** @type {(rule: import('postcss').Rule) => void} */
  const cleanup = (rule) => {
    let decls = getDecls(rule, [prop].concat(properties));

    while (decls.length) {
      const lastNode = decls[decls.length - 1];

      // remove properties of lower precedence
      const lesser = decls.filter(
        (node) =>
          !stylehacks.detect(lastNode) &&
          !stylehacks.detect(node) &&
          node !== lastNode &&
          node.important === lastNode.important &&
          lastNode.prop === prop &&
          node.prop !== lastNode.prop
      );

      for (const node of lesser) {
        node.remove();
      }
      decls = decls.filter((node) => !lesser.includes(node));

      // get duplicate properties
      let duplicates = decls.filter(
        (node) =>
          !stylehacks.detect(lastNode) &&
          !stylehacks.detect(node) &&
          node !== lastNode &&
          node.important === lastNode.important &&
          node.prop === lastNode.prop &&
          !(!isCustomProp(node) && isCustomProp(lastNode))
      );

      for (const node of duplicates) {
        node.remove();
      }
      decls = decls.filter(
        (node) => node !== lastNode && !duplicates.includes(node)
      );
    }
  };

  const processor = {
    /** @type {(rule: import('postcss').Rule) => void} */
    explode: (rule) => {
      rule.walkDecls(new RegExp('^' + prop + '$', 'i'), (decl) => {
        if (!canExplode(decl)) {
          return;
        }

        if (stylehacks.detect(decl)) {
          return;
        }

        const values = parseTrbl(decl.value);

        trbl.forEach((direction, index) => {
          insertCloned(
            /** @type {import('postcss').Rule} */ (decl.parent),
            decl,
            {
              prop: properties[index],
              value: values[index],
            }
          );
        });

        decl.remove();
      });
    },
    /** @type {(rule: import('postcss').Rule) => void} */
    merge: (rule) => {
      mergeRules(rule, properties, (rules, lastNode) => {
        if (canMerge(rules) && !rules.some(stylehacks.detect)) {
          insertCloned(
            /** @type {import('postcss').Rule} */ (lastNode.parent),
            lastNode,
            {
              prop,
              value: minifyTrbl(mergeValues(...rules)),
            }
          );
          for (const node of rules) {
            node.remove();
          }

          return true;
        }
        return false;
      });

      cleanup(rule);
    },
  };

  return processor;
};
