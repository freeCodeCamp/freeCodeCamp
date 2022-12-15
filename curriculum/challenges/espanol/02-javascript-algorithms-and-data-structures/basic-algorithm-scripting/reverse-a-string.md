---
id: a202eed8fc186c8434cb6d61
title: Invierte una cadena
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, `"hello"` debe convertirse `"olleh"`.

# --hints--

`reverseString("hello")` debe devolver una cadena.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` debe devolver la cadena `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` debe devolver la cadena `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` debe devolver la cadena `htraE morf sgniteerG`.

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
