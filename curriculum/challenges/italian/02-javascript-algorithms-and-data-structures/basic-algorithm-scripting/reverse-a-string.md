---
id: a202eed8fc186c8434cb6d61
title: Invertire una stringa
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Inverti la stringa fornita e restituisci la stringa invertita.

Ad esempio, `"hello"` dovrebbe diventare `"olleh"`.

# --hints--

`reverseString("hello")` dovrebbe restituire una stringa.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` dovrebbe restituire la stringa `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` dovrebbe restituire la stringa `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` dovrebbe restituire la stringa `htraE morf sgniteerG`.

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
