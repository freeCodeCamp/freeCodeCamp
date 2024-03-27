import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import type { PortfolioProjectData } from '../../../redux/prop-types';

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
    <>
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
            <img alt='' className='portfolio-screen-shot' src={image} onError="this.onerror='null'; this.src={require('https://d33wubrfki0l68.cloudfront.net/2f7693e1933ac514c960f51ceae72c91c6716eb2/b2efd/img/fcc_primary_small.svg')}"/>
          )}
        </div>
      ))}
      <hr />
    </>
  );
};
