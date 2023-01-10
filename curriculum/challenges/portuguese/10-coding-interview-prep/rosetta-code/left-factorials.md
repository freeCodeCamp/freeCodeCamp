---
id: 5a23c84252665b21eecc7ee0
title: Fatoriais restantes
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Fatoriais restantes**, $ !n $, podem se referir a *subfatoriais* ou a *somas de fatorial*. A mesma notação pode ser vista de modo confuso para as duas definições diferentes. Às vezes, *subfatoriais* (também conhecidos como *desarranjos*) podem usar qualquer uma das notações a seguir:

<ul>
  <li>$!n$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(Pode não ser visualmente óbvio, mas o último exemplo utiliza um ponto de exclamação ascendente.) Esta tarefa usará essa fórmula para o **fatorial restante**:

$ !n = \\sum\_{k=0}^{n-1} k! $

onde $!0 = 0$

# --instructions--

Escreva uma função que calcule o fatorial restante de um certo número.

# --hints--

`leftFactorial` deve ser uma função.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` deve retornar um número.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` deve retornar `0`.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` deve retornar `1`.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` deve retornar `2`.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` deve retornar `4`.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` deve retornar `409114`.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` deve retornar `22324392524314`.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` deve retornar `6780385526348314`.

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```
