---
id: 587d78b2367417b2b2512b0e
title: 使用 push() 和 unshift() 爲數組添加元素
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

數組的長度與數組能包含的數據類型一樣，都是不固定的。 數組可以包含任意數量的元素，可以不限次數地往數組中添加元素或者從中移除元素。 總之，數組是可變的（<dfn>mutable</dfn>）。 在本挑戰中，我們要學習兩種修改數組的方法：`Array.push()` 和 `Array.unshift()`。

這兩個方法都接收一個或多個元素作爲參數，並會將參數中的元素添加到該數組中。 `push()` 方法會將元素插入到數組的末尾，而 `unshift()` 方法會將元素插入到數組的開頭。 請看以下例子：

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` 的值就變成了 `['XIX', 'XX', 'XXI', 'XXII']`。

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` 的值現在就變成了 `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`。 請注意這裏，我們也可以使用變量作爲參數，這讓我們在動態修改數組數據時更加靈活。

# --instructions--

我們已經定義了一個 `mixedNumbers` 函數，它接收一個數組作爲參數。 請修改這個函數，使用 `push()` 和 `unshift()` 來將 `'I', 2, 'three'` 插入到數組開頭；將 `7, 'VIII', 9` 插入到數組的末尾。最終這個函數的返回值就會是一個依次包含不同形式的 1-9 的數組。

# --hints--

`mixedNumbers(["IV", 5, "six"])` 應返回 `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`。

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

`mixedNumbers` 函數中應調用 `push()` 方法。

```js
assert(mixedNumbers.toString().match(/\.push/));
```

`mixedNumbers` 函數中應調用 `unshift()` 方法。

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
