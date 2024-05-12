---
id: 6606d150c472e91833764b63
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
dashedName: store-multiple-val-in-one-var
---

# --description--

With JavaScript `array` variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

JavaScript `array` variables ke saath, hum ek jagah par kai data pieces store kar sakte hain.

<h2>Hinglish</h2>

Aap ek array declaration ko ek opening square bracket se shuru karte hain, ek closing square bracket se end karte hain, aur har entry ke beech ek comma daalte hain, jaise ismein:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Modify the new array `myArray` so that it contains both a string and a number (in that order).

Naye array `myArray` ko aise modify karo ki usme ek string aur ek number ho (usi kram mein).

# --hints--

`myArray` should be an array.

```js
assert(typeof myArray == 'object');
```

The first item in `myArray` should be a string.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

The second item in `myArray` should be a number.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```

