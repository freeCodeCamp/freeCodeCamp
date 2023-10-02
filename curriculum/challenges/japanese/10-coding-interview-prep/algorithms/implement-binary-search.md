---
id: 61abc7ebf3029b56226de5b6
title: 二分探索を実装する
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

二分探索はソートされた配列内で要素を検索するアルゴリズムで、その時間計算量は **O(log(n))** です。 次のように演算が行われます。

1. ソートされた配列内の中央の `value` (値) を探します。 If `value == target` return `true` (The value has been found and the search is complete).
1. 中央の `value < target` であれば、次の比較で配列の右半分を検索します。
1. 中央の `value > target` であれば、次の比較で配列の左半分を検索します。
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

このように配列を連続的に半減させており、時間計算量は log(n) になります。 このチャレンジでは、あなたがどのような経路をたどって目標値に到達したかを提示していただきます。

# --instructions--

二分探索アルゴリズムを配列に実装し、配列内で目標値を見つけるためにたどった経路 (各回の中間値比較) を返すような関数 `binarySearch` を記述してください。

この関数は、ソートされた整数配列と目標値を入力として取ります。 そして目標値を見つけるまで、元の配列の各 2 分割で見つけた中間値が含まれる配列を返します (通りがけ順)。 目標値は、返される配列の最後の要素でなければなりません。 If the value is not found, return the string `Value Not Found`.

例えば、`binarySearch([1,2,3,4,5,6,7], 5)` は `[4,6,5]` を返します。

このチャレンジでは、2 分割する際、除算に `Math.floor()` を必ず使用して `Math.floor(x/2)` としなければなりません。 これにより、一貫性のある検証可能な経路が得られます。

**注:** 検証では以下の配列が使用されます。

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` は関数でなければなりません。

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` は `[13, 5, 2, 0]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` は `[13, 5, 2, 0, 1]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` は `[13, 5, 2]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` は文字列 `Value Not Found` を返す必要があります。

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` は `[13, 5, 10, 11]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` は `[13]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` は `[13, 19, 22, 49, 70]` を返す必要があります。

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
