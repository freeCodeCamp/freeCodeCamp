import { ChallengeFiles } from '../redux/prop-types';

interface UniformizeChallengeSizeProps {
  id: string;
  challengeFiles: ChallengeFiles;
  challengeType: number;
}

/*
 * express's body-parser has a default size limit of 102400 bytes for a request body
 * this returns a uniform object that is used to check the size of a multifileCertProject
 * used when saving, submitting, or sending the request for either of those
 */

export function uniformizeChallengeSize({
  id,
  challengeFiles = [],
  challengeType
}: UniformizeChallengeSizeProps) {
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
