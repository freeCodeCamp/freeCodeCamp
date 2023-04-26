---
id: 59c3ec9f15068017c96eb8a3
title: Secuencia Farey
challengeType: 1
forumTopicId: 302266
dashedName: farey-sequence
---

# --description--

La secuencia Farey <code>F<sub>n</sub></code> de orden `n` es la secuencia de fracciones completamente reducidas entre `0` y `1` por lo cual, cuando está en términos más bajos, tiene denominadores menores o iguales a `n`, ordenados en orden de tamaño creciente.

La *secuencia Farey * es a veces incorrectamente llamada *Farey series*.

Cada secuencia Farey:

<ul>
  <li>inicia con el valor de 0, denotado por la fracción $ \frac{0}{1} $</li>
  <li>termina con el valor de 1, denotado por la fracción $ \frac{1}{1}$.</li>
</ul>

Las secuencias de Farey de orden `1` a `5` son:

<ul>
  <li style='list-style: none;'>${\bf\it{F}}_1 = \frac{0}{1}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_2 = \frac{0}{1}, \frac{1}{2}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_3 = \frac{0}{1}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_4 = \frac{0}{1}, \frac{1}{4}, \frac{1}{3}, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \frac{1}{1}$</li>
  <li style='list-style: none;'>${\bf\it{F}}_5 = \frac{0}{1}, \frac{1}{5}, \frac{1}{4}, \frac{1}{3}, \frac{2}{5}, \frac{1}{2}, \frac{3}{5}, \frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \frac{1}{1}$</li>
</ul>

# --instructions--

Escribe una función que devuelve la secuencia Farey de orden `n`. La función debería tener un parámetro que es `n`. Este debería devolver la secuencia como un arreglo.

# --hints--

`farey` debería ser una función.

```js
assert(typeof farey === 'function');
```

`farey(3)` debería devolver un arreglo

```js
assert(Array.isArray(farey(3)));
```

`farey(3)` debería devolver `['0/1','1/3','1/2','2/3','1/1']`

```js
assert.deepEqual(farey(3),['0/1', '1/3', '1/2', '2/3', '1/1']);
```

`farey(4)` debería devolver `['0/1','1/4','1/3','1/2','2/3','3/4','1/1']`

```js
assert.deepEqual(farey(4), ['0/1', '1/4', '1/3', '1/2', '2/3', '3/4', '1/1']);
```

`farey(5)` debería devolver `['0/1','1/5','1/4','1/3','2/5','1/2','3/5','2/3','3/4','4/5','1/1']`

```js
assert.deepEqual(farey(5), [
  '0/1',
  '1/5',
  '1/4',
  '1/3',
  '2/5',
  '1/2',
  '3/5',
  '2/3',
  '3/4',
  '4/5',
  '1/1'
]);
```

# --seed--

## --seed-contents--

```js
function farey(n) {

}
```

# --solutions--

```js
function farey(n) {
  const sequence = [{ string: "0/1", float: 0.0 }];
  for (let i = 1; i < n; i++) {
    for (let j = n; j >= i; j--) {
      if (i === 1 || j % i > 0) {
        sequence.push({ string: `${i}/${j}`, float: i / j });
      }
    }
  }
  return sequence
    .sort((a, b) => a.float - b.float)
    .map(e => e.string)
}
```
