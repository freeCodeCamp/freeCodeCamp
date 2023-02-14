import React from 'react';
import { useTranslation } from 'react-i18next';

import type { Portfolio as PortfolioData } from '../../../redux/prop-types';

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
    <>
      <h2 className='text-center'>{t('profile.portfolio')}</h2>
      {portfolio.map(({ title, url, image, description, id }) => (
        <div className='portfolio-container' key={id}>
          <h3>
            <a href={url} rel='nofollow noopener noreferrer'>
              {title}
            </a>
          </h3>
          {image && (
            <img alt='' className='portfolio-screen-shot' src={image} />
          )}
          <p>{description}</p>
        </div>
      ))}
      <hr />
    </>
  );
}

Portfolio.displayName = 'Portfolio';

export default Portfolio;
