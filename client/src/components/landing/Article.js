import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../helpers';
import isValidArticle from '../../utils/isValidArticle';

const propTypes = {
  article: PropTypes.object
};

function dateNameFinder(url) {
  let dateNameSlice = url.slice(url.search('size') + 5);
  return dateNameSlice.slice(dateNameSlice.indexOf('/') + 1);
}

class Article extends Component {
  state = { imageError: false };
  render() {
    const { article } = this.props;

    // dont render an article if it is not valid
    if (!isValidArticle(article)) return '';

    const imageNameAndDate = dateNameFinder(article.image);
    return (
      <article className='post-card post tag-css tag-css3 tag-youtube '>
        <Link
          className='post-card-image-link'
          external={true}
          to={article.href}
        >
          {this.state.imageError ? (
            <div className='post-card-image-error'></div>
          ) : (
            <img
              alt='Learn CSS in this free 6-hour video course'
              className='post-card-image'
              onError={() => this.setState({ imageError: true })}
              sizes='(max-width: 1000px) 400px, 700px'
              src={article.image}
              srcSet={`https://freecodecamp.org/news/content/images/size/w300/${imageNameAndDate} 300w, https://freecodecamp.org/news/content/images/size/w600/${imageNameAndDate} 600w, https://freecodecamp.org/news/content/images/size/w1000/${imageNameAndDate} 1000w, https://freecodecamp.org/news/content/images/size/w2000/${imageNameAndDate} 2000w`}
            />
          )}
        </Link>

        <div className='post-card-content'>
          <div className='post-card-content-link'>
            <header className='post-card-header'>
              <span className='post-card-tags'>
                <Link external={true} to={article.tagPage}>
                  #{article.tagName}
                </Link>
              </span>
              <h2 className='post-card-title'>
                <Link external={true} to={article.href}>
                  {article.title}
                </Link>
              </h2>
            </header>
          </div>
          <footer className='post-card-meta'>
            <ul className='author-list'>
              <li className='author-list-item'>
                <div className='author-name-tooltip'>{article.authorName}</div>
                <Link
                  className='static-avatar'
                  external={true}
                  to={article.authorPage}
                >
                  <img
                    alt={article.authorName}
                    className='author-profile-image'
                    src={article.avatar}
                  />
                </Link>
              </li>
            </ul>
            <Link className='meta-item' external={true} to={article.authorPage}>
              {article.authorName}
            </Link>
            <time className='meta-item'>{article.date}</time>
          </footer>
        </div>
      </article>
    );
  }
}

Article.displayName = 'Article';
Article.propTypes = propTypes;
export default Article;
