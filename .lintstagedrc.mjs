import lintstaged from '@freecodecamp/eslint-config/lintstaged';

export default {
  ...lintstaged,
  './curriculum/challenges/**/*.md': files =>
    files.map(filename => `node ./tools/scripts/lint/index.js '${filename}'`)
};
