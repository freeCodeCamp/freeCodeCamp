import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../data-fetching/get-curriculum';

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

  return { props: { idToPathSegmentsMap }, revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
