/**
Create a type that represents either the value or an array of the value.

@see {@link Promisable}

@example
```
import type {Arrayable} from 'type-fest';

function bundle(input: string, output: Arrayable<string>) {
	const outputList = Array.isArray(output) ? output : [output];

	// …

	for (const output of outputList) {
		console.log(`write ${input} to: ${output}`);
	}
}

bundle('src/index.js', 'dist/index.js');
bundle('src/index.js', ['dist/index.cjs', 'dist/index.mjs']);
```

@category Array
*/
export type Arrayable<T> =
	T
// TODO: Use `readonly T[]` when this issue is resolved: https://github.com/microsoft/TypeScript/issues/17002
	| T[];

export {};
