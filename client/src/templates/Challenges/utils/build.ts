import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import type { ChallengeFile } from '@freecodecamp/shared/utils/polyvinyl';

import { runnerTypes } from '@freecodecamp/challenge-builder/build';

import {
  runTestsInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer,
  ProxyLogger,
  Context,
  prepTestRunner
} from './frame';

interface BuildChallengeData extends Context {
  challengeType: number;
  challengeFiles?: ChallengeFile[];
  required: { src?: string }[];
  template: string;
  url: string;
}

export async function getTestRunner(buildData: BuildChallengeData) {
  const { challengeType } = buildData;
  // TODO: Fully type BuildChallengeData
  const type =
    runnerTypes[challengeType as unknown as keyof typeof runnerTypes];
  if (!type) {
    throw new Error(
      `Cannot get test runner for challenge type ${challengeType}`
    );
  }
  await prepTestRunner({ ...buildData, type });

  return (testStrings: string[], testTimeout: number) =>
    runTestsInTestFrame(testStrings, testTimeout, type);
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
