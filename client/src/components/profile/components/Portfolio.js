import React from 'react';
import PropTypes from 'prop-types';
import { Media } from '@freecodecamp/react-bootstrap';

import { FullWidthRow } from '../../helpers';

import './portfolio.css';

const propTypes = {
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
};

function Portfolio({ portfolio = [] }) {
  if (!portfolio.length) {
    return null;
  }
  return (
    <FullWidthRow>
      <h2 className='text-center'>Portfolio</h2>
      {portfolio.map(({ title, url, image, description, id }) => (
        <Media key={id}>
          <Media.Left align='middle'>
            {image && (
              <img
                alt={`A screen shot of ${title}`}
                className='portfolio-screen-shot'
                src={image}
              />
            )}
          </Media.Left>
          <Media.Body>
            <Media.Heading className='portfolio-heading'>
              <a href={url} rel='nofollow noopener noreferrer'>
                {title}
              </a>
            </Media.Heading>
            <p>{description}</p>
          </Media.Body>
        </Media>
      ))}
      <hr />
    </FullWidthRow>
  );
}

Portfolio.displayName = 'Portfolio';
Portfolio.propTypes = propTypes;

export default Portfolio;
