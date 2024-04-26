---
id: 587d7b7b367417b2b2512b13
title: Копіювання масиву за допомогою оператора розширення
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Хоча `slice()` дозволяє нам вибирати, які елементи масиву копіювати, новий <dfn>оператор розширення</dfn> з ES6 дозволяє легко копіювати *всі* елементи масиву послідовно завдяки простому і читабельному синтаксису. Синтаксис розширення виглядає так: `...`

На практиці ми можемо використати оператор розширення для копіювання масиву:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` дорівнює `[true, true, undefined, false, null]`. `thisArray` залишається без змін, а `thatArray` містить ті ж елементи, що й `thisArray`.

# --instructions--

Ми визначили функцію `copyMachine`, яка приймає `arr` (масив) та `num` (число) як аргументи. Функція повинна повертати новий масив, що складається з `num` копій `arr`. Ми виконали більшу частину роботи за вас, але це поки не працює. Змініть функцію, використовуючи синтаксис розширення, щоб вона працювала правильно (підказка: тут може стати в пригоді інший метод, який ми вже розглядали!).

# --hints--

`copyMachine([true, false, true], 2)` має повернути `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` має повернути `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` має повернути `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` має повернути `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

Функція `copyMachine` повинна використовувати `spread operator` з масивом `arr`

```js
assert(__helpers.removeJSComments(__helpers.removeJSComments(code)).match(/\.\.\.\s*arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
