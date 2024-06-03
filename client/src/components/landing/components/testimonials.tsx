import React from 'react';

import { Trans, useTranslation } from 'react-i18next';
import emmaImg from '../../../assets/images/landing/Emma.png';
import sarahImg from '../../../assets/images/landing/Sarah.png';
import shawnImg from '../../../assets/images/landing/Shawn.png';
import { LazyImage } from '../../helpers';
import BigCallToAction from './big-call-to-action';

const Testimonials = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className='testimonials'>
      <h2
        className='big-heading text-center'
        data-playwright-test-label='testimonials-section-header'
      >
        {t('landing.testimonials.heading')}
      </h2>
      <div className='testimonials-row' data-test-label='testimonial-cards'>
        <div
          className='testimonial-card'
          data-playwright-test-label='testimonial-card'
        >
          <div
            className='testimonial-card-header'
            data-playwright-test-label='testimonials-endorser-image-container'
          >
            <LazyImage
              alt='Shawn Wang, a young-looking Asian man, smiling for a selfie with a snow-capped mountain in the background.'
              className='testimonial-image'
              src={shawnImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <h3 data-playwright-test-label='testimonials-endorser-location'>
                {' '}
                <Trans>landing.testimonials.shawn.location</Trans>
              </h3>
              <p data-playwright-test-label='testimonials-endorser-occupation'>
                <Trans>landing.testimonials.shawn.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <blockquote>
                <p data-playwright-test-label='testimonials-endorser-testimony'>
                  <Trans>landing.testimonials.shawn.testimony</Trans>
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div
          className='testimonial-card'
          data-playwright-test-label='testimonial-card'
        >
          <div
            className='testimonial-card-header'
            data-playwright-test-label='testimonials-endorser-image-container'
          >
            <LazyImage
              alt='Sarah Chima, a young-looking Black woman, smiling for the camera while sitting in a chair.'
              className='testimonial-image'
              src={sarahImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <h3 data-playwright-test-label='testimonials-endorser-location'>
                {' '}
                <Trans>landing.testimonials.sarah.location</Trans>
              </h3>
              <p data-playwright-test-label='testimonials-endorser-occupation'>
                <Trans>landing.testimonials.sarah.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <blockquote>
                <p data-playwright-test-label='testimonials-endorser-testimony'>
                  <Trans>landing.testimonials.sarah.testimony</Trans>
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div
          className='testimonial-card'
          data-playwright-test-label='testimonial-card'
        >
          <div
            className='testimonial-card-header'
            data-playwright-test-label='testimonials-endorser-image-container'
          >
            <LazyImage
              alt='Emma Bostian, a young-looking White woman, smiling for the camera in front of green foliage.'
              className='testimonial-image'
              src={emmaImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <h3 data-playwright-test-label='testimonials-endorser-location'>
                {' '}
                <Trans>landing.testimonials.emma.location</Trans>
              </h3>
              <p data-playwright-test-label='testimonials-endorser-occupation'>
                <Trans>landing.testimonials.emma.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <blockquote>
                <p data-playwright-test-label='testimonials-endorser-testimony'>
                  <Trans>landing.testimonials.emma.testimony</Trans>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <BigCallToAction />
    </div>
  );
};

Testimonials.displayName = 'Testimonals';
export default Testimonials;
