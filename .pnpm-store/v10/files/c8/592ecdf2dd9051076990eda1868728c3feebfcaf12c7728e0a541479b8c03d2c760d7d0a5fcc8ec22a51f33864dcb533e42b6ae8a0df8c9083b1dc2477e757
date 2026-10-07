import {Agent as HttpAgent} from 'node:http';
import {Agent as HttpsAgent} from 'node:https';
import got from 'got';
import registryUrl from 'registry-url';
import registryAuthToken from 'registry-auth-token';
import semver from 'semver';

// These agent options are chosen to match the npm client defaults and help with performance
// See: `npm config get maxsockets` and #50
const agentOptions = {
	keepAlive: true,
	maxSockets: 50,
};

const httpAgent = new HttpAgent(agentOptions);
const httpsAgent = new HttpsAgent(agentOptions);

export class PackageNotFoundError extends Error {
	constructor(packageName) {
		super(`Package \`${packageName}\` could not be found`);
		this.name = 'PackageNotFoundError';
	}
}

export class VersionNotFoundError extends Error {
	constructor(packageName, version) {
		super(`Version \`${version}\` for package \`${packageName}\` could not be found`);
		this.name = 'VersionNotFoundError';
	}
}

export default async function packageJson(packageName, options) {
	options = {
		version: 'latest',
		...options,
	};

	const scope = packageName.split('/')[0];
	const registryUrl_ = options.registryUrl || registryUrl(scope);
	const packageUrl = new URL(encodeURIComponent(packageName).replace(/^%40/, '@'), registryUrl_);
	const authInfo = registryAuthToken(registryUrl_.toString(), {recursive: true});

	const headers = {
		accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
	};

	if (options.fullMetadata) {
		delete headers.accept;
	}

	if (authInfo) {
		headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	const gotOptions = {
		headers,
		agent: {
			http: httpAgent,
			https: httpsAgent,
		},
	};

	if (options.agent) {
		gotOptions.agent = options.agent;
	}

	let data;
	try {
		data = await got(packageUrl, gotOptions).json();
	} catch (error) {
		if (error?.response?.statusCode === 404) {
			throw new PackageNotFoundError(packageName);
		}

		throw error;
	}

	if (options.allVersions) {
		return data;
	}

	let {version} = options;
	const versionError = new VersionNotFoundError(packageName, version);

	if (data['dist-tags'][version]) {
		const time = data.time;
		data = data.versions[data['dist-tags'][version]];
		data.time = time;
	} else if (version) {
		if (!data.versions[version]) {
			const versions = Object.keys(data.versions);
			version = semver.maxSatisfying(versions, version);

			if (!version) {
				throw versionError;
			}
		}

		const time = data.time;
		data = data.versions[version];
		data.time = time;

		if (!data) {
			throw versionError;
		}
	}

	return data;
}
