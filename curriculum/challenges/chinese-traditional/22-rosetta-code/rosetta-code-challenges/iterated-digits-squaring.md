---
id: 5a23c84252665b21eecc7ec1
title: 迭代的數字平方
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

編寫一個函數，該函數將數字作爲參數，並在執行上述過程後返回1或89。

# --hints--

`iteratedSquare`應該是一個函數。

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)`應該返回一個數字。

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)`應該返回`89` 。

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)`應該返回`1` 。

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)`應該返回`89` 。

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)`應該返回`89` 。

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)`應該返回`1` 。

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)`應該返回`1` 。

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
