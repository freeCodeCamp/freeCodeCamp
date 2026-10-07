<img src="media/logo.svg" alt="mimic-fn" width="400">
<br>

> Make a function mimic another one

Useful when you wrap a function in another function and like to preserve the original name and other properties.

## Install

```
$ npm install mimic-fn
```

## Usage

```js
import mimicFunction from 'mimic-fn';

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

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-mimic-fn?utm_source=npm-mimic-fn&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
