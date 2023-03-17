/* eslint-disable @typescript-eslint/naming-convention */
import React, { ReactNode, useEffect } from 'react';
import sha1 from 'sha-1';
import {
  FeatureDefinition,
  GrowthBook,
  GrowthBookProvider
} from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { isSignedInSelector, userSelector } from '../../redux/selectors';
import envData from '../../../../config/env.json';
import { User } from '../../redux/prop-types';

const { clientLocale, growthbookUri } = envData as {
  clientLocale: string;
  growthbookUri: string | null;
};

declare global {
  interface Window {
    dataLayer: [Record<string, number | string>];
  }
}

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    window?.dataLayer.push({
      event: 'experiment_viewed',
      event_category: 'experiment',
      experiment_id: experiment.key,
      variation_id: result.variationId
    });
  }
});

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  (isSignedIn, user: User) => ({
    isSignedIn,
    user
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
interface GrowthBookWrapper extends StateProps {
  children: ReactNode;
}

const GrowthBookWrapper = ({
  children,
  isSignedIn,
  user
}: GrowthBookWrapper) => {
  useEffect(() => {
    async function setGrowthBookFeatures() {
      if (!growthbookUri) return;

      try {
        const res = await fetch(growthbookUri);
        const data = (await res.json()) as {
          features: Record<string, FeatureDefinition>;
        };
        growthbook.setFeatures(data.features);
      } catch (e) {
        // TODO: report to sentry when it's enabled
        console.error(e);
      }
    }

    void setGrowthBookFeatures();
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      growthbook.setAttributes({
        id: sha1(user.email),
        staff: user.email.includes('@freecodecamp'),
        clientLocal: clientLocale,
        joinDateUnix: Date.parse(user.joinDate),
        completedChallengesLength: user.completedChallenges.length
      });
    }
  }, [isSignedIn, user.email, user.joinDate, user.completedChallenges]);

  return (
    <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>
  );
};

export default connect(mapStateToProps)(GrowthBookWrapper);
