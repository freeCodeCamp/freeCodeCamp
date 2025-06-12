import { challengeTypes } from '../../../../../shared/config/challenge-types';

import type { ChallengeFile } from '../../../redux/prop-types';
import { concatHtml } from '../rechallenge/builders';
import {
  getTransformers,
  embedFilesInHtml,
  getPythonTransformers,
  getMultifileJSXTransformers
} from '../rechallenge/transformers';
import {
  runTestInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer,
  ProxyLogger,
  Context,
  Source,
  prepTestRunner
} from './frame';

interface BuildChallengeData extends Context {
  challengeType: number;
  challengeFiles?: ChallengeFile[];
  required: { src?: string }[];
  template: string;
  url: string;
}

interface BuildOptions {
  preview: boolean;
  disableLoopProtectTests: boolean;
  disableLoopProtectPreview: boolean;
  usesTestRunner?: boolean;
}

type ApplyFunctionProps = (
  file: ChallengeFile
) => Promise<ChallengeFile> | ChallengeFile;

const applyFunction =
  (fn: ApplyFunctionProps) => async (file: ChallengeFile) => {
    try {
      if (file.error) {
        return file;
      }
      const newFile = await fn.call(this, file);
      if (typeof newFile !== 'undefined') {
        return newFile;
      }
      return file;
    } catch (error) {
      return { ...file, error };
    }
  };

const composeFunctions = (...fns: ApplyFunctionProps[]) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

function buildSourceMap(challengeFiles: ChallengeFile[]): Source | undefined {
  // TODO: rename sources.index to sources.contents.
  const source: Source | undefined = challengeFiles?.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || '';
      sources.contents = sources.index;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    {
      index: '',
      editableContents: ''
    } as Source
  );
  return source;
}

export const buildFunctions = {
  [challengeTypes.js]: buildJSChallenge,
  [challengeTypes.jsProject]: buildJSChallenge,
  [challengeTypes.html]: buildDOMChallenge,
  [challengeTypes.modern]: buildDOMChallenge,
  [challengeTypes.backend]: buildBackendChallenge,
  [challengeTypes.backEndProject]: buildBackendChallenge,
  [challengeTypes.pythonProject]: buildBackendChallenge,
  [challengeTypes.multifileCertProject]: buildDOMChallenge,
  [challengeTypes.colab]: buildBackendChallenge,
  [challengeTypes.python]: buildPythonChallenge,
  [challengeTypes.multifilePythonCertProject]: buildPythonChallenge,
  [challengeTypes.lab]: buildDOMChallenge,
  [challengeTypes.jsLab]: buildJSChallenge,
  [challengeTypes.pyLab]: buildPythonChallenge,
  [challengeTypes.dailyChallengeJs]: buildJSChallenge,
  [challengeTypes.dailyChallengePy]: buildPythonChallenge
};

export function canBuildChallenge(challengeData: BuildChallengeData): boolean {
  const { challengeType } = challengeData;
  return Object.prototype.hasOwnProperty.call(buildFunctions, challengeType);
}

export async function buildChallenge(
  challengeData: BuildChallengeData,
  options: BuildOptions
) {
  const { challengeType } = challengeData;
  const build = buildFunctions[challengeType];
  if (build) {
    return build(challengeData, options);
  }
  throw new Error(`Cannot build challenge of type ${challengeType}`);
}

export const runnerTypes: Record<number, 'javascript' | 'dom' | 'python'> = {
  [challengeTypes.js]: 'javascript',
  [challengeTypes.html]: 'dom',
  [challengeTypes.backend]: 'dom',
  [challengeTypes.jsProject]: 'javascript',
  [challengeTypes.pythonProject]: 'python',
  [challengeTypes.python]: 'python',
  [challengeTypes.modern]: 'dom',
  [challengeTypes.multifileCertProject]: 'dom',
  [challengeTypes.multifilePythonCertProject]: 'python',
  [challengeTypes.lab]: 'dom',
  [challengeTypes.jsLab]: 'javascript',
  [challengeTypes.pyLab]: 'python',
  [challengeTypes.dailyChallengeJs]: 'javascript',
  [challengeTypes.dailyChallengePy]: 'python'
};

export async function getTestRunner(buildData: BuildChallengeData) {
  const { challengeType } = buildData;
  const type = runnerTypes[challengeType];
  if (!type) {
    throw new Error(
      `Cannot get test runner for challenge type ${challengeType}`
    );
  }
  await prepTestRunner({ ...buildData, type });

  return (testString: string, testTimeout: number) =>
    runTestInTestFrame(testString, testTimeout, type);
}

type BuildResult = {
  challengeType: number;
  build?: string;
  sources: Source | undefined;
  loadEnzyme?: boolean;
  error?: unknown;
};

