// the config files are created during the build, but not before linting
// eslint-disable-next-line import/no-unresolved
import frameRunnerData from '../../../../../config/client/frame-runner.json';
// eslint-disable-next-line import/no-unresolved
import testEvaluatorData from '../../../../../config/client/test-evaluator.json';
import {challengeTypes} from '../../../../utils/challenge-types';
import {concatHtml, cssToHtml, jsToHtml} from '../rechallenge/builders.js';
import {getTransformers} from '../rechallenge/transformers';
import {createMainPreviewFramer, createProjectPreviewFramer, createTestFramer, runTestInTestFrame} from './frame';
import createWorker from './worker-executor';

interface File {
  error?: any;
}

interface FnType {
  call: (arg0: () => File, arg1: File) => any;
}

interface ChallengeDataType {
  superBlock: string;
  sources: any;
  challengeType: any,
  challengeFiles: any,
  required?: any[] | undefined;
  template?: string | undefined,
  url: any;
}

interface RunnerConfigType {
  proxyLogger: any,
  removeComments: any
}

interface ObjectWithLink {
  url: any,
}

const {filename: runner} = frameRunnerData;
const {filename: testEvaluator} = testEvaluatorData;

const frameRunner = [
  {
    src: `/js/${runner}.js`
  }
];

const applyFunction: (fn: FnType) => File = (fn) =>


  async function (file: File) {
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
      return {...file, error};
    }
  };

const composeFunctions = (...fns: FnType[]) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

function buildSourceMap(challengeFiles: any[]) {
  // TODO: rename sources.index to sources.contents.
  return challengeFiles.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || challengeFile.contents;
      sources.contents = sources.index;
      sources.original[challengeFile.history[0]] = challengeFile.source;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    {index: '', editableContents: '', original: {}}
  );
}

function checkFilesErrors(challengeFiles: any[]) {
  const errors = challengeFiles
    .filter(({error}) => error)
    .map(({error}) => error);
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
  [challengeTypes.multiFileCertProject]: buildDOMChallenge
};

export function canBuildChallenge(challengeData: ChallengeDataType) {
  const {challengeType} = challengeData;
  return Object.prototype.hasOwnProperty.call(buildFunctions, challengeType);
}

export async function buildChallenge(challengeData: ChallengeDataType, options: any) {
  const {challengeType} = challengeData;
  let build = buildFunctions[challengeType];
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
  [challengeTypes.multiFileCertProject]: getDOMTestRunner
};

export function getTestRunner(buildData: ChallengeDataType, runnerConfig: RunnerConfigType, document: undefined) {
  const {challengeType} = buildData;
  const testRunner = testRunners[challengeType];
  if (testRunner) {
    return testRunner(buildData, runnerConfig, document);
  }
  throw new Error(`Cannot get test runner for challenge type ${challengeType}`);
}

function getJSTestRunner({build, sources}: any, {proxyLogger, removeComments}: RunnerConfigType) {
  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const testWorker = createWorker(testEvaluator, {terminateWorker: true});

  return (testString: string, testTimeout: number | undefined, firstTest: boolean = true) => {
    return testWorker
      .execute(
        {build, testString, code, sources, firstTest, removeComments},
        testTimeout
      )
      .on('LOG', proxyLogger).done;
  };
}

async function getDOMTestRunner(buildData: any, {proxyLogger}: RunnerConfigType, document: any) {
  await new Promise(resolve =>
    createTestFramer(document, proxyLogger, resolve)(buildData)
  );
  return (testString: string, testTimeout: number) =>
    runTestInTestFrame(document, testString, testTimeout);
}

export function buildDOMChallenge(
  {challengeFiles, required = [], template = ''}: ChallengeDataType,
  {usesTestRunner} = {usesTestRunner: false}
) {
  const finalRequires = [...required];
  if (usesTestRunner) finalRequires.push(...frameRunner);

  const loadEnzyme = challengeFiles.some(
    // @ts-ignore
    challengeFile => challengeFile.ext === 'jsx'
  );
  const toHtml = [jsToHtml, cssToHtml];
  const pipeLine = composeFunctions(...getTransformers(), ...toHtml);
  const finalFiles = challengeFiles.map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then(challengeFiles => {
      return {
        challengeType:
          challengeTypes.html || challengeTypes.multiFileCertProject,
        build: concatHtml({
          required: finalRequires,
          template,
          challengeFiles
        }),
        sources: buildSourceMap(challengeFiles),
        loadEnzyme
      };
    });
}

export function buildJSChallenge({challengeFiles}: ChallengeDataType, options: any) {
  const pipeLine = composeFunctions(...getTransformers(options));

  const finalFiles = challengeFiles.map(pipeLine);
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
          []
        )
        .join('\n'),
      sources: buildSourceMap(challengeFiles)
    }));
}

export function buildBackendChallenge({url}: ObjectWithLink) {
  return {
    challengeType: challengeTypes.backend,
    // @ts-ignore
    build: concatHtml({required: frameRunner}),
    sources: {url}
  };
}

export function updatePreview(buildData: ChallengeDataType, document: any, proxyLogger: RunnerConfigType) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multiFileCertProject
  ) {
    createMainPreviewFramer(document, proxyLogger)(buildData);
  } else {
    throw new Error(
      `Cannot show preview for challenge type ${buildData.challengeType}`
    );
  }
}

export function updateProjectPreview(buildData: ChallengeDataType, document: any) {
  if (
    buildData.challengeType === challengeTypes.html ||
    buildData.challengeType === challengeTypes.multiFileCertProject
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

export function challengeHasPreview({challengeType}: ChallengeDataType) {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multiFileCertProject
  );
}

export function isJavaScriptChallenge({challengeType}: ChallengeDataType) {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.bonfire
  );
}

export function isLoopProtected(challengeMeta: ChallengeDataType) {
  return challengeMeta.superBlock !== 'Coding Interview Prep';
}
