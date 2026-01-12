import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { parse, format, isValid } from 'date-fns';
import type { ExperienceData } from '../../../redux/prop-types';
import { FullWidthRow, interleave } from '../../helpers';

interface ExperienceDisplayProps {
  experience: ExperienceData[];
}

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const parsedDate = parse(dateString, 'yyyy-MM', new Date());
  if (!isValid(parsedDate)) return '';
  return format(parsedDate, 'MMM yyyy');
};

export const ExperienceDisplay = ({
  experience
}: ExperienceDisplayProps): JSX.Element | null => {
  const { t } = useTranslation();

  if (!experience.length) {
    return null;
  }

  const experienceItems = experience.map(exp => (
    <div key={exp.id} className='experience-item'>
      <h3>{exp.title}</h3>
      <h4 style={{ fontWeight: 'normal', marginTop: '0.5rem' }}>
        {exp.company}
        {exp.location && ` • ${exp.location}`}
      </h4>
      <p
        style={{
          color: '#858591',
          fontSize: '0.9rem',
          marginTop: '0.25rem'
        }}
      >
        {formatDate(exp.startDate)}
        {' - '}
        {exp.endDate
          ? formatDate(exp.endDate)
          : t('profile.experience.present')}
      </p>
      {exp.description && (
        <p style={{ marginTop: '0.75rem', whiteSpace: 'pre-wrap' }}>
          {exp.description}
        </p>
      )}
    </div>
  ));

  return (
    <FullWidthRow>
      <section className='card'>
        <h2>{t('profile.experience.heading')}</h2>
        <Spacer size='s' />
        {interleave(experienceItems, index => (
          <hr key={`separator-${index}`} />
        ))}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
