---
id: 5a23c84252665b21eecc8014
title: Стабільне сортування
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

При сортуванні записів в таблиці за певним стовпцем або полем, <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">стабільне сортування</a> завжди зберігатиме відносний порядок записів з однаковим ключем.

Наприклад, у цій таблиці країн та міст стабільне сортування в **другому** стовпці (міста) розташує Бірмінгем в США над Бірмінгемом в Англії. (Хоча в цьому випадку нестабільне сортування *може* розташувати Бірмінгем в США над Бірмінгемом в Англії, стабільне сортування це *гарантує*).

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

Аналогічним чином стабільне сортування лише першої колонки призведе до розташування «UK London» першим елементом, а «US Birmingham» — останнім (оскільки враховується порядок елементів, що мають одне і те ж перше слово: «UK» або «US»).

# --instructions--

Напишіть функцію, яка приймає 2D-масив як параметр. Кожен елемент містить 2 елементи, як в прикладі вище. Функція має відсортувати масив, як згадувалося раніше, і повернути відсортований масив.

# --hints--

`stableSort` має бути функцією.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` має повернути масив.

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` має повернути `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`.

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` має повернути `[[2, 2], [1, 2], [1, 4], [1, 5]]`.

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` має повернути `[[12, 45], [11, 45], [32, 45], [11, 55]]`.

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` має повернути `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`.

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` має повернути `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`.

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