// TODO: All the buildXChallenge files have a similar structure, so make that
// abstraction (function, class, whatever) and then create the various functions
// out of it.
export async function buildDOMChallenge(
  {
    challengeFiles,
    required = [],
    template = '',
    challengeType
  }: BuildChallengeData,
  options?: BuildOptions
): Promise<BuildResult> {
  // TODO: make this required in the schema.
  if (!challengeFiles) throw Error('No challenge files provided');
  const hasJsx = challengeFiles.some(
    challengeFile => challengeFile.ext === 'jsx'
  );
  const isMultifile = challengeFiles.length > 1;

  const requiresReact16 = required.some(({ src }) =>
    src?.includes('https://cdnjs.cloudflare.com/ajax/libs/react/16.')
  );

  // I'm reasonably sure this is fine, but we need to migrate transformers to
  // TypeScript to be sure.
  const transformers: ApplyFunctionProps[] = (isMultifile && hasJsx
    ? getMultifileJSXTransformers(options)
    : getTransformers(options)) as unknown as ApplyFunctionProps[];

  const pipeLine = composeFunctions(...transformers);
  const finalFiles = await Promise.all(challengeFiles.map(pipeLine));
  const error = finalFiles.find(({ error }) => error)?.error;
  const contents = (await embedFilesInHtml(finalFiles)) as string;

  // if there is an error, we just build the test runner so that it can be
  // used to run tests against the code without actually running the code.
  const toBuild = error
    ? {}
    : {
        required,
        template,
        contents
      };

  return {
    challengeType,
    build: concatHtml(toBuild),
    sources: buildSourceMap(finalFiles),
    loadEnzyme: requiresReact16,
    error
  };
}

export async function buildJSChallenge(
  {
    challengeFiles,
    challengeType
  }: { challengeFiles?: ChallengeFile[]; challengeType: number },
  options: BuildOptions
): Promise<BuildResult> {
  if (!challengeFiles) throw Error('No challenge files provided');
  const pipeLine = composeFunctions(
    ...(getTransformers(options) as unknown as ApplyFunctionProps[])
  );

  const finalFiles = await Promise.all(challengeFiles?.map(pipeLine));
  const error = finalFiles.find(({ error }) => error)?.error;

  const toBuild = error ? [] : finalFiles;

  return {
    challengeType,
    build: toBuild
      .reduce(
        (body, challengeFile) => [
          ...body,
          challengeFile.head,
          challengeFile.contents,
          challengeFile.tail
        ],
        [] as string[]
      )
      .join('\n'),
    sources: buildSourceMap(finalFiles),
    error
  };
}

function buildBackendChallenge({ url, challengeType }: BuildChallengeData) {
  return {
    challengeType,
    build: '',
    sources: { contents: url }
  };
}

export async function buildPythonChallenge({
  challengeFiles,
  challengeType
}: BuildChallengeData): Promise<BuildResult> {
  if (!challengeFiles) throw new Error('No challenge files provided');
  const pipeLine = composeFunctions(
    ...(getPythonTransformers() as unknown as ApplyFunctionProps[])
  );
  const finalFiles = await Promise.all(challengeFiles.map(pipeLine));
  const error = finalFiles.find(({ error }) => error)?.error;
  const sources = buildSourceMap(finalFiles);

  return {
    challengeType,
    sources,
    build: sources?.contents,
    error
  };
}

export function updatePreview(
  buildData: BuildChallengeData,
  document: Document,
  proxyLogger: ProxyLogger
): Promise<void> {
  if (challengeHasPreview(buildData)) {
    return new Promise<void>(resolve =>
      createMainPreviewFramer(
        document,
        proxyLogger,
        getDocumentTitle(buildData),
        resolve
      )(buildData)
    );
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

function getDocumentTitle(buildData: BuildChallengeData) {
  // Give iframe a title attribute for accessibility using the preview
  // document's <title>.

  const parser = new DOMParser();
  const doc = parser.parseFromString(buildData?.sources?.index, 'text/html');
  const title = doc.querySelector('title');

  return title?.innerText ?? 'challenge';
}

export function updateProjectPreview(
  buildData: BuildChallengeData,
  document: Document
): void {
  if (challengeHasPreview(buildData)) {
    createProjectPreviewFramer(
      document,
      getDocumentTitle(buildData)
    )(buildData);
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

export function challengeHasPreview({
  challengeType
}: {
  challengeType: number;
}): boolean {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject ||
    challengeType === challengeTypes.multifilePythonCertProject ||
    challengeType === challengeTypes.python ||
    challengeType === challengeTypes.lab ||
    challengeType === challengeTypes.pyLab ||
    challengeType === challengeTypes.dailyChallengePy
  );
}

export function isJavaScriptChallenge({
  challengeType
}: {
  challengeType: number;
}): boolean {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.jsProject ||
    challengeType === challengeTypes.jsLab ||
    challengeType === challengeTypes.dailyChallengeJs
  );
}
