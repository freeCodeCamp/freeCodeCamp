import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const propTypes = {
  author: PropTypes.objectOf(PropTypes.string)
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

function Author({ author: { name, avatar, bio } }) {
  return (
    <div className='author-block'>
      <Helmet>
        <style>{styles}</style>
      </Helmet>
      <img height='50px' src={avatar} />
      <div className='author-bio'>
        <a href='https://www.freecodecamp.org/quincylarson'>
          <span>By {name}</span>
        </a>
        <span>{bio.slice(0, 101)}</span>
      </div>
    </div>
  );
}

Author.displayName = 'Author';
Author.propTypes = propTypes;

export default Author;
