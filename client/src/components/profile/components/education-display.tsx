import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, Spacer } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { parse, format, isValid } from 'date-fns';
import type { EducationData } from '../../../redux/prop-types';
import { FullWidthRow, interleave } from '../../helpers';
import Education from './education';
import './education-display.css';

interface EducationDisplayProps {
  education: EducationData[];
  isPrivate?: boolean;
  isSessionUser?: boolean;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const parsedDate = parse(dateString, 'MM/yyyy', new Date());
  if (!isValid(parsedDate)) return '';
  return format(parsedDate, 'MMM yyyy');
};

export const EducationDisplay = ({
  education,
  isPrivate,
  isSessionUser
}: EducationDisplayProps): JSX.Element | null => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoAdd, setAutoAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalKey, setModalKey] = useState(0);

  if (!education.length && !isSessionUser) {
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

  const educationItems = education.map(edu => (
    <div key={edu.id} className='education-item-wrapper'>
      <div className='education-item'>
        <h3>{edu.degree}</h3>
        <h4 className='education-institution'>
          {edu.institution}
          {edu.location && ` • ${edu.location}`}
        </h4>
        <p className='education-date'>
          {formatDate(edu.startDate)}
          {' - '}
          {edu.endDate
            ? formatDate(edu.endDate)
            : t('profile.education.present')}
        </p>
        {edu.description && (
          <p className='education-description'>{edu.description}</p>
        )}
      </div>
      {isSessionUser && (
        <Button
          size='small'
          className='button-fit'
          onClick={() => openEditModal(edu.id)}
          aria-label={t('aria.edit-education')}
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
          {autoAdd ? t('aria.add-education') : t('aria.edit-education')}
        </Modal.Header>
        <Modal.Body alignment='left'>
          <Education
            key={modalKey}
            education={education}
            autoAdd={autoAdd}
            editItemId={editingId}
            onSave={() => setIsModalOpen(false)}
          />
        </Modal.Body>
      </Modal>
      <section className='card'>
        <div className='profile-section-heading'>
          <h2>{t('profile.education.heading')}</h2>
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
              aria-label={t('aria.add-education')}
              type='button'
              style={{ marginLeft: 'auto' }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          )}
        </div>
        {education.length > 0 && (
          <>
            <Spacer size='s' />
            {interleave(educationItems, index => (
              <hr key={`separator-${index}`} />
            ))}
          </>
        )}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
