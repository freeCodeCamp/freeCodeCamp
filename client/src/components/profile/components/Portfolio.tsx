import React from 'react';
import { Media } from '@freecodecamp/react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FullWidthRow } from '../../helpers';

import './portfolio.css';

interface IPortfolioData {
  description: string;
  id: string;
  image: string;
  title: string;
  url: string;
}

interface IPortfolioProps {
  portfolio: IPortfolioData[];
}

function Portfolio({ portfolio = [] }: IPortfolioProps): JSX.Element | null {
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
