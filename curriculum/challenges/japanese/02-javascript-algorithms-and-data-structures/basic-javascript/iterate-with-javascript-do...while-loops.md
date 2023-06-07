---
id: 5a2efd662fb457916e1fe604
title: JavaScript の do...while ループによる繰り返し処理
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

次に学ぶループ処理のタイプは `do...while` ループと呼ばれるものです。 この処理が `do...while` ループと呼ばれるのは、最初にループ内のコードが無条件に 1 回実行 (`do`) され、その後、指定された条件が `true` と評価される間ずっと (`while`)、ループ処理が実行され続けるからです。

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

上記の例も他のタイプのループと同様の処理を行い、配列の結果は `[0, 1, 2, 3, 4]` のようになります。 しかし、`do...while` は他のループとは違って、最初の評価で条件を満たさない場合の動作が異なります。 これを実際の例で見ていきましょう。 下記は `i < 5` である限りループ処理を実行する通常の `while` ループです。

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

この例では、`ourArray` の値を空の配列に初期化し、`i` の値を 5 に初期化しています。 この `while` ループを実行すると、`i` が 5 未満ではないため、条件の評価が `false` となり、ループ内のコードは実行されません。 その結果、`ourArray` には何も値が追加されません。上記の例のコードの実行がすべて完了しても `[]` のままです。 次に、`do...while` ループを見てみましょう。

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

この例でも、`while` ループの場合と同じように、`i` の値を 5 に初期化しています。 次の行に進むと、評価すべき条件がないため、中括弧内のコードに進み、そのコードを実行します。 そこでは配列に要素を 1つ追加し、`i` をインクリメントしてから、条件の評価に移ります。 最後の行で最終的に条件 `i < 5` を評価するときは、`i` は 6 になっていて、条件を満たさないため、ループを抜けて終了します。 上記の例の最後では、`ourArray` の値は `[5]` になっています。 `do...while` ループはその性質上、ループ内のコードを少なくとも 1 回は必ず実行します。 `do...while` ループを利用して配列に値を push してみましょう。

# --instructions--

コードの `while` ループを `do...while` ループに変更して、`myArray` に値 `10` だけを push し、コードの実行終了時に `i` が `11` に等しくなるようなループ処理を行ってください。

# --hints--

この課題には `do...while` ループを使用してください。

```js
assert(code.match(/do/g));
```

`myArray` は `[10]` に等しくなる必要があります。

```js
assert.deepEqual(myArray, [10]);
```

`i` は `11` に等しくなる必要があります。

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
