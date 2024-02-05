---
id: 5900f3dd1000cf542c50feef
title: 'Problema 112: Números que rebotan'
challengeType: 1
forumTopicId: 301738
dashedName: problem-112-bouncy-numbers
---

# --description--

Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

Similarmente si no hay dígito que exceda por el dígito a su derecha, se le llama un número decreciente; por ejemplo, 66420.

Llamaremos a un entero positivo que no este incrementando ni decrementando un número que "rebote"; por ejemplo, 155349.

Está claro que no puede haber ningún número que rebota por debajo de un ciento, pero poco más de la mitad de los números por debajo de mil (525) son rebotantes. De hecho, el menor número para el cual la proporción de números que rebotan alcanza primero el 50% es 538.

Sorprendentemente, los números de rebote se hacen cada vez más y más comunes y para el tiempo que alcanzamos 21780 la proporción de rebotes es igual al 90%.

Encuentra el menor número Find the least number for which the proportion of bouncy numbers is exactly 99%.

# --hints--

`bouncyNumbers()` debería devolver `1587000`.

```js
assert.strictEqual(bouncyNumbers(), 1587000);
```

# --seed--

## --seed-contents--

```js
function bouncyNumbers() {

  return true;
}

bouncyNumbers();
```

# --solutions--

```js
// solution required
```
