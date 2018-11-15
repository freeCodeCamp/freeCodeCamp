import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Youtube from 'react-youtube';
import { Image } from 'react-bootstrap';

import Author from './components/Author';
import { Loader, Spacer } from '../../../common/app/helperComponents';
import { getArticleById, postPopularityEvent } from '../../utils/ajax';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  location: PropTypes.shape({
    state: PropTypes.object,
    pathname: PropTypes.string
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
      slug: PropTypes.string
    })
  })
};

const youtubeOpts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

const styles = `

  .show-article figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .show-article figcaption > * {
    font-size: 16px;
  }

  .show-article figcaption {
    padding-top: 5px;
  }

  .show-article a {
    text-decoration: underline;
  }

  .feature-image-wrapper {
    padding-top: 32px;
  }
  .youtube-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    overflow: hidden;
  }
  .youtube-wrapper iframe {
    position: absolute;
    left: 0;
    width: 100%;
    height: 95%;
  }
`;

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

    this.fetchArticle = this.fetchArticle.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      history,
      match: {
        params: { username, slug }
      },
      location: { state: { article } = {} }
    } = this.props;

    if (username && !slug) {
      return history.push('/');
    }
    const [, shortId] = slug.split('--');
    postPopularityEvent({
      event: 'view',
      timestamp: Date.now(),
      shortId
    });
    if (article) {
      /* eslint-disable react/no-did-mount-set-state */
      return this.setState(
        {
          fetchState: {
            complete: true
          },
          currentArticle: article,
          requiredArticle: shortId
        },
        () => {
          window.location.state = null;
        }
      );
    }
    return this.fetchArticle();
  }

  fetchArticle() {
    const {
      match: {
        params: { slug }
      }
    } = this.props;

    const [, shortId] = slug.split('--');
    return this.setState(
      {
        requiredArticle: shortId,
        fetchState: { pending: true, complete: false, errored: false }
      },
      () =>
        getArticleById(shortId)
          .then(({ data }) =>
            this.setState({
              currentArticle: data,
              fetchState: {
                pending: false,
                complete: true,
                errored: false,
                error: null
              }
            })
          )
          .catch(console.error)
    );
  }

  youtubeReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const {
      fetchState: { pending, complete, errored },
      currentArticle: { title, renderableContent, youtubeId, featureImage },
      currentArticle
    } = this.state;
    if (pending || !complete) {
      return (
        <div className='full-size' style={{ position: 'fixed', left: 0 }}>
          <Loader />
        </div>
      );
    }

    if (complete && errored) {
      return <h2>Oh noes!! Something went wrong!</h2>;
    }

    // RegEx finds the first paragraph and groups the content
    const description = renderableContent.match(/<p>(.*?)<\/p>/)[1];
    const slug = this.props.location.pathname;
    return (
      <article className='show-article'>
        <Helmet>
          <style>{styles}</style>
          <title>{`${title} | freeCodeCamp News`}</title>
          <link
            href={`https://www.freecodecamp.org/news${slug}`}
            rel='canonical'
          />
          <meta
            content={`https://www.freecodecamp.org/news${slug}`}
            property='og:url'
          />
          <meta content={title} property='og:title' />
          <meta content={description} property='og:description' />
          <meta content={description} name='description' />
          <meta content={featureImage.src} property='og:image' />
        </Helmet>
        <Author article={currentArticle} />
        <h2>{title}</h2>
        <div className='feature-image-wrapper'>
          <figure>
            <Image
              alt={featureImage.alt}
              responsive={true}
              src={featureImage.src}
            />
            {featureImage.caption ? (
              <figcaption
                dangerouslySetInnerHTML={{ __html: featureImage.caption }}
              />
            ) : null}
          </figure>
        </div>
        <Spacer />
        <div dangerouslySetInnerHTML={{ __html: renderableContent }} />
        <div className='youtube-wrapper'>
          {youtubeId ? (
            <Youtube
              onReady={this.youtubeReady}
              opts={youtubeOpts}
              videoId={youtubeId}
            />
          ) : null}
        </div>
        <Spacer />
      </article>
    );
  }
}

ShowArticle.displayName = 'ShowArticle';
ShowArticle.propTypes = propTypes;

export default withRouter(ShowArticle);
