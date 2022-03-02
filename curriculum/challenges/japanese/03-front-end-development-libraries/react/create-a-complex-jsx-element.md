---
id: 5a24bbe0dba28a8d3cbd4c5d
title: 複雑な JSX 要素を作成する
challengeType: 6
forumTopicId: 301382
dashedName: create-a-complex-jsx-element
---

# --description--

前回のチャレンジは JSX の単純な例でしたが、もっと複雑な HTML を JSX で表現することもできます。

ネストされた JSX について一つ重要なのは、単一の要素を返さなければならないということです。

この 1 つの親要素で、他のすべてのレベルのネストされた要素を囲むことになります。

たとえば、親ラッパー要素を持たない兄弟要素として記述された複数の JSX 要素はトランスパイルされません。

例:

**有効な JSX:**

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**無効な JSX:**

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

# --instructions--

次の要素を出現順に含む `div` をレンダーする、新しい定数 `JSX` を定義してください。

`h1`、`p`、および 3 つの `li` アイテムを含む順序なしリスト。 要素にはそれぞれ任意のテキストを含めることができます。

**注:** こうした複数の要素をレンダーする場合、すべてを括弧で囲むことができますが、厳密に必要というわけではありません。 また、このチャレンジでは `div` タグを使用して、単一の親要素の中ですべての子要素を囲んでいます。 `div` を削除すると、JSX はトランスパイルを実行しなくなります。 このことは React コンポーネントで JSX 要素を返す場合にも適用されるので、覚えておいてください。

# --hints--

定数 `JSX` から `div` 要素を返します。

```js
assert(JSX.type === 'div');
```

`div` に 1 つ目の要素として `h1` タグを含めます。

```js
assert(JSX.props.children[0].type === 'h1');
```

`div` に 2 つ目の要素として `p` タグを含めます。

```js
assert(JSX.props.children[1].type === 'p');
```

`div` に 3 つ目の要素として `ul` タグを含めます。

```js
assert(JSX.props.children[2].type === 'ul');
```

`ul` に `li` 要素を 3 つ含めます。

```js
assert(
  JSX.props.children
    .filter((ele) => ele.type === 'ul')[0]
    .props.children.filter((ele) => ele.type === 'li').length === 3
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx

```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```
