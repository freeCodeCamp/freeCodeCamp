<picture>
	<source media="(prefers-color-scheme: dark)" srcset="media/logo_dark.svg">
	<img alt="mimic-function logo" src="media/logo.svg" width="400">
</picture>
<br>

> Make a function mimic another one

Useful when you wrap a function in another function and you would like to preserve the original name and other properties.

## Install

```sh
npm install mimic-function
```

## Usage

```js
import mimicFunction from 'mimic-function';

function foo() {}
foo.unicorn = '🦄';

function wrapper() {
	return foo();
}

console.log(wrapper.name);
//=> 'wrapper'

mimicFunction(wrapper, foo);

console.log(wrapper.name);
//=> 'foo'

console.log(wrapper.unicorn);
//=> '🦄'

console.log(String(wrapper));
//=> '/* Wrapped with wrapper() */\nfunction foo() {}'
```

## API

### mimicFunction(to, from, options?)

Modifies the `to` function to mimic the `from` function. Returns the `to` function.

`name`, `displayName`, and any other properties of `from` are copied. The `length` property is not copied. Prototype, class, and inherited properties are copied.

`to.toString()` will return the same as `from.toString()` but prepended with a `Wrapped with to()` comment.

#### to

Type: `Function`

Mimicking function.

#### from

Type: `Function`

Function to mimic.

#### options

Type: `object`

##### ignoreNonConfigurable

Type: `boolean`\
Default: `false`

Skip modifying [non-configurable properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#Description) instead of throwing an error.

## Related

- [rename-fn](https://github.com/sindresorhus/rename-fn) - Rename a function
- [keep-func-props](https://github.com/ehmicky/keep-func-props) - Wrap a function without changing its name and other properties
