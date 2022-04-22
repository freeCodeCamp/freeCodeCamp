/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQuery } from 'querystring';
import Editor from '@monaco-editor/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  SuperBlock,
  Block,
  getCurriculum
} from '../../../../data-fetching/get-curriculum';
interface Props {
  blockData: Block;
}

export default function Challenge({ blockData }: Props) {
  const router = useRouter();
  const { superblock, block, dashedName } = router.query;

  if (!superblock || !block || !dashedName) return null;
  if (typeof block !== 'string') return null;

  return (
    <>
      <Main block={blockData} dashedName={dashedName} />
      <Link
        href={
          '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
        }
      >
        Go here
      </Link>
    </>
  );
}

interface DescProps {
  block: Block;
  dashedName: string | string[];
}

function Main({ block, dashedName }: DescProps) {
  const challengeId = block.challenges.findIndex(
    (c: { dashedName: string }) => c.dashedName == dashedName
  );
  const challenge = block.challenges[challengeId];

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

  const superBlockToBlockMap: {
    [index: string]: (params: ParsedUrlQuery) => Block;
  } = {
    'responsive-web-design': (params: ParsedUrlQuery) =>
      findBlock(rwdBlocks, params),
    'javascript-algorithms-and-data-structures': (params: ParsedUrlQuery) =>
      findBlock(jsBlocks, params)
  };

  if (params) {
    if (typeof params.superblock !== 'string')
      throw Error(`superblock param has to be a string, {params.superblock}`);
    return {
      props: { blockData: superBlockToBlockMap[params?.superblock](params) },
      revalidate: 10
    };
  } else {
    return { props: {}, revalidate: 10 };
  }
};

function findBlock(superblock: SuperBlock, params: ParsedUrlQuery) {
  if (typeof params.block !== 'string')
    throw Error('block param has to be a string');
  return superblock[params.block];
}

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
