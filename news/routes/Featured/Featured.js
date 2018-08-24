import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Helmet from 'react-helmet';

import { getFeaturedList } from '../../utils/ajax';
import { Loader, Spacer } from '../../../common/app/helperComponents';
import BannerWide from '../../components/BannerWide';
import ArticleMeta from '../../components/ArticleMeta';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

const styles = `
  .featured-list {
    list-style: none;
    padding-left: 0;
    margin-top: 40px;
  }

  .featured-list-item {
    padding-bottom: 20px;
  }

  .featured-list-item .title {
    color: #333;
    padding-bottom: 20px;
  }

  .featured-list-item a {
    padding-top: 5px;
  }

  .featured-list-image {
    margin: 0 auto;
  }

  .featured-list-item a:hover,
  .featured-list-item a:focus {
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-color: transparaent;
  }
  .featured-list-item a:hover > .meta-wrapper,
  .featured-list-item a:focus > .meta-wrapper {
    color: #006400;
  }
`;

class Featured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchState: {
        pending: false,
        complete: false,
        errored: false,
        error: null
      },
      featuredList: []
    };

    this.fetchFeaturedList = this.fetchFeaturedList.bind(this);
  }

  componentDidMount() {
    return this.fetchFeaturedList();
  }

  fetchFeaturedList() {
    return this.setState(
      {
        fetchState: { pending: true, complete: false, errored: false }
      },
      () =>
        getFeaturedList().then(({ data }) =>
          this.setState({
            featuredList: data,
            fetchState: {
              pending: false,
              complete: true,
              errored: false,
              error: null
            }
          })
        )
    );
  }

  createHandleArticleClick(slug, article) {
    const { history } = this.props;
    return e => {
      e.preventDefault();
      return history.push({ pathname: slug, state: { article } });
    };
  }

  renderFeatured(articles) {
    return articles.map(article => {
      const slug = `/${article.author.username}/`.concat(
        article.slugPart,
        '--',
        article.shortId
      );
      const { featureImage, shortId, title } = article;
      return (
        <li className='featured-list-item' key={shortId}>
          <a
            href={'/news' + slug}
            onClick={this.createHandleArticleClick(slug, article)}
            >
            <h3 className='title'>{title}</h3>
            {featureImage && featureImage.src ? (
              <Image
                className='featured-list-image'
                responsive={true}
                src={featureImage.src}
              />
            ) : (
              <BannerWide />
            )}
            <ArticleMeta article={article} />
          </a>
          <Spacer />
        </li>
      );
    });
  }

  render() {
    const {
      fetchState: { pending, complete, errored },
      featuredList
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
    return (
      <div>
        <Helmet>
          <style>{styles}</style>
          <title>Featured | freeCodeCamp News</title>
        </Helmet>
        <ul className='featured-list'>{this.renderFeatured(featuredList)}</ul>
      </div>
    );
  }
}

Featured.displayName = 'Featured';
Featured.propTypes = propTypes;

export default withRouter(Featured);
