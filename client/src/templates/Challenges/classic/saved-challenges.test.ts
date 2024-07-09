import type {
  ChallengeFile,
  SavedChallengeFile
} from '../../../redux/prop-types';
import { mergeChallengeFiles } from './saved-challenges';

const jsChallenge = {
  id: '1',
  contents: 'js contents',
  fileKey: 'jsFileKey',
  name: 'name',
  ext: 'js' as const,
  head: 'head',
  tail: 'tail',
  history: [],
  seed: 'original js contents'
};

const cssChallenge = {
  id: '2',
  contents: 'css contents',
  fileKey: 'cssFileKey',
  name: 'name',
  ext: 'css' as const,
  head: 'head',
  tail: 'tail',
  history: [],
  seed: 'original css contents'
};

const htmlChallenge = {
  id: '3',
  contents: 'html contents',
  fileKey: 'htmlFileKey',
  name: 'name',
  ext: 'html' as const,
  head: 'head',
  tail: 'tail',
  history: [],
  seed: 'original html contents'
};

const savedJsChallenge: SavedChallengeFile = {
  contents: 'saved js contents',
  fileKey: 'jsFileKey',
  name: 'name',
  ext: 'js' as const
};

const savedCssChallenge: SavedChallengeFile = {
  contents: 'saved css contents',
  fileKey: 'cssFileKey',
  name: 'name',
  ext: 'css' as const
};

const savedHtmlChallenge: SavedChallengeFile = {
  contents: 'saved html contents',
  fileKey: 'htmlFileKey',
  name: 'name',
  ext: 'html' as const
};

describe('mergeChallengeFiles', () => {
  it('should return files if savedChallengeFiles is undefined', () => {
    const files: ChallengeFile[] = [htmlChallenge];
    const savedChallengeFiles = undefined;

    const result = mergeChallengeFiles(files, savedChallengeFiles);

    expect(result).toEqual(files);
  });

  it('should return an empty array if files is undefined', () => {
    const files = undefined;
    const savedChallengeFiles = [savedJsChallenge];

    const result = mergeChallengeFiles(files, savedChallengeFiles);

    expect(result).toEqual([]);
  });

  it('should return files if savedChallengeFiles has a different length', () => {
    const files: ChallengeFile[] = [cssChallenge];
    const savedChallengeFiles: SavedChallengeFile[] = [
      savedCssChallenge,
      savedJsChallenge
    ];

    const result = mergeChallengeFiles(files, savedChallengeFiles);

    expect(result).toEqual(files);
  });

  it('should return files if the fileKey properties do not match', () => {
    const files: ChallengeFile[] = [jsChallenge, cssChallenge];
    const savedChallengeFiles: SavedChallengeFile[] = [
      savedHtmlChallenge,
      savedCssChallenge
    ];

    const result = mergeChallengeFiles(files, savedChallengeFiles);

    expect(result).toEqual(files);
  });

  it('should use the contents from the saved file', () => {
    const files: ChallengeFile[] = [cssChallenge, htmlChallenge, jsChallenge];
    const savedChallengeFiles = [
      savedJsChallenge,
      savedCssChallenge,
      savedHtmlChallenge
    ];

    const result = mergeChallengeFiles(files, savedChallengeFiles);

    expect(result).toEqual([
      {
        ...cssChallenge,
        contents: savedCssChallenge.contents
      },
      {
        ...htmlChallenge,
        contents: savedHtmlChallenge.contents
      },
      {
        ...jsChallenge,
        contents: savedJsChallenge.contents
      }
    ]);
  });
});
