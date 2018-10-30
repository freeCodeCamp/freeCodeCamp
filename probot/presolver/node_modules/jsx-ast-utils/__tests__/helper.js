import getProp from '../src/getProp';

const acorn = require('acorn-jsx');

function parse(code) {
  return acorn.parse(code, {
    plugins: { jsx: true },
  });
}

export function getOpeningElement(code) {
  return parse(code).body[0].expression.openingElement;
}

export function extractProp(code, prop = 'foo') {
  const node = getOpeningElement(code);
  const { attributes: props } = node;
  return getProp(props, prop);
}
