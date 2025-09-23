import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Challenge Map endpoint for FCC Classroom integration
 * Builds a hash map of all active challenges from the curriculum structure
 */
const challengeMapRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // GET /challenge-map - Returns a hash map of all active challenges
  fastify.get('/challenge-map', async (_request, reply) => {
    try {
      const challengeMap = buildChallengeMap();
      
      return reply.status(200).send({
        success: true,
        challengeMap,
        totalChallenges: Object.keys(challengeMap).length,
        generatedAt: new Date().toISOString()
      });
    } catch (error) {
      fastify.log.error('Error building challenge map:', error);
      return reply.status(500).send({
        success: false,
        error: 'Failed to build challenge map'
      });
    }
  });

  done();
};

/**
 * Builds a challenge map from the curriculum structure
 * Returns a hash map: { challengeId: { title, block, superblock } }
 */
function buildChallengeMap(): Record<string, {
  title: string;
  block: string;
  superblock: string;
}> {
  const challengeMap: Record<string, {
    title: string;
    block: string;
    superblock: string;
  }> = {};

  try {
    // Read the main curriculum structure
    const curriculumPath = join(process.cwd(), 'curriculum', 'structure', 'curriculum.json');
    const curriculum = JSON.parse(readFileSync(curriculumPath, 'utf8'));

    // Read superblock files to get block mappings
    const superblockPath = join(process.cwd(), 'curriculum', 'structure', 'superblocks');
    
    for (const superblockName of curriculum.superblocks) {
      try {
        const superblockFile = join(superblockPath, `${superblockName}.json`);
        const superblock = JSON.parse(readFileSync(superblockFile, 'utf8'));
        
        // Process each block in the superblock
        for (const blockName of superblock.blocks || []) {
          try {
            const blockPath = join(process.cwd(), 'curriculum', 'structure', 'blocks', `${blockName}.json`);
            const block = JSON.parse(readFileSync(blockPath, 'utf8'));
            
            // Add each challenge to the map
            for (const challenge of block.challengeOrder || []) {
              challengeMap[challenge.id] = {
                title: challenge.title,
                block: blockName,
                superblock: superblockName
              };
            }
          } catch (blockError) {
            // Log but continue - some blocks might not exist
            console.warn(`Warning: Could not read block ${blockName}:`, blockError);
          }
        }
      } catch (superblockError) {
        // Log but continue - some superblocks might not exist
        console.warn(`Warning: Could not read superblock ${superblockName}:`, superblockError);
      }
    }

    return challengeMap;
  } catch (error) {
    console.error('Error building challenge map:', error);
    throw error;
  }
}

export default challengeMapRoutes;