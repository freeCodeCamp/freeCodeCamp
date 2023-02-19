---
id: 5c3dda8b4d8df89bea71600f
title: Перевірка на наявність змішаного групування символів
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Іноді ми хочемо перевірити групи символів за допомогою регулярного виразу, і, щоб зробити це, ми використовуємо дужки `()`.

Якщо ви хочете знайти `Penguin` або `Pumpkin` в рядку, ви можете використовувати цей регулярний вираз: `/P(engu|umpk)in/g`

Після цього перевірте, чи бажані групи рядків знаходяться в тестовому рядку за допомогою методу `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

У результаті використання методу `test` ви отримаєте `true`.

# --instructions--

Виправте регулярний вираз таким чином, аби він перевіряв імена `Franklin Roosevelt` або `Eleanor Roosevelt` з урахуванням регістру, і щоб він також враховував середні імена.

Після цього виправте код таким чином, щоб створений вами регулярний вираз перевірявся на `myString` і ви отримали `true` або `false` залежно від того, чи збігається регулярний вираз.

# --hints--

Ви маєте отримати `true` для рядка `Franklin D. Roosevelt` за допомогою вашого регулярного виразу `myRegex`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Ви маєте отримати `true` для рядка `Eleanor Roosevelt` за допомогою вашого регулярного виразу `myRegex`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Ви маєте отримати `false` для рядка `Franklin Rosevelt` за допомогою вашого регулярного виразу `myRegex`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Ви маєте отримати `false` для рядка `Frank Roosevelt` за допомогою вашого регулярного виразу `myRegex`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

Your regex `myRegex` should return `false` for the string `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

Your regex `myRegex` should return `false` for the string `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

You should use `.test()` to test the regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

У результаті ви повинні отримати `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
