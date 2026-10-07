import statuses from '../../../shims/statuses.mjs';
const { message } = statuses;
async function serializeResponse(response) {
  const responseClone = response.clone();
  const responseText = await responseClone.text();
  const responseStatus = responseClone.status || 200;
  const responseStatusText = responseClone.statusText || message[responseStatus] || "OK";
  return {
    status: responseStatus,
    statusText: responseStatusText,
    headers: Object.fromEntries(responseClone.headers.entries()),
    body: responseText
  };
}
export {
  serializeResponse
};
//# sourceMappingURL=serializeResponse.mjs.map