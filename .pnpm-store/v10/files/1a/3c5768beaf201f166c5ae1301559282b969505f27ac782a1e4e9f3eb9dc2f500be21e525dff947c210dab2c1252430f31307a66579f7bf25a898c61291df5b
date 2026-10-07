"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.whoami = whoami;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _reporter = _interopRequireDefault(require("./reporter"));
var _manageToken = require("./util/manage-token");
const getUsername = async token => {
  let currentUsername;
  const query = `query {
    currentUser {
      name
    }
  }`;
  try {
    const usernameResponse = await (0, _nodeFetch.default)(`https://api.gatsbyjs.com/graphql`, {
      method: `post`,
      body: JSON.stringify({
        query
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": `application/json`
      }
    });
    const resJson = await usernameResponse.json();
    currentUsername = resJson.data.currentUser.name;
  } catch (e) {
    _reporter.default.error(e);
  }
  return currentUsername;
};

/**
 * Reports the username of the logged in user if they are logged in.
 */
async function whoami() {
  const tokenFromStore = await (0, _manageToken.getToken)();
  if (!tokenFromStore) {
    _reporter.default.info(`You are not currently logged in!`);
    return;
  }
  const username = await getUsername(tokenFromStore);
  _reporter.default.info(username);
}