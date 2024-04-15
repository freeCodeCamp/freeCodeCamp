---
id: 5a23c84252665b21eecc7ec1
title: 各位の 2 乗を繰り返す
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

パラメータとして数値を取り、上記プロセスを実行した後に 1 または 89 を返す関数を記述してください。

# --hints--

`iteratedSquare` は関数とします。

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` は数値を返す必要があります。

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` は `89` を返す必要があります。

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` は `1` を返す必要があります。

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` は `89` を返す必要があります。

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` は `89` を返す必要があります。

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` は `1` を返す必要があります。

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` は `1` を返す必要があります。

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
