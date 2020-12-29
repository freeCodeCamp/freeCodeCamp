const makeRequest = require('./make-request');
const authHeader = require('./auth-header');

const addFile = async (projectId, filename, fileContent, directoryId) => {
  let headers = { ...authHeader };
  headers['Crowdin-API-FileName'] = filename;
  const endPoint = `storages`;
  const contentType = 'application/text';
  const body = fileContent;
  const storageResponse = await makeRequest({
    method: 'post',
    contentType,
    endPoint,
    headers,
    body
  });
  if (storageResponse.data) {
    const fileBody = {
      storageId: storageResponse.data.id,
      name: filename,
      directoryId
    };
    const fileResponse = await makeRequest({
      method: 'post',
      endPoint: `projects/${projectId}/files`,
      headers,
      body: fileBody
    });
    if (fileResponse.data) {
      return fileResponse.data;
    } else {
      console.log('error');
      console.dir(fileResponse, { depth: null, colors: true });
    }
  }
  return null;
};

const updateFile = async (projectId, fileId, fileContent) => {
  let headers = { ...authHeader };
  const endPoint = `storages`;
  const contentType = 'application/text';
  const body = fileContent;
  const storageResponse = await makeRequest({
    method: 'post',
    contentType,
    endPoint,
    headers,
    body
  });
  if (storageResponse.data) {
    const fileBody = {
      storageId: storageResponse.data.id
    };
    const fileResponse = await makeRequest({
      method: 'put',
      endPoint: `projects/${projectId}/files${fileId}`,
      headers,
      body: fileBody
    });
    if (fileResponse.data) {
      return fileResponse.data;
    } else {
      console.log('error');
      console.dir(fileResponse, { depth: null, colors: true });
    }
  }
  return null;
};

const deleteFile = async (projectId, fileId) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/files/${fileId}`;
  await makeRequest({
    method: 'delete',
    endPoint,
    headers
  });
  return null;
};

const getFiles = async projectId => {
  let headers = { ...authHeader };
  let done = false;
  let offset = 0;
  let files = [];
  while (!done) {
    const endPoint = `projects/${projectId}/files?limit=500&offset=${offset}`;
    const response = await makeRequest({
      method: 'get',
      endPoint,
      headers
    });
    if (response.data) {
      if (response.data.length) {
        files = [...files, ...response.data];
        offset += 500;
      } else {
        done = true;
        files = files.map(({ data: { directoryId, id: fileId, path } }) => {
          // remove leading forwardslash
          path = path.slice(1);
          return { directoryId, fileId, path };
        });
        return files;
      }
    } else {
      const { error } = response;
      console.log(error.errorcode);
      console.log(error.messsage);
    }
  }
  return null;
};

const getDirs = async projectId => {
  let headers = { ...authHeader };
  let done = false;
  let offset = 0;
  let files = [];
  while (!done) {
    const endPoint = `projects/${projectId}/directories?limit=500&offset=${offset}`;
    const response = await makeRequest({
      method: 'get',
      endPoint,
      headers
    });
    if (response.data) {
      if (response.data.length) {
        files = [...files, ...response.data];
        offset += 500;
      } else {
        done = true;
        return files;
      }
    } else {
      const { error } = response;
      console.log(error.errorcode);
      console.log(error.messsage);
    }
  }
  return null;
};

const addDir = async (projectId, dirName, parentDirId) => {
  let headers = { ...authHeader };
  const endPoint = `projects/${projectId}/directories`;
  let body = {
    name: dirName
  };
  if (parentDirId) {
    body = { ...body, directoryId: parentDirId };
  }

  const response = await makeRequest({
    method: 'post',
    endPoint,
    headers,
    body
  });
  return response;
};

const createDirs = async (crowdinDirs, dirPath) => {
  // superParent is the top level directory on crowdin
  const superParent = crowdinDirs.find(dir => !dir.data.directoryId);
  let lastParentId = superParent.data.id;

  const splitDirPath = dirPath.split('/');
  splitDirPath.shift();

  // we are assuming that the first directory in 'newFile' is the same as the superParent
  // maybe throw a check in here to verify that's true

  const getCurrDir = (directory, crowdinDirs) => {
    const findCurrDir = ({ data: { name, directoryId } }) => {
      return name === directory && directoryId === lastParentId;
    };
    return crowdinDirs.find(findCurrDir);
  };

  for (let directory of splitDirPath) {
    const currentDirectory = getCurrDir(directory, crowdinDirs);
    if (!currentDirectory) {
      const response = await addDir(10, directory, lastParentId);
      lastParentId = response.data.id;
    } else {
      lastParentId = currentDirectory.data.id;
    }
  }
  return lastParentId;
};

module.exports = {
  addFile,
  updateFile,
  deleteFile,
  getFiles,
  addDir,
  getDirs,
  createDirs
};
