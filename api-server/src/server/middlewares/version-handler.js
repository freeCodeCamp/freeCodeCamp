const { version } = require('../../../package.json');

// TODO: I have no idea what I have done in the `middleware.json` file, but it might be working.
export default function versionHandler() {
  return (req, res, next) => {
    const { version: clientVersion } = req.headers;
    if (!clientVersion) {
      res.status(418);
      return next();
    }

    if (Number(version) > Number(clientVersion)) {
      res.status(418);
    }
    next();
  };
}
