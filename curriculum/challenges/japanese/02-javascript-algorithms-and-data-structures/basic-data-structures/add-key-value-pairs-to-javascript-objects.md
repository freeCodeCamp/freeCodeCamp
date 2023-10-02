---
id: 587d7b7c367417b2b2512b18
title: JavaScript オブジェクトにキーと値のペアを追加する
challengeType: 1
forumTopicId: 301153
dashedName: add-key-value-pairs-to-javascript-objects
---

# --description--

最も基本的なオブジェクトは、<dfn>キーと値</dfn>のペアのみの集合です。 言い換えれば、これは<dfn>プロパティ</dfn> ( <dfn>キー</dfn>) と呼ばれる一意の識別子にマッピングされるデータ (<dfn>値</dfn>) の集まりです。 例を見てみましょう。

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```

上記のコードは、`tekkenCharacter` という鉄拳ビデオゲームキャラクターのオブジェクトを定義しています。 オブジェクトには 3 つのプロパティがあり、それぞれが特定の値にマッピングされています。 "origin" などの新しいプロパティを追加したい場合は、`origin` をオブジェクトに割り当てます。

```js
tekkenCharacter.origin = 'South Korea';
```

これにはドット記法を使用しています。 `tekkenCharacter` オブジェクトを確認すると、`origin` プロパティが追加されたことがわかります。 Hwoarang は特徴的なオレンジ色の髪をしていました。 このプロパティをブラケット記法で追加することができます。

```js
tekkenCharacter['hair color'] = 'dyed orange';
```

プロパティにスペースがある場合や、プロパティに名前を付けるために変数を使用する場合には、ブラケット記法が必要となります。 上記の場合、プロパティを引用符で囲んで文字列として示すことで、表示されているとおりに追加されます。 引用符がなければ、変数として評価され、プロパティの名前は変数の値となります。 次に変数を含む例を示します。

```js
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';
```

すべての例を追加すると、このオブジェクトは次のようになります。

```js
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};
```

# --instructions--

3 つのエントリを持つ `foods` オブジェクトが作成されています。 任意の構文を用いて、このオブジェクトに新たに 3 つのエントリを追加してください。`bananas` の値は `13`、`grapes` の値は `35`、`strawberries` の値は `27` です。

# --hints--

`foods` はオブジェクトである必要があります。

```js
assert(typeof foods === 'object');
```

`foods` オブジェクトには値 `13` を持つキー `bananas` が含まれている必要があります。

```js
assert(foods.bananas === 13);
```

`foods` オブジェクトには値 `35` を持つキー `grapes` が含まれている必要があります。

```js
assert(foods.grapes === 35);
```

`foods` オブジェクトには値 `27` を持つキー `strawberries` が含まれている必要があります。

```js
assert(foods.strawberries === 27);
```

キーと値のペアはドット記法またはブラケット記法を使用して、設定する必要があります。

```js
assert(
  code.search(/bananas:/) === -1 &&
    code.search(/grapes:/) === -1 &&
    code.search(/strawberries:/) === -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods['bananas'] = 13;
foods['grapes']  = 35;
foods['strawberries'] = 27;
```
