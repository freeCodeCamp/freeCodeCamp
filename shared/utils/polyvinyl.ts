// originally based off of https://github.com/gulpjs/vinyl
import invariant from 'invariant';

const exts = ['js', 'html', 'css', 'jsx', 'ts', 'py'] as const;
export type Ext = (typeof exts)[number];

export type IncompleteChallengeFile = {
  fileKey: string;
  ext: Ext;
  name: string;
  contents: string;
};

export type ChallengeFile = IncompleteChallengeFile & {
  editableRegionBoundaries?: number[];
  editableContents?: string;
  usesMultifileEditor?: boolean;
  error?: unknown;
  head: string;
  tail: string;
  seed?: string;
  source?: string | null;
  path: string;
  history: string[];
};

type PolyProps = {
  name: string;
  ext: string;
  contents: string;
  history?: string[];
};

// The types are a little awkward, but should suffice until we move the
// curriculum to TypeScript.
type AddedProperties = {
  path: string;
  fileKey: string;
  error: null;
};

export function createPoly<Rest>({
  name,
  ext,
  contents,
  history,
  ...rest
}: PolyProps & Rest): PolyProps & AddedProperties & Rest {
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
    fileKey: name + ext,
    contents,
    error: null
  } as PolyProps & AddedProperties & Rest;
}

export function isPoly(poly: unknown): poly is ChallengeFile {
  function hasProperties(poly: unknown): poly is Record<string, unknown> {
    return (
      !!poly &&
      typeof poly === 'object' &&
      'contents' in poly &&
      'name' in poly &&
      'ext' in poly &&
      'fileKey' in poly &&
      'head' in poly &&
      'tail' in poly &&
      'history' in poly
    );
  }

  const hasCorrectTypes = (poly: Record<string, unknown>): boolean =>
    typeof poly.contents === 'string' &&
    typeof poly.name === 'string' &&
    exts.includes(poly.ext as Ext) &&
    typeof poly.fileKey === 'string' &&
    typeof poly.head === 'string' &&
    typeof poly.tail === 'string' &&
    Array.isArray(poly.history);

  return hasProperties(poly) && hasCorrectTypes(poly);
}

function checkPoly(poly: ChallengeFile) {
  invariant(
    isPoly(poly),
    'function should receive a PolyVinyl, but got %s',
    JSON.stringify(poly)
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

// This is currently only used to add back properties that are not stored in the
// database.
export function regeneratePathAndHistory(file: IncompleteChallengeFile) {
  const newPath = file.name + '.' + file.ext;
  const newFile = {
    ...file,
    path: newPath,
    history: [newPath]
  };
  return newFile;
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
export async function transformContents(
  wrap: Wrapper,
  polyP: ChallengeFile | Promise<ChallengeFile>
) {
  const poly = await polyP;
  const newPoly = setContent(await wrap(poly.contents), poly);
  // if no source exist, set the original contents as source
  newPoly.source = poly.source || poly.contents;
  return newPoly;
}

export async function transformHeadTailAndContents(
  wrap: Wrapper,
  polyP: ChallengeFile | Promise<ChallengeFile>
) {
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
export function createSource(poly: Pick<ChallengeFile, 'contents' | 'source'>) {
  return {
    ...poly,
    source: poly.source || poly.contents
  };
}
