import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../data-fetching/get-curriculum';

// TODO: rather than using path segments, use the whole path. This makes this
// more generic and it's easier to redirect to non-challenge pages.  i.e. if we
// have the id of a superblock, it won't have three path segments - it will have
// one.
export default function Catch({
  idToPathSegmentsMap
}: {
  idToPathSegmentsMap: Record<string, PathSegments>;
}) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  const uuid = id?.slice(-1)[0];

  useEffect(() => {
    if (!uuid || !idToPathSegmentsMap[uuid]) return;

    const { superblock, block, dashedName } = idToPathSegmentsMap[uuid];
    void router.push(`/learn/${superblock}/${block}/${dashedName}/${uuid}`);
  });
}

export const getStaticProps: GetStaticProps = async () => {
  const idToPathSegmentsMap = getIdToPathSegmentsMap(await getCurriculum());

  // TODO: return notFound if no idToPathSegmentsMap entry.
  return { props: { idToPathSegmentsMap }, revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
