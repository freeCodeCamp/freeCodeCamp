---
id: 594810f028c0303b75339ad5
title: Y コンビネータ
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

厳密な[関数型プログラミング](https://www.freecodecamp.org/news/the-principles-of-functional-programming/ "news: the principles of functional programming")や[ラムダ計算](https://en.wikipedia.org/wiki/lambda calculus "wp: lambda calculus")では、関数 (ラムダ式) はステートを持たず、関数の引数のみを参照することができます。 これにより、関数は変数の状態と関連し、変数の状態は関数本体で使用されるという通常の再帰関数の定義が排除されます。 [Y コンビネータ](https://mvanier.livejournal.com/2897.html) は、それ自体がステートレス関数であり、他のステートレス関数に適用されると、関数の再帰バージョンを返します。 Yコンビネータは、 [不動点コンビネータ](https://en.wikipedia.org/wiki/Fixed-point combinator "wp: fixed-point combinator")と呼ばれる、このような関数のクラスのうち、最も単純なものです。

# --instructions--

ステートレスな Y コンビネータ関数を定義し、これを使用して、[階乗](https://en.wikipedia.org/wiki/Factorial "wp: factorial")を計算してください。 `factorial(N)` 関数はすでに与えられています。 **以下も参照してください:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>

# --hints--

Yは関数を返す必要があります。

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) は 1 を返す必要があります。

```js
assert.equal(factorial(1), 1);
```

factorial(2) は 2 を返す必要があります。

```js
assert.equal(factorial(2), 2);
```

factorial(3) は 6 を返す必要があります。

```js
assert.equal(factorial(3), 6);
```

factorial(4) は 24 を返す必要があります。

```js
assert.equal(factorial(4), 24);
```

factorial(10) は 3628800 を返す必要があります。

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --after-user-code--

```js
var factorial = Y(f => n => (n > 1 ? n * f(n - 1) : 1));
```

## --seed-contents--

```js
function Y(f) {
  return function() {

  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

# --solutions--

```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));
```
