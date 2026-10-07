'use strict';

exports.name = 'removeAttrs';
exports.type = 'visitor';
exports.active = false;
exports.description = 'removes specified attributes';

const DEFAULT_SEPARATOR = ':';
const ENOATTRS = `Warning: The plugin "removeAttrs" requires the "attrs" parameter.
It should have a pattern to remove, otherwise the plugin is a noop.
Config example:

plugins: [
  {
    name: "removeAttrs",
    params: {
      attrs: "(fill|stroke)"
    }
  }
]
`;

/**
 * Remove attributes
 *
 * @example elemSeparator
 *   format: string
 *
 * @example preserveCurrentColor
 *   format: boolean
 *
 * @example attrs:
 *
 *   format: [ element* : attribute* : value* ]
 *
 *   element   : regexp (wrapped into ^...$), single * or omitted > all elements (must be present when value is used)
 *   attribute : regexp (wrapped into ^...$)
 *   value     : regexp (wrapped into ^...$), single * or omitted > all values
 *
 *   examples:
 *
 *     > basic: remove fill attribute
 *     ---
 *     removeAttrs:
 *       attrs: 'fill'
 *
 *     > remove fill attribute on path element
 *     ---
 *       attrs: 'path:fill'
 *
 *     > remove fill attribute on path element where value is none
 *     ---
 *       attrs: 'path:fill:none'
 *
 *
 *     > remove all fill and stroke attribute
 *     ---
 *       attrs:
 *         - 'fill'
 *         - 'stroke'
 *
 *     [is same as]
 *
 *       attrs: '(fill|stroke)'
 *
 *     [is same as]
 *
 *       attrs: '*:(fill|stroke)'
 *
 *     [is same as]
 *
 *       attrs: '.*:(fill|stroke)'
 *
 *     [is same as]
 *
 *       attrs: '.*:(fill|stroke):.*'
 *
 *
 *     > remove all stroke related attributes
 *     ----
 *     attrs: 'stroke.*'
 *
 *
 * @author Benny Schudel
 *
 * @type {import('../lib/types').Plugin<{
 *   elemSeparator?: string,
 *   preserveCurrentColor?: boolean,
 *   attrs: string | Array<string>
 * }>}
 */
exports.fn = (root, params) => {
  if (typeof params.attrs == 'undefined') {
    console.warn(ENOATTRS);
    return null;
  }

  const elemSeparator =
    typeof params.elemSeparator == 'string'
      ? params.elemSeparator
      : DEFAULT_SEPARATOR;
  const preserveCurrentColor =
    typeof params.preserveCurrentColor == 'boolean'
      ? params.preserveCurrentColor
      : false;
  const attrs = Array.isArray(params.attrs) ? params.attrs : [params.attrs];

  return {
    element: {
      enter: (node) => {
        for (let pattern of attrs) {
          // if no element separators (:), assume it's attribute name, and apply to all elements *regardless of value*
          if (pattern.includes(elemSeparator) === false) {
            pattern = ['.*', elemSeparator, pattern, elemSeparator, '.*'].join(
              ''
            );
            // if only 1 separator, assume it's element and attribute name, and apply regardless of attribute value
          } else if (pattern.split(elemSeparator).length < 3) {
            pattern = [pattern, elemSeparator, '.*'].join('');
          }

          // create regexps for element, attribute name, and attribute value
          const list = pattern.split(elemSeparator).map((value) => {
            // adjust single * to match anything
            if (value === '*') {
              value = '.*';
            }
            return new RegExp(['^', value, '$'].join(''), 'i');
          });

          // matches element
          if (list[0].test(node.name)) {
            // loop attributes
            for (const [name, value] of Object.entries(node.attributes)) {
              const isFillCurrentColor =
                preserveCurrentColor &&
                name == 'fill' &&
                value == 'currentColor';
              const isStrokeCurrentColor =
                preserveCurrentColor &&
                name == 'stroke' &&
                value == 'currentColor';
              if (
                !isFillCurrentColor &&
                !isStrokeCurrentColor &&
                // matches attribute name
                list[1].test(name) &&
                // matches attribute value
                list[2].test(value)
              ) {
                delete node.attributes[name];
              }
            }
          }
        }
      },
    },
  };
};
