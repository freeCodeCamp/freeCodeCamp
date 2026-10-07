export interface Options {
	/**
	A semver range or [dist-tag](https://docs.npmjs.com/cli/dist-tag).
	*/
	readonly version?: string;
}

/**
Get the latest version of an npm package.

@example
```
import latestVersion from 'latest-version';

console.log(await latestVersion('ava'));
//=> '0.18.0'

console.log(await latestVersion('@sindresorhus/df'));
//=> '1.0.1'

// Also works with semver ranges and dist-tags
console.log(await latestVersion('npm', {version: 'latest-5'}));
//=> '5.5.1'
```
*/
export default function latestVersion(packageName: string, options?: Options): Promise<string>;
