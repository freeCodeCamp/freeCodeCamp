---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Kehre den angegebenen String um.

Möglicherweise musst du die Strings in ein Array umwandeln, bevor du sie umkehren kannst.

Dein Ergebnis muss ein String sein.

# --hints--

`reverseString("hello")` sollte einen String zurückgeben.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` sollte den String `olleh` zurückgeben.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` sollte den String `ydwoH` zurückgeben.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` sollten den String `htraE morf sgniteerG` zurückgeben.

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
