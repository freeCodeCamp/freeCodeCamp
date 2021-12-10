---
id: 587d7b7b367417b2b2512b13
title: Скопіюйте масив з Spread-оператором
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Хоча `slice()` дозволяє нам вибирати, які елементи масиву копіювати, серед кількох інших корисних завдань, новий <dfn>spread-оператор</dfn> ES6 дозволяє нам легко копіювати *all* елементи масиву, по порядку, з простим і дуже читабельним синтаксисом. Spread синтаксис виглядає так: `...`

На практиці ми можемо використати spread-оператор для копіювання масиву таким чином:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` дорівнює `[true, true, undefined, false, null]`. `thisArray` залишається без змін і `thatArray` містить ті ж елементи, що й `thisArray`.

# --instructions--

Ми визначили функцію, `copyMachine`, яка приймає `arr` (масив) та `num` (номер) як аргументи. Функція повинна повертати новий масив, що складається з `num` копій `arr`. Ми виконали більшу частину роботи за вас, але це поки не працює. Змініть функцію, використовуючи spread синтаксис, щоб вона працювала правильно (підказка: тут може стати в нагоді інший метод, який ми вже розглядали!).

# --hints--

`copyMachine([true, false, true], 2)` повинна повернути `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` повинна повернути `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` повинна повернути `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` повинна повернути `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

Функція `copyMachine` повинна використовувати `spread operator` з масивом `arr`

```js
assert(code.match(/\.\.\.arr/));
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
