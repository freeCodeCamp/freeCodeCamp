---
id: a202eed8fc186c8434cb6d61
title: Reverse a String
challengeType: 5
forumTopicId: 16043
---

# --description--

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

# --hints--

`reverseString("hello")` should return a string.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` should become `"olleh"`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` should become `"ydwoH"`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` should return `"htraE morf sgniteerG"`.

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
