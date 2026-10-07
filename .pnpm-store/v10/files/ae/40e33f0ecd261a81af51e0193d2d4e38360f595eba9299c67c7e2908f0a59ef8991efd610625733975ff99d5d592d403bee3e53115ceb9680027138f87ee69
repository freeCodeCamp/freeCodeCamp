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

type AccountNumber = Opaque<number>;
type AccountBalance = Opaque<number>;

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

// This will compile successfully.
accountNumber + 2;
```
*/
export type Opaque<Type> = Type & {readonly __opaque__: unique symbol};
