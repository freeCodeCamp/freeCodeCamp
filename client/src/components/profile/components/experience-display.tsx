import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacer } from '@freecodecamp/ui';
import { parse, format, isValid } from 'date-fns';
import type { ExperienceData } from '../../../redux/prop-types';
import { FullWidthRow, interleave } from '../../helpers';
import './experience-display.css';

interface ExperienceDisplayProps {
  experience: ExperienceData[];
}

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const parsedDate = parse(dateString, 'MM/yyyy', new Date());
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
