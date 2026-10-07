'use strict';

var parseCst = require('./parse-cst.js');
var Document$1 = require('./Document-a8d0fbf9.js');
var Schema = require('./Schema-bcc6c2d7.js');
var PlainValue = require('./PlainValue-516d5bc2.js');
var warnings = require('./warnings-793925ce.js');
require('./resolveSeq-95613e94.js');

function createNode(value, wrapScalars = true, tag) {
  if (tag === undefined && typeof wrapScalars === 'string') {
    tag = wrapScalars;
    wrapScalars = true;
  }
  const options = Object.assign({}, Document$1.Document.defaults[Document$1.defaultOptions.version], Document$1.defaultOptions);
  const schema = new Schema.Schema(options);
  return schema.createNode(value, wrapScalars, tag);
}
class Document extends Document$1.Document {
  constructor(options) {
    super(Object.assign({}, Document$1.defaultOptions, options));
  }
}
function parseAllDocuments(src, options) {
  const stream = [];
  let prev;
  for (const cstDoc of parseCst.parse(src)) {
    const doc = new Document(options);
    doc.parse(cstDoc, prev);
    stream.push(doc);
    prev = doc;
  }
  return stream;
}
function parseDocument(src, options) {
  const cst = parseCst.parse(src);
  const doc = new Document(options).parse(cst[0]);
  if (cst.length > 1) {
    const errMsg = 'Source contains multiple documents; please use YAML.parseAllDocuments()';
    doc.errors.unshift(new PlainValue.YAMLSemanticError(cst[1], errMsg));
  }
  return doc;
}
function parse(src, options) {
  const doc = parseDocument(src, options);
  doc.warnings.forEach(warning => warnings.warn(warning));
  if (doc.errors.length > 0) throw doc.errors[0];
  return doc.toJSON();
}
function stringify(value, options) {
  const doc = new Document(options);
  doc.contents = value;
  return String(doc);
}
const YAML = {
  createNode,
  defaultOptions: Document$1.defaultOptions,
  Document,
  parse,
  parseAllDocuments,
  parseCST: parseCst.parse,
  parseDocument,
  scalarOptions: Document$1.scalarOptions,
  stringify
};

exports.YAML = YAML;
