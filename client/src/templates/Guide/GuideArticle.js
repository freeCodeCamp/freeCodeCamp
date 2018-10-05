import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Breadcrumbs from './components/Breadcrumbs';
import Layout from '../../components/layouts/GuideLayout';

const propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.shape({
    meta: PropTypes.objectOf(PropTypes.string)
  })
};

class GuideArticle extends Component {
  constructor(props) {
    super(props);

    this.article = null;
  }

  componentDidMount() {
    if (this.article && document.activeElement.hasAttribute('data-navitem')) {
      this.article.focus();
    }
  }

  render() {
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
    } = this.props;
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | freeCodeCamp Guide`}</title>
          <link
            href={`https://www.freecodecamp.org${slug}`}
            rel='canonical'
          />
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
          ref={article => {
            this.article = article;
          }}
          tabIndex='-1'
        />
      </Layout>
    );
  }
}

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
