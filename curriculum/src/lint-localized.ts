import path from 'node:path';
import { globSync } from 'glob';
import { configure, processLintErrors } from '@freecodecamp/challenge-linter';
import { CURRICULUM_LOCALE } from './config';

const CONFIG_PATH = path.resolve(__dirname, '../challenges/.markdownlint.yaml');
const { lint } = configure(CONFIG_PATH);

const files = globSync(`challenges/${CURRICULUM_LOCALE}/**/*.md`);

const runLint = async () => {
  const results = await lint(files);
  const errors = processLintErrors(results);

  if (errors.length > 0) {
    errors.forEach(({ file, errors: fileErrors }) => {
      console.log('Errors in file', file);
      console.log(fileErrors);
    });
    process.exit(1);
  }
};

void runLint();
