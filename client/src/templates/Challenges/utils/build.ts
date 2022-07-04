import frameRunnerData from '../../../../../config/client/frame-runner.json';
import testEvaluatorData from '../../../../../config/client/test-evaluator.json';
import { challengeTypes } from '../../../../utils/challenge-types';
import {
  ChallengeFile,
  ChallengeFiles,
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
  TestRunnerConfig
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

interface SourceMap {
  index: string;
  contents?: string;
  editableContents: string;
  original: { [key: string]: string };
}

interface ChallengeData {
  window: Window;
  document: Document;
  element: HTMLIFrameElement;
  challengeType: number;
  challengeFiles: ChallengeFiles;
  required: { src: string }[];
  template: string;
  url: string;
  build: string;
  sources: SourceMap;
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

const applyFunction =
  (fn: (file: ChallengeFile) => Promise<ChallengeFile>) =>
  async (file: ChallengeFile) => {
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

type ComposeFunctionProps = (file: ChallengeFile) => Promise<ChallengeFile>;

const composeFunctions = (...fns: ComposeFunctionProps[]) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

function buildSourceMap(challengeFiles: ChallengeFiles): SourceMap | undefined {
  // TODO: rename sources.index to sources.contents.
  const source: SourceMap | undefined = challengeFiles?.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || challengeFile.contents;
      // sources.contents = sources.index;
      sources.original[challengeFile.history[0]] = challengeFile.source;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    { index: '', editableContents: '', original: {} } as SourceMap
  );
  return source;
}

function checkFilesErrors(challengeFiles: ChallengeFile[]): ChallengeFile[] {
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
  [challengeTypes.bonfire]: buildJSChallenge,
  [challengeTypes.html]: buildDOMChallenge,
  [challengeTypes.modern]: buildDOMChallenge,
  [challengeTypes.backend]: buildBackendChallenge,
  [challengeTypes.backEndProject]: buildBackendChallenge,
  [challengeTypes.pythonProject]: buildBackendChallenge,
  [challengeTypes.multifileCertProject]: buildDOMChallenge
};

export function canBuildChallenge(challengeData: ChallengeData) {
  const { challengeType } = challengeData;
  return Object.prototype.hasOwnProperty.call(buildFunctions, challengeType);
}

export async function buildChallenge(
  challengeData: ChallengeData,
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
  buildData: ChallengeData,
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
  { build, sources }: ChallengeData,
  { proxyLogger, removeComments }: TestRunnerConfig
) {
  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const testWorker = createWorker(testEvaluator, { terminateWorker: true });

  return (testString: string, testTimeout: number, firstTest = true) => {
    const result = testWorker.execute(
      { build, testString, code, sources, firstTest, removeComments },
      testTimeout
    );

    result.on('LOG', proxyLogger);
    result.done;
  };
}

async function getDOMTestRunner(
  buildData: ChallengeData,
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
  { challengeFiles, required = [], template = '' }: ChallengeData,
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

export function buildBackendChallenge({ url }: ChallengeData) {
  return {
    challengeType: challengeTypes.backend,
    build: _concatHtml({ required: frameRunner }),
    sources: { url }
  };
}

export function updatePreview(
  buildData: ChallengeData,
  document: Document,
  proxyLogger: ProxyLogger
) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
    createMainPreviewFramer(document, proxyLogger)(buildData);
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

export function updateProjectPreview(
  buildData: ChallengeData,
  document: Document
) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multifileCertProject
  ) {
    // Give iframe a title attribute for accessibility using the preview
    // document's <title>.
    const titleMatch = buildData?.sources?.index?.match(
      /<title>(.*?)<\/title>/
    );
    const frameTitle = titleMatch
      ? titleMatch[1].trim() + ' preview'
      : 'preview';
    createProjectPreviewFramer(document, frameTitle)(buildData);
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
    challengeType === challengeTypes.bonfire
  );
}

export function isLoopProtected(challengeMeta: ChallengeMeta) {
  return challengeMeta.superBlock !== 'coding-interview-prep';
}
