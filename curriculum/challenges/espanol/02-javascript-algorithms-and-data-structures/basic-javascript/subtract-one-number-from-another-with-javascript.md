---
id: cf1111c1c11feddfaeb4bdef
title: Resta un número de otro con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cP3yQtk'
forumTopicId: 18314
dashedName: subtract-one-number-from-another-with-javascript
---

# --description--

También podemos restar un número de otro.

JavaScript utiliza el símbolo `-` para restar.

**Ejemplo**

```js
const myVar = 12 - 6;
```

`myVar` tendrá el valor `6`.
# --instructions--

Cambia el `0` para que la diferencia sea `12`.

# --hints--

The variable `difference` should be equal to `12`.

```js
assert(difference === 12);
```

You should only subtract one number from `45`.

```js
assert(/difference=45-33;?/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'difference = '+z;})(difference);
```

## --seed-contents--

```js
const difference = 45 - 0;
```

# --solutions--

```js
const difference = 45 - 33;
```
