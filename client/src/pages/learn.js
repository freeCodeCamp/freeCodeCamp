import React from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import LearnLayout from '../components/layouts/Learn';
import { dasherize } from '../../../utils/slugs';
import Map from '../components/Map';
import Intro from '../components/Intro';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../redux';
import {
  ChallengeNode,
  AllChallengeNode,
  AllMarkdownRemark
} from '../redux/propTypes';

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState, isSignedIn, user) => ({
    fetchState,
    isSignedIn,
    user
  })
);

const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode,
    allChallengeNode: AllChallengeNode,
    allMarkdownRemark: AllMarkdownRemark
  }),
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  hash: PropTypes.string,
  isSignedIn: PropTypes.bool,
  location: PropTypes.object,
  state: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    completedChallengeCount: PropTypes.number
  })
};

// choose between the state from landing page and hash from url.
const hashValueSelector = (state, hash) => {
  if (state && state.superBlock) return dasherize(state.superBlock);
  else if (hash) return hash.substr(1);
  else return null;
};

export const LearnPage = ({
  location: { hash = '', state = '' },
  isSignedIn,
  fetchState: { pending, complete },
  user: { name = '', username = '', completedChallengeCount = 0 },
  data: {
    challengeNode: {
      fields: { slug }
    },
    allChallengeNode: { edges },
    allMarkdownRemark: { edges: mdEdges }
  }
}) => {
  const hashValue = hashValueSelector(state, hash);
  return (
    <LearnLayout>
      <Helmet title='Learn to code at home | freeCodeCamp.org' />
      <Grid>
        <Intro
          complete={complete}
          completedChallengeCount={completedChallengeCount}
          isSignedIn={isSignedIn}
          name={name}
          pending={pending}
          slug={slug}
          username={username}
        />
        <Map
          hash={hashValue}
          introNodes={mdEdges.map(({ node }) => node)}
          isSignedIn={isSignedIn}
          nodes={edges
            .map(({ node }) => node)
            .filter(({ isPrivate, isHidden }) => !isPrivate && !isHidden)}
        />
      </Grid>
    </LearnLayout>
  );
};

LearnPage.displayName = 'LearnPage';
LearnPage.propTypes = propTypes;

export default connect(mapStateToProps)(LearnPage);

export const query = graphql`
  query FirstChallenge {
    challengeNode(order: { eq: 0 }, challengeOrder: { eq: 0 }) {
      fields {
        slug
      }
    }
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
          isRequired
          superBlock
          dashedName
          isHidden
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { block: { ne: null } } }) {
      edges {
        node {
          frontmatter {
            title
            block
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
