import { GetStaticPaths, GetStaticProps } from 'next';
import { getCurriculum } from '../../../data-fetching/get-curriculum';

interface Props {
  blockNames?: string[];
}

export default function SuperBlock({ blockNames }: Props) {
  return (
    <>
      {blockNames?.map(blockName => (
        <li key={blockName}> {blockName}</li>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rwdBlocks } = await getCurriculum();
  const superblock = params && params['superblock'];
  const blockOrId = params && params['blockOrId'];
  // TODO: replace this ad hoc solution via idToPathSegmentsMap (idToPathMap
  // once that's done). If the map doesn't have an entry, we can return 404 and
  // skip building the page.
  const notFound =
    superblock !== 'responsive-web-design' || blockOrId !== 'special-path';

  if (notFound) {
    return { notFound, revalidate: 10 };
  } else {
    const blockNames = Object.keys(rwdBlocks);
    return { props: { blockNames }, revalidate: 10 };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  };
};
