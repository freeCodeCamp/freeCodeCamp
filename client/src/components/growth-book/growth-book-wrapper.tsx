import React, { useEffect, useMemo } from 'react';
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { userSelector, userFetchStateSelector } from '../../redux/selectors';
import envData from '../../../config/env.json';
import defaultGrowthBookFeatures from '../../../config/growthbook-features-default.json';
import type { User, UserFetchState } from '../../redux/prop-types';
import { getUUID } from '../../utils/growthbook-cookie';
import callGA from '../../analytics/call-ga';
import GrowthBookReduxConnector from './growth-book-redux-connector';

const { clientLocale, growthbookUri } = envData as {
  clientLocale: string;
  growthbookUri: string | null;
};

// Parses GrowthBook URL to extract apiHost and clientKey
function parseGrowthBookUrl(
  url: string | null | undefined
): { apiHost: string; clientKey: string } | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    // Expect: /api/features/<clientKey> (with optional trailing slash)
    const match = u.pathname.match(/^\/api\/features\/([^/]+)\/?$/);
    if (!match) return null;
    const clientKey = match[1];
    const apiHost = `${u.protocol}//${u.host}`;
    if (!clientKey || !apiHost) return null;
    return { apiHost, clientKey };
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    dataLayer: [Record<string, number | string>];
  }
}

const mapStateToProps = createSelector(
  userSelector,
  userFetchStateSelector,
  (user: User | null, userFetchState: UserFetchState) => ({
    user,
    userFetchState
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;
interface GrowthBookWrapper extends StateProps {
  children: JSX.Element;
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
  user,
  userFetchState
}: GrowthBookWrapper) => {
  const parsedUrl = parseGrowthBookUrl(growthbookUri);
  const growthbook = useMemo(
    () =>
      new GrowthBook({
        ...(parsedUrl && {
          apiHost: parsedUrl.apiHost,
          clientKey: parsedUrl.clientKey
        }),
        trackingCallback: (experiment, result) => {
          callGA({
            event: 'experiment_viewed',
            event_category: 'experiment',
            experiment_id: experiment.key,
            variation_id: result.variationId
          });
        }
      }),

    [parsedUrl]
  );

  useEffect(() => {
    void growthbook
      .init({ timeout: 1000 })
      .then(res => {
        if (!res || !res.success) {
          console.warn('GrowthBook initialization failed.', {
            source: res?.source,
            error: res?.error
          });
          void growthbook.setPayload({ features: defaultGrowthBookFeatures });
          return;
        }
      })
      .catch(error => {
        console.error('Error initializing GrowthBook:', error);
        void growthbook.setPayload({ features: defaultGrowthBookFeatures });
      });
  }, [growthbook]);

  useEffect(() => {
    function setGrowthBookFeatures() {
      if (!growthbookUri) {
        // Defaults are added to facilitate testing, and avoid passing the related env
        void growthbook.setPayload({ features: defaultGrowthBookFeatures });
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

      if (user) {
        userAttributes = {
          ...userAttributes,
          staff: user.email.includes('@freecodecamp'),
          joinDateUnix: Date.parse(user.joinDate),
          completedChallengesLength: user.completedChallenges.length,
          signedIn: true
        };
      }
      void growthbook.setAttributes(userAttributes);
    }
  }, [user, userFetchState, growthbook]);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <GrowthBookReduxConnector>{children}</GrowthBookReduxConnector>
    </GrowthBookProvider>
  );
};

export default connect(mapStateToProps)(GrowthBookWrapper);
