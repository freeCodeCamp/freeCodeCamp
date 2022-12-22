---
id: cf1111c1c11feddfaeb9bdef
title: Генерація випадкових дробів з JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

Випадкові числа корисні для створення випадкової поведінки.

JavaScript має функцію `Math.random()`, яка генерує випадкові десяткові числа між `0` (включно) та `1` (виключно). Тому `Math.random()` може повернути `0`, але ніколи не поверне `1`.

**Note:** Like <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Storing Values with the Assignment Operator</a>, all function calls will be resolved before the `return` executes, so we can `return` the value of the `Math.random()` function.

# --instructions--

Змініть `randomFraction`, щоб повернути випадкове число замість повернення `0`.

# --hints--

`randomFraction` має повернути випадкове число.

```js
assert(typeof randomFraction() === 'number');
```

Число, яке повернуто `randomFraction` має бути десятковим.

```js
assert((randomFraction() + '').match(/\./g));
```

Вам слід використовувати `Math.random` для генерації випадкового десяткового числа.

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
