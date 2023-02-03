import React from 'react';
import Image from 'next/image';
import shawnImg from '../landing/images/Shawn.png';
import sarahImg from '../landing/images/Sarah.png';
import emmaImg from '../landing/images/Emma.png';
import styles from '../../styles/landing/Testimonials.module.css';
import { useTranslation, Trans } from 'react-i18next';
const Testimonials = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles['testimonial-row']}>
      <h1 className='big-heading text-center'>
        {t('landing.testimonials.heading')}
      </h1>
      <div
        className={styles['testimonials-row']}
        data-test-label='testimonial-cards'
      >
        <div className={styles['testimonial-card']}>
          <div className={styles['testimonial-card-header']}>
            <Image
              alt='Shawn Wang'
              src={shawnImg}
              className={styles['testimonial-image']}
            />
          </div>

          <div className={styles['testimonials-footer']}>
            <div className={styles['testimonial-meta']}>
              <p>
                {' '}
                <Trans>landing.testimonials.shawn.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.shawn.occupation</Trans>
              </p>
            </div>
            <div className={styles['testimony']}>
              <p>
                <Trans>landing.testimonials.shawn.testimony</Trans>
              </p>
            </div>
          </div>
        </div>

        <div className={styles['testimonial-card']}>
          <div className={styles['testimonial-card-header']}>
            <Image
              alt='Sarah Chima'
              src={sarahImg}
              className={styles['testimonial-image']}
            />
          </div>

          <div className={styles['testimonials-footer']}>
            <div className={styles['testimonial-meta']}>
              <p>
                {' '}
                <Trans>landing.testimonials.sarah.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.sarah.occupation</Trans>
              </p>
            </div>
            <div className={styles['testimony']}>
              <p>
                <Trans>landing.testimonials.sarah.testimony</Trans>
              </p>
            </div>
          </div>
        </div>

        <div className={styles['testimonial-card']}>
          <div className={styles['testimonial-card-header']}>
            <Image
              alt='Emma Bostian'
              className={styles['testimonial-image']}
              src={emmaImg}
            />
          </div>

          <div className={styles['testimonials-footer']}>
            <div className={styles['testimonial-meta']}>
              <p>
                {' '}
                <Trans>landing.testimonials.emma.location</Trans>
              </p>
              <p>
                <Trans>landing.testimonials.emma.occupation</Trans>
              </p>
            </div>
            <div className={styles['testimony']}>
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
