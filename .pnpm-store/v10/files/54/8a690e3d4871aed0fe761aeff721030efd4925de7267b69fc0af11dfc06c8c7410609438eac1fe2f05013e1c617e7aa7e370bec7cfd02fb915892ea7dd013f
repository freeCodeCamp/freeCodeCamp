'use strict';

/**
 * @typedef {import('./types').XastNode} XastNode
 * @typedef {import('./types').XastInstruction} XastInstruction
 * @typedef {import('./types').XastDoctype} XastDoctype
 * @typedef {import('./types').XastComment} XastComment
 * @typedef {import('./types').XastRoot} XastRoot
 * @typedef {import('./types').XastElement} XastElement
 * @typedef {import('./types').XastCdata} XastCdata
 * @typedef {import('./types').XastText} XastText
 * @typedef {import('./types').XastParent} XastParent
 */

// @ts-ignore sax will be replaced with something else later
const SAX = require('@trysound/sax');
const JSAPI = require('./svgo/jsAPI.js');
const { textElems } = require('../plugins/_collections.js');

class SvgoParserError extends Error {
  /**
   * @param message {string}
   * @param line {number}
   * @param column {number}
   * @param source {string}
   * @param file {void | string}
   */
  constructor(message, line, column, source, file) {
    super(message);
    this.name = 'SvgoParserError';
    this.message = `${file || '<input>'}:${line}:${column}: ${message}`;
    this.reason = message;
    this.line = line;
    this.column = column;
    this.source = source;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SvgoParserError);
    }
  }
  toString() {
    const lines = this.source.split(/\r?\n/);
    const startLine = Math.max(this.line - 3, 0);
    const endLine = Math.min(this.line + 2, lines.length);
    const lineNumberWidth = String(endLine).length;
    const startColumn = Math.max(this.column - 54, 0);
    const endColumn = Math.max(this.column + 20, 80);
    const code = lines
      .slice(startLine, endLine)
      .map((line, index) => {
        const lineSlice = line.slice(startColumn, endColumn);
        let ellipsisPrefix = '';
        let ellipsisSuffix = '';
        if (startColumn !== 0) {
          ellipsisPrefix = startColumn > line.length - 1 ? ' ' : '…';
        }
        if (endColumn < line.length - 1) {
          ellipsisSuffix = '…';
        }
        const number = startLine + 1 + index;
        const gutter = ` ${number.toString().padStart(lineNumberWidth)} | `;
        if (number === this.line) {
          const gutterSpacing = gutter.replace(/[^|]/g, ' ');
          const lineSpacing = (
            ellipsisPrefix + line.slice(startColumn, this.column - 1)
          ).replace(/[^\t]/g, ' ');
          const spacing = gutterSpacing + lineSpacing;
          return `>${gutter}${ellipsisPrefix}${lineSlice}${ellipsisSuffix}\n ${spacing}^`;
        }
        return ` ${gutter}${ellipsisPrefix}${lineSlice}${ellipsisSuffix}`;
      })
      .join('\n');
    return `${this.name}: ${this.message}\n\n${code}\n`;
  }
}

const entityDeclaration = /<!ENTITY\s+(\S+)\s+(?:'([^']+)'|"([^"]+)")\s*>/g;

const config = {
  strict: true,
  trim: false,
  normalize: false,
  lowercase: true,
  xmlns: true,
  position: true,
};

/**
 * Convert SVG (XML) string to SVG-as-JS object.
 *
 * @type {(data: string, from?: string) => XastRoot}
 */
const parseSvg = (data, from) => {
  const sax = SAX.parser(config.strict, config);
  /**
   * @type {XastRoot}
   */
  const root = new JSAPI({ type: 'root', children: [] });
  /**
   * @type {XastParent}
   */
  let current = root;
  /**
   * @type {Array<XastParent>}
   */
  const stack = [root];

  /**
   * @type {<T extends XastNode>(node: T) => T}
   */
  const pushToContent = (node) => {
    const wrapped = new JSAPI(node, current);
    current.children.push(wrapped);
    return wrapped;
  };

  /**
   * @type {(doctype: string) => void}
   */
  sax.ondoctype = (doctype) => {
    /**
     * @type {XastDoctype}
     */
    const node = {
      type: 'doctype',
      // TODO parse doctype for name, public and system to match xast
      name: 'svg',
      data: {
        doctype,
      },
    };
    pushToContent(node);
    const subsetStart = doctype.indexOf('[');
    if (subsetStart >= 0) {
      entityDeclaration.lastIndex = subsetStart;
      let entityMatch = entityDeclaration.exec(data);
      while (entityMatch != null) {
        sax.ENTITIES[entityMatch[1]] = entityMatch[2] || entityMatch[3];
        entityMatch = entityDeclaration.exec(data);
      }
    }
  };

  /**
   * @type {(data: { name: string, body: string }) => void}
   */
  sax.onprocessinginstruction = (data) => {
    /**
     * @type {XastInstruction}
     */
    const node = {
      type: 'instruction',
      name: data.name,
      value: data.body,
    };
    pushToContent(node);
  };

  /**
   * @type {(comment: string) => void}
   */
  sax.oncomment = (comment) => {
    /**
     * @type {XastComment}
     */
    const node = {
      type: 'comment',
      value: comment.trim(),
    };
    pushToContent(node);
  };

  /**
   * @type {(cdata: string) => void}
   */
  sax.oncdata = (cdata) => {
    /**
     * @type {XastCdata}
     */
    const node = {
      type: 'cdata',
      value: cdata,
    };
    pushToContent(node);
  };

  /**
   * @type {(data: { name: string, attributes: Record<string, { value: string }>}) => void}
   */
  sax.onopentag = (data) => {
    /**
     * @type {XastElement}
     */
    let element = {
      type: 'element',
      name: data.name,
      attributes: {},
      children: [],
    };
    for (const [name, attr] of Object.entries(data.attributes)) {
      element.attributes[name] = attr.value;
    }
    element = pushToContent(element);
    current = element;
    stack.push(element);
  };

  /**
   * @type {(text: string) => void}
   */
  sax.ontext = (text) => {
    if (current.type === 'element') {
      // prevent trimming of meaningful whitespace inside textual tags
      if (textElems.includes(current.name)) {
        /**
         * @type {XastText}
         */
        const node = {
          type: 'text',
          value: text,
        };
        pushToContent(node);
      } else if (/\S/.test(text)) {
        /**
         * @type {XastText}
         */
        const node = {
          type: 'text',
          value: text.trim(),
        };
        pushToContent(node);
      }
    }
  };

  sax.onclosetag = () => {
    stack.pop();
    current = stack[stack.length - 1];
  };

  /**
   * @type {(e: any) => void}
   */
  sax.onerror = (e) => {
    const error = new SvgoParserError(
      e.reason,
      e.line + 1,
      e.column,
      data,
      from
    );
    if (e.message.indexOf('Unexpected end') === -1) {
      throw error;
    }
  };

  sax.write(data).close();
  return root;
};
exports.parseSvg = parseSvg;
