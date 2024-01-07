---
id: 587d7b8c367417b2b2512b56
title: export を使用してコードブロックを共有する
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

算術演算に関わる関数をいくつか含む `math_functions.js` というファイルがあるとします。 それらの関数の 1 つは変数 `add` に格納されています。この関数は、2 つの数字を受け取り、その和を返します。 この関数を、複数の別の JavaScript ファイルで使用したいとします。 関数をそれらの他のファイルと共有するには、まず `export` (エクスポート) する必要があります。

```js
export const add = (x, y) => {
  return x + y;
}
```

上記は単一の関数をエクスポートする一般的な方法ですが、次のようにしても同じことができます。

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

変数や関数をエクスポートすると、それを別のファイルに import (インポート) して使用でき、コードを記述し直す必要がなくなります。 複数をエクスポートする場合は、次のように、エクスポートしたいものそれぞれについて 1 番目の例と同じことを繰り返すか、または 2 番目の例の export ステートメントにそれらを記述します。

```js
export { add, subtract };
```

# --instructions--

エディターに、 文字列に関連した関数が 2 つあります。 好きなメソッドを使用してこれら 2 つの関数の両方をエクスポートしてください。

# --hints--

`uppercaseString` を正しくエクスポートする必要があります。

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

`lowercaseString` を正しくエクスポートする必要があります。

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
