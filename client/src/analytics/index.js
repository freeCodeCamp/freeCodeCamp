import ReactGA from 'react-ga';
import envData from '../../../config/env.json';
import analyticsData from '../../../config/anlaytics-settings';

const { deploymentEnv } = envData;
const { analyticsIds } = analyticsData;
const analyticsId =
  deploymentEnv === 'staging'
    ? analyticsIds.development
    : analyticsIds.production;

ReactGA.initialize(analyticsId);

export default ReactGA;
