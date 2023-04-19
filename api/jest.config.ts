import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testRegex: '\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.start-server.ts']
};

export default config;
