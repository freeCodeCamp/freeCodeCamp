import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testRegex: '\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }]
  }
};

export default config;
