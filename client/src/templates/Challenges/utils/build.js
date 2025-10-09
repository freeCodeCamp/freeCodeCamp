import frameRunnerData from '../../../../../config/client/frame-runner.json';
import testEvaluatorData from '../../../../../config/client/test-evaluator.json';
import { challengeTypes } from '../../../../utils/challenge-types';
import { concatHtml } from '../rechallenge/builders.js';
import { getTransformers, embedFilesInHtml } from '../rechallenge/transformers';
import {
  createTestFramer,
  runTestInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer
} from './frame';
import createWorker from './worker-executor';

const { filename: runner } = frameRunnerData;
const { filename: testEvaluator } = testEvaluatorData;

const frameRunner = [
  {
    src: `/js/${runner}.js`
  }
];

const applyFunction = fn =>
  async function (file) {
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

const composeFunctions = (...fns) =>
  fns.map(applyFunction).reduce((f, g) => x => f(x).then(g));

function buildSourceMap(challengeFiles) {
  // TODO: rename sources.index to sources.contents.
  const source = challengeFiles.reduce(
    (sources, challengeFile) => {
      sources.index += challengeFile.source || challengeFile.contents;
      sources.contents = sources.index;
      sources.original[challengeFile.history[0]] = challengeFile.source;
      sources.editableContents += challengeFile.editableContents || '';
      return sources;
    },
    { index: '', editableContents: '', original: {} }
  );
  return source;
}

function checkFilesErrors(challengeFiles) {
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

export function canBuildChallenge(challengeData) {
  const { challengeType } = challengeData;
  return Object.prototype.hasOwnProperty.call(buildFunctions, challengeType);
}

export async function buildChallenge(challengeData, options) {
  const { challengeType } = challengeData;
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
  [challengeTypes.multifileCertProject]: getDOMTestRunner
};
export function getTestRunner(buildData, runnerConfig, document) {
  const { challengeType } = buildData;
  const testRunner = testRunners[challengeType];
  if (testRunner) {
    return testRunner(buildData, runnerConfig, document);
  }
  throw new Error(`Cannot get test runner for challenge type ${challengeType}`);
}

function getJSTestRunner({ build, sources }, { proxyLogger, removeComments }) {
  const code = {
    contents: sources.index,
    editableContents: sources.editableContents
  };

  const testWorker = createWorker(testEvaluator, { terminateWorker: true });

  return (testString, testTimeout, firstTest = true) => {
    return testWorker
      .execute(
        { build, testString, code, sources, firstTest, removeComments },
        testTimeout
      )
      .on('LOG', proxyLogger).done;
  };
}

async function getDOMTestRunner(buildData, { proxyLogger }, document) {
  await new Promise(resolve =>
    createTestFramer(document, proxyLogger, resolve)(buildData)
  );
  return (testString, testTimeout) =>
    runTestInTestFrame(document, testString, testTimeout);
}

export function buildDOMChallenge(
  { challengeFiles, required = [], template = '' },
  { usesTestRunner } = { usesTestRunner: false }
) {
  const finalRequires = [...required];
  if (usesTestRunner) finalRequires.push(...frameRunner);

  const loadEnzyme = challengeFiles.some(
    challengeFile => challengeFile.ext === 'jsx'
  );
  const pipeLine = composeFunctions(...getTransformers());
  const finalFiles = challengeFiles.map(pipeLine);
  return Promise.all(finalFiles)
    .then(checkFilesErrors)
    .then(embedFilesInHtml)
    .then(([challengeFiles, contents]) => {
      return {
        challengeType:
          challengeTypes.html || challengeTypes.multifileCertProject,
        build: concatHtml({
          required: finalRequires,
          template,
          contents
        }),
        sources: buildSourceMap(challengeFiles),
        loadEnzyme
      };
    });
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

  const finalFiles = await Promise.all(challengeFiles.map(pipeLine));
  const error = finalFiles.find(({ error }) => error)?.error;

  if (error) {
    return {
      challengeType,
      build: '',
      sources: buildSourceMap(finalFiles),
      error
    };
  }

  // 🔹 Step 1: Concatenate all code sections together (head + contents + tail)
  const unifiedCode = finalFiles
    .map(file => `${file.head || ''}\n${file.contents || ''}\n${file.tail || ''}`)
    .join('\n');

  // 🔹 Step 2: Transpile everything together using Babel
  const transpiled = Babel.transform(unifiedCode, {
    presets: ['env']
  }).code;

  // 🔹 Step 3: Return the transpiled code for execution
  return {
    challengeType,
    build: transpiled,
    sources: buildSourceMap(finalFiles),
    error: undefined
  };
}

export function buildBackendChallenge({ url }) {
  return {
    challengeType: challengeTypes.backend,
    build: concatHtml({ required: frameRunner }),
    sources: { url }
  };
}

export function updatePreview(buildData, document, proxyLogger) {
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

export function updateProjectPreview(buildData, document) {
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

export function challengeHasPreview({ challengeType }) {
  return (
    challengeType === challengeTypes.html ||
    challengeType === challengeTypes.modern ||
    challengeType === challengeTypes.multifileCertProject
  );
}

export function isJavaScriptChallenge({ challengeType }) {
  return (
    challengeType === challengeTypes.js ||
    challengeType === challengeTypes.bonfire
  );
}

export function isLoopProtected(challengeMeta) {
  return challengeMeta.superBlock !== 'Coding Interview Prep';
}
