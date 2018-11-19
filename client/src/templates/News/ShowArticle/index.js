import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Youtube from 'react-youtube';
import { Image, Grid } from '@freecodecamp/react-bootstrap';

import Layout from '../../../components/layouts/Default';
import Author from './components/Author';
import FullWidthRow from '../../../components/helpers/FullWidthRow';
import Spacer from '../../../components/helpers/Spacer';
import { postPopularityEvent } from '../../../utils/ajax';
import { newsArticleNodePropTypes } from './proptypes';

import './show-article.css';

const propTypes = {
  data: PropTypes.shape({
    newsArticleNode: newsArticleNodePropTypes
  })
};

const youtubeOpts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

class ShowArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchState: {
        pending: false,
        complete: false,
        errored: false,
        error: null
      },
      currentArticle: {},
      requiredArticle: ''
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const { shortId } = this.props.data.newsArticleNode;
    return postPopularityEvent({
      event: 'view',
      timestamp: Date.now(),
      shortId
    });
  }

  youtubeReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const {
      data: {
        newsArticleNode: {
          title,
          renderableContent,
          youtubeId,
          featureImage,
          fields: { slug }
        },
        newsArticleNode
      }
    } = this.props;

    // RegEx finds the first paragraph and groups the content
    const description = renderableContent.join('').match(/<p>(.*?)<\/p>/)[1];
    const pageTitle = `${title} | freeCodeCamp.org`;
    return (
      <Fragment>
        <Helmet>
          <title>{pageTitle}</title>
          <link
            href={`https://www.freecodecamp.org/news${slug}`}
            rel='canonical'
          />
          <meta
            content={`https://www.freecodecamp.org/news${slug}`}
            property='og:url'
          />
          <meta content={pageTitle} property='og:title' />
          <meta content={description} property='og:description' />
          <meta content={description} name='description' />
          <meta content={featureImage.src} property='og:image' />
        </Helmet>
        <Layout>
          <article className='show-article'>
            <Spacer />
            <Author article={newsArticleNode} />
            <Grid>
              <FullWidthRow>
                <h2>{title}</h2>
              </FullWidthRow>
              {featureImage ? (
                <FullWidthRow>
                  <div className='feature-image-wrapper'>
                    <figure>
                      <Image
                        alt={featureImage.alt}
                        responsive={true}
                        src={featureImage.src}
                      />
                      {featureImage.caption ? (
                        <figcaption
                          dangerouslySetInnerHTML={{
                            __html: featureImage.caption
                          }}
                        />
                      ) : null}
                    </figure>
                  </div>
                </FullWidthRow>
              ) : null}
              <FullWidthRow>
                <Spacer />
                <div
                  dangerouslySetInnerHTML={{
                    __html: renderableContent.join('')
                  }}
                />
              </FullWidthRow>
              {youtubeId ? (
                <Fragment>
                  <div className='youtube-wrapper'>
                    <Youtube
                      onReady={this.youtubeReady}
                      opts={youtubeOpts}
                      videoId={youtubeId}
                    />
                  </div>
                  <Spacer />
                </Fragment>
              ) : null}
            </Grid>
          </article>
        </Layout>
      </Fragment>
    );
  }
}

ShowArticle.displayName = 'ShowArticle';
ShowArticle.propTypes = propTypes;

export default ShowArticle;

export const query = graphql`
  fragment newsArticleContent on NewsArticleNode {
    title
    renderableContent
    featureImage {
      src
      alt
      caption
    }
    fields {
      slug
    }
    author {
      name
      avatar
      twitter
      bio
      username
    }
    meta {
      readTime
    }
    firstPublishedDate
    shortId
  }

  query NewsArticleById($id: String!) {
    newsArticleNode(id: { eq: $id }) {
      ...newsArticleContent
    }
  }
`;
