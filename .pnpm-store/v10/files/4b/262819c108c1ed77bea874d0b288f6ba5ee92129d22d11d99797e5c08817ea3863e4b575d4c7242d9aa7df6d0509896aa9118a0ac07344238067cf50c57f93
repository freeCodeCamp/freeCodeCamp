# String Natural Compare

[![NPM Version](https://img.shields.io/npm/v/string-natural-compare.svg)](https://www.npmjs.com/package/string-natural-compare)
[![Build Status](https://travis-ci.org/nwoltman/string-natural-compare.svg?branch=master)](https://travis-ci.org/nwoltman/string-natural-compare)
[![Coverage Status](https://coveralls.io/repos/nwoltman/string-natural-compare/badge.svg?branch=master)](https://coveralls.io/r/nwoltman/string-natural-compare?branch=master)
[![Dependencies Status](https://img.shields.io/david/nwoltman/string-natural-compare)](https://david-dm.org/nwoltman/string-natural-compare)

Compare alphanumeric strings the same way a human would, using a natural order algorithm (originally known as the [alphanum algorithm](http://davekoelle.com/alphanum.html)) where numeric characters are sorted based on their numeric values rather than their ASCII values.

```
Standard sorting:   Natural order sorting:
    img1.png            img1.png
    img10.png           img2.png
    img12.png           img10.png
    img2.png            img12.png
```

This module exports a function that returns a number indicating whether one string should come before, after, or is the same as another string.
It can be used directly with the native [`.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) array method.

### Fast and Robust

This module can compare strings containing any size of number and is heavily tested with a custom [benchmark suite](https://github.com/nwoltman/string-natural-compare/tree/master/benchmark) to make sure that it is as fast as possible.


## Installation

```sh
npm install string-natural-compare --save
# or
yarn add string-natural-compare
```


## Usage

#### `naturalCompare(strA, strB[, options])`

+ `strA` (_string_)
+ `strB` (_string_)
+ `options` (_object_) - Optional options object with the following options:
  + `caseInsensitive` (_boolean_) - Set to `true` to compare strings case-insensitively. Default: `false`.
  + `alphabet` (_string_) - A string of characters that define a custom character ordering. Default: `undefined`.

```js
const naturalCompare = require('string-natural-compare');

// Simple, case-sensitive sorting
const files = ['z1.doc', 'z10.doc', 'z17.doc', 'z2.doc', 'z23.doc', 'z3.doc'];
files.sort(naturalCompare);
// -> ['z1.doc', 'z2.doc', 'z3.doc', 'z10.doc', 'z17.doc', 'z23.doc']


// Case-insensitive sorting
const chars = ['B', 'C', 'a', 'd'];
const naturalCompareCI = (a, b) => naturalCompare(a, b, {caseInsensitive: true});
chars.sort(naturalCompareCI);
// -> ['a', 'B', 'C', 'd']

// Note:
['a', 'A'].sort(naturalCompareCI); // -> ['a', 'A']
['A', 'a'].sort(naturalCompareCI); // -> ['A', 'a']


// Compare strings containing large numbers
naturalCompare(
  '1165874568735487968325787328996865',
  '265812277985321589735871687040841'
);
// -> 1
// (Other inputs with the same ordering as this example may yield a different number > 0)


// Sorting an array of objects
const hotelRooms = [
  {street: '350 5th Ave', room: 'A-1021'},
  {street: '350 5th Ave', room: 'A-21046-b'}
];
// Sort by street (case-insensitive), then by room (case-sensitive)
hotelRooms.sort((a, b) => (
  naturalCompare(a.street, b.street, {caseInsensitive: true}) ||
  naturalCompare(a.room, b.room)
));


// When text transformation is needed or when doing a case-insensitive sort on a
// large array of objects, it is best for performance to pre-compute the
// transformed text and store it on the object. This way, the text will not need
// to be transformed for every comparison while sorting.
const cars = [
  {make: 'Audi', model: 'R8'},
  {make: 'Porsche', model: '911 Turbo S'}
];
// Sort by make, then by model (both case-insensitive)
for (const car of cars) {
  car.sortKey = (car.make + ' ' + car.model).toLowerCase();
}
cars.sort((a, b) => naturalCompare(a.sortKey, b.sortKey));


// Using a custom alphabet (Russian alphabet)
const russianOpts = {
  alphabet: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
};
['Ё', 'А', 'б', 'Б'].sort((a, b) => naturalCompare(a, b, russianOpts));
// -> ['А', 'Б', 'Ё', 'б']
```

**Note:** Putting numbers in the custom alphabet can cause undefined behaviour.
