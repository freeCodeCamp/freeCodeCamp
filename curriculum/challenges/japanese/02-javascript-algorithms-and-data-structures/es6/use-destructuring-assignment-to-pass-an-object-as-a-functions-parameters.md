---
id: 587d7b8a367417b2b2512b4d
title: 分割代入を使用してオブジェクトを関数のパラメーターとして渡す
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

場合によっては関数の引数自体にオブジェクトを分割することもできます。

次のコードを考えてみましょう。

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

このように、オブジェクトを分割して関数に渡す効果を得ることができます。 中に記述することもできます。

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

`profileData` が上記の関数に渡されると、関数のパラメーターから値が分割されて、関数内で使用されます。

# --instructions--

`half` 関数の引数内で分割代入を使用して、関数内で `max` と `min` だけを渡してください。

# --hints--

`stats` は `object` である必要があります。

```js
assert(typeof stats === 'object');
```

`half(stats)` は `28.015` である必要があります。

```js
assert(half(stats) === 28.015);
```

分割を使用する必要があります。

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

分割されたパラメーターを使用する必要があります。

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
