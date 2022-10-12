/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, { ReactNode, useEffect } from 'react';
import sha1 from 'sha-1';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';

import { connect } from 'react-redux';

import { createSelector } from 'reselect';

import { isSignedInSelector, userSelector } from '../../redux/selectors';

import envData from '../../../../config/env.json';
import {
  prodGrowthbookKey,
  devGrowthbookKey
} from '../../../../config/growthbook-settings';
import { User } from '../../redux/prop-types';

const {
  deploymentEnv,
  clientLocale
}: { deploymentEnv: 'staging' | 'live'; clientLocale: string } = envData as {
  deploymentEnv: 'staging' | 'live';
  clientLocale: string;
};

const growthbook = new GrowthBook();

const mapStateToProps = createSelector(
  isSignedInSelector,
  userSelector,
  (isSignedIn, user) => ({
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

      void fetch(apiEndPoint)
        .then(res => res.json())
        .then(json => {
          growthbook.setFeatures(json.features);
        });
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
