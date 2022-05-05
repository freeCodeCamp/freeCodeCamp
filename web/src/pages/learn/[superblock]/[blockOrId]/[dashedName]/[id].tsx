import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  SuperBlock,
  Block,
  Challenge,
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../../../../data-fetching/get-curriculum';
import ChallengeComponent from '../../../../../page-templates/challenge';
import { getDestination } from '../../../[...id]';
interface Props {
  challengeData: Challenge | null;
}

interface SuperBlockToChallengeMap {
  [index: string]: (pathSegments: PathSegments) => Challenge | null;
}

export type { Challenge };

export default ChallengeComponent;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const curriculum = await getCurriculum();
  const { rwdBlocks, jsBlocks } = curriculum;
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  // TODO: simplify once noUncheckedIndexedAccess is set.
  const pathSegments = idToPathSegmentsMap[params?.id as string] as
    | PathSegments
    | undefined;

  // TODO: get this from get-curriculum
  const superBlockToChallengeMap: SuperBlockToChallengeMap = {
    'responsive-web-design': (pathSegments: PathSegments) =>
      findChallenge(findBlock(rwdBlocks, pathSegments), pathSegments),
    'javascript-algorithms-and-data-structures': (pathSegments: PathSegments) =>
      findChallenge(findBlock(jsBlocks, pathSegments), pathSegments)
  };

  if (!pathSegments) return fourOhFour();
  if (pathExists(pathSegments, params)) {
    return renderPage(pathSegments, superBlockToChallengeMap);
  } else {
    return redirect(pathSegments);
  }
};

// DRY this with [blockOrId]'s version
const fourOhFour = () => ({ notFound: true, revalidate: 10 } as const);

// DRY this with [blockOrId]'s version
const pathExists = (pathSegments: PathSegments, params?: ParsedUrlQuery) =>
  params?.superblock === pathSegments.superblock &&
  params?.blockOrId === pathSegments.block &&
  params?.dashedName === pathSegments.dashedName;

function renderPage(
  pathSegments: PathSegments,
  superBlockToChallengeMap: SuperBlockToChallengeMap
) {
  const challengeData =
    superBlockToChallengeMap[pathSegments.superblock](pathSegments);
  return {
    props: {
      challengeData
    },
    revalidate: 10
  };
}

function redirect(pathSegments: PathSegments) {
  return {
    redirect: {
      destination: getDestination(pathSegments),
      permanent: false
    },
    revalidate: 10
  };
}

function findBlock(superblock: SuperBlock, params: PathSegments) {
  return params.block ? superblock[params.block] : null;
}

function findChallenge(block: Block | null, params: PathSegments) {
  const challenge = block?.challenges.find(
    (c: { dashedName: string }) => c.dashedName == params.dashedName
  );
  return challenge ?? null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { rwdBlocks } = await getCurriculum();

  const rwdBlocknames = Object.keys(rwdBlocks);

  // TODO: generalize to all superblocks... OR consider the merits of avoiding
  // this entirely. If we skip this the pro is quicker builds and the con is
  // that we'd more work onto the webserver.  It's probably best to do as much
  // work upfront as possible. At least until that upfront work takes too long.
  const rwdPaths = rwdBlocknames
    .map(name =>
      rwdBlocks[name].meta.challengeOrder.map(([id]) =>
        toParams(
          'responsive-web-design',
          name,
          getDashedName(rwdBlocks, name, id),
          id
        )
      )
    )
    .flat();

  return {
    paths: rwdPaths,
    fallback: true
  };
};

function getDashedName(block: SuperBlock, blockName: string, id: string) {
  const challenge = block[blockName].challenges.find(c => c.id === id);
  if (!challenge) throw Error(`Challenge ${id} not found in ${blockName}`);
  return challenge.dashedName;
}

function toParams(
  superblock: string,
  block: string,
  dashedName: string,
  id: string
) {
  return {
    params: {
      superblock,
      blockOrId: block,
      dashedName,
      id
    }
  };
}
