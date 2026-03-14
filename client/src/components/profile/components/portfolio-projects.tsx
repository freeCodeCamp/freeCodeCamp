import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import type { PortfolioProjectData } from '../../../redux/prop-types';
import './portfolio-projects.css';

interface PortfolioProjectsProps {
  portfolioProjects: PortfolioProjectData[];
  onEditProject?: (id: string) => void;
}

export const PortfolioProjects = ({
  portfolioProjects,
  onEditProject
}: PortfolioProjectsProps): JSX.Element | null => {
  const { t } = useTranslation();
  if (!portfolioProjects.length) {
    return null;
  }
  return (
    <>
      <Spacer size='s' />
      <div className='portfolio-list'>
        {portfolioProjects.map(({ title, url, image, description, id }) => (
          <div className='portfolio-item-shell' key={id}>
            {onEditProject && (
              <div className='profile-item-action-row profile-item-action-row--top-right'>
                <button
                  className='profile-item-edit-action profile-item-edit-action--icon'
                  onClick={() => onEditProject(id)}
                  type='button'
                  aria-label={t('buttons.edit')}
                >
                  <FontAwesomeIcon icon={faPen} aria-hidden='true' />
                </button>
              </div>
            )}
            <a
              href={url}
              rel='nofollow noopener noreferrer'
              target='_blank'
              className='portfolio-card'
            >
              {image && (
                <img
                  alt=''
                  className='portfolio-image'
                  src={image}
                  onError={({ currentTarget }) => {
                    currentTarget.src =
                      'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png';
                  }}
                />
              )}
              <div className='portfolio-card-description'>
                <div className='portfolio-card-text'>
                  <h3>
                    {title}
                    <span className='sr-only'>
                      , {t('aria.opens-new-window')}
                    </span>
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Spacer size='m' />
    </>
  );
};
