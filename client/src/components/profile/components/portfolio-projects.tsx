import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { PortfolioProjectData } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';

import './portfolio-projects.css';

interface PortfolioProjectsProps {
  portfolioProjects: PortfolioProjectData[];
}

export const PortfolioProjects = ({
  portfolioProjects
}: PortfolioProjectsProps): JSX.Element | null => {
  const { t } = useTranslation();
  if (!portfolioProjects.length) {
    return null;
  }
  return (
    <FullWidthRow>
      <h2 className='text-center'>{t('profile.portfolio')}</h2>
      {portfolioProjects.map(({ title, url, image, description, id }) => (
        <div className='portfolio-container' key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={url} rel='nofollow noopener noreferrer' target='_blank'>
            {t('buttons.view')}
            <span className='sr-only'>
              {title}, {t('aria.opens-new-window')}
            </span>
            <FontAwesomeIcon id='link-icon' icon={faArrowUpRightFromSquare} />
          </a>

          {image && (
            <img alt='' className='portfolio-screen-shot' src={image} />
          )}
        </div>
      ))}
      <hr />
    </FullWidthRow>
  );
};
