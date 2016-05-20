// originally base off of https://github.com/gulpjs/vinyl
import invariant from 'invariant';

// interface PolyVinyl {
//   contents: String,
//   name: String,
//   ext: String,
//   path: String,
//   key: String,
//   head: String,
//   tail: String,
//   history: [...String],
//   error: Null|Object
// }
//
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

// updateContents(contents: String, poly: PolyVinyl) => PolyVinyl
export function updateContents(contents, poly) {
  checkPoly(poly);
  return {
    ...poly,
    contents
  };
}

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
