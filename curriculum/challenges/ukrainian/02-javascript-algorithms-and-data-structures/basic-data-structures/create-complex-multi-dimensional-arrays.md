---
id: 587d7b7b367417b2b2512b16
title: Створення комплексних багатовимірних масивів
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

Чудово! Ви дізналися багато нового про масиви! Це був досить загальний огляд, і є ще багато чого, що потрібно дізнатися про роботу з масивами, багато чого ви побачите в наступних розділах. Але перш ніж перейти до розгляду <dfn>об’єктів</dfn>, давайте ще раз глянемо, яким чином масиви можуть стати дещо складнішими за ті, які ми бачили в попередніх завданнях.

Одна з найпотужніших функцій при розгляді масивів як структур даних полягає в тому, що масиви можуть містити або навіть повністю складатися з інших масивів. У попередніх завданнях ми бачили масиви, які містять масиви, але досить прості. Однак масиви можуть містити нескінченну глибину масивів, які можуть містити інші масиви, кожен зі своїми довільними рівнями глибини і так далі. Таким чином, масив може дуже швидко перетворитися в дуже складну структуру даних, відому як <dfn>багатовимірний</dfn> або вкладений масив. Розглянемо приклад:

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

Масив `deep` вкладений на глибину другого рівня. Масиви `deeper` мають глибину третього рівня. Масиви `deepest` мають четвертий рівень, а `deepest-est?` — п’ятий.

Хоча цей приклад може здатися заплутаним, такий рівень складності не є чимось незвичним або навіть незвичайним при роботі з великими обсягами даних. Проте ми досі можемо дуже легко отримати доступ до найглибших рівнів масиву цього складного масиву за допомогою дужкової нотації:

```js
console.log(nestedArray[2][1][0][0][0]);
```

Це виводить рядок `deepest-est?`. І тепер, коли ми знаємо, де знаходиться цей фрагмент даних, його можна скинути, якщо потрібно:

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Тепер він виводить `deeper still`.

# --instructions--

Ми визначили змінну `myNestedArray`, що дорівнює масиву. Змініть `myNestedArray`, використовуючи будь-яку комбінацію <dfn>рядків</dfn>, <dfn>чисел</dfn> і <dfn>булевих значень</dfn> для елементів даних так, щоб масив мав п’ять рівнів глибини (пам’ятайте, зовнішній масив — це рівень 1). Десь на третьому рівні додайте рядок `deep`, на четвертому рівні додайте рядок `deeper` та на п’ятому рівні додайте рядок `deepest`.

# --hints--

`myNestedArray` повинен містити лише числа, булеві значення та рядки як елементи даних

```js
assert.strictEqual(
  (function (arr) {
    let flattened = (function flatten(arr) {
      const flat = [].concat(...arr);
      return flat.some(Array.isArray) ? flatten(flat) : flat;
    })(arr);
    for (let i = 0; i < flattened.length; i++) {
      if (
        typeof flattened[i] !== 'number' &&
        typeof flattened[i] !== 'string' &&
        typeof flattened[i] !== 'boolean'
      ) {
        return false;
      }
    }
    return true;
  })(myNestedArray),
  true
);
```

`myNestedArray` повинен містити рівно п’ять рівнів глибини

```js
assert.strictEqual(
  (function (arr) {
    let depth = 0;
    function arrayDepth(array, i, d) {
      if (Array.isArray(array[i])) {
        arrayDepth(array[i], 0, d + 1);
      } else {
        depth = d > depth ? d : depth;
      }
      if (i < array.length) {
        arrayDepth(array, i + 1, d);
      }
    }
    arrayDepth(arr, 0, 0);
    return depth;
  })(myNestedArray),
  4
);
```

`myNestedArray` повинен мати один рядок `deep` в масиві третього рівня глибини

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deep').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deep')[0] === 2
);
```

`myNestedArray` повинен мати один рядок `deeper` в масиві четвертого рівня глибини

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deeper').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deeper')[0] === 3
);
```

`myNestedArray` повинен мати один рядок `deepest` в масиві п’ятого рівня глибини

```js
assert(
  (function howDeep(array, target, depth = 0) {
    return array.reduce((combined, current) => {
      if (Array.isArray(current)) {
        return combined.concat(howDeep(current, target, depth + 1));
      } else if (current === target) {
        return combined.concat(depth);
      } else {
        return combined;
      }
    }, []);
  })(myNestedArray, 'deepest').length === 1 &&
    (function howDeep(array, target, depth = 0) {
      return array.reduce((combined, current) => {
        if (Array.isArray(current)) {
          return combined.concat(howDeep(current, target, depth + 1));
        } else if (current === target) {
          return combined.concat(depth);
        } else {
          return combined;
        }
      }, []);
    })(myNestedArray, 'deepest')[0] === 4
);
```

# --seed--

## --seed-contents--

```js
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];
```

# --solutions--

```js
let myNestedArray = [
  ['unshift', ['deep', ['deeper', ['deepest']]],false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
```
