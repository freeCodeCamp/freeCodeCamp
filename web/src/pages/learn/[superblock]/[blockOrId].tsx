import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Curriculum,
  IdToDashedNameMap,
  getCurriculum,
  getIdToDashedNameMap,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../../data-fetching/get-curriculum';
import SuperBlock from '../../../page-templates/superblock';
import { getDestination } from '../[...id]';

interface Props {
  blockNames: string[];
  blockNameToChallengeOrderMap: {
    [index: string]: [id: string, title: string];
  };
  idToDashedNameMap: { [index: string]: string };
}

export default SuperBlock;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const curriculum = await getCurriculum();
  const idToDashedNameMap = getIdToDashedNameMap(curriculum);
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  // TODO: simplify once noUncheckedIndexedAccess is set.
  const pathSegments = idToPathSegmentsMap[params?.blockOrId as string] as
    | PathSegments
    | undefined;

  if (!pathSegments) return fourOhFour();
  if (pathExists(pathSegments, params)) {
    return renderPage(pathSegments, curriculum, idToDashedNameMap);
  } else {
    return redirect(pathSegments);
  }
};

function renderPage(
  pathSegments: PathSegments, // TODO: this will be used once we can render more than one page!
  curriculum: Curriculum,
  idToDashedNameMap: IdToDashedNameMap
) {
  // TODO: render page is doing too much, it should just return the props and
  // revalidate. Both blocknames and challengeOrderMap should come from
  // getCurriculum.
  const { rwdBlocks } = curriculum;
  const blockNames = Object.keys(rwdBlocks);
  const blockNameToChallengeOrderMap = blockNames.reduce(
    (prev, blockName) => ({
      ...prev,
      ...{ [blockName]: rwdBlocks[blockName].meta.challengeOrder }
    }),
    {}
  );

  return {
    props: {
      blockNames,
      blockNameToChallengeOrderMap,
      idToDashedNameMap
    },
    revalidate: 10
  };
}

const redirect = (pathSegments: PathSegments) => ({
  redirect: {
    destination: getDestination(pathSegments),
    permanent: false
  },
  revalidate: 10
});

// DRY this with [id]'s version
const fourOhFour = () => ({ notFound: true, revalidate: 10 } as const);

// DRY this with [id]'s version
const pathExists = (pathSegments: PathSegments, params?: ParsedUrlQuery) => {
  const isChallenge = pathSegments.dashedName;
  const isExpectedSuperBlockParam =
    params?.superblock === pathSegments.superblock;
  return !isChallenge && isExpectedSuperBlockParam;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['/learn/responsive-web-design/special-path'],
    fallback: true
  };
};
