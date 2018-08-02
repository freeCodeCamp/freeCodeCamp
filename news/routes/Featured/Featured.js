import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Helmet from 'react-helmet';

import { getFeaturedList } from '../../utils/ajax';
import { Loader, Spacer } from '../../../common/app/helperComponents';
import BannerWide from '../../components/BannerWide';

const propTypes = {};

const styles = `
  .featured-list {
    list-style: none;
    padding-left: 0;
  }

  .featured-list-item .title {
    color: #333;
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

  .meta-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .meta-wrapper span {
    font-size: 14px;
  }

  .meta-stats {
    text-align: end;
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
      const { featureImage, shortId, author, title, meta } = article;
      return (
        <li className='featured-list-item' key={shortId}>
          {featureImage && featureImage.src ? (<Image responsive={true} src={featureImage.src} />) : (<BannerWide />)}
          <a href={slug} onClick={this.createHandleArticleClick(slug, article)}>
            <h3 className='title'>{title}</h3>
            <div className='meta-wrapper'>
            <span>By {author.name}</span>
            <span className='meta-stats'>{`${meta.readTime} minute read`}<br />{`${article.viewCount} views`}</span>
            </div>
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
      return <Loader />;
    }

    if (complete && errored) {
      return <h2>Oh noes!! Something went wrong!</h2>;
    }
    return (
      <div>
        <Helmet>
          <style>{styles}</style>
        </Helmet>
        <h2>Welcome to freeCodeCamp News</h2>
        <hr />
        <h2>Featured Articles</h2>
        <ul className='featured-list'>
          {this.renderFeatured(featuredList)}
        </ul>
      </div>
    );
  }
}

Featured.displayName = 'Featured';
Featured.propTypes = propTypes;

export default withRouter(Featured);
