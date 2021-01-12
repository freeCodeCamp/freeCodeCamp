require('dotenv').config();
const fetch = require('node-fetch');

const makeRequest = async ({
  method,
  endPoint,
  contentType = 'application/json',
  accept = 'application/json',
  headers,
  body
}) => {
  headers = { ...headers, 'Content-Type': contentType, Accept: accept };
  const apiUrl = process.env.CROWDIN_API_URL + endPoint;

  if (contentType === 'application/x-www-form-urlencoded') {
    body = Object.entries(body)
      .reduce((formDataArr, [key, value]) => {
        return formDataArr.concat(`${key}=${value}`);
      }, [])
      .join('&');
  } else if (contentType === 'application/json') {
    body = JSON.stringify(body);
  }

  const response = await fetch(apiUrl, { headers, method, body });
  if (method !== 'delete') {
    const data = await response.json();
    return data;
  } else {
    return null;
  }
};

module.exports = makeRequest;
