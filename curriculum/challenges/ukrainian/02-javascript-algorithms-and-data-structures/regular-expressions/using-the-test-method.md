---
id: 587d7db3367417b2b2512b8e
title: Використання тестового методу
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Регулярні вирази використовують у мовах програмування, щоб знайти збіги рядків. Ви створюєте шаблони, які допоможуть зробити це.

Якщо ви хочете знайти слово `the` у рядку `The dog chased the cat`, то використайте регулярний вираз `/the/`. Зверніть увагу на те, що лапки в регулярному виразі не потрібні.

JavaScript має декілька способів використання регулярних виразів. Один зі способів тестування регулярного виразу — це використання методу `.test()`. Метод `.test()` приймає регулярний вираз, застосовує його до рядка (який розміщений всередині дужок) і повертає `true` або `false`, якщо шаблон знайде щось чи ні.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

Метод `test` поверне `true`.

# --instructions--

Застосуйте регулярний вираз `myRegex` до рядка `myString`, використавши метод `.test()`.

# --hints--

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
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
