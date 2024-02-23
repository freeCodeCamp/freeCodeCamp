---
id: 5a23c84252665b21eecc7ec1
title: Elevar ao quadrado os dígitos iterados
challengeType: 1
forumTopicId: 302291
dashedName: iterated-digits-squaring
---

# --description--

Se você somar o quadrado dos dígitos de um número natural (um número inteiro maior que zero), você sempre terminará com 1 ou 89:

<pre>15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
</pre>

# --instructions--

Escreva uma função que receba um número na forma de um parâmetro e retorne 1 ou 89 depois de executar o processo mencionado.

# --hints--

`iteratedSquare` deve ser uma função.

```js
assert(typeof iteratedSquare == 'function');
```

`iteratedSquare(4)` deve retornar um número.

```js
assert(typeof iteratedSquare(4) == 'number');
```

`iteratedSquare(4)` deve retornar `89`.

```js
assert.equal(iteratedSquare(4), 89);
```

`iteratedSquare(7)` deve retornar `1`.

```js
assert.equal(iteratedSquare(7), 1);
```

`iteratedSquare(15)` deve retornar `89`.

```js
assert.equal(iteratedSquare(15), 89);
```

`iteratedSquare(20)` deve retornar `89`.

```js
assert.equal(iteratedSquare(20), 89);
```

`iteratedSquare(70)` deve retornar `1`.

```js
assert.equal(iteratedSquare(70), 1);
```

`iteratedSquare(100)` deve retornar `1`.

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
