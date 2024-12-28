import React, { ReactNode, useEffect, useMemo } from 'react';
import {
  FeatureDefinition,
  GrowthBook,
  GrowthBookProvider
} from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  isSignedInSelector,
  userSelector,
  userFetchStateSelector
} from '../../redux/selectors';
import envData from '../../../config/env.json';
import defaultGrowthBookFeatures from '../../../config/growthbook-features-default.json';
import { User, UserFetchState } from '../../redux/prop-types';
import { getUUID } from '../../utils/growthbook-cookie';
import callGA from '../../analytics/call-ga';
import GrowthBookReduxConnector from './growth-book-redux-connector';

const { clientLocale, growthbookUri } = envData as {
  clientLocale: string;
  growthbookUri: string | null;
};

declare global {
  interface Window {
    dataLayer: [Record<string, number | string>];
  }
}

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  userFetchStateSelector,
  (isSignedIn, user: User, userFetchState: UserFetchState) => ({
    isSignedIn,
    user,
    userFetchState
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
interface GrowthBookWrapper extends StateProps {
  children: ReactNode;
}

interface UserAttributes {
  id: string;
  clientLocal: string;
  staff?: boolean;
  joinDateUnix?: number;
  completedChallengesLength?: number;
  signedIn?: true;
}

const GrowthBookWrapper = ({
  children,
  isSignedIn,
  user,
  userFetchState
}: GrowthBookWrapper) => {
  const growthbook = useMemo(
    () =>
      new GrowthBook({
        trackingCallback: (experiment, result) => {
          callGA({
            event: 'experiment_viewed',
            event_category: 'experiment',
            experiment_id: experiment.key,
            variation_id: result.variationId
          });
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    async function setGrowthBookFeatures() {
      if (!growthbookUri) {
        // Defaults are added to facilitate testing, and avoid passing the related env
        growthbook.setFeatures(defaultGrowthBookFeatures);
      } else {
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
    }

    void setGrowthBookFeatures();
  }, [growthbook]);

  useEffect(() => {
    if (userFetchState.complete) {
      let userAttributes: UserAttributes = {
        id: getUUID() as string,
        clientLocal: clientLocale
      };

      if (isSignedIn) {
        userAttributes = {
          ...userAttributes,
          staff: user.email.includes('@freecodecamp'),
          joinDateUnix: Date.parse(user.joinDate),
          completedChallengesLength: user.completedChallenges.length,
          signedIn: true
        };
      }
      growthbook.setAttributes(userAttributes);
    }
  }, [isSignedIn, user, userFetchState, growthbook]);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <GrowthBookReduxConnector>{children}</GrowthBookReduxConnector>
    </GrowthBookProvider>
  );
};

export default connect(mapStateToProps)(GrowthBookWrapper);
