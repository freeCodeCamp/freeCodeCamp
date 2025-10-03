import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Container, Col, Row, Spacer, Callout } from '@freecodecamp/ui';

import Intro from '../components/Intro';
import Map from '../components/Map';
import LearnLayout from '../components/layouts/learn';
import {
  isSignedInSelector,
  userSelector,
  userFetchStateSelector
} from '../redux/selectors';

import callGA from '../analytics/call-ga';
import { clientLocale } from '../../config/env.json';
import createLanguageRedirect from '../components/create-language-redirect';

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

type MaybeUser = {
  name: string;
  username: string;
  completedChallengeCount: number;
  isDonating: boolean;
} | null;

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn: boolean, user: MaybeUser) => ({
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
  user: MaybeUser;
  data: {
    challengeNode: {
      challenge: {
        fields: Slug;
      };
    } | null;
  };
}

const EMPTY_USER = { name: '', completedChallengeCount: 0, isDonating: false };

function LearnPage({
  isSignedIn,
  fetchState: { pending, complete },
  user,
  data: { challengeNode }
}: LearnPageProps) {
  const { name, completedChallengeCount, isDonating } = user ?? EMPTY_USER;

  const { t } = useTranslation();

  const slug = challengeNode?.challenge?.fields?.slug || '';

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
            {clientLocale === 'english' ? null : (
              <>
                <Spacer size='m' />
                <Callout variant='info'>
                  <p className='text-center'>
                    <strong style={{ color: 'var(--blue-dark)' }}>
                      Warning: The localized content in this language is not
                      being updated.
                    </strong>
                  </p>
                  <p>
                    Your previous progress is being saved, but you should{' '}
                    <a
                      href={createLanguageRedirect({
                        clientLocale,
                        lang: 'english'
                      })}
                    >
                      visit the English version
                    </a>{' '}
                    for up to date content. We recognize this is not ideal and
                    are working to fix it.
                  </p>
                  <p>We appreciate your patience.</p>
                </Callout>
              </>
            )}
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
