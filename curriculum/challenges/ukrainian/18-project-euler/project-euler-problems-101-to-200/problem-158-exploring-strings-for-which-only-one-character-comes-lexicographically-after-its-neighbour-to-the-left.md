---
id: 5900f40a1000cf542c50ff1d
title: >-
  Завдання 158: вивчення рядків, у яких один символ стоїть ліворуч від свого сусіда в алфавіті
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Якщо взяти три різні літери з 26 літер англійського алфавіту, то можна отримати рядки з трьох символів.

Наприклад, «abc», «hat» та «zyx».

Якщо подивитись на ці три приклади, то в «abc» два символи стоять ліворуч від свого сусіда в алфавіті.

У «hat» є лише один символ, який стоїть ліворуч від свого сусіда в алфавіті. У «zyx» жоден символ не стоїть ліворуч від свого сусіда в алфавіті.

Усього є 10400 рядків з трьома символами, де лише один символ стоїть ліворуч від свого сусіда в алфавіті.

Розглянемо рядки $n ≤ 26$ різних символів алфавіту.

Для кожного $n$, $p(n)$ є певною кількістю рядків з $n$ символами, де лише один символ стоїть ліворуч від свого сусіда в алфавіті.

Яке найбільше значення $p(n)$?

# --hints--

`lexicographicNeighbours()` має повернути `409511334375`.

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```
