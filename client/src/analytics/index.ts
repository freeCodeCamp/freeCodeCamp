import TagManager from 'react-gtm-module';

import {
  devAnalyticsId,
  prodAnalyticsId,
  prodAnalyticsESId
} from '../../../config/analytics-settings';

import envData from '../../../config/env.json';

const { deploymentEnv, clientLocale } = envData;

const analyticsIDSelector = () => {
  if (deploymentEnv === 'staging') return devAnalyticsId;
  else if (clientLocale === 'espanol') return prodAnalyticsESId;
  else return prodAnalyticsId;
};

const gtmId = analyticsIDSelector();

if (typeof document !== `undefined`) {
  TagManager.initialize({ gtmId });
}

export default TagManager;
