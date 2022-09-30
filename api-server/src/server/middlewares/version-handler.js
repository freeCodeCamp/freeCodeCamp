import { definitelyNotSemVer } from '../../../../utils/versioning.js';
import apiPackage from '../../../package.json' assert { type: 'json' };

// TODO: I have no idea what I have done in the `middleware.json` file, but it might be working.
export default function versionHandler() {
  return (req, res, next) => {
    const { version: clientVersion } = req.headers;
    if (!clientVersion) {
      res.status(418);
      return next();
    }

    // eslint-disable-next-line no-unused-vars
    const [serverMajor, serverMinor, _serverPatch] = definitelyNotSemVer(
      apiPackage.version
    );
    // eslint-disable-next-line no-unused-vars
    const [clientMajor, clientMinor, _clientPatch] =
      definitelyNotSemVer(clientVersion);
    if (clientMajor < serverMajor || clientMinor < serverMinor) {
      res.status(418);
    }
    next();
  };
}
