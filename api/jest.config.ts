import path from 'node:path';
import type { Config } from 'jest';

import { config as envConfig } from 'dotenv';

const envPath = path.resolve(__dirname, '../.env');
envConfig({ path: envPath });

const config: Config = {
  verbose: true,
  testRegex: '(exam|challenge)\\.test\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  ...(process.env.FREECODECAMP_NODE_ENV == 'development'
    ? { maxWorkers: 5 }
    : {})
};

export default config;
