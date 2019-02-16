import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import FullWidthRow from '../../components/helpers/FullWidthRow';
import { MarkdownRemark } from '../../redux/propTypes';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: MarkdownRemark
  })
};

function SuperBlockIntroductionPage({ data: { markdownRemark } }) {
  const {
    html,
    frontmatter: { superBlock }
  } = markdownRemark;
  return (
    <Fragment>
      <Helmet>
        <title>{superBlock} | freeCodeCamp.org</title>
      </Helmet>
      <FullWidthRow>
        <div
          className='intro-layout'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </FullWidthRow>
    </Fragment>
  );
}

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';
SuperBlockIntroductionPage.propTypes = propTypes;

export default SuperBlockIntroductionPage;

export const query = graphql`
  query SuperBlockIntroPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        superBlock
      }
      html
    }
  }
`;
