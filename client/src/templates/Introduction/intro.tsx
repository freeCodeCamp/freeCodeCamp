import { Grid, ListGroup, ListGroupItem } from '@freecodecamp/react-bootstrap';
import { Link, graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Spacer from '../../components/helpers/spacer';
import FullWidthRow from '../../components/helpers/full-width-row';
import LearnLayout from '../../components/layouts/learn';
import {
  MarkdownRemark,
  AllChallengeNode,
  ChallengeNode
} from '../../redux/prop-types';

import './intro.css';

function renderMenuItems({
  edges = []
}: {
  edges?: Array<{ node: ChallengeNode }>;
}) {
  return edges
    .map(({ node: { challenge } }) => challenge)
    .map(({ title, fields: { slug } }) => (
      <Link key={'intro-' + slug} to={slug}>
        <ListGroupItem>{title}</ListGroupItem>
      </Link>
    ));
}

function IntroductionPage({
  data: { markdownRemark, allChallengeNode }
}: {
  data: {
    markdownRemark: MarkdownRemark;
    allChallengeNode: AllChallengeNode;
  };
}): React.FunctionComponentElement<typeof LearnLayout> {
  const { t } = useTranslation();
  const {
    html,
    frontmatter: { block }
  } = markdownRemark;
  const firstLesson =
    allChallengeNode && allChallengeNode.edges[0].node.challenge;
  const firstLessonPath = firstLesson
    ? firstLesson.fields.slug
    : '/strange-place';

  return (
    <LearnLayout>
      <Helmet>
        <title>{block} | freeCodeCamp.org</title>
      </Helmet>
      <Grid className='intro-layout-container'>
        <FullWidthRow>
          <div
            className='intro-layout'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </FullWidthRow>
        <FullWidthRow>
          <Link
            className='btn btn-lg btn-primary btn-block'
            to={firstLessonPath}
          >
            {t('buttons.first-lesson')}
          </Link>
          <Spacer size='small' />
          <Link className='btn btn-lg btn-primary btn-block' to='/learn'>
            {t('buttons.view-curriculum')}
          </Link>
          <Spacer size='small' />
          <hr />
        </FullWidthRow>
        <FullWidthRow>
          <h2 className='intro-toc-title'>{t('learn.upcoming-lessons')}</h2>
          <ListGroup className='intro-toc'>
            {allChallengeNode ? renderMenuItems(allChallengeNode) : null}
          </ListGroup>
        </FullWidthRow>
      </Grid>
    </LearnLayout>
  );
}

IntroductionPage.displayName = 'IntroductionPage';

export default IntroductionPage;

export const query = graphql`
  query IntroPageBySlug($slug: String!, $block: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        block
      }
      html
    }
    allChallengeNode(
      filter: { challenge: { block: { eq: $block } } }
      sort: {
        fields: [
          challenge___superOrder
          challenge___order
          challenge___challengeOrder
        ]
      }
    ) {
      edges {
        node {
          challenge {
            fields {
              slug
            }
            title
          }
        }
      }
    }
  }
`;
