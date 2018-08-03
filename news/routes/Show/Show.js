import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Youtube from 'react-youtube';
import { Image } from 'react-bootstrap';

import Author from './components/Author';
import { Loader } from '../../../common/app/helperComponents';
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
    height: 100%;
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
    if (article) {
      const [, shortId] = slug.split('--');
      postPopularityEvent({
        event: 'view',
        timestamp: Date.now(),
        shortId
      });
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
      return <Loader />;
    }

    if (complete && errored) {
      return <h2>Oh noes!! Something went wrong!</h2>;
    }

    return (
      <article className='show-article'>
        <Helmet>
          <style>{styles}</style>
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
      </article>
    );
  }
}

ShowArticle.displayName = 'ShowArticle';
ShowArticle.propTypes = propTypes;

export default withRouter(ShowArticle);
