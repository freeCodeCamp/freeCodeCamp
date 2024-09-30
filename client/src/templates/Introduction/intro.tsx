import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Container } from '@freecodecamp/ui';
import { Spacer, ButtonLink } from '../../components/helpers';
import FullWidthRow from '../../components/helpers/full-width-row';
import LearnLayout from '../../components/layouts/learn';
import type { MarkdownRemark, AllChallengeNode } from '../../redux/prop-types';

import './intro.css';

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
    frontmatter: { block, superBlock }
  } = markdownRemark;
  const firstLesson =
    allChallengeNode && allChallengeNode.edges[0].node.challenge;
  const firstLessonPath = firstLesson
    ? firstLesson.fields.slug
    : '/strange-place';
  const blockTitle =
    t(`intro:${superBlock}.blocks.${block}.title`) + ' | freeCodeCamp.org';
  return (
    <LearnLayout>
      <Helmet>
        <title>{blockTitle}</title>
      </Helmet>
      <Container className='intro-layout-container'>
        <FullWidthRow>
          <div
            className='intro-layout'
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </FullWidthRow>
        <FullWidthRow>
          <ButtonLink block size='large' href={firstLessonPath}>
            {t('buttons.first-lesson')}
          </ButtonLink>
          <Spacer size='small' />
          <ButtonLink block size='large' href='/learn'>
            {t('buttons.view-curriculum')}
          </ButtonLink>
          <Spacer size='small' />
          <hr />
        </FullWidthRow>
      </Container>
    </LearnLayout>
  );
}

IntroductionPage.displayName = 'IntroductionPage';

export default IntroductionPage;

export const query = graphql`
  query IntroPageBySlug($id: String!, $block: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        block
        superBlock
      }
      html
    }
    allChallengeNode(
      sort: { fields: [challenge___challengeOrder] }
      filter: { challenge: { block: { eq: $block } } }
      limit: 1
    ) {
      edges {
        node {
          challenge {
            fields {
              slug
            }
          }
        }
      }
    }
  }
`;
