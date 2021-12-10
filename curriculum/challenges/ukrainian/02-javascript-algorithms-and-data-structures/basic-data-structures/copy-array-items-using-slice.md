---
id: 587d7b7a367417b2b2512b12
title: Скопіювати елементи масиву використовуючи slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

Наступний метод, який ми розглянемо це `slice()`. Замість зміни масиву `slice()` копіює або *extracts* задану кількість елементів в новий масив, залишаючи масив, для якого він викликається, незмінним. `slice()`приймає лише 2 параметри: перший - це індекс, з якого починається вибірка, а другий - індекс, за яким вибірка припиняється (вибірка відбуватиметься, але не включаючи елемент у цьому індексі). Врахуйте це:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` матиме значення `['snow', 'sleet']`, хоча `weatherConditions` як і раніше буде мати `['rain', 'snow', 'sleet', 'hail', 'clear']`.

Фактично, ми створили новий масив, вибираючи елементи з масиву, який вже існує.

# --instructions--

Ми визначили функцію `forecast`, яка приймає масив як аргумент. Змініть функцію за допомогою `slice()`, щоб вибрати інформацію з масиву аргументів і повернути новий масив, що містить елементи рядка `warm` і `sunny`.

# --hints--

`forecast` повинна повернути `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

Функція `forecast` повинна використовувати `slice()` метод

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
