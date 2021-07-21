---
id: a202eed8fc186c8434cb6d61
title: Inverter uma string
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Inverta a string fornecida.

Você pode ter que transformar a string em um array antes de você poder inverter.

Seu resultado deve ser uma string.

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
