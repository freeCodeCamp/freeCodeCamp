import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Default';

import FullWidthRow from '../components/helpers/FullWidthRow';
import Featured from '../templates/News/Featured';

const propTypes = {
  data: PropTypes.shape({
    allNewsArticleNode: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          shortId: PropTypes.string,
          slugPart: PropTypes.string,
          featureImage: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
            caption: PropTypes.string
          }),
          meta: PropTypes.shape({
            readTime: PropTypes.number
          }),
          author: PropTypes.shape({
            name: PropTypes.string,
            avatar: PropTypes.string,
            twitter: PropTypes.string,
            username: PropTypes.string,
            bio: PropTypes.string
          }),
          viewCount: PropTypes.number,
          firstPublishedDate: PropTypes.string
        })
      )
    })
  })
};

export default function NewsIndexPage(props) {
  const {
    allNewsArticleNode: { edges }
  } = props.data;
  const articles = edges.map(({ node }) => node);
  return (
    <Layout>
      <Grid>
        <FullWidthRow>
          <h1>News - freeCodeCamp.org</h1>
        </FullWidthRow>
        <FullWidthRow>
          <Featured featuredList={articles} />
        </FullWidthRow>
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  {
    allNewsArticleNode(sort: { fields: firstPublishedDate, order: DESC }) {
      edges {
        node {
          title
          shortId
          slugPart
          featureImage {
            src
            alt
            caption
          }
          meta {
            readTime
          }
          author {
            name
            avatar
            twitter
            bio
            username
          }
          viewCount
          firstPublishedDate
          fields {
            slug
          }
        }
      }
    }
  }
`;

NewsIndexPage.displayName = 'NewsIndexPage';
NewsIndexPage.propTypes = propTypes;
