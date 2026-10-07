'use strict';
const browserslist = require('browserslist');
const { sameParent } = require('cssnano-utils');
const {
  ensureCompatibility,
  sameVendor,
  noVendor,
} = require('./lib/ensureCompatibility');

/**
 * @param {import('postcss').Declaration} a
 * @param {import('postcss').Declaration} b
 * @return {boolean}
 */
function declarationIsEqual(a, b) {
  return (
    a.important === b.important && a.prop === b.prop && a.value === b.value
  );
}

/**
 * @param {import('postcss').Declaration[]} array
 * @param {import('postcss').Declaration} decl
 * @return {number}
 */
function indexOfDeclaration(array, decl) {
  return array.findIndex((d) => declarationIsEqual(d, decl));
}

/**
 * Returns filtered array of matched or unmatched declarations
 * @param {import('postcss').Declaration[]} a
 * @param {import('postcss').Declaration[]} b
 * @param {boolean} [not=false]
 * @return {import('postcss').Declaration[]}
 */
function intersect(a, b, not) {
  return a.filter((c) => {
    const index = indexOfDeclaration(b, c) !== -1;
    return not ? !index : index;
  });
}

/**
 * @param {import('postcss').Declaration[]} a
 * @param {import('postcss').Declaration[]} b
 * @return {boolean}
 */
function sameDeclarationsAndOrder(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((d, index) => declarationIsEqual(d, b[index]));
}

/**
 * @param {import('postcss').Rule} ruleA
 * @param {import('postcss').Rule} ruleB
 * @param {string[]=} browsers
 * @param {Map<string, boolean>=} compatibilityCache
 * @return {boolean}
 */
function canMerge(ruleA, ruleB, browsers, compatibilityCache) {
  const a = ruleA.selectors;
  const b = ruleB.selectors;

  const selectors = a.concat(b);

  if (!ensureCompatibility(selectors, browsers, compatibilityCache)) {
    return false;
  }

  const parent = sameParent(
    /** @type {any} */ (ruleA),
    /** @type {any} */ (ruleB)
  );
  if (
    parent &&
    ruleA.parent &&
    ruleA.parent.type === 'atrule' &&
    /** @type {import('postcss').AtRule} */ (ruleA.parent).name.includes(
      'keyframes'
    )
  ) {
    return false;
  }
  return parent && (selectors.every(noVendor) || sameVendor(a, b));
}

/**
 * @param {import('postcss').ChildNode} node
 * @return {node is import('postcss').Declaration}
 */
function isDeclaration(node) {
  return node.type === 'decl';
}
/**
 * @param {import('postcss').Rule} rule
 * @return {import('postcss').Declaration[]}
 */
function getDecls(rule) {
  return rule.nodes.filter(isDeclaration);
}

/** @type {(...rules: import('postcss').Rule[]) => string} */
const joinSelectors = (...rules) => rules.map((s) => s.selector).join();

/**
 * @param {...import('postcss').Rule} rules
 * @return {number}
 */
function ruleLength(...rules) {
  return rules.map((r) => (r.nodes.length ? String(r) : '')).join('').length;
}

/**
 * @param {string} prop
 * @return {{prefix: string?, base:string?, rest:string[]}}
 */
function splitProp(prop) {
  // Treat vendor prefixed properties as if they were unprefixed;
  // moving them when combined with non-prefixed properties can
  // cause issues. e.g. moving -webkit-background-clip when there
  // is a background shorthand definition.

  const parts = prop.split('-');
  if (prop[0] !== '-') {
    return {
      prefix: '',
      base: parts[0],
      rest: parts.slice(1),
    };
  }
  // Don't split css variables
  if (prop[1] === '-') {
    return {
      prefix: null,
      base: null,
      rest: [prop],
    };
  }
  // Found prefix
  return {
    prefix: parts[1],
    base: parts[2],
    rest: parts.slice(3),
  };
}

