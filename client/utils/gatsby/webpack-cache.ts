import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Webpack tracks source modules and Gatsby's plugin dependencies itself. These
// inputs also invalidate retained compiler results when the build setup changes.
const buildInputs = [
  '../package.json',
  '../pnpm-lock.yaml',
  '../pnpm-workspace.yaml',
  'package.json',
  'gatsby-config.ts',
  'gatsby-node.ts',
  '.babelrc.js',
  'postcss.config.js',
  'tsconfig.json',
  'config/env.json'
];

export function getWebpackCacheOptions(
  directory: string,
  stage: string,
  previousVersion = ''
) {
  const environment = Object.keys(process.env)
    .filter(
      key =>
        key.startsWith('GATSBY_') ||
        ['NODE_ENV', 'BABEL_ENV', 'CI'].includes(key)
    )
    .sort()
    .map(key => [key, process.env[key]]);

  const version = createHash('sha256')
    .update(
      JSON.stringify({
        previousVersion,
        node: process.version,
        platform: process.platform,
        architecture: process.arch,
        environment,
        inputs: buildInputs.map(file => [
          file,
          readFileSync(join(directory, file), 'utf8')
        ])
      })
    )
    .digest('hex');

  return {
    cacheLocation: join(directory, '.webpack-cache', `stage-${stage}`),
    version
  };
}
