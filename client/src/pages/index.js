import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Landing from '../components/landing';
import { AllChallengeNode } from '../redux/propTypes';

export const IndexPage = ({
  data: {
    allChallengeNode: { nodes }
  }
}) => {
  return <Landing nodes={nodes} />;
};

const propTypes = {
  data: PropTypes.shape({
    allChallengeNode: AllChallengeNode
  })
};

IndexPage.propTypes = propTypes;
IndexPage.displayName = 'IndexPage';

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allChallengeNode(
      filter: { isHidden: { eq: false } }
      sort: { fields: [superOrder, order, challengeOrder] }
    ) {
      nodes {
        superBlock
      }
    }
  }
`;
