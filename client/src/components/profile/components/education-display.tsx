import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { parse, format, isValid } from 'date-fns';
import type { EducationData } from '../../../redux/prop-types';
import { FullWidthRow, interleave } from '../../helpers';
import './education-display.css';

interface EducationDisplayProps {
  education: EducationData[];
}

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  const parsedDate = parse(dateString, 'MM/yyyy', new Date());
  if (!isValid(parsedDate)) return '';
  return format(parsedDate, 'MMM yyyy');
};

export const EducationDisplay = ({
  education
}: EducationDisplayProps): JSX.Element | null => {
  const { t } = useTranslation();

  if (!education.length) {
    return null;
  }

  const educationItems = education.map(edu => (
    <div key={edu.id} className='education-item'>
      <h3>{edu.degree}</h3>
      <h4 className='education-school'>
        {edu.school}
        {edu.fieldOfStudy && ` - ${edu.fieldOfStudy}`}
        {edu.location && ` • ${edu.location}`}
      </h4>
      {(edu.startDate || edu.endDate) && (
        <p className='education-date'>
          {formatDate(edu.startDate)}
          {edu.startDate && ' - '}
          {edu.endDate
            ? formatDate(edu.endDate)
            : edu.startDate
              ? t('profile.education.present')
              : ''}
        </p>
      )}
      {edu.description && (
        <p className='education-description'>{edu.description}</p>
      )}
    </div>
  ));

  return (
    <FullWidthRow>
      <section className='card'>
        <h2>{t('profile.education.heading')}</h2>
        <Spacer size='s' />
        {interleave(educationItems, index => (
          <hr key={`separator-${index}`} />
        ))}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
