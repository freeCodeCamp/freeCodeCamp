import { ChallengeFile, SavedChallengeFile } from '../../../redux/prop-types';

export function mergeChallengeFiles(
  files?: ChallengeFile[] | null,
  savedFiles?: SavedChallengeFile[] | null
): ChallengeFile[] {
  if (!files) return [];
  if (!savedFiles) return files;
  if (files.length !== savedFiles.length) return files;

  const sortedChallengeFiles = files.sort((a, b) =>
    a.fileKey.localeCompare(b.fileKey)
  );
  const sortedSavedChallengeFiles = savedFiles.sort((a, b) =>
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
