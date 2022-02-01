---
id: 5675e877dbd60be8ad28edc6
title: for ループによる配列の繰り返し処理
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

JavaScript では配列の内容を繰り返し処理する作業をよく行います。 その方法の一つとして `for` ループを使用できます。 次のコードは、配列 `arr` の各要素をコンソールに出力します。

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

配列は 0 から始まるインデックスを持つことに注意してください。つまり、配列の最後のインデックスは `length - 1` になります。 このループ処理の条件は `i < arr.length` となっていて、`i` が `length` に等しくなるとループ処理を終了します。 この例では、最後の繰り返しは `i === 4` です。つまり、`i` が `arr.length - 1` に等しくなり、コンソールに `6` を出力します。 その後、`i` が加算されて `5` になると、`i < arr.length` が `false` となるため、ループ処理は終了します。

# --instructions--

変数 `total` を宣言し、`0` に初期化してください。 `for` ループを使用して、`myArr` 配列の各要素の値を `total` に追加してください。

# --hints--

`total` を宣言し、0 に初期化する必要があります。

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` は 20 と等しくなる必要があります。

```js
assert(total === 20);
```

`for` ループを使用して、`myArr` の繰り返し処理を行う必要があります。

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

値 20 を直接 `total` に代入しないでください。

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
