import React, { ReactNode, useEffect } from 'react';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key,
      variationId: result.variationId
    });
  }
});

import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import { isSignedInSelector } from '../../redux/selectors';

const mapStateToProps = createSelector(isSignedInSelector, isSignedIn => ({
  isSignedIn
}));

type StateProps = ReturnType<typeof mapStateToProps>;

interface GrowthBookWrapper extends StateProps {
  children: ReactNode;
}

// interface GrowthBookResponse {
//   status: number;
//   features: object;
//   dateUpdated: string;
// }

const GrowthBookWrapper = ({ children, isSignedIn }: GrowthBookWrapper) => {
  useEffect(() => {
    // Load feature definitions from API
    // In production, we recommend putting a CDN in front of the API endpoint
    void fetch(
      'https://api.gb.freecodecamp.org/api/features/key_prod_740cf9417e8af5aa'
    )
      .then(res => res.json())
      .then(json => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        growthbook.setFeatures(json.features);
      });

    // TODO: replace with real targeting attributes
    growthbook.setAttributes({
      id: 'foo',
      deviceId: 'foo',
      company: 'foo',
      signedin: true,
      employee: true,
      country: 'foo',
      browser: 'foo',
      url: 'foo',
      local: 'foo',
      startdate: 123,
      challengeCompleted: 123
    });
  }, []);
  console.log(isSignedIn);

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
};

export default connect(mapStateToProps)(GrowthBookWrapper);
