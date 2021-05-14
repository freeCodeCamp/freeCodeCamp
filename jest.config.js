module.exports = {
  // TODO: remove /tools/dashboard when the tests are configured correctly
  testPathIgnorePatterns: ['/node_modules/', '/tools/dashboard'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|woff|woff2)$': '<rootDir>/src/__mocks__/fileMock.js',
    // Plain CSS - match css files that don't end with
    // '.module.css' https://regex101.com/r/VzwrKH/4
    '^(?!.*\\.module\\.css$).*\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    // CSS Modules - match files that end with 'module.css'
    '\\.module\\.css$': 'identity-obj-proxy',
    analytics: '<rootDir>/src/__mocks__/analyticsMock.js'
  },
  globals: {
    __PATH_PREFIX__: ''
  },
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)']
};
