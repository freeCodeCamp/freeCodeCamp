import React from 'react';
import { Alert, Button } from '@freecodecamp/react-bootstrap';
import { useFeature } from '@growthbook/growthbook-react';

const ResearchBannerx = (): JSX.Element | null => {
  const feature = useFeature('show-research-recruitment-alert');
  return feature.on ? (
    <Alert>
      <p>
        <b>Launching Oct 19</b>: freeCodeCamp is teaming up with researchers
        from Stanford and UPenn to study how to help people build strong coding
        habits.
      </p>
      <p style={{ marginBottom: 20, marginTop: 14 }}>
        Would you like to get involved? You’ll get free coaching from our
        scientists.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          href={'https://wharton.qualtrics.com/jfe/form/SV_57rJfXROkQDDU2y'}
        >
          Learn about HabitLab
        </Button>
      </div>
    </Alert>
  ) : null;
};

ResearchBannerx.displayName = 'ResearchBannerx';

export default ResearchBannerx;
