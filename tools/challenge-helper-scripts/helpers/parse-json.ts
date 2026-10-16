import fs from 'fs/promises';

import { withTrace } from './utils.js';

export type BlockInfo = {
  title: string;
  intro: string[];
};

export type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
  chapters?: Record<string, string>;
  modules?: Record<string, string>;
  'module-intros'?: Record<
    string,
    {
      intro: string[];
      note?: string;
      title?: string;
    }
  >;
};

export type IntroJson = Record<string, SuperBlockInfo>;

export function parseIntroJson(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    // unfortunately, withTrace does not correctly infer that the third argument
    // is a string, so it uses the (path, options?) overload and we have to cast
    // result to string.
    result => JSON.parse(result as string) as IntroJson
  );
}
