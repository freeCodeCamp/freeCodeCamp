/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from '@monaco-editor/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  SuperBlock,
  getCurriculum
} from '../../../../data-fetching/get-curriculum';
interface Props {
  rwd?: SuperBlock;
  js?: SuperBlock;
}

export default function Challenge({ rwd, js }: Props) {
  const router = useRouter();
  const { superblock, block, dashedName } = router.query;

  if (!superblock || !block || !dashedName) return null;
  if (typeof block !== 'string') return null;

  if (rwd && superblock === 'responsive-web-design') {
    return (
      <>
        <Main block={rwd} name={block} dashedName={dashedName} />
        <Link
          href={
            '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
          }
        >
          Go here
        </Link>
      </>
    );
  } else if (js && superblock === 'javascript-algorithms-and-data-structures') {
    return <Main block={js} name={block} dashedName={dashedName} />;
  }
  return (
    <div>
      <ul>{rwd && Object.keys(rwd).map(name => <li key={name}>{name}</li>)}</ul>
      <ul>{js && Object.keys(js).map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

interface DescProps {
  block: SuperBlock;
  name: string;
  dashedName: string | string[];
}

function Main({ block, name, dashedName }: DescProps) {
  const challengeId = block[name].challenges.findIndex(
    (c: { dashedName: string }) => c.dashedName == dashedName
  );
  const challenge = block[name].challenges[challengeId];

  if (!challenge || !challenge.challengeFiles) return null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: challenge.description }} />
      <Editor
        defaultLanguage={challenge.challengeFiles[0].ext}
        height={'50vh'}
        defaultValue={challenge.challengeFiles[0].contents}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rwdBlocks, jsBlocks } = await getCurriculum();

  if (params?.superblock === 'responsive-web-design') {
    return { props: { rwd: rwdBlocks }, revalidate: 10 };
  } else if (
    params?.superblock === 'javascript-algorithms-and-data-structures'
  ) {
    return { props: { js: jsBlocks }, revalidate: 10 };
  } else {
    return { props: {}, revalidate: 10 };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { rwdBlocks } = await getCurriculum();

  const rwdBlocknames = Object.keys(rwdBlocks);

  // TODO: generalize to all superblocks... OR consider the merits of avoiding
  // this entirely. If we skip this the pro is quicker builds and the con is
  // that we'd more work onto the webserver.  It's probably best to do as much
  // work upfront as possible. At least until that upfront work takes too long.
  const rwdPaths = rwdBlocknames
    .map(name =>
      rwdBlocks[name].meta.challengeOrder.map(([id]) =>
        toParams(
          'responsive-web-design',
          name,
          getDashedName(rwdBlocks, name, id)
        )
      )
    )
    .flat();

  return {
    paths: rwdPaths,
    fallback: true
  };
};

function getDashedName(block: SuperBlock, blockName: string, id: string) {
  const challenge = block[blockName].challenges.find(c => c.id === id);
  if (!challenge) throw Error(`Challenge ${id} not found in ${blockName}`);
  return challenge.dashedName;
}

function toParams(superblock: string, block: string, dashedName: string) {
  return {
    params: {
      superblock,
      block,
      dashedName
    }
  };
}
