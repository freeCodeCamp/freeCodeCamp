---
id: 587d8251367417b2b2512c61
title: リンクリスト内のノードを操作する
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

コンピュータサイエンスの世界でよく目にするもう一つのデータ構造は、<dfn>リンクリスト</dfn>です。 リンクリストは「ノード」と呼ばれるデータ要素の線形コレクションであり、それぞれが次の要素を指しています。 リンクリスト内の各<dfn>ノード</dfn>には重要な情報が 2 つ含まれています。それは、`element` そのものと、次の `node` への参照です。

あなたがコンガラインの中にいるのを想像してみてください。 あなたはラインの中で自分のすぐ前の人に手を置き、後ろの人はあなたに手を置いています。 前の人はあなたの正面にいますが、その人が視界を遮るため、もっと前にいる人たちがあなたからは見えません。 ノードはコンガラインの人と同じようなものです。自分のことを知っていて、目の前にいる人だけを見ています。その人の前や自分の後ろにいる、他の人たちの存在には気付きません。

# --instructions--

コードエディターに、`Kitten` と `Puppy` という 2 つのノードが既に作成され、`Kitten` ノードが `Puppy` ノードに手動で接続されています。

`Cat` と `Dog` ノードを作成し、それらを手動でラインに追加してください。

# --hints--

`Puppy` ノードは `Cat` ノードへの参照を持つ必要があります。

```js
assert(Puppy.next.element === 'Cat');
```

`Cat` ノードは `Dog` ノードへの参照を持つ必要があります。

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
```

# --solutions--

```js
// solution required
```
