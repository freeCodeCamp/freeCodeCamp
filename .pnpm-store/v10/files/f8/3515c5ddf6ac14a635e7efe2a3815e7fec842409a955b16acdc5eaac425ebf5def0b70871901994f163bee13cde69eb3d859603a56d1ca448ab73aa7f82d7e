'use strict';
/** @type {(rule: import('postcss').Declaration[], ...props: string[]) => boolean} */
module.exports = (rule, ...props) => {
  return props.every((p) =>
    rule.some((node) => node.prop && node.prop.toLowerCase().includes(p))
  );
};