/**
 * @param {string} propA
 * @param {string} propB
 * @return {boolean}
 */
function isConflictingProp(propA, propB) {
  if (propA === propB) {
    // Same specificity
    return true;
  }
  const a = splitProp(propA);
  const b = splitProp(propB);
  // Don't resort css variables
  if (!a.base && !b.base) {
    return true;
  }

  // Different base and none is `place`;
  if (a.base !== b.base && a.base !== 'place' && b.base !== 'place') {
    return false;
  }

  // Conflict if rest-count mismatches
  if (a.rest.length !== b.rest.length) {
    return true;
  }

  /* Do not merge conflicting border properties */
  if (a.base === 'border') {
    const allRestProps = new Set([...a.rest, ...b.rest]);
    if (
      allRestProps.has('image') ||
      allRestProps.has('width') ||
      allRestProps.has('color') ||
      allRestProps.has('style')
    ) {
      return true;
    }
  }
  // Conflict if rest parameters are equal (same but unprefixed)
  return a.rest.every((s, index) => b.rest[index] === s);
}

/**
 * @param {import('postcss').Rule} first
 * @param {import('postcss').Rule} second
 * @return {boolean} merged
 */
function mergeParents(first, second) {
  // Null check for detached rules
  if (!first.parent || !second.parent) {
    return false;
  }

  // Check if parents share node
  if (first.parent === second.parent) {
    return false;
  }

  // sameParent() already called by canMerge()

  second.remove();
  first.parent.append(second);
  return true;
}

/**
 * @param {import('postcss').Rule} first
 * @param {import('postcss').Rule} second
 * @return {import('postcss').Rule} mergedRule
 */
function partialMerge(first, second) {
  let intersection = intersect(getDecls(first), getDecls(second));
  if (intersection.length === 0) {
    return second;
  }
  let nextRule = second.next();
  if (!nextRule) {
    // Grab next cousin
    /** @type {any} */
    const parentSibling =
      /** @type {import('postcss').Container<import('postcss').ChildNode>} */ (
        second.parent
      ).next();
    nextRule = parentSibling && parentSibling.nodes && parentSibling.nodes[0];
  }
  if (nextRule && nextRule.type === 'rule' && canMerge(second, nextRule)) {
    let nextIntersection = intersect(getDecls(second), getDecls(nextRule));
    if (nextIntersection.length > intersection.length) {
      mergeParents(second, nextRule);
      first = second;
      second = nextRule;
      intersection = nextIntersection;
    }
  }

  const firstDecls = getDecls(first);
  // Filter out intersections with later conflicts in First
  intersection = intersection.filter((decl, intersectIndex) => {
    const indexOfDecl = indexOfDeclaration(firstDecls, decl);
    const nextConflictInFirst = firstDecls
      .slice(indexOfDecl + 1)
      .filter((d) => isConflictingProp(d.prop, decl.prop));
    if (nextConflictInFirst.length === 0) {
      return true;
    }
    const nextConflictInIntersection = intersection
      .slice(intersectIndex + 1)
      .filter((d) => isConflictingProp(d.prop, decl.prop));
    if (nextConflictInFirst.length !== nextConflictInIntersection.length) {
      return false;
    }
    return nextConflictInFirst.every((d, index) =>
      declarationIsEqual(d, nextConflictInIntersection[index])
    );
  });

  // Filter out intersections with previous conflicts in Second
  const secondDecls = getDecls(second);
  intersection = intersection.filter((decl) => {
    const nextConflictIndex = secondDecls.findIndex((d) =>
      isConflictingProp(d.prop, decl.prop)
    );
    if (nextConflictIndex === -1) {
      return false;
    }
    if (!declarationIsEqual(secondDecls[nextConflictIndex], decl)) {
      return false;
    }
    if (
      decl.prop.toLowerCase() !== 'direction' &&
      decl.prop.toLowerCase() !== 'unicode-bidi' &&
      secondDecls.some(
        (declaration) => declaration.prop.toLowerCase() === 'all'
      )
    ) {
      return false;
    }
    secondDecls.splice(nextConflictIndex, 1);
    return true;
  });

  if (intersection.length === 0) {
    // Nothing to merge
    return second;
  }

  const receivingBlock = second.clone();
  receivingBlock.selector = joinSelectors(first, second);
  receivingBlock.nodes = [];

  /** @type {import('postcss').Container<import('postcss').ChildNode>} */ (
    second.parent
  ).insertBefore(second, receivingBlock);

  const firstClone = first.clone();
  const secondClone = second.clone();

  /**
   * @param {function(import('postcss').Declaration):void} callback
   * @this {import('postcss').Rule}
   * @return {function(import('postcss').Declaration)}
   */
  function moveDecl(callback) {
    return (decl) => {
      if (indexOfDeclaration(intersection, decl) !== -1) {
        callback.call(this, decl);
      }
    };
  }
  firstClone.walkDecls(
    moveDecl((decl) => {
      decl.remove();
      receivingBlock.append(decl);
    })
  );
  secondClone.walkDecls(moveDecl((decl) => decl.remove()));
  const merged = ruleLength(firstClone, receivingBlock, secondClone);
  const original = ruleLength(first, second);
  if (merged < original) {
    first.replaceWith(firstClone);
    second.replaceWith(secondClone);
    [firstClone, receivingBlock, secondClone].forEach((r) => {
      if (r.nodes.length === 0) {
        r.remove();
      }
    });
    if (!secondClone.parent) {
      return receivingBlock;
    }
    return secondClone;
  } else {
    receivingBlock.remove();
    return second;
  }
}

