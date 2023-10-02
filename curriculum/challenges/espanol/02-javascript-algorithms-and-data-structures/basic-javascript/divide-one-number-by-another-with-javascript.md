---
id: cf1111c1c11feddfaeb6bdef
title: Divide un número entre otro con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqkbdAr'
forumTopicId: 17566
dashedName: divide-one-number-by-another-with-javascript
---

# --description--

También podemos dividir un número entre otro.

JavaScript utiliza el símbolo `/` para la división.

**Ejemplo**

```js
const myVar = 16 / 2;
```

`myVar` ahora tiene el valor `8`.
# --instructions--

Cambia el `0` para que el `quotient` (cociente) sea igual a `2`.

# --hints--

La variable `quotient` debe ser igual a 2.

```js
assert(quotient === 2);
```

Debes usar el operador `/`.

```js
assert(/\d+\s*\/\s*\d+/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'quotient = '+z;})(quotient);
```

## --seed-contents--

```js
const quotient = 66 / 0;
```

# --solutions--

```js
const quotient = 66 / 33;
```
