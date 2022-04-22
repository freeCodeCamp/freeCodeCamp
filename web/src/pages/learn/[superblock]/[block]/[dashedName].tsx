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
  Challenge,
  getCurriculum
} from '../../../../data-fetching/get-curriculum';
interface Props {
  challengeData: Challenge | undefined;
}

export default function ChallengeComponent({ challengeData }: Props) {
  const router = useRouter();
  const { superblock, block, dashedName } = router.query;

  if (!superblock || !block || !dashedName) return null;
  if (typeof block !== 'string') return null;

  return (
    <>
      <Main challengeData={challengeData} dashedName={dashedName} />
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
  challengeData?: Challenge;
  dashedName: string | string[];
}

function Main({ challengeData }: DescProps) {
  if (!challengeData || !challengeData.challengeFiles) return null;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: challengeData.description }} />
      <Editor
        defaultLanguage={challengeData.challengeFiles[0].ext}
        height={'50vh'}
        defaultValue={challengeData.challengeFiles[0].contents}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { rwdBlocks, jsBlocks } = await getCurriculum();

  const superBlockToChallengeMap: {
    [index: string]: (params: ParsedUrlQuery) => Challenge | undefined;
  } = {
    'responsive-web-design': (params: ParsedUrlQuery) =>
      findChallenge(findBlock(rwdBlocks, params), params),
    'javascript-algorithms-and-data-structures': (params: ParsedUrlQuery) =>
      findChallenge(findBlock(jsBlocks, params), params)
  };

  if (params) {
    if (typeof params.superblock !== 'string')
      throw Error(`superblock param has to be a string, {params.superblock}`);
    return {
      props: {
        challengeData: superBlockToChallengeMap[params?.superblock](params)
      },
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

function findChallenge(block: Block, params: ParsedUrlQuery) {
  if (typeof params.dashedName !== 'string')
    throw Error('dashedName param has to be a string');
  return block.challenges.find(
    (c: { dashedName: string }) => c.dashedName == params.dashedName
  );
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
