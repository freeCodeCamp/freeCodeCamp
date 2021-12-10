---
id: 587d7b86367417b2b2512b3b
title: Знаходження помилок неврахованої одиниці при індексуванні
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

<dfn>Помилки неврахованої одиниці</dfn> (також відомі як помилки на одиницю) виникають, коли ви намагаєтеся обрати конкретний індекс рядка чи масиву (для виокремлення чи отримання доступу до цього сегмента) або під час створення з них циклів. Індексування JavaScript починається з нуля, а не одиниці, що означає, що останній індекс завжди буде на одиницю меншим, ніж довжина елемента. Якщо ви спробуєте отримати доступ до індексу рівному довжині, програма повідомить про помилку "індексу поза діапазоном" або виведе на екран результат `undefined`.

Якщо ви використовуєте методи рядка чи масиву, які беруть діапазон індексу за аргумент, прочитання документації допоможе зрозуміти, чи вони включають елементи (коли елемент за заданим індексом є частиною отриманого результату), чи ні. Ось кілька прикладів помилок неврахованої одиниці:

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

Ваш код має встановити початкову умову циклу так, щоб він починався з першого індексу.

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

Ваш код має виправити початкову умову циклу таким чином, щоб індекс починався з 0.

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

Ваш код має встановити кінцеву умову циклу так, щоб він закінчувався на останньому індексі.

```js
assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
```

Ваш код має виправити кінцеву умову циклу таким чином, щоб він зупинявся на 1 перед одиницею довжини.

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
