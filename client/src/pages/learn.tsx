import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';

import Intro from '../components/Intro';
import Map from '../components/Map';
import { Spacer } from '../components/helpers';
import LearnLayout from '../components/layouts/learn';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  executeGA
} from '../redux';

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

interface User {
  email: string;
  name: string;
  username: string;
  completedChallengeCount: number;
}

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn: boolean, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

interface Slug {
  slug: string;
}

interface LearnPageProps {
  isSignedIn: boolean;
  fetchState: FetchState;
  state: Record<string, unknown>;
  user: User;
  data: {
    challengeNode: {
      challenge: {
        fields: Slug;
      };
    };
  };
  executeGA: (payload: Record<string, unknown>) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

function LearnPage({
  isSignedIn,
  user,
  fetchState: { pending, complete },
  user: { name = '', completedChallengeCount = 0 },
  executeGA,
  data: {
    challengeNode: {
      challenge: {
        fields: { slug }
      }
    }
  }
}: LearnPageProps) {
  const { t } = useTranslation();

  const onAlertClick = () => {
    executeGA({
      type: 'event',
      data: {
        category: 'Donation Related',
        action: `learn donation alert click`
      }
    });
  };

  return (
    <LearnLayout>
      <Helmet title={t('metaTags:title')} />
      <Grid>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Intro
              complete={complete}
              completedChallengeCount={completedChallengeCount}
              email={user.email}
              isSignedIn={isSignedIn}
              name={name}
              onAlertClick={onAlertClick}
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
}

LearnPage.displayName = 'LearnPage';

export default connect(mapStateToProps, mapDispatchToProps)(LearnPage);

export const query = graphql`
  query FirstChallenge {
    challengeNode(challenge: { order: { eq: 0 }, challengeOrder: { eq: 0 } }) {
      challenge {
        fields {
          slug
        }
      }
    }
  }
`;
