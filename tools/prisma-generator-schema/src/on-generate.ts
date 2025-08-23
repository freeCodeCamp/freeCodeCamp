import assert from 'assert';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { join, parse } from 'path';
import type { GeneratorOptions } from '@prisma/generator-helper';

/** Runs the generator with the given options. */
export async function onGenerate(options: GeneratorOptions) {
  const {
    generator: {
      config: { outfile },
      output: { value }
    }
  } = options;

  const { value: prismaClientOutput } = options.otherGenerators.find(
    ({ provider }) => provider.value === 'prisma-client-js'
  ).output;

  assert(typeof outfile === 'string', 'output must be a string');
  assert(typeof value === 'string', 'value must be a string');
  assert(
    typeof prismaClientOutput === 'string',
    'prismaClientOutput must be a string'
  );

  const sourcePath = join(
    prismaClientOutput,
    '..',
    '..',
    '.prisma',
    'client',
    'index.d.ts'
  );
  const source = await readFile(sourcePath, 'utf-8');
  const destinationFile = join(value, outfile);
  // Write to file, but create directories if they don't exist.
  await mkdir(parse(destinationFile).dir, { recursive: true });
  await writeFile(destinationFile, source);
  console.info(`Generated ${destinationFile}`);
}
