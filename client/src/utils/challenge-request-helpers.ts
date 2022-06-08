import { ChallengeFiles } from '../redux/prop-types';

/*
 * Express's body-parser has a default size limit of 102400 bytes for a request body.
 * These helper functions make sure the request body isn't too big when saving or submitting multifile cert projects
 */

export const MAX_BODY_SIZE = 102400;

interface StandardizeRequestBodyArgs {
  id: string;
  challengeFiles: ChallengeFiles;
  challengeType?: number;
  solution?: string;
  githubLink?: string;
}

export function standardizeRequestBody({
  id,
  challengeFiles = [],
  challengeType,
  solution,
  githubLink
}: StandardizeRequestBodyArgs) {
  if (!challengeType) {
    // Zipline is stupid
    return { id, solution };
  }
  if (solution && githubLink) {
    return { challengeType, id, githubLink, solution };
  }
  if (solution) {
    return { challengeType, id, solution };
  }
  return {
    id,
    files: challengeFiles?.map(({ fileKey, contents, ext, name, history }) => {
      return {
        contents,
        ext,
        history,
        key: fileKey,
        name
      };
    }),
    challengeType
  };
}

export function getStringSizeInBytes(str = '') {
  const stringSizeInBytes = new Blob([JSON.stringify(str)]).size;

  return stringSizeInBytes;
}

export function bodySizeFits(bodySizeInBytes: number) {
  return bodySizeInBytes <= MAX_BODY_SIZE;
}
