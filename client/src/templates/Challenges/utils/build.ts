import frameRunnerData from '../../../../../config/client/frame-runner.json';
import testEvaluatorData from '../../../../../config/client/test-evaluator.json';
import { challengeTypes } from '../../../../utils/challenge-types';
import {
  ChallengeFile as PropTypesChallengeFile,
  ChallengeMeta
} from '../../../redux/prop-types';
import { concatHtml } from '../rechallenge/builders.js';
import { getTransformers, embedFilesInHtml } from '../rechallenge/transformers';
import {
  createTestFramer,
  runTestInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer,
  ProxyLogger,
  TestRunnerConfig,
  Context,
  Source
} from './frame';
import createWorker from './worker-executor';

const _concatHtml = ({
  required,
  template,
  contents
}: {
  required: { src: string }[];
  template?: string;
  contents?: string;
}): string => {
  return concatHtml({ required, template, contents });
};

interface ChallengeFile extends PropTypesChallengeFile {
  source: string;
  index: string;
  editableContents: string;
}

type ChallengeFiles = ChallengeFile[];

interface BuildChallengeData extends Context {
  challengeType: number;
  challengeFiles: ChallengeFiles;
  required: { src: string }[];
  template: string;
  url: string;
}

interface BuildOptions {
  preview: boolean;
  protect: boolean;
  usesTestRunner: boolean;
}

const { filename: runner } = frameRunnerData;
const { filename: testEvaluator } = testEvaluatorData;

const frameRunner = [
  {
    src: `/js/${runner}.js`
  }
];

type ApplyFunctionProps = (file: ChallengeFile) => Promise<ChallengeFile>;

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

function buildSourceMap(challengeFiles: ChallengeFiles): Source | undefined {
  // TODO: rename sources.index to sources.contents.
  const source: Source | undefined = challengeFiles?.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || '';
      sources.contents = sources.index;
      sources.original[challengeFile.history[0]] = challengeFile.source;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    { index: '', editableContents: '', original: {} } as Source
  );
  return source;
}

function checkFilesErrors(challengeFiles: ChallengeFiles): ChallengeFiles {
  const errors = challengeFiles
    .filter(({ error }) => error)
    .map(({ error }) => error);
  if (errors.length) {
    throw errors;
  }
  return challengeFiles;
}

const buildFunctions = {
  [challengeTypes.js]: buildJSChallenge,
  [challengeTypes.jsProject]: buildJSChallenge,
  [challengeTypes.html]: buildDOMChallenge,
  [challengeTypes.modern]: buildDOMChallenge,
  [challengeTypes.backend]: buildBackendChallenge,
  [challengeTypes.backEndProject]: buildBackendChallenge,
  [challengeTypes.pythonProject]: buildBackendChallenge,
  [challengeTypes.multifileCertProject]: buildDOMChallenge
};

export function canBuildChallenge(challengeData: BuildChallengeData) {
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

const testRunners = {
  [challengeTypes.js]: getJSTestRunner,
  [challengeTypes.html]: getDOMTestRunner,
  [challengeTypes.backend]: getDOMTestRunner,
  [challengeTypes.pythonProject]: getDOMTestRunner,
  [challengeTypes.multifileCertProject]: getDOMTestRunner
};
export function getTestRunner(
  buildData: BuildChallengeData,
  runnerConfig: TestRunnerConfig,
  document: Document
) {
  const { challengeType } = buildData;
  const testRunner = testRunners[challengeType];
  if (testRunner) {
    return testRunner(buildData, runnerConfig, document);
  }
  throw new Error(`Cannot get test runner for challenge type ${challengeType}`);
}

function getJSTestRunner(
  { build, sources }: BuildChallengeData,
  { proxyLogger, removeComments }: TestRunnerConfig
) {
  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const testWorker = createWorker(testEvaluator, { terminateWorker: true });

  type CreateWorker = ReturnType<typeof createWorker>;

  interface TestWorker extends CreateWorker {
    on: (event: string, listener: (...args: string[]) => void) => void;
    done: () => void;
  }

  return (testString: string, testTimeout: number, firstTest = true) => {
    const result = testWorker.execute(
      { build, testString, code, sources, firstTest, removeComments },
      testTimeout
    ) as TestWorker;

    result.on('LOG', proxyLogger);
    return result.done;
  };
}

async function getDOMTestRunner(
  buildData: BuildChallengeData,
  { proxyLogger }: TestRunnerConfig,
  document: Document
) {
  await new Promise<void>(resolve =>
    createTestFramer(document, proxyLogger, resolve)(buildData)
  );
  return (testString: string, testTimeout: number) =>
    runTestInTestFrame(document, testString, testTimeout);
}

export function buildDOMChallenge(
  { challengeFiles, required = [], template = '' }: BuildChallengeData,
  { usesTestRunner } = { usesTestRunner: false }
) {
  const finalRequires = [...required];
  if (usesTestRunner) finalRequires.push(...frameRunner);

  const loadEnzyme = challengeFiles?.some(
    challengeFile => challengeFile.ext === 'jsx'
  );

  const pipeLine = composeFunctions(...getTransformers());
  const finalFiles = challengeFiles?.map(pipeLine);

  if (finalFiles) {
    return Promise.all(finalFiles)
      .then(checkFilesErrors)
      .then(embedFilesInHtml)
      .then(([_challengeFiles, _contents]) => {
        const challengeFiles = _challengeFiles as ChallengeFiles;
        const contents = _contents as string;

        return {
          challengeType:
            challengeTypes.html || challengeTypes.multifileCertProject,
          build: _concatHtml({
            required: finalRequires,
            template,
            contents
          }),
          sources: buildSourceMap(challengeFiles),
          loadEnzyme
        };
      });
  }
}

export function buildJSChallenge(
  { challengeFiles }: { challengeFiles: ChallengeFiles },
  options: BuildOptions
) {
  const pipeLine = composeFunctions(...getTransformers(options));

  const finalFiles = challengeFiles?.map(pipeLine);
  if (finalFiles) {
    return Promise.all(finalFiles)
      .then(checkFilesErrors)
      .then(challengeFiles => ({
        challengeType: challengeTypes.js,
        build: challengeFiles
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
        sources: buildSourceMap(challengeFiles)
      }));
  }
}

export function buildBackendChallenge({ url }: BuildChallengeData) {
  return {
    challengeType: challengeTypes.backend,
    build: _concatHtml({ required: frameRunner }),
    sources: { url }
  };
}

export function updatePreview(
  buildData: BuildChallengeData,
  document: Document,
  proxyLogger: ProxyLogger
) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
    createMainPreviewFramer(
      document,
      proxyLogger,
      getDocumentTitle(buildData)
    )(buildData);
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
) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
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

export function challengeHasPreview({ challengeType }: ChallengeMeta) {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject
  );
}

export function isJavaScriptChallenge({ challengeType }: ChallengeMeta) {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.jsProject
  );
}

export function isLoopProtected(challengeMeta: ChallengeMeta) {
  return challengeMeta.superBlock !== 'coding-interview-prep';
}
