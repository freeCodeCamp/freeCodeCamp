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

export { addAutoIpAddressToSession, addAutoIpAddressToUser };
//# sourceMappingURL=ipAddress.js.map
