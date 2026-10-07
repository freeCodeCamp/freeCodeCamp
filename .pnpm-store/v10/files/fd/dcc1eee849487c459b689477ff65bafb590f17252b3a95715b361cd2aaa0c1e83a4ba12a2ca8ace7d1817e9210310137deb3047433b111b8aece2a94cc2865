# @keyv/bigmap [<img width="100" align="right" src="https://jaredwray.com/images/keyv-symbol.svg" alt="keyv">](https://github.com/jaredwra/keyv)

> Bigmap for Keyv

[![build](https://github.com/jaredwray/keyv/actions/workflows/tests.yaml/badge.svg)](https://github.com/jaredwray/keyv/actions/workflows/tests.yaml)
[![codecov](https://codecov.io/gh/jaredwray/keyv/branch/main/graph/badge.svg?token=bRzR3RyOXZ)](https://codecov.io/gh/jaredwray/keyv)
[![npm](https://img.shields.io/npm/v/@keyv/bigmap.svg)](https://www.npmjs.com/package/@keyv/bigmap)
[![npm](https://img.shields.io/npm/dm/@keyv/bigmap)](https://npmjs.com/package/@keyv/bigmap)

# Features
* Based on the Map interface and uses the same API.
* Lightweight with no dependencies.
* Scales to past the 17 million key limit of a regular Map.
* Uses a hash `djb2Hash` for fast key lookups.
* Ability to use your own hash function.
* Built in Typescript and Generics for type safety.
* Used in `@cacheable/memory` for scalable in-memory caching.
* Maintained regularly with a focus on performance and reliability.

# Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Overview](#overview)
- [Basic Usage](#basic-usage)
- [Custom Store Size](#custom-store-size)
- [Custom Hash Function](#custom-hash-function)
- [Iteration](#iteration)
	- [For...of Loop](#forof-loop)
	- [forEach](#foreach)
	- [Keys, Values, and Entries](#keys-values-and-entries)
- [Advanced Features](#advanced-features)
	- [Type Safety with Generics](#type-safety-with-generics)
	- [Large-Scale Data](#large-scale-data)
- [Using with Keyv](#using-with-keyv)
	- [createKeyv](#createkeyv)
	- [With Custom Options](#with-custom-options)
	- [Type Safety](#type-safety)
- [Integration with Keyv Ecosystem](#integration-with-keyv-ecosystem)
- [API](#api)
	- [Constructor](#constructor)
	- [Properties](#properties)
	- [Methods](#methods)
		- [set](#set)
		- [get](#get)
		- [has](#has)
		- [delete](#delete)
		- [clear](#clear)
		- [forEach](#foreach)
		- [keys](#keys)
		- [values](#values)
		- [entries](#entries)
		- [Symbol.iterator](#symboliterator)
		- [getStore](#getstorekey)
		- [getStoreMap](#getstoremapindex)
		- [initStore](#initstore)
- [Types](#types)
- [StoreHashFunction](#storehashfunction)
- [defaultHashFunction(key, storeSize)](#defaulthashfunctionkey-storesize)
- [Contributing](#contributing)
- [License](#license)

# Installation

```bash
npm install --save keyv @keyv/bigmap
```

# Overview

BigMap is a scalable Map implementation that overcomes JavaScript's built-in Map limit of approximately 17 million entries. It uses a distributed hash approach with multiple internal Map instances.

# Basic Usage

```typescript
import { BigMap } from '@keyv/bigmap';

// Create a new BigMap
const bigMap = new BigMap<string, number>();

// Set values
bigMap.set('key1', 100);
bigMap.set('key2', 200);

// Get values
const value = bigMap.get('key1'); // 100

// Check if key exists
bigMap.has('key1'); // true

// Delete a key
bigMap.delete('key1'); // true

// Get size
console.log(bigMap.size); // 1

// Clear all entries
bigMap.clear();
```

# Custom Store Size

By default, BigMap uses 4 internal Map instances. You can configure this:

```typescript
const bigMap = new BigMap<string, number>({ storeSize: 10 });
```

**Note:** Changing the `storeSize` after initialization will clear all entries.

# Custom Hash Function

Provide your own hash function for key distribution:

```typescript
const customHashFunction = (key: string, storeSize: number) => {
  return key.length % storeSize;
};

const bigMap = new BigMap<string, string>({
  storeHashFunction: customHashFunction
});
```

## Using Hashery for Hash Functions

[Hashery](https://github.com/jaredwray/hashery) is a powerful hashing library that provides multiple hash algorithms. You can use it for better key distribution and it is available as an export:

```typescript
import { BigMap, Hashery } from '@keyv/bigmap';

const hashery = new Hashery();

// Using Hashery's toNumberSync for deterministic key distribution
const bigMap = new BigMap<string, string>({
  storeHashFunction: (key: string, storeSize: number) => {
    return hashery.toNumberSync(key, { min: 0, max: storeSize - 1 });
  }
});

// You can also use different algorithms
const hasheryFnv1 = new Hashery({ defaultAlgorithmSync: 'fnv1' });

const bigMapWithFnv1 = new BigMap<string, string>({
  storeHashFunction: (key: string, storeSize: number) => {
    return hasheryFnv1.toNumberSync(key, { min: 0, max: storeSize - 1 });
  }
});
```

Hashery supports multiple synchronous hash algorithms:
- **djb2** - Fast hash function (default)
- **fnv1** - Excellent distribution for hash tables
- **murmer** - MurmurHash algorithm
- **crc32** - Cyclic Redundancy Check

# Iteration

BigMap supports all standard Map iteration methods:

## For...of Loop

```typescript
const bigMap = new BigMap<string, number>();
bigMap.set('a', 1);
bigMap.set('b', 2);

for (const [key, value] of bigMap) {
  console.log(key, value);
}
```

## forEach

```typescript
bigMap.forEach((value, key) => {
  console.log(key, value);
});

// With custom context
const context = { sum: 0 };
bigMap.forEach(function(value) {
  this.sum += value;
}, context);
```

## Keys, Values, and Entries

```typescript
// Iterate over keys
for (const key of bigMap.keys()) {
  console.log(key);
}

// Iterate over values
for (const value of bigMap.values()) {
  console.log(value);
}

// Iterate over entries
for (const [key, value] of bigMap.entries()) {
  console.log(key, value);
}
```

# Advanced Features

## Type Safety with Generics

```typescript
interface User {
  id: number;
  name: string;
}

const userMap = new BigMap<string, User>();
userMap.set('user1', { id: 1, name: 'Alice' });
```

## Large-Scale Data

BigMap is designed to handle millions of entries:

```typescript
const bigMap = new BigMap<string, number>({ storeSize: 16 });

// Add 20+ million entries without hitting Map limits
for (let i = 0; i < 20000000; i++) {
  bigMap.set(`key${i}`, i);
}

console.log(bigMap.size); // 20000000
```

# Using with Keyv

BigMap can be used as a storage adapter for [Keyv](https://github.com/jaredwray/keyv), providing a scalable in-memory store with TTL support.

## createKeyv

The `createKeyv` function creates a Keyv instance with BigMap as the storage adapter.

**Parameters:**
- `options` (optional): BigMap configuration options
  - `storeSize` (number): Number of internal Map instances. Default: `4`
  - `storeHashFunction` (StoreHashFunction): Custom hash function for key distribution

**Returns:** `Keyv` instance with BigMap adapter

**Example:**

```typescript
import { createKeyv } from '@keyv/bigmap';

// Basic usage
const keyv = createKeyv();

// Set with TTL (in milliseconds)
await keyv.set('user:123', { name: 'Alice', age: 30 }, 60000); // Expires in 60 seconds

// Get value
const user = await keyv.get('user:123');
console.log(user); // { name: 'Alice', age: 30 }

// Check if key exists
const exists = await keyv.has('user:123');

// Delete key
await keyv.delete('user:123');

// Clear all keys
await keyv.clear();
```

## With Custom Options

```typescript
import { createKeyv } from '@keyv/bigmap';

// Create with custom store size for better performance with millions of keys
const keyv = createKeyv({ storeSize: 16 });

// With custom hash function
const keyv = createKeyv({
  storeSize: 8,
  storeHashFunction: (key, storeSize) => {
    // Custom distribution logic
    return key.length % storeSize;
  }
});
```

## Type Safety

```typescript
import { createKeyv } from '@keyv/bigmap';

interface Product {
  id: string;
  name: string;
  price: number;
}

const keyv = createKeyv<string, Product>();

await keyv.set('product:1', {
  id: '1',
  name: 'Laptop',
  price: 999
});

const product = await keyv.get<Product>('product:1');
```

# Integration with Keyv Ecosystem

BigMap works seamlessly with the Keyv ecosystem:

```typescript
import { createKeyv } from '@keyv/bigmap';

const cache = createKeyv({ storeSize: 16 });

// Use with namespaces
const users = cache.namespace('users');
const products = cache.namespace('products');

await users.set('123', { name: 'Alice' });
await products.set('456', { name: 'Laptop' });

// Iterate over keys
for await (const [key, value] of cache.iterator()) {
  console.log(key, value);
}
```

# API

## Constructor

`new BigMap<K, V>(options?)`

Creates a new BigMap instance.

**Parameters:**
- `options` (optional): Configuration options
  - `storeSize` (number): Number of internal Map instances to use. Default: `4`. Must be at least 1.
  - `storeHashFunction` (StoreHashFunction): Custom hash function for key distribution. Default: `defaultHashFunction`

**Example:**
```typescript
const bigMap = new BigMap<string, number>();
const customBigMap = new BigMap<string, number>({
  storeSize: 10,
  storeHashFunction: (key, storeSize) => key.length % storeSize
});
```

## Properties

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| `size` | `number` | Read-only | Gets the total number of entries in the BigMap. |
| `storeSize` | `number` | Read/Write | Gets or sets the number of internal Map instances. **Note:** Setting this will clear all entries. Default: `4` |
| `storeHashFunction` | `StoreHashFunction \| undefined` | Read/Write | Gets or sets the hash function used for key distribution. |
| `store` | `Array<Map<K, V>>` | Read-only | Gets the internal array of Map instances. |

**Examples:**
```typescript
const bigMap = new BigMap<string, number>();

// size property
bigMap.set('key1', 100);
console.log(bigMap.size); // 1

// storeSize property
console.log(bigMap.storeSize); // 4 (default)
bigMap.storeSize = 8; // Changes size and clears all entries

// storeHashFunction property
bigMap.storeHashFunction = (key, storeSize) => key.length % storeSize;

// store property
console.log(bigMap.store.length); // 8
```

## Methods

### set

Sets the value for a key in the map.

**Parameters:**
- `key` (K): The key to set
- `value` (V): The value to associate with the key

**Returns:** `Map<K, V>` - The internal Map instance where the key was stored

**Example:**
```typescript
bigMap.set('user123', { name: 'Alice' });
```

### get

Gets the value associated with a key.

**Parameters:**
- `key` (K): The key to retrieve

**Returns:** `V | undefined` - The value, or undefined if not found

**Example:**
```typescript
const value = bigMap.get('user123');
```

### has

Checks if a key exists in the map.

**Parameters:**
- `key` (K): The key to check

**Returns:** `boolean` - True if the key exists, false otherwise

**Example:**
```typescript
if (bigMap.has('user123')) {
  console.log('User exists');
}
```

### delete

Deletes a key-value pair from the map.

**Parameters:**
- `key` (K): The key to delete

**Returns:** `boolean` - True if the entry was deleted, false if the key was not found

**Example:**
```typescript
const deleted = bigMap.delete('user123');
```

### clear

Removes all entries from the map.

**Returns:** `void`

**Example:**
```typescript
bigMap.clear();
console.log(bigMap.size); // 0
```

### forEach

Executes a provided function once for each key-value pair.

**Parameters:**
- `callbackfn` (function): Function to execute for each entry
  - `value` (V): The value of the current entry
  - `key` (K): The key of the current entry
  - `map` (`Map<K, V>`): The BigMap instance
- `thisArg` (optional): Value to use as `this` when executing the callback

**Returns:** `void`

**Example:**
```typescript
bigMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// With custom context
const context = { total: 0 };
bigMap.forEach(function(value) {
  this.total += value;
}, context);
```

### keys

Returns an iterator of all keys in the map.

**Returns:** `IterableIterator<K>`

**Example:**
```typescript
for (const key of bigMap.keys()) {
  console.log(key);
}
```

### values

Returns an iterator of all values in the map.

**Returns:** `IterableIterator<V>`

**Example:**
```typescript
for (const value of bigMap.values()) {
  console.log(value);
}
```

### entries

Returns an iterator of all key-value pairs in the map.

**Returns:** `IterableIterator<[K, V]>`

**Example:**
```typescript
for (const [key, value] of bigMap.entries()) {
  console.log(key, value);
}
```

### Symbol.iterator

Returns an iterator for the map (same as `entries()`). Enables `for...of` loops.

**Returns:** `IterableIterator<[K, V]>`

**Example:**
```typescript
for (const [key, value] of bigMap) {
  console.log(key, value);
}
```

### getStore

Gets the internal Map instance for a specific key.

**Parameters:**
- `key` (K): The key to find the store for

**Returns:** `Map<K, V>` - The internal Map instance

**Example:**
```typescript
const store = bigMap.getStore('user123');
```

### getStoreMap

Gets the internal Map instance at a specific index.

**Parameters:**
- `index` (number): The index of the Map to retrieve (0 to storeSize - 1)

**Returns:** `Map<K, V>` - The Map at the specified index

**Throws:** Error if index is out of bounds

**Example:**
```typescript
const firstMap = bigMap.getStoreMap(0);
```

### initStore

Initializes the internal store with empty Map instances. Called automatically during construction.

**Returns:** `void`

## Types

### StoreHashFunction

Type definition for custom hash functions.

```typescript
type StoreHashFunction = (key: string, storeSize: number) => number;
```

**Parameters:**
- `key` (string): The key to hash (converted to string)
- `storeSize` (number): The number of stores (adjusted for zero-based index)

**Returns:** `number` - The index of the store to use (0 to storeSize - 1)

### defaultHashFunction

The default hash function using DJB2 algorithm from [Hashery](https://npmjs.com/package/hashery):

**Example:**
```typescript
import { defaultHashFunction } from '@keyv/bigmap';

const index = defaultHashFunction('myKey', 4);
```

### djb2Hash

DJB2 hash algorithm implementation.

**Parameters:**
- `string` (string): The string to hash
- `min` (number): Minimum value. Default: `0`
- `max` (number): Maximum value. Default: `10`

**Returns:** `number` - Hash value within the specified range

**Example:**
```typescript
import { djb2Hash } from '@keyv/bigmap';

const hash = djb2Hash('myKey', 0, 10);
```

# Contributing

Please see our [contributing](https://github.com/jaredwray/keyv/blob/main/CONTRIBUTING.md) guide.

# License

[MIT © Jared Wray](LICENSE)
