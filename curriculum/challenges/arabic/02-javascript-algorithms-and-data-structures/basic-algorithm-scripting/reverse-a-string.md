---
id: a202eed8fc186c8434cb6d61
title: قلب المقطع النصي String
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

أقلب المقطع النصي المقدم.

قد تحتاج إلى تحويل المقطع النصي (string) إلى قائمة قبل أن تتمكن من قلبها.

يجب أن تكون نتيجتك مقطع نصي (string).

# --hints--

`reverseString("hello")` يجب أن ينتج مقطع نصي.

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` يجب أن ينتج مقطع `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` يجب أن ينتج مقطع `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` يجب أن ينتج المقطع `htraE morf sgniteerG`.

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
