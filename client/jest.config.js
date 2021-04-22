module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|woff|woff2)$': '<rootDir>/src/__mocks__/fileMock.js',
    // Plain CSS - match css files that don't end with
    // '.module.css' https://regex101.com/r/VzwrKH/4
    '^(?!.*\\.module\\.css$).*\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    // CSS Modules - match files that end with 'module.css'
    '\\.module\\.css$': 'identity-obj-proxy',
    'react-i18next': '<rootDir>/src/__mocks__/react-i18nextMock.js'
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  globals: {
    __PATH_PREFIX__: ''
  },
  verbose: true,
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFilesAfterEnv: ['./jest.setup.js']
};
