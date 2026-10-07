# quick-lru [![Build Status](https://travis-ci.org/sindresorhus/quick-lru.svg?branch=master)](https://travis-ci.org/sindresorhus/quick-lru) [![Coverage Status](https://coveralls.io/repos/github/sindresorhus/quick-lru/badge.svg?branch=master)](https://coveralls.io/github/sindresorhus/quick-lru?branch=master)

> Simple [“Least Recently Used” (LRU) cache](https://en.m.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_.28LRU.29)

Useful when you need to cache something and limit memory usage.

Inspired by the [`hashlru` algorithm](https://github.com/dominictarr/hashlru#algorithm), but instead uses [`Map`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map) to support keys of any type, not just strings, and values can be `undefined`.

## Install

```
$ npm install quick-lru
```

## Usage

```js
const QuickLRU = require('quick-lru');

const lru = new QuickLRU({maxSize: 1000});

lru.set('🦄', '🌈');

lru.has('🦄');
//=> true

lru.get('🦄');
//=> '🌈'
```

## API

### new QuickLRU(options?)

Returns a new instance.

### options

Type: `object`

#### maxSize

*Required*\
Type: `number`

The maximum number of items before evicting the least recently used items.

#### onEviction

*Optional*\
Type: `(key, value) => void`

Called right before an item is evicted from the cache.

Useful for side effects or for items like object URLs that need explicit cleanup (`revokeObjectURL`).

### Instance

The instance is [`iterable`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) so you can use it directly in a [`for…of`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) loop.

Both `key` and `value` can be of any type.

#### .set(key, value)

Set an item. Returns the instance.

#### .get(key)

Get an item.

#### .has(key)

Check if an item exists.

#### .peek(key)

Get an item without marking it as recently used.

#### .delete(key)

Delete an item.

Returns `true` if the item is removed or `false` if the item doesn't exist.

#### .clear()

Delete all items.

#### .keys()

Iterable for all the keys.

#### .values()

Iterable for all the values.

#### .size

The stored item count.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-quick-lru?utm_source=npm-quick-lru&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
