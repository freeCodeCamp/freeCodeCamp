module.exports = restRequest

const restEndpoint = require('../endpoint')
const request = require('./request')

function restRequest (endpointOptions) {
  const requestOptions = restEndpoint(endpointOptions)
  return request(requestOptions)
}
