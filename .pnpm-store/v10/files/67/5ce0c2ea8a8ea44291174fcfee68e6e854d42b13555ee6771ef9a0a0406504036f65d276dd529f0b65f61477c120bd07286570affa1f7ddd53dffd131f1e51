'use strict';

exports.__esModule = true;

/** @type {import('./visit').default} */
exports.default = function visit(node, keys, visitorSpec) {
  if (!node || !keys) {
    return;
  }
  const type = node.type;
  const visitor = visitorSpec[type];
  if (typeof visitor === 'function') {
    visitor(node);
  }
  const childFields = keys[type];
  if (!childFields) {
    return;
  }
  childFields.forEach((fieldName) => {
    // @ts-expect-error TS sucks with concat
    [].concat(node[fieldName]).forEach((item) => {
      visit(item, keys, visitorSpec);
    });
  });

  const exit = visitorSpec[`${type}:Exit`];
  if (typeof exit === 'function') {
    exit(node);
  }
};
