import React from 'react';
import { useTranslation } from 'react-i18next';

import type { Portfolio as PortfolioData } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';

import './portfolio.css';

interface PortfolioProps {
  portfolio: PortfolioData[];
}

function Portfolio({ portfolio = [] }: PortfolioProps): JSX.Element | null {
  const { t } = useTranslation();
  if (!portfolio.length) {
    return null;
  }
  return (
    <FullWidthRow>
      <h2 className='text-center'>{t('profile.portfolio')}</h2>
      {portfolio.map(({ title, url, image, description, id }) => (
        <div className='portfolio-container' key={id}>
          <div className='screen-shot-container'>
            {image && (
              <img
                alt={t('profile.screen-shot', { title: title })}
                className='portfolio-screen-shot'
                src={image}
              />
            )}
          </div>
          <h3>{title}</h3>
          <a href={url} rel='nofollow noopener noreferrer'>
            live URL <span className='sr-only'>for {title}</span>
          </a>
          <p>{description}</p>
        </div>
      ))}
      <hr />
    </FullWidthRow>
  );
}

Portfolio.displayName = 'Portfolio';

export default Portfolio;
