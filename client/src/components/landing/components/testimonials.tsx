import React from 'react';

import { Trans, useTranslation } from 'react-i18next';
import emmaImg from '../../../assets/images/landing/Emma.png';
import sarahImg from '../../../assets/images/landing/Sarah.png';
import shawnImg from '../../../assets/images/landing/Shawn.png';
import { LazyImage } from '../../helpers';

const Testimonials = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className='testimonials'>
      <h1 className='big-heading text-center'>
        {t('landing.testimonials.heading')}
      </h1>
      <div className='testimonials-row' data-test-label='testimonial-cards'>
        <div className='testimonial-card'>
          <div className='testimonial-card-header'>
            <LazyImage
              alt='Shawn Wang'
              className='testimonial-image'
              src={shawnImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p>
                {' '}
                <Trans>landing.testimonials.shawn.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.shawn.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <p>
                <Trans>landing.testimonials.shawn.testimony</Trans>
              </p>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='testimonial-card-header'>
            <LazyImage
              alt='Sarah Chima'
              className='testimonial-image'
              src={sarahImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p>
                {' '}
                <Trans>landing.testimonials.sarah.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.sarah.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <p>
                <Trans>landing.testimonials.sarah.testimony</Trans>
              </p>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='testimonial-card-header'>
            <LazyImage
              alt='Emma Bostian'
              className='testimonial-image'
              src={emmaImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p>
                {' '}
                <Trans>landing.testimonials.emma.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.emma.occupation</Trans>
              </p>
            </div>
            <div className='testimony'>
              <p>
                <Trans>landing.testimonials.emma.testimony</Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonials.displayName = 'Testimonals';
export default Testimonials;
