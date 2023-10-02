---
id: 5a24c314108439a4d4036161
title: JSX の自己終了タグについて
challengeType: 6
forumTopicId: 301396
dashedName: learn-about-self-closing-jsx-tags
---

# --description--

ここまで、HTML クラスの定義方法について、HTML では `class` を使用するのに対し、JSX では `className` を使用するという違いがあることを説明しました。

もう一つ、JSX が HTML と異なる重要な点として挙げられるのが、自己終了タグの概念です。

HTML では、ほとんどすべてのタグに開始タグと終了タグの両方があり (`<div></div>` など)、終了タグ名の前には常にスラッシュが付いています。 ただし、HTMLには「自己終了タグ」という特別な記法があります。これは、別のタグを開始する前に開始と終了の両方を必要としないタグです。

たとえば、改行タグは `<br>` または `<br />` と記述できますが、`<br></br>` と記述することはありません。これは内容が含まれていないためです。

JSX では、こうした規則は少し異なります。 どの JSX 要素も自己終了タグで記述でき、すべての要素をタグで終了する必要があります。 たとえば改行タグは、トランスパイルが可能な有効な JSX とするために、常に `<br />` と記述する必要があります。 一方、`<div>` は `<div />` または `<div></div>` と記述できます。 その違いは、最初の構文では `<div />` の中に何も含めることができないということです。 以降のチャレンジでは、この構文が React コンポーネントをレンダーする際に便利なことがわかります。

# --instructions--

コードエディタのエラーを修正して、有効な JSX として正しくトランスパイルされるようにしてください。 内容は変更しないでください。必要な箇所でタグを終了するだけです。

# --hints--

定数 `JSX` から `div` 要素を返します。

```js
assert.strictEqual(JSX.type, 'div');
```

`div` に `br` タグを含めます。

```js
assert(Enzyme.shallow(JSX).find('br').length === 1);
```

`div` に `hr` タグを含めます。

```js
assert(Enzyme.shallow(JSX).find('hr').length === 1);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
</div>
);
```
