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
    <section aria-labelledby='portfolio-projects-header'>
      <h2 id='portfolio-projects-header' className='text-center'>
        {t('profile.projects')}
      </h2>
      <div className='portfolio-field'>
        {portfolioProjects.map(({ title, url, image, description, id }) => (
          <article className='portfolio-card' key={id}>
            {image ? (
              <img
                alt={`Screenshot of project: ${title}`}
                className='portfolio-card-image'
                src={image}
                onError={({ currentTarget }) => {
                  currentTarget.alt = 'Default project image not found';
                  currentTarget.src =
                    'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png';
                }}
              />
            ) : (
              <div className='portfolio-card-placeholder'>
                Image not available
              </div>
            )}
            <div className='portfolio-card-description'>
              <h3>{title}</h3>
              <p className='portfolio-description-text'>{description}</p>
              <div className='portfolio-button-container'>
                <a
                  href={url}
                  rel='nofollow noopener noreferrer'
                  target='_blank'
                  className='portfolio-card-button'
                  aria-label={`View ${title} (opens in a new window)`}
                >
                  {t('buttons.view')}
                  <span className='sr-only'>
                    {title}, {t('aria.opens-new-window')}
                  </span>
                  <FontAwesomeIcon
                    id='link-icon'
                    icon={faArrowUpRightFromSquare}
                    aria-hidden='true'
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
        <hr />
      </div>
    </section>
  );
};
