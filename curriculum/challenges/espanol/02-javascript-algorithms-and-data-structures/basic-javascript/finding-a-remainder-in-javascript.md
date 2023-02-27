---
id: 56533eb9ac21ba0edf2244ae
title: Encuentra un resto en JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

El operador de <dfn>resto</dfn> `%` entrega el resto de la división entre dos números.

**Ejemplo**

<pre>
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`. Even numbers have a remainder of `0`, while odd numbers a remainder of `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**Nota:** El operador de <dfn>resto</dfn> es a veces incorrectamente referido como el operador módulo. Es muy similar al módulo, pero no funciona adecuadamente con números negativos.

# --instructions--

Establece `remainder` igual al resto de `11` dividido entre `3` usando el operador de <dfn>resto</dfn> (`%`).

# --hints--

La variable `remainder` debe inicializarse

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

El valor de `remainder` debe ser `2`

```js
assert(remainder === 2);
```

Debes usar el operador `%`

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
