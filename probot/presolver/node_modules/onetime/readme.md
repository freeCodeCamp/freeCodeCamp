# onetime [![Build Status](https://travis-ci.org/sindresorhus/onetime.svg?branch=master)](https://travis-ci.org/sindresorhus/onetime)

> Only call a function once

When called multiple times it will return the return value from the first call.

*Unlike the module [once](https://github.com/isaacs/once), this one isn't naughty extending `Function.prototype`.*


## Install

```
$ npm install --save onetime
```


## Usage

```js
let i = 0;

const foo = onetime(() => i++);

foo(); //=> 0
foo(); //=> 0
foo(); //=> 0
```


## API

### onetime(function, [shouldThrow])

#### function

Type: `function`

Function that should only be called once.

#### shouldThrow

Type: `boolean`  
Default: `false`

![](screenshot-shouldthrow.png)

Set to `true` if you want it to fail with a nice and descriptive error when called more than once.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
