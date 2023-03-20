---
id: 587d7b88367417b2b2512b47
title: 関数パラメーターで残余引数を使用する
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

より柔軟な関数を作成できるように、ES6 では関数パラメーターに<dfn>残余引数</dfn>が導入されています。 残余引数を使用すると、可変個の引数を取る関数を作成できます。 これらの引数は配列に格納され、後で関数内からアクセスできます。

次のコードをご覧ください。

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

コンソールには、文字列 `You have passed 3 arguments.` と `You have passed 4 arguments.` が表示されます。

The rest parameter eliminates the need to use the `arguments` object and allows us to use array methods on the array of parameters passed to the function `howMany`.

# --instructions--

残余引数を使用して関数 `sum` を変更し、関数 `sum` が任意の数の引数を受け取ってその和を返せるようにしてください。

# --hints--

`sum(0,1,2)` の結果は 3 になる必要があります。

```js
assert(sum(0, 1, 2) === 3);
```

`sum(1,2,3,4)`の結果 は 10 になる必要があります。

```js
assert(sum(1, 2, 3, 4) === 10);
```

`sum(5)` の結果は 5 になる必要があります。

```js
assert(sum(5) === 5);
```

`sum()` の結果は 0 になる必要があります。

```js
assert(sum() === 0);
```

`sum` は、`args` パラメーターで残余引数の構文 (`...`) を使用するアロー関数にする必要があります。

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
