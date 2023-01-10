---
id: 5a23c84252665b21eecc8028
title: Secuencia de Stern-Brocot
challengeType: 1
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

Para esta tarea, la secuencia Stern-Brocot debe ser generada por un algoritmo similar al empleado en la generación de la <a href="https://rosettacode.org/wiki/Fibonacci_sequence" target="_blank" rel="noopener noreferrer nofollow">secuencia Fibonacci</a>.

<ol>
  <li>El primer y segundo miembros de la secuencia son ambos uno:</li>
    <ul><li>1, 1</li></ul>
  <li>Empezar por considerar el segundo miembro de la secuencia</li>
  <li>Sume el miembro considerado de la secuencia y su precedente, (1 + 1) = 2, y añádelo al final de la secuencia:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>Añadir el miembro considerado de la secuencia al final de la secuencia:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>Considere al siguiente miembro de la serie, (el tercer miembro es 2)</li>
  <li>GOTO 3 </li>
    <ul>
      <li></li>
      <li> ► Expandiendo otro bucle que obtenemos: Adicionalmente</li>
      <li></li>
    </ul>
  <li>Suma el miembro considerado de la secuencia y su precedente, (2 + 1) = 3, y añádelo al final de la secuencia:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Agrega el miembro considerado de la secuencia al final de la secuencia:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Considere al siguiente miembro de la serie, (el cuarto miembro es decir, 1)</li>
</ol>

# --instructions--

Crear una función que devuelva la posición en la secuencia de Stern-Brocot en la que $ n $ se encuentra por primera vez, donde la secuencia se genera con el método descrito arriba. Tenga en cuenta que esta secuencia utiliza un índice basado en 1.

# --hints--

`sternBrocot` debe ser una función.

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` debe devolver un número.

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` debe devolver `3`.

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` debe devolver `5`.

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` debería devolver `11`.

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` debería devolver `19`.

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` debería devolver `39`.

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
