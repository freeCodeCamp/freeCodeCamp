import path from 'node:path';

const quote = value => `'${value.replaceAll("'", "'\\''")}'`;

export const createLintStagedConfig = cwd => ({
  '*.{mjs,cjs,js,jsx,ts,tsx}': files => [
    `oxlint --deny-warnings --fix --no-error-on-unmatched-pattern --config ${quote(path.join(cwd, 'oxlint.config.ts'))} ${files.map(quote).join(' ')}`,
    ...files.map(filename => `prettier --write ${quote(filename)}`)
  ],
  '*.!(mjs|cjs|js|jsx|ts|tsx|css|md)': files =>
    files.map(
      filename => `prettier --write --ignore-unknown ${quote(filename)}`
    ),
  '*.css': files => [
    ...files.map(filename => `stylelint --fix ${quote(filename)}`),
    ...files.map(filename => `prettier --write ${quote(filename)}`)
  ]
});
