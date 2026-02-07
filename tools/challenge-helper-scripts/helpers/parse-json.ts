import fs from 'fs/promises';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { withTrace } from './utils.js';

export type BlockInfo = {
  title: string;
  intro: string[];
};

export type SuperBlockInfo = {
  blocks: Record<string, BlockInfo>;
};

export type IntroJson = Record<SuperBlocks, SuperBlockInfo>;

export function parseJson<JsonSchema>(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    // unfortunately, withTrace does not correctly infer that the third argument
    // is a string, so it uses the (path, options?) overload and we have to cast
    // result to string.
    result => JSON.parse(result as string) as JsonSchema
  );
}
