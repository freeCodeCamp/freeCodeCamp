---
id: 587d7b86367417b2b2512b3b
title: Помилка неврахованої одиниці при індексуванні
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

<dfn>Помилки неврахованої одиниці</dfn> виникають, коли ви намагаєтеся націлити конкретний індекс рядка чи масиву (щоб виокремити чи отримати доступ до сегмента) або під час використання циклів. Індексування JavaScript починається з нуля, а не одиниці, тобто останній індекс завжди буде на одиницю меншим за довжину елемента. Якщо ви спробуєте отримати доступ до індексу рівному довжині, програма повідомить про помилку «індексу поза діапазоном» або надрукує `undefined`.

Якщо ви використовуєте методи рядка чи масиву, які приймають діапазон індексу як аргумент, варто прочитати документацію та зрозуміти, чи вони враховують всі елементи (тобто елемент за заданим індексом є частиною отриманого результату). Ось кілька прикладів помилок неврахованої одиниці:

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

Перший приклад створює цикл забагато разів, а другий цикл є занадто коротким (оскільки пропущений перший індекс, 0). Третій приклад правильний.

# --instructions--

Виправіть дві помилки індексування у поданій функції таким чином, щоб усі числа від 1 до 5 були виведені на консоль.

# --hints--

Ваш код повинен встановити початкову умову циклу так, щоб він починався з першого індексу.

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

Ваш код повинен виправити початкову умову циклу таким чином, щоб індекс починався з 0.

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

Ваш код повинен встановити кінцеву умову циклу так, щоб він закінчувався на останньому індексі.

```js
assert(code.match(/i\s*<\s*len\s*;|i\s*<=\s*len\s*-\s*1\s*;/g).length == 1);
```

Ваш код повинен встановити кінцеву умову циклу таким чином, щоб він зупинявся на одиниці від довжини.

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Only change code below this line
 for (let i = 0; i < len; i++) {
 // Only change code above this line
   console.log(firstFive[i]);
 }
}

countToFive();
```
