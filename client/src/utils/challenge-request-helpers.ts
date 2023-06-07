import { ChallengeFiles } from '../redux/prop-types';

/*
 * Express's body-parser has a default size limit of 102400 bytes for a request body.
 * These helper functions make sure the request body isn't too big when saving or submitting multifile cert projects
 */

export const MAX_BODY_SIZE = 102400;

interface StandardizeRequestBodyArgs {
  id: string;
  challengeFiles: ChallengeFiles;
  challengeType: number;
}

interface File {
  contents: string;
  ext: string;
  history: string[];
  key: string;
  name: string;
}

interface Body {
  id: string;
  files?: File[];
  challengeType: number;
}

export function standardizeRequestBody({
  id,
  challengeFiles = [],
  challengeType
}: StandardizeRequestBodyArgs): Body {
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

export function getStringSizeInBytes(str = ''): number {
  const stringSizeInBytes = new Blob([JSON.stringify(str)]).size;

  return stringSizeInBytes;
}

export function bodySizeFits(bodySizeInBytes: number): boolean {
  return bodySizeInBytes <= MAX_BODY_SIZE;
}
