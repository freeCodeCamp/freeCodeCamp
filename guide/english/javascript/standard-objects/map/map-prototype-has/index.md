---
title: Map.prototype.has
---
## Map.prototype.has

Given a `Map` with elements inside, the `has()` function allows you to determine whether or not an element exists inside the Map, based on a key that you pass.

The `has()` function returns a _`Boolean` primitive_ (either `true` or `false`), which indicates that the Map contains the element or not.

You pass a `key` parameter to the `has()` function, which will be used to look for an element with that key inside the Map.

Example:

```js
// A simple Map
const campers = new Map();

// add some elements to the map
// each element's key is 'camp' and a number
campers.set('camp1', 'Bernardo');
campers.set('camp2', 'Andrea');
campers.set('camp3', 'Miguel');

// Now I want to know if there's an element
// with 'camp4' key:
campers.has('camp4');
// output is `false`
```

The `campers` Map does not currently have an element with a `'camp4'` key. Therefore, the `has('camp4')` function call will return `false`.

```js
// If we add an element with the 'camp4' key to the map
campers.set('camp4', 'Ana');

// and try looking for that key again
campers.has('camp4');
// output is `true`
```

Since the map now does have an element with a `'camp4'` key, the `has('camp4')` function call will return `true` this time!

In a more real-world scenario, you might not manually add the elements to the Map yourself, so the `has()` function would become really useful in those cases.

#### More Information:
- [Map.prototype.has() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
