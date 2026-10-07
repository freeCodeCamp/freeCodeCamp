<div align="center">
	<br>
	<br>
	<img src="media/logo.svg" alt="type-fest" height="300">
	<br>
	<br>
	<b>A collection of essential TypeScript types</b>
	<br>
	<br>
	<br>
	<br>
	<div align="center">
		<p>
			<p>
				<sup>
					<a href="https://github.com/sponsors/sindresorhus">Sindre Sorhus' open source work is supported by the community</a>
				</sup>
			</p>
			<sup>Special thanks to:</sup>
			<br>
			<br>
			<a href="https://standardresume.co/tech">
				<img src="https://sindresorhus.com/assets/thanks/standard-resume-logo.svg" width="180"/>
			</a>
		</p>
	</div>
	<br>
	<hr>
</div>
<br>
<br>

[![](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://giphy.com/gifs/illustration-rainbow-unicorn-26AHG5KGFxSkUWw1i)
[![npm dependents](https://badgen.net/npm/dependents/type-fest)](https://www.npmjs.com/package/type-fest?activeTab=dependents) [![npm downloads](https://badgen.net/npm/dt/type-fest)](https://www.npmjs.com/package/type-fest)

Many of the types here should have been built-in. You can help by suggesting some of them to the [TypeScript project](https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md).

Either add this package as a dependency or copy-paste the needed types. No credit required. 👌

PR welcome for additional commonly needed types and docs improvements. Read the [contributing guidelines](.github/contributing.md) first.

## Install

```
$ npm install type-fest
```

*Requires TypeScript >=3.4*

## Usage

```ts
import {Except} from 'type-fest';

type Foo = {
	unicorn: string;
	rainbow: boolean;
};

type FooWithoutRainbow = Except<Foo, 'rainbow'>;
//=> {unicorn: string}
```

## API

Click the type names for complete docs.

### Basic

- [`Primitive`](source/basic.d.ts) - Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
- [`Class`](source/basic.d.ts) - Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- [`TypedArray`](source/typed-array.d.ts) - Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.
- [`JsonObject`](source/basic.d.ts) - Matches a JSON object.
- [`JsonArray`](source/basic.d.ts) - Matches a JSON array.
- [`JsonValue`](source/basic.d.ts) - Matches any valid JSON value.
- [`ObservableLike`](source/basic.d.ts) - Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).

### Utilities

- [`Except`](source/except.d.ts) - Create a type from an object type without certain keys. This is a stricter version of [`Omit`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-5.html#the-omit-helper-type).
- [`Mutable`](source/mutable.d.ts) - Create a type that strips `readonly` from all or some of an object's keys. The inverse of `Readonly<T>`.
- [`Merge`](source/merge.d.ts) - Merge two types into a new type. Keys of the second type overrides keys of the first type.
- [`MergeExclusive`](source/merge-exclusive.d.ts) - Create a type that has mutually exclusive keys.
- [`RequireAtLeastOne`](source/require-at-least-one.d.ts) - Create a type that requires at least one of the given keys.
- [`RequireExactlyOne`](source/require-exactly-one.d.ts) - Create a type that requires exactly a single key of the given keys and disallows more.
- [`PartialDeep`](source/partial-deep.d.ts) - Create a deeply optional version of another type. Use [`Partial<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1401-L1406) if you only need one level deep.
- [`ReadonlyDeep`](source/readonly-deep.d.ts) - Create a deeply immutable version of an `object`/`Map`/`Set`/`Array` type. Use [`Readonly<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1415-L1420) if you only need one level deep.
- [`LiteralUnion`](source/literal-union.d.ts) - Create a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union. Workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).
- [`Promisable`](source/promisable.d.ts) - Create a type that represents either the value or the value wrapped in `PromiseLike`.
- [`Opaque`](source/opaque.d.ts) - Create an [opaque type](https://codemix.com/opaque-types-in-javascript/).
- [`SetOptional`](source/set-optional.d.ts) - Create a type that makes the given keys optional.
- [`SetRequired`](source/set-required.d.ts) - Create a type that makes the given keys required.
- [`ValueOf`](source/value-of.d.ts) - Create a union of the given object's values, and optionally specify which keys to get the values from.
- [`PromiseValue`](source/promise-value.d.ts) - Returns the type that is wrapped inside a `Promise`.
- [`AsyncReturnType`](source/async-return-type.d.ts) - Unwrap the return type of a function that returns a `Promise`.
- [`ConditionalKeys`](source/conditional-keys.d.ts) - Extract keys from a shape where values extend the given `Condition` type.
- [`ConditionalPick`](source/conditional-pick.d.ts) - Like `Pick` except it selects properties from a shape where the values extend the given `Condition` type.
- [`ConditionalExcept`](source/conditional-except.d.ts) - Like `Omit` except it removes properties from a shape where the values extend the given `Condition` type.
- [`UnionToIntersection`](source/union-to-intersection.d.ts) - Convert a union type to an intersection type.
- [`Stringified`](source/stringified.d.ts) - Create a type with the keys of the given type changed to `string` type.
- [`FixedLengthArray`](source/fixed-length-array.d.ts) - Create a type that represents an array of the given type and length.
- [`IterableElement`](source/iterable-element.d.ts) - Get the element type of an `Iterable`/`AsyncIterable`. For example, an array or a generator.
- [`Entry`](source/entry.d.ts) - Create a type that represents the type of an entry of a collection.
- [`Entries`](source/entries.d.ts) - Create a type that represents the type of the entries of a collection.
- [`SetReturnType`](source/set-return-type.d.ts) - Create a function type with a return type of your choice and the same parameters as the given function type.
- [`Asyncify`](source/asyncify.d.ts) - Create an async version of the given function type.

### Template literal types

*Note:* These require [TypeScript 4.1 or newer](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#template-literal-types).

- [`CamelCase`](ts41/camel-case.d.ts) – Convert a string literal to camel-case (`fooBar`).
- [`KebabCase`](ts41/kebab-case.d.ts) – Convert a string literal to kebab-case (`foo-bar`).
- [`PascalCase`](ts41/pascal-case.d.ts) – Converts a string literal to pascal-case (`FooBar`)
- [`SnakeCase`](ts41/snake-case.d.ts) – Convert a string literal to snake-case (`foo_bar`).
- [`DelimiterCase`](ts41/delimiter-case.d.ts) – Convert a string literal to a custom string delimiter casing.
- [`Get`](ts41/get.d.ts) - Get a deeply-nested property from an object using a key path, like [Lodash's `.get()`](https://lodash.com/docs/latest#get) function.

### Miscellaneous

- [`PackageJson`](source/package-json.d.ts) - Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file).
- [`TsConfigJson`](source/tsconfig-json.d.ts) - Type for [TypeScript's `tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) (TypeScript 3.7).

## Declined types

*If we decline a type addition, we will make sure to document the better solution here.*

- [`Diff` and `Spread`](https://github.com/sindresorhus/type-fest/pull/7) - The PR author didn't provide any real-world use-cases and the PR went stale. If you think this type is useful, provide some real-world use-cases and we might reconsider.
- [`Dictionary`](https://github.com/sindresorhus/type-fest/issues/33) - You only save a few characters (`Dictionary<number>` vs `Record<string, number>`) from [`Record`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1429-L1434), which is more flexible and well-known. Also, you shouldn't use an object as a dictionary. We have `Map` in JavaScript now.
- [`SubType`](https://github.com/sindresorhus/type-fest/issues/22) - The type is powerful, but lacks good use-cases and is prone to misuse.
- [`ExtractProperties` and `ExtractMethods`](https://github.com/sindresorhus/type-fest/pull/4) - The types violate the single responsibility principle. Instead, refine your types into more granular type hierarchies.

## Tips

### Built-in types

There are many advanced types most users don't know about.

- [`Partial<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1401-L1406) - Make all properties in `T` optional.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://www.typescriptlang.org/play/#code/JYOwLgpgTgZghgYwgAgHIHsAmEDC6QzADmyA3gLABQyycADnanALYQBcyAzmFKEQNxUaddFDAcQAV2YAjaIMoBfKlQQAbOJ05osEAIIMAQpOBrsUMkOR1eANziRkCfISKSoD4Pg4ZseAsTIALyW1DS0DEysHADkvvoMMQA0VsKi4sgAzAAMuVaKClY2wPaOknSYDrguADwA0sgQAB6QIJjaANYQAJ7oMDp+LsQAfAAUXd0cdUnI9mo+uv6uANp1ALoAlKHhyGAAFsCcAHTOAW4eYF4gyxNrwbNwago0ypRWp66jH8QcAApwYmAjxq8SWIy2FDCNDA3ToKFBQyIdR69wmfQG1TOhShyBgomQX3w3GQE2Q6IA8jIAFYQBBgI4TTiEs5bTQYsFInrLTbbHZOIlgZDlSqQABqj0kKBC3yINx6a2xfOQwH6o2FVXFaklwSCIUkbQghBAEEwENSfNOlykEGefNe5uhB2O6sgS3GPRmLogmslG1tLxUOKgEDA7hAuydtteryAA)

	```ts
	interface NodeConfig {
			appName: string;
			port: number;
	}

	class NodeAppBuilder {
			private configuration: NodeConfig = {
					appName: 'NodeApp',
					port: 3000
			};

			private updateConfig<Key extends keyof NodeConfig>(key: Key, value: NodeConfig[Key]) {
					this.configuration[key] = value;
			}

			config(config: Partial<NodeConfig>) {
					type NodeConfigKey = keyof NodeConfig;

					for (const key of Object.keys(config) as NodeConfigKey[]) {
							const updateValue = config[key];

							if (updateValue === undefined) {
									continue;
							}

							this.updateConfig(key, updateValue);
					}

					return this;
			}
	}

	// `Partial<NodeConfig>`` allows us to provide only a part of the
	// NodeConfig interface.
	new NodeAppBuilder().config({appName: 'ToDoApp'});
	```
	</details>

- [`Required<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1408-L1413) - Make all properties in `T` required.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgGED21VQGJZwC2wA3gFCjXAzFJgA2A-AFzADOUckA5gNxUaIYjA4ckvGG07c+g6gF8KQkAgCuEFFDA5O6gEbEwUbLm2ESwABQIixACJIoSdgCUYAR3Vg4MACYAPGYuFvYAfACU5Ko0APRxwADKMBD+wFAAFuh2Vv7OSBlYGdmc8ABu8LHKsRyGxqY4oQT21pTCIHQMjOwA5DAAHgACxAAOjDAAdChYxL0ANLHUouKSMH0AEmAAhJhY6ozpAJ77GTCMjMCiV0ToSAb7UJPPC9WRgrEJwAAqR6MwSRQPFGUFocDgRHYxnEfGAowh-zgUCOwF6KwkUl6tXqJhCeEsxDaS1AXSYfUGI3GUxmc0WSneQA)

	```ts
	interface ContactForm {
			email?: string;
			message?: string;
	}

	function submitContactForm(formData: Required<ContactForm>) {
			// Send the form data to the server.
	}

	submitContactForm({
			email: 'ex@mple.com',
			message: 'Hi! Could you tell me more about…',
	});

	// TypeScript error: missing property 'message'
	submitContactForm({
			email: 'ex@mple.com',
	});
	```
	</details>

- [`Readonly<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1415-L1420) - Make all properties in `T` readonly.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4UwOwVwW2AZA9gc3mAbmANsA3gKFCOAHkAzMgGkOJABEwAjKZa2kAUQCcvEu32AMQCGAF2FYBIAL4BufDRABLCKLBcywgMZgEKZOoDCiCGSXI8i4hGEwwALmABnUVxXJ57YFgzZHSVF8sT1BpBSItLGEnJz1kAy5LLy0TM2RHACUwYQATEywATwAeAITjU3MAPnkrCJMXLigtUT4AClxgGztKbyDgaX99I1TzAEokr1BRAAslJwA6FIqLAF48TtswHp9MHDla9hJGACswZvmyLjAwAC8wVpm5xZHkUZDaMKIwqyWXYCW0oN4sNlsA1h0ug5gAByACyBQAggAHJHQ7ZBIFoXbzBjMCz7OoQP5YIaJNYQMAAdziCVaALGNSIAHomcAACoFJFgADKWjcSNEwG4vC4ji0wggEEQguiTnMEGALWAV1yAFp8gVgEjeFyuKICvMrCTgVxnst5jtsGC4ljsPNhXxGaAWcAAOq6YRXYDCRg+RWIcA5JSC+kWdCepQ+v3RYCU3RInzRMCGwlpC19NYBW1Ye08R1AA)

	```ts
	enum LogLevel {
			Off,
			Debug,
			Error,
			Fatal
	};

	interface LoggerConfig {
			name: string;
			level: LogLevel;
	}

	class Logger {
			config: Readonly<LoggerConfig>;

			constructor({name, level}: LoggerConfig) {
					this.config = {name, level};
					Object.freeze(this.config);
			}
	}

	const config: LoggerConfig = {
		name: 'MyApp',
		level: LogLevel.Debug
	};

	const logger = new Logger(config);

	// TypeScript Error: cannot assign to read-only property.
	logger.config.level = LogLevel.Error;

	// We are able to edit config variable as we please.
	config.level = LogLevel.Error;
	```
	</details>

- [`Pick<T, K>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1422-L1427) - From `T`, pick a set of properties whose keys are in the union `K`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4SwOwFwUwJwGYEMDGNgEE5TCgNugN4BQoZwOUBAXMAM5RyQDmA3KeSFABYCuAtgCMISMHloMmENh04oA9tBjQJjFuzIBfYrOAB6PcADCcGElh1gEGAHcKATwAO6ebyjB5CTNlwFwSxFR0BX5HeToYABNgBDh5fm8cfBg6AHIKG3ldA2BHOOcfFNpUygJ0pAhokr4hETFUgDpswywkggAFUwA3MFtgAF5gQgowKhhVKTYKGuFRcXo1aVZgbTIoJ3RW3xhOmB6+wfbcAGsAHi3kgBpgEtGy4AAfG54BWfqAPnZm4AAlZUj4MAkMA8GAGB4vEgfMlLLw6CwPBA8PYRmMgZVgAC6CgmI4cIommQELwICh8RBgKZKvALh1ur0bHQABR5PYMui0Wk7em2ADaAF0AJS0AASABUALIAGQAogR+Mp3CROCAFBBwVC2ikBpj5CgBIqGjizLA5TAFdAmalImAuqlBRoVQh5HBgEy1eDWfs7J5cjzGYKhroVfpDEhHM4MV6GRR5NN0JrtnRg6BVirTFBeHAKYmYY6QNpdB73LmCJZBlSAXAubtvczeSmQMNSuMbmKNgBlHFgPEUNwusBIPAAQlS1xetTmxT0SDoESgdD0C4aACtHMwxytLrohawgA)

	```ts
	interface Article {
			title: string;
			thumbnail: string;
			content: string;
	}

	// Creates new type out of the `Article` interface composed
	// from the Articles' two properties: `title` and `thumbnail`.
	// `ArticlePreview = {title: string; thumbnail: string}`
	type ArticlePreview = Pick<Article, 'title' | 'thumbnail'>;

	// Render a list of articles using only title and description.
	function renderArticlePreviews(previews: ArticlePreview[]): HTMLElement {
			const articles = document.createElement('div');

			for (const preview of previews) {
					// Append preview to the articles.
			}

			return articles;
	}

	const articles = renderArticlePreviews([
			{
				title: 'TypeScript tutorial!',
				thumbnail: '/assets/ts.jpg'
			}
	]);
	```
	</details>

- [`Record<K, T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1429-L1434) - Construct a type with a set of properties `K` of type `T`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/AQ4ejYAUHsGcCWAXBMB2dgwGbAKYC2ADgDYwCeeemCaWArgE7ADGMxAhmuQHQBQoYEnJE8wALKEARnkaxEKdMAC8wAOS0kstGuAAfdQBM8ANzxlRjXQbVaWACwC0JPB0NqA3HwGgIwAJJoWozYHCxixnAsjAhStADmwESMMJYo1Fi4HMCIaPEu+MRklHj8gpqyoeHAAKJFFFTAAN4+giDYCIxwSAByHAR4AFw5SDF5Xm2gJBzdfQPD3WPxE5PAlBxdAPLYNQAelgh4aOHDaPQEMowrIAC+3oJ+AMKMrlrAXFhSAFZ4LEhC9g4-0BmA4JBISXgiCkBQABpILrJ5MhUGhYcATGD6Bk4Hh-jNgABrPDkOBlXyQAAq9ngYmJpOAAHcEOCRjAXqwYODfoo6DhakUSph+Uh7GI4P0xER4Cj0OSQGwMP8tP1hgAlX7swwAHgRl2RvIANALSA08ABtAC6AD4VM1Wm0Kow0MMrYaHYJjGYLLJXZb3at1HYnC43Go-QHQDcvA6-JsmEJXARgCDgMYWAhjIYhDAU+YiMAAFIwex0ZmilMITCGF79TLAGRsAgJYAAZRwSEZGzEABFTOZUrJ5Yn+jwnWgeER6HB7AAKJrADpdXqS4ZqYultTG6azVfqHswPBbtauLY7fayQ7HIbAAAMwBuAEoYw9IBq2Ixs9h2eFMOQYPQObALQKJgggABeYhghCIpikkKRpOQRIknAsZUiIeCttECBEP8NSMCkjDDAARMGziuIYxHwYOjDCMBmDNnAuTxA6irdCOBB1Lh5Dqpqn66tISIykawBnOCtqqC0gbjqc9DgpGkxegOliyfJDrRkAA)

	```ts
	// Positions of employees in our company.
	type MemberPosition = 'intern' | 'developer' | 'tech-lead';

	// Interface describing properties of a single employee.
	interface Employee {
			firstName: string;
			lastName: string;
			yearsOfExperience: number;
	}

	// Create an object that has all possible `MemberPosition` values set as keys.
	// Those keys will store a collection of Employees of the same position.
	const team: Record<MemberPosition, Employee[]> = {
			intern: [],
			developer: [],
			'tech-lead': [],
	};

	// Our team has decided to help John with his dream of becoming Software Developer.
	team.intern.push({
		firstName: 'John',
		lastName: 'Doe',
		yearsOfExperience: 0
	});

	// `Record` forces you to initialize all of the property keys.
	// TypeScript Error: "tech-lead" property is missing
	const teamEmpty: Record<MemberPosition, null> = {
			intern: null,
			developer: null,
	};
	```
	</details>

- [`Exclude<T, U>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1436-L1439) - Exclude from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgMrQG7QMIHsQzADmyA3gFDLIAOuUYAXMiAK4A2byAPsgM5hRQJHqwC2AI2gBucgF9y5MAE9qKAEoQAjiwj8AEnBAATNtGQBeZAAooWphu26wAGmS3e93bRC8IASgsAPmRDJRlyAHoI5ABRAA8ENhYjFFYOZGVVZBgoXFFkAAM0zh5+QRBhZhYJaAKAOkjogEkQZAQ4X2QAdwALCFbaemRgXmQtFjhOMFwq9K6ULuB0lk6U+HYwZAxJnQaYFhAEMGB8ZCIIMAAFOjAANR2IK0HGWISklIAedCgsKDwCYgAbQA5M9gQBdVzFQJ+JhiSRQMiUYYwayZCC4VHPCzmSzAspCYEBWxgFhQAZwKC+FpgJ43VwARgADH4ZFQSWSBjcZPJyPtDsdTvxKWBvr8rD1DCZoJ5HPopaYoK4EPhCEQmGKcKriLCtrhgEYkVQVT5Nr4fmZLLZtMBbFZgT0wGBqES6ghbHBIJqoBKFdBWQpjfh+DQbhY2tqiHVsbjLMVkAB+ZAAZiZaeQTHOVxu9ySjxNaujNwDVHNvzqbBGkBAdPoAfkQA)

	```ts
	interface ServerConfig {
		port: null | string | number;
	}

	type RequestHandler = (request: Request, response: Response) => void;

	// Exclude `null` type from `null | string | number`.
	// In case the port is equal to `null`, we will use default value.
	function getPortValue(port: Exclude<ServerConfig['port'], null>): number {
		if (typeof port === 'string') {
			return parseInt(port, 10);
		}

		return port;
	}

	function startServer(handler: RequestHandler, config: ServerConfig): void {
		const server = require('http').createServer(handler);

		const port = config.port === null ? 3000 : getPortValue(config.port);
		server.listen(port);
	}
	```
	</details>

- [`Extract<T, U>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1441-L1444) - Extract from `T` those types that are assignable to `U`.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzSwEdkQBJYACgEoAueVZAWwCMQYBuAKDDwGcM8MgBF4AXngBlAJ6scESgHIRi6ty5ZUGdoihgEABXZ888AN5d48ANoiAuvUat23K6ihMQ9ATE0BzV3goPy8GZjZOLgBfLi4Aejj4AEEICBwAdz54MAALKFQQ+BxEeAAHY1NgKAwoIKy0grr4DByEUpgccpgMaXgAaxBerCzi+B9-ZulygDouFHRsU1z8kKMYE1RhaqgAHkt4AHkWACt4EAAPbVRgLLWNgBp9gGlBs8uQa6yAUUuYPQwdgNpKM7nh7mMML4CgA+R5WABqUAgpDeVxuhxO1he0jsXGh8EoOBO9COx3BQPo2PBADckaR6IjkSA6PBqTgsMBzPsicdrEC7OJWXSQNwYvFEgAVTS9JLXODpeDpKBZFg4GCoWa8VACIJykAKiQWKy2YQOAioYikCg0OEMDyhRSy4DyxS24KhAAMjyi6gS8AAwjh5OD0iBFHAkJoEOksC1mnkMJq8gUQKDNttKPlnfrwYp3J5XfBHXqoKpfYkAOI4ansTxaeDADmoRSCCBYAbxhC6TDx6rwYHIRX5bScjA4bLJwoDmDwDkfbA9JMrVMVdM1TN69LgkTgwgkchUahqIA)

	```ts
	declare function uniqueId(): number;

	const ID = Symbol('ID');

	interface Person {
		[ID]: number;
		name: string;
		age: number;
	}

	// Allows changing the person data as long as the property key is of string type.
	function changePersonData<
		Obj extends Person,
		Key extends Extract<keyof Person, string>,
		Value extends Obj[Key]
	> (obj: Obj, key: Key, value: Value): void {
		obj[key] = value;
	}

	// Tiny Andrew was born.
	const andrew = {
		[ID]: uniqueId(),
		name: 'Andrew',
		age: 0,
	};

	// Cool, we're fine with that.
	changePersonData(andrew, 'name', 'Pony');

	// Goverment didn't like the fact that you wanted to change your identity.
	changePersonData(andrew, ID, uniqueId());
	```
	</details>

- [`NonNullable<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1446-L1449) - Exclude `null` and `undefined` from `T`.
	<details>
	<summary>
			Example
	</summary>
	Works with <code>strictNullChecks</code> set to <code>true</code>. (Read more <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html">here</a>)

	[Playground](https://typescript-play.js.org/?target=6#code/C4TwDgpgBACg9gJ2AOQK4FsBGEFQLxQDOwCAlgHYDmUAPlORtrnQwDasDcAUFwPQBU-WAEMkUOADMowqAGNWwwoSgATCBIqlgpOOSjAAFsOBRSy1IQgr9cKJlSlW1mZYQA3HFH68u8xcoBlHA8EACEHJ08Aby4oKDBUTFZSWXjEFEYcAEIALihkXTR2YSSIAB54JDQsHAA+blj4xOTUsHSACkMzPKD3HHDHNQQAGjSkPMqMmoQASh7g-oihqBi4uNIpdraxPAI2VhmVxrX9AzMAOm2ppnwoAA4ABifuE4BfKAhWSyOTuK7CS7pao3AhXF5rV48E4ICDAVAIPT-cGQyG+XTEIgLMJLTx7CAAdygvRCA0iCHaMwarhJOIQjUBSHaACJHk8mYdeLwxtdcVAAOSsh58+lXdr7Dlcq7A3n3J4PEUdADMcspUE53OluAIUGVTx46oAKuAIAFZGQwCYAKIIBCILjUxaDHAMnla+iodjcIA)

	```ts
	type PortNumber = string | number | null;

	/** Part of a class definition that is used to build a server */
	class ServerBuilder {
			portNumber!: NonNullable<PortNumber>;

			port(this: ServerBuilder, port: PortNumber): ServerBuilder {
					if (port == null) {
							this.portNumber = 8000;
					} else {
							this.portNumber = port;
					}

					return this;
			}
	}

	const serverBuilder = new ServerBuilder();

	serverBuilder
			.port('8000')   // portNumber = '8000'
			.port(null)     // portNumber =  8000
			.port(3000);    // portNumber =  3000

	// TypeScript error
	serverBuilder.portNumber = null;
	```
	</details>

- [`Parameters<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1451-L1454) - Obtain the parameters of a function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/GYVwdgxgLglg9mABAZwBYmMANgUwBQxgAOIUAXIgIZgCeA2gLoCUFAbnDACaIDeAUIkQB6IYgCypSlBxUATrMo1ECsJzgBbLEoipqAc0J7EMKMgDkiHLnU4wp46pwAPHMgB0fAL58+oSLARECEosLAA5ABUYG2QAHgAxJGdpVWREPDdMylk9ZApqemZEAF4APipacrw-CApEgBogkKwAYThwckQwEHUAIxxZJl4BYVEImiIZKF0oZRwiWVdbeygJmThgOYgcGFYcbhqApCJsyhtpWXcR1cnEePBoeDAABVPzgbTixFeFd8uEsClADcIxGiygIFkSEOT3SmTc2VydQeRx+ZxwF2QQ34gkEwDgsnSuFmMBKiAADEDjIhYk1Qm0OlSYABqZnYka4xA1DJZHJYkGc7yCbyeRA+CAIZCzNAYbA4CIAdxg2zJwVCkWirjwMswuEaACYmCCgA)

	```ts
	function shuffle(input: any[]): void {
		// Mutate array randomly changing its' elements indexes.
	}

	function callNTimes<Fn extends (...args: any[]) => any> (func: Fn, callCount: number) {
		// Type that represents the type of the received function parameters.
		type FunctionParameters = Parameters<Fn>;

		return function (...args: FunctionParameters) {
			for (let i = 0; i < callCount; i++) {
				func(...args);
			}
		}
	}

	const shuffleTwice = callNTimes(shuffle, 2);
	```
	</details>

- [`ConstructorParameters<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1456-L1459) - Obtain the parameters of a constructor function type in a tuple.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECCBOAXAlqApgWQPYBM0mgG8AoaaFRENALmgkXmQDsBzAblOmCycTV4D8teo1YdO3JiICuwRFngAKClWENmLAJRFOZRAAtkEAHQq00ALzlklNBzIBfYk+KhIMAJJTEYJsDQAwmDA+mgAPAAq0GgAHnxMODCKTGgA7tCKxllg8CwQtL4AngDaALraFgB80EWa1SRkAA6MAG5gfNAB4FABPDJyCrQR9tDNyG0dwMGhtBhgjWEiGgA00F70vv4RhY3hEZXVVinpc42KmuJkkv3y8Bly8EPaDWTkhiZd7r3e8LK3llwGCMXGQWGhEOsfH5zJlsrl8p0+gw-goAAo5MAAW3BaHgEEilU0tEhmzQ212BJ0ry4SOg+kg+gBBiMximIGA0nAfAQLGk2N4EAAEgzYcYcnkLsRdDTvNEYkYUKwSdCme9WdM0MYwYhFPSIPpJdTkAAzDKxBUaZX+aAAQgsVmkCTQxuYaBw2ng4Ok8CYcotSu8pMur09iG9vuObxZnx6SN+AyUWTF8MN0CcZE4Ywm5jZHK5aB5fP4iCFIqT4oRRTKRLo6lYVNeAHpG50wOzOe1zHr9NLQ+HoABybsD4HOKXXRA1JCoKhBELmI5pNaB6Fz0KKBAodDYPAgSUTmqYsAALx4m5nC6nW9nGq14KtaEUA9gR9PvuNCjQ9BgACNvcwNBtAcLiAA)

	```ts
	class ArticleModel {
		title: string;
		content?: string;

		constructor(title: string) {
			this.title = title;
		}
	}

	class InstanceCache<T extends (new (...args: any[]) => any)> {
		private ClassConstructor: T;
		private cache: Map<string, InstanceType<T>> = new Map();

		constructor (ctr: T) {
			this.ClassConstructor = ctr;
		}

		getInstance (...args: ConstructorParameters<T>): InstanceType<T> {
			const hash = this.calculateArgumentsHash(...args);

			const existingInstance = this.cache.get(hash);
			if (existingInstance !== undefined) {
				return existingInstance;
			}

			return new this.ClassConstructor(...args);
		}

		private calculateArgumentsHash(...args: any[]): string {
			// Calculate hash.
			return 'hash';
		}
	}

	const articleCache = new InstanceCache(ArticleModel);
	const amazonArticle = articleCache.getInstance('Amazon forests burining!');
	```
	</details>

- [`ReturnType<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1461-L1464) – Obtain the return type of a function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	/** Provides every element of the iterable `iter` into the `callback` function and stores the results in an array. */
	function mapIter<
			Elem,
			Func extends (elem: Elem) => any,
			Ret extends ReturnType<Func>
	>(iter: Iterable<Elem>, callback: Func): Ret[] {
			const mapped: Ret[] = [];

			for (const elem of iter) {
					mapped.push(callback(elem));
			}

			return mapped;
	}

	const setObject: Set<string> = new Set();
	const mapObject: Map<number, string> = new Map();

	mapIter(setObject, (value: string) => value.indexOf('Foo')); // number[]

	mapIter(mapObject, ([key, value]: [number, string]) => {
			return key % 2 === 0 ? value : 'Odd';
	}); // string[]
	```
	</details>

- [`InstanceType<T>`](https://github.com/Microsoft/TypeScript/blob/2961bc3fc0ea1117d4e53bc8e97fa76119bc33e3/src/lib/es5.d.ts#L1466-L1469) – Obtain the instance type of a constructor function type.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/MYGwhgzhAECSAmICmBlJAnAbgS2E6A3gFDTTwD2AcuQC4AW2AdgOYAUAlAFzSbnbyEAvkWFFQkGJSQB3GMVI1sNZNwg10TZgG4S0YOUY0kh1es07d+xmvQBXYDXLpWi5UlMaWAGj0GjJ6BtNdkJdBQYIADpXZGgAXmgYpB1ScOwoq38aeN9DYxoU6GFRKzVoJjUwRjwAYXJbPPRuAFkwAAcAHgAxBodsAx9GWwBbACMMAD4cxhloVraOCyYjdAAzMDxoOut1e0d0UNIZ6WhWSPOwdGYIbiqATwBtAF0uaHudUQB6ACpv6ABpJBINqJdAbADW0Do5BOw3u5R2VTwMHIq2gAANtjZ0bkbHsnFCwJh8ONjHp0EgwEZ4JFoN9PkRVr1FAZoMwkDRYIjqkgOrosepoEgAB7+eAwAV2BxOLy6ACCVxgIrFEoMeOl6AACpcwMMORgIB1JRMiBNWKVdhruJKfOdIpdrtwFddXlzKjyACp3Nq842HaDIbL6BrZBIVGhIpB1EMYSLsmjmtWW-YhAA+qegAAYLKQLQj3ZsEsdccmnGcLor2Dn8xGedHGpEIBzEzspfsfMHDNAANTQACMVaIljV5GQkRA5DYmIpVKQAgAJARO9le33BDXIyi0YuLW2nJFGLqkOvxFB0YPdBSaLZ0IwNzyPkO8-xkGgsLh8Al427a3hWAhXwwHA8EHT5PmgAB1bAQBAANJ24adKWpft72RaBUTgRBUCAj89HAM8xCTaBjggABRQx0DuHJv25P9dCkWRZVIAAiBjoFImpmjlFBgA0NpsjadByDacgIDAEAIAAQmYpjoGYgAZSBsmGPw6DtZiiFA8CoJguDmAQmoZ2QvtUKQLdoAYmBTwgdEiCAA)

	```ts
	class IdleService {
			doNothing (): void {}
	}

	class News {
			title: string;
			content: string;

			constructor(title: string, content: string) {
					this.title = title;
					this.content = content;
			}
	}

	const instanceCounter: Map<Function, number> = new Map();

	interface Constructor {
			new(...args: any[]): any;
	}

	// Keep track how many instances of `Constr` constructor have been created.
	function getInstance<
			Constr extends Constructor,
			Args extends ConstructorParameters<Constr>
	>(constructor: Constr, ...args: Args): InstanceType<Constr> {
			let count = instanceCounter.get(constructor) || 0;

			const instance = new constructor(...args);

			instanceCounter.set(constructor, count + 1);

			console.log(`Created ${count + 1} instances of ${Constr.name} class`);

			return instance;
	}


	const idleService = getInstance(IdleService);
	// Will log: `Created 1 instances of IdleService class`
	const newsEntry = getInstance(News, 'New ECMAScript proposals!', 'Last month...');
	// Will log: `Created 1 instances of News class`
	```
	</details>

- [`Omit<T, K>`](https://github.com/microsoft/TypeScript/blob/71af02f7459dc812e85ac31365bfe23daf14b4e4/src/lib/es5.d.ts#L1446) – Constructs a type by picking all properties from T and then removing K.
	<details>
	<summary>
			Example
	</summary>

	[Playground](https://typescript-play.js.org/?target=6#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwChlks4BzCAVShwC5kBnMKUcgbmKYAcIFgIjBs1YgOXMpSFMWbANoBdTiW5woFddwAW0kfKWEAvoUIB6U8gDCUCHEiNkICAHdkYAJ69kz4GC3JcPG4oAHteKDABBxCYNAxsPFBIWEQUCAAPJG4wZABySUFcgJAAEzMLXNV1ck0dIuCw6EjBADpy5AB1FAQ4EGQAV0YUP2AHDy8wEOQbUugmBLwtEIA3OcmQnEjuZBgQqE7gAGtgZAhwKHdkHFGwNvGUdDIcAGUliIBJEF3kAF5kAHlML4ADyPBIAGjyBUYRQAPnkqho4NoYQA+TiEGD9EAISIhPozErQMG4AASK2gn2+AApek9pCSXm8wFSQooAJQMUkAFQAsgAZACiOAgmDOOSIJAQ+OYyGl4DgoDmf2QJRCCH6YvALQQNjsEGFovF1NyJWAy1y7OUyHMyE+yRAuFImG4Iq1YDswHxbRINjA-SgfXlHqVUE4xiAA)

	```ts
	interface Animal {
			imageUrl: string;
			species: string;
			images: string[];
			paragraphs: string[];
	}

	// Creates new type with all properties of the `Animal` interface
	// except 'images' and 'paragraphs' properties. We can use this
	// type to render small hover tooltip for a wiki entry list.
	type AnimalShortInfo = Omit<Animal, 'images' | 'paragraphs'>;

	function renderAnimalHoverInfo (animals: AnimalShortInfo[]): HTMLElement {
			const container =  document.createElement('div');
			// Internal implementation.
			return container;
	}
	```
	</details>

- [`Uppercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types) - Transforms every character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uppercase<'hello'>;  // 'HELLO'

	type T2 = Uppercase<'foo' | 'bar'>;  // 'FOO' | 'BAR'

	type T3<S extends string> = Uppercase<`aB${S}`>;
	type T4 = T30<'xYz'>;  // 'ABXYZ'

	type T5 = Uppercase<string>;  // string
	type T6 = Uppercase<any>;  // any
	type T7 = Uppercase<never>;  // never
	type T8 = Uppercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Lowercase<S extends string>`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types) - Transforms every character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Lowercase<'HELLO'>;  // 'hello'

	type T2 = Lowercase<'FOO' | 'BAR'>;  // 'foo' | 'bar'

	type T3<S extends string> = Lowercase<`aB${S}`>;
	type T4 = T32<'xYz'>;  // 'abxyz'

	type T5 = Lowercase<string>;  // string
	type T6 = Lowercase<any>;  // any
	type T7 = Lowercase<never>;  // never
	type T8 = Lowercase<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Capitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types) - Transforms the first character in a string into uppercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Capitalize<'hello'>;  // 'Hello'

	type T2 = Capitalize<'foo' | 'bar'>;  // 'Foo' | 'Bar'

	type T3<S extends string> = Capitalize<`aB${S}`>;
	type T4 = T32<'xYz'>;  // 'ABxYz'

	type T5 = Capitalize<string>;  // string
	type T6 = Capitalize<any>;  // any
	type T7 = Capitalize<never>;  // never
	type T8 = Capitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

- [`Uncapitalize<S extends string>`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types) - Transforms the first character in a string into lowercase.
	<details>
	<summary>
		Example
	</summary>

	```ts
	type T = Uncapitalize<'Hello'>;  // 'hello'

	type T2 = Uncapitalize<'Foo' | 'Bar'>;  // 'foo' | 'bar'

	type T3<S extends string> = Uncapitalize<`AB${S}`>;
	type T4 = T30<'xYz'>;  // 'aBxYz'

	type T5 = Uncapitalize<string>;  // string
	type T6 = Uncapitalize<any>;  // any
	type T7 = Uncapitalize<never>;  // never
	type T8 = Uncapitalize<42>;  // Error, type 'number' does not satisfy the constraint 'string'
	```
	</details>

You can find some examples in the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types).

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Jarek Radosz](https://github.com/CvX)
- [Dimitri Benin](https://github.com/BendingBender)
- [Pelle Wessman](https://github.com/voxpelli)

## License

(MIT OR CC0-1.0)

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-type-fest?utm_source=npm-type-fest&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
