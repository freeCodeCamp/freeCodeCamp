import React from 'react';
import PropTypes from 'prop-types';

import { ImageLoader } from '../../helpers';
import testimonialsMeta from '../landingMeta';

const propTypes = {
  page: PropTypes.string
};

const Testimonials = () => {
  const campers = Object.keys(testimonialsMeta);

  return (
    <div className='testimonials'>
      <h1 className='big-heading text-center'>
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <div className='testimonials-row' data-test-label='testimonial-cards'>
        {campers.map((camper, i) => {
          let {
            name,
            country,
            position,
            company,
            testimony
          } = testimonialsMeta[camper];
          let imageSource = require(`../../../assets/images/landing/${camper}.png`);
          return (
            <div className='testimonial-card' key={i}>
              <div className='testimonial-card-header'>
                <ImageLoader
                  alt={`${name}`}
                  className='testimonial-image'
                  src={imageSource}
                />
              </div>

              <div className='testimonials-footer'>
                <div className='testimonial-meta'>
                  <p>
                    {' '}
                    <strong>{name}</strong> in {country}
                  </p>
                  <p>
                    {position} at <strong>{company}</strong>
                  </p>
                </div>
                <div className='testimony'>{testimony}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Testimonials.displayName = 'Testimonals';
Testimonials.propTypes = propTypes;
export default Testimonials;
