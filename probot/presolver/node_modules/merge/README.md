# Merge

Merge multiple objects into one, optionally creating a new cloned object.
Similar to the jQuery.extend but more flexible. Works in Node.js and the
browser.

## Node.js Usage

```sh
npm install merge --save
```

```js
var merge = require('merge'), original, cloned;

console.log(merge({one:'hello'}, {two: 'world'}));
// -> {"one": "hello", "two": "world"}

original = { x: { y: 1 } };
cloned = merge(true, original);
cloned.x.y++;

console.log(original.x.y, cloned.x.y);
// -> 1, 2

console.log(merge.recursive(true, original, { x: { z: 2 } }));
// -> {"x": { "y": 1, "z": 2 } }

```

## Browser Usage

```html
<script src="https://cdn.jsdelivr.net/gh/yeikos/js.merge/merge.js"></script>
<script>
	var original, cloned;

	console.log(merge({one:'hello'}, {two: 'world'}));
	// -> {"one": "hello", "two": "world"}

	original = { x: { y: 1 } };
	cloned = merge(true, original);
	cloned.x.y++;

	console.log(original.x.y, cloned.x.y);
	// -> 1, 2

	console.log(merge.recursive(true, original, { x: { z: 2 } }));
	// -> {"x": { "y": 1, "z": 2 } }

</script>
```

## Tests

```sh
npm test
```
