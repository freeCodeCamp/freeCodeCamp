const authHeader = require('./auth-header');
const makeRequest = require('./make-request');

const isHeading = str => /\h\d/.test(str);
const isCode = str => /^\/pre\/code|\/code$/.test(str);

const shouldHide = (text, context, challengeTitle) => {
  if (isHeading(context) || isCode(context)) {
    return true;
  }
  return text !== challengeTitle && context.includes('id=front-matter');
};

const getStrings = async ({ projectId, fileId }) => {
  let headers = { ...authHeader };
  let endPoint = `projects/${projectId}/strings?limit=500`;
  if (fileId) {
    endPoint += `&fileId=${fileId}`;
  }
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

const updateFileString = async ({ projectId, string, challengeTitle }) => {
  const {
    data: { id: stringId, text, isHidden, context }
  } = string;
  const hideString = shouldHide(text, context, challengeTitle);
  if (!isHidden && hideString) {
    await changeHiddenStatus(projectId, stringId, true);
    console.log(
      `${challengeTitle} - stringId: ${stringId} - changed isHidden to true`
    );
  } else if (isHidden && !hideString) {
    await changeHiddenStatus(projectId, stringId, false);
    console.log(
      `${challengeTitle} - stringId: ${stringId} - changed isHidden to false`
    );
  }
};

module.exports = {
  getStrings,
  updateString,
  updateFileStrings,
  updateFileString
};