/**
 * @param {string[]} browsers
 * @param {Map<string, boolean>} compatibilityCache
 * @return {function(import('postcss').Rule)}
 */
function selectorMerger(browsers, compatibilityCache) {
  /** @type {import('postcss').Rule | null} */
  let cache = null;
  return function (rule) {
    // Prime the cache with the first rule, or alternately ensure that it is
    // safe to merge both declarations before continuing
    if (!cache || !canMerge(rule, cache, browsers, compatibilityCache)) {
      cache = rule;
      return;
    }
    // Ensure that we don't deduplicate the same rule; this is sometimes
    // caused by a partial merge
    if (cache === rule) {
      cache = rule;
      return;
    }

    // Parents merge: check if the rules have same parents, but not same parent nodes
    mergeParents(cache, rule);

    // Merge when declarations are exactly equal
    // e.g. h1 { color: red } h2 { color: red }
    if (sameDeclarationsAndOrder(getDecls(rule), getDecls(cache))) {
      rule.selector = joinSelectors(cache, rule);
      cache.remove();
      cache = rule;
      return;
    }
    // Merge when both selectors are exactly equal
    // e.g. a { color: blue } a { font-weight: bold }
    if (cache.selector === rule.selector) {
      const cached = getDecls(cache);
      rule.walk((node) => {
        if (node.type === 'decl' && indexOfDeclaration(cached, node) !== -1) {
          node.remove();
          return;
        }
        /** @type {import('postcss').Rule} */ (cache).append(node);
      });
      rule.remove();
      return;
    }
    // Partial merge: check if the rule contains a subset of the last; if
    // so create a joined selector with the subset, if smaller.
    cache = partialMerge(cache, rule);
  };
}
/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-merge-rules',

    prepare(result) {
      /** @type {typeof result.opts & browserslist.Options} */
      const resultOpts = result.opts || {};
      const browsers = browserslist(null, {
        stats: resultOpts.stats,
        path: __dirname,
        env: resultOpts.env,
      });

      const compatibilityCache = new Map();
      return {
        OnceExit(css) {
          css.walkRules(selectorMerger(browsers, compatibilityCache));
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
