---
id: 587d7b85367417b2b2512b39
title: Знаходження пропущених відкриваючих та закриваючих дужок після виклику функції
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

Коли функція чи метод не приймає жодних аргументів, під час їх виклику ви можете забути додати (порожні) відкриваючі та закриваючі дужки. Зазвичай результат виклику функції зберігається у змінних для подальшого використання у вашому коді. Цю помилку можна розпізнати шляхом вводу змінних значень (або їхніх типів) у консоль, поки одне з них не матиме посилання на функцію замість очікуваного значення, яке вона має повертати.

Змінні у поданому нижче прикладі є різними:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

У випадку `varOne` є функцією `myFunction`, і `varTwo` є рядком `You rock!`.

# --instructions--

Виправте код таким чином, щоб змінна `result` отримала значення, повернене від виклику функції `getNine`.

# --hints--

Ваш код має виправити змінну `result` так, щоб вона була встановлена числом, яке функція `getNine` повертатиме.

```js
assert(result == 9);
```

Ваш код має викликати функцію `getNine`.

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
