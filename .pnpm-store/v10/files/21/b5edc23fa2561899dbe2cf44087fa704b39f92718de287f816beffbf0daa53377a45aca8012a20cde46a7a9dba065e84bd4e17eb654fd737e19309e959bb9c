"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getSslCert = getSslCert;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _os = _interopRequireDefault(require("os"));
var _prompts = _interopRequireDefault(require("prompts"));
const absoluteOrDirectory = (directory, filePath) => {
  // Support absolute paths
  if (_path.default.isAbsolute(filePath)) {
    return filePath;
  }
  return _path.default.join(directory, filePath);
};
const getWindowsEncryptionPassword = async () => {
  _reporter.default.info([`A password is required to access the secure certificate authority key`, `used for signing certificates.`, ``, `If this is the first time this has run, then this is to set the password`, `for future use.  If any new certificates are signed later, you will need`, `to use this same password.`, ``].join(`\n`));
  const results = await (0, _prompts.default)({
    type: `password`,
    name: `value`,
    message: `Please enter the CA password`,
    validate: input => input.length > 0 || `You must enter a password.`
  });
  return results.value;
};
async function getSslCert({
  name,
  certFile,
  keyFile,
  caFile,
  directory
}) {
  // check that cert file and key file are both true or both false, if they are both
  // false, it defaults to the automatic ssl
  if (certFile ? !keyFile : keyFile) {
    _reporter.default.panic({
      id: `11521`,
      context: {}
    });
  }
  if (certFile && keyFile) {
    const keyPath = absoluteOrDirectory(directory, keyFile);
    const certPath = absoluteOrDirectory(directory, certFile);
    process.env.NODE_EXTRA_CA_CERTS = caFile ? absoluteOrDirectory(directory, caFile) : certPath;
    return {
      key: _fs.default.readFileSync(keyPath, `utf-8`),
      cert: _fs.default.readFileSync(certPath, `utf-8`)
    };
  }
  _reporter.default.info(`setting up automatic SSL certificate (may require elevated permissions/sudo)\n`);
  try {
    if ([`linux`, `darwin`].includes(_os.default.platform()) && !process.env.HOME) {
      // this is a total hack to ensure process.env.HOME is set on linux and mac
      // devcert creates config path at import time (hence we import devcert after setting dummy value):
      // - https://github.com/davewasmer/devcert/blob/2b1b8d40eda251616bf74fd69f00ae8222ca1171/src/constants.ts#L15
      // - https://github.com/LinusU/node-application-config-path/blob/ae49ff6748b68b29ec76c00ce4a28ba8e9161d9b/index.js#L13
      // if HOME is not set, we will get:
      // "The "path" argument must be of type s tring. Received type undefined"
      // fatal error. This still likely will result in fatal error, but at least it's not on import time
      const mkdtemp = _fs.default.mkdtempSync(_path.default.join(_os.default.tmpdir(), `home-`));
      process.env.HOME = mkdtemp;
    }
    const getDevCert = require(`@expo/devcert`).certificateFor;
    const {
      caPath,
      key,
      cert
    } = await getDevCert(name, {
      getCaPath: true,
      skipCertutilInstall: false,
      ui: {
        getWindowsEncryptionPassword
      }
    });
    if (caPath) {
      process.env.NODE_EXTRA_CA_CERTS = caPath;
    }
    return {
      key: key.toString(),
      cert: cert.toString()
    };
  } catch (err) {
    _reporter.default.panic({
      id: `11522`,
      error: err,
      context: {
        message: err.message
      }
    });
  }
  return false;
}
//# sourceMappingURL=get-ssl-cert.js.map