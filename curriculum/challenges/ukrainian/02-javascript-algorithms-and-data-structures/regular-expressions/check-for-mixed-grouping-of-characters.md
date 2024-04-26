---
id: 5c3dda8b4d8df89bea71600f
title: Пошук змішаних груп символів
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

Іноді потрібно перевірити групи символів за допомогою регулярного виразу. Для цього використовують дужки `()`.

Якщо ви хочете знайти `Penguin` або `Pumpkin` в рядку, використайте регулярний вираз `/P(engu|umpk)in/g`.

Після цього перевірте, чи бажані групи рядків знаходяться в тестовому рядку за допомогою методу `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

Метод `test` поверне `true`.

# --instructions--

Виправте регулярний вираз, щоб він перевірив імена `Franklin Roosevelt` або `Eleanor Roosevelt` з урахуванням регістру та уступив середнім іменам.

Після цього виправте код, щоб створений вами регулярний вираз перевірявся з `myString` і поверталось `true` або `false` залежно від того, чи збігається регулярний вираз.

# --hints--

Регулярний вираз `myRegex` має повернути `true` для рядка `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

Регулярний вираз `myRegex` має повернути `true` для рядка `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

Регулярний вираз `myRegex` має повернути `false` для рядка `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

Регулярний вираз `myRegex` має повернути `false` для рядка `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

Регулярний вираз `myRegex` має повернути `false` для рядка `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

Регулярний вираз `myRegex` має повернути `false` для рядка `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

Використайте `.test()`, щоб протестувати регулярний вираз.

```js
assert(__helpers.removeJSComments(code).match(/myRegex.test\(\s*myString\s*\)/));
```

Результат має повернути `true`.

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
