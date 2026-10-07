'use strict';

exports.name = 'addClassesToSVGElement';
exports.type = 'visitor';
exports.active = false;
exports.description = 'adds classnames to an outer <svg> element';

var ENOCLS = `Error in plugin "addClassesToSVGElement": absent parameters.
It should have a list of classes in "classNames" or one "className".
Config example:

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      className: "mySvg"
    }
  }
]

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg", "size-big"]
    }
  }
]
`;

/**
 * Add classnames to an outer <svg> element. Example config:
 *
 * plugins: [
 *   {
 *     name: "addClassesToSVGElement",
 *     params: {
 *       className: "mySvg"
 *     }
 *   }
 * ]
 *
 * plugins: [
 *   {
 *     name: "addClassesToSVGElement",
 *     params: {
 *       classNames: ["mySvg", "size-big"]
 *     }
 *   }
 * ]
 *
 * @author April Arcus
 *
 * @type {import('../lib/types').Plugin<{
 *   className?: string,
 *   classNames?: Array<string>
 * }>}
 */
exports.fn = (root, params) => {
  if (
    !(Array.isArray(params.classNames) && params.classNames.some(String)) &&
    !params.className
  ) {
    console.error(ENOCLS);
    return null;
  }
  const classNames = params.classNames || [params.className];
  return {
    element: {
      enter: (node, parentNode) => {
        if (node.name === 'svg' && parentNode.type === 'root') {
          const classList = new Set(
            node.attributes.class == null
              ? null
              : node.attributes.class.split(' ')
          );
          for (const className of classNames) {
            if (className != null) {
              classList.add(className);
            }
          }
          node.attributes.class = Array.from(classList).join(' ');
        }
      },
    },
  };
};
