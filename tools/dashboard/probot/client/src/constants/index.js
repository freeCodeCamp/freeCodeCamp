let API_HOST = process.env.REACT_APP_HOST === 'local'
  ? 'http://localhost:3001'
  : '';
API_HOST += '/dashboard';

const ENDPOINT_INFO = API_HOST + '/info';
const ENDPOINT_PARETO = API_HOST + '/pareto';
const ENDPOINT_PR = API_HOST + '/pr';
const ENDPOINT_SEARCH = API_HOST + '/search';
export {
  API_HOST, ENDPOINT_INFO, ENDPOINT_PARETO, ENDPOINT_PR, ENDPOINT_SEARCH
};
