import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getCurriculum,
  getIdToDashedNameMap,
  getIdToPathSegmentsMap,
  PathSegments,
  getSuperBlockToBlockMap,
  getBlockNameToChallengeOrderMap,
  Curriculum
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
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  // TODO: simplify once noUncheckedIndexedAccess is set.
  const pathSegments = idToPathSegmentsMap[params?.blockOrId as string] as
    | PathSegments
    | undefined;

  if (!pathSegments) return fourOhFour();
  if (pathExists(pathSegments, params)) {
    const props = getProps(curriculum);
    return renderPage(props);
  } else {
    return redirect(pathSegments);
  }
};

const getProps = (curriculum: Curriculum) => {
  const idToDashedNameMap = getIdToDashedNameMap(curriculum);
  const superBlockToBlockMap = getSuperBlockToBlockMap(curriculum);

  // TODO: figure out how to generate string literal types for these. I think
  // the approach has to be to fetch the curriculum and use that to generate a
  // type declaration.  This won't mean anything in production, but it will be
  // helpful when developing.
  const blockNames = superBlockToBlockMap['responsive-web-design'];
  const blockNameToChallengeOrderMap = getBlockNameToChallengeOrderMap(
    curriculum,
    blockNames
  );

  return {
    blockNames,
    blockNameToChallengeOrderMap,
    idToDashedNameMap
  };
};

const renderPage = (props: Props) => ({
  props,
  revalidate: 10
});

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
