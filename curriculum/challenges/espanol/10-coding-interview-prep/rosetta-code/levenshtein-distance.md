---
id: 5e4ce2eaac708cc68c1df260
title: Distancia Levenshtein
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

En teoría de información ciencias de computación, la distancia **Levenshtein ** es una métrica para medir la cantidad de diferencia entre dos secuencias (p.ej. una distancia de edición). La distancia Levenshtein entre dos cadenas se define como el número mínimo de ediciones necesarias para transformar una cadena en la otra, con las operaciones de edición permitidas siendo inserción, borrado o sustitución de un solo carácter.

Ejemplo:

La distancia de Levenshtein entre "**gatito**" y "**sentado**" es 3, ya que las siguientes tres ediciones cambian una a otra, y no hay una manera de hacerlo con menos de tres ediciones:

<ul>
  <li><strong>k</strong>itten <strong>s</strong> (sustitución de 'k' por 's')</li>
  <li>sitt<strong>e</strong>n sitt<strong>i</strong>n (sustitución de 'e' por 'i')</li>
  <li>sittin sittin<strong>g</strong> (insertar 'g' al final).</li>
</ul>

*La distancia de Levenshtein entre "**rosettacode**", "**raisethysword**" es **8**.*

*La distancia entre dos cadenas es la misma que cuando ambas cadenas son invertidas.*

# --instructions--

Escribe una función que retorne la distancia de Levenshtein entre dos cadenas dadas como parámetros.

# --hints--

`levenshtein` debe ser una función.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` debería devolver un número.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` debería devolver `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` debería devolver `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` debería devolver `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` debería devolver `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` debería devolver `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` debería devolver `8`.

```js
assert.equal(levenshtein('mississippi', 'swiss miss'), 8);
```

# --seed--

## --seed-contents--

```js
function levenshtein(a, b) {

}
```

# --solutions--

```js
function levenshtein(a, b) {
  var t = [], u, i, j, m = a.length, n = b.length;
  if (!m) { return n; }
  if (!n) { return m; }
  for (j = 0; j <= n; j++) { t[j] = j; }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    } t = u;
  } return u[n];
}
```
