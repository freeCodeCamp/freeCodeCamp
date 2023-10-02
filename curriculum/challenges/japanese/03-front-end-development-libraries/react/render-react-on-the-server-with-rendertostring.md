---
id: 5a24c314108439a4d403618d
title: renderToString を使用して React をサーバーにレンダーする
challengeType: 6
forumTopicId: 301407
dashedName: render-react-on-the-server-with-rendertostring
---

# --description--

ここまでは、React コンポーネントをクライアントにレンダーしていました。 通常は常にこのレンダーを実行します。 しかし、React コンポーネントをサーバーにレンダーすることを目的とする用例もあります。 React は JavaScript のビューライブラリであり、Node を使用してサーバー上で JavaScript を実行できるので、こうしたレンダーが可能です。 実際、React には `renderToString()` メソッドが用意されていて、この目的に使用できます。

実世界のアプリでは、主に 2 つの理由でサーバーでのレンダーを使用する場合があります。 1 つ目として、これを行わない場合の React アプリは、初めてブラウザーに読み込まれるときに、空に近い HTML ファイルと JavaScript の大きなバンドルで構成されることになりますが、 こうした構成は、ページのコンテンツのインデックスを生成しようとしている検索エンジンにとって理想的ではなく、ページが人々に検索されにくくなるかもしれません。 サーバーで初めて HTML マークアップをレンダーしてクライアントに送信する場合、初回のページ読み込みには、検索エンジンでクロールできるページのマークアップがすべて含まれます。 2 つ目として、レンダーされる HTML はアプリ全体の JavaScript コードよりも小さく、そのため初回のページ読み込みが高速になります。 それでも React はアプリを認識し、初回の読み込み後もアプリを管理することができます。

# --instructions--

`ReactDOMServer` 上に `renderToString()` メソッドが用意されていて、ここでグローバルオブジェクトとして利用できます。 このメソッドは React 要素である引数を 1 つ受け取ります。 これを使用して `App` を文字列にレンダーしてください。

# --hints--

`ReactDOMServer.renderToString` を使用して `App` コンポーネントを文字列にレンダーします。

```js
(getUserInput) =>
  assert(
    getUserInput('index')
      .replace(/ /g, '')
      .includes('ReactDOMServer.renderToString(<App/>)') &&
      Enzyme.mount(React.createElement(App)).children().name() === 'div'
  );
```

# --seed--

## --before-user-code--

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };
```

## --after-user-code--

```jsx
ReactDOM.render(<App />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
```

# --solutions--

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line
ReactDOMServer.renderToString(<App/>);
```
