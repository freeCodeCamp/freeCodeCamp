import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Row, Col } from '@freecodecamp/react-bootstrap';

import { userFetchStateSelector, isSignedInSelector } from '../redux';

import LearnLayout from '../components/layouts/Learn';
import Login from '../components/Header/components/Login';
import { Link, Spacer, Loader } from '../components/helpers';
import Map from '../components/Map';

import './learn.css';

import {
  ChallengeNode,
  AllChallengeNode,
  AllMarkdownRemark
} from '../redux/propTypes';

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  (fetchState, isSignedIn) => ({
    fetchState,
    isSignedIn
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
  isSignedIn: PropTypes.bool
};

const BigCallToAction = isSignedIn => {
  if (!isSignedIn) {
    return (
      <>
        <Spacer size={2} />
        <Row>
          <Col sm={8} smOffset={2} xs={12}>
            <Login className={'text-center'}>Sign in to save progress.</Login>
          </Col>
        </Row>
      </>
    );
  }
  return '';
};

const IndexPage = ({
  fetchState: { pending, complete },
  isSignedIn,
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
      <div className='learn-page-wrapper'>
        <Helmet title='Learn | freeCodeCamp.org' />
        {BigCallToAction(isSignedIn)}
        <Spacer size={2} />
        <h1 className='text-center'>Welcome to the freeCodeCamp curriculum</h1>
        <p>
          We have thousands of coding lessons to help you improve your skills.
        </p>
        <p>
          You can earn each certification by completing its 5 final projects.
        </p>
        <p>
          And yes - all of this is 100% free, thanks to the thousands of campers
          who{' '}
          <Link external={true} to='/donate'>
            donate
          </Link>{' '}
          to our nonprofit.
        </p>
        <p>
          If you are new to coding, we recommend you{' '}
          <Link to={slug}>start at the beginning</Link>.
        </p>
        <Map
          introNodes={mdEdges.map(({ node }) => node)}
          nodes={edges
            .map(({ node }) => node)
            .filter(({ isPrivate }) => !isPrivate)}
        />
      </div>
    </LearnLayout>
  );
};

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default connect(mapStateToProps)(IndexPage);

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
