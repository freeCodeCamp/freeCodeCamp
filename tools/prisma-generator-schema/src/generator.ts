import { generatorHandler } from '@prisma/generator-helper';
import { onGenerate } from './on-generate';
import { onManifest } from './on-manifest';

// Defines the entry point of the generator.
generatorHandler({
  onManifest,
  onGenerate
});
