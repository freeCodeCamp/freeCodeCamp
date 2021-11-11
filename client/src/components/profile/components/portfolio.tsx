import { Media } from '@freecodecamp/react-bootstrap';
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
        <Media key={id}>
          <Media.Left align='middle'>
            {image && (
              <img
                alt={t('profile.screen-shot', { title: title })}
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

export default Portfolio;
