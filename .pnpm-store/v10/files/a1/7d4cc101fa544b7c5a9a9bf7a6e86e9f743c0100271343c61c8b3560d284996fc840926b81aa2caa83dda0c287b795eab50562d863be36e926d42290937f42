Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function addAutoIpAddressToUser(objWithMaybeUser) {
  if (objWithMaybeUser.user?.ip_address === void 0) {
    objWithMaybeUser.user = {
      ...objWithMaybeUser.user,
      ip_address: "{{auto}}"
    };
  }
}
function addAutoIpAddressToSession(session) {
  if ("aggregates" in session) {
    if (session.attrs?.["ip_address"] === void 0) {
      session.attrs = {
        ...session.attrs,
        ip_address: "{{auto}}"
      };
    }
  } else {
    if (session.ipAddress === void 0) {
      session.ipAddress = "{{auto}}";
    }
  }
}

exports.addAutoIpAddressToSession = addAutoIpAddressToSession;
exports.addAutoIpAddressToUser = addAutoIpAddressToUser;
//# sourceMappingURL=ipAddress.js.map
