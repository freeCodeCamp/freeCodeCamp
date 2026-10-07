'use strict';
/** @type {(rule: import('postcss').AnyNode[], prop: string) => import('postcss').Declaration} */
module.exports = (rule, prop) => {
  return /** @type {import('postcss').Declaration} */ (
    rule.filter((n) => n.type === 'decl' && n.prop.toLowerCase() === prop).pop()
  );
};
