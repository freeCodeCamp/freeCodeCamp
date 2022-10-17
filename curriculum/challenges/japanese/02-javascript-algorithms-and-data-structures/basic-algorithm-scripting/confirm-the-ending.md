---
id: acda2fb1324d9b0fa741e6b5
title: 末尾の一致判定
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

文字列 (最初の引数、`str`) が与えられたターゲット文字列 (2 番目の引数、`target`) で終わるかどうかを確認してください。

このチャレンジは ES2015 で導入された `.endsWith()` メソッドを使用すれば*解決できます*。 しかし、ここでは代わりに JavaScript の substring メソッドを使用してください。

# --hints--

`confirmEnding("Bastian", "n")` は `true` を返す必要があります。

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")`は `true` を返す必要があります。

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` は `false` を返す必要があります。

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` は `false` を返す必要があります。

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` は `true` を返す必要があります。

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` は `true` を返す必要があります。

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` は `false` を返す必要があります。

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` は `false` を返す必要があります。

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` は `false` を返す必要があります。

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` は `true` を返す必要があります。

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

このチャレンジを解決するプログラムでは、組み込みメソッド `.endsWith()` を使用しないでください。

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
