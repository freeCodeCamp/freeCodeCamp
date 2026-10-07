"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.login = login;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _betterOpn = _interopRequireDefault(require("better-opn"));
var _reporter = _interopRequireDefault(require("./reporter"));
var _manageToken = require("./util/manage-token");
const createTicket = async () => {
  let ticketId;
  try {
    const ticketResponse = await (0, _nodeFetch.default)(`https://auth.gatsbyjs.com/auth/tickets/create`, {
      method: `post`
    });
    const ticketJson = await ticketResponse.json();
    ticketId = ticketJson.ticketId;
  } catch (e) {
    _reporter.default.panic(`We had trouble connecting to Gatsby Cloud to create a login session.
Please try again later, and if it continues to have trouble connecting file an issue.`);
  }
  return ticketId;
};
const getTicket = async ticketId => {
  let ticket = {
    verified: false
  };
  try {
    const ticketResponse = await (0, _nodeFetch.default)(`https://auth.gatsbyjs.com/auth/tickets/${ticketId}`);
    const ticketJson = await ticketResponse.json();
    ticket = ticketJson;
  } catch (e) {
    _reporter.default.error(e);
  }
  return ticket;
};
const handleOpenBrowser = url => {
  // TODO: this will break if run from the CLI
  // for ideas see https://github.com/netlify/cli/blob/908f285fb80f04bf2635da73381c94387b9c8b0d/src/utils/open-browser.js
  console.log(``);
  _reporter.default.info(`Opening Gatsby Cloud for you to login from, copy this`);
  _reporter.default.info(`url into your browser if it doesn't open automatically:`);
  console.log(``);
  console.log(url);
  (0, _betterOpn.default)(url);
};

/**
 * Main function that logs in to Gatsby Cloud using Gatsby Cloud's authentication service.
 */
async function login() {
  const tokenFromStore = await (0, _manageToken.getToken)();
  if (tokenFromStore) {
    _reporter.default.info(`You are already logged in!`);
    return;
  }
  const webUrl = `https://gatsbyjs.com`;
  _reporter.default.info(`Logging into your Gatsby Cloud account...`);

  // Create "ticket" for auth (like an expiring session)
  const ticketId = await createTicket();

  // Open browser for authentication
  const authUrl = `${webUrl}/dashboard/login?authType=EXTERNAL_AUTH&ticketId=${ticketId}&noredirect=1`;
  await handleOpenBrowser(authUrl);

  // Poll until the ticket has been verified, and should have the token attached
  function pollForTicket() {
    return new Promise(function (resolve) {
      // eslint-disable-next-line consistent-return
      async function verify() {
        const ticket = await getTicket(ticketId);
        const timeoutId = setTimeout(verify, 3000);
        if (ticket.verified) {
          clearTimeout(timeoutId);
          return resolve(ticket);
        }
      }
      verify();
    });
  }
  console.log(``);
  _reporter.default.info(`Waiting for login from Gatsby Cloud...`);
  const ticket = await pollForTicket();
  if (ticket !== null && ticket !== void 0 && ticket.token && ticket !== null && ticket !== void 0 && ticket.expiration) {
    await (0, _manageToken.setToken)(ticket.token, ticket.expiration);
  }
  _reporter.default.info(`You have been logged in!`);
}