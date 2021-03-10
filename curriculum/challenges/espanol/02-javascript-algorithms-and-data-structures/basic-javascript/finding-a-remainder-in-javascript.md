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

<blockquote>5 % 2 = 1 porque<br>Math.floor(5 / 2) = 2 (Cociente)<br>2 * 2 = 4<br>5 - 4 = 1 (Resto)</blockquote>

**Uso**  
En matemáticas, un número se puede comprobar para saber si es par o impar revisando el resto de la división del número por `2`.

<blockquote>17 % 2 = 1 (17 es impar)<br>48 % 2 = 0 (48 es par)</blockquote>

**Nota:** El operador de <dfn>resto</dfn> es a veces incorrectamente referido como el operador módulo. Es muy similar al módulo, pero no funciona adecuadamente con números negativos.

# --instructions--

Establece `remainder` igual al resto de `11` dividido entre `3` usando el operador de <dfn>resto</dfn> (`%`).

# --hints--

La variable `remainder` debe inicializarse

```js
assert(/var\s+?remainder/.test(code));
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
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
// Only change code below this line

var remainder;
```

# --solutions--

```js
var remainder =  11 % 3;
```
