---
id: a202eed8fc186c8434cb6d61
title: قلب المقطع النصي String
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

أقلب تشكيل المقطع النصي (string) المقدمة لتنتج مقطع نصي (string) مقلوب.

على سبيل المثال، يجب أن يصبح `"hello"` على هيئة `"olleh"`.

# --hints--

يجب أن ينتج `reverseString("hello")` مقطع نصي (string).

```js
assert(typeof reverseString('hello') === 'string');
```

يجب أن ينتج `reverseString("hello")` مقطع `olleh`.

```js
assert(reverseString('hello') === 'olleh');
```

يجب أن ينتج `reverseString("Howdy")` مقطع `ydwoH`.

```js
assert(reverseString('Howdy') === 'ydwoH');
```

يجب أن ينتج `reverseString("Greetings from Earth")` المقطع `htraE morf sgniteerG`.

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
