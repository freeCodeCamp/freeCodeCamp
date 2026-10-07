// Native
const {URL} = require('url');
const {join} = require('path');
const fs = require('fs');
const {promisify} = require('util');
const {tmpdir} = require('os');

// Packages
const registryUrl = require('registry-url');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const compareVersions = (a, b) => a.localeCompare(b, 'en-US', {numeric: true});
const encode = value => encodeURIComponent(value).replace(/^%40/, '@');

const getFile = async (details, distTag) => {
	const rootDir = tmpdir();
	const subDir = join(rootDir, 'update-check');

	if (!fs.existsSync(subDir)) {
		mkdir(subDir);
	}

	let name = `${details.name}-${distTag}.json`;

	if (details.scope) {
		name = `${details.scope}-${name}`;
	}

	return join(subDir, name);
};

const evaluateCache = async (file, time, interval) => {
	if (fs.existsSync(file)) {
		const content = await readFile(file, 'utf8');
		const {lastUpdate, latest} = JSON.parse(content);
		const nextCheck = lastUpdate + interval;

		// As long as the time of the next check is in
		// the future, we don't need to run it yet
		if (nextCheck > time) {
			return {
				shouldCheck: false,
				latest
			};
		}
	}

	return {
		shouldCheck: true,
		latest: null
	};
};

const updateCache = async (file, latest, lastUpdate) => {
	const content = JSON.stringify({
		latest,
		lastUpdate
	});

	await writeFile(file, content, 'utf8');
};

const loadPackage = (url, authInfo) => new Promise((resolve, reject) => {
	const options = {
		host: url.hostname,
		path: url.pathname,
		port: url.port,
		headers: {
			accept: 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*'
		},
		timeout: 2000
	};

	if (authInfo) {
		options.headers.authorization = `${authInfo.type} ${authInfo.token}`;
	}

	const {get} = require(url.protocol === 'https:' ? 'https' : 'http');
	get(options, response => {
		const {statusCode} = response;

		if (statusCode !== 200) {
			const error = new Error(`Request failed with code ${statusCode}`);
			error.code = statusCode;

			reject(error);

			// Consume response data to free up RAM
			response.resume();
			return;
		}

		let rawData = '';
		response.setEncoding('utf8');

		response.on('data', chunk => {
			rawData += chunk;
		});

		response.on('end', () => {
			try {
				const parsedData = JSON.parse(rawData);
				resolve(parsedData);
			} catch (e) {
				reject(e);
			}
		});
	}).on('error', reject).on('timeout', reject);
});

const getMostRecent = async ({full, scope}, distTag) => {
	const regURL = registryUrl(scope);
	const url = new URL(full, regURL);

	let spec = null;

	try {
		spec = await loadPackage(url);
	} catch (err) {
		// We need to cover:
		// 401 or 403 for when we don't have access
		// 404 when the package is hidden
		if (err.code && String(err.code).startsWith(4)) {
			// We only want to load this package for when we
			// really need to use the token
			const registryAuthToken = require('registry-auth-token');
			const authInfo = registryAuthToken(regURL, {recursive: true});

			spec = await loadPackage(url, authInfo);
		} else {
			throw err;
		}
	}

	const version = spec['dist-tags'][distTag];

	if (!version) {
		throw new Error(`Distribution tag ${distTag} is not available`);
	}

	return version;
};

const defaultConfig = {
	interval: 3600000,
	distTag: 'latest'
};

const getDetails = name => {
	const spec = {
		full: encode(name)
	};

	if (name.includes('/')) {
		const parts = name.split('/');

		spec.scope = parts[0];
		spec.name = parts[1];
	} else {
		spec.scope = null;
		spec.name = name;
	}

	return spec;
};

module.exports = async (pkg, config) => {
	if (typeof pkg !== 'object') {
		throw new Error('The first parameter should be your package.json file content');
	}

	const details = getDetails(pkg.name);
	const time = Date.now();
	const {distTag, interval} = Object.assign({}, defaultConfig, config);
	const file = await getFile(details, distTag);

	let latest = null;
	let shouldCheck = true;

	({shouldCheck, latest} = await evaluateCache(file, time, interval));

	if (shouldCheck) {
		latest = await getMostRecent(details, distTag);

		// If we pulled an update, we need to update the cache
		await updateCache(file, latest, time);
	}

	const comparision = compareVersions(pkg.version, latest);

	if (comparision === -1) {
		return {
			latest,
			fromCache: !shouldCheck
		};
	}

	return null;
};
