import React from 'react';
import { Alert } from '@freecodecamp/react-bootstrap';
import { useFeature } from '@growthbook/growthbook-react';

const ResearchBannerx = (): JSX.Element | '' => {
  const feature = useFeature('show-research-recruitment-alert');
  return feature.on ? (
    <Alert>
      <p>
        freeCodeCamp is collaborating with Stanford and the University of
        Pennsylvania to study how people learn to code and build positive
        habits.{' '}
      </p>
      <p style={{ marginBottom: 10, marginTop: 10 }}>
        Would you like to get involved? You’ll get free coaching from experts.{' '}
      </p>
      <p>
        You can{' '}
        <a href={'https://wharton.qualtrics.com/jfe/form/SV_57rJfXROkQDDU2y'}>
          learn more about HabitLab’s first beta cohort here
        </a>
        .
      </p>
    </Alert>
  ) : (
    ''
  );
};

ResearchBannerx.displayName = 'ResearchBannerx';

export default ResearchBannerx;
