import React from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Spacer } from '../components/helpers';
import LearnLayout from '../components/layouts/Learn';
import Map from '../components/Map';
import Intro from '../components/Intro';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../redux';
import { ChallengeNode } from '../redux/propTypes';

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
    challengeNode: ChallengeNode
  }),
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isSignedIn: PropTypes.bool,
  state: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    completedChallengeCount: PropTypes.number
  })
};

const LearnPage = ({
  isSignedIn,
  fetchState: { pending, complete },
  user: { name = '', completedChallengeCount = 0 },
  data: {
    challengeNode: {
      fields: { slug }
    }
  }
}) => {
  const { t } = useTranslation();

  return (
    <LearnLayout>
      <Helmet title={t('metaTags:title')} />
      <Grid>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Intro
              complete={complete}
              completedChallengeCount={completedChallengeCount}
              isSignedIn={isSignedIn}
              name={name}
              pending={pending}
              slug={slug}
            />
            <Map />
            <Spacer size={2} />
          </Col>
        </Row>
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
  }
`;
