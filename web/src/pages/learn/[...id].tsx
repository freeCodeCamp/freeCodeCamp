import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCurriculum } from '../../data-fetching/get-curriculum';

interface PathSegments {
  superblock: string;
  block: string;
  dashedName: string;
}

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
  const { rwdBlocks } = await getCurriculum();

  // TODO: this is pretty inefficient. The curriculum server needs to return an
  // object with ids as keys and the superblock, block and dashedName as values.
  // i.e. enough info to recreate the full path.
  // Also TODO: use params here and, instead of passing the map, just pass the new path.
  const idToPathSegmentsMap: Record<string, PathSegments> = {};
  for (const blockName of Object.keys(rwdBlocks)) {
    const block = rwdBlocks[blockName];
    for (const challenge of block.challenges) {
      idToPathSegmentsMap[challenge.id] = {
        superblock: 'responsive-web-design',
        block: blockName,
        dashedName: challenge.dashedName
      };
    }
  }
  return { props: { idToPathSegmentsMap }, revalidate: 10 };
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
