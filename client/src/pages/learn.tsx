import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer } from '@freecodecamp/ui';

import Intro from '../components/Intro';
import Map from '../components/Map';
import LearnLayout from '../components/layouts/learn';
import {
  isSignedInSelector,
  userSelector,
  userFetchStateSelector
} from '../redux/selectors';

import callGA from '../analytics/call-ga';

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

interface User {
  name: string;
  username: string;
  completedChallengeCount: number;
  isDonating: boolean;
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
}

function LearnPage({
  isSignedIn,
  fetchState: { pending, complete },
  user: { name = '', completedChallengeCount = 0, isDonating = false },
  data: {
    challengeNode: {
      challenge: {
        fields: { slug }
      }
    }
  }
}: LearnPageProps) {
  const { t } = useTranslation();

  const onLearnDonationAlertClick = () => {
    callGA({
      event: 'donation_related',
      action: `Learn Donation Alert Click`
    });
  };
  return (
    <LearnLayout>
      <Helmet title={t('metaTags:title')} />
      <Container>
        <Row>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Intro
              complete={complete}
              completedChallengeCount={completedChallengeCount}
              isSignedIn={isSignedIn}
              name={name}
              pending={pending}
              slug={slug}
              onLearnDonationAlertClick={onLearnDonationAlertClick}
              isDonating={isDonating}
            />
            <Map />
            <Spacer size='l' />
          </Col>
        </Row>
      </Container>
    </LearnLayout>
  );
}

LearnPage.displayName = 'LearnPage';

export default connect(mapStateToProps)(LearnPage);

export const query = graphql`
  query LearnPageQuery {
    challengeNode(
      challenge: {
        superOrder: { eq: 0 }
        order: { eq: 0 }
        challengeOrder: { eq: 0 }
      }
    ) {
      challenge {
        fields {
          slug
        }
      }
    }
  }
`;
