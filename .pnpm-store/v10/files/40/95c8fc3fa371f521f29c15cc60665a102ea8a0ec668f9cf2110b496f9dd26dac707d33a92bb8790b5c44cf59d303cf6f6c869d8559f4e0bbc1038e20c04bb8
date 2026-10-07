'use strict';
const { list } = require('postcss');
const stylehacks = require('stylehacks');
const insertCloned = require('../insertCloned.js');
const parseTrbl = require('../parseTrbl.js');
const hasAllProps = require('../hasAllProps.js');
const getDecls = require('../getDecls.js');
const getRules = require('../getRules.js');
const getValue = require('../getValue.js');
const mergeRules = require('../mergeRules.js');
const minifyTrbl = require('../minifyTrbl.js');
const minifyWsc = require('../minifyWsc.js');
const canMerge = require('../canMerge.js');
const trbl = require('../trbl.js');
const isCustomProp = require('../isCustomProp.js');
const canExplode = require('../canExplode.js');
const getLastNode = require('../getLastNode.js');
const parseWsc = require('../parseWsc.js');
const { isValidWsc } = require('../validateWsc.js');

const wsc = ['width', 'style', 'color'];
const defaults = ['medium', 'none', 'currentcolor'];
const colorMightRequireFallback =
  /(hsla|rgba|color|hwb|lab|lch|oklab|oklch)\(/i;

/**
 * @param {...string} parts
 * @return {string}
 */
function borderProperty(...parts) {
  return `border-${parts.join('-')}`;
}
/**
 * @param {string} value
 * @return {string}
 */
function mapBorderProperty(value) {
  return borderProperty(value);
}

const directions = trbl.map(mapBorderProperty);
const properties = wsc.map(mapBorderProperty);
/** @type {string[]} */
const directionalProperties = directions.reduce(
  (prev, curr) => prev.concat(wsc.map((prop) => `${curr}-${prop}`)),
  /** @type {string[]} */ ([])
);

const precedence = [
  ['border'],
  directions.concat(properties),
  directionalProperties,
];

const allProperties = precedence.reduce((a, b) => a.concat(b));

/**
 * @param {string} prop
 * @return {number | undefined}
 */
function getLevel(prop) {
  for (let i = 0; i < precedence.length; i++) {
    if (precedence[i].includes(prop.toLowerCase())) {
      return i;
    }
  }
}

/** @type {(value: string) => boolean} */
const isValueCustomProp = (value) =>
  value !== undefined && value.search(/var\s*\(\s*--/i) !== -1;

/**
 * @param {string[]} values
 * @return {boolean}
 */
function canMergeValues(values) {
  return !values.some(isValueCustomProp);
}

/**
 * @param {import('postcss').Declaration} decl
 * @return {string}
 */
function getColorValue(decl) {
  if (decl.prop.substr(-5) === 'color') {
    return decl.value;
  }

  return parseWsc(decl.value)[2] || defaults[2];
}

/**
 * @param {[string, string, string]} values
 * @param {[string, string, string]} nextValues
 * @return {string[]}
 */
function diffingProps(values, nextValues) {
  return wsc.reduce((prev, curr, i) => {
    if (values[i] === nextValues[i]) {
      return prev;
    }

    return [...prev, curr];
  }, /** @type {string[]} */ ([]));
}

/**
 * @param {{values: [string, string, string], nextValues: [string, string, string], decl: import('postcss').Declaration, nextDecl: import('postcss').Declaration, index: number}} arg
 * @return {void}
 */
function mergeRedundant({ values, nextValues, decl, nextDecl, index }) {
  if (!canMerge([decl, nextDecl])) {
    return;
  }

  if (stylehacks.detect(decl) || stylehacks.detect(nextDecl)) {
    return;
  }

  const diff = diffingProps(values, nextValues);

  if (diff.length !== 1) {
    return;
  }

  const prop = /** @type {string} */ (diff.pop());
  const position = wsc.indexOf(prop);

  const prop1 = `${nextDecl.prop}-${prop}`;
  const prop2 = `border-${prop}`;

  let props = parseTrbl(values[position]);

  props[index] = nextValues[position];

  const borderValue2 = values.filter((e, i) => i !== position).join(' ');
  const propValue2 = minifyTrbl(props);

  const origLength = (minifyWsc(decl.value) + nextDecl.prop + nextDecl.value)
    .length;
  const newLength1 =
    decl.value.length + prop1.length + minifyWsc(nextValues[position]).length;
  const newLength2 = borderValue2.length + prop2.length + propValue2.length;

  if (newLength1 < newLength2 && newLength1 < origLength) {
    nextDecl.prop = prop1;
    nextDecl.value = nextValues[position];
  }

  if (newLength2 < newLength1 && newLength2 < origLength) {
    decl.value = borderValue2;
    nextDecl.prop = prop2;
    nextDecl.value = propValue2;
  }
}

/**
 * @param {string | string[]} mapped
 * @return {boolean}
 */
function isCloseEnough(mapped) {
  return (
    (mapped[0] === mapped[1] && mapped[1] === mapped[2]) ||
    (mapped[1] === mapped[2] && mapped[2] === mapped[3]) ||
    (mapped[2] === mapped[3] && mapped[3] === mapped[0]) ||
    (mapped[3] === mapped[0] && mapped[0] === mapped[1])
  );
}

/**
 * @param {string[]} mapped
 * @return {string[]}
 */
function getDistinctShorthands(mapped) {
  return [...new Set(mapped)];
}
/**
 * @param {import('postcss').Rule} rule
 * @return {void}
 */
function explode(rule) {
  rule.walkDecls(/^border/i, (decl) => {
    if (!canExplode(decl, false)) {
      return;
    }

    if (stylehacks.detect(decl)) {
      return;
    }

    const prop = decl.prop.toLowerCase();

    // border -> border-trbl
    if (prop === 'border') {
      if (isValidWsc(parseWsc(decl.value))) {
        directions.forEach((direction) => {
          insertCloned(
            /** @type {import('postcss').Rule} */ (decl.parent),
            decl,
            { prop: direction }
          );
        });

        decl.remove();
      }
    }

    // border-trbl -> border-trbl-wsc
    if (directions.some((direction) => prop === direction)) {
      let values = parseWsc(decl.value);

      if (isValidWsc(values)) {
        wsc.forEach((d, i) => {
          insertCloned(
            /** @type {import('postcss').Rule} */ (decl.parent),
            decl,
            {
              prop: `${prop}-${d}`,
              value: values[i] || defaults[i],
            }
          );
        });

        decl.remove();
      }
    }

    // border-wsc -> border-trbl-wsc
    wsc.some((style) => {
      if (prop !== borderProperty(style)) {
        return false;
      }

      if (isCustomProp(decl)) {
        decl.prop = decl.prop.toLowerCase();
        return false;
      }
      parseTrbl(decl.value).forEach((value, i) => {
        insertCloned(
          /** @type {import('postcss').Rule} */ (decl.parent),
          decl,
          {
            prop: borderProperty(trbl[i], style),
            value,
          }
        );
      });

      return decl.remove();
    });
  });
}

/**
 * @param {import('postcss').Rule} rule
 * @return {void}
 */
function merge(rule) {
  // border-trbl-wsc -> border-trbl
  trbl.forEach((direction) => {
    const prop = borderProperty(direction);

    mergeRules(
      rule,
      wsc.map((style) => borderProperty(direction, style)),
      (rules, lastNode) => {
        if (canMerge(rules, false) && !rules.some(stylehacks.detect)) {
          insertCloned(
            /** @type {import('postcss').Rule} */ (lastNode.parent),
            lastNode,
            {
              prop,
              value: rules.map(getValue).join(' '),
            }
          );
          for (const node of rules) {
            node.remove();
          }

          return true;
        }
        return false;
      }
    );
  });

  // border-trbl-wsc -> border-wsc
  wsc.forEach((style) => {
    const prop = borderProperty(style);

    mergeRules(
      rule,
      trbl.map((direction) => borderProperty(direction, style)),
      (rules, lastNode) => {
        if (canMerge(rules) && !rules.some(stylehacks.detect)) {
          insertCloned(
            /** @type {import('postcss').Rule} */ (lastNode.parent),
            lastNode,
            {
              prop,
              value: minifyTrbl(rules.map(getValue).join(' ')),
            }
          );

          for (const node of rules) {
            node.remove();
          }

          return true;
        }
        return false;
      }
    );
  });

  // border-trbl -> border-wsc
  mergeRules(rule, directions, (rules, lastNode) => {
    if (rules.some(stylehacks.detect)) {
      return false;
    }

    const values = rules.map(({ value }) => value);

    if (!canMergeValues(values)) {
      return false;
    }

    const parsed = values.map((value) => parseWsc(value));

    if (!parsed.every(isValidWsc)) {
      return false;
    }

    wsc.forEach((d, i) => {
      const value = parsed.map((v) => v[i] || defaults[i]);

      if (canMergeValues(value)) {
        insertCloned(
          /** @type {import('postcss').Rule} */ (lastNode.parent),
          lastNode,
          {
            prop: borderProperty(d),
            value: minifyTrbl(
              /** @type {[string, string, string, string]} */ (value)
            ),
          }
        );
      } else {
        insertCloned(
          /** @type {import('postcss').Rule} */ (lastNode.parent),
          lastNode
        );
      }
    });

    for (const node of rules) {
      node.remove();
    }

    return true;
  });

  // border-wsc -> border
  // border-wsc -> border + border-color
  // border-wsc -> border + border-dir
  mergeRules(rule, properties, (rules, lastNode) => {
    if (rules.some(stylehacks.detect)) {
      return false;
    }

    const values = rules.map((node) => parseTrbl(node.value));
    const mapped = [0, 1, 2, 3].map((i) =>
      [values[0][i], values[1][i], values[2][i]].join(' ')
    );

    if (!canMergeValues(mapped)) {
      return false;
    }

    const [width, style, color] = rules;
    const reduced = getDistinctShorthands(mapped);

    if (isCloseEnough(mapped) && canMerge(rules, false)) {
      const first =
        mapped.indexOf(reduced[0]) !== mapped.lastIndexOf(reduced[0]);

      const border = insertCloned(
        /** @type {import('postcss').Rule} */ (lastNode.parent),
        lastNode,
        {
          prop: 'border',
          value: first ? reduced[0] : reduced[1],
        }
      );

      if (reduced[1]) {
        const value = first ? reduced[1] : reduced[0];
        const prop = borderProperty(trbl[mapped.indexOf(value)]);

        rule.insertAfter(
          border,
          Object.assign(lastNode.clone(), {
            prop,
            value,
          })
        );
      }
      for (const node of rules) {
        node.remove();
      }

      return true;
    } else if (reduced.length === 1) {
      rule.insertBefore(
        color,
        Object.assign(lastNode.clone(), {
          prop: 'border',
          value: [width, style].map(getValue).join(' '),
        })
      );
      rules
        .filter((node) => node.prop.toLowerCase() !== properties[2])
        .forEach((node) => node.remove());

      return true;
    }
    return false;
  });

  // border-wsc -> border + border-trbl
  mergeRules(rule, properties, (rules, lastNode) => {
    if (rules.some(stylehacks.detect)) {
      return false;
    }

    const values = rules.map((node) => parseTrbl(node.value));
    const mapped = [0, 1, 2, 3].map((i) =>
      [values[0][i], values[1][i], values[2][i]].join(' ')
    );
    const reduced = getDistinctShorthands(mapped);
    const none = 'medium none currentcolor';

    if (reduced.length > 1 && reduced.length < 4 && reduced.includes(none)) {
      const filtered = mapped.filter((p) => p !== none);
      const mostCommon = reduced.sort(
        (a, b) =>
          mapped.filter((v) => v === b).length -
          mapped.filter((v) => v === a).length
      )[0];
      const borderValue = reduced.length === 2 ? filtered[0] : mostCommon;

      rule.insertBefore(
        lastNode,
        Object.assign(lastNode.clone(), {
          prop: 'border',
          value: borderValue,
        })
      );

      directions.forEach((dir, i) => {
        if (mapped[i] !== borderValue) {
          rule.insertBefore(
            lastNode,
            Object.assign(lastNode.clone(), {
              prop: dir,
              value: mapped[i],
            })
          );
        }
      });

      for (const node of rules) {
        node.remove();
      }

      return true;
    }
    return false;
  });

  // border-trbl -> border
  // border-trbl -> border + border-trbl
  mergeRules(rule, directions, (rules, lastNode) => {
    if (rules.some(stylehacks.detect)) {
      return false;
    }

    const values = rules.map((node) => {
      const wscValue = parseWsc(node.value);

      if (!isValidWsc(wscValue)) {
        return node.value;
      }

      return wscValue.map((value, i) => value || defaults[i]).join(' ');
    });

    const reduced = getDistinctShorthands(values);

    if (isCloseEnough(values)) {
      const first =
        values.indexOf(reduced[0]) !== values.lastIndexOf(reduced[0]);

      rule.insertBefore(
        lastNode,
        Object.assign(lastNode.clone(), {
          prop: 'border',
          value: minifyWsc(first ? values[0] : values[1]),
        })
      );

      if (reduced[1]) {
        const value = first ? reduced[1] : reduced[0];
        const prop = directions[values.indexOf(value)];
        rule.insertBefore(
          lastNode,
          Object.assign(lastNode.clone(), {
            prop: prop,
            value: minifyWsc(value),
          })
        );
      }

      for (const node of rules) {
        node.remove();
      }

      return true;
    }
    return false;
  });

  // border-trbl-wsc + border-trbl (custom prop) -> border-trbl + border-trbl-wsc (custom prop)
  directions.forEach((direction) => {
    wsc.forEach((style, i) => {
      const prop = `${direction}-${style}`;

      mergeRules(rule, [direction, prop], (rules, lastNode) => {
        if (lastNode.prop !== direction) {
          return false;
        }

        const values = parseWsc(lastNode.value);

        if (!isValidWsc(values)) {
          return false;
        }

        const wscProp = rules.filter((r) => r !== lastNode)[0];

        if (!isValueCustomProp(values[i]) || isCustomProp(wscProp)) {
          return false;
        }

        const wscValue = values[i];

        values[i] = wscProp.value;

        if (canMerge(rules, false) && !rules.some(stylehacks.detect)) {
          insertCloned(
            /** @type {import('postcss').Rule} */ (lastNode.parent),
            lastNode,
            {
              prop,
              value: wscValue,
            }
          );
          lastNode.value = minifyWsc(/** @type {any} */ (values));

          wscProp.remove();

          return true;
        }
        return false;
      });
    });
  });

  // border-wsc + border (custom prop) -> border + border-wsc (custom prop)
  wsc.forEach((style, i) => {
    const prop = borderProperty(style);
    mergeRules(rule, ['border', prop], (rules, lastNode) => {
      if (lastNode.prop !== 'border') {
        return false;
      }

      const values = parseWsc(lastNode.value);

      if (!isValidWsc(values)) {
        return false;
      }

      const wscProp = rules.filter((r) => r !== lastNode)[0];

      if (!isValueCustomProp(values[i]) || isCustomProp(wscProp)) {
        return false;
      }

      const wscValue = values[i];

      values[i] = wscProp.value;

      if (canMerge(rules, false) && !rules.some(stylehacks.detect)) {
        insertCloned(
          /** @type {import('postcss').Rule} */ (lastNode.parent),
          lastNode,
          {
            prop,
            value: wscValue,
          }
        );
        lastNode.value = minifyWsc(/** @type {any} */ (values));
        wscProp.remove();

        return true;
      }
      return false;
    });
  });

  // optimize border-trbl
  let decls = getDecls(rule, directions);

  while (decls.length) {
    const lastNode = decls[decls.length - 1];

    wsc.forEach((d, i) => {
      const names = directions
        .filter((name) => name !== lastNode.prop)
        .map((name) => `${name}-${d}`);

      let nodes = rule.nodes.slice(0, rule.nodes.indexOf(lastNode));

      const border = getLastNode(nodes, 'border');

      if (border) {
        nodes = nodes.slice(nodes.indexOf(border));
      }

      const props = nodes.filter(
        (node) =>
          node.type === 'decl' &&
          names.includes(node.prop) &&
          node.important === lastNode.important
      );
      const rules = getRules(
        /** @type {import('postcss').Declaration[]} */ (props),
        names
      );

      if (hasAllProps(rules, ...names) && !rules.some(stylehacks.detect)) {
        const values = rules.map((node) => (node ? node.value : null));
        const filteredValues = values.filter(Boolean);
        const lastNodeValue = list.space(lastNode.value)[i];

        values[directions.indexOf(lastNode.prop)] = lastNodeValue;

        let value = minifyTrbl(values.join(' '));

        if (
          filteredValues[0] === filteredValues[1] &&
          filteredValues[1] === filteredValues[2]
        ) {
          value = /** @type {string} */ (filteredValues[0]);
        }

        let refNode = props[props.length - 1];

        if (value === lastNodeValue) {
          refNode = lastNode;
          let valueArray = list.space(lastNode.value);
          valueArray.splice(i, 1);
          lastNode.value = valueArray.join(' ');
        }

        insertCloned(
          /** @type {import('postcss').Rule} */ (refNode.parent),
          /** @type {import('postcss').Declaration} */ (refNode),
          {
            prop: borderProperty(d),
            value,
          }
        );

        decls = decls.filter((node) => !rules.includes(node));
        for (const node of rules) {
          node.remove();
        }
      }
    });

    decls = decls.filter((node) => node !== lastNode);
  }

  rule.walkDecls('border', (decl) => {
    const nextDecl = decl.next();

    if (!nextDecl || nextDecl.type !== 'decl') {
      return false;
    }

    const index = directions.indexOf(nextDecl.prop);

    if (index === -1) {
      return;
    }

    const values = parseWsc(decl.value);
    const nextValues = parseWsc(nextDecl.value);

    if (!isValidWsc(values) || !isValidWsc(nextValues)) {
      return;
    }

    const config = {
      values,
      nextValues,
      decl,
      nextDecl,
      index,
    };

    return mergeRedundant(config);
  });

  rule.walkDecls(/^border($|-(top|right|bottom|left)$)/i, (decl) => {
    let values = parseWsc(decl.value);

    if (!isValidWsc(values)) {
      return;
    }

    const position = directions.indexOf(decl.prop);
    let dirs = [...directions];

    dirs.splice(position, 1);
    wsc.forEach((d, i) => {
      const props = dirs.map((dir) => `${dir}-${d}`);

      mergeRules(rule, [decl.prop, ...props], (rules) => {
        if (!rules.includes(decl)) {
          return false;
        }

        const longhands = rules.filter((p) => p !== decl);

        if (
          longhands[0].value.toLowerCase() ===
            longhands[1].value.toLowerCase() &&
          longhands[1].value.toLowerCase() ===
            longhands[2].value.toLowerCase() &&
          values[i] !== undefined &&
          longhands[0].value.toLowerCase() === values[i].toLowerCase()
        ) {
          for (const node of longhands) {
            node.remove();
          }

          insertCloned(
            /** @type {import('postcss').Rule} */ (decl.parent),
            decl,
            {
              prop: borderProperty(d),
              value: values[i],
            }
          );

          /** @type {string|null} */ (values[i]) = null;
        }
        return false;
      });

      const newValue = values.join(' ');

      if (newValue) {
        decl.value = newValue;
      } else {
        decl.remove();
      }
    });
  });

  // clean-up values
  rule.walkDecls(/^border($|-(top|right|bottom|left)$)/i, (decl) => {
    decl.value = minifyWsc(decl.value);
  });

  // border-spacing-hv -> border-spacing
  rule.walkDecls(/^border-spacing$/i, (decl) => {
    const value = list.space(decl.value);

    // merge vertical and horizontal dups
    if (value.length > 1 && value[0] === value[1]) {
      decl.value = value.slice(1).join(' ');
    }
  });

  // clean-up rules
  decls = getDecls(rule, allProperties);

  while (decls.length) {
    const lastNode = decls[decls.length - 1];
    const lastPart = lastNode.prop.split('-').pop();

    // remove properties of lower precedence
    const lesser = decls.filter(
      (node) =>
        !stylehacks.detect(lastNode) &&
        !stylehacks.detect(node) &&
        !isCustomProp(lastNode) &&
        node !== lastNode &&
        node.important === lastNode.important &&
        /** @type {number} */ (getLevel(node.prop)) >
          /** @type {number} */ (getLevel(lastNode.prop)) &&
        (node.prop.toLowerCase().includes(lastNode.prop) ||
          node.prop.toLowerCase().endsWith(/** @type {string} */ (lastPart)))
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

    if (duplicates.length) {
      if (colorMightRequireFallback.test(getColorValue(lastNode))) {
        const preserve = duplicates
          .filter(
            (node) => !colorMightRequireFallback.test(getColorValue(node))
          )
          .pop();

        duplicates = duplicates.filter((node) => node !== preserve);
      }
      for (const node of duplicates) {
        node.remove();
      }
    }

    decls = decls.filter(
      (node) => node !== lastNode && !duplicates.includes(node)
    );
  }
}

module.exports = {
  explode,
  merge,
};
