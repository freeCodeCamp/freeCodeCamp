import React from 'react';
import { graphql } from 'gatsby';

import Landing from '../components/landing';
import { SuperBlocks } from '../../../shared/config/curriculum';

type LandingProps = {
  data: {
    allChallengeNode: {
      nodes: {
        challenge: {
          id: string;
          superBlock: SuperBlocks;
        };
      }[];
    };
  };
};

function IndexPage({
  data: {
    allChallengeNode: { nodes: challengeNodes }
  }
}: LandingProps): JSX.Element {
  const allChallenges = challengeNodes.map(node => node.challenge);
  return <Landing allChallenges={allChallenges} />;
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;

export const query = graphql`
  query AllChallengeNode {
    allChallengeNode {
      nodes {
        challenge {
          id
          superBlock
        }
      }
    }
  }
`;
