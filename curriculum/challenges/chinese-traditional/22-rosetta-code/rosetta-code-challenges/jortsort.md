---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort is a sorting toolset that makes the user do the work and guarantees efficiency because you don't have to sort ever again. It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious JSConf2014.

jortSort是一個函數，它將一個可比較對象數組作爲其參數。 然後它按升序對數組進行排序，並將排序後的數組與最初提供的數組進行比較。 如果數組匹配（即原始數組已經排序），則該函數返回true。 如果數組不匹配（即原始數組未排序），則該函數返回false。

# --hints--

`jortsort` should be a function.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` should return a boolean.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` should return `true`.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` should return `false`.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` should return `false`.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` should return `true`.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` should return `false`.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` should return `true`.

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
