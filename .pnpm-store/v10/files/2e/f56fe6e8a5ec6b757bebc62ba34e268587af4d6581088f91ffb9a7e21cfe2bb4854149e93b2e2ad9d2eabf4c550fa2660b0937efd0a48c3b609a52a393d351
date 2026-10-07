# deepmerge

Merges the enumerable properties of two or more objects deeply.

> UMD bundle is 723B minified+gzipped

## Getting Started

### Example Usage
<!--js
const merge = require('./')
-->

```js
const x = {
	foo: { bar: 3 },
	array: [{
		does: 'work',
		too: [ 1, 2, 3 ]
	}]
}

const y = {
	foo: { baz: 4 },
	quux: 5,
	array: [{
		does: 'work',
		too: [ 4, 5, 6 ]
	}, {
		really: 'yes'
	}]
}

const output = {
	foo: {
		bar: 3,
		baz: 4
	},
	array: [{
		does: 'work',
		too: [ 1, 2, 3 ]
	}, {
		does: 'work',
		too: [ 4, 5, 6 ]
	}, {
		really: 'yes'
	}],
	quux: 5
}

merge(x, y) // => output
```


### Installation

With [npm](http://npmjs.org) do:

```sh
npm install deepmerge
```

deepmerge can be used directly in the browser without the use of package managers/bundlers as well:  [UMD version from unpkg.com](https://unpkg.com/deepmerge/dist/umd.js).


### Include

deepmerge exposes a CommonJS entry point:

```
const merge = require('deepmerge')
```

The ESM entry point was dropped due to a [Webpack bug](https://github.com/webpack/webpack/issues/6584).

# API


## `merge(x, y, [options])`

Merge two objects `x` and `y` deeply, returning a new merged object with the
elements from both `x` and `y`.

If an element at the same key is present for both `x` and `y`, the value from
`y` will appear in the result.

Merging creates a new object, so that neither `x` or `y` is modified.

**Note:** By default, arrays are merged by concatenating them.

## `merge.all(arrayOfObjects, [options])`

Merges any number of objects into a single result object.

```js
const foobar = { foo: { bar: 3 } }
const foobaz = { foo: { baz: 4 } }
const bar = { bar: 'yay!' }

merge.all([ foobar, foobaz, bar ]) // => { foo: { bar: 3, baz: 4 }, bar: 'yay!' }
```


## Options

### `arrayMerge`

There are multiple ways to merge two arrays, below are a few examples but you can also create your own custom function.

Your `arrayMerge` function will be called with three arguments: a `target` array, the `source` array, and an `options` object with these properties:

- `isMergeableObject(value)`
- `cloneUnlessOtherwiseSpecified(value, options)`

#### `arrayMerge` example: overwrite target array

Overwrites the existing array values completely rather than concatenating them:

```js
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

merge(
	[1, 2, 3],
	[3, 2, 1],
	{ arrayMerge: overwriteMerge }
) // => [3, 2, 1]
```

#### `arrayMerge` example: combine arrays

Combines objects at the same index in the two arrays.

This was the default array merging algorithm pre-version-2.0.0.

```js
const combineMerge = (target, source, options) => {
	const destination = target.slice()

	source.forEach((item, index) => {
		if (typeof destination[index] === 'undefined') {
			destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
		} else if (options.isMergeableObject(item)) {
			destination[index] = merge(target[index], item, options)
		} else if (target.indexOf(item) === -1) {
			destination.push(item)
		}
	})
	return destination
}

merge(
	[{ a: true }],
	[{ b: true }, 'ah yup'],
	{ arrayMerge: combineMerge }
) // => [{ a: true, b: true }, 'ah yup']
```

### `isMergeableObject`

By default, deepmerge clones every property from almost every kind of object.

You may not want this, if your objects are of special types, and you want to copy the whole object instead of just copying its properties.

You can accomplish this by passing in a function for the `isMergeableObject` option.

If you only want to clone properties of plain objects, and ignore all "special" kinds of instantiated objects, you probably want to drop in [`is-plain-object`](https://github.com/jonschlinkert/is-plain-object).

```js
const { isPlainObject } = require('is-plain-object')

function SuperSpecial() {
	this.special = 'oh yeah man totally'
}

const instantiatedSpecialObject = new SuperSpecial()

const target = {
	someProperty: {
		cool: 'oh for sure'
	}
}

const source = {
	someProperty: instantiatedSpecialObject
}

const defaultOutput = merge(target, source)

defaultOutput.someProperty.cool // => 'oh for sure'
defaultOutput.someProperty.special // => 'oh yeah man totally'
defaultOutput.someProperty instanceof SuperSpecial // => false

const customMergeOutput = merge(target, source, {
	isMergeableObject: isPlainObject
})

customMergeOutput.someProperty.cool // => undefined
customMergeOutput.someProperty.special // => 'oh yeah man totally'
customMergeOutput.someProperty instanceof SuperSpecial // => true
```

### `customMerge`

Specifies a function which can be used to override the default merge behavior for a property, based on the property name.

The `customMerge` function will be passed the key for each property, and should return the function which should be used to merge the values for that property.

It may also return undefined, in which case the default merge behaviour will be used.

```js
const alex = {
	name: {
		first: 'Alex',
		last: 'Alexson'
	},
	pets: ['Cat', 'Parrot']
}

const tony = {
	name: {
		first: 'Tony',
		last: 'Tonison'
	},
	pets: ['Dog']
}

const mergeNames = (nameA, nameB) => `${nameA.first} and ${nameB.first}`

const options = {
	customMerge: (key) => {
		if (key === 'name') {
			return mergeNames
		}
	}
}

const result = merge(alex, tony, options)

result.name // => 'Alex and Tony'
result.pets // => ['Cat', 'Parrot', 'Dog']
```


### `clone`

*Deprecated.*

Defaults to `true`.

If `clone` is `false` then child objects will be copied directly instead of being cloned.  This was the default behavior before version 2.x.


# Testing

With [npm](http://npmjs.org) do:

```sh
npm test
```


# License

MIT
