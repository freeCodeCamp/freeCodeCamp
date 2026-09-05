import { ChallengeFile, SavedChallengeFile } from '../../../redux/prop-types';

export function mergeChallengeFiles(
  files?: ChallengeFile[] | null,
  savedFiles?: SavedChallengeFile[] | null
): ChallengeFile[] {
  if (!files) return [];
  if (!savedFiles) return files;
  if (files.length !== savedFiles.length) return files;

  const sortedChallengeFiles = files.toSorted((a, b) =>
    a.fileKey.localeCompare(b.fileKey)
  );
  const sortedSavedChallengeFiles = savedFiles.toSorted((a, b) =>
    a.fileKey.localeCompare(b.fileKey)
  );

  const fileKeysMatch = sortedChallengeFiles.every(
    (file, index) => file.fileKey === sortedSavedChallengeFiles[index].fileKey
  );

  if (!fileKeysMatch) return files;

  return sortedChallengeFiles.map((file, index) => ({
    ...file,
    contents: sortedSavedChallengeFiles[index].contents,
    editableRegionBoundaries:
      sortedSavedChallengeFiles[index].editableRegionBoundaries
  }));
}

type FileContents = Pick<ChallengeFile, 'fileKey' | 'contents'>;

// A camper's work is only at risk if it differs from every copy it could be
// restored from, so the caller passes one baseline per recoverable copy (the
// challenge saved to the account, and the localStorage copy written by the
// code-storage epic).
export function hasUnsavedChanges(
  challengeFiles: ChallengeFile[] | null | undefined,
  baselines: FileContents[][]
): boolean {
  if (!challengeFiles) return false;
  return baselines.every(baseline =>
    challengeFiles.some(file => {
      const baselineFile = baseline.find(
        saved => saved.fileKey === file.fileKey
      );
      return baselineFile?.contents !== file.contents;
    })
  );
}
