/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { ChallengeNode } from '../redux/propTypes';
import { toggleMapModal } from '../redux/app';

import './index.css';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMapModal }, dispatch);

const propTypes = {
  data: PropTypes.shape({
    challengeNode: ChallengeNode
  }),
  toggleMapModal: PropTypes.func.isRequired
};

const IndexPage = ({
  data: { challengeNode: { title, fields: { slug, blockName } } },
  toggleMapModal
}) => (
  <div className='index-page-wrapper'>
    <Helmet title='Welcome to learn.freeCodeCamp!' />
    <h1>Welcome to learn.freeCodeCamp.org</h1>
    <p>We have thousands of coding lessons to help you improve your skills.</p>
    <p>
      You can earn verified certifications by completing each sections 5
      required projects.
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
    <h3>Want to dive into our curriculum?</h3>
    <Button block={true} bsSize='lg' bsStyle='primary' onClick={toggleMapModal}>
      Explore the curriculum
    </Button>
  </div>
);

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);

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
