export function sortChallengeFiles<File extends { fileKey: string }>(
  challengeFiles: File[]
): File[] {
  return challengeFiles.toSorted((a, b) => {
    if (a.fileKey === 'indexjsx') return -1;
    if (b.fileKey === 'indexjsx') return 1;
    if (a.fileKey === 'indexhtml') return -1;
    if (b.fileKey === 'indexhtml') return 1;
    if (a.fileKey === 'stylescss') return -1;
    if (b.fileKey === 'stylescss') return 1;
    if (a.fileKey === 'scriptjs') return -1;
    if (b.fileKey === 'scriptjs') return 1;
    if (a.fileKey === 'indexts') return -1;
    if (b.fileKey === 'indexts') return 1;
    return 0;
  });
}
