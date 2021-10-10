import { isEmpty } from 'lodash-es';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';

// Check whether to take "ext" and "fileKey" from prop-types.ts
type ChallengeFilesType = {
  fileKey: string;
  head: string;
  tail: string;
  editableRegionBoundaries: number[];
  history: string[];
  name: string;
  ext: string;
  path: string;
  contents: string;
  error: string | null;
  seed: string;
  editableContents: string;
  seedEditableRegionBoundaries: number[];
};

export function getTargetEditor(
  challengeFiles: ChallengeFilesType[]
): string | null {
  if (isEmpty(challengeFiles)) return null;
  else {
    const targetEditor = challengeFiles.find(
      ({ editableRegionBoundaries }) => !isEmpty(editableRegionBoundaries)
    )?.fileKey;

    // fallback for when there is no editable region.
    return (
      targetEditor ||
      (sortChallengeFiles(challengeFiles) as ChallengeFilesType[])[0].fileKey
    );
  }
}
