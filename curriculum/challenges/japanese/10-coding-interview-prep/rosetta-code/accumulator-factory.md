---
id: 594810f028c0303b75339ace
title: アキュムレータ・ファクトリ
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. 返されたアキュムレータ関数は、1つの数値引数を取り、これまでにアキュムレータに渡されたすべての数値の合計 (アキュムレータが作成されたときに渡された初期値を含む) を返します。

# --instructions--

数 $n$ を取って、渡されたすべての数値の合計を返すアキュムレータ関数を生成する関数を作成します。

**ルール:**

グローバル変数を使用しないでください。

**ヒント:**

クロージャは外的な状態を保存します。

# --hints--

`accumulator` という関数です。

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` は関数を返します。

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` は数字を返します。

```js
assert(typeof accumulator(0)(2) === 'number');
```

3、-4、1.5、5の値が渡されると、5.5を返します。

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
