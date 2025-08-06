import type { GeneratorManifest } from '@prisma/generator-helper';

import { version } from '../package.json';

/** Generates simple metadata for this generator. */
export function onManifest(): GeneratorManifest {
  return {
    version,
    defaultOutput: './',
    prettyName: 'Prisma Generator Schema',
    requiresGenerators: ['prisma-client-js']
  };
}
