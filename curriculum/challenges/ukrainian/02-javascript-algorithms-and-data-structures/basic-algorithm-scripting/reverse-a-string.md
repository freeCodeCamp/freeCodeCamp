---
id: a202eed8fc186c8434cb6d61
title: Зворотний рядок
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

Переверніть заданий рядок.

За необхідності перетворіть рядок у масив до того, як вносити зміни.

У результаті ви повинні отримати рядок.

# --hints--

`reverseString("hello")` повинен повністю змінити рядок.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` повинен перетворитися на рядок `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` повинен перетворитися на рядок `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` повинен перетворитися на рядок `htraE morf sgniteerG`.

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
