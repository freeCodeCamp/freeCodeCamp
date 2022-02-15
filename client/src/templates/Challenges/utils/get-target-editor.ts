import { isEmpty } from 'lodash-es';
import { sortChallengeFiles } from '../../../../../utils/sort-challengefiles';
import { ChallengeFiles, FileKey } from '../../../redux/prop-types';

export function getTargetEditor(
  challengeFiles: ChallengeFiles
): FileKey | null {
  if (isEmpty(challengeFiles)) return null;

  const targetEditor = challengeFiles?.find(
    ({ editableRegionBoundaries }) => !isEmpty(editableRegionBoundaries)
  )?.fileKey;

  // fallback for when there is no editable region.
  /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
  return targetEditor || sortChallengeFiles(challengeFiles)[0].fileKey;
}
