/*
  Eventually this module could be used as a cache (in memory or on-disk) for the
  curriculum, but for now it just fetches the data on demand.

  A reasonably reliable approach would be as follows:
  1. Query the curriculum API for the latest version of the curriculum.
  2. If the API responds
    a. If the latest version is not cached, query the API for the latest version
    b. Otherwise use the cached value.
  3. If the API does not respond, use the cached value and log an error.

*/

// TODO: this should be { [superblock: string]: Superblock }
export interface Curriculum {
  rwdBlocks: SuperBlock;
  jsBlocks: SuperBlock;
}

export interface SuperBlock {
  [index: string]: Block;
}

export interface Block {
  meta: {
    name: string;
    isUpcomingChange: boolean;
    dashedName: string;
    order: number;
    time: string;
    template: string;
    required: string[];
    superBlock: string;
    challengeOrder: [id: string, title: string][];
  };
  challenges: Challenge[];
}

export interface Challenge {
  id: string;
  dashedName: string;
  description: string;
  challengeFiles: { contents: string; ext: string }[];
}

export interface PathSegments {
  superblock: string;
  block?: string;
  dashedName?: string;
  id: string;
}

export interface IdToDashedNameMap {
  [id: string]: string;
}

interface SuperBlockToChallengeMap {
  [index: string]: (pathSegments: Required<PathSegments>) => Challenge;
}

export async function getCurriculum() {
  const rwd = await fetch('http://localhost:3000/responsive-web-design');
  const js = await fetch(
    'http://localhost:3000/javascript-algorithms-and-data-structures'
  );
  const rwdBlocks = ((await rwd.json()) as { blocks: SuperBlock }).blocks;
  const jsBlocks = ((await js.json()) as { blocks: SuperBlock }).blocks;

  return { rwdBlocks, jsBlocks };
}

export function getIdToPathSegmentsMap({ rwdBlocks }: Curriculum) {
  // TODO: this is pretty inefficient. The curriculum server needs to return an
  // object with ids as keys and the superblock, block and dashedName as values.
  // i.e. enough info to recreate the full path.

  // Also TODO: use params here and, instead of passing the map, just pass the
  // new path.
  const idToPathSegmentsMap: Record<string, PathSegments> = {};
  for (const blockName of Object.keys(rwdBlocks)) {
    const block = rwdBlocks[blockName];
    for (const challenge of block.challenges) {
      idToPathSegmentsMap[challenge.id] = {
        superblock: 'responsive-web-design',
        block: blockName,
        dashedName: challenge.dashedName,
        id: challenge.id
      };
    }
  }
  idToPathSegmentsMap['special-path'] = {
    superblock: 'responsive-web-design',
    id: 'special-path'
  };
  return idToPathSegmentsMap;
}

type SuperBlockToBlockMap = {
  [superblock: string]: string[];
};

export function getSuperBlockToBlockMap(
  curriculum: Curriculum
): SuperBlockToBlockMap {
  return { 'responsive-web-design': Object.keys(curriculum.rwdBlocks) };
}

export function getBlockNameToChallengeOrderMap(
  { rwdBlocks }: Curriculum,
  blockNames: string[]
): { [index: string]: [id: string, title: string] } {
  return blockNames.reduce(
    (prev, blockName) => ({
      ...prev,
      ...{ [blockName]: rwdBlocks[blockName].meta.challengeOrder }
    }),
    {}
  );
}

// TODO: remove the hardcoding of superblock names. Also, the map generation is
// a mess
export function getChallengeData(
  { rwdBlocks, jsBlocks }: Curriculum,
  pathSegments: Required<PathSegments>
) {
  const superBlockToChallengeMap: SuperBlockToChallengeMap = {
    'responsive-web-design': (pathSegments: Required<PathSegments>) =>
      findChallenge(findBlock(rwdBlocks, pathSegments), pathSegments),
    'javascript-algorithms-and-data-structures': (
      pathSegments: Required<PathSegments>
    ) => findChallenge(findBlock(jsBlocks, pathSegments), pathSegments)
  };
  return superBlockToChallengeMap[pathSegments.superblock](pathSegments);
}

function findBlock(superblock: SuperBlock, params: Required<PathSegments>) {
  return superblock[params.block];
}

function findChallenge(block: Block, params: PathSegments) {
  const challenge = block.challenges.find(
    (c: { dashedName: string }) => c.dashedName == params.dashedName
  );
  // TODO: is there a nicer way to handle missing challenges?
  if (!challenge) {
    throw new Error(`Challenge not found: ${params.id}`);
  }
  return challenge;
}

// TODO: again, bit ugly. Would be better to get data in this shape from the
// curriculum server.
export function getIdToDashedNameMap({
  rwdBlocks
}: Curriculum): IdToDashedNameMap {
  const idToDashedNameMap: Record<string, string> = {};
  for (const blockName of Object.keys(rwdBlocks)) {
    const block = rwdBlocks[blockName];
    for (const challenge of block.challenges) {
      idToDashedNameMap[challenge.id] = challenge.dashedName;
    }
  }
  return idToDashedNameMap;
}
