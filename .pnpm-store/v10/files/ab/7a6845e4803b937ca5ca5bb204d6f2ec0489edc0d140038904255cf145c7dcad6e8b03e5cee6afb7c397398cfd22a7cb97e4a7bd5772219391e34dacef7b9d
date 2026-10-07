// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const stream = require('stream');
const zlib = require('zlib');
const { createHash } = require('crypto');

const detectLibc = require('detect-libc');
const semverCoerce = require('semver/functions/coerce');
const semverLessThan = require('semver/functions/lt');
const semverSatisfies = require('semver/functions/satisfies');
const simpleGet = require('simple-get');
const tarFs = require('tar-fs');

const agent = require('../lib/agent');
const libvips = require('../lib/libvips');
const platform = require('../lib/platform');

const minimumGlibcVersionByArch = {
  arm: '2.28',
  arm64: '2.17',
  x64: '2.17'
};

const hasSharpPrebuild = [
  'darwin-x64',
  'darwin-arm64',
  'linux-arm64',
  'linux-x64',
  'linuxmusl-x64',
  'linuxmusl-arm64',
  'win32-ia32',
  'win32-x64'
];

const { minimumLibvipsVersion, minimumLibvipsVersionLabelled } = libvips;
const localLibvipsDir = process.env.npm_config_sharp_libvips_local_prebuilds || '';
const distHost = process.env.npm_config_sharp_libvips_binary_host || 'https://github.com/lovell/sharp-libvips/releases/download';
const distBaseUrl = process.env.npm_config_sharp_dist_base_url || process.env.SHARP_DIST_BASE_URL || `${distHost}/v${minimumLibvipsVersionLabelled}/`;
const installationForced = !!(process.env.npm_config_sharp_install_force || process.env.SHARP_INSTALL_FORCE);

const fail = function (err) {
  libvips.log(err);
  if (err.code === 'EACCES') {
    libvips.log('Are you trying to install as a root or sudo user?');
    libvips.log('- For npm <= v6, try again with the "--unsafe-perm" flag');
    libvips.log('- For npm >= v8, the user must own the directory "npm install" is run in');
  }
  libvips.log('Please see https://sharp.pixelplumbing.com/install for required dependencies');
  process.exit(1);
};

const handleError = function (err) {
  if (installationForced) {
    libvips.log(`Installation warning: ${err.message}`);
  } else {
    throw err;
  }
};

const verifyIntegrity = function (platformAndArch) {
  const expected = libvips.integrity(platformAndArch);
  if (installationForced || !expected) {
    libvips.log(`Integrity check skipped for ${platformAndArch}`);
    return new stream.PassThrough();
  }
  const hash = createHash('sha512');
  return new stream.Transform({
    transform: function (chunk, _encoding, done) {
      hash.update(chunk);
      done(null, chunk);
    },
    flush: function (done) {
      const digest = `sha512-${hash.digest('base64')}`;
      if (expected !== digest) {
        try {
          libvips.removeVendoredLibvips();
        } catch (err) {
          libvips.log(err.message);
        }
        libvips.log(`Integrity expected: ${expected}`);
        libvips.log(`Integrity received: ${digest}`);
        done(new Error(`Integrity check failed for ${platformAndArch}`));
      } else {
        libvips.log(`Integrity check passed for ${platformAndArch}`);
        done();
      }
    }
  });
};

const extractTarball = function (tarPath, platformAndArch) {
  const versionedVendorPath = path.join(__dirname, '..', 'vendor', minimumLibvipsVersion, platformAndArch);
  libvips.mkdirSync(versionedVendorPath);

  const ignoreVendorInclude = hasSharpPrebuild.includes(platformAndArch) && !process.env.npm_config_build_from_source;
  const ignore = function (name) {
    return ignoreVendorInclude && name.includes('include/');
  };

  stream.pipeline(
    fs.createReadStream(tarPath),
    verifyIntegrity(platformAndArch),
    new zlib.BrotliDecompress(),
    tarFs.extract(versionedVendorPath, { ignore }),
    function (err) {
      if (err) {
        if (/unexpected end of file/.test(err.message)) {
          fail(new Error(`Please delete ${tarPath} as it is not a valid tarball`));
        }
        fail(err);
      }
    }
  );
};

