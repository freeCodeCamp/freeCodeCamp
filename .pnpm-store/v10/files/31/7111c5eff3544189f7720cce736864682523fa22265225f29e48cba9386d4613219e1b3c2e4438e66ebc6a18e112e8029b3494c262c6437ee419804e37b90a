/* eslint-env jest */
import getProp from '../src/getProp';

const nodeVersion = parseInt(process.version.match(/^v(\d+)\./)[1], 10);

export const fallbackToBabylon = nodeVersion < 6;

let parserName;
const babelParser = fallbackToBabylon ? require('babylon') : require('@babel/parser');
const flowParser = require('flow-parser');

const defaultPlugins = [
  'jsx',
  'functionBind',
  'estree',
  'objectRestSpread',
  'optionalChaining',
  // 'nullishCoalescing', // TODO: update to babel 7
];
let plugins = [...defaultPlugins];
let isESM = false;

export function setParserName(name) {
  parserName = name;
}

export function changePlugins(pluginOrFn) {
  if (Array.isArray(pluginOrFn)) {
    plugins = pluginOrFn;
  } else if (typeof pluginOrFn === 'function') {
    plugins = pluginOrFn(plugins);
  } else {
    throw new Error('changePlugins argument should be either an array or a function');
  }
}

export function setIsESM() {
  isESM = true;
}

beforeEach(() => {
  plugins = [...defaultPlugins];
  isESM = false;
});

function parse(code) {
  if (parserName === undefined) {
    throw new Error('No parser specified');
  }
  if (parserName === 'babel') {
    try {
      return babelParser.parse(code, { plugins, sourceFilename: 'test.js', ...(isESM && { sourceType: 'module' }) });
    } catch (_) {
      // eslint-disable-next-line no-console
      console.warn(`Failed to parse with ${fallbackToBabylon ? 'babylon' : 'Babel'} parser.`);
    }
  }
  if (parserName === 'flow') {
    try {
      return flowParser.parse(code, { plugins });
    } catch (_) {
      // eslint-disable-next-line no-console
      console.warn('Failed to parse with the Flow parser');
    }
  }
  throw new Error(`The parser ${parserName} is not yet supported for testing.`);
}

export function getOpeningElement(code) {
  const parsedCode = parse(code);
  let body;
  if (parsedCode.program) {
    // eslint-disable-next-line prefer-destructuring
    body = parsedCode.program.body;
  } else {
    // eslint-disable-next-line prefer-destructuring
    body = parsedCode.body;
  }
  if (Array.isArray(body) && body[0] != null) {
    const [{ expression }] = body;
    return expression.type === 'JSXFragment' ? expression.openingFragment : expression.openingElement;
  }

  return null;
}

export function extractProp(code, prop = 'foo') {
  const node = getOpeningElement(code);
  const { attributes: props } = node;
  return getProp(props, prop);
}

export const describeIfNotBabylon = fallbackToBabylon ? describe.skip : describe;
