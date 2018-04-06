/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { ChallengeNode } from '../redux/propTypes';

import './index.css';

const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  })
};

const IndexPage = ({
  data: { challengeNode: { title, fields: { slug, blockName } } }
}) => (
  <div className='index-page-wrapper'>
    <Helmet title='Welcome to learn.freeCodeCamp!' />
    <h1>Welcome to learn.freeCodeCamp.org</h1>
    <p>
      Check out the lesson map on the left. We have thousands of coding lessons
      to help you improve your skills.
    </p>
    <p>
      You can earn verified certificates by completing certificate's 5 required
      projects.
    </p>
    <p>
      {'And yes - all of this is 100% free, thanks to the thousands of ' +
        'campers who '}
      <a href='https://donate.freecodecamp.org' target='_blank'>
        donate
      </a>{' '}
      to our nonprofit.
    </p>
    <h3>Not sure where to start?</h3>
    <p>
      We recommend you start at the beginning{' '}
      <Link to={slug}>{`${blockName} -> ${title}`}</Link>
    </p>
  </div>
);

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default IndexPage;

export const query = graphql`
  query FirstChallenge {
    challengeNode(order: { eq: 0 }, suborder: { eq: 1 }) {
      title
      fields {
        slug
        blockName
      }
    }
  }
`;
