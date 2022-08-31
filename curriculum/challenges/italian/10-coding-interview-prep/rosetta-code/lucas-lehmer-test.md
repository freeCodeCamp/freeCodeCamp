---
id: 5e6dee7749a0b85a3f1fc7d5
title: Test di Lucas-Lehmer
challengeType: 1
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

Test di Lucas-Lehmer: dato $p$ numero primo dispari, il numero di Mersenne $2^p-1$ è primo se e solo se $2^p-1$ divide $S(p-1)$ dove $S(n+1)=(S(n))^2-2$, e $S(1)=4$.

# --instructions--

Scrivi una funzione che restituisce se il numero Mersenne dato è primo o no.

# --hints--

`lucasLehmer` dovrebbe essere una funzione.

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` dovrebbe restituire un booleano.

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` dovrebbe restituire `false`.

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` dovrebbe restituire `false`.

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` dovrebbe restituire `true`.

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` dovrebbe restituire `true`.

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` dovrebbe restituire `true`.

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` dovrebbe restituire `false`.

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
