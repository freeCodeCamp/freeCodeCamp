const authHeader = require('./auth-header');
const makeRequest = require('./make-request');

const isReservedHeading = (context, str) => {
  const reservedHeadings = [
    'after-user-code',
    'answers',
    'before-user-code',
    'description',
    'fcc-editable-region',
    'hints',
    'instructions',
    'question',
    'assignments',
    'seed',
    'seed-contents',
    'solutions',
    'text',
    'video-solution'
  ];
  const captureGroupStr = `(${reservedHeadings.join('|')})`;
  const regex = new RegExp(`--${captureGroupStr}--`);
  return !!(context.match(/^Headline/) && str.match(regex));
};

const isCode = str => /^\/pre\/code|\/code$/.test(str);

const isTitle = str => str.endsWith('title');

const shouldHide = (text, context, challengeTitle, crowdinFilePath) => {
  if (crowdinFilePath.endsWith('.yml')) {
    return !isTitle(context);
  }
  if (isReservedHeading(context, text) || isCode(context)) {
    return true;
  }
  return text !== challengeTitle && context.includes('id=front-matter');
};

const getStrings = async ({ projectId, fileId }) => {
  let headers = { ...authHeader };
  let done = false;
  let offset = 0;
  let strings = [];
  while (!done) {
    let endPoint = `projects/${projectId}/strings?limit=500&offset=${offset}`;
    if (fileId) {
      endPoint += `&fileId=${fileId}`;
    }
    const response = await makeRequest({ method: 'get', endPoint, headers });
    if (response.data) {
      if (response.data.length) {
        strings = [...strings, ...response.data];
        offset += 500;
      } else {
        done = true;
        return strings;
      }
    } else {
      const { error, errors } = response;
      console.error(error ? error : errors);
    }
  }
  return null;
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

const updateFileString = async ({
  projectId,
  string,
  challengeTitle,
  crowdinFilePath
}) => {
  const {
    data: { id: stringId, text, isHidden, context }
  } = string;
  const hideString = shouldHide(text, context, challengeTitle, crowdinFilePath);
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

const getStringTranslations = async ({ projectId, stringId, languageId }) => {
  let headers = { ...authHeader };
  let done = false;
  let offset = 0;
  let translations = [];
  while (!done) {
    let endPoint = `projects/${projectId}/translations?stringId=${stringId}&languageId=${languageId}&limit=500&offset=${offset}`;
    const response = await makeRequest({ method: 'get', endPoint, headers });
    if (response.data) {
      if (response.data.length) {
        translations = [...translations, ...response.data];
        offset += 500;
      } else {
        done = true;
        return translations;
      }
    } else {
      const { error, errors } = response;
      console.error(
        error ? JSON.stringify(error, null, 2) : JSON.stringify(errors, null, 2)
      );
    }
  }
  return null;
};

const deleteTranslation = async (projectId, translationId) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/translations/${translationId}`;
  await makeRequest({
    method: 'delete',
    endPoint,
    headers
  });
  console.log(`Deleted translationId ${translationId} from Crowdin project`);
  return null;
};

const addTranslation = async (projectId, stringId, languageId, text) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/translations`;
  const body = {
    stringId,
    languageId,
    text
  };
  const response = await makeRequest({
    method: 'post',
    endPoint,
    headers,
    body
  });
  if (response.data) {
    return response.data;
  }
  return null;
};

const getLanguageTranslations = async ({ projectId, languageId }) => {
  let headers = { ...authHeader };
  let done = false;
  let offset = 0;
  let translations = [];
  while (!done) {
    let endPoint = `projects/${projectId}/languages/${languageId}/translations?limit=500&offset=${offset}`;
    const response = await makeRequest({ method: 'get', endPoint, headers });
    if (response.data) {
      if (response.data.length) {
        translations = [...translations, ...response.data];
        offset += 500;
      } else {
        done = true;
        return translations;
      }
    } else {
      const { error, errors } = response;
      console.error(
        error ? JSON.stringify(error, null, 2) : JSON.stringify(errors, null, 2)
      );
    }
  }
  return null;
};

const deleteLanguageTranslations = async (projectId, languageId, stringId) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/translations?languageId=${languageId}&stringId=${stringId}`;
  console.log(`deleting ${stringId}...`);
  await makeRequest({
    method: 'delete',
    endPoint,
    headers
  });
  return null;
};

module.exports = {
  getStrings,
  updateString,
  updateFileStrings,
  updateFileString,
  getStringTranslations,
  addTranslation,
  deleteTranslation,
  getLanguageTranslations,
  deleteLanguageTranslations,
  changeHiddenStatus
};
