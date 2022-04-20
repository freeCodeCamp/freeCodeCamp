/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { getCurriculum } from '../../../../data-fetching/get-curriculum';

type Block = Record<string, any>;
interface Props {
  rwd?: Block;
  js?: Block;
}

export default function Challenge({ rwd, js }: Props) {
  const router = useRouter();
  const { superblock, block, id } = router.query;

  if (!superblock || !block || !id) return null;
  if (typeof block !== 'string') return null;

  if (rwd && superblock === 'responsive-web-design') {
    return <Description block={rwd} name={block} dashedName={id} />;
  } else if (js && superblock === 'javascript-algorithms-and-data-structures') {
    return <Description block={js} name={block} dashedName={id} />;
  }
  return (
    <div>
      <ul>{rwd && Object.keys(rwd).map(name => <li key={name}>{name}</li>)}</ul>
      <ul>{js && Object.keys(js).map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

interface DescProps {
  block: Block;
  name: string;
  dashedName: string | string[];
}

function Description({ block, name, dashedName }: DescProps) {
  const challengeId = block[name].challenges.findIndex(
    (c: { dashedName: string }) => c.dashedName == dashedName
  );
  const challenge = block[name].challenges[challengeId];

  return <div dangerouslySetInnerHTML={{ __html: challenge.description }} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rwdBlocks, jsBlocks } = await getCurriculum();

  if (params?.superblock === 'responsive-web-design') {
    return { props: { rwd: rwdBlocks }, revalidate: 5 };
  } else if (
    params?.superblock === 'javascript-algorithms-and-data-structures'
  ) {
    return { props: { js: jsBlocks }, revalidate: 5 };
  } else {
    return { props: {}, revalidate: 5 };
  }
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
