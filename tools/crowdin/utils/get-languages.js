const authHeader = require('./auth-header');
const makeRequest = require('./make-request');

const getLanguages = async projectId => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}?limit=500`;
  const response = await makeRequest({ method: 'get', endPoint, headers });
  if (response.data && response.data.targetLanguageIds.length) {
    return response.data.targetLanguageIds;
  } else {
    const { error, errors } = response;
    console.error(error ? error : errors);
    return null;
  }
};

module.exports = getLanguages;
