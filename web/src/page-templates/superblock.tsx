/* eslint-disable jsx-a11y/anchor-is-valid */
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import type { getStaticProps } from '../pages/learn/[superblock]/[blockOrId]';

export default function SuperBlock({
  blockNames,
  challengeOrderMap,
  idToDashedNameMap
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
