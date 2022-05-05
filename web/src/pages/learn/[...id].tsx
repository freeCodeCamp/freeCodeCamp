import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../data-fetching/get-curriculum';

// Next expects there to be a React component to render the page. This never
// happens because getStaticProps either redirects to a 404 or to another page,
// but we still need to provide something:
export default function Catch() {
  return null;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idToPathSegmentsMap = getIdToPathSegmentsMap(await getCurriculum());
  const uuid = params?.id?.slice(-1)[0];

  if (!uuid) {
    return { notFound: true, revalidate: 10 };
  }
  // TODO: rather than using path segments, use the whole path. This makes this
  // more generic and it's easier to redirect to non-challenge pages.  i.e. if we
  // have the id of a superblock, it won't have three path segments - it will have
  // one.
  const pathSegments = idToPathSegmentsMap[uuid];
  if (!pathSegments) {
    return { notFound: true, revalidate: 10 };
  }

  return {
    redirect: {
      destination: getDestination(pathSegments),
      permanent: false
    },
    revalidate: 10
  };
};

export const getDestination = (pathSegments: PathSegments) => {
  const { superblock, block, dashedName, id } = pathSegments;
  // Currently there are either
  if (block && dashedName) {
    // challenges:
    return `/learn/${superblock}/${block}/${dashedName}/${id}`;
  } else {
    // or superblocks:
    return `/learn/${superblock}/${id}`;
  }
};

// As with the page component, even though we render 0 pages, this has to exist
export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
