import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';

import Intro from '../components/Intro';
import Map from '../components/Map';
import ProgressIndicator from '../components/ProgressIndicator';
import { Spacer } from '../components/helpers';
import LearnLayout from '../components/layouts/learn';
import { defaultDonation } from '../../../config/donation-settings';
import {
  isSignedInSelector,
  userSelector,
  userFetchStateSelector
} from '../redux/selectors';

import { executeGA } from '../redux/actions';

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
  executeGA: (payload: Record<string, unknown>) => void;
  data: {
    challengeNode: {
      challenge: {
        fields: Slug;
      };
    };
  };
  path: string;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ executeGA }, dispatch);

function LearnPage({
  isSignedIn,
  executeGA,
  fetchState: { pending, complete },
  user: {
    name = '',
    completedChallengeCount = 0,
    isDonating = false,
    username = ''
  },
  data: {
    challengeNode: {
      challenge: {
        fields: { slug }
      }
    }
  },
  path
}: LearnPageProps) {
  const { t } = useTranslation();

  const onDonationAlertClick = () => {
    executeGA({
      event: 'donation_related',
      action: `Learn Donation Alert Click`,
      duration: defaultDonation.donationDuration,
      amount: defaultDonation.donationAmount
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
              isSignedIn={isSignedIn}
              name={name}
              pending={pending}
              slug={slug}
              onDonationAlertClick={onDonationAlertClick}
              isDonating={isDonating}
            />
            {isSignedIn && (
              <ProgressIndicator
                completedChallengeCount={completedChallengeCount}
                username={username}
                pathname={path}
              />
            )}
            <h2 className='sr-only'>{t('settings.headings.certs')}</h2>
            <Map />
            <Spacer size='large' />
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
