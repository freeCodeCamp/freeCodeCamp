/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { ReactNode, useEffect } from 'react';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import {
  isSignedInSelector,
  completedChallengesSelector
} from '../../redux/selectors';

import envData from '../../../../config/env.json';
import {
  prodGrowthbookKey,
  devGrowthbookKey
} from '../../../../config/growthbook-settings';

const { deploymentEnv }: { deploymentEnv: 'staging' | 'live' } = envData as {
  deploymentEnv: 'staging' | 'live';
};

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key,
      variationId: result.variationId
    });
  }
});

const mapStateToProps = createSelector(
  isSignedInSelector,
  completedChallengesSelector,
  (isSignedIn, completedChallenges) => ({
    isSignedIn,
    completedChallenges
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;

interface GrowthBookWrapper extends StateProps {
  children: ReactNode;
}

// interface GrowthBookResponse {
//   status: number;
//   features: object;
//   dateUpdated: string;
// }

const GrowthBookWrapper = ({
  children,
  isSignedIn,
  completedChallenges
}: GrowthBookWrapper) => {
  useEffect(() => {
    if (isSignedIn) {
      console.log('singedIN');
      console.log(completedChallenges);
      // Load feature definitions from API
      // In production, we recommend putting a CDN in front of the API endpoint
      const growthBookKey =
        deploymentEnv === 'staging' ? devGrowthbookKey : prodGrowthbookKey;

      const apiEndPoint = `https://api.gb.freecodecamp.org/api/features/${growthBookKey}`;

      void fetch(apiEndPoint)
        .then(res => res.json())
        .then(json => {
          console.log(json);

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
        completedChallengesLength: completedChallenges.length
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
};

export default connect(mapStateToProps)(GrowthBookWrapper);
