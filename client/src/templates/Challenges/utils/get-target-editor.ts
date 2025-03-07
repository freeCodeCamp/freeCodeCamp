import { isEmpty } from 'lodash-es';
import { sortChallengeFiles } from '../../../../utils/sort-challengefiles';
import { ChallengeFiles } from '../../../redux/prop-types';

export function getTargetEditor(challengeFiles: ChallengeFiles): string | null {
  if (isEmpty(challengeFiles)) return null;

  const targetEditor = challengeFiles?.find(
    ({ editableRegionBoundaries }) => !isEmpty(editableRegionBoundaries)
  )?.fileKey;

  // fallback for when there is no editable region.

  return targetEditor || sortChallengeFiles(challengeFiles ?? [])[0].fileKey;
}
