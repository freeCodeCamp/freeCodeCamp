import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Breadcrumbs from './components/Breadcrumbs';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.shape({
    meta: PropTypes.objectOf(PropTypes.string)
  })
};

const GuideArticle = props => {
  const {
    location: { pathname },
    data: {
      markdownRemark: {
        html,
        fields: { slug },
        frontmatter: { title }
      }
    },
    pageContext: { meta }
  } = props;
  return (
    <Fragment>
      <Helmet>
        <title>{`${title} | freeCodeCamp Guide`}</title>
        <link href={`https://www.freecodecamp.org${slug}`} rel='canonical' />
        <meta
          content={`https://www.freecodecamp.org${slug}`}
          property='og:url'
        />
        <meta content={title} property='og:title' />
        <meta
          content={meta.description ? meta.description : ''}
          property='og:description'
        />
        <meta
          content={meta.description ? meta.description : ''}
          name='description'
        />
        <meta content={meta.featureImage} property='og:image' />
      </Helmet>
      <Breadcrumbs path={pathname} />
      <article
        className='article'
        dangerouslySetInnerHTML={{ __html: html }}
        id='article'
        tabIndex='-1'
      />
    </Fragment>
  );
};

GuideArticle.displayName = 'GuideArticle';
GuideArticle.propTypes = propTypes;

export default GuideArticle;

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
