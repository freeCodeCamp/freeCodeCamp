---
id: 5949b579404977fbaefcd736
title: 9 mil millones de Dios entero
challengeType: 1
forumTopicId: 302219
dashedName: 9-billion-names-of-god-the-integer
---

# --description--

This task is a variation of the short story by Arthur C. Clarke.

(Los resolvedores deben ser concientes de las consecuencias de completar esta tarea.)

En detalle, para especificar lo que se entiende por "nombre":

<ul>
  <li>The integer 1 has 1 name "1".</li>
  <li>El entero 2 tiene 2 nombres "1+1" y "2".</li>
  <li>El entero 3 tiene 3 nombres "1+1+1", "2+1" y "3".</li>
  <li>El entero 4 tiene 5 nombres "1+1+1+1", "2+1+1", "2+2", "3+1", "4".</li>
  <li>El entero 5 tiene 7 nombres "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".</li>
</ul>

Esto se puede visualizar de la siguiente forma:

<pre>          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1
</pre>

Donde la fila $n$ corresponde al entero $n$, y cada columna $C$ en la fila $m$ de izquierda a derecha corresponde al número de nombres que empiezan con $C$.

Opcionalmente observe que la suma de la fila $n$-ésima $P(n)$ es la función de la partición entera.

# --instructions--

Implementar una función que devuelva la suma de la fila $n$-ésima.

# --hints--

`numberOfNames` debería ser una función.

```js
assert(typeof numberOfNames === 'function');
```

`numberOfNames(5)` debería ser igual a 7.

```js
assert.equal(numberOfNames(5), 7);
```

`numberOfNames(12)` debería ser igual a 77.

```js
assert.equal(numberOfNames(12), 77);
```

`numberOfNames(18)` debería ser igual a 385.

```js
assert.equal(numberOfNames(18), 385);
```

`numberOfNames(23)` debería ser igual a 1255.

```js
assert.equal(numberOfNames(23), 1255);
```

`numberOfNames(42)` debería ser igual a 53174.

```js
assert.equal(numberOfNames(42), 53174);
```

`numberOfNames(123)` debería ser igual a 2552338241.

```js
assert.equal(numberOfNames(123), 2552338241);
```

# --seed--

## --seed-contents--

```js
function numberOfNames(num) {

  return true;
}
```

# --solutions--

```js
function numberOfNames(num) {
  const cache = [
    [1]
  ];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(r[r.length - 1] + (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[(Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi]);
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
```
