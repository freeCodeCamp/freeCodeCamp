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
  userSelector,
  hardGoTo as navigate
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
  navigate: PropTypes.func.isRequired,
  state: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string
  })
};

// choose between the state from landing page and hash from url.
const hashValueSelector = (state, hash) => {
  if (state && state.superBlock) return dasherize(state.superBlock);
  else if (hash) return hash.substr(1);
  else return null;
};
const mapDispatchToProps = {
  navigate
};

export const LearnPage = ({
  location: { hash = '', state = '' },
  isSignedIn,
  navigate,
  fetchState: { pending, complete },
  user: { name = '', username = '' },
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
          isSignedIn={isSignedIn}
          name={name}
          navigate={navigate}
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
            .filter(({ isPrivate }) => !isPrivate)}
        />
      </Grid>
    </LearnLayout>
  );
};

LearnPage.displayName = 'LearnPage';
LearnPage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnPage);

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
