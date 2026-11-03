const quote = value => `'${value.replaceAll("'", "'\\''")}'`;

export const createLintStagedConfig = () => ({
  '*.{mjs,cjs,js,jsx,ts,tsx}': files => [
    `oxlint --deny-warnings --fix --no-error-on-unmatched-pattern ${files.map(quote).join(' ')}`,
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
