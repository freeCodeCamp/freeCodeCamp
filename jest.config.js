module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    'api/',
    'e2e/',
    'tools/challenge-helper-scripts/',
    'tools/challenge-parser/',
    'tools/scripts/build/',
    'tools/scripts/lint/',
    'shared',
    'curriculum',
    'client'
  ],
  moduleNameMapper: {
    // CSS Modules - match files that end with 'module.css'
    '\\.module\\.css$': 'identity-obj-proxy',
    '^lodash-es$': 'lodash'
  },
  globals: {
    __PATH_PREFIX__: ''
  },
  verbose: true,
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest.transform.js'
  },
  roots: ['.', './client'],
  transformIgnorePatterns: ['node_modules/.pnpm/(?!(nanoid|uuid)@)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  watchPathIgnorePatterns: ['<rootDir>/__fixtures__.*']
};
