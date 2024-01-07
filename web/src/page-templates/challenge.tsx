import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import Editor from '@monaco-editor/react';
import Link from 'next/link';

import type {
  getStaticProps,
  Challenge
} from '../pages/learn/[superblock]/[blockOrId]/[dashedName]/[id]';

export default function ChallengeComponent({
  challengeData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter();
  if (isFallback) return <div>Loading...</div>;

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
