import React from 'react';
import { Spacer } from '@freecodecamp/ui';
import type { ExperienceData } from '../../../redux/prop-types';
import { FullWidthRow } from '../../helpers';

interface ExperienceDisplayProps {
  experience: ExperienceData[];
}

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const [year, month] = dateString.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

export const ExperienceDisplay = ({
  experience
}: ExperienceDisplayProps): JSX.Element | null => {
  if (!experience.length) {
    return null;
  }

  return (
    <FullWidthRow>
      <section className='card'>
        <h2>Experience</h2>
        <Spacer size='s' />
        {experience.map((exp, index) => (
          <React.Fragment key={exp.id}>
            <div className='experience-item'>
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
                {exp.endDate ? formatDate(exp.endDate) : 'Present'}
              </p>
              {exp.description && (
                <p style={{ marginTop: '0.75rem', whiteSpace: 'pre-wrap' }}>
                  {exp.description}
                </p>
              )}
            </div>
            {index < experience.length - 1 && <hr />}
          </React.Fragment>
        ))}
        <Spacer size='m' />
      </section>
    </FullWidthRow>
  );
};
