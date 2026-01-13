import { ChallengeFiles } from '../../../redux/prop-types';

export const combineFileData = (challengeFiles: ChallengeFiles): string => {
  if (!challengeFiles || challengeFiles.length === 0) {
    return '';
  }

  return challengeFiles.reduce<string>((allFiles, currentFile) => {
    const beforeText = `** start of ${currentFile.name}.${currentFile.ext} **\n\n`;
    const afterText = `\n\n** end of ${currentFile.name}.${currentFile.ext} **\n\n`;
    allFiles += `${beforeText}${currentFile.contents}${afterText}`;
    return allFiles;
  }, '');
};
