import { Composer } from './compose/composer.js';
import { Document } from './doc/Document.js';
import { prettifyError, YAMLParseError } from './errors.js';
import { warn } from './log.js';
import { isDocument } from './nodes/identity.js';
import { LineCounter } from './parse/line-counter.js';
import { Parser } from './parse/parser.js';

function parseOptions(options) {
    const prettyErrors = options.prettyErrors !== false;
    const lineCounter = options.lineCounter || (prettyErrors && new LineCounter()) || null;
    return { lineCounter, prettyErrors };
}
/**
 * Parse the input as a stream of YAML documents.
 *
 * Documents should be separated from each other by `...` or `---` marker lines.
 *
 * @returns If an empty `docs` array is returned, it will be of type
 *   EmptyStream and contain additional stream information. In
 *   TypeScript, you should use `'empty' in docs` as a type guard for it.
 */
function parseAllDocuments(source, options = {}) {
    const { lineCounter, prettyErrors } = parseOptions(options);
    const parser = new Parser(lineCounter?.addNewLine);
    const composer = new Composer(options);
    const docs = Array.from(composer.compose(parser.parse(source)));
    if (prettyErrors && lineCounter)
        for (const doc of docs) {
            doc.errors.forEach(prettifyError(source, lineCounter));
            doc.warnings.forEach(prettifyError(source, lineCounter));
        }
    if (docs.length > 0)
        return docs;
    return Object.assign([], { empty: true }, composer.streamInfo());
}
/** Parse an input string into a single YAML.Document */
function parseDocument(source, options = {}) {
    const { lineCounter, prettyErrors } = parseOptions(options);
    const parser = new Parser(lineCounter?.addNewLine);
    const composer = new Composer(options);
    // `doc` is always set by compose.end(true) at the very latest
    let doc = null;
    for (const _doc of composer.compose(parser.parse(source), true, source.length)) {
        if (!doc)
            doc = _doc;
        else if (doc.options.logLevel !== 'silent') {
            doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), 'MULTIPLE_DOCS', 'Source contains multiple documents; please use YAML.parseAllDocuments()'));
            break;
        }
    }
    if (prettyErrors && lineCounter) {
        doc.errors.forEach(prettifyError(source, lineCounter));
        doc.warnings.forEach(prettifyError(source, lineCounter));
    }
    return doc;
}
function parse(src, reviver, options) {
    let _reviver = undefined;
    if (typeof reviver === 'function') {
        _reviver = reviver;
    }
    else if (options === undefined && reviver && typeof reviver === 'object') {
        options = reviver;
    }
    const doc = parseDocument(src, options);
    if (!doc)
        return null;
    doc.warnings.forEach(warning => warn(doc.options.logLevel, warning));
    if (doc.errors.length > 0) {
        if (doc.options.logLevel !== 'silent')
            throw doc.errors[0];
        else
            doc.errors = [];
    }
    return doc.toJS(Object.assign({ reviver: _reviver }, options));
}
function stringify(value, replacer, options) {
    let _replacer = null;
    if (typeof replacer === 'function' || Array.isArray(replacer)) {
        _replacer = replacer;
    }
    else if (options === undefined && replacer) {
        options = replacer;
    }
    if (typeof options === 'string')
        options = options.length;
    if (typeof options === 'number') {
        const indent = Math.round(options);
        options = indent < 1 ? undefined : indent > 8 ? { indent: 8 } : { indent };
    }
    if (value === undefined) {
        const { keepUndefined } = options ?? replacer ?? {};
        if (!keepUndefined)
            return undefined;
    }
    if (isDocument(value) && !_replacer)
        return value.toString(options);
    return new Document(value, _replacer, options).toString(options);
}

export { parse, parseAllDocuments, parseDocument, stringify };
