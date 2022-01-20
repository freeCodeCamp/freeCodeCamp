---
id: 587d7b8a367417b2b2512b4f
title: オブジェクトプロパティの省略形を使用して簡潔なオブジェクトリテラル宣言を記述する
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 では、オブジェクトリテラルを簡単に定義できるように、便利なサポートが提供されるようになりました。

次のコードを考えてみましょう。

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` は、2 つのプロパティを含むオブジェクトを返すシンプルな関数です。 ES6 では、`x: x` を記述するという冗長さをなくすために、構文糖が導入されました。 `x` を一度書けば、あとは自動的に `x: x` (または同等のコード) に変換されます。 新しい構文を使用して書き換えた上記と同じ関数は次のようになります。

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

オブジェクトプロパティの省略形とオブジェクトリテラルを使用して、`name`、`age`、`gender` の各プロパティを持つオブジェクトを作成して返してください。

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` は `{name: "Zodiac Hasbro", age: 56, gender: "male"}` を返す必要があります。

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

コードでは `key:value` の形式を使用しないでください。

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
