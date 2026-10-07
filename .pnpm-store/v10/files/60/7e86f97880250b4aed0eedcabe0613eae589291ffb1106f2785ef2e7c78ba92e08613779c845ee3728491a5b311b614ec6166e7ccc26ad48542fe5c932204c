[![NPM](https://nodei.co/npm/damerau-levenshtein.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/damerau-levenshtein/)

It provides a function that takes two string arguments and returns a hash like this:

``` javascript
{
  steps: 5,       // Levenstein demerau distance
  relative: 0.7,  // steps / length of the longer string
  similarity: 0.3 // 1 - relative
}
```

## Install

```sh
npm install damerau-levenshtein
```

## Use with ES6 modules

```js
import * as levenshtein from 'damerau-levenshtein';

const lev = levenshtein('hello world', 'Hello World!');
// { steps: 4, relative: 0.3076923076923077, similarity: 0.6923076923076923 }
```

Please see [tests](./test/test.js) for more insights.

## Use with TypeScript

```ts
import * as levenshtein from 'damerau-levenshtein';

interface LevenshteinResponse {
  steps: number;
  relative: number;
  similarity: number;
}

const lev: LevenshteinResponse = levenshtein('hello world', 'Hello World!');

console.log(lev.steps);
// 2
console.log(lev.foo);
// TypeScript Error: Property 'foo' does not exist on type 'LevenshteinResponse'.
```
