'use strict';
const isCustomProp = require('./isCustomProp');

/** @type {(node: import('postcss').Declaration) => boolean} */
const important = (node) => node.important;
/** @type {(node: import('postcss').Declaration) => boolean} */
const unimportant = (node) => !node.important;

/* Cannot be combined with other values in shorthand 
  https://www.w3.org/TR/css-cascade-5/#shorthand */
const cssWideKeywords = ['inherit', 'initial', 'unset', 'revert'];
/**
 * @type {(props: import('postcss').Declaration[], includeCustomProps?: boolean) => boolean}
 */
module.exports = (props, includeCustomProps = true) => {
  const uniqueProps = new Set(props.map((node) => node.value.toLowerCase()));

  if (uniqueProps.size > 1) {
    for (const unmergeable of cssWideKeywords) {
      if (uniqueProps.has(unmergeable)) {
        return false;
      }
    }
  }

  if (
    includeCustomProps &&
    props.some(isCustomProp) &&
    !props.every(isCustomProp)
  ) {
    return false;
  }

  return props.every(unimportant) || props.every(important);
};
