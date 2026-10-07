/* eslint-env mocha */
import assert from 'assert';
import entries from 'object.entries';
import fromEntries from 'object.fromentries';
import { getOpeningElement, setParserName, fallbackToBabylon } from '../helper';
import getProp from '../../src/getProp';

const literal = {
  source: '<div {...{ id: "foo" }} />',
  target: '<div id="foo" />',
  offset: { keyOffset: -6, valueOffset: -7 },
};

const expression1 = {
  source: '<div {...{ id }} />',
  target: '<div id={id} />',
  offset: { keyOffset: -6, valueOffset: -2 },
};

const expression2 = {
  source: '<div {...{ id: `foo${bar}baz` }} />', // eslint-disable-line no-template-curly-in-string
  target: '<div id={`foo${bar}baz`} />', // eslint-disable-line no-template-curly-in-string
  offset: { keyOffset: -6, valueOffset: -6 },
};

describe('getProp', () => {
  it('should create the correct AST for literal with flow parser', () => {
    actualTest('flow', literal);
  });
  it('should create the correct AST for literal with babel parser', () => {
    actualTest('babel', literal);
  });
  it('should create the correct AST for expression with flow parser (1)', () => {
    actualTest('flow', expression1);
  });
  it('should create the correct AST for expression with babel parser (1)', () => {
    actualTest('babel', expression1);
  });
  it('should create the correct AST for expression with flow parser (2)', () => {
    actualTest('flow', expression2);
  });
  it('should create the correct AST for expression with babel parser (2)', () => {
    actualTest('babel', expression2);
  });
});

function actualTest(parserName, test) {
  setParserName(parserName);
  const { source, target, offset } = test;
  const sourceProps = stripConstructors(getOpeningElement(source).attributes);
  const targetProps = stripConstructors(getOpeningElement(target).attributes);
  const prop = 'id';
  const sourceResult = getProp(sourceProps, prop);
  const targetResult = getProp(targetProps, prop);

  if (fallbackToBabylon && parserName === 'babel' && test === literal) {
    // Babylon (node < 6) adds an `extra: null` prop to a literal if it is parsed from a
    // JSXAttribute, other literals don't get this.
    sourceResult.value.extra = null;
  }

  assert.deepStrictEqual(
    adjustLocations(sourceResult, offset),
    adjustRange(targetResult),
  );
}

function adjustRange({ name, value: { expression, ...value }, ...node }) {
  return {
    ...adjustNodeRange(node),
    name: adjustNodeRange(name),
    value: {
      ...adjustNodeRange(value),
      ...(expression ? { expression: adjustNodeRangeRecursively(expression) } : {}),
    },
  };
}

function adjustNodeRange(node) {
  if (!node.loc) {
    return node;
  }

  const [start, end] = node.range || [node.start, node.end];
  return {
    ...node,
    end: undefined,
    range: [start, end],
    start: undefined,
  };
}

function adjustNodeRangeRecursively(node) {
  if (Array.isArray(node)) {
    return node.map(adjustNodeRangeRecursively);
  }

  if (node && typeof node === 'object') {
    return adjustNodeRange(mapValues(node, adjustNodeRangeRecursively));
  }

  return node;
}

function stripConstructors(value) {
  return JSON.parse(JSON.stringify(value));
}

function adjustLocations(node, { keyOffset, valueOffset }) {
  const hasExpression = !!node.value.expression;
  return {
    ...adjustNodeLocations(node, {
      startOffset: keyOffset,
      endOffset: valueOffset + (hasExpression ? 1 : 0),
    }),
    name: adjustNodeLocations(node.name, { startOffset: keyOffset, endOffset: keyOffset }),
    value: {
      ...adjustNodeLocations(node.value, {
        startOffset: valueOffset - (hasExpression ? 1 : 0),
        endOffset: valueOffset + (hasExpression ? 1 : 0),
      }),
      ...(hasExpression
        ? {
          expression: adjustLocationsRecursively(
            node.value.expression,
            { startOffset: valueOffset, endOffset: valueOffset },
          ),
        }
        : {}
      ),
    },
  };
}

function adjustNodeLocations(node, { startOffset, endOffset }) {
  if (!node.loc) {
    return node;
  }

  const [start, end] = node.range || [];
  return {
    ...node,
    end: undefined,
    loc: {
      ...node.loc,
      start: {
        ...node.loc.start,
        column: node.loc.start.column + startOffset,
      },
      end: {
        ...node.loc.end,
        column: node.loc.end.column + endOffset,
      },
    },
    range: [start + startOffset, end + endOffset],
    start: undefined,
  };
}

function adjustLocationsRecursively(node, { startOffset, endOffset }) {
  if (Array.isArray(node)) {
    return node.map((x) => adjustLocationsRecursively(x, { startOffset, endOffset }));
  }
  if (node && typeof node === 'object') {
    return adjustNodeLocations(
      mapValues(node, (x) => adjustLocationsRecursively(x, { startOffset, endOffset })),
      { startOffset, endOffset },
    );
  }

  return node;
}

function mapValues(o, f) {
  return fromEntries(entries(o).map(([k, v]) => [k, f(v)]));
}
