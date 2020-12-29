const authHeader = require('./auth-header');
const makeRequest = require('./make-request');

const shouldHide = (text, context, challengeTitle) => {
  // assuming notranslate is true if context has the XPath type of notranslate
  if (context.includes('/notranslate')) return true;
  if (text !== challengeTitle && context.includes('id=front-matter'))
    return true;
  return false;
};

const getStrings = async ({ projectId, fileId }) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/strings?fileId=${fileId}&limit=500`;
  const strings = await makeRequest({ method: 'get', endPoint, headers });
  if (strings.data) {
    return strings.data;
  } else {
    const { error, errors } = strings;
    console.error(error ? error : errors);
    return null;
  }
};

const updateString = async ({ projectId, stringId, propsToUpdate }) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/strings/${stringId}`;
  const body = propsToUpdate.map(({ path, value }) => ({
    op: 'replace',
    path,
    value
  }));
  await makeRequest({
    method: 'patch',
    endPoint,
    headers,
    body
  });
};

const changeHiddenStatus = async (projectId, stringId, newStatus) => {
  await updateString({
    projectId,
    stringId,
    propsToUpdate: [{ path: '/isHidden', value: newStatus }]
  });
};

const updateFileStrings = async ({ projectId, fileId, challengeTitle }) => {
  const fileStrings = await getStrings({
    projectId,
    fileId
  });

  for (let {
    data: { id: stringId, text, isHidden, context }
  } of fileStrings) {
    const hideString = shouldHide(text, context, challengeTitle);
    if (!isHidden && hideString) {
      changeHiddenStatus(projectId, stringId, true);
    } else if (isHidden && !hideString) {
      changeHiddenStatus(projectId, stringId, false);
    }
  }
};

module.exports = {
  getStrings,
  changeHiddenStatus,
  updateString,
  updateFileStrings
};
