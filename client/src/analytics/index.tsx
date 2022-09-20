import ReactGA from 'react-ga';
import {
  devAnalyticsId,
  prodAnalyticsId
} from '../../../config/analytics-settings';
import envData from '../../../config/env.json';

const { deploymentEnv } = envData;

const analyticsId: string = (
  deploymentEnv === 'staging' ? devAnalyticsId : prodAnalyticsId
) as string;

ReactGA.initialize(analyticsId);

export default ReactGA;
