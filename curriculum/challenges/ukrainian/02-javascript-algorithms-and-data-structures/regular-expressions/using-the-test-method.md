---
id: 587d7db3367417b2b2512b8e
title: Використання тестового методу
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

У мовах програмування регулярні вирази використовуються для відповідності частин рядків. Ви створюєте шаблони, які допоможуть зробити цю відповідність.

Якщо ви хочете знайти слово `the` у рядку `The dog chased the cat`, то можете використати наступний регулярний вираз: `/the/`. Зверніть увагу на те, що лапки в регулярному виразі не потрібні.

JavaScript має декілька способів використання регулярних виразів. Один зі способів тестування регулярного виразу – це використання методу `.test()`. Метод `.test()` приймає регулярний вираз, застосовує його до рядка (який розміщений всередині дужок), і видає `true` чи `false`, якщо ваш шаблон знаходить щось або ні.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

Метод `test` у цьому разі видає `true`.

# --instructions--

Застосуйте регулярний вираз `myRegex` до рядка `myString`, використавши метод `.test()`.

# --hints--

Вам потрібно використати `.test()`, щоб перевірити регулярний вираз.

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
