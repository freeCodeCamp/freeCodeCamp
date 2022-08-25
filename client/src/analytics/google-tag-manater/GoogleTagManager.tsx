import { FC } from 'react';
import TagManager from 'react-gtm-module';

import {
  devTagManagerId,
  prodTagManagerId
} from '../../../../config/analytics-settings';

import envData from '../../../../config/env.json';

/* eslint-disable @typescript-eslint/ban-types */
const GoogleTagManager: FC<{}> = () => {
  // if we  have an ID
  // then tags are supported in this environment,
  // so initialize them
  const segmentId =
    envData.deploymentEnv === 'staging' ? devTagManagerId : prodTagManagerId;
  if (segmentId) {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    TagManager.initialize({
      gtmId: segmentId
    });
  }

  return null;
};

export default GoogleTagManager;
