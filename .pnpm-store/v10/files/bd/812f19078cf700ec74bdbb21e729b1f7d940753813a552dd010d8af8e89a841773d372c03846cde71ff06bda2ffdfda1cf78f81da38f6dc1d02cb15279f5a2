import {RequiredKeysOf} from './required-keys-of';

/**
Creates a type that represents `true` or `false` depending on whether the given type has any required fields.

This is useful when you want to create an API whose behavior depends on the presence or absence of required fields.

@example
```
import type {HasRequiredKeys} from 'type-fest';

type GeneratorOptions<Template extends object> = {
	prop1: number;
	prop2: string;
} & (HasRequiredKeys<Template> extends true
	? {template: Template}
	: {template?: Template});

interface Template1 {
	optionalSubParam?: string;
}

interface Template2 {
	requiredSubParam: string;
}

type Options1 = GeneratorOptions<Template1>;
type Options2 = GeneratorOptions<Template2>;

const optA: Options1 = {
	prop1: 0,
	prop2: 'hi'
};
const optB: Options1 = {
	prop1: 0,
	prop2: 'hi',
	template: {}
};
const optC: Options1 = {
	prop1: 0,
	prop2: 'hi',
	template: {
		optionalSubParam: 'optional value'
	}
};

const optD: Options2 = {
	prop1: 0,
	prop2: 'hi',
	template: {
		requiredSubParam: 'required value'
	}
};

```

@category Utilities
*/
export type HasRequiredKeys<BaseType extends object> = RequiredKeysOf<BaseType> extends never ? false : true;
