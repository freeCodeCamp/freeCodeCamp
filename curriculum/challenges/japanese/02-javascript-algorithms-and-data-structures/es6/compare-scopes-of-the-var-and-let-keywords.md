---
id: 587d7b87367417b2b2512b40
title: var キーワードと let キーワードのスコープを比較する
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

`let` に不慣れな場合は、<a href="/japanese/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow"><code>let</code> と <code>var</code> の違いに関するこちらのチャレンジ</a>をご覧ください。

`var` キーワードを付けて変数を宣言すると、グローバルに宣言されるか、または関数内で宣言された場合はローカルに宣言されます。

`let` キーワードの動作も似ていますが、いくつか追加の機能があります。 ブロック、ステートメント、または式の中で `let` キーワードを付けて変数を宣言すると、変数のスコープがそのブロック、ステートメント、または式に限定されます。

例:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

ここでは、コンソールに値 `[0, 1, 2]` と `3` が表示されます。

`var` キーワードでは、`i` はグローバルに宣言されます。 そのため、`i++` を実行するとグローバル変数が更新されます。 このコードは次のコードと同様です。

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

ここでも、コンソールに値 `[0, 1, 2]` と `3` が表示されます。

`i` 変数を使用している `for` ループの中で関数を作成し、後で使用できるように保存した場合には、この動作が問題を起こします。 これは、変数を保存した関数からは、更新されたグローバルの `i` 変数の値が常に参照されるためです。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

ここでは、コンソールに値 `3` が表示されます。

ご覧のように、`printNumTwo()` は 2 ではなく 3 を出力します。 これは、`i` に代入された値が更新されて、`printNumTwo()` が、for ループで関数を作成したときに与えられた値 `i` ではなく、グローバルの `i` を返すからです。 `let` キーワードの場合はこうした動作に従いません。

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

ここでは、コンソールに値 `2` が表示され、エラー `i is not defined` が表示されます。

`i` はグローバルスコープで宣言されていないため、定義されていません。 `for` ループステートメントの中で宣言されているだけです。 `printNumTwo()`は正しい値を返しました。これは、ループステートメント内で `let` キーワードによって、独自の値 (0、1、および 2) を持つ 3 つの異なる `i` 変数が作成されたからです。

# --instructions--

`if` ステートメント内で宣言された `i` が、関数の最初の行で宣言された `i` とは別の変数になるように、コードを修正してください。 コードではどの場所でもキーワード `var` を使用しないでください。

この練習の目的は、`var` キーワードと `let` キーワードで、宣言された変数に割り当てられるスコープの違いを理解することです。 この練習で使用しているような関数をプログラミングする場合は、通常は混同を避けるために異なる変数名を使用することをお勧めします。

# --hints--

`var` をコードに入れてはいけません。

```js
assert(!code.match(/var/g));
```

`if` ステートメント内で宣言された変数 `i` は、文字列 `block scope` になる必要があります。

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` は、文字列 `function scope` を返す必要があります。

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
