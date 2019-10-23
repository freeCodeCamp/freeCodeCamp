/* eslint-env node */

const types = [
  {
    value: 'feat',
    name: 'feat:     A new challenge or feature is being added.'
  },
  {
    value: 'fix',
    name: `fix:      Modifying an existing challenge, fixing a bug, text, 
            or updating challenge tests.`
  },
  {
    value: 'docs',
    name: 'docs:     Documentation only changes to readme, guides, etc.'
  },
  {
    value: 'test',
    name: `test:     Adding missing tests to tooling (NOT to be used for tests 
            inside challenges).`
  },
  {
    value: 'chore',
    name: `chore:    Changes to the build process or auxiliary tools
            and libraries such as documentation generation.`
  },
  {
    value: 'revert',
    name: 'revert:   Revert a commit.'
  }
];

const scopes = ['challenges', 'tools', 'scripts'].map(name => ({
  name
}));

module.exports = {
  types,
  scopes,
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'perf', 'refactor']
};
