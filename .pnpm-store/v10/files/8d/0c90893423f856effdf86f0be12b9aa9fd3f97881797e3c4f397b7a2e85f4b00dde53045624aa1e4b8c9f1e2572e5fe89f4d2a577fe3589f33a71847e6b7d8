/**
Create an opaque type, which hides its internal details from the public, and can only be created by being used explicitly.

The generic type parameter can be anything. It doesn't have to be an object.

[Read more about opaque types.](https://codemix.com/opaque-types-in-javascript/)

There have been several discussions about adding this feature to TypeScript via the `opaque type` operator, similar to how Flow does it. Unfortunately, nothing has (yet) moved forward:
	- [Microsoft/TypeScript#15408](https://github.com/Microsoft/TypeScript/issues/15408)
	- [Microsoft/TypeScript#15807](https://github.com/Microsoft/TypeScript/issues/15807)

@example
```
import {Opaque} from 'type-fest';

type AccountNumber = Opaque<number, 'AccountNumber'>;
type AccountBalance = Opaque<number, 'AccountBalance'>;

// The Token parameter allows the compiler to differentiate between types, whereas "unknown" will not. For example, consider the following structures:
type ThingOne = Opaque<string>;
type ThingTwo = Opaque<string>;

// To the compiler, these types are allowed to be cast to each other as they have the same underlying type. They are both `string & { __opaque__: unknown }`.
// To avoid this behaviour, you would instead pass the "Token" parameter, like so.
type NewThingOne = Opaque<string, 'ThingOne'>;
type NewThingTwo = Opaque<string, 'ThingTwo'>;

// Now they're completely separate types, so the following will fail to compile.
function createNewThingOne (): NewThingOne {
	// As you can see, casting from a string is still allowed. However, you may not cast NewThingOne to NewThingTwo, and vice versa.
	return 'new thing one' as NewThingOne;
}

// This will fail to compile, as they are fundamentally different types.
const thingTwo = createNewThingOne() as NewThingTwo;

// Here's another example of opaque typing.
function createAccountNumber(): AccountNumber {
	return 2 as AccountNumber;
}

function getMoneyForAccount(accountNumber: AccountNumber): AccountBalance {
	return 4 as AccountBalance;
}

// This will compile successfully.
getMoneyForAccount(createAccountNumber());

// But this won't, because it has to be explicitly passed as an `AccountNumber` type.
getMoneyForAccount(2);

// You can use opaque values like they aren't opaque too.
const accountNumber = createAccountNumber();

// This will not compile successfully.
const newAccountNumber = accountNumber + 2;

// As a side note, you can (and should) use recursive types for your opaque types to make them stronger and hopefully easier to type.
type Person = {
	id: Opaque<number, Person>;
	name: string;
};
```
*/
export type Opaque<Type, Token = unknown> = Type & {readonly __opaque__: Token};
