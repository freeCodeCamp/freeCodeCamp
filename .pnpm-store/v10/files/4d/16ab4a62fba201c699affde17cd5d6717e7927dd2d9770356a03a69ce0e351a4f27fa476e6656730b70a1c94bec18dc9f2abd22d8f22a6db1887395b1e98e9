# @arr/every

> A tiny, faster alternative to native `Array.prototype.every`

:warning: Unlike native, `@arr/every` does _not_ support the optional `thisArg` parameter!

## Install

```
$ npm install --save @arr/every
```

## Usage

```js
import every from '@arr/every';

const isBigEnough = val => val >= 10;

every([12, 5, 8, 130, 44], isBigEnough);
//=> false
every([12, 54, 18, 130, 44], isBigEnough);
//=> true
```

## API

### every(arr, callback)

#### arr
Type: `Array`<br>
The array to iterate upon.

#### callback(value[, index, array])
Type: `Function`<br>
Function to test for each element, taking three arguments:

* **value** (required) -- The current element being processed in the array.
* **index** (optional) -- The index of the current element being processed in the array.
* **array** (optional) -- The array `every` was called upon.


## License

MIT © [Luke Edwards](http://lukeed.com)
