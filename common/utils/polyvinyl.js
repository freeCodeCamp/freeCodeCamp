// originally base off of https://github.com/gulpjs/vinyl
import path from 'path';
import replaceExt from 'replace-ext';
import invariant from 'invariant';

// interface PolyVinyl {
//   contents: String,
//   path: String,
//   history: [...String],
//   error: Null|Object
// }
//
// createPoly({
//   path: String,
//   contents: String,
//   history?: [...String],
// }) => PolyVinyl, throws
export function createPoly({ path, contents, history } = {}) {
  invariant(
    typeof path === 'string',
    'path must be a string but got %s',
    path
  );

  invariant(
    typeof contents === 'string',
    'contents must be a string but got %s',
    contents
  );

  return {
    history: Array.isArray(history) ? history : [ path ],
    path: path,
    contents: contents,
    error: null
  };
}

// isPoly(poly: Any) => Boolean
export function isPoly(poly) {
  return poly &&
    typeof poly.contents === 'string' &&
    typeof poly.path === 'string' &&
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

// updateContents(contents: String, poly: PolyVinyl) => PolyVinyl
export function updateContents(contents, poly) {
  checkPoly(poly);
  return {
    ...poly,
    contents
  };
}

export function getExt(poly) {
  checkPoly(poly);
  invariant(
    !!poly.path,
    'No path specified! Can not get extname'
  );
  return path.extname(poly.path);
}

export function setExt(extname, poly) {
  invariant(
    poly.path,
    'No path specified! Can not set extname',
  );
  const newPoly = {
    ...poly,
    path: replaceExt(this.path, extname)
  };
  newPoly.history = [ ...poly.history, newPoly.path ];
  return newPoly;
}

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
