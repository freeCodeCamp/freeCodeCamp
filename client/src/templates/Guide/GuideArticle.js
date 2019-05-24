import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ArticleLayout from './components/ArticleLayout';

const propTypes = {
  data: PropTypes.object
};

const GuideArticle = props => {
  const {
    data: {
      markdownRemark: { html }
    }
  } = props;
  return (
    <ArticleLayout {...props}>
      <article
        className='article'
        dangerouslySetInnerHTML={{ __html: html }}
        id='article'
        tabIndex='-1'
      />
    </ArticleLayout>
  );
};

GuideArticle.displayName = 'GuideArticle';
GuideArticle.propTypes = propTypes;

export default GuideArticle;

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      ...ArticleLayout
    }
  }
`;
