# onetime

> Ensure a function is only called once

When called multiple times it will return the return value from the first call.

*Unlike the module [once](https://github.com/isaacs/once), this one isn't naughty and extending `Function.prototype`.*

## Install

```
$ npm install onetime
```

## Usage

```js
import onetime from 'onetime';

let index = 0;

const foo = onetime(() => ++index);

foo(); //=> 1
foo(); //=> 1
foo(); //=> 1

onetime.callCount(foo); //=> 3
```

```js
import onetime from 'onetime';

const foo = onetime(() => {}, {throw: true});

foo();

foo();
//=> Error: Function `foo` can only be called once
```

## API

### onetime(fn, options?)

Returns a function that only calls `fn` once.

#### fn

Type: `Function`

Function that should only be called once.

#### options

Type: `object`

##### throw

Type: `boolean`\
Default: `false`

Throw an error when called more than once.

### onetime.callCount(fn)

Returns a number representing how many times `fn` has been called.

Note: It throws an error if you pass in a function that is not wrapped by `onetime`.

```js
import onetime from 'onetime';

const foo = onetime(() => {});

foo();
foo();
foo();

console.log(onetime.callCount(foo));
//=> 3
```

#### fn

Type: `Function`

Function to get call count from.

## onetime for enterprise

Available as part of the Tidelift Subscription.

The maintainers of onetime and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-onetime?utm_source=npm-onetime&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)
