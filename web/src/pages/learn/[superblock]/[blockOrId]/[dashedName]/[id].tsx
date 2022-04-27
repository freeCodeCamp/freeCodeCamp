/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQuery } from 'querystring';
import Editor from '@monaco-editor/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
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

export default function ChallengeComponent({
  challengeData
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const curriculum = await getCurriculum();
  const { rwdBlocks, jsBlocks } = curriculum;
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  const superBlockToChallengeMap: {
    [index: string]: (pathSegments: PathSegments) => Challenge | null;
  } = {
    'responsive-web-design': (pathSegments: PathSegments) =>
      findChallenge(findBlock(rwdBlocks, pathSegments), pathSegments),
    'javascript-algorithms-and-data-structures': (pathSegments: PathSegments) =>
      findChallenge(findBlock(jsBlocks, pathSegments), pathSegments)
  };

  const { valid, pathSegments } = validateAndTransformParams(
    idToPathSegmentsMap,
    params
  );

  if (!pathSegments) {
    return {
      notFound: true,
      revalidate: 10
    };
  }
  if (valid) {
    const challengeData =
      superBlockToChallengeMap[pathSegments.superblock](pathSegments);
    return {
      props: {
        challengeData
      },
      revalidate: 10
    };
  } else {
    const { superblock, block, dashedName, id } = pathSegments;
    return {
      redirect: {
        destination: `/learn/${superblock}/${block}/${dashedName}/${id}`,
        permanent: false
      },
      revalidate: 10
    };
  }
};

function validateAndTransformParams(
  idToPathSegmentsMap: { [index: string]: PathSegments },
  params?: ParsedUrlQuery
) {
  if (!params) return { valid: false };
  if (typeof params.id !== 'string') return { valid: false };
  const pathSegmentsForId = idToPathSegmentsMap[params.id];
  if (!pathSegmentsForId) return { valid: false };
  const normalizedParams: Record<string, unknown> = {
    superblock: params.superblock,
    block: params.blockOrId,
    dashedName: params.dashedName,
    id: params.id
  };
  for (const [key, value] of Object.entries(pathSegmentsForId)) {
    if (normalizedParams[key] !== value)
      return {
        valid: false,
        pathSegments: { ...pathSegmentsForId, id: params.id }
      };
  }

  return {
    valid: true,
    pathSegments: { ...pathSegmentsForId, id: params.id }
  };
}

function findBlock(superblock: SuperBlock, params: PathSegments) {
  return superblock[params.block] ?? null;
}

function findChallenge(block: Block | null, params: PathSegments) {
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
