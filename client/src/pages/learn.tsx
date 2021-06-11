import React from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
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

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

interface User {
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
      fields: Slug;
    };
  };
}

function LearnPage({
  isSignedIn,
  fetchState: { pending, complete },
  user: { name = '', completedChallengeCount = 0 },
  data: {
    challengeNode: {
      fields: { slug }
    }
  }
}: LearnPageProps) {
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
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <Spacer size={2} />
          </Col>
        </Row>
      </Grid>
    </LearnLayout>
  );
}

LearnPage.displayName = 'LearnPage';

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
