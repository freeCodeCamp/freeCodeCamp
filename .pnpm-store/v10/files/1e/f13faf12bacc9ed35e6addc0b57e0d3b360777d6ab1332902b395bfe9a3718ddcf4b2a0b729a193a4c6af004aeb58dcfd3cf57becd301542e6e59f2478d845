'use strict';

/**
 * @typedef {import('./types').XastParent} XastParent
 * @typedef {import('./types').XastRoot} XastRoot
 * @typedef {import('./types').XastElement} XastElement
 * @typedef {import('./types').XastInstruction} XastInstruction
 * @typedef {import('./types').XastDoctype} XastDoctype
 * @typedef {import('./types').XastText} XastText
 * @typedef {import('./types').XastCdata} XastCdata
 * @typedef {import('./types').XastComment} XastComment
 * @typedef {import('./types').StringifyOptions} StringifyOptions
 */

const { textElems } = require('../plugins/_collections.js');

/**
 * @typedef {{
 *   width: void | string,
 *   height: void | string,
 *   indent: string,
 *   textContext: null | XastElement,
 *   indentLevel: number,
 * }} State
 */

/**
 * @typedef {Required<StringifyOptions>} Options
 */

/**
 * @type {(char: string) => string}
 */
const encodeEntity = (char) => {
  return entities[char];
};

/**
 * @type {Options}
 */
