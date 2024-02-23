---
id: 5a24c314108439a4d4036160
title: JSX で HTML クラスを定義する
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

JSX の記述に慣れてくると、HTML とどう違うのかと不思議に思うかもしれません。

ここまで、HTML と JSX はまったく同じもののように思えるかもしれません。

JSX の重要な違いの一つは、単語 `class` を使用して HTML クラスを定義することができなくなったことです。 これは、`class` が JavaScript で予約語となっているからです。 代わりに、JSX では `className` を使用します。

実際、JSX での HTML 属性とイベント参照の命名規則はすべて、キャメルケースになります。 たとえば、JSX の click イベントは `onClick` であり、`onclick` ではありません。 同様に、`onchange` は `onChange` になります。 微妙な違いですが、今後重要になりますので覚えておいてください。

# --instructions--

`myDiv` というクラスを、JSX コードで提供された `div` に適用してください。

# --hints--

定数 `JSX` から `div` 要素を返します。

```js
assert.strictEqual(JSX.type, 'div');
```

`div` に `myDiv` というクラスを持たせます。

```js
assert.strictEqual(JSX.props.className, 'myDiv');
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
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
