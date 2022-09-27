---
id: 5e6dee7749a0b85a3f1fc7d5
title: Тест Люка-Лемера
challengeType: 1
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

Тест Люка-Лемера: для $p$ непарного простого числа, число Мерсенна $2^p-1$ просте, якщо і тільки якщо $2^p-1$ ділиться на $S(p-1)$, де $S(n+1)=(S(n))^2-2$, і $S(1)=4$.

# --instructions--

Напишіть функцію, що покаже, чи є число Мерсенна простим чи ні.

# --hints--

`lucasLehmer` має бути функцією.

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` повинен повернути логічий тип даних.

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` повинен повернути `false`.

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` повинен повернути `false`.

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` повинен повернути `true`.

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` повинен повернути `true`.

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` повинен повернути `true`.

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` повинен повернути `false`.

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
