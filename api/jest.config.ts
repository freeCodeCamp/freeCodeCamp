import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testRegex: '\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};

export default config;
