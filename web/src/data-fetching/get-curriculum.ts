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

interface Challenge {
  id: string;
  dashedName: string;
  description: string;
  challengeFiles: { contents: string; ext: string }[];
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
