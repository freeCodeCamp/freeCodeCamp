---
id: 5a24bbe0dba28a8d3cbd4c5f
title: HTML 要素を DOM にレンダーする
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

ここまで、JSX は JavaScript の中で判読できる HTML を記述するための便利なツールであることを説明しました。 React では、ReactDOM と呼ばれる React のレンダー API を使用して、この JSX を直接、HTML の DOM にレンダーすることができます。

ReactDOM では、DOM に React の要素をレンダーする次のような簡単なメソッドが用意されています: `ReactDOM.render(componentToRender, targetNode)`。ここで、1 つ目の引数はレンダーする React の要素またはコンポーネントで、2 つ目の引数はコンポーネントのレンダー先となる DOM ノードです。

予想されるとおり、`ReactDOM.render()` は JSX 要素宣言の後に呼び出す必要があります。変数を使用前に宣言する必要があるのと同様です。

# --instructions--

コードエディターに単純な JSX コンポーネントがあります。 `ReactDOM.render()` メソッドを使用して、このコンポーネントをページにレンダーしてください。 定義済みの JSX 要素を 1 つ目の引数として直接渡し、それらのレンダー先となる DOM ノードを `document.getElementById()` を使用して選択できます。 `id='challenge-node'` を持つ `div` を使用できます。 `JSX` 定数は変更しないでください。

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

渡された JSX 要素を、id `challenge-node` を持つ DOM ノードにレンダーします。

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
