// originally based off of https://github.com/gulpjs/vinyl
import invariant from 'invariant';
import { Observable } from 'rx';
import castToObservable from '../app/utils/cast-to-observable.js';


// createFileStream(
//   files: Dictionary[Path, PolyVinyl]
// ) => Observable[...Observable[...PolyVinyl]]
export function createFileStream(files = {}) {
  return Observable.of(
    Observable.from(Object.keys(files).map(key => files[key]))
  );
}

// Observable::pipe(
//  project(
//    file: PolyVinyl
//  ) => PolyVinyl|Observable[PolyVinyl]|Promise[PolyVinyl]
// ) => Observable[...Observable[...PolyVinyl]]
export function pipe(project) {
  const source = this;
  return source.map(
    files => files.flatMap(file => castToObservable(project(file)))
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
export function createPoly({
  name,
  ext,
  contents,
  history,
  ...rest
} = {}) {
  invariant(
    typeof name === 'string',
    'name must be a string but got %s',
    name
  );

  invariant(
    typeof ext === 'string',
    'ext must be a string, but was %s',
    ext
  );

  invariant(
    typeof contents === 'string',
    'contents must be a string but got %s',
    contents
  );

  return {
    ...rest,
    history: Array.isArray(history) ? history : [ name + ext ],
    name,
    ext,
    path: name + '.' + ext,
    key: name + ext,
    contents,
    error: null
  };
}

// isPoly(poly: Any) => Boolean
export function isPoly(poly) {
  return poly &&
    typeof poly.contents === 'string' &&
    typeof poly.name === 'string' &&
    typeof poly.ext === 'string' &&
    Array.isArray(poly.history);
}

// checkPoly(poly: Any) => Void, throws
export function checkPoly(poly) {
  invariant(
    isPoly(poly),
    'function should receive a PolyVinyl, but got %s',
    poly
  );
}

// isEmpty(poly: PolyVinyl) => Boolean, throws
export function isEmpty(poly) {
  checkPoly(poly);
  return !!poly.contents;
}

// setContent(contents: String, poly: PolyVinyl) => PolyVinyl
// setContent will loose source if set
export function setContent(contents, poly) {
  checkPoly(poly);
  return {
    ...poly,
    contents,
    source: null
  };
}

// setExt(contents: String, poly: PolyVinyl) => PolyVinyl
export function setExt(ext, poly) {
  checkPoly(poly);
  const newPoly = {
    ...poly,
    ext,
    path: poly.name + '.' + ext,
    key: poly.name + ext
  };
  newPoly.history = [ ...poly.history, newPoly.path ];
  return newPoly;
}

// setName(contents: String, poly: PolyVinyl) => PolyVinyl
export function setName(name, poly) {
  checkPoly(poly);
  const newPoly = {
    ...poly,
    name,
    path: name + '.' + poly.ext,
    key: name + poly.ext
  };
  newPoly.history = [ ...poly.history, newPoly.path ];
  return newPoly;
}

// setError(contents: String, poly: PolyVinyl) => PolyVinyl
export function setError(error, poly) {
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
export function clearHeadTail(poly) {
  checkPoly(poly);
  return {
    ...poly,
    head: '',
    tail: ''
  };
}

// compileHeadTail(contents: String, poly: PolyVinyl) => PolyVinyl
export function compileHeadTail(padding = '', poly) {
  return clearHeadTail(setContent(
    [ poly.head, poly.contents, poly.tail ].join(padding),
    poly
  ));
}

// transformContents(
//   wrap: (contents: String) => String,
//   poly: PolyVinyl
// ) => PolyVinyl
// transformContents will keep a copy of the original
// code in the `source` property. If the original polyvinyl
// already contains a source, this version will continue as
// the source property
export function transformContents(wrap, poly) {
  const newPoly = setContent(
    wrap(poly.contents),
    poly
  );
  // if no source exist, set the original contents as source
  newPoly.source = poly.contents || poly.contents;
  return newPoly;
}

// transformHeadTailAndContents(
//   wrap: (source: String) => String,
//   poly: PolyVinyl
// ) => PolyVinyl
export function transformHeadTailAndContents(wrap, poly) {
  return {
    ...setContent(
      wrap(poly.contents),
      poly
    ),
    head: wrap(poly.head),
    tail: wrap(poly.tail)
  };
}
