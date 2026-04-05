/* eslint-disable filenames-simple/naming-convention */
import path from 'node:path';
import { createLintStagedConfig } from '@freecodecamp/eslint-config/lintstaged';

const linterConfigPath = path.resolve(
  import.meta.dirname,
  './challenges/.markdownlint.yaml'
);
const fixSeedSemicolonsPath = path.resolve(
  import.meta.dirname,
  './src/fix-seed-semicolons.ts'
);

const shellEscape = value => `'${value.replaceAll("'", `'\\''`)}'`;

export default {
  ...createLintStagedConfig(import.meta.dirname),
  './challenges/**/*.md': files => {
    const fileArgs = files.map(shellEscape).join(' ');

    return [
      `pnpm tsx ${shellEscape(fixSeedSemicolonsPath)} ${fileArgs}`,
      `pnpm tsx ${shellEscape(fixSeedSemicolonsPath)} --check ${fileArgs}`,
      ...files.map(
        filename =>
          `pnpm challenge-linter --config ${shellEscape(
            linterConfigPath
          )} ${shellEscape(filename)}`
      )
    ];
  }
};
