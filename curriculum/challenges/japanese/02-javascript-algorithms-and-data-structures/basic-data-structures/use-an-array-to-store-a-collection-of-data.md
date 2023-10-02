---
id: 587d7b7e367417b2b2512b20
title: 配列によって複数のデータをまとめて格納する
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

以下は、配列データ構造の最も簡単な実装例です。 このような配列を <dfn>1 次元配列</dfn>と呼びます。つまり、1 つの階層しか持たない、あるいは内部にネストされた他の配列がない配列です。 <dfn>ブール値</dfn>、<dfn>文字列</dfn>、<dfn>数値</dfn>など、JavaScript の有効な他のデータ型が含まれていることに注意してください。

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

この `console.log` は `7` を表示します。

すべての配列には上記のような length プロパティがあり、`Array.length` という構文で非常に簡単にアクセスできます。 もっと複雑な配列の実装例を以下に示します。 こうした配列を<dfn>多次元配列</dfn>と呼びます。つまり、他の配列を含む配列です。 この配列には JavaScript の<dfn>オブジェクト</dfn>も含まれていることに注意してください。オブジェクトについては次のセクションで詳しく説明します。 しかしここでは、配列は複雑なオブジェクトも格納できるということだけを知っておいてください。

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

`yourArray` という変数を定義しました。 `yourArray` 変数に、要素数 length が 5 以上の配列を割り当てて、記述を完成させてください。 配列には<dfn>文字列</dfn>、<dfn>数値</dfn>、<dfn>ブール値</dfn>をそれぞれ 1 つ以上含める必要があります。

# --hints--

`yourArray` は配列である必要があります。

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` の要素数は 5 以上である必要があります。

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` には少なくとも 1 つの `boolean` を含める必要があります。

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` には少なくとも 1 つの `number` を含める必要があります。

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` には少なくとも 1 つの `string` を含める必要があります。

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
