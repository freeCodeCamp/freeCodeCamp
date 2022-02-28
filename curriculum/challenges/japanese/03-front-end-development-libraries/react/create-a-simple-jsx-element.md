---
id: 587d7dbc367417b2b2512bb1
title: 単純な JSX 要素を作成する
challengeType: 6
forumTopicId: 301390
dashedName: create-a-simple-jsx-element
---

# --description--

React は Facebook によって作成され維持されているオープンソースビューライブラリで、 最新のウェブアプリケーションのユーザーインターフェイス (UI) をレンダーするのに適したツールです。

React では、JavaScript の中に直接 HTML を記述できるようにする、JSX と呼ばれる JavaScript の構文拡張を使用しています。 これにはいくつかの利点があります。 HTML の中で JavaScript のプログラミング機能を最大限発揮することができ、またコードが読みやすくなります。 ほとんどの場合、JSX はすでにご存知の HTML に似ていますが、いくつかの重要な違いがあります。それらの違いについてこのチャレンジ全体を通して説明します。

たとえば、JSX は JavaScript の構文の拡張であるため、実際に JSX の中に JavaScript を直接記述することができます。 それには次のように、JavaScript として扱いたいコードを中括弧で囲むだけです: `{ 'this is treated as JavaScript code' }`。 この記法は以降のチャレンジでも使用していますので、覚えておいてください。

ただし、JSX は有効な JavaScript ではないため、JSX コードを JavaScript にコンパイルする必要があります。 この処理によく使用されているツールが、Babel というトランスパイラーです。 このツールは、このチャレンジで利用できるようにすでに追加されています。 構文的に無効な JSX を記述した場合は、このチャレンジの最初のテストが失敗することがわかります。

ちなみに、チャレンジでは見えないところで `ReactDOM.render(JSX, document.getElementById('root'))` を呼び出しています。 この関数呼び出しによって、JSX が React 独自の軽量の DOM 表現に置かれます。 そして、React は独自の DOM のスナップショットを使用して最適化を行い、実際の DOM の特定部分だけを更新します。

# --instructions--

現在のコードでは、JSX を使用して `div` 要素を定数 `JSX` に割り当てています。 `div` を `h1` 要素に置き換えて、その中に `Hello JSX!` というテキストを追加してください。

# --hints--

定数 `JSX` から `h1` 要素を返します。

```js
assert(JSX.type === 'h1');
```

`h1` タグに `Hello JSX!` というテキストを含めます。

```js
assert(Enzyme.shallow(JSX).contains('Hello JSX!'));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = <div></div>;
```

# --solutions--

```jsx
const JSX = <h1>Hello JSX!</h1>;
```
