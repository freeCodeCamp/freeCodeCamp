/* global graphql */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import {
  ChallengeNode,
  AllChallengeNode,
  AllMarkdownRemark
} from '../redux/propTypes';
import Spacer from '../components/util/Spacer';
import Map from '../components/Map';

import './index.css';

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
    challengeNode: { fields: { slug } },
    allChallengeNode: { edges },
    allMarkdownRemark: { edges: mdEdges }
  }
}) => (
  <div className='index-page-wrapper'>
    <Helmet title='Welcome to learn.freeCodeCamp!' />
    <Spacer />
    <Spacer />
    <h2>Welcome to the freeCodeCamp curriculum</h2>
    <p>We have thousands of coding lessons to help you improve your skills.</p>
    <p>You can earn each certification by completing its 5 final projects.</p>
    <p>
      And yes - all of this is 100% free, thanks to the thousands of campers who{' '}
      <a href='https://donate.freecodecamp.org' target='_blank'>
        donate
      </a>{' '}
      to our nonprofit.
    </p>
    <p>
      If you are new to coding, we recommend you{' '}
      <Link to={slug}>start at the beginning</Link>.
    </p>
    <Spacer />
    <Map
      introNodes={mdEdges.map(({ node }) => node)}
      nodes={edges
        .map(({ node }) => node)
        .filter(({ isPrivate }) => !isPrivate)}
    />
  </div>
);

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default connect(mapStateToProps)(IndexPage);

export const query = graphql`
  query FirstChallenge {
    challengeNode(order: { eq: 0 }, suborder: { eq: 1 }) {
      fields {
        slug
      }
    }
    allChallengeNode(
      filter: { isPrivate: { eq: false } }
      sort: { fields: [superOrder, order, suborder] }
    ) {
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
          isPrivate
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
