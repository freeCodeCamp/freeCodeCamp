import TagManager from 'react-gtm-module';

import {
  devAnalyticsId,
  prodAnalyticsId,
  prodAnalyticsESId
} from '../../../config/analytics-settings';

import envData from '../../../config/env.json';

const { deploymentEnv, clientLocale } = envData;

const analyticsIDSelecor = () => {
  if (deploymentEnv === 'staging') return devAnalyticsId;
  else if (clientLocale === 'espanol') return prodAnalyticsESId;
  else return prodAnalyticsId;
};

const gtmId = analyticsIDSelecor();

if (typeof document !== `undefined`) {
  TagManager.initialize({ gtmId });
}

export default TagManager;
