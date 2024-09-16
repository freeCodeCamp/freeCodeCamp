// originally based off of https://github.com/gulpjs/vinyl
import invariant from 'invariant';

export type Ext = 'js' | 'html' | 'css' | 'jsx';

export type ChallengeFile = {
  fileKey: string;
  contents: string;
  name: string;
  ext: Ext;
  head: string;
  tail: string;
  seed: string;
  source: string | null;
  id: string;
  history: string[];
  editableRegionBoundaries?: number[];
  editableContents?: string;
  usesMultifileEditor?: boolean;
  error?: unknown;
};

// TODO: increase the number of properties checked once we're sure that won't
// break anything.
export function isPoly(poly: unknown): poly is ChallengeFile {
  return (
    !!poly &&
    typeof poly === 'object' &&
    'contents' in poly &&
    typeof poly.contents === 'string' &&
    'name' in poly &&
    typeof poly.name === 'string' &&
    'ext' in poly &&
    typeof poly.ext === 'string' &&
    'history' in poly &&
    Array.isArray(poly.history)
  );
}

function checkPoly(poly: ChallengeFile) {
  invariant(
    isPoly(poly),
    'function should receive a PolyVinyl, but got %s',
    poly
  );
}

// setContent will lose source if set
export function setContent(
  contents: string,
  poly: ChallengeFile
): ChallengeFile {
  checkPoly(poly);
  return {
    ...poly,
    contents,
    source: null
  };
}

export async function setExt(ext: string, polyP: Promise<ChallengeFile>) {
  const poly = await polyP;
  checkPoly(poly);
  const newPoly = {
    ...poly,
    ext,
    path: poly.name + '.' + ext,
    fileKey: poly.name + ext
  };
  newPoly.history = [...poly.history, newPoly.path];
  return newPoly;
}

// This is currently only used to add back properties that are not stored in the
// database.
export function regeneratePathAndHistory(poly: ChallengeFile) {
  const newPath = poly.name + '.' + poly.ext;
  const newPoly = {
    ...poly,
    path: newPath,
    history: [newPath]
  };
  checkPoly(newPoly);
  return newPoly;
}

async function clearHeadTail(polyP: Promise<ChallengeFile>) {
  const poly = await polyP;
  checkPoly(poly);
  return {
    ...poly,
    head: '',
    tail: ''
  };
}

export async function compileHeadTail(padding = '', poly: ChallengeFile) {
  return clearHeadTail(
    transformContents(
      () => [poly.head, poly.contents, poly.tail].join(padding),
      poly
    )
  );
}

type Wrapper = (x: string) => Promise<string> | string;
// transformContents will keep a copy of the original
// code in the `source` property. If the original polyvinyl
// already contains a source, this version will continue as
// the source property
export async function transformContents(wrap: Wrapper, poly: ChallengeFile) {
  const newPoly = setContent(await wrap(poly.contents), poly);
  // if no source exist, set the original contents as source
  newPoly.source = poly.source || poly.contents;
  return newPoly;
}

export async function transformHeadTailAndContents(
  wrap: Wrapper,
  poly: ChallengeFile
) {
  const contents = await transformContents(wrap, poly);
  const head = await wrap(poly.head);
  const tail = await wrap(poly.tail);
  return {
    ...contents,
    head,
    tail
  };
}

export function createSource(poly: ChallengeFile) {
  return {
    ...poly,
    source: poly.source || poly.contents
  };
}
