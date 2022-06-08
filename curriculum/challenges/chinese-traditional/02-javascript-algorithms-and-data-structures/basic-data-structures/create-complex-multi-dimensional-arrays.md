---
id: 587d7b7b367417b2b2512b16
title: 創建複雜的多維數組
challengeType: 1
forumTopicId: 301159
dashedName: create-complex-multi-dimensional-arrays
---

# --description--

很好！ 你現在已經學到很多關於數組的知識了， 但這些只是個開始。我們將在接下來的中挑戰中學到更多與數組相關的知識。 但在繼續查看 <dfn>對象</dfn> 之前，讓我們再看一下，看看數組如何變得比我們在之前的挑戰中看到的更復雜一些。

數組的一個強大的特性是，它可以包含其他數組，甚至完全由其他數組組成。 在上一個挑戰中，我們已經接觸到了包含數組的數組，但它還算是比較簡單的。 數組中的數組還可以再包含其他數組，即可以嵌套任意多層數組。 通過這種方式，數組可以很快成爲非常複雜的數據結構，稱爲<dfn>多維（multi-dimensional）</dfn>數組，或嵌套（nested）數組。 請看如下的示例：

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

`deep` 數組已嵌套 2 層。 `deeper` 數組嵌套了 3 層。 `deepest` 數組嵌套了 3 層， `deepest-est?` 嵌套了 5 層。

雖然這個例子看起來錯綜複雜，不過，尤其是在處理大量數據的時候，這種數據結構還是會用到的。 儘管結構複雜，不過我們仍可以通過方括號表示法來訪問嵌套得最深的數組：

```js
console.log(nestedArray[2][1][0][0][0]);
```

控制檯打印的是字符串 `deepest-est?`。 既然我們知道數據的位置，當然，我們也可以修改它：

```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

現在控制檯打印的是 `deeper still`。

# --instructions--

我們已經定義了一個叫做 `myNestedArray` 的數組變量。 請修改 `myNestedArray`，使用字符串（<dfn>string</dfn>）、數字（<dfn>number</dfn>）或布爾值（<dfn>boolean</dfn>）的任意組合作爲數組的元素，並讓 myNestedArray 剛好有 5 層（注意，最外層的數組是第 1 層）。 同時，請在第 3 層的數組中包含字符串 `deep`；在第 4 層的數組中包含字符串 `deeper`，在第 5 層的數組中包含字符串 `deepest`。

# --hints--

`myNestedArray` 中的數據元素應只包含字符串、數字或者布爾值。

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

`myNestedArray` 應剛好包含 5 層嵌套數組。

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

`myNestedArray` 中應只有一個字符串 `deep`，並且應出現在第 3 層數組中。

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

`myNestedArray` 中應只有一個字符串 `deeper`，並且應出現在第 4 層數組中。

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

`myNestedArray` 中應只有一個字符串 `deepest`，並且應出現在第 5 層數組中。

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
