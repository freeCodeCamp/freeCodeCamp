import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import type { PortfolioProjectData } from '../../../redux/prop-types';
import Portfolio from './portfolio';
import './portfolio-projects.css';
import { FullWidthRow } from '../../helpers';

interface PortfolioProjectsProps {
  portfolioProjects: PortfolioProjectData[];
  isPrivate?: boolean;
  isSessionUser?: boolean;
}

export const PortfolioProjects = ({
  portfolioProjects,
  isPrivate,
  isSessionUser
}: PortfolioProjectsProps): JSX.Element | null => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoAdd, setAutoAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalKey, setModalKey] = useState(0);

  if (!portfolioProjects.length && !isSessionUser) {
    return null;
  }

  const openAddModal = () => {
    setAutoAdd(true);
    setEditingId(null);
    setModalKey(k => k + 1);
    setIsModalOpen(true);
  };

  const openEditModal = (id: string) => {
    setAutoAdd(false);
    setEditingId(id);
    setModalKey(k => k + 1);
    setIsModalOpen(true);
  };

  return (
    <FullWidthRow>
      <Modal
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        size='large'
      >
        <Modal.Header>
          {autoAdd ? t('aria.add-portfolio') : t('aria.edit-portfolio')}
        </Modal.Header>
        <Modal.Body alignment='left'>
          <Portfolio
            key={modalKey}
            portfolio={portfolioProjects}
            autoAdd={autoAdd}
            editItemId={editingId}
          />
        </Modal.Body>
      </Modal>
      <section className='card'>
        <div className='profile-section-heading'>
          <h2>{t('profile.projects')}</h2>
          {isPrivate && (
            <span className='profile-private-badge'>
              {t('buttons.private')}
            </span>
          )}
          {isSessionUser && (
            <Button
              size='small'
              className='button-fit'
              onClick={openAddModal}
              aria-label={t('aria.add-portfolio')}
              type='button'
              style={{ marginLeft: 'auto' }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          )}
        </div>
        {portfolioProjects.length > 0 && (
          <>
            <Spacer size='s' />
            {portfolioProjects.map(
              ({ title, url, image, description, id }, index) => (
                <React.Fragment key={id}>
                  <div className='portfolio-item-wrapper'>
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
                    {isSessionUser && (
                      <Button
                        size='small'
                        className='button-fit'
                        onClick={() => openEditModal(id)}
                        aria-label={t('aria.edit-portfolio')}
                        type='button'
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Button>
                    )}
                  </div>
                  {index < portfolioProjects.length - 1 && <hr />}
                </React.Fragment>
              )
            )}
          </>
        )}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
