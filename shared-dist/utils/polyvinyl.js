"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPoly = createPoly;
exports.isPoly = isPoly;
exports.setContent = setContent;
exports.regenerateMissingProperties = regenerateMissingProperties;
exports.compileHeadTail = compileHeadTail;
exports.transformContents = transformContents;
exports.transformHeadTailAndContents = transformHeadTailAndContents;
exports.createSource = createSource;
const exts = ['js', 'html', 'css', 'jsx', 'ts', 'tsx', 'py'];
function createPoly({ name, ext, contents, history, ...rest }) {
    if (typeof name !== 'string')
        throw new TypeError('name must be a string');
    if (typeof ext !== 'string')
        throw new TypeError('ext must be a string');
    if (typeof contents !== 'string')
        throw new TypeError('contents must be a string');
    return {
        ...rest,
        history: Array.isArray(history) ? history : [name + '.' + ext],
        name,
        ext,
        path: name + '.' + ext,
        fileKey: name + ext,
        contents,
        error: null
    };
}
function isPoly(poly) {
    function hasProperties(poly) {
        return (!!poly &&
            typeof poly === 'object' &&
            'contents' in poly &&
            'name' in poly &&
            'ext' in poly &&
            'fileKey' in poly &&
            'head' in poly &&
            'tail' in poly &&
            'history' in poly);
    }
    const hasCorrectTypes = (poly) => typeof poly.contents === 'string' &&
        typeof poly.name === 'string' &&
        exts.includes(poly.ext) &&
        typeof poly.fileKey === 'string' &&
        typeof poly.head === 'string' &&
        typeof poly.tail === 'string' &&
        Array.isArray(poly.history);
    return hasProperties(poly) && hasCorrectTypes(poly);
}
function checkPoly(poly) {
    if (!isPoly(poly))
        throw Error('Not a PolyVinyl: ' + JSON.stringify(poly));
}
// setContent will lose source if not supplied
function setContent(contents, poly, source) {
    checkPoly(poly);
    return {
        ...poly,
        contents,
        source
    };
}
// This is currently only used to add back properties that are not stored in the
// database.
function regenerateMissingProperties(file) {
    const newPath = file.name + '.' + file.ext;
    const newFile = {
        ...file,
        path: newPath,
        history: [newPath],
        head: file.head ?? '',
        tail: file.tail ?? ''
    };
    return newFile;
}
async function clearHeadTail(polyP) {
    const poly = await polyP;
    checkPoly(poly);
    return {
        ...poly,
        head: '',
        tail: ''
    };
}
async function compileHeadTail(padding = '', poly) {
    return clearHeadTail(transformContents(() => [poly.head, poly.contents, poly.tail].join(padding), poly));
}
// transformContents will keep a copy of the original
// code in the `source` property. If the original polyvinyl
// already contains a source, this version will continue as
// the source property
async function transformContents(wrap, polyP) {
    const poly = await polyP;
    const newPoly = setContent(await wrap(poly.contents), poly, poly.source);
    return newPoly;
}
async function transformHeadTailAndContents(wrap, polyP) {
    const poly = await polyP;
    const contents = await transformContents(wrap, poly);
    const head = await wrap(poly.head);
    const tail = await wrap(poly.tail);
    return {
        ...contents,
        head,
        tail
    };
}
// createSource(poly: PolyVinyl) => PolyVinyl
function createSource(poly) {
    return {
        ...poly,
        source: poly.source ?? poly.contents
    };
}
