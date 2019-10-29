import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Landing from '../components/landing';
import { AllChallengeNode } from '../redux/propTypes';

export const IndexPage = ({
  data: {
    allChallengeNode: { edges }
  }
}) => {
  return <Landing edges={edges} />;
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
  query challNodes {
    allChallengeNode(sort: { fields: [superOrder, order, challengeOrder] }) {
      edges {
        node {
          fields {
            slug
            blockName
          }
          id
          block
          title
          superBlock
          dashedName
        }
      }
    }
  }
`;
