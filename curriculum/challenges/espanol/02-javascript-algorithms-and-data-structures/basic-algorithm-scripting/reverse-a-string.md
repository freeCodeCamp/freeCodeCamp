---
id: a202eed8fc186c8434cb6d61
title: Invertir una Cadena
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Invertir la cadena provista.

Es posible que necesites convertir la cadena en una matriz antes de poder invertirla.

Tu resultado deber ser una cadena.

# --hints--

`reverseString("hello")` debería devolver una cadena.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` debería convertirse en `"olleh"`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` debería convertirse en `"ydwoH"`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` debería devolver `"htraE morf sgniteerG"`.

```js
assert(reverseString('Greetings from Earth') === 'htraE morf sgniteerG');
```

# --seed--

## --seed-contents--

```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

# --solutions--

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```
