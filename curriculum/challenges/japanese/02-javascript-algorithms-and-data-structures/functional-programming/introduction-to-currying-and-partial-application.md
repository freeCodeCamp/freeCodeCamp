---
id: 587d7dab367417b2b2512b70
title: カリー化と部分適用について
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

関数が必要とする引数の数のことを、関数の<dfn>アリティ</dfn>と呼びます。 アリティが N の 1 個の関数を、アリティが 1 の N 個の関数に変換することを、関数の<dfn>カリー化</dfn>と呼びます。

言い換えれば、1 つの引数を取るように関数を再構築して、次の引数を取る別の関数を返し、その別の関数でも同様の操作をします。

例を示します。

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` は `3` を返します。

これはプログラムにおいて、関数に対して一度にすべての引数を与えることができない場合に便利です。 それぞれの関数呼び出しを変数に保存しておき、返された関数参照を変数に保持して、次の引数が利用可能になった時点でその引数を受け取るようにすることができます。 前の例のカリー化した関数の使用例を次に示します。

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

同様に、一度にいくつかの引数を 1 つの関数に適用し、より多くの引数を適用する別の関数を返すことを、<dfn>部分適用</dfn>と呼びます。 例を示します。

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

カリー化を使用してパラメーター `x`、`y`、`z` を加算するように、`add` 関数の本体を記述してください。

# --hints--

`add(10)(20)(30)` は `60` を返す必要があります。

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` は `6` を返す必要があります。

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` は `66` を返す必要があります。

```js
assert(add(11)(22)(33) === 66);
```

コードの最後には、`x + y + z` を返すステートメントを含める必要があります。

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
