'use strict';
/**
 * @param {string | undefined} value
 * @return {string | undefined}
 */
function trimValue(value) {
  return value ? value.trim() : value;
}

/**
 * @param {{nodes: import('postcss').Node[]}} node
 * @return {boolean}
 */
function empty(node) {
  return !node.nodes.filter((child) => child.type !== 'comment').length;
}

/**
 * @param {import('postcss').AnyNode} nodeA
 * @param {import('postcss').AnyNode} nodeB
 * @return {boolean}
 */
function equals(nodeA, nodeB) {
  const a = /** @type {any} */ (nodeA);
  const b = /** @type {any} */ (nodeB);
  if (a.type !== b.type) {
    return false;
  }

  if (a.important !== b.important) {
    return false;
  }

  if ((a.raws && !b.raws) || (!a.raws && b.raws)) {
    return false;
  }

  switch (a.type) {
    case 'rule':
      if (a.selector !== b.selector) {
        return false;
      }
      break;
    case 'atrule':
      if (a.name !== b.name || a.params !== b.params) {
        return false;
      }

      if (a.raws && trimValue(a.raws.before) !== trimValue(b.raws.before)) {
        return false;
      }

      if (
        a.raws &&
        trimValue(a.raws.afterName) !== trimValue(b.raws.afterName)
      ) {
        return false;
      }
      break;
    case 'decl':
      if (a.prop !== b.prop || a.value !== b.value) {
        return false;
      }

      if (a.raws && trimValue(a.raws.before) !== trimValue(b.raws.before)) {
        return false;
      }
      break;
  }

  if (a.nodes) {
    if (a.nodes.length !== b.nodes.length) {
      return false;
    }

    for (let i = 0; i < a.nodes.length; i++) {
      if (!equals(a.nodes[i], b.nodes[i])) {
        return false;
      }
    }
  }
  return true;
}

/**
 * @param {import('postcss').Rule} last
 * @param {import('postcss').AnyNode[]} nodes
 * @return {void}
 */
function dedupeRule(last, nodes) {
  let index = nodes.indexOf(last) - 1;
  while (index >= 0) {
    const node = nodes[index--];
    if (node && node.type === 'rule' && node.selector === last.selector) {
      last.each((child) => {
        if (child.type === 'decl') {
          dedupeNode(child, node.nodes);
        }
      });

      if (empty(node)) {
        node.remove();
      }
    }
  }
}

/**
 * @param {import('postcss').AtRule | import('postcss').Declaration} last
 * @param {import('postcss').AnyNode[]} nodes
 * @return {void}
 */
function dedupeNode(last, nodes) {
  let index = nodes.includes(last) ? nodes.indexOf(last) - 1 : nodes.length - 1;

  while (index >= 0) {
    const node = nodes[index--];
    if (node && equals(node, last)) {
      node.remove();
    }
  }
}

/**
 * @param {import('postcss').AnyNode} root
 * @return {void}
 */
function dedupe(root) {
  const { nodes } =
    /** @type {import('postcss').Container<import('postcss').ChildNode>} */ (
      root
    );

  if (!nodes) {
    return;
  }

  let index = nodes.length - 1;
  while (index >= 0) {
    let last = nodes[index--];
    if (!last || !last.parent) {
      continue;
    }
    dedupe(last);
    if (last.type === 'rule') {
      dedupeRule(last, nodes);
    } else if (last.type === 'atrule' || last.type === 'decl') {
      dedupeNode(last, nodes);
    }
  }
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-discard-duplicates',
    OnceExit(css) {
      dedupe(css);
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
