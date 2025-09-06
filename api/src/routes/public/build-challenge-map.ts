import fs from 'fs';
import path from 'path';
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Type } from '@fastify/type-provider-typebox';

/**
 * Plugin containing the build-challenge-map route for generating
 * a map of all challenges from the _meta files.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done Callback to signal that the logic has completed.
 */
export const buildChallengeMapRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/api/build-challenge-map',
    {
      schema: {
        response: {
          200: Type.Record(
            Type.String(), // Challenge ID
            Type.Object({
              certification: Type.String(),
              block: Type.String(),
              name: Type.String()
            })
          ),
          500: Type.Object({
            error: Type.String()
          })
        }
      }
    },
    async (request, reply) => {
      try {
        const challengeIdMap = buildChallengeMap();
        return reply.send(challengeIdMap);
      } catch (error) {
        fastify.log.error(error);
        return reply.code(500).send({ error: 'Failed to build challenge map' });
      }
    }
  );

  done();
};

/**
 * Builds a challenge map from all _meta files in the curriculum.
 * This replicates the logic from tools/scripts/build/build-challenge-map.js
 * but returns the object instead of writing to a file.
 *
 * @returns Object mapping challenge IDs to their metadata.
 */
function buildChallengeMap(): Record<
  string,
  {
    certification: string;
    block: string;
    name: string;
  }
> {
  const superblocksDir = path.join(
    __dirname,
    '../../../../curriculum/structure/superblocks'
  );
  const blocksDir = path.join(
    __dirname,
    '../../../../curriculum/structure/blocks'
  );

  const blockToCertification: Record<string, string> = {};
  const superblockFiles = fs
    .readdirSync(superblocksDir)
    .filter(f => f.endsWith('.json'));
  for (const file of superblockFiles) {
    const superblockName = path.basename(file, '.json');
    const superblockRaw = fs.readFileSync(
      path.join(superblocksDir, file),
      'utf8'
    );
    const superblock = JSON.parse(superblockRaw) as { blocks?: string[] };
    if (Array.isArray(superblock.blocks)) {
      for (const block of superblock.blocks) {
        blockToCertification[block] = superblockName;
      }
    }
  }

  const challengeIdMap: Record<
    string,
    {
      certification: string;
      block: string;
      name: string;
    }
  > = {};

  const blockFiles = fs.readdirSync(blocksDir).filter(f => f.endsWith('.json'));
  for (const file of blockFiles) {
    const blockName = path.basename(file, '.json');
    const blockRaw = fs.readFileSync(path.join(blocksDir, file), 'utf8');
    const block = JSON.parse(blockRaw) as {
      name?: string;
      challengeOrder?: Array<{ id: string; title: string }>;
    };
    const certification = blockToCertification[blockName];
    if (!certification) continue; // skip blocks not in any certification

    if (Array.isArray(block.challengeOrder)) {
      for (const challenge of block.challengeOrder) {
        challengeIdMap[challenge.id] = {
          certification,
          block: blockName,
          name: challenge.title
        };
      }
    }
  }

  return challengeIdMap;
}
