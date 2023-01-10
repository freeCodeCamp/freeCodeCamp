---
id: a202eed8fc186c8434cb6d61
title: Inverter uma string
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Inverta a string fornecida e retorne-a com a inversão.

Por exemplo, `"hello"` deve se tornar `"olleh"`.

# --hints--

`reverseString("hello")` deve retornar uma string.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` deve retornar a string `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` deve retornar a string `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` deve retornar a string `htraE morf sgniteerG`.

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
