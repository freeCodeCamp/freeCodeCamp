import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  ChallengeNode,
  AllChallengeNode,
  AllMarkdownRemark
} from '../redux/propTypes';

import LearnLayout from '../components/layouts/Learn';
import { Link, Spacer } from '../components/helpers';
import Map from '../components/Map';

import './learn.css';

const mapStateToProps = () => ({});

const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode,
    allChallengeNode: AllChallengeNode,
    allMarkdownRemark: AllMarkdownRemark
  })
};

const IndexPage = ({
  data: {
    challengeNode: {
      fields: { slug }
    },
    allChallengeNode: { edges },
    allMarkdownRemark: { edges: mdEdges }
  }
}) => (
  <LearnLayout>
    <div className='learn-page-wrapper'>
      <Helmet title='Learn | freeCodeCamp.org' />
      <Spacer />
      <Spacer />
      <h1 className='text-center'>Welcome to the freeCodeCamp curriculum</h1>
      <p>
        We have thousands of coding lessons to help you improve your skills.
      </p>
      <p>You can earn each certification by completing its 5 final projects.</p>
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
