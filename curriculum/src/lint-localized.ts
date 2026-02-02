import path from 'node:path';

import { configure } from '@freecodecamp/challenge-linter';

import { testedLang } from './config';

const CONFIG_PATH = path.resolve(__dirname, '../challenges/.markdownlint.yaml');

const { lintAll } = configure(CONFIG_PATH);

lintAll(`challenges/${testedLang()}/**/*.md`);
