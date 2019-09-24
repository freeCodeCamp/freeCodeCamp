import React from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../redux';

import LearnLayout from '../components/layouts/Learn';
import Login from '../components/Header/components/Login';
import { Link, Spacer, Loader } from '../components/helpers';
import Map from '../components/Map';
import Welcome from '../components/welcome';

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
  isSignedIn: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

const BigCallToAction = isSignedIn => {
  if (!isSignedIn) {
    return (
      <>
        <Row>
          <Col sm={10} smOffset={1} xs={12}>
            <Spacer />
            <Login>Sign in to save your progress.</Login>
          </Col>
        </Row>
      </>
    );
  }
  return '';
};

export const LearnPage = ({
  fetchState: { pending, complete },
  isSignedIn,
  user: { name = '' },
  data: {
    challengeNode: {
      fields: { slug }
    },
    allChallengeNode: { edges },
    allMarkdownRemark: { edges: mdEdges }
  }
}) => {
  if (pending && !complete) {
    return <Loader fullScreen={true} />;
  }

  return (
    <LearnLayout>
      <Helmet title='Learn | freeCodeCamp.org' />
      <Grid>
        <Welcome name={name} />
        <Row className='text-center'>
          <Col sm={10} smOffset={1} xs={12}>
            {BigCallToAction(isSignedIn)}
            <Spacer />
            <h3>
              If you are new to coding, we recommend you{' '}
              <Link to={slug}>start at the beginning</Link>.
            </h3>
          </Col>
        </Row>
        <Map
          introNodes={mdEdges.map(({ node }) => node)}
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
