import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { SuperBlocks } from '../../../config/certification-settings';
import envData from '../../../config/env.json';
import { isAuditedCert } from '../../../utils/is-audited';
import Intro from '../components/Intro';
import Map from '../components/Map';
import { Spacer } from '../components/helpers';
import LearnLayout from '../components/layouts/learn';
import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../redux';

const { curriculumLocale } = envData;

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
      challenge: {
        fields: Slug;
      };
    };
  };
}

function LearnPage({
  isSignedIn,
  fetchState: { pending, complete },
  user: { name = '', completedChallengeCount = 0 },
  data: {
    challengeNode: {
      challenge: {
        fields: { slug }
      }
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
              slug={
                isAuditedCert(curriculumLocale, SuperBlocks.RespWebDesignNew)
                  ? slug
                  : '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
              }
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

export default connect(mapStateToProps, null)(LearnPage);

export const query = graphql`
  query FirstChallenge {
    challengeNode(
      challenge: {
        superBlock: { eq: "2022/responsive-web-design" }
        challengeOrder: { eq: 0 }
        order: { eq: 0 }
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
