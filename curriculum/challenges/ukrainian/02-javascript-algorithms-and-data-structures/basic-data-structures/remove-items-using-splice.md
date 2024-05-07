---
id: 587d78b2367417b2b2512b10
title: Видалення елементів за допомогою splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

Що ж, ми дізналися, як видалити елементи з початку і кінця масиву, використовуючи `shift()` і `pop()`, але що робити, якщо ми хочемо прибрати елемент десь зі середини? Або видалити декілька елементів одразу? Якраз тут нам на допомогу може прийти `splice()`. `splice()` дозволяє нам зробити ось що: **видалити будь-яку кількість послідовних елементів** будь-де в масиві.

`splice()` може прийняти до трьох параметрів, але зараз ми зосередимося на перших двох. Перші два параметри `splice()` — це цілі числа, які позначають індекси або позиції елементів у масиві, для якого викликається `splice()`. Пам’ятайте, що масиви мають *нульовий індекс*, тому ми б використовували `0`, щоб позначити перший елемент масиву. Перший параметр методу `splice()` позначає індекс в масиві, з якого починають видаляти елементи, а другий параметр позначає кількість елементів, які потрібно видалити. Наприклад:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

Ось тут видаляємо 2 елементи, починаючи з третього елемента (за другим індексом). `array` матиме значення `['today', 'was', 'great']`.

`splice()` не лише змінює масив, для якого викликається, але й повертає новий масив, який містить значення видалених елементів:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` має значення `['really', 'happy']`.

# --instructions--

Ми ініціалізували масив `arr`. Використайте `splice()`, щоб видалити елементи з `arr`, щоб він містив елементи, сума значень яких становить `10`.

# --hints--

Не потрібно змінювати вихідний рядок `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` має містити елементи, сума значень яких становить `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

Використайте метод `splice()` на `arr`.

```js
assert(__helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/arr\.splice\(/));
```

Метод splice має видалити елементи з `arr`, а не додавати додаткові елементи до `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
