// originally based off of https://github.com/gulpjs/vinyl
const invariant = require('invariant');
const { of, from, isObservable } = require('rxjs');
const { map, switchMap } = require('rxjs/operators');

function isPromise(value) {
  return (
    value &&
    typeof value.subscribe !== 'function' &&
    typeof value.then === 'function'
  );
}

function castToObservable(maybe) {
  if (isObservable(maybe)) {
    return maybe;
  }
  if (isPromise(maybe)) {
    return from(maybe);
  }
  return of(maybe);
}

// createFileStream(
//   files: [...PolyVinyl]
// ) => Observable[...Observable[...PolyVinyl]]
function createFileStream(files = []) {
  return of(from(files));
}

// Observable::pipe(
//  project(
//    file: PolyVinyl
//  ) => PolyVinyl|Observable[PolyVinyl]|Promise[PolyVinyl]
// ) => Observable[...Observable[...PolyVinyl]]
function pipe(project) {
  const source = this;
  return source.pipe(
    map(files => {
      return files.pipe(switchMap(file => castToObservable(project(file))));
    })
  );
}

// interface PolyVinyl {
//   source: String,
//   contents: String,
//   name: String,
//   ext: String,
//   path: String,
//   key: String,
//   head: String,
//   tail: String,
//   history: [...String],
//   error: Null|Object|Error
// }

// createPoly({
//   name: String,
//   ext: String,
//   contents: String,
//   history?: [...String],
// }) => PolyVinyl, throws
function createPoly({ name, ext, contents, history, ...rest } = {}) {
  invariant(typeof name === 'string', 'name must be a string but got %s', name);

  invariant(typeof ext === 'string', 'ext must be a string, but was %s', ext);

  invariant(
    typeof contents === 'string',
    'contents must be a string but got %s',
    contents
  );

  return {
    ...rest,
    history: Array.isArray(history) ? history : [name + '.' + ext],
    name,
    ext,
    path: name + '.' + ext,
    key: name + ext,
    contents,
    error: null
  };
}

// isPoly(poly: Any) => Boolean
function isPoly(poly) {
  return (
    poly &&
    typeof poly.contents === 'string' &&
    typeof poly.name === 'string' &&
    typeof poly.ext === 'string' &&
    Array.isArray(poly.history)
  );
}

// checkPoly(poly: Any) => Void, throws
function checkPoly(poly) {
  invariant(
    isPoly(poly),
    'function should receive a PolyVinyl, but got %s',
    poly
  );
}

// isEmpty(poly: PolyVinyl) => Boolean, throws
function isEmpty(poly) {
  checkPoly(poly);
  return !!poly.contents;
}

// setContent(contents: String, poly: PolyVinyl) => PolyVinyl
// setContent will loose source if set
function setContent(contents, poly) {
  checkPoly(poly);
  return {
    ...poly,
    contents,
    source: null
  };
}

// setExt(ext: String, poly: PolyVinyl) => PolyVinyl
function setExt(ext, poly) {
  checkPoly(poly);
  const newPoly = {
    ...poly,
    ext,
    path: poly.name + '.' + ext,
    key: poly.name + ext
  };
  newPoly.history = [...poly.history, newPoly.path];
  return newPoly;
}

// setName(name: String, poly: PolyVinyl) => PolyVinyl
function setName(name, poly) {
  checkPoly(poly);
  const newPoly = {
    ...poly,
    name,
    path: name + '.' + poly.ext,
    key: name + poly.ext
  };
  newPoly.history = [...poly.history, newPoly.path];
  return newPoly;
}

// setError(error: Object, poly: PolyVinyl) => PolyVinyl
function setError(error, poly) {
  invariant(
    typeof error === 'object',
    'error must be an object or null, but got %',
    error
  );
  checkPoly(poly);
  return {
    ...poly,
    error
  };
}

// clearHeadTail(poly: PolyVinyl) => PolyVinyl
function clearHeadTail(poly) {
  checkPoly(poly);
  return {
    ...poly,
    head: '',
    tail: ''
  };
}

// appendToTail (tail: String, poly: PolyVinyl) => PolyVinyl
function appendToTail(tail, poly) {
  checkPoly(poly);
  return {
    ...poly,
    tail: poly.tail.concat(tail)
  };
}

// compileHeadTail(padding: String, poly: PolyVinyl) => PolyVinyl
function compileHeadTail(padding = '', poly) {
  return clearHeadTail(
    transformContents(
      () => [poly.head, poly.contents, poly.tail].join(padding),
      poly
    )
  );
}

// transformContents(
//   wrap: (contents: String) => String,
//   poly: PolyVinyl
// ) => PolyVinyl
// transformContents will keep a copy of the original
// code in the `source` property. If the original polyvinyl
// already contains a source, this version will continue as
// the source property
function transformContents(wrap, poly) {
  const newPoly = setContent(wrap(poly.contents), poly);
  // if no source exist, set the original contents as source
  newPoly.source = poly.source || poly.contents;
  return newPoly;
}

// transformHeadTailAndContents(
//   wrap: (source: String) => String,
//   poly: PolyVinyl
// ) => PolyVinyl
function transformHeadTailAndContents(wrap, poly) {
  return {
    ...transformContents(wrap, poly),
    head: wrap(poly.head),
    tail: wrap(poly.tail)
  };
}

function testContents(predicate, poly) {
  return !!predicate(poly.contents);
}

function updateFileFromSpec(spec, poly) {
  return setContent(poly.contents, createPoly(spec));
}

module.exports = {
  isPromise,
  castToObservable,
  createFileStream,
  pipe,
  createPoly,
  isPoly,
  checkPoly,
  isEmpty,
  setContent,
  setExt,
  setName,
  setError,
  clearHeadTail,
  appendToTail,
  compileHeadTail,
  transformContents,
  transformHeadTailAndContents,
  testContents,
  updateFileFromSpec
};