const defaults = {
  doctypeStart: '<!DOCTYPE',
  doctypeEnd: '>',
  procInstStart: '<?',
  procInstEnd: '?>',
  tagOpenStart: '<',
  tagOpenEnd: '>',
  tagCloseStart: '</',
  tagCloseEnd: '>',
  tagShortStart: '<',
  tagShortEnd: '/>',
  attrStart: '="',
  attrEnd: '"',
  commentStart: '<!--',
  commentEnd: '-->',
  cdataStart: '<![CDATA[',
  cdataEnd: ']]>',
  textStart: '',
  textEnd: '',
  indent: 4,
  regEntities: /[&'"<>]/g,
  regValEntities: /[&"<>]/g,
  encodeEntity: encodeEntity,
  pretty: false,
  useShortTags: true,
  eol: 'lf',
  finalNewline: false,
};

/**
 * @type {Record<string, string>}
 */
const entities = {
  '&': '&amp;',
  "'": '&apos;',
  '"': '&quot;',
  '>': '&gt;',
  '<': '&lt;',
};

/**
 * convert XAST to SVG string
 *
 * @type {(data: XastRoot, config: StringifyOptions) => {
 *   data: string,
 *   info: {
 *     width: void | string,
 *     height: void | string
 *   }
 * }}
 */
const stringifySvg = (data, userOptions = {}) => {
  /**
   * @type {Options}
   */
  const config = { ...defaults, ...userOptions };
  const indent = config.indent;
  let newIndent = '    ';
  if (typeof indent === 'number' && Number.isNaN(indent) === false) {
    newIndent = indent < 0 ? '\t' : ' '.repeat(indent);
  } else if (typeof indent === 'string') {
    newIndent = indent;
  }
  /**
   * @type {State}
   */
  const state = {
    // TODO remove width and height in v3
    width: undefined,
    height: undefined,
    indent: newIndent,
    textContext: null,
    indentLevel: 0,
  };
  const eol = config.eol === 'crlf' ? '\r\n' : '\n';
  if (config.pretty) {
    config.doctypeEnd += eol;
    config.procInstEnd += eol;
    config.commentEnd += eol;
    config.cdataEnd += eol;
    config.tagShortEnd += eol;
    config.tagOpenEnd += eol;
    config.tagCloseEnd += eol;
    config.textEnd += eol;
  }
  let svg = stringifyNode(data, config, state);
  if (config.finalNewline && svg.length > 0 && svg[svg.length - 1] !== '\n') {
    svg += eol;
  }
  return {
    data: svg,
    info: {
      width: state.width,
      height: state.height,
    },
  };
};
exports.stringifySvg = stringifySvg;

/**
 * @type {(node: XastParent, config: Options, state: State) => string}
 */
const stringifyNode = (data, config, state) => {
  let svg = '';
  state.indentLevel += 1;
  for (const item of data.children) {
    if (item.type === 'element') {
      svg += stringifyElement(item, config, state);
    }
    if (item.type === 'text') {
      svg += stringifyText(item, config, state);
    }
    if (item.type === 'doctype') {
      svg += stringifyDoctype(item, config);
    }
    if (item.type === 'instruction') {
      svg += stringifyInstruction(item, config);
    }
    if (item.type === 'comment') {
      svg += stringifyComment(item, config);
    }
    if (item.type === 'cdata') {
      svg += stringifyCdata(item, config, state);
    }
  }
  state.indentLevel -= 1;
  return svg;
};

/**
 * create indent string in accordance with the current node level.
 *
 * @type {(config: Options, state: State) => string}
 */
const createIndent = (config, state) => {
  let indent = '';
  if (config.pretty && state.textContext == null) {
    indent = state.indent.repeat(state.indentLevel - 1);
  }
  return indent;
};

/**
 * @type {(node: XastDoctype, config: Options) => string}
 */
const stringifyDoctype = (node, config) => {
  return config.doctypeStart + node.data.doctype + config.doctypeEnd;
};

/**
 * @type {(node: XastInstruction, config: Options) => string}
 */
const stringifyInstruction = (node, config) => {
  return (
    config.procInstStart + node.name + ' ' + node.value + config.procInstEnd
  );
};

/**
 * @type {(node: XastComment, config: Options) => string}
 */
const stringifyComment = (node, config) => {
  return config.commentStart + node.value + config.commentEnd;
};

/**
 * @type {(node: XastCdata, config: Options, state: State) => string}
 */
const stringifyCdata = (node, config, state) => {
  return (
    createIndent(config, state) +
    config.cdataStart +
    node.value +
    config.cdataEnd
  );
};

/**
 * @type {(node: XastElement, config: Options, state: State) => string}
 */
const stringifyElement = (node, config, state) => {
  // beautiful injection for obtaining SVG information :)
  if (
    node.name === 'svg' &&
    node.attributes.width != null &&
    node.attributes.height != null
  ) {
    state.width = node.attributes.width;
    state.height = node.attributes.height;
  }

  // empty element and short tag
  if (node.children.length === 0) {
    if (config.useShortTags) {
      return (
        createIndent(config, state) +
        config.tagShortStart +
        node.name +
        stringifyAttributes(node, config) +
        config.tagShortEnd
      );
    } else {
      return (
        createIndent(config, state) +
        config.tagShortStart +
        node.name +
        stringifyAttributes(node, config) +
        config.tagOpenEnd +
        config.tagCloseStart +
        node.name +
        config.tagCloseEnd
      );
    }
    // non-empty element
  } else {
    let tagOpenStart = config.tagOpenStart;
    let tagOpenEnd = config.tagOpenEnd;
    let tagCloseStart = config.tagCloseStart;
    let tagCloseEnd = config.tagCloseEnd;
    let openIndent = createIndent(config, state);
    let closeIndent = createIndent(config, state);

    if (state.textContext) {
      tagOpenStart = defaults.tagOpenStart;
      tagOpenEnd = defaults.tagOpenEnd;
      tagCloseStart = defaults.tagCloseStart;
      tagCloseEnd = defaults.tagCloseEnd;
      openIndent = '';
    } else if (textElems.includes(node.name)) {
      tagOpenEnd = defaults.tagOpenEnd;
      tagCloseStart = defaults.tagCloseStart;
      closeIndent = '';
      state.textContext = node;
    }

    const children = stringifyNode(node, config, state);

    if (state.textContext === node) {
      state.textContext = null;
    }

    return (
      openIndent +
      tagOpenStart +
      node.name +
      stringifyAttributes(node, config) +
      tagOpenEnd +
      children +
      closeIndent +
      tagCloseStart +
      node.name +
      tagCloseEnd
    );
  }
};

/**
 * @type {(node: XastElement, config: Options) => string}
 */
const stringifyAttributes = (node, config) => {
  let attrs = '';
  for (const [name, value] of Object.entries(node.attributes)) {
    // TODO remove attributes without values support in v3
    if (value !== undefined) {
      const encodedValue = value
        .toString()
        .replace(config.regValEntities, config.encodeEntity);
      attrs += ' ' + name + config.attrStart + encodedValue + config.attrEnd;
    } else {
      attrs += ' ' + name;
    }
  }
  return attrs;
};

/**
 * @type {(node: XastText, config: Options, state: State) => string}
 */
const stringifyText = (node, config, state) => {
  return (
    createIndent(config, state) +
    config.textStart +
    node.value.replace(config.regEntities, config.encodeEntity) +
    (state.textContext ? '' : config.textEnd)
  );
};
