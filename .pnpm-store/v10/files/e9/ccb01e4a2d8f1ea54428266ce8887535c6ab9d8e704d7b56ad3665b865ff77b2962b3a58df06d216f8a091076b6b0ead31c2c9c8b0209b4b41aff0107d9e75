import packageJson from 'package-json';

export default async function latestVersion(packageName, options) {
	const {version} = await packageJson(packageName.toLowerCase(), options);
	return version;
}
