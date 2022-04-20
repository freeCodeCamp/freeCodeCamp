import { GetStaticPaths, GetStaticPropsResult } from 'next';

interface Props {
  rwd?: Record<string, unknown>;
  js?: Record<string, unknown>;
}

export default function Challenge({ rwd, js }: Props) {
  return (
    <div>
      <ul>{rwd && Object.keys(rwd).map(name => <li key={name}>{name}</li>)}</ul>
      <ul>{js && Object.keys(js).map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const rwd = await fetch('http://localhost:3000/responsive-web-design');
  const js = await fetch(
    'http://localhost:3000/javascript-algorithms-and-data-structures'
  );
  const rwdBlocks = ((await rwd.json()) as { blocks: Record<string, unknown> })
    .blocks;
  const jsBlocks = ((await js.json()) as { blocks: Record<string, unknown> })
    .blocks;
  return { props: { rwd: rwdBlocks, js: jsBlocks }, revalidate: 5 };
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: true
});
