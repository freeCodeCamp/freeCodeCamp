import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Image } from '@freecodecamp/react-bootstrap';

import Spacer from '../../../components/helpers/Spacer';
import BannerWide from '../components/BannerWide';
import ArticleMeta from '../components/ArticleMeta';

import './featured.css';

const propTypes = {
  featuredList: PropTypes.arrayOf(PropTypes.object)
};

class Featured extends Component {
  createHandleArticleClick(slug) {
    return e => {
      e.preventDefault();
      return navigate(slug);
    };
  }

  renderFeatured(articles) {
    return articles.map(article => {
      const { featureImage, shortId, title, fields: {slug} } = article;
      return (
        <li className='featured-list-item' key={shortId}>
          <a
            href={'/news' + slug}
            onClick={this.createHandleArticleClick(slug)}
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
    const { featuredList } = this.props;
    return (
      <ul className='featured-list'>{this.renderFeatured(featuredList)}</ul>
    );
  }
}

Featured.displayName = 'Featured';
Featured.propTypes = propTypes;

export default Featured;
