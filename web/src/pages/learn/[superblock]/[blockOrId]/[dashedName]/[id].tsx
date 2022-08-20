import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  SuperBlock,
  Challenge,
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments,
  getChallengeData,
  Curriculum
} from '../../../../../data-fetching/get-curriculum';
import ChallengeComponent from '../../../../../page-templates/challenge';
import { getDestination } from '../../../[...id]';
interface Props {
  challengeData: Challenge;
}

export type { Challenge };

export default ChallengeComponent;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const curriculum = await getCurriculum();
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  // TODO: simplify once noUncheckedIndexedAccess is set.
  const pathSegments = idToPathSegmentsMap[params?.id as string] as
    | PathSegments
    | undefined;

  if (!pathSegments) return fourOhFour();
  if (pathExists(pathSegments, params)) {
    const props = getProps(curriculum, pathSegments);
    return renderPage(props);
  } else {
    return redirect(pathSegments);
  }
};

const getProps = (
  curriculum: Curriculum,
  pathSegments: Required<PathSegments>
) => ({
  challengeData: getChallengeData(curriculum, pathSegments)
});
// DRY this with [blockOrId]'s version
const fourOhFour = () => ({ notFound: true, revalidate: 10 } as const);

// DRY this with [blockOrId]'s version
const pathExists = (
  pathSegments: PathSegments,
  params?: ParsedUrlQuery
): pathSegments is Required<PathSegments> =>
  params?.superblock === pathSegments.superblock &&
  params?.blockOrId === pathSegments.block &&
  params?.dashedName === pathSegments.dashedName;

const renderPage = (props: Props) => ({
  props,
  revalidate: 10
});

function redirect(pathSegments: PathSegments) {
  return {
    redirect: {
      destination: getDestination(pathSegments),
      permanent: false
    },
    revalidate: 10
  };
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
