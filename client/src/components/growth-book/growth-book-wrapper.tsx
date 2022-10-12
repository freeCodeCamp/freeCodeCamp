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
import {
  prodGrowthbookKey,
  devGrowthbookKey
} from '../../../../config/growthbook-settings';
import { User } from '../../redux/prop-types';

const { deploymentEnv, clientLocale } = envData;

const growthbook = new GrowthBook();

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
  user: User;
  isSignedIn: boolean;
}

const GrowthBookWrapper = ({
  children,
  isSignedIn,
  user
}: GrowthBookWrapper) => {
  useEffect(() => {
    if (isSignedIn) {
      const { joinDate, completedChallenges } = user;
      const growthBookKey =
        deploymentEnv === 'staging' ? devGrowthbookKey : prodGrowthbookKey;

      const apiEndPoint = `https://api.gb.freecodecamp.org/api/features/${growthBookKey}`;

      void (async () => {
        const res = await fetch(apiEndPoint);
        const data = (await res.json()) as {
          features: Record<string, FeatureDefinition>;
        };
        growthbook.setFeatures(data.features);
      })();

      growthbook.setAttributes({
        id: sha1(user.email),
        staff: true,
        clientLocal: clientLocale,
        joinDateUnix: Date.parse(joinDate),
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
