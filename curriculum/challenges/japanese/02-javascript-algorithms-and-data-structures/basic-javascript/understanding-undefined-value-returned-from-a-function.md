---
id: 598e8944f009e646fc236146
title: 関数から返される undefined 値を理解する
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

関数には `return` ステートメントを含めることができますが、必須ではありません。 関数に `return` ステートメントがない場合、関数は呼び出されたときに内部のコードを処理しますが、戻り値は `undefined` になります。

**例**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` は、`return` ステートメントを持たない関数です。 関数はグローバル変数の `sum` を変更しますが、関数の戻り値は `undefined` です。

# --instructions--

引数を持たない関数 `addFive` を作成してください。 この関数は `sum` 変数に 5 を足しますが、戻り値は `undefined` です。

# --hints--

`addFive` は関数である必要があります。

```js
assert(typeof addFive === 'function');
```

両方の関数の実行後に、`sum` は `8` と等しくなる必要があります。

```js
assert(sum === 8);
```

`addFive` の戻り値は `undefined` となる必要があります。

```js
assert(addFive() === undefined);
```

`addFive` 関数の内部で、`sum` 変数に `5` を足す必要があります。

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
