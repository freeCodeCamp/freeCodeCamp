import {Agent as HttpAgent} from 'node:http';
import {Agent as HttpsAgent} from 'node:https';
import {Agents} from 'got';

/**
The error thrown when the given package version cannot be found.
*/
export class VersionNotFoundError extends Error {
	readonly name: 'VersionNotFoundError';

	constructor(packageName: string, version: string);
}

/**
The error thrown when the given package name cannot be found.
*/
export class PackageNotFoundError extends Error {
	readonly name: 'PackageNotFoundError';

	constructor(packageName: string);
}

export type Options = {
	/**
	Package version such as `1.0.0` or a [dist tag](https://docs.npmjs.com/cli/dist-tag) such as `latest`.

	The version can also be in any format supported by the [semver](https://github.com/npm/node-semver) module. For example:
	- `1` - Get the latest `1.x.x`
	- `1.2` - Get the latest `1.2.x`
	- `^1.2.3` - Get the latest `1.x.x` but at least `1.2.3`
	- `~1.2.3` - Get the latest `1.2.x` but at least `1.2.3`

	@default 'latest'
	*/
	readonly version?: string;

	/**
	By default, only an abbreviated metadata object is returned for performance reasons. [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)

	@default false
	*/
	readonly fullMetadata?: boolean;

	/**
	Return the [main entry](https://registry.npmjs.org/ava) containing all versions.

	@default false
	*/
	readonly allVersions?: boolean;

	/**
	The registry URL is by default inferred from the npm defaults and `.npmrc`. This is beneficial as `package-json` and any project using it will work just like npm. This option is*only** intended for internal tools. You should __not__ use this option in reusable packages. Prefer just using `.npmrc` whenever possible.
	*/
	readonly registryUrl?: string;

	/**
	Overwrite the `agent` option that is passed down to [`got`](https://github.com/sindresorhus/got#agent). This might be useful to add [proxy support](https://github.com/sindresorhus/got#proxies).
	*/
	readonly agent?: Agents;
};

export type FullMetadataOptions = {
	/**
	By default, only an abbreviated metadata object is returned for performance reasons. [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)

	@default false
	*/
	readonly fullMetadata: true;
} & Options;

interface DistTags {
	readonly [tagName: string]: string;
	readonly latest: string;
}

interface AbbreviatedVersion {
	readonly [key: string]: unknown;
	readonly name: string;
	readonly version: string;
	readonly dist: {
		readonly shasum: string;
		readonly tarball: string;
		readonly integrity?: string;
	};
	readonly deprecated?: string;
	readonly dependencies?: Readonly<Record<string, string>>;
	readonly optionalDependencies?: Readonly<Record<string, string>>;
	readonly devDependencies?: Readonly<Record<string, string>>;
	readonly bundleDependencies?: Readonly<Record<string, string>>;
	readonly peerDependencies?: Readonly<Record<string, string>>;
	readonly bin?: Readonly<Record<string, string>>;
	readonly directories?: readonly string[];
	readonly engines?: Readonly<Record<string, string>>;
	readonly _hasShrinkwrap?: boolean;
}

interface Person {
	readonly name?: string;
	readonly email?: string;
	readonly url?: string;
}

interface HoistedData {
	readonly author?: Person;
	readonly bugs?:
	| {readonly url: string; readonly email?: string}
	| {readonly url?: string; readonly email: string};
	readonly contributors?: readonly Person[];
	readonly description?: string;
	readonly homepage?: string;
	readonly keywords?: readonly string[];
	readonly license?: string;
	readonly maintainers?: readonly Person[];
	readonly readme?: string;
	readonly readmeFilename?: string;
	readonly repository?: {readonly type: string; readonly url: string};
}

interface FullVersion extends AbbreviatedVersion, HoistedData {
	readonly [key: string]: unknown;
	readonly _id: string;
	readonly _nodeVersion: string;
	readonly _npmUser: string;
	readonly _npmVersion: string;
	readonly main?: string;
	readonly files?: readonly string[];
	readonly man?: readonly string[];
	readonly scripts?: Readonly<Record<string, string>>;
	readonly gitHead?: string;
	readonly types?: string;
	readonly typings?: string;
}

export interface FullMetadata extends AbbreviatedMetadata, HoistedData {
	readonly [key: string]: unknown;
	readonly _id: string;
	readonly _rev: string;
	readonly time: {
		readonly [version: string]: string;
		readonly created: string;
		readonly modified: string;
	};
	readonly users?: Readonly<Record<string, boolean>>;
	readonly versions: Readonly<Record<string, FullVersion>>;
}

export interface AbbreviatedMetadata {
	readonly [key: string]: unknown;
	readonly 'dist-tags': DistTags;
	readonly modified: string;
	readonly name: string;
	readonly versions: Readonly<Record<string, AbbreviatedVersion>>;
}

/**
Get metadata of a package from the npm registry.

@param packageName - Name of the package.

@example
```
import packageJson from 'package-json';

console.log(await packageJson('ava'));
//=> {name: 'ava', …}

// Also works with scoped packages
console.log(await packageJson('@sindresorhus/df'));
```
*/
export default function packageJson(packageName: string, options: FullMetadataOptions): Promise<FullMetadata>;
export default function packageJson(packageName: string, options?: Options): Promise<AbbreviatedMetadata>;
