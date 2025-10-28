import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import type { PortfolioProjectData } from '../../../redux/prop-types';
import './portfolio-projects.css';
import { FullWidthRow } from '../../helpers';

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
      <section className='card'>
        <h2>{t('profile.projects')}</h2>
        <Spacer size='s' />
        {portfolioProjects.map(
          ({ title, url, image, description, id }, index) => (
            <React.Fragment key={id}>
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
              {index < portfolioProjects.length - 1 && <hr />}
            </React.Fragment>
          )
        )}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
