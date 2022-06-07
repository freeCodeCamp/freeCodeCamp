/* eslint-disable jsx-a11y/anchor-is-valid */
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

// This is circular, but it's only types.
import type { getStaticProps } from '../pages/learn/[superblock]/[blockOrId]';

export default function SuperBlock({
  blockNames,
  blockNameToChallengeOrderMap,
  idToDashedNameMap
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter();
  if (isFallback) return <div>Loading...</div>;

  return (
    <>
      {blockNames.map(blockName => (
        <ul key={blockName}>
          {blockName}
          <ul>
            {blockNameToChallengeOrderMap[blockName].map(([id, title]) => (
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
