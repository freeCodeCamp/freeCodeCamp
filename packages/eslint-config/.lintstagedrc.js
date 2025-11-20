import { ESLint } from 'eslint';

const cli = new ESLint();

export default {
  '*.(mjs|js|ts|tsx)': async files => {
    const ignoredIds = await Promise.all(
      files.map(file => cli.isPathIgnored(file))
    );
    const lintableFiles = files.filter((_, i) => !ignoredIds[i]);
    const prettierCommand = [
      ...files.map(filename => `prettier --write '${filename}'`)
    ];

    // There should be at least one lintable file if we reach here, but if not,
    // just run prettier.
    return lintableFiles.length === 0
      ? prettierCommand
      : [
          'eslint --max-warnings=0 --cache --fix ' + lintableFiles.join(' '),
          ...prettierCommand
        ];
  },
  '*.!(mjs|js|ts|tsx|css)': files =>
    files.map(filename => `prettier --write --ignore-unknown '${filename}'`),

  '*.css': files => [
    ...files.map(filename => `stylelint --fix '${filename}'`),
    ...files.map(filename => `prettier --write '${filename}'`)
  ]
};
