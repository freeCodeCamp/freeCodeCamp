---
id: 56533eb9ac21ba0edf2244bf
title: ローカルスコープと関数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
dashedName: local-scope-and-functions
---

# --description--

関数内で宣言された変数や、関数のパラメーターは、<dfn>ローカル</dfn>のスコープを持ちます。 つまり、それらは関数内でのみ参照されます。

次は、`loc` というローカル変数を持つ関数 `myTest` です。

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

`myTest()` 関数の呼び出しでは、コンソールに文字列 `foo` が表示されます。 (`myTest` 関数の外側にある) `console.log(loc)` の行は、エラーをスローします。これは、関数の外側では `loc` が定義されていないためです。

# --instructions--

エディターにある 2 つの `console.log` は動作を確認するのに役立ちます。 コーディングを行いながらコンソールをチェックして、どのような変化が起きるかを確認してください。 `myLocalScope` 内でローカル変数 `myVar` を宣言し、テストを実行してください。

**注:** コンソールには `ReferenceError: myVar is not defined` と表示されますが、これが原因でテストが失敗することはありません。

# --hints--

コードにはグローバルの `myVar` 変数を含めないでください。

```js
function declared() {
  myVar;
}

assert.throws(declared, ReferenceError);
```

ローカルの `myVar` 変数を追加する必要があります。

```js
assert(
  /functionmyLocalScope\(\)\{.*(var|let|const)myVar[\s\S]*}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

# --seed--

## --seed-contents--

```js
function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```

# --solutions--

```js
function myLocalScope() {
  // Only change code below this line
  let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
