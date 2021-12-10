---
id: 587d7b7b367417b2b2512b15
title: Ітерація через усі масиви за допомогою циклів
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

Іноді при роботі з масивами дуже зручно мати можливість перебирати кожен елемент, щоб знайти один або кілька елементів, які можуть нам знадобитися, або керувати масивом в залежності від того, які елементи даних відповідають певному набору критеріїв. JavaScript надає різні побудови в методах, що ітерують крізь масиви й надають змогу досягнути певних результатів різними шляхами (such as `every()`, `forEach()`, `map()`, etc.). Однак, ця техніка є гнучкою й більш спроможна до контролю `for` циклу.

Розглянемо наступний приклад:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

Завдяки використанню `for` у циклі, ця функція ітерує й надає доступ до кожного елементу в масиві простого тесту, який ми створили. Таким чином ми легко й автоматично визначаємо елементи дати, що більше, ніж `10`, й повертаємо новий масив, `[12, 14, 80]`, який містить ці елементи.

# --instructions--

Ми встановили функцію, `filteredArray`, яка обирає `arr`, вкладений масив, `elem` як аргументи, й повертає новий масив. `elem` означає елемент, що може не бути присутнім в одному або більше масивах в межах `arr`. Покращте функцію, використовуючи `for` циклу, для повернення відфільтрованої версії переданого масиву, так щоб версію в межах `arr` зі `elem` було прибрано.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` має повернути `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` має повернути `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` має повернути `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` має повернути `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

Функція `filteredArray` повинна використовуватися у циклі `for`

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
