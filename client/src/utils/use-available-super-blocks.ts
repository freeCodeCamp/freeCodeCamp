import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface AvailableSuperBlocksQuery {
  allSuperBlockStructure: { nodes: { superBlock: string }[] };
}

// The curriculum build decides which superblocks exist (this can vary per
// language). Components use this hook to render only what the curriculum
// contains.
export function useAvailableSuperBlocks(): Set<string> {
  const data = useStaticQuery<AvailableSuperBlocksQuery>(graphql`
    query AvailableSuperBlocks {
      allSuperBlockStructure {
        nodes {
          superBlock
        }
      }
    }
  `);

  return useMemo(
    () =>
      new Set(data.allSuperBlockStructure.nodes.map(node => node.superBlock)),
    [data]
  );
}
