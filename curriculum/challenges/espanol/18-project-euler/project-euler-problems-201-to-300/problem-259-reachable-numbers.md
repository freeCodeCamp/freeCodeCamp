---
id: 5900f4701000cf542c50ff82
title: 'Problema 259: Números Alcanzables'
challengeType: 1
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

A positive integer will be called reachable if it can result from an arithmetic expression obeying the following rules:

- Uses the digits 1 through 9, in that order and exactly once each.
- Cualquier dígito sucesivo puede ser concatenado (por ejemplo, usando los dígitos 2, 3 y 4, obtendremos el número 234).
- Sólo se permiten las cuatro operaciones aritméticas binarias habituales (adición, sustracción, multiplicación, y divición).
- Cada operación puede ser utilizada en cualquier cantidad de veces, o de ninguna manera.
- No se permite Unary minus.
- Cualquier número de paréntesis (posiblemente anidados), puede ser utilizado para definir el orden de las operaciones.

Por ejemplo, 42 es accesible, puesto que $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$.

¿Cuál es la suma de todos los enteros accesibles positivos?

# --hints--

`reachableNumbers()` debería retornar `20101196798`.

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```
