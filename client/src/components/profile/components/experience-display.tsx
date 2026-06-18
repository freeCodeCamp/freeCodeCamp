import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { parse, format, isValid } from 'date-fns';
import type { ExperienceData } from '../../../redux/prop-types';
import { FullWidthRow, interleave } from '../../helpers';
import Experience from './experience';
import './experience-display.css';

interface ExperienceDisplayProps {
  experience: ExperienceData[];
  isPrivate?: boolean;
  isSessionUser?: boolean;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const parsedDate = parse(dateString, 'MM/yyyy', new Date());
  if (!isValid(parsedDate)) return '';
  return format(parsedDate, 'MMM yyyy');
};

export const ExperienceDisplay = ({
  experience,
  isPrivate,
  isSessionUser
}: ExperienceDisplayProps): JSX.Element | null => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoAdd, setAutoAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalKey, setModalKey] = useState(0);

  if (!experience.length && !isSessionUser) {
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

  const experienceItems = experience.map(exp => (
    <div key={exp.id} className='experience-item-wrapper'>
      <div className='experience-item'>
        <h3>{exp.title}</h3>
        <h4 className='experience-company'>
          {exp.company}
          {exp.location && ` • ${exp.location}`}
        </h4>
        <p className='experience-date'>
          {formatDate(exp.startDate)}
          {' - '}
          {exp.endDate
            ? formatDate(exp.endDate)
            : t('profile.experience.present')}
        </p>
        {exp.description && (
          <p className='experience-description'>{exp.description}</p>
        )}
      </div>
      {isSessionUser && (
        <Button
          size='small'
          className='button-fit'
          onClick={() => openEditModal(exp.id)}
          aria-label={t('aria.edit-experience')}
          type='button'
        >
          <FontAwesomeIcon icon={faPen} />
        </Button>
      )}
    </div>
  ));

  return (
    <FullWidthRow>
      <Modal
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        size='large'
      >
        <Modal.Header>
          {autoAdd ? t('aria.add-experience') : t('aria.edit-experience')}
        </Modal.Header>
        <Modal.Body alignment='left'>
          <Experience
            key={modalKey}
            experience={experience}
            autoAdd={autoAdd}
            editItemId={editingId}
            onSave={() => setIsModalOpen(false)}
          />
        </Modal.Body>
      </Modal>
      <section className='card'>
        <div className='profile-section-heading'>
          <h2>{t('profile.experience.heading')}</h2>
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
              aria-label={t('aria.add-experience')}
              type='button'
              style={{ marginLeft: 'auto' }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          )}
        </div>
        {experience.length > 0 && (
          <>
            <Spacer size='s' />
            {interleave(experienceItems, index => (
              <hr key={`separator-${index}`} />
            ))}
          </>
        )}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
