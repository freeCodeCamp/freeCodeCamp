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

export function hasUnsavedChanges(
  challengeFiles: ChallengeFile[] | null | undefined,
  lastSavedFiles: ChallengeFile[]
): boolean {
  if (!challengeFiles) return false;
  return challengeFiles.some(file => {
    const savedFile = lastSavedFiles.find(
      saved => saved.fileKey === file.fileKey
    );
    return savedFile?.contents !== file.contents;
  });
}
