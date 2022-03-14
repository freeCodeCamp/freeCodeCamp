import { ChallengeFiles } from '../redux/prop-types';

/*
 * Express's body-parser has a default size limit of 102400 bytes for a request body.
 * These helper functions make sure the request body isn't too big when saving or submitting multiFile cert projects
 */

export const MAX_BODY_SIZE = 102400;

interface UniformizeRequestBodyArgs {
  id: string;
  challengeFiles: ChallengeFiles;
  challengeType: number;
}

export function uniformizeRequestBody({
  id,
  challengeFiles = [],
  challengeType
}: UniformizeRequestBodyArgs) {
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
  if (bodySizeInBytes > MAX_BODY_SIZE) {
    return false;
  }
  return true;
}

