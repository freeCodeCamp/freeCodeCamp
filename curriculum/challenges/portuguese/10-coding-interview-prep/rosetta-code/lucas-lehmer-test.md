---
id: 5e6dee7749a0b85a3f1fc7d5
title: Teste de Lucas-Lehmer
challengeType: 1
forumTopicId: 385281
dashedName: lucas-lehmer-test
---

# --description--

Teste de Lucas-Lehmer: para um primo ímpar $p$, o número de Mersenne $2^p-1$ é primo se e somente se $2^p-1$ puder dividir $S(p-1)$, onde $S(n+1)=(S(n))^2-2$ e $S(1)=4$.

# --instructions--

Escreva uma função que retorne se o número de Mersenne dado é primo ou não.

# --hints--

`lucasLehmer` deve ser uma função.

```js
assert(typeof lucasLehmer == 'function');
```

`lucasLehmer(11)` deve retornar um booleano.

```js
assert(typeof lucasLehmer(11) == 'boolean');
```

`lucasLehmer(11)` deve retornar `false`.

```js
assert.equal(lucasLehmer(11), false);
```

`lucasLehmer(15)` deve retornar `false`.

```js
assert.equal(lucasLehmer(15), false);
```

`lucasLehmer(13)` deve retornar `true`.

```js
assert.equal(lucasLehmer(13), true);
```

`lucasLehmer(17)` deve retornar `true`.

```js
assert.equal(lucasLehmer(17), true);
```

`lucasLehmer(19)` deve retornar `true`.

```js
assert.equal(lucasLehmer(19), true);
```

`lucasLehmer(21)` deve retornar `false`.

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
