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
              blockName: Type.String(),
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
    blockName: string;
    name: string;
  }
> {
  const metaDir = path.join(
    __dirname,
    '../../../../curriculum/challenges/_meta'
  );

  const blockFolders = fs
    .readdirSync(metaDir)
    .filter(f => fs.statSync(path.join(metaDir, f)).isDirectory());

  const challengeIdMap: Record<
    string,
    {
      certification: string;
      block: string;
      blockName: string;
      name: string;
    }
  > = {};

  blockFolders.forEach(blockFolder => {
    const metaPath = path.join(metaDir, blockFolder, 'meta.json');
    if (!fs.existsSync(metaPath)) return; // skip if no meta.json

    const metaRaw = fs.readFileSync(metaPath, 'utf8');
    const meta = JSON.parse(metaRaw) as {
      name: string;
      superBlock: string;
      challengeOrder?: Array<{ id: string; title: string }>;
    };
    const blockName = meta.name;
    const superBlock = meta.superBlock;

    // For each challenge in challengeOrder
    (meta.challengeOrder || []).forEach(challenge => {
      challengeIdMap[challenge.id] = {
        certification: superBlock,
        block: blockFolder,
        blockName: blockName,
        name: challenge.title
      };
    });
  });

  return challengeIdMap;
}
