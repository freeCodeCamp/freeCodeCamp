import TagManager from 'react-gtm-module';

import {
  devAnalyticsId,
  prodAnalyticsId
} from '../../../config/analytics-settings';

import envData from '../../../config/env.json';

const { deploymentEnv } = envData;

const gtmId = deploymentEnv === 'staging' ? devAnalyticsId : prodAnalyticsId;

if (typeof document !== `undefined`) {
  TagManager.initialize({ gtmId });
}

export default TagManager;