try {
  const useGlobalLibvips = libvips.useGlobalLibvips();

  if (useGlobalLibvips) {
    const globalLibvipsVersion = libvips.globalLibvipsVersion();
    libvips.log(`Detected globally-installed libvips v${globalLibvipsVersion}`);
    libvips.log('Building from source via node-gyp');
    process.exit(1);
  } else if (libvips.hasVendoredLibvips()) {
    libvips.log(`Using existing vendored libvips v${minimumLibvipsVersion}`);
  } else {
    // Is this arch/platform supported?
    const arch = process.env.npm_config_arch || process.arch;
    const platformAndArch = platform();
    if (arch === 'ia32' && !platformAndArch.startsWith('win32')) {
      throw new Error(`Intel Architecture 32-bit systems require manual installation of libvips >= ${minimumLibvipsVersion}`);
    }
    if (platformAndArch === 'freebsd-x64' || platformAndArch === 'openbsd-x64' || platformAndArch === 'sunos-x64') {
      throw new Error(`BSD/SunOS systems require manual installation of libvips >= ${minimumLibvipsVersion}`);
    }
    // Linux libc version check
    const libcVersionRaw = detectLibc.versionSync();
    if (libcVersionRaw) {
      const libcFamily = detectLibc.familySync();
      const libcVersion = semverCoerce(libcVersionRaw).version;
      if (libcFamily === detectLibc.GLIBC && minimumGlibcVersionByArch[arch]) {
        if (semverLessThan(libcVersion, semverCoerce(minimumGlibcVersionByArch[arch]).version)) {
          handleError(new Error(`Use with glibc ${libcVersionRaw} requires manual installation of libvips >= ${minimumLibvipsVersion}`));
        }
      }
      if (libcFamily === detectLibc.MUSL) {
        if (semverLessThan(libcVersion, '1.1.24')) {
          handleError(new Error(`Use with musl ${libcVersionRaw} requires manual installation of libvips >= ${minimumLibvipsVersion}`));
        }
      }
    }
    // Node.js minimum version check
    const supportedNodeVersion = process.env.npm_package_engines_node || require('../package.json').engines.node;
    if (!semverSatisfies(process.versions.node, supportedNodeVersion)) {
      handleError(new Error(`Expected Node.js version ${supportedNodeVersion} but found ${process.versions.node}`));
    }
    // Download to per-process temporary file
    const tarFilename = ['libvips', minimumLibvipsVersionLabelled, platformAndArch].join('-') + '.tar.br';
    const tarPathCache = path.join(libvips.cachePath(), tarFilename);
    if (fs.existsSync(tarPathCache)) {
      libvips.log(`Using cached ${tarPathCache}`);
      extractTarball(tarPathCache, platformAndArch);
    } else if (localLibvipsDir) {
      // If localLibvipsDir is given try to use binaries from local directory
      const tarPathLocal = path.join(path.resolve(localLibvipsDir), `v${minimumLibvipsVersionLabelled}`, tarFilename);
      libvips.log(`Using local libvips from ${tarPathLocal}`);
      extractTarball(tarPathLocal, platformAndArch);
    } else {
      const url = distBaseUrl + tarFilename;
      libvips.log(`Downloading ${url}`);
      simpleGet({ url: url, agent: agent(libvips.log) }, function (err, response) {
        if (err) {
          fail(err);
        } else if (response.statusCode === 404) {
          fail(new Error(`Prebuilt libvips ${minimumLibvipsVersion} binaries are not yet available for ${platformAndArch}`));
        } else if (response.statusCode !== 200) {
          fail(new Error(`Status ${response.statusCode} ${response.statusMessage}`));
        } else {
          const tarPathTemp = path.join(os.tmpdir(), `${process.pid}-${tarFilename}`);
          const tmpFileStream = fs.createWriteStream(tarPathTemp);
          response
            .on('error', function (err) {
              tmpFileStream.destroy(err);
            })
            .on('close', function () {
              if (!response.complete) {
                tmpFileStream.destroy(new Error('Download incomplete (connection was terminated)'));
              }
            })
            .pipe(tmpFileStream);
          tmpFileStream
            .on('error', function (err) {
              // Clean up temporary file
              try {
                fs.unlinkSync(tarPathTemp);
              } catch (e) {}
              fail(err);
            })
            .on('close', function () {
              try {
                // Attempt to rename
                fs.renameSync(tarPathTemp, tarPathCache);
              } catch (err) {
                // Fall back to copy and unlink
                fs.copyFileSync(tarPathTemp, tarPathCache);
                fs.unlinkSync(tarPathTemp);
              }
              extractTarball(tarPathCache, platformAndArch);
            });
        }
      });
    }
  }
} catch (err) {
  fail(err);
}
