---
id: 587d7b88367417b2b2512b44
title: パラメーターのあるアロー関数を記述する
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

通常の関数と同様に、アロー関数にも引数を渡すことができます。

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` は値 `8` を返します。

アロー関数のパラメーターが 1 つしかない場合は、パラメーターを囲む丸括弧を省略してもかまいません。

```js
const doubler = item => item * 2;
```

複数の引数をアロー関数に渡すこともできます。

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` は値 `8` を返します。

# --instructions--

`arr2` の内容を `arr1` の末尾に追加する `myConcat` 関数を書き換えて、アロー関数の構文を使用してください。

# --hints--

`var` キーワードを置き換える必要があります。

```js
assert.notMatch(code, /var/g);
```

`myConcat` は (`const` を使用して宣言した) 定数変数である必要があります。

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` は、2 つのパラメーターを持つアロー関数にする必要があります。

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` は `[1, 2, 3, 4, 5]` を返す必要があります。

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

`function` キーワードは使用しないでください。

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
