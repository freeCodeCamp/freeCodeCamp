import TagManager from 'react-gtm-module';

import {
  devAnalyticsId,
  prodAnalyticsId
} from '../../config/analytics-settings';

import envData from '../../config/env.json';

const { deploymentEnv } = envData;

const analyticsIDSelector = () => {
  if (deploymentEnv === 'staging') return devAnalyticsId;
  else return prodAnalyticsId;
};

const gtmId = analyticsIDSelector();

if (typeof document !== `undefined`) {
  TagManager.initialize({ gtmId });
}

export default TagManager;
