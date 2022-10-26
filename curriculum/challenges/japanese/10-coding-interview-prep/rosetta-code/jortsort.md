---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSortは、ユーザーがソート作業に使用するソート用ツールセットで、ソート作業をやり直さずにすむよう効率性を保証します。 It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious JSConf2014.

jortSort は、比較可能なオブジェクトの単一の配列を引数として取る関数とします。 その後、配列を昇順にソートし、ソートされた配列を元の配列と比較します。 配列が一致する (つまり、元の配列がすでにソートされていた) 場合、関数は true を返します。 配列が一致しない (つまり、元の配列がソートされていなかった) 場合、関数は false を返します。

# --hints--

`jortsort` は関数とします。

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` はブール値を返す必要があります。

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` は `true` を返す必要があります。

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` は `false` を返す必要があります。

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` は `false` を返す必要があります。

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` は `true` を返す必要があります。

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` は `false` を返す必要があります。

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` は `true` を返す必要があります。

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```
