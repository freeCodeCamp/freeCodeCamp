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
import { User } from '../../redux/prop-types';

const {
  clientLocale,
  growthbookUri
}: {
  clientLocale: string;
  growthbookUri: string;
} = envData as {
  clientLocale: string;
  growthbookUri: string;
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
  void fetch(growthbookUri)
    .then(res => res.json())
    .then(json => {
      growthbook.setFeatures(json.features);
    });

  useEffect(() => {
    if (isSignedIn) {
      const { joinDate, completedChallenges } = user;

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
