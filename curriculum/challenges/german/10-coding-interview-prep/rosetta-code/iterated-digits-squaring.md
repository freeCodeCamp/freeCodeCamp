---
id: 5a23c84252665b21eecc7ec1
title: Iterated digits squaring
challengeType: 1
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process.

# --hints--

`iteratedSquare` should be a function.

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` should return a number.

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` should return `89`.

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` should return `1`.

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` should return `89`.

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` should return `89`.

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` should return `1`.

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` should return `1`.

```js
assert.equal(iteratedSquare(100), 1);
```

# --seed--

## --seed-contents--

```js
function iteratedSquare(n) {

}
```

# --solutions--

```js
function iteratedSquare(n) {
    var total;
    while (n != 89 && n != 1) {
        total = 0;
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n/10);
        }
        n = total;
    }
    return n;
}
```
