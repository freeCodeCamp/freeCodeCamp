import React from 'react';
import Image from 'next/image';
import shawnImg from '../landing/images/Shawn.png';
import sarahImg from '../landing/images/Sarah.png';
import emmaImg from '../landing/images/Emma.png';
import styles from '../../styles/landing/Testimonials.module.css';

const Testimonials = (): JSX.Element => {
  function t(string: string): string {
    return string;
  }
  console.log(styles);
  return (
    <div className={styles.testimonialsRow}>
      <h1 className='big-heading text-center'>
        {t('landing.testimonials.heading')}
      </h1>
      <div className='' data-test-label='testimonial-cards'>
        <div className=''>
          <div className='testimonial-card-header'>
            <Image
              alt='Shawn Wang'
              className='testimonial-image'
              src={shawnImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p> landing.testimonials.shawn.location</p>
              <p>landing.testimonials.shawn.occupation</p>
            </div>
            <div className='testimony'>
              <p>landing.testimonials.shawn.testimony</p>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='testimonial-card-header'>
            <Image
              alt='Sarah Chima'
              src={sarahImg}
              className='testimonial-image'
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p> landing.testimonials.sarah.location</p>
              <p>landing.testimonials.sarah.occupation</p>
            </div>
            <div className='testimony'>
              <p>landing.testimonials.sarah.testimony</p>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='testimonial-card-header'>
            <Image
              alt='Emma Bostian'
              className='testimonial-image'
              src={emmaImg}
            />
          </div>

          <div className='testimonials-footer'>
            <div className='testimonial-meta'>
              <p> landing.testimonials.emma.location</p>
              <p>landing.testimonials.emma.occupation</p>
            </div>
            <div className='testimony'>
              <p>landing.testimonials.emma.testimony</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonials.displayName = 'Testimonals';
export default Testimonials;
