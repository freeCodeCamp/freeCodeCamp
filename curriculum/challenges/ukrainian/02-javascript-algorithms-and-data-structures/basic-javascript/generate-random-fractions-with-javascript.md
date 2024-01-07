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

**Примітка:** як і <a href="/ukrainian/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">збереження значень за допомогою оператора присвоєння</a>, всі виклики функцій вирішені ще до виконання `return`, тому ми можемо повернути (`return`) значення функції `Math.random()`.

# --instructions--

Змініть `randomFraction`, щоб поверталось випадкове число, а не `0`.

# --hints--

`randomFraction` має повертати випадкове число.

```js
assert(typeof randomFraction() === 'number');
```

Число, яке повернула `randomFraction`, повинне бути десятковим.

```js
assert((randomFraction() + '').match(/\./g));
```

Ви повинні використати `Math.random`, щоб згенерувати випадкове десяткове число.

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
