'use strict';
const url = require('url');
const got = require('got');
const registryUrl = require('registry-url');
const registryAuthToken = require('registry-auth-token');
const semver = require('semver');

module.exports = (name, opts) => {
	const scope = name.split('/')[0];
	const regUrl = registryUrl(scope);
	const pkgUrl = url.resolve(regUrl, encodeURIComponent(name).replace(/^%40/, '@'));
	const authInfo = registryAuthToken(regUrl, {recursive: true});

	opts = Object.assign({
		version: 'latest'
	}, opts);

	const headers = {
		accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*'
	};

	if (opts.fullMetadata) {
		delete headers.accept;
	}

	if (authInfo) {
		headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	return got(pkgUrl, {json: true, headers})
		.then(res => {
			let data = res.body;
			let version = opts.version;

			if (opts.allVersions) {
				return data;
			}

			if (data['dist-tags'][version]) {
				data = data.versions[data['dist-tags'][version]];
			} else if (version) {
				if (!data.versions[version]) {
					const versions = Object.keys(data.versions);
					version = semver.maxSatisfying(versions, version);

					if (!version) {
						throw new Error('Version doesn\'t exist');
					}
				}

				data = data.versions[version];

				if (!data) {
					throw new Error('Version doesn\'t exist');
				}
			}

			return data;
		})
		.catch(err => {
			if (err.statusCode === 404) {
				throw new Error(`Package \`${name}\` doesn't exist`);
			}

			throw err;
		});
};
