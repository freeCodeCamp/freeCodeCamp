/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import {
  getCurriculum,
  getIdToDashedNameMap
} from '../../../data-fetching/get-curriculum';

interface Props {
  blockNames?: string[];
  challengeOrderMap?: { [index: string]: [id: string, title: string] };
  idToDashedNameMap?: { [index: string]: string };
}

export default function SuperBlock({
  blockNames,
  challengeOrderMap,
  idToDashedNameMap
}: Props) {
  if (!blockNames || !challengeOrderMap || !idToDashedNameMap) return null;
  return (
    <>
      {blockNames.map(blockName => (
        <ul key={blockName}>
          {blockName}
          <ul>
            {challengeOrderMap[blockName].map(([id, title]) => (
              <li key={id}>
                <Link
                  href={`/learn/responsive-web-design/${blockName}/${idToDashedNameMap[id]}/${id}`}
                >
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const curriculum = await getCurriculum();
  const idToDashedNameMap = getIdToDashedNameMap(curriculum);
  const { rwdBlocks } = curriculum;
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
    const challengeOrderMap = blockNames.reduce(
      (prev, blockName) => ({
        ...prev,
        ...{ [blockName]: rwdBlocks[blockName].meta.challengeOrder }
      }),
      {}
    );

    return {
      props: { blockNames, challengeOrderMap, idToDashedNameMap },
      revalidate: 10
    };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: ['/learn/responsive-web-design/special-path'],
    fallback: true
  };
};
