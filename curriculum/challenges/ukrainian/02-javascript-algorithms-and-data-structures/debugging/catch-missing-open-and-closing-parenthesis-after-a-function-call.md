---
id: 587d7b85367417b2b2512b39
title: Пропущені відкриваючі та закриваючі дужки
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Якщо функція чи метод не приймає жодних аргументів, ви можете забути додати (порожні) відкриваючі та закриваючі дужки під час виклику. Зазвичай результат виклику функції зберігається у змінних для подальшого використання у вашому коді. Цю помилку можна виявити шляхом вводу значень змінних (або їх типів) на консолі та перевірки того, що змінна визначена для посилання на функцію замість очікуваного значення, яке повертає функція.

Змінні у поданому нижче прикладі є різними:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

У цьому випадку `varOne` є функцією `myFunction`, а `varTwo` є рядком `You rock!`.

# --instructions--

Виправте код таким чином, щоб змінна `result` отримала значення, повернене від виклику функції `getNine`.

# --hints--

Ваш код повинен виправити змінну `result` так, щоб її значення було числом, яке повертає функція `getNine`.

```js
assert(result == 9);
```

Ваш код повинен викликати функцію `getNine`.

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
