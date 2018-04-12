/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import { MarkdownRemark } from '../../redux/propTypes';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: MarkdownRemark
  })
};

function IntroductionPage({ data: { markdownRemark } }) {
  const { html } = markdownRemark;
  return (
    <div className='intro-layout' dangerouslySetInnerHTML={{ __html: html }} />
  );
}

IntroductionPage.displayName = 'IntroductionPage';
IntroductionPage.propTypes = propTypes;

export default IntroductionPage;

export const query = graphql`
  query IntroPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
