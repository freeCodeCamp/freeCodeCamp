const { version } = require('../../../package.json');

export default function setVersionCookie() {
  return (req, res, next) => {
    res.cookie('version_token', version);
    next();
  };
}
