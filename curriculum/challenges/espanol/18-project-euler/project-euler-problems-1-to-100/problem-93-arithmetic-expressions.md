---
id: 5900f3ca1000cf542c50fedc
title: 'Problem 93: Arithmetic expressions'
challengeType: 1
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

By using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, −, \*, /) and brackets/parentheses, it is possible to form different positive integer targets.

Por ejemplo,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Tenga en cuenta que no se permiten concatenaciones de dígitos, como 12 + 34.

Usando el conjunto (set), {1, 2, 3, 4}, es possible obtener treinta y uno números objetivos de los cuales 36 es el máximo, y cada uno de los números de 1 a 28 pueden ser obtenidos antes de encontrar el primer número no expresible.

Encuentra el conjunto de cuatro dígitos distintos, `a` &lt; `b` &lt; `c` &lt; `d`, para el cual el conjunto más largo de enteros positivos consecutivos, 1 a `n`, puedan ser obtenidos, dando su respuesta como una cadena: `abcd`.

# --hints--

`arithmeticExpressions()` debe devolver un número.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` debe devolver 1258.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
