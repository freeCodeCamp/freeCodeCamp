import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ArticleMeta from '../../components/ArticleMeta';

const propTypes = {
  article: PropTypes.shape({
    author: PropTypes.objectOf(PropTypes.string)
  })
};

const styles = `
  .author-block {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  .author-block img {
    border-radius: 20%;
  }

  .author-bio {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
  }

  .author-bio span {
    font-size: 16px;
  }

  .author-block {
    text-decoration: none;
  }
`;

function Author({ article }) {
  const {
    author: { avatar }
  } = article;
  return (
    <div className='author-block'>
      <Helmet>
        <style>{styles}</style>
      </Helmet>
      <img alt='' height='50px' src={avatar} />
      <div className='author-bio'>
        <ArticleMeta article={article} />
      </div>
    </div>
  );
}

Author.displayName = 'Author';
Author.propTypes = propTypes;

export default Author;
