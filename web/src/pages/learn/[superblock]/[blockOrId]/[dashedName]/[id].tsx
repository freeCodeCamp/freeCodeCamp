/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQuery } from 'querystring';
import Editor from '@monaco-editor/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import {
  SuperBlock,
  Block,
  Challenge,
  getCurriculum,
  getIdToPathSegmentsMap,
  PathSegments
} from '../../../../../data-fetching/get-curriculum';
interface Props {
  challengeData: Challenge | null;
}

export default function ChallengeComponent({ challengeData }: Props) {
  return (
    <>
      <Main challengeData={challengeData} />
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

interface MainProps {
  challengeData: Challenge | null;
}

function Main({ challengeData }: MainProps) {
  if (!challengeData || !challengeData?.challengeFiles) return null;

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
  const curriculum = await getCurriculum();
  const { rwdBlocks, jsBlocks } = curriculum;
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  const superBlockToChallengeMap: {
    [index: string]: (params: ParsedUrlQuery) => Challenge | null;
  } = {
    'responsive-web-design': (params: ParsedUrlQuery) =>
      findChallenge(findBlock(rwdBlocks, params), params),
    'javascript-algorithms-and-data-structures': (params: ParsedUrlQuery) =>
      findChallenge(findBlock(jsBlocks, params), params)
  };

  // TODO: this is getting ugly, refactor a bit.
  // TODO: validate params first to mollify TS.
  if (params) {
    const normalizedParams = normalizeParams(params);
    const { superblock, id } = normalizedParams;

    if (typeof superblock !== 'string')
      throw Error(
        `superblock param has to be a string, ${JSON.stringify(
          params.superblock
        )}`
      );
    if (typeof id !== 'string')
      throw Error(
        `superblock param has to be a string, ${JSON.stringify(params.id)}`
      );

    const pathSegments = idToPathSegmentsMap[id];

    if (!pathSegments) {
      return {
        notFound: true,
        revalidate: 10
      };
    }

    const valid = validateParams(normalizedParams, pathSegments);

    if (valid) {
      const challengeData =
        superBlockToChallengeMap[superblock](normalizedParams);
      return {
        props: {
          challengeData
        },
        revalidate: 10
      };
    } else {
      const { superblock, block, dashedName } = pathSegments;
      return {
        redirect: {
          destination: `/learn/${superblock}/${block}/${dashedName}/${id}`,
          permanent: false
        },
        revalidate: 10
      };
    }
  } else {
    return { notFound: true, revalidate: 10 };
  }
};

// TODO: combine normalizing and validating

function normalizeParams(params: ParsedUrlQuery) {
  const { superblock, blockOrId, dashedName, id } = params;
  return {
    superblock,
    block: blockOrId,
    dashedName,
    id
  };
}

function validateParams(params: ParsedUrlQuery, pathSegments: PathSegments) {
  for (const [key, value] of Object.entries(pathSegments)) {
    if (params[key] !== value) return false;
  }
  return true;
}

function findBlock(superblock: SuperBlock, params: ParsedUrlQuery) {
  if (typeof params.block !== 'string')
    throw Error(
      'block param has to be a string. Received: ' + String(params.block)
    );
  return superblock[params.block] ?? null;
}

function findChallenge(block: Block | null, params: ParsedUrlQuery) {
  if (typeof params.dashedName !== 'string')
    throw Error('dashedName param has to be a string');
  const challenge = block?.challenges.find(
    (c: { dashedName: string }) => c.dashedName == params.dashedName
  );
  return challenge ?? null;
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
          getDashedName(rwdBlocks, name, id),
          id
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

function toParams(
  superblock: string,
  block: string,
  dashedName: string,
  id: string
) {
  return {
    params: {
      superblock,
      blockOrId: block,
      dashedName,
      id
    }
  };
}
