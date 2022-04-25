import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function SuperBlock() {
  const router = useRouter();
  const { superblock, block } = router.query;

  // TODO: use useEffect to redirect based on the trailing path segment.

  return (
    <>
      welcome to the superblock {superblock} at {block}
    </>
  );
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const superblock = params && params['superblock'];
  const block = params && params['block'];
  // TODO: replace this ad hoc solution via idToPathSegmentsMap (idToPathMap
  // once that's done). If the map doesn't have an entry, we can return 404 and
  // skip building the page.
  const notFound =
    superblock !== 'responsive-web-design' || block !== 'special-path';
  if (notFound) {
    return { notFound, revalidate: 10 };
  } else {
    return { props: {}, revalidate: 10 };
  }
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  };
};
