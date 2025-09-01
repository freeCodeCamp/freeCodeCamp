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

// https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa#unicode_strings
function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, byte => String.fromCodePoint(byte)).join(
    ''
  );
  return btoa(binString);
}

export function standardizeRequestBody({
  id,
  challengeFiles = [],
  challengeType
}: StandardizeRequestBodyArgs): string {
  const body: Body = {
    id,
    files: challengeFiles?.map(({ fileKey, contents, ext, name, history }) => {
      return {
        contents,
        ext,
        history, // TODO(Post-MVP): stop sending history, if possible. The client
        // already gets it from the curriculum, so it should not be necessary to
        // save it in the db.
        key: fileKey,
        name
      };
    }),
    challengeType
  };

  return bytesToBase64(new TextEncoder().encode(JSON.stringify(body)));
}

export function getStringSizeInBytes(str = ''): number {
  const stringSizeInBytes = new Blob([JSON.stringify(str)]).size;

  return stringSizeInBytes;
}

export function bodySizeFits(bodySizeInBytes: number): boolean {
  return bodySizeInBytes <= MAX_BODY_SIZE;
}
