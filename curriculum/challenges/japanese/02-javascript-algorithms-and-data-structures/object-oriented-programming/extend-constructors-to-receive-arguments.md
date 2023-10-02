---
id: 587d7dae367417b2b2512b79
title: 引数を受け取るためにコンストラクターを拡張する
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

前回のチャレンジの `Bird` と `Dog` のコンストラクターは問題なく動作しました。 ただし、`Bird` コンストラクターで作成される `Birds` はすべて、自動的に Albert という名前になり、青い色で、2 本の脚を持つことになります。 もし名前や色の値が違う鳥が必要になったらどうすればよいでしょうか？ それぞれの鳥についてプロパティを手動で変更することは可能ですが、それは大変な作業になります。

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

鳥小屋にいる何百、何千種類もの鳥を記録するプログラムを作成しているとしましょう。 すべての鳥を作成して、それぞれの鳥のプロパティを異なる値に変更するのには膨大な時間がかかります。 もっと簡単に種類の異なる `Bird` オブジェクトを作成できるように、Bird コンストラクターでパラメーターを受け取るように設計することができます。

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

そして、それぞれの固有の鳥を定義する引数の値を `Bird` コンストラクターに渡します。たとえば、`let cardinal = new Bird("Bruce", "red");` などとします。このようにすると、`name` プロパティと `color` プロパティがそれぞれ `Bruce` と `red` に設定された `Bird` の新しいインスタンスが生成されます。 `numLegs` プロパティは引き続き 2 に設定されます。 `cardinal` は次のプロパティを持ちます。

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

コンストラクターの柔軟性が高まり、 作成時にそれぞれの `Bird` のプロパティを定義できるようになりました。これは JavaScript コンストラクターのとても便利な用法の一つです。 コンストラクターによって、共通の特徴や動作に基づいてオブジェクトをグループ化し、作成を自動化する青写真を定義できます。

# --instructions--

別の `Dog` コンストラクターを作成してください。 今回は、パラメーター `name` と `color` を受け取るように記述し、プロパティ `numLegs` は 4 に固定してください。 次に、新しい `Dog` を作成して変数 `terrier` に保存してください。 `name` プロパティと `color` プロパティの引数として 2 つの文字列を渡してください。

# --hints--

`Dog` は `name` の引数を受け取る必要があります。

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` は `color` の引数を受け取る必要があります。

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` のプロパティ `numLegs` を 4 に設定する必要があります。

```js
assert(new Dog('Clifford').numLegs === 4);
```

`Dog` コンストラクターを使用して `terrier` を作成する必要があります。

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
