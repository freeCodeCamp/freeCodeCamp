import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Breadcrumbs from './Breadcrumbs';

const propTypes = {
  children: PropTypes.any,
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.shape({
    meta: PropTypes.objectOf(PropTypes.string)
  })
};

const ArticleLayout = props => {
  const {
    children,
    location: { pathname },
    data: {
      markdownRemark: {
        fields: { slug },
        frontmatter: { title }
      }
    },
    pageContext: { meta }
  } = props;
  return (
    <Fragment>
      <Helmet>
        <title>{`${title} | freeCodeCamp.org`}</title>
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
      {children}
    </Fragment>
  );
};

ArticleLayout.displayName = 'ArticleLayout';
ArticleLayout.propTypes = propTypes;

export default ArticleLayout;

export const fragmentQuery = graphql`
  fragment ArticleLayout on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
`;
