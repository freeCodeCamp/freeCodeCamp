import ReactGA from 'react-ga';
import envData from '../../../config/env-data.json';
import {
  devAnalyticsId,
  prodAnalyticsId
} from '../../../config/analytics-settings';

const { deploymentEnv } = envData;

const analyticsId =
  deploymentEnv === 'staging' ? devAnalyticsId : prodAnalyticsId;

ReactGA.initialize(analyticsId);

export default ReactGA;
