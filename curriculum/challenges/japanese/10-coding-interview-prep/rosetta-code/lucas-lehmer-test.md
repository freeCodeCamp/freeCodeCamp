---
id: 5e6dee7749a0b85a3f1fc7d5
title: リュカ–レーマー・テスト
challengeType: 1
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

リュカ–レーマー・テスト: $p$ が奇素数のとき、$2^p-1$ で $S(p-1)$ が割り切れる場合に限り、メルセンヌ数 $2^p-1$ が素数になります。ここでは $S(n+1)=(S(n))^2-2$、$S(1)=4$ と定義されます。

# --instructions--

与えられたメルセンヌ数が素数かどうかの判定を返す関数を記述してください。

# --hints--

`lucasLehmer` は関数とします。

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` はブール値を返す必要があります。

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` は `false` を返す必要があります。

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` は `false` を返す必要があります。

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` は `true` を返す必要があります。

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` は `true` を返す必要があります。

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` は `true` を返す必要があります。

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` は `false` を返す必要があります。

```js
assert.equal(lucasLehmer(21), false);
```

# --seed--

## --seed-contents--

```js
function lucasLehmer(p) {

}
```

# --solutions--

```js
function lucasLehmer(p) {
    function isPrime(p) {
        if (p == 2)
            return true;
        else if (p <= 1 || p % 2 == 0)
            return false;
        else {
            var to = Math.sqrt(p);
            for (var i = 3; i <= to; i += 2)
                if (p % i == 0)
                    return false;
            return true;
        }
    }

    function isMersennePrime(p) {
        if (p == 2)
            return true;
        else {
            var m_p = Math.pow(2, p) - 1
            var s = 4;
            for (var i = 3; i <= p; i++)
                s = (s * s - 2) % m_p
            return s == 0;
        }
    }

    return isPrime(p) && isMersennePrime(p)
}
```
