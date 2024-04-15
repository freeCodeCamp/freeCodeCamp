---
id: 5e6dee7749a0b85a3f1fc7d5
title: 盧卡斯-萊默檢驗
challengeType: 1
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

Lucas-Lehmer Test: for $p$ an odd prime, the Mersenne number $2^p-1$ is prime if and only if $2^p-1$ divides $S(p-1)$ where $S(n+1)=(S(n))^2-2$, and $S(1)=4$.

# --instructions--

編寫一個函數，返回給定的梅森數是否爲素數。

# --hints--

`lucasLehmer` 應該是一個函數。

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` 應該返回一個布爾值。

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` 應該返回 `false`。

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` 應該返回 `false`。

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` 應該返回 `true`。

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` 應該返回 `true`。

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` 應該返回 `true`。

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` 應該返回 `false`。

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
